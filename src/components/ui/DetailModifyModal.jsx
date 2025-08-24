import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import { MainButton } from "./Button";
import ConfirmModal from "./ConfirmModal";
import SavingModal from "./SavingModal";
import FileShowModal from "./FileShowModal";
import FailureNotificationModal from "./FailureNotificationModal";
import SuccessNotificationModal from "./SuccessNotificationModal";
import { apiHelpers } from "../../utils/api";

// 날짜/시간을 API 형식으로 변환하는 함수
const formatDateTimeForAPI = (date, time) => {
  if (!date) return "";

  // 시간이 없으면 00:00으로 설정
  const timeValue = time || "00:00";

  // 형식: YYYY-MM-DDTHH:MM:00
  return `${date}T${timeValue}:00`;
};

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  width: 90%;
  max-width: 60rem;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  overflow: hidden; /* 내부 스크롤 영역으로 위임 */
  position: relative;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.3rem;
`;

const StickyTop = styled.div`
  position: sticky;
  top: 0;
  background: #fff;
  z-index: 2;
  padding-bottom: 0rem;
`;

const ContentArea = styled.div`
  flex: 1;
  overflow-y: auto; /* 내용만 스크롤 */
  padding-top: 0.5rem;
`;

const Title = styled.h1`
  color: var(--80, #313131);
  font-family: Pretendard;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem;
  margin: 0;
`;

const Subtitle = styled.p`
  color: var(--30, #acacac);
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem;
  margin: 0.75rem 0 2rem 0;
`;

const SubtitleStrong = styled.span`
  color: var(--70, #4a4a4a);
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem;
`;

const SubtitlePrimary = styled.span`
  color: var(--MAIN, var(--Color, #68b8ea));
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem;
`;

const FormGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.78rem;
  margin-bottom: 2rem;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr; /* 한 줄에 하나의 항목만 */
  row-gap: 1.78rem; /* 상하 간격 유지 */
  column-gap: 0; /* 좌우 간격 제거 */
`;

const FormField = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`;

const Label = styled.label`
  font-family: "Pretendard", sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  color: #313131;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  min-width: 5rem;

  &::after {
    content: ${({ $showMark }) => ($showMark ? '"*"' : '""')};
    color: #68b8ea;
  }
`;

const Input = styled.input`
  display: flex;
  width: 34.6875rem;
  padding: 0.625rem 0.9375rem;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.625rem;
  border: 1px solid ${(props) => (props.$highlighted ? "#68b8ea" : "#ddd")};
  background: ${(props) => (props.$highlighted ? "#e6f6ff" : "#fff")};
  font-family: "Pretendard", sans-serif;
  font-size: 0.875rem;
  outline: none;

  &:focus {
    border: 1px solid #68b8ea;
    background: #e6f6ff;
  }

  &:disabled {
    background: #f5f5f5;
    color: #666;
  }
`;

const Select = styled.select`
  display: flex;
  width: 34.6875rem;
  padding: 0.625rem 0.9375rem;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.625rem;
  border: 1px solid ${(props) => (props.$highlighted ? "#68b8ea" : "#ddd")};
  background: ${(props) => (props.$highlighted ? "#e6f6ff" : "#fff")};
  font-family: "Pretendard", sans-serif;
  font-size: 0.875rem;
  outline: none;

  &:focus {
    border: 1px solid #68b8ea;
    background: #e6f6ff;
  }

  &:disabled {
    background: #f5f5f5;
    color: #666;
  }
`;

const DateTimeGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const HalfInput = styled(Input)`
  width: 17rem;
`;

const TimePickerBox = styled.div`
  .react-time-picker {
    display: inline-flex;
    width: 17rem;
    height: 2.625rem;
    border-radius: 0.625rem;
    border: 1px solid #ddd;
    background: #fff;
    font-family: "Pretendard", sans-serif;
    font-size: 0.875rem;
    outline: none;
    padding: 0.125rem 0.5rem;
  }

  .react-time-picker__wrapper {
    border: none;
  }

  .react-time-picker:focus-within {
    border: 1px solid #68b8ea;
    background: #e6f6ff;
  }
`;

// RecordDetailPage의 미리보기 레이아웃 복제
const NewAttachmentsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: flex-start;
  width: 34.6875rem;
`;

const AttachmentPreview = styled.div`
  width: 16rem;
  height: 12rem;
  border-radius: 0.5rem;
  background: #f5f5f5;
  border: 1px solid #e0e0e0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const AudioIcon = styled.div`
  font-size: 3rem;
  color: #4a4a4a;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const EmptyText = styled.div`
  color: #acacac;
  font-family: Pretendard;
  font-size: 0.875rem;
`;

// (reverted) No fixed grid and wrappers; back to fluid flex layout

const TextArea = styled.textarea`
  display: flex;
  width: 34.6875rem;
  padding: 0.625rem 0.9375rem;
  align-items: flex-start;
  gap: 0.625rem;
  border-radius: 0.625rem;
  border: 1px solid ${(props) => (props.$highlighted ? "#68b8ea" : "#ddd")};
  background: ${(props) => (props.$highlighted ? "#e6f6ff" : "#fff")};
  font-family: "Pretendard", sans-serif;
  font-size: 0.875rem;
  outline: none;
  resize: vertical;
  min-height: 4rem;

  &:focus {
    border: 1px solid #68b8ea;
    background: #e6f6ff;
  }

  &:disabled {
    background: #f5f5f5;
    color: #666;
  }
`;

const SeverityContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const SeverityButton = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 1rem;
  background: ${(props) => {
    if (props.selected) {
      return props.$isHighSeverity ? "#FF6D6D" : "#4a4a4a";
    }
    return "white";
  }};
  color: ${(props) => (props.selected ? "white" : "#666")};
  font-family: "Pretendard", sans-serif;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: #4a4a4a;
  }
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: center;
  flex: 1;
`;

const Tag = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  background: #4a4a4a;
  border-radius: 1rem;
  font-family: "Pretendard", sans-serif;
  font-size: 0.75rem;
  color: white;
  position: relative;

  &:hover .remove-btn {
    opacity: 1;
  }
`;

const RemoveButton = styled.button`
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
  background: #4a4a4a;
  border: none;
  color: white;
  font-size: 0.875rem;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.2s;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;

  &:hover {
    background: #333333;
  }
`;

const AddButton = styled.button`
  background: none;
  border: none;
  color: #7a7a7a;
  font-size: 1rem;
  cursor: pointer;
  padding: 0.25rem;

  &:hover {
    color: #7a7a7a;
  }
`;

const AddInput = styled.input`
  padding: 0.5rem 0.75rem;
  border: 1px solid #e9e9e9;
  border-radius: 1.875rem;
  background: #f2f2f2;
  font-family: "Pretendard", sans-serif;
  font-size: 0.75rem;
  outline: none;
  color: #313131;
  min-width: 4rem;
  max-width: 20rem;
  width: ${({ $widthCh }) => ($widthCh ? `${$widthCh}ch` : "8rem")};

  &:focus {
    border-color: #7a7a7a;
    background: #f2f2f2;
  }
`;

const WarningText = styled.div`
  color: #a9a9a9;
  text-align: center;
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2.5rem;
  margin: 2rem 0 0rem 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 0.7rem;
`;

const severityMap = {
  0: "낮음",
  1: "보통",
  2: "높음",
};

// 카테고리 매핑 (영어 -> 한국어)
const categoryMap = {
  VERBAL_ABUSE: "언어폭력",
  PHYSICAL_ABUSE: "신체폭력",
  SEXUAL_HARASSMENT: "성희롱",
  SEXUAL_VIOLENCE: "성폭력",
  DISCRIMINATION: "차별행위",
  OSTRACISM: "따돌림",
  BULLYING: "괴롭힘",
  STALKING: "스토킹",
  ETC: "기타",
};

const CategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const CategoryButton = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 1rem;
  background: ${(props) => (props.selected ? "#4a4a4a" : "white")};
  color: ${(props) => (props.selected ? "white" : "#666")};
  font-family: "Pretendard", sans-serif;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: #4a4a4a;
  }
`;

// 카테고리는 단일 선택만 가능 (API에서 category: string 형태로 처리)
const PREDEFINED_CATEGORIES = [
  "언어폭력",
  "신체폭력",
  "성희롱",
  "성폭력",
  "차별행위",
  "따돌림",
  "괴롭힘",
  "스토킹",
  "기타",
];

// 카테고리 매핑 함수 (영어 -> 한국어)
const mapCategoryToKorean = (englishCategory) => {
  return categoryMap[englishCategory] || englishCategory;
};

// 폴더 목록 옵션을 불러와 선택할 수 있도록 유지
// 서버 응답은 { drawer_id, name } 형태라고 가정

// toDateTimeLocal 함수 제거됨 - 더 이상 사용하지 않음

export default function DetailModifyModal({
  data,
  attachments,
  messageAttachments,
  onClose,
}) {
  const MAX_ATTACHMENTS = 10; // 첨부 최대 개수
  const MAX_TOTAL_SIZE = 300 * 1024 * 1024; // 총합 300MB (바이트 단위)
  const initialLocal = ""; // occurred_at은 더 이상 전달받지 않으므로 빈 값으로 설정
  const initialDate = initialLocal ? initialLocal.split("T")[0] : "";
  const initialTime = initialLocal
    ? (initialLocal.split("T")[1] || "").slice(0, 5)
    : "";

  // attachments와 messageAttachments를 evidences 형태로 변환
  const convertAttachmentsToEvidences = (
    attachments,
    messageAttachments = []
  ) => {
    console.log("DetailModifyModal - convertAttachmentsToEvidences 호출:", {
      attachments,
      messageAttachments,
    });

    const allAttachments = [
      ...(attachments || []),
      ...(messageAttachments || []),
    ];

    if (allAttachments.length === 0) {
      console.log(
        "DetailModifyModal - attachments와 messageAttachments가 없음"
      );
      return [];
    }

    const converted = allAttachments.map((att) => ({
      filename: att.filename || att.name,
      type: att.type, // "IMAGE" | "VIDEO" | "AUDIO"
      url: att.previewUrl, // S3 presigned URL
      s3Key: att.s3Key,
      mimeType: att.mimeType,
      size: att.size,
    }));

    console.log("DetailModifyModal - 변환된 evidences:", converted);
    return converted;
  };

  const initialEvidences =
    data.evidences ||
    data.evidence ||
    convertAttachmentsToEvidences(attachments, messageAttachments);
  console.log("DetailModifyModal - 초기 evidences 설정:", {
    dataEvidences: data.evidences,
    dataEvidence: data.evidence,
    convertedAttachments: convertAttachmentsToEvidences(
      attachments,
      messageAttachments
    ),
    finalEvidences: initialEvidences,
    messageAttachmentsCount: messageAttachments?.length || 0,
  });

  const [recordData, setRecordData] = useState({
    title: data.record_detail?.title || data.title || "",
    assailant: data.record_detail?.assailant || data.assailant || [],
    severity: data.record_detail?.severity || data.severity || null,
    occurred_at: "", // occurred_at은 더 이상 전달받지 않으므로 빈 값으로 설정
    location: data.record_detail?.location || data.location || "",
    content: data.record_detail?.content || data.content || "",
    category: mapCategoryToKorean(
      data.record_detail?.category || data.category || ""
    ),
    drawer_id: data.record_detail?.drawer_id || data.drawer_id || null,
    evidences: initialEvidences,
    witness: data.record_detail?.witness || data.witness || [],
    created_at: data.record_detail?.created_at || data.created_at || "",
  });

  // Refs for required fields
  const titleRef = useRef(null);
  const categoryRef = useRef(null);
  const assailantRef = useRef(null);
  const severityRef = useRef(null);
  const occurredAtRef = useRef(null);
  const locationRef = useRef(null);
  const contentRef = useRef(null);
  const drawersRef = useRef(null);

  const [occurDate, setOccurDate] = useState(initialDate);
  const [occurTime, setOccurTime] = useState(initialTime);
  // 파일 미리보기 모달
  const [showFileModal, setShowFileModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const [addingTag, setAddingTag] = useState({
    field: null,
    value: "",
  });

  const [editingNewFolder, setEditingNewFolder] = useState(false);
  const [newFolderText, setNewFolderText] = useState("새로운 폴더 입력");
  const [highlightedFields, setHighlightedFields] = useState(new Set());
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSavingModal, setShowSavingModal] = useState(false);
  const [showFailureModal, setShowFailureModal] = useState(false);
  const [failureMessage, setFailureMessage] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // 폴더 옵션 로드 (data.drawers가 객체 배열이면 그대로 사용, 아니면 목록 API 호출)
  const [drawerOptions, setDrawerOptions] = useState([]);

  useEffect(() => {
    const normalizeFromData = () => {
      const raw = data.drawers || [];
      if (Array.isArray(raw) && raw.length > 0) {
        // 객체 배열 형태: { drawer_id, name }
        if (typeof raw[0] === "object") {
          const mapped = raw
            .filter((d) => d && (d.drawer_id || d.id))
            .map((d) => ({
              drawer_id: d.drawer_id ?? d.id,
              name: d.name ?? d.drawer ?? "",
            }));
          return mapped;
        }
      }
      return null;
    };

    const init = async () => {
      const fromData = normalizeFromData();
      if (fromData) {
        setDrawerOptions(fromData);
        return;
      }
      try {
        const resp = await apiHelpers.getDrawersList();
        const list = resp?.data?.drawers || [];
        const mapped = (list || []).map((d) => ({
          drawer_id: d.drawer_id,
          name: d.name,
        }));
        setDrawerOptions(mapped);
      } catch {
        setDrawerOptions([]);
      }
    };

    init();
  }, [data]);

  const handleSeverityChange = (severity) => {
    setRecordData((prev) => ({ ...prev, severity }));
  };

  const handleAddTag = (field) => {
    setAddingTag({ field, value: "" });
  };

  const handleTagInputKeyPress = async (e) => {
    if (e.key === "Enter" && addingTag.value.trim()) {
      if (addingTag.field === "drawer") {
        // 새로운 폴더 생성
        try {
          const response = await apiHelpers.createDrawer(
            addingTag.value.trim()
          );
          if (response.isSuccess) {
            // 새로 생성된 폴더를 옵션에 추가하고 선택
            const newDrawer = {
              drawer_id: response.data.drawer_id,
              name: response.data.name,
            };
            setDrawerOptions((prev) => [...prev, newDrawer]);
            setRecordData((prev) => ({
              ...prev,
              drawer_id: newDrawer.drawer_id,
            }));
            setAddingTag({ field: null, value: "" });
          } else {
            throw new Error(response.message || "폴더 생성에 실패했습니다.");
          }
        } catch (error) {
          console.error("폴더 생성 중 오류:", error);
          window.handleApiError(error, "새 폴더 생성에 실패했습니다.");
        }
      } else {
        // 기존 배열 필드 처리 (assailant, witness)
        setRecordData((prev) => ({
          ...prev,
          [addingTag.field]: [...prev[addingTag.field], addingTag.value.trim()],
        }));
        setAddingTag({ field: null, value: "" });
      }
    }
  };

  const handleRemoveTag = (field, index) => {
    setRecordData((prev) => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index),
    }));
  };

  const validateRequiredFields = () => {
    const requiredFields = new Set();

    if (!recordData.title?.trim()) requiredFields.add("title");
    if (!recordData.category?.trim()) requiredFields.add("category");
    if (!recordData.assailant?.length) requiredFields.add("assailant");
    if (recordData.severity === null || recordData.severity === undefined)
      requiredFields.add("severity");
    if (!recordData.occurred_at) requiredFields.add("occurred_at");
    if (!recordData.location?.trim()) requiredFields.add("location");
    if (!recordData.content?.trim()) requiredFields.add("content");
    if (!recordData.drawer_id) requiredFields.add("drawer");

    return requiredFields;
  };

  const clearHighlight = (fieldName) => {
    setHighlightedFields((prev) => {
      const newSet = new Set(prev);
      newSet.delete(fieldName);
      return newSet;
    });
  };

  const scrollToFirstMissingField = (missingFields) => {
    const fieldOrder = [
      "title",
      "category",
      "assailant",
      "severity",
      "occurred_at",
      "location",
      "content",
      "drawer",
    ];

    for (const field of fieldOrder) {
      if (missingFields.has(field)) {
        const refMap = {
          title: titleRef,
          category: categoryRef,
          assailant: assailantRef,
          severity: severityRef,
          occurred_at: occurredAtRef,
          location: locationRef,
          content: contentRef,
          drawer: drawersRef,
        };

        const targetRef = refMap[field];
        if (targetRef?.current) {
          // Smooth scroll to the field
          targetRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });

          // Focus on the field after a short delay
          setTimeout(() => {
            if (
              field === "title" ||
              field === "location" ||
              field === "content"
            ) {
              targetRef.current.focus();
            }
          }, 500);

          break; // Only scroll to the first missing field
        }
      }
    }
  };

  const handleSubmit = () => {
    const missingFields = validateRequiredFields();

    if (missingFields.size > 0) {
      setHighlightedFields(missingFields);
      scrollToFirstMissingField(missingFields);
      return;
    }

    setShowConfirmModal(true);
  };

  const handleConfirmSubmit = async () => {
    setShowConfirmModal(false);
    setShowSavingModal(true);

    try {
      // drawer_id를 drawer_name으로 변환
      const selectedDrawer = drawerOptions.find(
        (drawer) => drawer.drawer_id === recordData.drawer_id
      );
      const drawerName = selectedDrawer
        ? selectedDrawer.name
        : recordData.drawer_id;

      const requestData = {
        record_id: data.record_id,
        title: recordData.title,
        category: recordData.category || "",
        content: recordData.content,
        severity: recordData.severity,
        location: recordData.location,
        // created_at은 더 이상 전송하지 않음
        occurred_at: recordData.occurred_at || "",
        assailant: recordData.assailant || [],
        witness: recordData.witness || [],
        drawer: drawerName || null,
      };

      // 20초 타임아웃 설정
      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(
          () => reject(new Error("요청 시간이 초과되었습니다.")),
          20000
        );
      });

      const apiPromise = apiHelpers.saveRecord(requestData);

      const responseData = await Promise.race([apiPromise, timeoutPromise]);

      if (responseData.isSuccess) {
        // 성공 시 메인페이지로 이동하면서 성공 상태 전달
        if (window.navigation && window.navigation.navigateToMain) {
          // URL 파라미터를 통해 성공 상태 전달
          const currentUrl = window.location.pathname;
          const newUrl = `${currentUrl}?showSuccessModal=true`;
          window.history.pushState({}, '', newUrl);
          window.navigation.navigateToMain();
        }
      } else {
        throw new Error(responseData.message || "저장 실패");
      }
    } catch (error) {
      // 실패 시 에러 메시지 설정
      const errorMessage = error.message || "저장 중 오류가 발생했습니다.";
      setFailureMessage(errorMessage);
      setShowFailureModal(true);
    } finally {
      setShowSavingModal(false);
    }
  };

  const handleDateChange = (value) => {
    setOccurDate(value);
    setRecordData((prev) => ({
      ...prev,
      occurred_at:
        value && occurTime
          ? formatDateTimeForAPI(value, occurTime)
          : value
          ? formatDateTimeForAPI(value, "00:00")
          : "",
    }));
  };

  const handleTimeChange = (value) => {
    const time = value || ""; // value can be null
    setOccurTime(time);
    setRecordData((prev) => ({
      ...prev,
      occurred_at:
        occurDate && time
          ? formatDateTimeForAPI(occurDate, time)
          : occurDate
          ? formatDateTimeForAPI(occurDate, "00:00")
          : "",
    }));
  };

  const handleFileClick = (evidence) => {
    console.log("DetailModifyModal - handleFileClick 호출:", evidence);
    setSelectedFile({
      filename: evidence.filename,
      type: evidence.type,
      url: evidence.url, // previewUrl 추가
      mimeType: evidence.mimeType, // mimeType 추가
    });
    setShowFileModal(true);
  };

  const handleFileModalClose = () => {
    setShowFileModal(false);
    setSelectedFile(null);
  };

  // const clearAllLocalEvidences = () => {
  //   setLocalEvidences((prev) => {
  //     prev.forEach((p) => p.previewUrl && URL.revokeObjectURL(p.previewUrl));
  //     return [];
  //   });
  //   setFormData((prev) => ({
  //     ...prev,
  //     evidences: prev.evidences.filter(
  //       (ev) => !String(ev.url || "").startsWith("blob:")
  //     ),
  //   }));
  // };

  return (
    <ModalOverlay>
      <ModalContainer>
        <StickyTop>
          <Header>
            <Title>상세 내용</Title>
          </Header>

          <Subtitle>
            작성하신 내용은 법적으로 의미 있는 증거가 될 수 있으므로 ‘서랍’에
            넣으면 <SubtitleStrong>더 이상 수정할 수 없어요.</SubtitleStrong>
            <br />
            빠진 내용은 없는지, 사실과 다른 부분은 없는지 천천히 확인해 주세요.
            <br />
            <SubtitlePrimary>
              필요하다면 지금 바로 수정해 주세요.
            </SubtitlePrimary>
          </Subtitle>
        </StickyTop>

        <ContentArea>
          <FormGrid>
            <FormRow>
              <FormField>
                <Label $showMark={!recordData.title}>제목</Label>
                <Input
                  ref={titleRef}
                  value={recordData.title}
                  $highlighted={highlightedFields.has("title")}
                  onChange={(e) => {
                    setRecordData((prev) => ({
                      ...prev,
                      title: e.target.value,
                    }));
                    clearHighlight("title");
                  }}
                />
              </FormField>

              <FormField>
                <Label $showMark={!recordData.category}>카테고리</Label>
                <CategoryContainer
                  ref={categoryRef}
                  style={{
                    border: highlightedFields.has("category")
                      ? "1px solid #68b8ea"
                      : "none",
                    borderRadius: highlightedFields.has("category")
                      ? "0.625rem"
                      : "0",
                    background: highlightedFields.has("category")
                      ? "#e6f6ff"
                      : "transparent",
                    padding: highlightedFields.has("category") ? "0.5rem" : "0",
                  }}
                >
                  {PREDEFINED_CATEGORIES.map((cat) => {
                    const selected = (recordData.category || "") === cat;
                    return (
                      <CategoryButton
                        key={cat}
                        selected={selected}
                        onClick={() => {
                          // 카테고리는 단일 선택: 이미 선택된 카테고리를 클릭하면 해제, 다른 카테고리를 클릭하면 선택
                          setRecordData((prev) => ({
                            ...prev,
                            category: selected ? "" : cat,
                          }));
                          clearHighlight("category");
                        }}
                      >
                        {cat}
                      </CategoryButton>
                    );
                  })}
                </CategoryContainer>
              </FormField>
            </FormRow>

            <FormRow>
              <FormField>
                <Label
                  $showMark={
                    !recordData.assailant || recordData.assailant.length === 0
                  }
                >
                  가해자
                </Label>
                <TagContainer
                  ref={assailantRef}
                  style={{
                    border: highlightedFields.has("assailant")
                      ? "1px solid #68b8ea"
                      : "none",
                    borderRadius: highlightedFields.has("assailant")
                      ? "0.625rem"
                      : "0",
                    background: highlightedFields.has("assailant")
                      ? "#e6f6ff"
                      : "transparent",
                    padding: highlightedFields.has("assailant")
                      ? "0.5rem"
                      : "0",
                  }}
                >
                  {recordData.assailant.length > 0 &&
                    recordData.assailant.map((item, index) => (
                      <Tag key={index}>
                        {item}
                        <RemoveButton
                          className="remove-btn"
                          onClick={() => {
                            handleRemoveTag("assailant", index);
                            clearHighlight("assailant");
                          }}
                        >
                          ×
                        </RemoveButton>
                      </Tag>
                    ))}
                  {addingTag.field === "assailant" ? (
                    <AddInput
                      $widthCh={Math.min(
                        Math.max((addingTag.value?.length || 0) + 1, 6),
                        30
                      )}
                      value={addingTag.value}
                      onChange={(e) =>
                        setAddingTag((prev) => ({
                          ...prev,
                          value: e.target.value,
                        }))
                      }
                      onKeyPress={(e) => {
                        handleTagInputKeyPress(e);
                        clearHighlight("assailant");
                      }}
                      onBlur={() => setAddingTag({ field: null, value: "" })}
                      autoFocus
                      placeholder="가해자 입력"
                    />
                  ) : (
                    <AddButton
                      onClick={() => {
                        handleAddTag("assailant");
                        clearHighlight("assailant");
                      }}
                    >
                      +
                    </AddButton>
                  )}
                </TagContainer>
              </FormField>

              <FormField>
                <Label $showMark={!recordData.drawer_id}>저장 폴더</Label>
                <TagContainer
                  ref={drawersRef}
                  style={{
                    border: highlightedFields.has("drawer")
                      ? "1px solid #68b8ea"
                      : "none",
                    borderRadius: highlightedFields.has("drawer")
                      ? "0.625rem"
                      : "0",
                    background: highlightedFields.has("drawer")
                      ? "#e6f6ff"
                      : "transparent",
                    padding: highlightedFields.has("drawer") ? "0.5rem" : "0",
                  }}
                >
                  {/* 기존 서랍들이 있는 경우에만 표시 */}
                  {(drawerOptions || []).length > 0 &&
                    (drawerOptions || []).map((drawer) => {
                      const selected =
                        recordData.drawer_id === drawer.drawer_id;
                      return (
                        <SeverityButton
                          key={drawer.drawer_id}
                          selected={selected}
                          onClick={() => {
                            setRecordData((prev) => ({
                              ...prev,
                              drawer_id: selected ? null : drawer.drawer_id,
                            }));
                            clearHighlight("drawer");
                          }}
                        >
                          {drawer.name}
                        </SeverityButton>
                      );
                    })}

                  {/* 새로운 폴더 입력 태그 */}
                  {editingNewFolder ? (
                    <AddInput
                      $widthCh={Math.min(
                        Math.max((newFolderText?.length || 0) + 1, 8),
                        30
                      )}
                      value={newFolderText}
                      onChange={(e) => setNewFolderText(e.target.value)}
                      onKeyPress={(e) => {
                        if (e.key === "Enter" && newFolderText.trim()) {
                          setEditingNewFolder(false);
                          setRecordData((prev) => ({
                            ...prev,
                            drawer_id: newFolderText.trim(),
                          }));
                          clearHighlight("drawer");
                        }
                      }}
                      onBlur={() => {
                        setEditingNewFolder(false);
                        if (newFolderText.trim()) {
                          setRecordData((prev) => ({
                            ...prev,
                            drawer_id: newFolderText.trim(),
                          }));
                          clearHighlight("drawer");
                        }
                      }}
                      autoFocus
                    />
                  ) : (
                    <SeverityButton
                      selected={recordData.drawer_id === newFolderText}
                      onClick={() => {
                        setRecordData((prev) => ({
                          ...prev,
                          drawer_id:
                            recordData.drawer_id === newFolderText
                              ? null
                              : newFolderText,
                        }));
                        clearHighlight("drawer");
                      }}
                      onDoubleClick={() => setEditingNewFolder(true)}
                      style={{ position: "relative" }}
                    >
                      {newFolderText}
                      <input
                        type="text"
                        value={newFolderText}
                        onChange={(e) => setNewFolderText(e.target.value)}
                        onKeyPress={(e) => {
                          if (e.key === "Enter" && newFolderText.trim()) {
                            setEditingNewFolder(false);
                          }
                        }}
                        onBlur={() => setEditingNewFolder(false)}
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          background: "transparent",
                          border: "none",
                          outline: "none",
                          color: "inherit",
                          fontFamily: "inherit",
                          fontSize: "inherit",
                          cursor: "text",
                          opacity: 0,
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setEditingNewFolder(true);
                        }}
                      />
                    </SeverityButton>
                  )}
                </TagContainer>
              </FormField>
            </FormRow>

            <FormRow>
              <FormField>
                <Label
                  $showMark={
                    recordData.severity === null ||
                    recordData.severity === undefined
                  }
                >
                  심각도
                </Label>
                <SeverityContainer
                  ref={severityRef}
                  style={{
                    border: highlightedFields.has("severity")
                      ? "1px solid #68b8ea"
                      : "none",
                    borderRadius: highlightedFields.has("severity")
                      ? "0.625rem"
                      : "0",
                    background: highlightedFields.has("severity")
                      ? "#e6f6ff"
                      : "transparent",
                    padding: highlightedFields.has("severity") ? "0.5rem" : "0",
                  }}
                >
                  {[0, 1, 2].map((level) => (
                    <SeverityButton
                      key={level}
                      selected={recordData.severity === level}
                      $isHighSeverity={level === 2}
                      onClick={() => {
                        handleSeverityChange(level);
                        clearHighlight("severity");
                      }}
                    >
                      {severityMap[level]}
                    </SeverityButton>
                  ))}
                  {/* 심각도 선택 안내 텍스트 제거됨 */}
                </SeverityContainer>
              </FormField>
            </FormRow>

            <FormRow>
              <FormField>
                <Label $showMark={!recordData.occurred_at}>발생 일시</Label>
                <DateTimeGroup
                  ref={occurredAtRef}
                  style={{
                    border: highlightedFields.has("occurred_at")
                      ? "1px solid #68b8ea"
                      : "none",
                    borderRadius: highlightedFields.has("occurred_at")
                      ? "0.625rem"
                      : "0",
                    background: highlightedFields.has("occurred_at")
                      ? "#e6f6ff"
                      : "transparent",
                    padding: highlightedFields.has("occurred_at")
                      ? "0.5rem"
                      : "0",
                  }}
                >
                  <HalfInput
                    type="date"
                    value={occurDate}
                    max="9999-12-31"
                    onChange={(e) => {
                      handleDateChange(e.target.value);
                      clearHighlight("occurred_at");
                    }}
                  />
                  <TimePickerBox>
                    <TimePicker
                      onChange={(value) => {
                        handleTimeChange(value);
                        clearHighlight("occurred_at");
                      }}
                      value={occurTime}
                      format="HH:mm"
                      disableClock
                      clearIcon={null}
                    />
                  </TimePickerBox>
                </DateTimeGroup>
              </FormField>

              <FormField>
                <Label $showMark={false}>목격자</Label>
                <TagContainer>
                  {recordData.witness.length > 0 &&
                    recordData.witness.map((item, index) => (
                      <Tag key={index}>
                        {item}
                        <RemoveButton
                          className="remove-btn"
                          onClick={() => handleRemoveTag("witness", index)}
                        >
                          ×
                        </RemoveButton>
                      </Tag>
                    ))}
                  {addingTag.field === "witness" ? (
                    <AddInput
                      $widthCh={Math.min(
                        Math.max((addingTag.value?.length || 0) + 1, 6),
                        30
                      )}
                      value={addingTag.value}
                      onChange={(e) =>
                        setAddingTag((prev) => ({
                          ...prev,
                          value: e.target.value,
                        }))
                      }
                      onKeyPress={handleTagInputKeyPress}
                      onBlur={() => setAddingTag({ field: null, value: "" })}
                      autoFocus
                      placeholder="목격자 입력"
                    />
                  ) : (
                    <AddButton onClick={() => handleAddTag("witness")}>
                      +
                    </AddButton>
                  )}
                </TagContainer>
              </FormField>
            </FormRow>

            <FormRow>
              <FormField>
                <Label $showMark={!recordData.location}>발생 장소</Label>
                <Input
                  ref={locationRef}
                  value={recordData.location}
                  $highlighted={highlightedFields.has("location")}
                  onChange={(e) => {
                    setRecordData((prev) => ({
                      ...prev,
                      location: e.target.value,
                    }));
                    clearHighlight("location");
                  }}
                />
              </FormField>
            </FormRow>

            <FormRow>
              <FormField>
                <Label $showMark={false}>발생 정황</Label>
                <TextArea
                  ref={contentRef}
                  value={recordData.content}
                  $highlighted={highlightedFields.has("content")}
                  onChange={(e) => {
                    setRecordData((prev) => ({
                      ...prev,
                      content: e.target.value,
                    }));
                    clearHighlight("content");
                  }}
                />
              </FormField>
            </FormRow>

            {/* 자료: 마지막 행 */}
            <FormRow>
              <FormField>
                <Label $showMark={false}>자료</Label>
                <NewAttachmentsContainer>
                  {(() => {
                    console.log("DetailModifyModal - 자료 필드 렌더링:", {
                      recordDataEvidences: recordData?.evidences,
                      evidencesLength: (recordData?.evidences || []).length,
                    });

                    if ((recordData?.evidences || []).length === 0) {
                      return <EmptyText>첨부 파일 없음</EmptyText>;
                    }

                    return (recordData?.evidences || []).map(
                      (evidence, index) => {
                        const t = String(evidence.type || "").toLowerCase();
                        const isImage = t.includes("image") || t === "photo";
                        const isVideo = t.includes("video");
                        const isAudio = t.includes("audio");
                        // S3 presigned URL 우선 사용, fallback으로 기존 URL 사용
                        const src = evidence.url || evidence.s3Url || "";

                        console.log("DetailModifyModal - evidence 렌더링:", {
                          index,
                          evidence,
                          type: t,
                          isImage,
                          isVideo,
                          isAudio,
                          src,
                        });

                        return (
                          <AttachmentPreview
                            key={index}
                            onClick={() => handleFileClick(evidence)}
                            style={{ cursor: "pointer" }}
                          >
                            {isImage && (
                              <PreviewImage src={src} alt={evidence.filename} />
                            )}
                            {isVideo && (
                              <video
                                src={src}
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  objectFit: "cover",
                                }}
                              />
                            )}
                            {isAudio && <AudioIcon>🎵</AudioIcon>}
                          </AttachmentPreview>
                        );
                      }
                    );
                  })()}
                </NewAttachmentsContainer>
              </FormField>
            </FormRow>
          </FormGrid>

          <WarningText>
            공정한 절차를 위해 기록은 사실에 기반해야 하며, 허위 기록은 신뢰와
            법적 보호를 어렵게 할 수 있습니다.
          </WarningText>

          <ButtonContainer>
            <MainButton variant="secondary" onClick={onClose}>
              대화로 돌아가기
            </MainButton>
            <MainButton variant="primary" onClick={handleSubmit}>
              저장하기
            </MainButton>
          </ButtonContainer>
        </ContentArea>
      </ModalContainer>

      <ConfirmModal
        isOpen={showConfirmModal}
        onClose={() => setShowConfirmModal(false)}
        onConfirm={handleConfirmSubmit}
        title="정말로 저장할까요?"
        subtitle="서랍에 들어가면 수정이 불가능해요"
      />

      <SavingModal isOpen={showSavingModal} />

      <FailureNotificationModal
        isOpen={showFailureModal}
        onClose={() => setShowFailureModal(false)}
        message={failureMessage}
      />

      <SuccessNotificationModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        title="저장 완료"
        message="기록이 성공적으로 저장되었습니다."
      />

      <FileShowModal
        isOpen={showFileModal}
        onClose={handleFileModalClose}
        file={selectedFile}
        fileUrl={
          selectedFile?.url ||
          (selectedFile &&
            recordData?.evidences?.find(
              (e) => e.filename === selectedFile.filename
            )?.url) ||
          ""
        }
      />
    </ModalOverlay>
  );
}

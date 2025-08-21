import styled from "styled-components";
import { useState, useRef } from "react";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import AttachmentChip from "./AttachmentChip";
import { MainButton } from "./Button";
import ConfirmModal from "./ConfirmModal";
import SavingModal from "./SavingModal";
import { evidenceClient } from "../../utils/evidence";

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

const AttachmentsBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: center;
`;

const FileInput = styled.input`
  display: none;
`;

const AttachButton = styled.button`
  padding: 0.5rem 0.75rem;
  border: 1px solid #e0e0e0;
  border-radius: 1rem;
  background: #ffffff;
  color: #68b8ea;
  font-family: "Pretendard", sans-serif;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: #68b8ea;
  }
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

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
`;

const severityMap = {
  1: "높음",
  2: "보통",
  3: "낮음",
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

const toDateTimeLocal = (dateString) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return "";
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${year}-${month}-${day}T${hours}:${minutes}`;
};

export default function DetailModifyModal({
  data,
  attachments,
  onClose,
  onSubmit,
}) {
  const MAX_ATTACHMENTS = 10; // 첨부 최대 개수
  const MAX_TOTAL_SIZE = 300 * 1024 * 1024; // 총합 300MB (바이트 단위)
  const initialLocal = toDateTimeLocal(data.occurred_at);
  const initialDate = initialLocal ? initialLocal.split("T")[0] : "";
  const initialTime = initialLocal
    ? (initialLocal.split("T")[1] || "").slice(0, 5)
    : "";

  const [formData, setFormData] = useState({
    title: data.title || "",
    assailant: data.assailant || [],
    severity: data.severity || 1,
    occurred_at: initialLocal,
    location: data.location || "",
    content: data.content || "",
    categories: data.categories || data.category || [],
    drawers: data.drawers || [],
    evidences: data.evidence || data.evidences || [],
    witness: data.witness || [],
    created_at: data.created_at || "",
  });

  // Refs for required fields
  const titleRef = useRef(null);
  const categoriesRef = useRef(null);
  const assailantRef = useRef(null);
  const severityRef = useRef(null);
  const occurredAtRef = useRef(null);
  const locationRef = useRef(null);
  const contentRef = useRef(null);
  const drawersRef = useRef(null);

  const [occurDate, setOccurDate] = useState(initialDate);
  const [occurTime, setOccurTime] = useState(initialTime);
  // 채팅에서 이미 업로드된 첨부 중 유지할 s3Key 집합
  const [keptS3Keys, setKeptS3Keys] = useState(
    () => new Set((attachments || []).map((a) => a.s3Key).filter(Boolean))
  );
  // 모달에서 새로 업로드한 첨부 (즉시 업로드 결과)
  const [modalNewEvidences, setModalNewEvidences] = useState([]);
  const fileInputRef = useRef(null);

  const [addingTag, setAddingTag] = useState({
    field: null,
    value: "",
  });

  const [editingNewFolder, setEditingNewFolder] = useState(false);
  const [newFolderText, setNewFolderText] = useState("새로운 폴더 입력");
  const [highlightedFields, setHighlightedFields] = useState(new Set());
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSavingModal, setShowSavingModal] = useState(false);

  const handleSeverityChange = (severity) => {
    setFormData((prev) => ({ ...prev, severity }));
  };

  const handleAddTag = (field) => {
    setAddingTag({ field, value: "" });
  };

  const handleTagInputKeyPress = (e) => {
    if (e.key === "Enter" && addingTag.value.trim()) {
      setFormData((prev) => ({
        ...prev,
        [addingTag.field]: [...prev[addingTag.field], addingTag.value.trim()],
      }));
      setAddingTag({ field: null, value: "" });
    }
  };

  const handleRemoveTag = (field, index) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index),
    }));
  };

  const validateRequiredFields = () => {
    const requiredFields = new Set();

    if (!formData.title?.trim()) requiredFields.add("title");
    if (!formData.categories?.length) requiredFields.add("categories");
    if (!formData.assailant?.length) requiredFields.add("assailant");
    if (!formData.severity) requiredFields.add("severity");
    if (!formData.occurred_at) requiredFields.add("occurred_at");
    if (!formData.location?.trim()) requiredFields.add("location");
    if (!formData.content?.trim()) requiredFields.add("content");
    if (!formData.drawers?.length) requiredFields.add("drawers");

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
      "categories",
      "assailant",
      "severity",
      "occurred_at",
      "location",
      "content",
      "drawers",
    ];

    for (const field of fieldOrder) {
      if (missingFields.has(field)) {
        const refMap = {
          title: titleRef,
          categories: categoriesRef,
          assailant: assailantRef,
          severity: severityRef,
          occurred_at: occurredAtRef,
          location: locationRef,
          content: contentRef,
          drawers: drawersRef,
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

  const handleConfirmSubmit = () => {
    setShowConfirmModal(false);
    setShowSavingModal(true);
  };

  const handleSavingComplete = () => {
    const payload = {
      title: formData.title,
      assailant: formData.assailant,
      severity: formData.severity,
      occurred_at: formData.occurred_at ? `${formData.occurred_at}:00` : "",
      location: formData.location,
      content: formData.content,
      categories: formData.categories || [],
      drawers: formData.drawers || [],
      witness: formData.witness || [],
      created_at: formData.created_at || "",
      record_id: data.record_id,
      drawer: Array.isArray(formData.drawers) ? formData.drawers[0] || "" : "",
      keep_s3Keys: Array.from(keptS3Keys),
      modal_new_evidences: modalNewEvidences.map((m) => ({
        type: m.type,
        filename: m.filename,
        s3Key: m.s3Key,
      })),
    };
    onSubmit(payload);
    setShowSavingModal(false);
  };

  const handleDateChange = (value) => {
    setOccurDate(value);
    setFormData((prev) => ({
      ...prev,
      occurred_at:
        value && occurTime
          ? `${value}T${occurTime}`
          : value
          ? `${value}T00:00`
          : "",
    }));
  };

  const handleTimeChange = (value) => {
    const time = value || ""; // value can be null
    setOccurTime(time);
    setFormData((prev) => ({
      ...prev,
      occurred_at:
        occurDate && time
          ? `${occurDate}T${time}`
          : occurDate
          ? `${occurDate}T00:00`
          : "",
    }));
  };

  const handleFileSelect = () => {
    if (fileInputRef.current) fileInputRef.current.click();
  };

  const handleFilesChosen = async (e) => {
    const chosen = Array.from(e.target.files || []);
    if (chosen.length === 0) return;

    const allowTypes = /^(image|audio|video)\//;
    const currentCount =
      (attachments || []).filter((a) => keptS3Keys.has(a.s3Key)).length +
      modalNewEvidences.length;
    const room = Math.max(0, MAX_ATTACHMENTS - currentCount);
    const accepted = chosen
      .filter((f) => allowTypes.test(f.type))
      .slice(0, room);

    const currentTotalSize = modalNewEvidences.reduce(
      (sum, ev) => sum + (ev.size || 0),
      0
    );
    let newTotalSize = currentTotalSize;
    const filesWithinLimit = [];
    for (const file of accepted) {
      if (newTotalSize + file.size <= MAX_TOTAL_SIZE) {
        filesWithinLimit.push(file);
        newTotalSize += file.size;
      } else {
        alert(
          `파일 크기 제한을 초과했습니다. (최대 ${
            MAX_TOTAL_SIZE / (1024 * 1024)
          }MB)`
        );
        break;
      }
    }

    const prefix = `records/${data.record_id || 0}/evidence`;
    const uploaded = [];
    for (const file of filesWithinLimit) {
      try {
        const info = await evidenceClient.uploadAndGetPreview({
          prefix,
          file,
          readMinutes: 60,
        });
        uploaded.push({
          id: `${Date.now()}_${file.name}`,
          filename: info.filename,
          type: info.type, // IMAGE | VIDEO | AUDIO
          s3Key: info.s3Key,
          previewUrl: info.previewUrl,
          mimeType: info.mimeType,
          size: info.size,
        });
      } catch (err) {
        console.error("모달 첨부 업로드 실패", err);
      }
    }

    if (uploaded.length > 0) {
      setModalNewEvidences((prev) => [...prev, ...uploaded]);
    }
    e.target.value = "";
  };

  const removeLocalEvidence = (id) => {
    setModalNewEvidences((prev) => prev.filter((p) => p.id !== id));
  };

  const extractS3KeyFromUrl = (url) => {
    try {
      const u = new URL(url);
      // Try common param names first
      const byParam = u.searchParams.get("s3Key") || u.searchParams.get("key");
      if (byParam) return byParam;
      // Try to infer from path if it contains the key
      // e.g., https://s3.../records/3/evidence/uuid.ext?X-Amz-...
      const pathname = decodeURIComponent(u.pathname || "");
      const idx = pathname.indexOf("/records/");
      if (idx !== -1) {
        return pathname.slice(idx + 1); // remove leading '/'
      }
      return "";
    } catch {
      return "";
    }
  };

  const handleRemoveServerEvidence = async (item) => {
    try {
      const key = item?.s3Key || extractS3KeyFromUrl(item?.url || "");
      if (key) {
        await evidenceClient.deleteByKey(key);
      }
    } catch (err) {
      console.error("서버 증거 삭제 실패", err);
    } finally {
      setFormData((prev) => ({
        ...prev,
        evidences: (prev.evidences || []).filter((ev) => ev !== item),
      }));
    }
  };

  const removeChatAttachmentByS3Key = (s3Key) => {
    setKeptS3Keys((prev) => {
      const next = new Set(prev);
      next.delete(s3Key);
      return next;
    });
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
                <Label $showMark={!formData.title}>제목</Label>
                <Input
                  ref={titleRef}
                  value={formData.title}
                  $highlighted={highlightedFields.has("title")}
                  onChange={(e) => {
                    setFormData((prev) => ({ ...prev, title: e.target.value }));
                    clearHighlight("title");
                  }}
                />
              </FormField>

              <FormField>
                <Label
                  $showMark={
                    !formData.categories || formData.categories.length === 0
                  }
                >
                  카테고리
                </Label>
                <CategoryContainer
                  ref={categoriesRef}
                  style={{
                    border: highlightedFields.has("categories")
                      ? "1px solid #68b8ea"
                      : "none",
                    borderRadius: highlightedFields.has("categories")
                      ? "0.625rem"
                      : "0",
                    background: highlightedFields.has("categories")
                      ? "#e6f6ff"
                      : "transparent",
                    padding: highlightedFields.has("categories")
                      ? "0.5rem"
                      : "0",
                  }}
                >
                  {PREDEFINED_CATEGORIES.map((cat) => {
                    const selected = (formData.categories || []).includes(cat);
                    return (
                      <CategoryButton
                        key={cat}
                        selected={selected}
                        onClick={() => {
                          setFormData((prev) => {
                            const current = new Set(prev.categories || []);
                            if (current.has(cat)) {
                              current.delete(cat);
                            } else {
                              current.add(cat);
                            }
                            return { ...prev, categories: Array.from(current) };
                          });
                          clearHighlight("categories");
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
                    !formData.assailant || formData.assailant.length === 0
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
                  {formData.assailant.length > 0 &&
                    formData.assailant.map((item, index) => (
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
                <Label
                  $showMark={!formData.drawers || formData.drawers.length === 0}
                >
                  저장 폴더
                </Label>
                <TagContainer
                  ref={drawersRef}
                  style={{
                    border: highlightedFields.has("drawers")
                      ? "1px solid #68b8ea"
                      : "none",
                    borderRadius: highlightedFields.has("drawers")
                      ? "0.625rem"
                      : "0",
                    background: highlightedFields.has("drawers")
                      ? "#e6f6ff"
                      : "transparent",
                    padding: highlightedFields.has("drawers") ? "0.5rem" : "0",
                  }}
                >
                  {(data.drawers || []).map((folder) => {
                    const selected = (formData.drawers || []).includes(folder);
                    return (
                      <SeverityButton
                        key={folder}
                        selected={selected}
                        onClick={() => {
                          setFormData((prev) => {
                            const current = new Set(prev.drawers || []);
                            if (current.has(folder)) {
                              current.delete(folder);
                            } else {
                              current.clear(); // 기존 선택 모두 제거
                              current.add(folder); // 새로운 폴더만 선택
                            }
                            return { ...prev, drawers: Array.from(current) };
                          });
                          clearHighlight("drawers");
                        }}
                      >
                        {folder}
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
                          setFormData((prev) => {
                            const current = new Set(prev.drawers || []);
                            current.clear();
                            current.add(newFolderText.trim());
                            return { ...prev, drawers: Array.from(current) };
                          });
                          clearHighlight("drawers");
                        }
                      }}
                      onBlur={() => {
                        setEditingNewFolder(false);
                        if (newFolderText.trim()) {
                          setFormData((prev) => {
                            const current = new Set(prev.drawers || []);
                            current.clear();
                            current.add(newFolderText.trim());
                            return { ...prev, drawers: Array.from(current) };
                          });
                          clearHighlight("drawers");
                        }
                      }}
                      autoFocus
                    />
                  ) : (
                    <SeverityButton
                      selected={(formData.drawers || []).includes(
                        newFolderText
                      )}
                      onClick={() => {
                        setFormData((prev) => {
                          const current = new Set(prev.drawers || []);
                          if (current.has(newFolderText)) {
                            current.delete(newFolderText);
                          } else {
                            current.clear();
                            current.add(newFolderText);
                          }
                          return { ...prev, drawers: Array.from(current) };
                        });
                        clearHighlight("drawers");
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
                <Label $showMark={!formData.severity}>심각도</Label>
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
                  {[1, 2, 3].map((level) => (
                    <SeverityButton
                      key={level}
                      selected={formData.severity === level}
                      onClick={() => {
                        handleSeverityChange(level);
                        clearHighlight("severity");
                      }}
                    >
                      {severityMap[level]}
                    </SeverityButton>
                  ))}
                </SeverityContainer>
              </FormField>
            </FormRow>

            <FormRow>
              <FormField>
                <Label $showMark={!formData.occurred_at}>발생 일시</Label>
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
                  {formData.witness.length > 0 &&
                    formData.witness.map((item, index) => (
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
                <Label $showMark={!formData.location}>발생 장소</Label>
                <Input
                  ref={locationRef}
                  value={formData.location}
                  $highlighted={highlightedFields.has("location")}
                  onChange={(e) => {
                    setFormData((prev) => ({
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
                  value={formData.content}
                  $highlighted={highlightedFields.has("content")}
                  onChange={(e) => {
                    setFormData((prev) => ({
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
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                    flex: 1,
                  }}
                >
                  <AttachmentsBar>
                    {(formData.evidences || [])
                      .filter((ev) => !String(ev.url || "").startsWith("blob:"))
                      .map((item, index) => (
                        <AttachmentChip
                          key={`remote_${index}`}
                          name={item.filename}
                          kind={item.type}
                          previewUrl={item.url}
                          onRemove={() => handleRemoveServerEvidence(item)}
                        />
                      ))}

                    {(attachments || [])
                      .filter((att) => keptS3Keys.has(att.s3Key))
                      .map((att) => (
                        <AttachmentChip
                          key={`chat_${att.id}`}
                          name={att.filename}
                          kind={att.type}
                          previewUrl={att.previewUrl}
                          onRemove={() =>
                            removeChatAttachmentByS3Key(att.s3Key)
                          }
                        />
                      ))}

                    {modalNewEvidences.map((att) => (
                      <AttachmentChip
                        key={`modal_${att.id}`}
                        name={att.filename}
                        kind={att.type}
                        previewUrl={att.previewUrl}
                        onRemove={() => removeLocalEvidence(att.id)}
                      />
                    ))}

                    <AddButton onClick={handleFileSelect}>+</AddButton>
                  </AttachmentsBar>
                  <FileInput
                    ref={fileInputRef}
                    type="file"
                    accept="image/*,audio/*,video/*"
                    multiple
                    onChange={handleFilesChosen}
                  />
                </div>
              </FormField>
            </FormRow>
          </FormGrid>

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

      <SavingModal isOpen={showSavingModal} onDone={handleSavingComplete} />
    </ModalOverlay>
  );
}

import styled from "styled-components";
import { useState, useRef } from "react";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import AttachmentChip from "../components/ui/AttachmentChip";

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

const CloseButton = styled.button`
  display: flex;
  width: 11.25rem;
  height: 2.75rem;
  padding: 0.625rem 2.6875rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  border: 1px solid var(--10, #ddd);
  background: #fff;
  color: #313131;
  font-family: "Pretendard", sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: #4a4a4a;
  }
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
    content: ${({ showMark }) => (showMark ? '"*"' : '""')};
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

const SubmitButton = styled.button`
  display: flex;
  width: 11.25rem;
  height: 2.75rem;
  padding: 0.625rem 2.6875rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  border: 1px solid #4fb2ef;
  background: var(
    --BP-Gradation,
    radial-gradient(
      480.82% 193.78% at 131.5% -43.24%,
      #8c68e0 0%,
      #688ae0 31.38%,
      var(--Color, #68b8ea) 87.56%
    )
  );
  color: white;
  font-family: "Pretendard", sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
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

export default function DetailModifyPage({ data, onClose, onSubmit }) {
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
    category: data.category || [],
    drawers: data.drawers || [],
    evidences: data.evidence || data.evidences || [],
    witness: data.witness || [],
  });

  const [occurDate, setOccurDate] = useState(initialDate);
  const [occurTime, setOccurTime] = useState(initialTime);
  const [localEvidences, setLocalEvidences] = useState([]);
  const fileInputRef = useRef(null);

  const [addingTag, setAddingTag] = useState({
    field: null,
    value: "",
  });

  const [editingNewFolder, setEditingNewFolder] = useState(false);
  const [newFolderText, setNewFolderText] = useState("새로운 폴더 입력");
  const [highlightedFields, setHighlightedFields] = useState(new Set());

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
    if (!formData.category?.length) requiredFields.add("category");
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

  const handleSubmit = () => {
    const missingFields = validateRequiredFields();

    if (missingFields.size > 0) {
      setHighlightedFields(missingFields);
      return;
    }

    const existingEvidences = (formData.evidences || []).filter(
      (ev) => !String(ev.url || "").startsWith("blob:")
    );
    const newFiles = localEvidences.map((le) => le.file);

    const payload = {
      ...formData,
      record_id: data.record_id,
      occurred_at: formData.occurred_at ? `${formData.occurred_at}:00` : "",
      drawer: Array.isArray(formData.drawers) ? formData.drawers[0] || "" : "",
      existing_evidences: existingEvidences,
      new_files: newFiles,
    };
    onSubmit(payload);
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

  const getEvidenceType = (file) => {
    if (!file?.type) return "other";
    if (file.type.startsWith("image/")) return "image";
    if (file.type.startsWith("video/")) return "video";
    if (file.type.startsWith("audio/")) return "audio";
    return "other";
  };

  const handleFileSelect = () => {
    if (fileInputRef.current) fileInputRef.current.click();
  };

  const handleFilesChosen = (e) => {
    const chosen = Array.from(e.target.files || []);
    if (chosen.length === 0) return;
    const allowTypes = /^(image|audio|video)\//;
    const current = localEvidences.length;
    const room = Math.max(0, 5 - current);
    const accepted = chosen
      .filter((f) => allowTypes.test(f.type))
      .slice(0, room);

    const next = accepted.map((file) => ({
      id: `${Date.now()}_${file.name}`,
      file,
      previewUrl: URL.createObjectURL(file),
    }));

    setLocalEvidences((prev) => [...prev, ...next]);
    setFormData((prev) => ({
      ...prev,
      evidences: [
        ...prev.evidences,
        ...next.map((n) => ({
          filename: n.file.name,
          type: getEvidenceType(n.file),
          url: n.previewUrl,
        })),
      ],
    }));

    e.target.value = "";
  };

  const removeLocalEvidence = (id) => {
    let removedUrl = null;
    setLocalEvidences((prev) => {
      const target = prev.find((p) => p.id === id);
      if (target?.previewUrl) {
        removedUrl = target.previewUrl;
        URL.revokeObjectURL(target.previewUrl);
      }
      return prev.filter((p) => p.id !== id);
    });
    setFormData((prev) => ({
      ...prev,
      evidences: prev.evidences.filter((ev) => ev.url !== removedUrl),
    }));
  };

  const removeServerEvidenceByUrl = (targetUrl) => {
    setFormData((prev) => ({
      ...prev,
      evidences: (prev.evidences || []).filter((ev) => ev.url !== targetUrl),
    }));
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
                <Label showMark={!formData.title}>제목</Label>
                <Input
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
                  showMark={
                    !formData.category || formData.category.length === 0
                  }
                >
                  카테고리
                </Label>
                <CategoryContainer
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
                    const selected = (formData.category || []).includes(cat);
                    return (
                      <CategoryButton
                        key={cat}
                        selected={selected}
                        onClick={() => {
                          setFormData((prev) => {
                            const current = new Set(prev.category || []);
                            if (current.has(cat)) {
                              current.delete(cat);
                            } else {
                              current.add(cat);
                            }
                            return { ...prev, category: Array.from(current) };
                          });
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
                  showMark={
                    !formData.assailant || formData.assailant.length === 0
                  }
                >
                  가해자
                </Label>
                <TagContainer>
                  <div
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
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      minWidth: "fit-content",
                      maxWidth: "20rem",
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
                  </div>
                </TagContainer>
              </FormField>

              <FormField>
                <Label
                  showMark={!formData.drawers || formData.drawers.length === 0}
                >
                  저장 폴더
                </Label>
                <SeverityContainer
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
                </SeverityContainer>
              </FormField>
            </FormRow>

            <FormRow>
              <FormField>
                <Label showMark={!formData.severity}>심각도</Label>
                <SeverityContainer
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
                <Label showMark={!formData.occurred_at}>발생 일시</Label>
                <DateTimeGroup
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
                <Label showMark={false}>목격자</Label>
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
                <Label showMark={!formData.location}>발생 장소</Label>
                <Input
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
                <Label showMark={!formData.content}>발생 정황</Label>
                <TextArea
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
                <Label showMark={false}>자료</Label>
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
                          onRemove={() => removeServerEvidenceByUrl(item.url)}
                        />
                      ))}
                    {localEvidences.map((att) => (
                      <AttachmentChip
                        key={att.id}
                        file={att.file}
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
            <CloseButton onClick={onClose}>대화로 돌아가기</CloseButton>
            <SubmitButton onClick={handleSubmit}>저장하기</SubmitButton>
          </ButtonContainer>
        </ContentArea>
      </ModalContainer>
    </ModalOverlay>
  );
}

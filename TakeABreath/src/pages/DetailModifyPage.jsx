import styled from "styled-components";
import { useState } from "react";

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
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
  padding: 0.5rem;

  &:hover {
    color: #333;
  }
`;

const Subtitle = styled.p`
  color: var(--30, #acacac);
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25rem;
  margin: 0 0 2rem 0;
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
  border: 1px solid #ddd;
  background: #fff;
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

const TextArea = styled.textarea`
  display: flex;
  width: 34.6875rem;
  padding: 0.625rem 0.9375rem;
  align-items: flex-start;
  gap: 0.625rem;
  border-radius: 0.625rem;
  border: 1px solid #ddd;
  background: #fff;
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
  background: ${(props) => (props.selected ? "#68b8ea" : "white")};
  color: ${(props) => (props.selected ? "white" : "#666")};
  font-family: "Pretendard", sans-serif;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: #68b8ea;
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

const SubmitButton = styled.button`
  background: #68b8ea;
  color: white;
  border: none;
  border-radius: 0.5rem;
  padding: 1rem 2rem;
  font-family: "Pretendard", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  width: 100%;
  transition: background 0.2s;

  &:hover {
    background: #4a9bd8;
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

const severityMap = {
  1: "높음",
  2: "보통",
  3: "낮음",
};

const formatDate = (dateString) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  const year = date.getFullYear().toString().slice(-2);
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${year}-${month}-${day} ${hours}:${minutes}`;
};

export default function DetailModifyPage({ data, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    title: data.title || "",
    assailant: data.assailant || [],
    severity: data.severity || 1,
    occurred_at: formatDate(data.occurred_at),
    location: data.location || "",
    content: data.content || "",
    category: data.category || [],
    drawers: data.drawers || [],
    evidences: data.evidences || [],
    witness: data.witness || [],
  });

  const [addingTag, setAddingTag] = useState({
    field: null,
    value: "",
  });

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

  const handleSubmit = () => {
    onSubmit(formData);
  };

  return (
    <ModalOverlay>
      <ModalContainer>
        <StickyTop>
          <Header>
            <Title>상세 내용</Title>
            <CloseButton onClick={onClose}>×</CloseButton>
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
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, title: e.target.value }))
                  }
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
                <TagContainer>
                  {formData.category.length > 0 &&
                    formData.category.map((item, index) => (
                      <Tag key={index}>
                        {item}
                        <RemoveButton
                          className="remove-btn"
                          onClick={() => handleRemoveTag("category", index)}
                        >
                          ×
                        </RemoveButton>
                      </Tag>
                    ))}
                  {addingTag.field === "category" ? (
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
                      placeholder="카테고리 입력"
                    />
                  ) : (
                    <AddButton onClick={() => handleAddTag("category")}>
                      +
                    </AddButton>
                  )}
                </TagContainer>
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
                  {formData.assailant.length > 0 &&
                    formData.assailant.map((item, index) => (
                      <Tag key={index}>
                        {item}
                        <RemoveButton
                          className="remove-btn"
                          onClick={() => handleRemoveTag("assailant", index)}
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
                      onKeyPress={handleTagInputKeyPress}
                      onBlur={() => setAddingTag({ field: null, value: "" })}
                      autoFocus
                      placeholder="가해자 입력"
                    />
                  ) : (
                    <AddButton onClick={() => handleAddTag("assailant")}>
                      +
                    </AddButton>
                  )}
                </TagContainer>
              </FormField>

              <FormField>
                <Label
                  showMark={!formData.drawers || formData.drawers.length === 0}
                >
                  저장 폴더
                </Label>
                <TagContainer>
                  {formData.drawers.length > 0 &&
                    formData.drawers.map((item, index) => (
                      <Tag key={index}>
                        {item}
                        <RemoveButton
                          className="remove-btn"
                          onClick={() => handleRemoveTag("drawers", index)}
                        >
                          ×
                        </RemoveButton>
                      </Tag>
                    ))}
                  {addingTag.field === "drawers" ? (
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
                      placeholder="저장 폴더 입력"
                    />
                  ) : (
                    <AddButton onClick={() => handleAddTag("drawers")}>
                      +
                    </AddButton>
                  )}
                </TagContainer>
              </FormField>
            </FormRow>

            <FormRow>
              <FormField>
                <Label showMark={!formData.severity}>심각도</Label>
                <SeverityContainer>
                  {[1, 2, 3].map((level) => (
                    <SeverityButton
                      key={level}
                      selected={formData.severity === level}
                      onClick={() => handleSeverityChange(level)}
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
                <Input
                  value={formData.occurred_at}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      occurred_at: e.target.value,
                    }))
                  }
                />
              </FormField>

              <FormField>
                <Label
                  showMark={!formData.witness || formData.witness.length === 0}
                >
                  목격자
                </Label>
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
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      location: e.target.value,
                    }))
                  }
                />
              </FormField>
            </FormRow>

            <FormRow>
              <FormField>
                <Label showMark={!formData.content}>발생 정황</Label>
                <TextArea
                  value={formData.content}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      content: e.target.value,
                    }))
                  }
                />
              </FormField>
            </FormRow>

            {/* 자료: 마지막 행 */}
            <FormRow>
              <FormField>
                <Label
                  showMark={
                    !formData.evidences || formData.evidences.length === 0
                  }
                >
                  자료
                </Label>
                <TagContainer>
                  {formData.evidences.length > 0 &&
                    formData.evidences.map((item, index) => (
                      <Tag key={index}>
                        {item.filename}
                        <RemoveButton
                          className="remove-btn"
                          onClick={() => handleRemoveTag("evidences", index)}
                        >
                          ×
                        </RemoveButton>
                      </Tag>
                    ))}
                  {addingTag.field === "evidences" ? (
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
                      placeholder="자료 입력"
                    />
                  ) : (
                    <AddButton onClick={() => handleAddTag("evidences")}>
                      +
                    </AddButton>
                  )}
                </TagContainer>
              </FormField>
            </FormRow>
          </FormGrid>

          <SubmitButton onClick={handleSubmit}>이대로 기록할게요</SubmitButton>
        </ContentArea>
      </ModalContainer>
    </ModalOverlay>
  );
}

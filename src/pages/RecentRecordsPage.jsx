import { useState, useEffect } from "react";
import styled from "styled-components";
import TableHeader from "../components/ui/TableHeader";
import TableRow from "../components/ui/TableRow";
import { apiHelpers } from "../utils/api";

const TableContainer = styled.div`
  flex: 1;
  overflow-y: auto;
`;

const EmptyMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: var(--50, #7a7a7a);
  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
`;

export default function RecentRecordsPage({ onNavigateToRecordDetail }) {
  const [recentRecords, setRecentRecords] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // 제목 업데이트 함수
  const updateRecordTitle = (recordId, newTitle) => {
    setRecentRecords((prev) =>
      prev.map((record) =>
        record.record_id === recordId ? { ...record, title: newTitle } : record
      )
    );
  };

  // 폴더 업데이트 함수
  const updateRecordFolder = async (recordId, newFolder, newFolderId) => {
    try {
      // API 호출: PATCH /api/records/{record_id}/drawer/new/{new_drawer_id}/
      const responseData = await apiHelpers.updateRecordDrawer(
        recordId,
        newFolderId
      );

      if (responseData.isSuccess) {
        // 성공 시 UI 업데이트
        setRecentRecords((prev) =>
          prev.map((record) =>
            record.record_id === recordId
              ? { ...record, drawer: newFolder }
              : record
          )
        );
        console.log(`폴더 변경 성공: ${newFolder}`);
      } else {
        console.error("폴더 변경 실패:", responseData.message);
      }
    } catch (error) {
      console.error("폴더 변경 중 오류:", error);
    }
  };

  // 실제 API 호출 함수
  const fetchRecentRecords = async () => {
    setIsLoading(true);
    try {
      // 실제 API에서 최근 records 조회
      const data = await apiHelpers.getRecentRecords();

      console.log("API 응답 데이터:", data);

      // API 응답 구조: { isSuccess, code, message, data: { records: [...] } }
      if (
        data &&
        data.data &&
        data.data.records &&
        Array.isArray(data.data.records)
      ) {
        // API 응답 데이터를 UI에서 사용하는 구조로 매핑
        const mappedRecords = data.data.records.map((record) => ({
          ...record,
          title: record.record_title, // record_title → title
          drawer: record.drawer_title, // drawer_title → drawer
        }));
        console.log("매핑된 데이터:", mappedRecords);
        setRecentRecords(mappedRecords);
      } else {
        console.log("데이터 구조가 올바르지 않음:", data);
        setRecentRecords([]);
      }
    } catch (error) {
      window.handleApiError(error, "오류가 발생했습니다. 메인 페이지로 이동합니다.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRecentRecords();
  }, []);

  return (
    <TableContainer>
      {isLoading ? (
        <div style={{ textAlign: "center", padding: "2rem" }}>
          응답 중입니다...
        </div>
      ) : recentRecords.length === 0 ? (
        <EmptyMessage>기록이 없습니다</EmptyMessage>
      ) : (
        <>
          <TableHeader />
          {recentRecords.map((record, index) => (
            <TableRow
              key={record.record_id}
              id={record.record_id}
              order={index + 1}
              title={record.title}
              date={new Date(record.created_at).toLocaleDateString("ko-KR", {
                year: "numeric",
                month: "numeric",
                day: "numeric",
              })}
              location={record.location}
              folder={record.drawer}
              recordData={record}
              onRowClick={() => {
                console.log(record.record_id);
                onNavigateToRecordDetail("recent", record.record_id);
              }}
              onTitleUpdate={updateRecordTitle}
              onFolderUpdate={updateRecordFolder}
            />
          ))}
        </>
      )}
    </TableContainer>
  );
}

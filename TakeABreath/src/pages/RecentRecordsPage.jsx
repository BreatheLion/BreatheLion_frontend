import { useState, useEffect } from "react";
import styled from "styled-components";
import TableHeader from "../components/ui/TableHeader";
import TableRow from "../components/ui/TableRow";

const TableContainer = styled.div`
  flex: 1;
  overflow-y: auto;
`;

export default function RecentRecordsPage({ onNavigateToRecordDetail }) {
  const [recentRecords, setRecentRecords] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // 실제 API 호출 함수
  const fetchRecentRecords = async () => {
    setIsLoading(true);
    try {
      // 실제 API에서 모든 records 조회
      const response = await fetch("/api/records/");
      const data = await response.json();

      console.log("API 응답 데이터:", data);

      if (data && Array.isArray(data)) {
        setRecentRecords(data);
      } else {
        setRecentRecords([]);
      }
    } catch (error) {
      window.handleApiError(error, "최근 기록 조회에 실패했습니다.");
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
            />
          ))}
        </>
      )}
    </TableContainer>
  );
}

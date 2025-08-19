import { useState, useEffect } from "react";
import styled from "styled-components";
import TableHeader from "../components/ui/TableHeader";
import TableRow from "../components/ui/TableRow";

const TableContainer = styled.div`
  flex: 1;
  overflow-y: auto;
`;

export default function RecentRecordsPage({
  onNavigateToMain,
  onNavigateToRecordDetail,
}) {
  const [recentRecords, setRecentRecords] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // 최근 기록 데이터를 state로 관리
  const [recentRecordsData, setRecentRecordsData] = useState([
    {
      record_id: 1,
      drawer_id: 5,
      location: "동방",
      drawer_name: "동방에서 벌어진 일",
      assailant: ["조해원", "오영록"],
      created_at: "2025-08-05T10:00:00",
      summary: "학생 간 언어폭력 사례",
    },
    {
      record_id: 2,
      drawer_id: 7,
      location: "교실",
      drawer_name: "교실에서 일어난 위협",
      assailant: ["김민재"],
      created_at: "2025-08-03T13:15:00",
      summary: "물건을 던지는 신체적 위협",
    },
    {
      record_id: 3,
      drawer_id: 4,
      location: "복도",
      drawer_name: "복도에서의 갈등",
      assailant: ["이서준", "박지윤"],
      created_at: "2025-08-06T09:45:00",
      summary: "고의적인 밀침과 언쟁 발생",
    },
  ]);

  // API 호출 함수 (추후 실제 엔드포인트로 변경)
  const fetchRecentRecords = async () => {
    setIsLoading(true);
    try {
      // const response = await axios.get("/api/records/");
      // setRecentRecords(response.data.records);

      // 현재는 더미 데이터 사용
      setRecentRecords(recentRecordsData);
    } catch (error) {
      console.error("최근 기록 조회 실패:", error);
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
              title={record.drawer_name}
              date={new Date(record.created_at).toLocaleDateString("ko-KR", {
                year: "numeric",
                month: "numeric",
                day: "numeric",
              })}
              location={record.location}
              folder={record.drawer_name}
              recordData={record}
              onRowClick={() =>
                onNavigateToRecordDetail("recent", record.record_id)
              }
            />
          ))}
        </>
      )}
    </TableContainer>
  );
}

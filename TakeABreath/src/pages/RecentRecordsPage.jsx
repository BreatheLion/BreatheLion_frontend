import { useState, useEffect } from "react";
import styled from "styled-components";
import TableHeader from "../components/ui/TableHeader";
import TableRow from "../components/ui/TableRow";
import { apiHelpers } from "../utils/api";

const TableContainer = styled.div`
  flex: 1;
  overflow-y: auto;
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
  const updateRecordFolder = (recordId, newFolder) => {
    setRecentRecords((prev) =>
      prev.map((record) =>
        record.record_id === recordId
          ? { ...record, drawer: newFolder }
          : record
      )
    );
  };

  // 실제 API 호출 함수
  const fetchRecentRecords = async () => {
    setIsLoading(true);
    try {
      // 실제 API에서 최근 records 조회
      const data = await apiHelpers.getRecentRecords();

      console.log("API 응답 데이터:", data);

      if (data && data.records && Array.isArray(data.records)) {
        setRecentRecords(data.records);
      } else {
        setRecentRecords([]);
      }
    } catch (error) {
      // 목업 데이터 사용 (추후 제거 예정)
      console.log("API 호출 실패, 목업 데이터 사용:", error);
      const mockData = {
        records: [
          {
            record_id: 1,
            drawer_id: 5,
            title:
              "긴제목긴제목긴제목긴제목긴제목긴제목긴제목긴제목긴제목긴제목긴제목긴제목긴제목긴제목긴제목긴제목긴제목긴제목",
            location:
              "긴장소긴장소긴장소긴장소긴장소긴장소긴장소긴장소긴장소긴장소긴장소",
            drawer: "동방에서 벌어진 일",
            assailant: ["조해원", "오영록"],
            created_at: "2025-08-05T10:00:00",
          },
          {
            record_id: 2,
            drawer_id: 7,
            title: "물건을 던지는 신체적 위협",
            location: "교실",
            drawer:
              "긴폴더긴폴더긴폴더긴폴더긴폴더긴폴더긴폴더긴폴더긴폴더긴폴더긴폴더ㄴ",
            assailant: ["김민재"],
            created_at: "2025-08-03T13:15:00",
          },
          {
            record_id: 3,
            drawer_id: 4,
            title: "고의적인 밀침과 언쟁 발생",
            location: "복도",
            drawer: "복도에서의 갈등",
            assailant: ["이서준", "박지윤"],
            created_at: "2025-08-06T09:45:00",
          },
        ],
      };
      setRecentRecords(mockData.records);
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
              onTitleUpdate={updateRecordTitle}
              onFolderUpdate={updateRecordFolder}
            />
          ))}
        </>
      )}
    </TableContainer>
  );
}

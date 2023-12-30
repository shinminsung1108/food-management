import { useEffect, useState } from 'react';
import { getAPI } from '../core/api.js';

export function FoodList({ search, hide }) {
    const [data, setData] = useState();
    const handleCopyClipBoard = (text) => {
        try {
            navigator.clipboard.writeText(text);
            alert(`클립보드에 복사되었습니다. \n${text}`); // 확인 버튼을 눌러야 복사 완료
        } catch (error) {
            alert('클립보드 복사에 실패하였습니다.');
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const endIdx = 1001 // 총 List 수
                const apiData = await getAPI(endIdx); // Api 호출
                setData(apiData); // data 저장
            } catch (error) {
                console.error(error); // 에러처리
            }
        };

        fetchData();
    }, []);

    if (!data) {
        return "로딩중........";
    }
    const list = data.I1850.row
    const listFilter = data.I1850.row.map(item => item).filter(item => search === "" ? list : item.BSN_KND_NM.includes(search) || item.ENTRPS_NM.includes(search))
    return (
        <div className="App">

            {listFilter.map((item) => {
                return (
                    <div style={{ display: hide && "none" }}>
                        <p>{item.length}</p>
                        <p>업종: {item.BSN_KND_NM}</p>
                        <p>업체명: {item.ENTRPS_NM}</p>
                        {/* 주소 클릭 시 주소 복사 */}
                        <p style={{ display: "inline" }} onClick={() => handleCopyClipBoard(item.ENTRPS_BASS_ADDR)}>주소: {item.ENTRPS_BASS_ADDR}</p>
                        <p>위반내역: {item.VILT_DTLS}</p>
                        <p>==========================</p>
                    </div>
                )
            })}
        </div>
    )
}
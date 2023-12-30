export function InfoModal({ on, setOn }) {
    return (
        <div style={{
            display: on ? "flex" : "none",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", 
            zIndex: 999,
            justifyContent: "center",
            alignItems: "center",
        }}
        
        >
            <div style={{
                textAlign: "center",
                width: "500px",
                height: "250px",
                backgroundColor: "white",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
                padding: "20px",
            }}>
                <h1 style={{ cursor: "pointer" }} onClick={() => setOn(false)}>사용설명서</h1>
                    <p>1. 업체명 및 업종을 검색하여 필터 할 수 있습니다.</p>
                    <p>2. 주소검색창에 주소를 입력하고 검색을 누르면 해당 주소로 지도가 세팅됩니다.</p>
                    <div style={{ lineHeight: 0.1}}>
                        <p>3. 주소를 클릭하면 해당 주소가 복사가 됩니다.</p>
                        <h5>(이를 이용하여 주소검색창 활용)</h5>
                    </div>
            </div>
        </div>
    )
}

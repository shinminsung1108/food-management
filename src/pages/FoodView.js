import { FoodList } from "./FoodList";
import { useState } from 'react';
import { Map } from '../Map.js';
import { InfoModal } from "./InfoModal.js";
export function FoodView() {
    const [search, setSearch] = useState("");
    const [address, setAddress] = useState("");
    const [addressSearch, setAddressSearch] = useState("");

    const [hide, setHide] = useState(false);
    const [on, setOn] = useState(false);
    return (
        <div>
            <Map address={address} />
            <input type='text' placeholder='업체명 or 업종 검색' onChange={(event) => setSearch(event.target.value)}></input>
            <button onClick={() => setHide(!hide)}>{hide ? "리스트 보이기" : "리스트 숨기기"}</button>
            <button onClick={() => setOn(true)}>도움말</button>
            <div>
                <input type='text' placeholder='주소검색' onChange={(event) => setAddressSearch(event.target.value)}></input>
                <button onClick={() => setAddress(addressSearch)}>검색</button>
            </div>
            <InfoModal on={on} setOn={setOn}/>
            <FoodList search={search} hide={hide}/>
        </div>
    )
}
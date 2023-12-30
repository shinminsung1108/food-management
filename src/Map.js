import { useEffect, useState } from 'react';

export function Map({ address }) {
    const { kakao } = window;

    // -- 주소 위경도 변환 작업 --
    // 기본값 서울역
    const geocoder = new kakao.maps.services.Geocoder();
    const [lat, setLat] = useState(37.555992866958405);
    const [lng, setLng] = useState(126.97214783361703);

    const callback = function (result, status) {
        if (status === kakao.maps.services.Status.OK) {
            setLng(result[0].x);
            setLat(result[0].y);
        } 
    };
    geocoder.addressSearch(address, callback);

    // -- 끝 --

    // -- 카카오맵 표출 --
    useEffect(() => {
        const container = document.getElementById('map');
        const options = {
            center: new kakao.maps.LatLng(lat, lng),
            level: 3
        };

        const map = new kakao.maps.Map(container, options);
    }, [kakao.maps.LatLng, kakao.maps.Map, lat, lng]);

    // -- 끝 --

    // -- 마커작업시작 --
    useEffect(() => {
        const mapContainer = document.getElementById('map'),
        mapOption = {
            center: new kakao.maps.LatLng(lat, lng),
            level: 3
        };

    const map = new kakao.maps.Map(mapContainer, mapOption);
    const markerPosition = new kakao.maps.LatLng(lat, lng);

    const marker = new kakao.maps.Marker({
        position: markerPosition
    });

    marker.setMap(map);
    } , [kakao.maps.LatLng, kakao.maps.Map, kakao.maps.Marker, lat, lng])


    // -- 끝 --

    return (
        // 지도 사이즈
        <div id="map" style={{ width: 500, height: 500 }}></div>
    )
}
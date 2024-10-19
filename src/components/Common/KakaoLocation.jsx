import React, { useEffect } from 'react';

const KakaoLocation = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://dapi.kakao.com/v2/maps/sdk.js?appkey=9228984e0918ae3e65cfa8976ca075b1';
        script.async = true;
        document.head.appendChild(script);

        script.onload = () => {
            if (window.kakao && window.kakao.maps) {
                // Kakao 지도 SDK 로드가 완료된 후에 지도를 생성합니다.
                const container = document.getElementById('map'); // 지도를 담을 영역의 DOM 레퍼런스
                const options = {
                    center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 중심 좌표
                    level: 3 // 확대 레벨
                };
                const map = new window.kakao.maps.Map(container, options); // 지도 생성
            } else {
                console.error('Kakao Maps SDK is not loaded properly.');
            }
        };

        // 스크립트가 추가된 후에 필요할 경우 제거하는 클린업 함수
        return () => {
            document.head.removeChild(script);
        };
    }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때만 실행

    return (
        <div>
            <div id="map" className="w-64 h-52"></div>
        </div>
    );
};

export default KakaoLocation;


/* 9228984e0918ae3e65cfa8976ca075b1 */
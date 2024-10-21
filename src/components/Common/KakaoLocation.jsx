import React, { useEffect } from 'react';

const KakaoLocation = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://dapi.kakao.com/v2/maps/sdk.js?appkey=9228984e0918ae3e65cfa8976ca075b1&libraries=services';
        script.async = true;
        document.head.appendChild(script);

        script.onload = () => {
            console.log('Kakao 지도 SDK 로드 완료');
            
            if (window.kakao && window.kakao.maps) {
                console.log('카카오 지도 객체를 사용할 수 있습니다.');

                // 약간의 지연 시간을 둬서 SDK가 완전히 로드되었는지 확인
                setTimeout(() => {
                    try {
                        const container = document.getElementById('map');
                        const options = {
                            center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 중심 좌표
                            level: 3 // 확대 레벨
                        };
                        const map = new window.kakao.maps.Map(container, options);
                        console.log('지도 생성 완료', map);
                    } catch (error) {
                        console.error('지도를 생성하는 중 오류 발생:', error);
                    }
                }, 500); // 500ms 정도의 지연 시간
            } else {
                console.error('카카오 지도 SDK가 제대로 로드되지 않았습니다.');
            }
        };

        script.onerror = () => {
            console.error('카카오 지도 SDK 스크립트를 로드하지 못했습니다.');
        };

        return () => {
            console.log('Cleaning up script');
            document.head.removeChild(script);
        };
    }, []);

    return (
        <div>
            <div id="map" className="w-64 h-52"></div>
        </div>
    );
};

export default KakaoLocation;

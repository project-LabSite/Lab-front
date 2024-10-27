import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const KakaoLocation = () => {
    useEffect(() => {
        const loadKakaoMaps = () => {
            const script = document.createElement('script');
            script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=b2c78f49de362416bcc064728c902738&autoload=false&libraries=services`;
            script.onload = () => {
                window.kakao.maps.load(() => {
                    const container = document.getElementById('map');
                    const options = {
                        center: new window.kakao.maps.LatLng(35.156382261465886, 128.08271057929446),
                        level: 3,
                    };
                    const map = new window.kakao.maps.Map(container, options);
                });
            };
            document.head.appendChild(script);
        };

        loadKakaoMaps();
    }, []); 

    return (
        <div className='m-1'>
            <div id="map" className="w-full h-96"></div>
            <div className='flex mt-2'>
                <FontAwesomeIcon className='m-1' icon={faMapMarkerAlt} />
                <div className='text-sm'>경남 진주시 내동로 139번길 8번지 내동캠퍼스 612호</div>
            </div>
        </div>
    );
};

export default KakaoLocation;

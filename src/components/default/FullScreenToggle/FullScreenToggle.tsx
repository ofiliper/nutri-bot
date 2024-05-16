'use client'

import { useEffect } from 'react';

function FullScreenToggle() {
    useEffect(() => {
        function toggleFullScreen() {
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen();
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                }
            }
        }

        document.addEventListener('dblclick', toggleFullScreen);


        return () => {
            document.removeEventListener('dblclick', toggleFullScreen);
        };
    }, []);

    return null;
}

export default FullScreenToggle;

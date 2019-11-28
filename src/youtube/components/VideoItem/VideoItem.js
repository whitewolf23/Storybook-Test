import React, { useState } from 'react'
import './VideoItem.scss'

const gif = 'https://media.giphy.com/media/gw3IWyGkC0rsazTi/giphy.gif'

export default function VideoItem({video, onVideoSelect}) {
    
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [hovered, setHovered] = useState(false);
    
    // TODO: 이벤트 연속으로 실행 되는 부분 방지 필요.
    const toggleHover = (e) => {
        e.stopPropagation();
        console.log('work',hovered)
        setHovered(!hovered)
    };

    // console.log('videoitem', video)
    const {url, thumbnail, title} = video
    return (
        <li className="list-group-item" onClick={() => { onVideoSelect(video) }} onMouseEnter={toggleHover} onMouseOut={toggleHover} >
            <div className="video-list media">
                {/* 이미지, 왼쪽 배치 */}
                <div className="media-left">
                    <img className="media-object" src={!hovered ? thumbnail : gif}/>
                </div>
                <div className="media-body">
                    <div className="media-heading">
                        {title}
                    </div>
                </div>
            </div>
        </li>
    )
}

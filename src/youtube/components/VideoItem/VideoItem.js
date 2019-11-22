import React from 'react'
import './VideoItem.scss'

export default function VideoItem({url, thumbnail, title}) {
    return (
        <li className="list-group-item">
            <div className="video-list media">
                {/* 이미지, 왼쪽 배치 */}
                <div className="media-left">
                    <img className="media-object" src={thumbnail}/>
                </div>
                <div className="media-body">
                    <div className="media-heading">
                        {title}
                    </div>
                </div>
            </div>
            {url}
        </li>
    )
}

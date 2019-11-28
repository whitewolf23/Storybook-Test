import React, { useState } from 'react'
import {VideoItem} from 'youtube/components/VideoItem';

import './VideoList.scss'

export default function VideoList({videos, onVideoSelect}) {
    if (!videos) {
        return <div>Loading...</div>;
    }

    // 데이터 map 배열로 만들어주기 
    const videoItems = videos.map((video) => {
        const {id} = video;
        return (
            <VideoItem 
                key={id}  
                video={video}
                onVideoSelect={onVideoSelect}
            />
        )
    })

    // videoitems를 return () 부분에 연결해주어야 반영이 됨.
    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    )
}

import React from 'react';
import { Link } from "react-router-dom";
import './ThumbNailListItem.scss';
import { CoverPhoto } from 'components/CoverPhoto'

export default function ThumbNailListItem() {

    const width = 116;
    const height = 64;
    const img = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Canis_lupus_occidentalis.jpg/250px-Canis_lupus_occidentalis.jpg"
    const url = 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8';
    const imageIcon = '';

    return (
        <div className="ListItem-thumbnail">
            <h1>ThumbNailListItem</h1>
            <Link to="/coverPhoto">
                {/* 커버포토 */}
                <CoverPhoto width={width} height={height} img={img} />
                {/* 이미지 아이콘 */}
                <div className="custom">
                </div>    
                <div>텍스트 버블</div>    
            </Link>
            {/* Contents */}
            <Link>
                <div>status</div>
                <div>description</div>
                <div>Heading</div>
            </Link>
        </div>
    )
}


// propTypes


// defaultprops
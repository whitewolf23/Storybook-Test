import React from 'react';
import './CoverPhoto.scss'

const CoverPhoto = ({width, height, img, url}) => {
    
    const styles = {
        width: width,
        height: height,
        backgroundImage: `url(${img})`,
        // paddingBottom: `${(height/width) * 100}%`
         // backgroundImage 는 임시로 이렇게 ...
    }

    return (
        <div 
            className="coverphoto"
            data-testid="cover-photo-img"
            aria-label="alt"
            style={styles}
        >
            {url || null}
        </div>
    )
}

export default CoverPhoto;
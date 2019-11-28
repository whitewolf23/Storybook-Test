import React, { Component } from 'react';
import GifPlayer from '@mayankmohit/react-gif-player';
import ReactPlayer from 'react-player';

import './VideoPlayer.scss'




export default class VideoPlayer extends Component {
   
    constructor(props) {
        super(props)
        this.player = {}
     this.handleMotion = this.handleMotion.bind(this);
     
    }

    handleMotion = () => {
        console.log('work!!!!')   
    }
       
    render() {
        const {selectedVideo} = this.props;
                
        return (
            <div>   
            { !selectedVideo ? (<div>
                Loading video player...
            </div>) :(
                <div className="video-detail col-md-8">
                    <div className="embed-responsive embed-responsive-16by9">
                        {/* 비디오 삽입 */}
                        <ReactPlayer 
                            url={selectedVideo.url} 
                            playing 
                            controls 
                            playsinline={true} 
                        />
                    </div>
                    <div className="details">
                        <div>{selectedVideo.title}</div>
                        <div>{selectedVideo.url}</div>

                    </div>
                </div>
            )}
            </div>
            

         
        )
    }
}

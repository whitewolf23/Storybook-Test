import React, { Component } from 'react'
// import HLSPlayer from 'react-video-js-player';
import ReactPlayer from 'react-player'
import './VideoPlayer.scss'
export default class VideoPlayer extends Component {
   
    constructor(props) {
        super(props)
        this.player = {}
     
     
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
                        <ReactPlayer url={selectedVideo.url} playing controls />
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

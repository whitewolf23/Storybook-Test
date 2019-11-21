import React, {Component} from 'react';
import VideoPlayer from 'react-video-js-player';

class TestVideo extends Component {
    
    constructor(props) {
        super(props)
        this.player = {}
        // <source src="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" type="application/x-mpegURL"/>
        this.state = {
            video:{
                src: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
                poster: 'https://kr.object.ncloudstorage.com/streaming/poster.png'
            }
        }

        this.onReady = this.onPlayerReady.bind(this)
        this.onPlay = this.onVideoPlay.bind(this)
        this.onPause = this.onVideoPause.bind(this)
        this.onTimeUpdate = this.onVideoTimeUpdate.bind(this)
        this.onSeeking = this.onVideoSeeking.bind(this)
        this.onSeeked = this.onVideoSeeked.bind(this)
        this.onEnd = this.onVideoEnd.bind(this)
    }
    

    onPlayerReady(player){
        console.log("Player is ready: ", player);
        player = player;
    }

    onVideoPlay(duration){
        console.log("Video played at: ", duration / 60);
    }

    onVideoPause(duration){
        console.log("Video paused at: ", duration / 60);
    }

    onVideoTimeUpdate(duration){
        console.log("Time updated: ", duration / 60);
    }

    onVideoSeeking(duration){
        console.log("Video seeking: ", duration / 60);
    }

    onVideoSeeked(from, to){
        console.log(`Video seeked from ${from} to ${to}`);
    }

    onVideoEnd(){
        console.log("Video ended");
    }
    

    render() {
        const {video} = this.state;
        const {onReady, onPlay, onPause, onTimeUpdate, onSeeking, onSeeked, onEnd } = this
        return (
            <div>
                <VideoPlayer
                    contorls={true} // 컨트롤 바 생성
                    src={video.src} // 비디오 소스
                    poster={video.poster} // 포스터
                    width="720"
                    height="420"
                    onReady={onReady} // 
                    onPlay={onPlay}
                    onPause={onPause}
                    onTimeUpdate={onTimeUpdate}
                    onSeeking={onSeeking}
                    onSeeked={onSeeked}
                    onEnd={onEnd}
                />
            </div>
        )
    }



}


export default TestVideo;
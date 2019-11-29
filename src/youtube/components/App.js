import React, {Component} from 'react';
import {NavBar} from 'youtube/components/NavBar'
import {SearchBar} from 'youtube/components/SearchBar'
import {VideoPlayer} from 'youtube/components/VideoPlayer'
import {VideoList} from 'youtube/components/VideoList'
// import test from './test.json';

class App extends Component {

  constructor(prop) {
    super(prop)

    // 초기 state
    this.state = {
      keyword:'',
      videos:[
        {
          id: 0,
          thumbnail : 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Canis_lupus_occidentalis.jpg/250px-Canis_lupus_occidentalis.jpg',
          title: 'Big buck bunny',
          url: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
        },
        {
          id: 1,
          thumbnail : 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Canis_lupus_occidentalis.jpg/250px-Canis_lupus_occidentalis.jpg',
          title: 'mp4 영상',
          url: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
        },
        {
          id: 2,
          thumbnail : 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Canis_lupus_occidentalis.jpg/250px-Canis_lupus_occidentalis.jpg',
          title: '제이미맨',
          url: 'https://dcymer9183hvu.cloudfront.net/test/mp4/73f3e7b_t34.mp4',
        },
        {
          id: 3,
          thumbnail : 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Canis_lupus_occidentalis.jpg/250px-Canis_lupus_occidentalis.jpg',
          title: '주예지',
          url: ' https://www.youtube.com/watch?v=NsVjcT0kRiU',
        },// 선택된 비디오 데이터
      ], // Video list data
      selectedVideo:{
        id: 3,
        thumbnail : 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Canis_lupus_occidentalis.jpg/250px-Canis_lupus_occidentalis.jpg',
        title: '주예지',
        url: ' https://www.youtube.com/watch?v=NsVjcT0kRiU',
      },// 선택된 비디오 데이터
    }

  }

  handleKeywordUpdate = (keyword) => {
    this.setState({
      keyword: keyword
    })
  }

  handleSelectedVideoUpdate = (value) => {
    this.setState({
      selectedVideo : value || this.searchVideo
    });
  }

  searchVideo = (keyword) => {
    this.handleKeywordUpdate(keyword)
  }
  
  // props 전달 시, '' 만 가능
  render() {
    const {videos, selectedVideo, keyword} = this.state;
     
    return (
      <div>
        <NavBar siteTitle='poppy tube' />
        <div className="container">
          <SearchBar 
            onChange={this.searchVideo} keyword={keyword}/>
          <VideoPlayer 
            selectedVideo={selectedVideo}/>
          <VideoList 
            onVideoSelect={this.handleSelectedVideoUpdate}
            videos={videos} />
        </div>
      </div>
     );
  }
 
}

export default App;

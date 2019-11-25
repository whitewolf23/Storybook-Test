import React, {Component} from 'react';
// import { Link } from 'react-router-dom';
// 리스트
// 아이템
// 비디오 플레이어
// 네비게이션 바
import {NavBar} from 'youtube/components/NavBar'
import {SearchBar} from 'youtube/components/SearchBar'
import {VideoPlayer} from 'youtube/components/VideoPlayer'
import {VideoList} from 'youtube/components/VideoList'
import test from './test.json';

class App extends Component {

  constructor(prop) {
    super(prop)

    // 초기 state
    this.state = {
      keyword:null,
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
   
    this.searchVideo = this.searchVideo.bind(this)
    this.handleSelectedVideoUpdate = this.handleSelectedVideoUpdate.bind(this)

  }


  handleKeywordUpdate = (keyword) => {
    this.setState({
      keyword: keyword
    })
    console.log('keyword', this.state.keyword)

  }

  handleSelectedVideoUpdate = (value) => {
    // console.log('work!!!', value)
    this.setState({
      selectedVideo : value || this.searchVideo
    });
    console.log('변경된 값', this.state.selectedVideo) 
  }

  searchVideo = (keyword) => {
    // this.setState({
    //   videos: testList, // 비디오 데이터 array
    //   selectedVideo : testList[1]
    // })
    // if 검색어가 변한다면, state 가 변경된다. 
    // console.log(this.state.videos, this.state.selectedVideo)
    this.handleKeywordUpdate(keyword)
  }
  
  // props 전달 시, '' 만 가능
  render() {
    // json 객체 받아옴
    // console.log(test)
    const {videos, selectedVideo} = this.state;
     
    return (
      <div>
        <NavBar siteTitle='데모페이지' />
        <div className="container">
          <SearchBar 
            onChange={this.searchVideo} />
          <VideoPlayer 
            selectedVideo={selectedVideo}/>
          <VideoList 
            // onVideoSelect={(selectedVideo) => {this.setState({selectedVideo})}}
            onVideoSelect={this.handleSelectedVideoUpdate}
            videos={videos} />
          {/* <VideoList videos={testList} /> */}
        </div>
      </div>
     );
  }
 
}

export default App;

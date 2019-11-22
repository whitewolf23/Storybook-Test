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
import test from './test'
class App extends Component {

  constructor(prop) {
    super(prop)

    this.state = {
      video:[], // 비디오 데이터 array
      selectedVideo: null // 선택된 비디오 데이터
    }
  }

  // props 전달 시, '' 만 가능

  render() {
    const testList = [
      {
        id: 0,
        thumbnail : 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Canis_lupus_occidentalis.jpg/250px-Canis_lupus_occidentalis.jpg',
        title: 'm3u8영상',
        url: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
      },
      {
        id: 1,
        thumbnail : 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Canis_lupus_occidentalis.jpg/250px-Canis_lupus_occidentalis.jpg',
        title: 'mp4 영상',
        url: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
      }
    ]
     


    return (
      <div>
        <NavBar siteTitle='데모' />
        <div className="container">
          <SearchBar/>
          <VideoPlayer/>
          <VideoList videos={testList} />
        </div>
      </div>
     );
  }
 
}

export default App;

import React, { Component } from 'react'
import './SearchBar.scss'
export default class SearchBar extends Component {

    constructor(props){
        super(props);
        // 검색어 설정
        this.state = {
            keyword: '' 
        }

        this.onInputChange = this.onInputChange.bind(this)
    }

    onInputChange = (e) => {
        console.log(e.target.value)
        this.setState({
            keyword : e.target.value
        })
    }

    render() {
        const {keyword} = this.state

        return (
            <div className="search-bar">
                <input value={keyword} onChange={this.onInputChange} placeholder='검색어를 입력해 주세요' />
            </div>
        )
    }
}

import React, { Component } from 'react'
import './SearchBar.scss'
export default class SearchBar extends Component {

   
    // keyworkd status 중복 

    onInputChange = (e) => {
        // console.log(e.target.value)
        const {onChange, keyword} = this.props;
        
        this.setState({
            keyword : e.target.value
        })
        onChange(keyword)
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

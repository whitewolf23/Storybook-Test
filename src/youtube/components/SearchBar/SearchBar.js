import React, { Component } from 'react'
import './SearchBar.scss'
export default class SearchBar extends Component {

   
    // keyworkd status 중복 

    onInputChange = (e) => {
        const {onChange} = this.props;
        onChange(e.target.value)
    }

    render() {
        const { keyword} = this.props;

        return (
            <div className="search-bar">
                <input value={keyword} onChange={this.onInputChange} placeholder='검색어를 입력해 주세요' />
            </div>
        )
    }
}

import React, { Component } from 'react';
import './searchResultItem.css';

class SearchResultItem extends Component {
    render() {
        const { filterResult } = this.props;
        return (
            <div className="goal">
                <div className="goal__title">
                    <a href={filterResult.url} target="_blank"> {filterResult.title} </a>
                </div>
                <div className="goal__description">{filterResult.author}</div>
            </div>
        );
    }
}

export default SearchResultItem;
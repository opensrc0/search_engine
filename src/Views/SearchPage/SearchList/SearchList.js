import React, { Component } from 'react';
import SearchResultItem from './SearchResultItem/SearchResultItem';
import OopsNoListing from './OopsNoListing';

class SearchPage extends Component {
    render() {
        const { filterResult } = this.props;
        return filterResult[0] ? filterResult.map((filterResult, index) => 
            <SearchResultItem
                key={index}
                filterResult={filterResult}
            />
        ) : (
            <OopsNoListing />
        );
    }
}

export default SearchPage;
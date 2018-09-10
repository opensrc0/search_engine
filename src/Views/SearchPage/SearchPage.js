import React, { Component } from 'react';
import Source from './Source/Source';
import Search from './Search/Search';
import SearchList from './SearchList/SearchList';
import './searchPage.css';

class SearchPage extends Component {
    state = {
        source: '',
        filterResult: [],
    }

    selectSource = (value) => {
        this.setState({ source: value});
    }

    setSearchString = (value) => {
        this.setState({ filterResult: value});
    }

    searchResult = () => {
        return this.state.searchResult;
    }

    render() {
        const { source, filterResult } = this.state;
        console.log(filterResult);
        return (
            <React.Fragment>
                <Source selectSource={this.selectSource} />
                <Search setSearchString={this.setSearchString} source={source} />
                <SearchList filterResult={filterResult} />
            </React.Fragment>
        )
    }
}

export default SearchPage;
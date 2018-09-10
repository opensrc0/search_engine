import React, { Component } from 'react';
import mock from './../../../ApiMock/Mock';
import './search.css';

class SearchPage extends Component {
    state = {
        query: '',
    }

    search = () => {
        const { setSearchString, source } = this.props;
        const { query } = this.state;
        mock.search(source, query).then((result) => {
            setSearchString(result);
        });
    }

    changeQuerySring = (e) => {
        const { value } = e.target;
        this.setState({ query: value});
    }

    render() {
        return (
            <div className="search">
                <input type="text" placeholder="Search" onChange={this.changeQuerySring} />
                <button className="btn-success" onClick={this.search}>Submit</button>
            </div>
        )
    }
}

export default SearchPage;
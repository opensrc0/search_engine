import React, { Component } from 'react';
import SourceItem from './SourceItem/SourceItem';
import { sourceList, sourceConfig } from './config';
import './source.css';

class Source extends Component {
    componentDidMount = () => {
        const { selectSource } = this.props;
        selectSource(sourceConfig[sourceList[0]]);
    }

    changeSource = (e) => {
        const { value } = e.target;
        const { selectSource } = this.props;
        selectSource(sourceConfig[value]);
    }

    render() {
        return (
            <select className="source" onChange={this.changeSource}>
                {
                    sourceList.map((source) => <SourceItem key={source} source={source} />)
                }
            </select>
        )
    }
}

export default Source;
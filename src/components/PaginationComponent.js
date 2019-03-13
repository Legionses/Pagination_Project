/**
 * Created by Avell on 13.03.2019.
 */
import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import PropTypes from 'prop-types';

import {getCurrentPage} from '../actions'
import '../scss/PaginationComponent.scss'

const range = (from, to, step = 1) => {
    let i = from;
    const range = [];

    while (i <= to) {
        range.push(i);
        i += step;
    }

    return range;
};

class PaginationComponent extends Component {
    constructor(props) {
        super(props);
        const {totalRecords = 0, pageLimit = 5} = props;

        this.pageLimit = typeof pageLimit === "number" ? pageLimit : 5;
        this.totalRecords = typeof totalRecords === "number" ? totalRecords : 0;
        this.totalPages = Math.ceil(this.totalRecords / this.pageLimit);

        this.state={
            currentPage:null,
        }
    }

    componentDidMount() {
        this.gotoPage(1);
    }

    gotoPage = page => {
        const {getCurrentPage} = this.props;
        const paginationData = {
            totalPages: this.totalPages,
            currentPage: page,
            pageLimit: this.pageLimit
        };
        this.setState({currentPage:page});
        getCurrentPage(paginationData);

    };

    handleClick(page, event) {
        event.preventDefault();
        this.gotoPage(page)
    }


    render() {
        const pagesArr = range(1, this.totalPages);
        const {currentPage} =  this.state;
        return (
            <div className="pagination">
                <ul>
                    <span className="pagination--currentPageInfo">Users amount: {this.totalRecords}</span>
                    {pagesArr.map((page, id) =>
                        <li key={id}>
                            <a
                                href="#"
                                onClick={e => this.handleClick(page, e)}>
                                {page}
                            </a>
                        </li>)
                    }
                    <span className="pagination--currentPageInfo">PAGE {currentPage}/{this.totalPages}</span>
                </ul>
            </div>
        );
    }
}
const mapDispatchToProps = dispatch => ({
    getCurrentPage: bindActionCreators(getCurrentPage, dispatch),
});

PaginationComponent.propTypes = {
    totalRecords: PropTypes.number.isRequired,
    pageLimit: PropTypes.number.isRequired,
    getCurrentPage: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(PaginationComponent);

/**
 * Created by Avell on 13.03.2019.
 */
import React, {Component} from 'react';
import {bindActionCreators} from 'redux'

import {getCurrentPage} from '../actions'
import { connect } from 'react-redux'

const range = (from, to, step = 1) => {
    let i = from;
    const range = [];

    while (i <= to) {
        range.push(i);
        i += step;
    }

    return range;
};

class Pagination extends Component {
    constructor(props) {
        super(props);
        const {totalRecords = 0, pageLimit = 5} = props;


        this.pageLimit = typeof pageLimit === "number" ? pageLimit : 5;
        this.totalRecords = typeof totalRecords === "number" ? totalRecords : 0;
        this.totalPages = Math.ceil(this.totalRecords / this.pageLimit);
    }

    componentDidMount(){
        this.gotoPage(1)
    }

    gotoPage = page =>{
         const {getCurrentPage} = this.props;
        const paginationData = {
            totalPages:this.totalPages,
            currentPage: page,
            pageLimit:this.pageLimit


        };
        getCurrentPage(paginationData);

    };

    handleClick(page,event){
        event.preventDefault();
        this.gotoPage(page)
    }


    render() {
        const pages = range(1,this.totalPages);
        return (
            <div><ul>
                {pages.map((page,id)=>
                    <li key={id}>
                        <a
                            href="#"
                            onClick={e=>this.handleClick(page,e)}>
                            {page}
                        </a>
                    </li>)
                }
            </ul>
            </div>
        );
    }
}
const mapDispatchToProps = dispatch => ({
    getCurrentPage: bindActionCreators(getCurrentPage, dispatch),
});

Pagination.propTypes = {};

export default connect(null, mapDispatchToProps)(Pagination);

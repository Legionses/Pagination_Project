/**
 * Created by Avell on 13.03.2019.
 */
import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {getUsers} from '../actions'
import {connect} from 'react-redux'
import UsersCard from "./UsersCard";
import Pagination from "./Pagination";

class UsersContainer extends Component {
    state = {

    };

    componentDidMount() {
        const {getUsers} = this.props;
        getUsers();
    }


    onPageChanged = (users) => {
        const {
            currentPage,
            pageLimit,
            totalPages
        } = this.props.data;

        const offset = (currentPage-1)*pageLimit;
         const currentUsers = users.slice(offset,offset+pageLimit);
        return currentUsers;
        // console.log(`current page ${currentUsers}`)
    };

    render() {
        const {users} = this.props;
        const totalUsers = users.length;
        if (totalUsers === 0) return null;
       const curUsersArr = this.onPageChanged(users);

        return (
            <div>
                {totalUsers}
                <Pagination
                    totalRecords={totalUsers}
                    pageLimit={5}

                />
                {curUsersArr.map((user)=>
                    <UsersCard key={user.id} user={user}/>
                )}
            </div>
        );
    }

}

const mapDispatchToProps = dispatch => ({
    getUsers: bindActionCreators(getUsers, dispatch),
});
const mapStateToProrps = (state) => {
    const {users} = state.userReducer;
    const {data} = state.pagesReducer
    return {users, data}
};


export default connect(mapStateToProrps, mapDispatchToProps)(UsersContainer)

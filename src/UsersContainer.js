/**
 * Created by Avell on 13.03.2019.
 */
import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {getUsers} from './actions/index'
import {connect} from 'react-redux'

import UsersCardComponent from "./components/UsersCardComponent";
import PaginationComponent from "./components/PaginationComponent";
import "./scss/UsersContainer.scss"

class UsersContainer extends Component {

    componentDidMount() {
        const {getUsers} = this.props;
        getUsers();
    }


    onPageChanged = (users) => {
        const {
            currentPage,
            pageLimit
        } = this.props.data;

        const offset = (currentPage - 1) * pageLimit;
        const currentUsers = users.slice(offset, offset + pageLimit);
        return currentUsers;
    };

    render() {
        const {users} = this.props;
        const totalUsers = users.length;
        if (totalUsers === 0) return null;
        const curUsersArr = this.onPageChanged(users);

        return (
            <div className="usersContainer">
                <PaginationComponent
                    totalRecords={totalUsers}
                    pageLimit={5}

                />
                {curUsersArr.map((user) =>
                    <UsersCardComponent key={user.id} user={user}/>
                )}
                <footer>Made by Mishchenko Pavlo 13.03.2019</footer>
            </div>
        );
    }

}

const mapDispatchToProps = dispatch => ({
    getUsers: bindActionCreators(getUsers, dispatch),
});
const mapStateToProrps = (state) => {
    const {users} = state.userReducer;
    const {data} = state.pagesReducer;
    return {users, data}
};


export default connect(mapStateToProrps, mapDispatchToProps)(UsersContainer)

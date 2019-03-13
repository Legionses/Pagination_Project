/**
 * Created by Avell on 13.03.2019.
 */
import Api from '../components/Api';

export const  GET_USERS ='GET_USERS';
export const REQUEST_USERS = "REQUEST_USERS";
export const GET_PAGE ="GET_PAGE";
const requestUser = () =>({
   type:REQUEST_USERS,
    isFetching: true,
    users:[]
});
const getUsersSucces = users =>({
  type:GET_USERS,
    isFetching: false,
    users
});

export const getUsers = () => dispatch => {
    dispatch(requestUser());
   Api.getUser()
    .then(data=>{
            return dispatch(getUsersSucces(data.users))
        })
        .catch(err=>console.log(err));
};

export const getCurrentPage = data =>({
   type:GET_PAGE,
    data
});




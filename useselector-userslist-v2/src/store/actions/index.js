import * as actionTypes from "../actionTypes";

const fetchUsersFailed = () => ({
  type: actionTypes.FETCH_USERS_FAILED
});

const fetchUsersPending = () => ({
  type: actionTypes.FETCH_USERS_PENDING
});

const fetchUsersSuccess = (users) => ({
  type: actionTypes.FETCH_USERS_SUCCESS,
  payload: users
});

const fetchUsersList = () => {
  return (dispatch) => {
    dispatch(fetchUsersPending(true));

    fetch("https://randomuser.me/api/?nat=gb&results=10")
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          throw Error(data.error);
        }
        dispatch(fetchUsersSuccess(data.results));
      })
      .catch(() => dispatch(fetchUsersFailed()));
  };
};

export default {
  fetchUsersList
};

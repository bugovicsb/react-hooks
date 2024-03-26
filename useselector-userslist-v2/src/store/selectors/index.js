import { createSelector } from "reselect";

const getUsers = (state) => state.userList && state.userList.users;

const getUsersName = createSelector([getUsers], (users) => {
  return users?.map((u) => `${u.name.first} ${u.name.last}`);
});

export default {
  getUsersName
};

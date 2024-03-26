import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import actions from "./store/actions";
import selectors from "./store/selectors";

const UsersListWithReselect = () => {
  const isLoading = useSelector((state) => state.userList);
  const userNames = useSelector(selectors.getUsersName);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.fetchUsersList());
  }, [dispatch]);

  return isLoading ? (
    <h2>Loading...</h2>
  ) : (
    <div>
      <h2>Users:</h2>
      {userNames?.map((n) => (
        <p key={n}>{n}</p>
      ))}
    </div>
  );
};

export default UsersListWithReselect;

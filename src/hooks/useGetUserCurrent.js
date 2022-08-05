import { useSelector } from "react-redux";

export const useGetCurrentUser = () => {
  const usersFromStore = useSelector((state) => state.user);

  let currentUser;

  if (usersFromStore) {
    currentUser = Object.values(usersFromStore).filter(
      (obj) => obj.isAuth === true
    )[0];
  }

  if (currentUser) {
    return currentUser;
  }

  return null;
};

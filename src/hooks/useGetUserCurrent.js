import { useSelector } from "react-redux";

export const useGetCurrentUser = () => {
  const usersFromStore = useSelector((state) => state.user);

  const currentUser = Object.values(usersFromStore).filter(
    (obj) => obj.isAuth === true
  )[0];

  if (currentUser) {
    return currentUser;
  }

  return null;
};

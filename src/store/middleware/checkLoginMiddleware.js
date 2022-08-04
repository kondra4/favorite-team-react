export const checkLoginMiddleware = (store) => (next) => (action) => {
  let result;
  const currentStore = store.getState();

  if (action.type === "user/addNewUser") {
    const sameEmailPrevUsers = Object.values(currentStore.user).find(
      (obj) => obj.email === action.payload.email
    );

    if (sameEmailPrevUsers) {
      alert("Error: there is already such a user");

      return result;
    }
  }

  result = next(action);

  return result;
};

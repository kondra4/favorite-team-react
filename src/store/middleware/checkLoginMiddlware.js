export const checkLoginMiddlware = (store) => (next) => (action) => {
  let result;
  let checkEmail = true;

  if (action.type === "user/addEmail") {
    const currentStore = store.getState();

    const emailFromStore = currentStore.user.email;

    if (action.payload === emailFromStore) {
      checkEmail = false;
      alert("Error: there is already such a user");
    } else {
      result = next(action);

      return result;
    }
  } else if (action.type === "user/addPassword" && checkEmail) {
  } else {
    result = next(action);

    return result;
  }
};

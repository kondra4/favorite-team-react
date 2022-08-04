export const checkLoginMiddlware = (store) => (next) => (action) => {
  let result;

  // if (action.type === "user/addNewUser") {
  const currentStore = store.getState();
  //
  //   const emailFromStore = currentStore.user.email;
  //
  //   if (action.payload === emailFromStore) {
  //     checkEmail = false;
  //     alert("Error: there is already such a user");
  //   } else {
  //     result = next(action);
  //
  //     return result;
  //   }
  // } else {
  console.log("before", currentStore.user);
  result = next(action);
  const nextStore = store.getState();
  console.log("after", nextStore.user);
  return result;
};

export const getJwt = () => {
  if (localStorage.getItem("user")) {
    let jwt = localStorage.getItem("user");
    return {
      headers: {
        Authorization: `Basic ${jwt}`,
      },
    };
  }
};

export default function authHeader() {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log("Bearer " + user.responses.accessToken);
  if(user && user.accessToken) {
    return {Authorization: "Bearer " + user.responses.accessToken};
  } else {
    return {};
  }
}
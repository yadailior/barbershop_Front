import axios from "axios";
const MY_SERVER = "http://127.0.0.1:8000";

export function signUp(newUser) {
  return new Promise((resolve) =>
    axios.post(MY_SERVER + "/register", newUser).then((res) => resolve(res))
  );
}

export function logOut() {
  return new Promise((resolve) =>
    axios.post(MY_SERVER + "/logout_user").then((res) => resolve(res))
  );
}

export function doLogIn(loginData) {
  // console.log(loginData);
  return new Promise(
    (resolve) =>
  
    axios
      .post(MY_SERVER + "/login", loginData)

      .then((res) => resolve({ data: res.data }),(res) => resolve({data:res.response.data})),
      
      
  );
}

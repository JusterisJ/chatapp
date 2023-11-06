import axiosUser from "../apiUsers";
import swal from "sweetalert";

export async function getAllUsersData() {
  const res = await axiosUser.get("/");
  return res;
}

export async function createUser(data) {
  const res = await axiosUser.post("/register", JSON.stringify(data));
  return res;
}
// delete user
export async function deleteUserById(id) {
  const res = await axiosUser.get(`/deleteUser/${id}`).then((result) => {
    swal({
      text: "Ištrinta!",
      icon: "success",
      button: "Gerai",
      timer: 2000,
    });
  });
  return res;
}

// find user By email
export async function getUsersByEmail(email) {
  const res = await axiosUser.post(`/userByEmail`, JSON.stringify(email));
  return res;
}
// find email
export async function getEmail(email) {
  const res = await axiosUser.get(`/email?email=${email}`);

  return res.data.data.users;
}

// update user by id
export async function updateUserById(data) {
  const res = await axiosUser.patch(`/updateUser`, JSON.stringify(data)).then((result) => {
    swal({
      text: "Vartotojas redaguotas",
      icon: "success",
      button: "Gerai",
      timer: 2000,
    });
  });

  return res;
}

export async function getUserById(id) {
  const res = await axiosUser.get(`/${id}`);
  return res;
}
// INCOME



export async function findIncomeAndDelete(id, subID) {
  const response = await axiosUser.patch(`/${id}/inc/dlt/${subID}`);
  return response;
}



export async function loginUser(data) {
  const res = await axiosUser.post(`/login?email=${data.email}&password=${data.password}`, JSON.stringify(data));
  return res;
}
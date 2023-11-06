import axiosPost from "../apiPosts";
import swal from "sweetalert";

export async function getAllPosts() {
  const res = await axiosPost.get("/");
  return res;
}

export async function createPost(data) {
  const res = await axiosPost.post("/createPost", JSON.stringify(data));
  return res;
}
export async function likePost(_id) {
  console.log(_id)
  let data = {
    _id: _id
  }
  const res = await axiosPost.post("/likePost", JSON.stringify(data));
  console.log(res)
  return res;
}
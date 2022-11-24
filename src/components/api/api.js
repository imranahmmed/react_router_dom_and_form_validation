import axios from "axios";

export async function getUsers() {
    let userList = await axios.get("https://jsonplaceholder.typicode.com/users")
    return userList
}
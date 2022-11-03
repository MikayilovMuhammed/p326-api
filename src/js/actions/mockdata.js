import { fetchMethod } from "./api.js";

const baseUrl = "https://624b18f944505084bc4c1fed.mockapi.io";

export const getAllUsers = async () => {
  let values;
  //   await fetch(`${baseUrl}/users`)
  //     .then((response) => response.json())
  //   .then((data) => {
  //     values = data;
  //   });

  await fetchMethod(`${baseUrl}/users`).then((data) => {
    values = data;
  });

  return values;
};

export const getUserById = async (id) => {
  //   debugger;
  let values;
  await fetch(`${baseUrl}/users/${id}`)
    .then((response) => response.json())
    .then((data) => {
      values = data;
    });

  //   fetchMethod(`${baseUrl}/users`, "GET");

  return values;
};

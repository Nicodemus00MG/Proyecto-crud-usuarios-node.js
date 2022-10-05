const uuid = require("uuid");

const usersDB = [
  {
    id: "0fc50a91-382a-4e63-87b1-6e35355daebd",
    first_name: " Josue Nicolas ",
    last_name: "Muñoz",
    email: "jonimates2000@gmail.com",
    password: "passwld21",
    birthday: "2000/05/17",
  },
  {
    id: "wq91009dc-4cr21-891-123f-3422a43297925",
    first_name: "Daniela Nicole",
    last_name: "Montalvo",
    email: "danii3@gmail.com",
    password: "danni213",
    birthday: "2000/04/18",
  },
  {
    id: "e3aedbe3-32dr39-324743-32fe4-7834na3",
    first_name: "Nicolas",
    last_name: "Gavilanez",
    email: "nicolas213de@gmail.com",
    password: "nicolas876gde1",
    birthday: "2000/04/19",
  },
];

const getAllUsers = () => {
  return usersDB;
};

const getUserById = (id) => {
  const data = usersDB.find((user) => user.id === id);
  return data;
};

const createUser = (first_name, last_name, email, password, birthday) => {
  const newUser = {
    id: uuid.v4(),
    first_name,
    last_name,
    email,
    password,
    birthday,
  };
  usersDB.push(newUser);
  return newUser;
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
};

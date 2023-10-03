import api from './http';

const registerUser = async (name, email, password, squad) => {
  const data = {
    name,
    email,
    password,
    confirmPassword: password,
    squad,
  };
  try {
    const response = await api.post('/signup/', data);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const loginUser = async (email, password) => {
  return api.post('/login/', {email, password});
};

const checkIn = async userId => {
  return api.post(`/users/${userId}/checkin/`);
};

const checkOut = async userId => {
  return api.post(`/users/${userId}/checkout/`);
};

const getUserById = async userId => {
  return api.get(`/users/${userId}`);
};

const getAllUsers = async () => {
  return api.get('/users');
};

const createUser = async () => {
  return api.post('/users');
};

const updateUser = async (userId, user) => {
  return api.put(`/users/${userId}`, user);
};

const deleteUser = async userId => {
  return api.delete(`/users/${userId}`);
};

export default {
  registerUser,
  loginUser,
  checkIn,
  checkOut,
  getUserById,
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
};

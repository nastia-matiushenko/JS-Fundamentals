let users = [];
let nextId = 1;

function createUser(userData) {
  const user = {
    id: nextId++,
    ...userData,
    createdAt: new Date().toISOString(),
  };
  users.push(user);
  return Promise.resolve(user);
}

function getUserById(id) {
  const user = users.find((u) => u.id === id);
  if (!user) {
    return Promise.reject(new Error("User not found"));
  }
  return Promise.resolve(user);
}

function getAllUsers() {
  return Promise.resolve([...users]);
}

function updateUser(id, updates) {
  const userIndex = users.findIndex((u) => u.id === id);
  if (userIndex === -1) {
    return Promise.reject(new Error("User not found"));
  }
  users[userIndex] = { ...users[userIndex], ...updates };
  return Promise.resolve(users[userIndex]);
}

function deleteUser(id) {
  const userIndex = users.findIndex((u) => u.id === id);
  if (userIndex === -1) {
    return Promise.reject(new Error("User not found"));
  }
  users.splice(userIndex, 1);
  return Promise.resolve({ success: true });
}

function resetUsers() {
  users = [];
  nextId = 1;
}

module.exports = {
  createUser,
  getUserById,
  getAllUsers,
  updateUser,
  deleteUser,
  resetUsers,
};

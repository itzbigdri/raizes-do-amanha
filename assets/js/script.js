import initialData from 'data.js'

const ROLE_KEY = "userRole";

// Retorna papel atual
function getRole() {
  return localStorage.getItem(ROLE_KEY) || "public";
}

// Define papel
function setRole(role) {
  localStorage.setItem(ROLE_KEY, role);
}

// Logout
function logout() {
  localStorage.removeItem(ROLE_KEY);
}

// Helpers
function isPublic() {
  return getRole() === "public";
}

function isUser() {
  return getRole() === "user";
}

function isAdmin() {
  return getRole() === "admin";
}
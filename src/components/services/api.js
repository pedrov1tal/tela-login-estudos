const API_URL = "http://localhost:3001";

export async function loginUser(email, password) {
  const response = await fetch(
    `${API_URL}/users?email=${email}&password=${password}`
  );

  const data = await response.json();
  return data;
}

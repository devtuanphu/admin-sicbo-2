const URL_API = import.meta.env.VITE_URL_API;

export const loginAdmin = async (email, password) => {
  try {
    const response = await fetch(`${URL_API}/api/users/login-admin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Login failed");
    }

    return data;
  } catch (error) {
    throw error;
  }
};

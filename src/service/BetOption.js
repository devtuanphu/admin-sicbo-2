const URL_API = import.meta.env.VITE_URL_API;

export const getBetOption = async () => {
  try {
    const response = await fetch(`${URL_API}/api/bet-options`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to fetch bet options");
    }

    return data;
  } catch (error) {
    throw error;
  }
};
export const updateBetOption = async (id, payload) => {
  try {
    const response = await fetch(`${URL_API}/api/bet-options/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to update bet option");
    }

    return data;
  } catch (error) {
    throw error;
  }
};

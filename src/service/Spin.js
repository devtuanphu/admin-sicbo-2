const URL_API = import.meta.env.VITE_URL_API;

export const getCurrentSpin = async () => {
  try {
    const response = await fetch(`${URL_API}/api/spin/current`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
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
export const updateSpinResult = async (
  chosenOption,
  resultMultiplier,
  numberResult
) => {
  try {
    const response = await fetch(`${URL_API}/api/spin/result`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chosenOption,
        resultMultiplier,
        numberResult,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Update spin result failed");
    }

    return data;
  } catch (error) {
    throw error;
  }
};

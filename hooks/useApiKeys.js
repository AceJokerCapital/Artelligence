import { useCallback, useState, useEffect } from "react";
import { baseUrl } from "@/utils/api/apiHelper";

export function useApiKeys() {
  const [apiKey, setApiKey] = useState(null);

  const fetchUserKey = useCallback(async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const fetchKeyRes = await fetch(
        `${baseUrl}/user-x/api-key/${user?.sub}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!fetchKeyRes) {
        console.log("api key does not exist for uer");
        return;
      }

      const apiKeyData = await fetchKeyRes.json();

      if (!apiKeyData.success) {
        console.log("retrieval failed");
        return;
      }

      setApiKey(apiKeyData.data.apiKey);
    } catch (error) {
      console.log("fetchUserKey: ", error);
    }
  }, []);

  const updateApiKey = async (value) => {
    if (!value && value == "") {
      alert("Api key is empty, please provide a key");
      return;
    }

    try {
      let user = JSON.parse(localStorage.getItem("user"));

      const response = await fetch(`${baseUrl}/user-x/api-key`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sub: user.sub,
          apiKey: value,
        }),
      });

      const result = await response.json();
      alert(result?.message);
    } catch (error) {
      console.log(`unknown error while updating api key: ${error}`);
    }
  };

  async function getApiKey() {
    if (!apiKey) {
      await fetchUserKey();
    }

    return apiKey;
  }

  return {
    apiKey,
    fetchUserKey,
    updateApiKey,
    getApiKey,
  };
}

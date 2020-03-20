import { useState, useCallback } from "react";

export const useHttp = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<object | null>(null);
<<<<<<< HEAD
  const request = useCallback(async (url, method = "GET", body = null) => {
    setLoading(true);
    try {
      const response = await fetch(url, {
        method,
        body,
        credentials: "include"
      });
      const data = await response.json();
      /* if (!response.ok) {
        throw new Error(data.message || "Ошибка получения данных!");} */

      setLoading(false);
      return data;
    } catch (e) {
      setLoading(false);
      setError(e.message);
      throw e;
    }
  }, []);
=======
  const request = useCallback(
    async (url, method = "GET", body = null, headers = {}) => {
      setLoading(true);
      try {
        
        const response = await fetch(url, { method, body, headers, credentials: 'include' });
        const data = await response.json();

        //TODO: Переделать обработку ошибок с сервера.
        // if (!response.ok) {
        //   throw new Error(data.message || "Ошибка получения данных!");
        // }

        setLoading(false);
        return data;
      } catch (e) {
        setLoading(false);
        setError(e.message);
        throw e;
      }
    },
    []
  );
>>>>>>> e8e861838a09cb2c7f3dc01ed7740428bbc6e3a9

  const clearError = useCallback(() => setError(null), []);

  return { loading, request, error, clearError };
};

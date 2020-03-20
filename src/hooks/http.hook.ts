import { useState, useCallback } from "react";

export const useHttp = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<object | null>(null);
  const request = useCallback(
    async (url, method = "GET", body = null) => {
      setLoading(true);
      try {

        const response = await fetch(url, { method, body, credentials: 'include' });
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

  const clearError = useCallback(() => setError(null), []);

  return { loading, request, error, clearError };
};

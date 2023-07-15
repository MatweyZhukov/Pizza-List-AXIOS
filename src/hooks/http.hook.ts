//Global
import { useCallback } from "react";

//Types
import { RequestMethods } from "../interfaces/types";

export const useHttp = () => {
  const request = useCallback(
    async (
      url: string,
      method?: RequestMethods,
      body?: string,
      headers = { "Content-Type": "application/json" }
    ) => {
      try {
        const response = await fetch(url, { method, body, headers });

        if (!response.ok) {
          throw new Error(`Couldn'n fetch ${url}, status: ${response.status}`);
        }

        const data = await response.json();

        return data;
      } catch (e) {
        throw e;
      }
    },
    []
  );

  return {
    request,
  };
};

import { useState, useCallback } from "react";
import {  AxiosRequestConfig, AxiosResponse } from "axios";
import { apiClient } from "./components/service/api"; // Use authenticated client

type ApiState<T> = {
  data?: T;
  loading: boolean;
  error?: string;
};

export function useApi<T>() {
  const [state, setState] = useState<ApiState<T>>({
    data: undefined,
    loading: false,
    error: undefined,
  });

  const request = useCallback(async (config: AxiosRequestConfig) => {
    setState({ loading: true, error: undefined });

    try {
      const response: AxiosResponse<T> = await apiClient(config);
      setState({ data: response.data, loading: false });
      return response.data;
    } catch (err: any) {
      setState({
        error: err.response?.data?.message || "Something went wrong",
        loading: false,
      });
      throw err;
    }
  }, []);

  return { ...state, request };
}

export function useApiWithJWT<T>(jwtToken: string) { // Accept jwtToken as a parameter
  const [state, setState] = useState<ApiState<T>>({
    data: undefined,
    loading: false,
    error: undefined,
  });

  const request = useCallback(async (config: AxiosRequestConfig) => {
    setState({ loading: true, error: undefined });

    try {
      // Add JWT token to Authorization header
      const headers = {
        Authorization: `Bearer ${jwtToken}`,
        ...config.headers, // Ensure any existing headers are preserved
      };

      // Pass the headers with the API request
      const response: AxiosResponse<T> = await apiClient({ ...config, headers });
      setState({ data: response.data, loading: false });
      return response.data;
    } catch (err: any) {
      setState({
        error: err.response?.data?.message || "Something went wrong",
        loading: false,
      });
      throw err;
    }
  }, [jwtToken]);

  return { ...state, request };
}
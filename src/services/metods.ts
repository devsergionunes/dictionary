/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosError, AxiosRequestHeaders } from "axios";

import { api } from "./api";

export async function apiGet(url: string, headers?: AxiosRequestHeaders) {
  try {
    const data = await api.get(url, { headers });
    return data;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw axiosError.response?.data;
  }
}

export async function apiPost(
  url: string,
  body: any,
  headers?: AxiosRequestHeaders
) {
  try {
    const data = await api.post(url, body, { headers });
    return data;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw axiosError.response?.data;
  }
}

export async function apiDelete(url: string, headers?: AxiosRequestHeaders) {
  try {
    const data = await api.get(url, { headers });
    return data;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw axiosError.response?.data;
  }
}

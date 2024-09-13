import React, { createContext, useState } from "react";
import axios from "axios";
export const ContextAPIPublic = createContext();

export const ContextAPIPStorage = ({ children }) => {
  const url = import.meta.env.VITE_API_URL;

  const [load, setLoad] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  async function shortenURL(longUrl) {
    try {
      setData(null);
      setLoad(true);
      setError(false);
      const { data } = await axios.post(`${url}/shorten`, { longUrl });
      setData(data.body);
    } catch (error) {
      setError(error.response.data.body);
      setData(null);
    } finally {
      setLoad(false);
    }
  }
  async function getURL(hash) {
    try {
      setData(null);
      setLoad(true);
      setError(false);
      const { data } = await axios.get(`${url}/${hash}/data`);
      console.log(data);
      setData(data.body);
    } catch (error) {
      setError(error.response.data.body);
      setData(null);
    } finally {
      setLoad(false);
    }
  }

  return (
    <ContextAPIPublic.Provider
      value={{ shortenURL, getURL, load, data, error }}
    >
      {children}
    </ContextAPIPublic.Provider>
  );
};

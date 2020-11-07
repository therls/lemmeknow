import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  const apiKey = "78b9d599c4f94f8fa3afb1a5458928d6";

  useEffect(() => {
    axios
      .get(
        `http://newsapi.org/v2/everything?q=entertainment&from=2020-10-06&sortBy=publishedAt&apiKey=${apiKey}
        `
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  );
};

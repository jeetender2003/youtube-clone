import { createContext, useEffect, useState } from "react";
import { fetchDataFromAPI } from "../utils/api";

export const Context = createContext();

export const AppContext = (props) => {
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState(false);
  const [selectCategories, setSelectCategories] = useState("New");
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    console.log("USE EFFECT");
    fetchSelectedCategoryData(selectCategories);
  }, [selectCategories]);

  const fetchSelectedCategoryData = (query) => {
    setLoading(true);
    fetchDataFromAPI(`search/?q=${query}`).then(({contents}) => {
      console.log(contents);
      setSearchResults(contents);
      setLoading(false);
    });
  };

  return (
    <Context.Provider
      value={
        {
          loading,
        setLoading,
        searchResults,
        setSearchResults,
        selectCategories,
        setSelectCategories,
        mobileMenu,
        setMobileMenu
        }
      }
    >
      {props.children}
    </Context.Provider>
  );
};

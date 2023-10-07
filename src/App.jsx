import React from "react";
import { AppContext } from "./context/contextApi";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Feed from "./components/Feed";
import SearchResult from "./components/SearchResult";
import VideoDetail from "./components/VideoDetail";

const App = () => {
  console.log("ENV", process.env.REACT_APP_RAPID_API_KEY);
  return (
    <AppContext>
      <BrowserRouter>
        <div className="flex flex-col h-full">
        <Header />
        <Routes>
          <Route  path="/" element={ <Feed />} />
          <Route path="/searchResult/:searchQuery" element={<SearchResult />} />
          <Route path="/video/:id" element={<VideoDetail />} />
         
        </Routes>
        </div>
      </BrowserRouter>
    </AppContext>
  );
};

export default App;

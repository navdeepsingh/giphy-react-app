import React, { useState } from "react";
import "./scss/index.scss";
import SearchForm from "./components/SearchForm";
import Listing from "./components/Listing";

function App() {
  const [images, setImages] = useState([]);

  return (
    <div className="App">
      <SearchForm setImages={setImages} />
      <Listing images={images} />
    </div>
  );
}

export default App;

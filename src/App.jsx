import "./App.css";
import ProductForm from "./components/ProductForm";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <div className="app-wrapper">
        <h1 className="app-title">Create Product</h1>
      </div>
      <ProductForm />
    </div>
  );
}

export default App;

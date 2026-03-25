import { useState } from "react";
import API from "../services/api";
import "./AddProduct.css";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");

  const addProduct = async () => {
    if (!name || !desc || !price) {
      alert("All fields required");
      return;
    }

    await API.post("/products", {
      name,
      description: desc,
      price,
    });

    setName("");
    setDesc("");
    setPrice("");
    alert("Product added successfully");
  };

  return (
    <div className="add-container">
      <h2 className="add-title">Add Product</h2>

      <input
        className="add-input"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="add-input"
        placeholder="Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />

      <input
        className="add-input"
        type="number"
        value={price}
        placeholder="Price"
        onChange={(e) => setPrice(e.target.value)}
      />

      <button className="add-btn" onClick={addProduct}>
        Add Product
      </button>
    </div>
  );
}

export default AddProduct;

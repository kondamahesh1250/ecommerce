import { useState } from "react";
import API from "../services/api";
import "./AddProduct.css"; // ✅ import CSS

function AddProduct() {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [msg, setMsg] = useState("");

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

    setMsg("Product added successfully ✅");
    setName("");
    setDesc("");
    setPrice("");
  };

  return (
    <div className="add-container">
      <h2 className="add-title">Add Product</h2>

      <input
        className="add-input"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="add-input"
        placeholder="Description"
        onChange={(e) => setDesc(e.target.value)}
      />

      <input
        className="add-input"
        type="number"
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

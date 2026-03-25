import { useState } from "react";
import API from "../services/api";
import "./EditProduct.css"; // ✅ import CSS

function EditProduct({ product, onClose, onUpdate }) {
  const [form, setForm] = useState(product);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    API.put(`/products/${form.id}`, form).then(() => {
      onUpdate();
      onClose();
    });
  };

  return (
    <div className="edit-overlay">
      <div className="edit-container">
        <h3 className="edit-title">Edit Product</h3>

        <input
          className="edit-input"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
        />

        <input
          className="edit-input"
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description"
        />

        <input
          className="edit-input"
          name="price"
          value={form.price}
          onChange={handleChange}
          placeholder="Price"
        />

        <div className="edit-actions">
          <button className="btn-update" onClick={handleUpdate}>
            Update
          </button>
          <button className="btn-cancel" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditProduct;
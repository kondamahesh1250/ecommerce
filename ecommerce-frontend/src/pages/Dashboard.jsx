import { useEffect, useState } from "react";
import API from "../services/api";
import EditProduct from "./EditProduct";
import "./Dashboard.css";

function Dashboard() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const role = localStorage.getItem("role");

  const loadProducts = () => {
    API.get("/products").then((res) => setProducts(res.data));
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const deleteProduct = (id) => {
    API.delete(`/products/${id}`).then(() => {
      loadProducts();
      alert("Product deleted successfully");
    });
  };

  return (
    <div className="dashboard-container">
      {products.length === 0 && (
        <>
          <h2 className="dashboard-title">Products</h2>
          <p>No products found</p>
        </>
      )}

      {!selectedProduct && (
        <>
          {products.length !== 0 && (
            <>
              <h2 className="dashboard-title">Products</h2>
            </>
          )}
          <div className="product-grid">
            {products.map((p) => (
              <>
                <div key={p.id} className="product-card">
                  <h3 className="product-name">{p.name}</h3>
                  <p className="product-desc">{p.description}</p>
                  <p className="product-price">₹{p.price}</p>

                  {role === "ROLE_ADMIN" && (
                    <div className="product-actions">
                      <button
                        className="btn-edit"
                        onClick={() => setSelectedProduct(p)}
                      >
                        Edit
                      </button>

                      <button
                        className="btn-delete"
                        onClick={() => deleteProduct(p.id)}
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </>
            ))}
          </div>
        </>
      )}

      {/* Edit Form */}
      {selectedProduct && (
        <EditProduct
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onUpdate={loadProducts}
        />
      )}
    </div>
  );
}

export default Dashboard;

'use client';

import { useState } from 'react';

export default function ProductsPage() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Syrenev Plus', category: 'Neurology', price: '₦4,500' },
    { id: 2, name: 'PainFree Tabs', category: 'Analgesics', price: '₦2,800' }
  ]);
  const [formVisible, setFormVisible] = useState(false);
  const [newProduct, setNewProduct] = useState({ name: '', category: '', price: '' });

  const handleAddProduct = () => {
    const nextId = products.length + 1;
    setProducts([...products, { ...newProduct, id: nextId }]);
    setNewProduct({ name: '', category: '', price: '' });
    setFormVisible(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-[color:var(--text-main)]">Products</h1>
        <button
          onClick={() => setFormVisible(true)}
          className="bg-[color:var(--accent-orange)] text-black px-4 py-2 rounded-md font-medium hover:opacity-90"
        >
          Add Product
        </button>
      </div>

      {/* Add Product Form */}
      {formVisible && (
        <div className="bg-[color:var(--bg-card)] p-6 rounded-md space-y-4 shadow">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Product Name"
              value={newProduct.name}
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
              className="input"
            />
            <input
              type="text"
              placeholder="Category"
              value={newProduct.category}
              onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
              className="input"
            />
            <input
              type="text"
              placeholder="Price"
              value={newProduct.price}
              onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
              className="input"
            />
          </div>
          <div className="flex gap-4">
            <button
              onClick={handleAddProduct}
              className="bg-[color:var(--highlight-purple)] text-white px-4 py-2 rounded-md"
            >
              Save
            </button>
            <button
              onClick={() => setFormVisible(false)}
              className="text-[color:var(--text-muted)] hover:text-red-400"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Product Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="text-[color:var(--text-muted)] border-b border-[color:var(--border-gray)]">
            <tr>
              <th className="py-2 px-4">ID</th>
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Category</th>
              <th className="py-2 px-4">Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-b border-[color:var(--border-gray)]">
                <td className="py-2 px-4">{product.id}</td>
                <td className="py-2 px-4">{product.name}</td>
                <td className="py-2 px-4">{product.category}</td>
                <td className="py-2 px-4">{product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

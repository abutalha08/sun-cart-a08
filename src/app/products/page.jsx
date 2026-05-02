"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { Search } from "lucide-react";

export default function ProductsPage() {

  const [products, setProducts] = useState([]);


  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [price, setPrice] = useState("All");
  const [sort, setSort] = useState("default");


  useEffect(() => {
    const loadProducts = async () => {
      const res = await fetch(
        "https://sun-cart-a08.vercel.app/products.json"
      );
      const data = await res.json();
      setProducts(data);
    };

    loadProducts();
  }, []);


  const handleSearch = (value) => {
    setSearch(value);
  };

  const handleCategory = (value) => {
    setCategory(value);
  };

  const handlePrice = (value) => {
    setPrice(value);
  };

  const handleSort = (value) => {
    setSort(value);
  };

  let filtered = products
    // Search
    .filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    )

    // Category
    .filter((p) =>
      category === "All" ? true : p.category === category
    )

    // PRICE
    .filter((p) => {
      if (price === "Under50") return p.price < 50;
      if (price === "50-100") return p.price >= 50 && p.price <= 100;
      if (price === "100+") return p.price > 100;
      return true;
    });

  // sort
  if (sort === "low") {
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  } else if (sort === "high") {
    filtered = [...filtered].sort((a, b) => b.price - a.price);
  } else if (sort === "rating") {
    filtered = [...filtered].sort((a, b) => b.rating - a.rating);
  }

  return (
    <div className="min-h-screen bg-orange-50/40">

      <section className="bg-linear-to-br from-orange-500 via-pink-500 to-orange-400 text-white text-center py-16 px-4">

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-3">
          Summer Collection
        </h1>

        <p className="text-white/90 text-sm sm:text-lg max-w-2xl mx-auto">
          Explore premium summer essentials designed for your lifestyle
        </p>

      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">

        <div className="relative mb-6">

          <Search className="absolute left-3 top-3 text-gray-400" />

          <input
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search products..."
            className="w-full pl-10 py-3 border rounded-xl bg-white focus:outline-none focus:border-orange-500"
          />

        </div>

        <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-6 sm:items-center sm:justify-between">

          <div className="flex flex-wrap gap-3">

            {/* CATEGORY */}
            <select
              value={category}
              onChange={(e) => handleCategory(e.target.value)}
              className="
    w-48 sm:w-56
    px-4 py-3
    rounded-xl
    border-2 border-orange-200
    bg-white
    text-gray-700 font-medium
    shadow-sm
    focus:outline-none
    focus:border-orange-500
    focus:ring-2 focus:ring-orange-200
    transition
    hover:border-orange-300
    cursor-pointer
  "
            >
              <option value="All">All</option>
              <option value="Accessories">Accessories</option>
              <option value="Clothing">Clothing</option>
              <option value="Skincare">Skincare</option>
            </select>

            {/* PRICE */}
            <select
              value={price}
              onChange={(e) => handlePrice(e.target.value)}
              className="
    w-48 sm:w-56
    px-4 py-3
    rounded-xl
    border-2 border-orange-200
    bg-white
    text-gray-700 font-medium
    shadow-sm
    focus:outline-none
    focus:border-orange-500
    focus:ring-2 focus:ring-orange-200
    transition
    hover:border-orange-300
    cursor-pointer
  "
            >
              <option value="All">All Price</option>
              <option value="Under50">Under $50</option>
              <option value="50-100">$50 - $100</option>
              <option value="100+">Over $100</option>
            </select>

            {/* SORT */}
            <select
              value={sort}
              onChange={(e) => handleSort(e.target.value)}
              className="
    w-48 sm:w-56
    px-4 py-3
    rounded-xl
    border-2 border-orange-200
    bg-white
    text-gray-700 font-medium
    shadow-sm
    focus:outline-none
    focus:border-orange-500
    focus:ring-2 focus:ring-orange-200
    transition
    hover:border-orange-300
    cursor-pointer
  "
            >
              <option value="default">Default</option>
              <option value="low">Price: Low → High</option>
              <option value="high">Price: High → Low</option>
              <option value="rating">Top Rating</option>
            </select>

          </div>

        </div>

        <p className="mb-6 text-gray-600">
          Total Products:{" "}
          <span className="font-bold text-orange-500">
            {filtered.length}
          </span>
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}

        </div>

      </div>
    </div>
  );
}
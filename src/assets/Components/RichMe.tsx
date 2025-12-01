// import {  create } from 'zustand'
import * as IMAGES from "../images"
import { useState } from 'react';





const Items = [
  { id: 1, item: "Apartments", price: 1500, image: IMAGES.apartments },
  { id: 2, item: "Bull", price: 1200, image: IMAGES.bull },
  { id: 3, item: "Cows", price: 900, image: IMAGES.cows },
  { id: 4, item: "Diamond Ring", price: 5000, image: IMAGES.diamondRing },
  { id: 5, item: "Donation", price: 50, image: IMAGES.donation },
  { id: 6, item: "F1 Car", price: 2500000, image: IMAGES.f1car },
  { id: 7, item: "Family Home", price: 150000, image: IMAGES.familyHome },
  { id: 8, item: "Ferrari", price: 300000, image: IMAGES.ferrari },
  { id: 9, item: "Ford F150", price: 30000, image: IMAGES.fordF150 },
  { id: 10, item: "Gold Bar", price: 65000, image: IMAGES.goldBar },
  { id: 11, item: "Helicopter", price: 1200000, image: IMAGES.helicopter },
  { id: 12, item: "High-End Restaurant", price: 1500, image: IMAGES.highEndRestaurant },
  { id: 13, item: "Horses", price: 20000, image: IMAGES.horses },
  { id: 14, item: "Hulu", price: 10, image: IMAGES.hulu },
  { id: 15, item: "iPhone 17", price: 1500, image: IMAGES.iphone17 },
  { id: 16, item: "land", price: 1500, image: IMAGES.land },
  { id: 17, item: "Luxuru-wine", price: 1500, image: IMAGES.luxuryWine },
  { id: 18, item: "macbook", price: 1500, image: IMAGES.macbook },
  { id: 19, item: "mansion", price: 1500, image: IMAGES.mansion },
  { id: 20, item: "monster-truck", price: 1500, image: IMAGES.monsterTruck },
  { id: 21, item: "movie", price: 1500, image: IMAGES.movie },
  { id: 22, item: "netflix", price: 1500, image: IMAGES.netflix },
  { id: 23, item: "private-jet", price: 1500, image: IMAGES.privateJet },
  { id: 24, item: "resort-center", price: 1500, image: IMAGES.resortCenter },
  { id: 25, item: "rolex", price: 1500, image: IMAGES.rolex},
  { id: 26, item: "samsung", price: 1500, image: IMAGES.samsung },
  { id: 27, item: "ship", price: 1500, image: IMAGES.ship },
  { id: 28, item: "spottify", price: 1500, image: IMAGES.spotify },
  { id: 29, item: "Malls", price: 1500, image: IMAGES.supermarket},
  { id: 30, item: "Tesla", price: 1500, image: IMAGES.tesla },
  { id: 31, item: "vacation", price: 1500, image: IMAGES.vacation},
  { id: 32, item: "yatch", price: 1500, image: IMAGES.yacht },
  { id: 33, item: "youtube", price: 1500, image: IMAGES.youtube },
];





const ItemsList = () => {
  const [count, setCount] = useState(455_991_870_000);
  const [spent, setSpent] = useState(0);
  const [cart, setCart] = useState<number>(0);

  function buyItems(price: number) {
    setCount((prev) => prev - price);
    setSpent((prev) => prev + price);
    setCart((prev) => prev + 1);
  }

  function sellItems(price: number) {
    setCount((prev) => prev + price);
    setSpent((prev) => prev - price);
    setCart((prev) => Math.max(prev - 1, 0));
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      
      {/* Navbar */}
      <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center sticky top-0 z-10">
        <h1 className="text-2xl font-bold text-gray-800">Luxury Store</h1>
        <p className="text-lg font-medium text-gray-700">
          Balance: <span className="text-green-600 font-bold">${count.toLocaleString()}</span>
        </p>
      </nav>

      {/* Cart Summary */}
      <div className="max-w-6xl mx-auto mt-6 bg-white shadow-md p-4 rounded-xl">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Cart Summary</h2>
        <div className="flex flex-col sm:flex-row justify-between gap-2">
          <p className="text-gray-700">Items Bought: <span className="font-bold">{cart}</span></p>
          <p className="text-gray-700">Money Spent: <span className="font-bold text-red-600">${spent.toLocaleString()}</span></p>
          <p className="text-gray-700">Remaining Balance: <span className="font-bold text-green-600">${count.toLocaleString()}</span></p>
        </div>
      </div>

      {/* Items Cards Grid */}
      <div className="max-w-6xl mx-auto mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Items.map((Product) => (
          <div
            key={Product.id}
            className="bg-white shadow-md rounded-lg overflow-hidden border hover:shadow-xl transition flex flex-col"
          >
            <img
              src={Product.image}
              alt={Product.item}
              className="w-full h-40 object-cover"
            />
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{Product.item}</h3>
              <p className="text-gray-700 mb-4">Price: <span className="font-bold text-black">${Product.price.toLocaleString()}</span></p>
              <div className="mt-auto flex gap-2">
                <button
                  onClick={() => sellItems(Product.price)}
                  className="flex-1 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                >
                  Sell
                </button>
                <button
                  onClick={() => buyItems(Product.price)}
                  className="flex-1 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                >
                  Buy
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemsList;

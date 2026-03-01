import React, { useState } from 'react';
import { motion } from 'framer-motion';

const cartItemsData = [
  {
    id: 1,
    name: 'Classic Tailored Blazer',
    price: 95.00,
    image: 'https://placeholder.co/100x100?text=Blazer', // Assume backend provides URL
    quantity: 1,
  },
  {
    id: 2,
    name: 'Luxury Handbag',
    price: 65.00,
    image: 'https://placeholder.co/100x100?text=Handbag',
    quantity: 1,
  },
  {
    id: 3,
    name: 'Button-down Shirt',
    price: 120.00,
    image: 'https://placeholder.co/100x100?text=Shirt',
    quantity: 1,
  },
  {
    id: 4,
    name: 'Lounge Set',
    price: 95.00,
    image: 'https://placeholder.co/100x100?text=Lounge',
    quantity: 1,
  },
];

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState(cartItemsData);

  const handleQuantityChange = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 0.00;
  const taxes = 0.00;
  const total = subtotal + shipping + taxes;

  return (
    <div className="min-h-screen bg-white font-sans">
      <main className="container mx-auto px-4 py-8 md:flex md:justify-between md:gap-8">
        <section className="md:w-2/3">
          <motion.div
            className="bg-orange-500 text-white grid grid-cols-3 p-4 rounded-t-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0 }}
          >
            <span>Product</span>
            <span className="text-center">Quantity</span>
            <span className="text-right">Subtotal</span>
          </motion.div>
          {cartItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="flex items-center border-b border-gray-200 py-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * (index + 1) }}
            >
              <button
                onClick={() => handleRemoveItem(item.id)}
                className="text-gray-500 hover:text-red-500 mr-4"
              >
                ×
              </button>
              <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
              <div className="ml-4 flex-grow">
                <p className="font-semibold">{item.name}</p>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
              </div>
              <div className="flex items-center mx-4">
                <button
                  onClick={() => handleQuantityChange(item.id, -1)}
                  className="bg-gray-200 px-2 py-1 rounded-l hover:bg-gray-300"
                >
                  -
                </button>
                <span className="bg-gray-100 px-4 py-1">{item.quantity}</span>
                <button
                  onClick={() => handleQuantityChange(item.id, 1)}
                  className="bg-gray-200 px-2 py-1 rounded-r hover:bg-gray-300"
                >
                  +
                </button>
              </div>
              <span className="text-right w-24">${(item.price * item.quantity).toFixed(2)}</span>
            </motion.div>
          ))}
          <motion.button
            onClick={handleClearCart}
            className="text-orange-500 py-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 * (cartItems.length + 1) }}
          >
            Clear Shopping Cart
          </motion.button>
        </section>

        <motion.aside
          className="md:w-1/3 bg-orange-100 p-4 rounded-lg mt-8 md:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 * (cartItems.length + 2) }}
        >
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-2">
            <span>Items</span>
            <span>{cartItems.length}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Sub Total</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping</span>
            <span>${shipping.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Taxes</span>
            <span>${taxes.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold mt-4">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button className="bg-orange-500 text-white w-full py-3 mt-4 rounded hover:bg-orange-600">
            Proceed to Checkout
          </button>
        </motion.aside>
      </main>

      <motion.footer
        className="bg-white py-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 * (cartItems.length + 3) }}
      >
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center md:text-left text-orange-500">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-2xl mb-1">🍴</span> {/* Placeholder icon */}
            <p>Free Shipping</p>
            <p className="text-sm text-gray-600">for order above $185</p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <span className="text-2xl mb-1">🛒</span>
            <p>Members Discount</p>
            <p className="text-sm text-gray-600">Discount for elite members</p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <span className="text-2xl mb-1">💳</span>
            <p>Flexible Payment</p>
            <p className="text-sm text-gray-600">Secured payment options</p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <span className="text-2xl mb-1">🎧</span>
            <p>Swift Support</p>
            <p className="text-sm text-gray-600">24/7 customer support</p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default ShoppingCart;
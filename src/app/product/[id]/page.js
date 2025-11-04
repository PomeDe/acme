"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function ProductPage() {
  const { id } = useParams();
    const [sidebar, setSidebar] = useState(false);
  const [product, setProduct] = useState(null);
    const [a, setA] = useState(false);
      const [b, setB] = useState(false);
  const [chosen, setChosen] = useState(false);
  
  useEffect(() => {
  if (a && b) {
    setChosen(true);
  } else {
    setChosen(false);
  }
}, [a, b]);


  const products = [
    { id: 0, name: "Acme Mug", price: "$10.00 USD", image: "/mug-1.avif", category: "drinkware" },
    { id: 1, name: "Acme Hoodie", price: "$50.00 USD", image: "/hoodie-1.avif", category: "hoodies" },
    { id: 2, name: "Acme Baby Onesie", price: "$10.00 USD", image: "/baby-onesie-beige-1.avif", category: "kids" },
    { id: 3, name: "Acme Baby Cap", price: "$10.00 USD", image: "/baby-cap-black.avif", category: "kids" },
    { id: 4, name: "Acme T-Shirt", price: "$20.00 USD", image: "/t-shirt-color-black.avif", category: "shirts" },
    { id: 5, name: "Acme Circle T-Shirt", price: "$20.00 USD", image: "/t-shirt-spiral-1.avif", category: "shirts" },
    { id: 6, name: "Acme Prism T-Shirt", price: "$25.00 USD", image: "/t-shirt-1.avif", category: "shirts" },
    { id: 7, name: "Acme Cup", price: "$15.00 USD", image: "/cup-black.avif", category: "drinkware" },
    { id: 8, name: "Acme Drawstring Bag", price: "$10.00 USD", image: "/bag-1-dark (1).avif", category: "bags" },
    { id: 9, name: "Acme Keyboard", price: "$150.00 USD", image: "/keyboard.avif", category: "electronics" },
    { id: 10, name: "Acme Cowboy Hat", price: "$160.00 USD", image: "/cowboy-hat-black-1.avif", category: "headwear" },
    { id: 11, name: "Acme Slip-on Shoes", price: "$45.00 USD", image: "/shoes-1.avif", category: "footwear" },
    { id: 12, name: "Acme Cap", price: "$20.00 USD", image: "/hat-1.avif", category: "headwear" },
    { id: 13, name: "Acme Bomber Jacket", price: "$50.00 USD", image: "/bomber-jacket-army.avif", category: "jackets" },
    { id: 14, name: "Acme Pacifier", price: "$10.00 USD", image: "/pacifier-1.avif", category: "kids" },
    { id: 15, name: "Acme Dog Sweater", price: "$20.00 USD", image: "/dog-sweater-1.avif", category: "pets" },
    { id: 16, name: "Acme Sticker", price: "$4.00 USD", image: "/sticker.avif", category: "stickers" },
    { id: 17, name: "Acme Rainbow Sticker", price: "$4.00 USD", image: "/sticker-rainbow.avif", category: "stickers" },
  ];

  useEffect(() => {
    const selectedProduct = products.find(p => p.id === Number(id));
    setProduct(selectedProduct);
  }, [id]);

  return (
    <div className="w-full flex flex-col items-center bg-neutral-900 text-white">
            <div className="flex justify-between items-center h-20 w-11/12">
      <div className="lg:hidden  h-10 w-10 border rounded-md flex justify-center items-center bg-black">
  <img src="https://img.icons8.com/ios7/512/FFFFFF/menu--v3.png"/>
            </div>
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 border rounded-md flex justify-center items-center bg-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Acme Store logo"
                viewBox="0 0 32 28"
                className="h-4 w-4 fill-white"
              >
                <path d="M21.5758 9.75769L16 0L0 28H11.6255L21.5758 9.75769Z"></path>
                <path d="M26.2381 17.9167L20.7382 28H32L26.2381 17.9167Z"></path>
              </svg>
            </div>
            <Link href="/" className="font-semibold text-white">ACME STORE</Link>
          </div>

          <div className=" sm:hidden  lg:flex space-x-4 text-neutral-400">
                    <Link href="/search" className="hover:underline">All</Link>
                    <Link href="/search/shirts" className="hover:underline">Shirts</Link>
                    <Link href="/search/stickers"className="hover:underline">Stickers</Link>
          </div>
        </div>

        <div className="sm:hidden lg:flex items-center w-1/3">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full border border-neutral-700 bg-neutral-800 text-white rounded-md h-10 px-3 placeholder-neutral-500 focus:outline-none"
          />
        </div>

        <div className="flex items-center justify-end w-1/5">
          <button className="flex items-center justify-center h-10 w-10 border border-neutral-700 rounded-md bg-neutral-800 hover:cursor-pointer" onClick={() => setSidebar(!sidebar)}>
            <img
              src="https://pngimg.com/d/shopping_cart_PNG4.png"
              className="h-5 w-5"
              alt="cart"

            />



          </button>
          <div
            className={` absolute right-0 top-0 bottom-0 w-100 h-400 z-10 bg-black border-l border-gray-400 transition-all duration-500 transform ease-out  ${sidebar ? " translate-x-0" : " translate-x-full"
              }`}
          >
            <div className="p-4 flex-col bg-black space-y-40">
              <div className="flex justify-between items-center ">
                <h3 className="font-bold mb-4 text-2xl " >My Cart</h3>
                <button className="flex items-center justify-center h-12 w-12 border border-neutral-700 rounded-md bg-neutral-800 hover:cursor-pointer" onClick={() => setSidebar(!sidebar)}>
                  <img
                    src="https://cdn.prod.website-files.com/65ef33a25ce0530ea8104bd5/66bc7cdffe09b473a65178cf_icon%20(2).png"
                    className="h-4 w-4"
                    alt="cart"

                  />
                </button>
              </div>
              <div className="flex flex-col items-center space-y-10">
                <img src="https://pngimg.com/d/shopping_cart_PNG4.png"               className="h-20 w-20"/>
                <p className="font-bold text-2xl">Your cart is empty</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {product !==null ?(<div className="flex w-8/12 mt-15 space-x-6 bg-black rounded-md p-6 h-150">
        <div className=" w-2/3 flex justify-center items-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-1/2 object-contain"
          />
        </div>
        <div className=" h-42 w-1/3 flex flex-col justify-start mt-10 space-y-5 border-b pb-6 dark:border-neutral-700 mr-5">
          <p className="sm:text-2xl lg:text-5xl font-bold">{product.name}</p>
          <div className="bg-blue-600 rounded-3xl w-40 py-3 flex items-center justify-center text-md font-semibold mb-5 ">

            {product.price}
          </div>
          <p className="text-neutral-400">Category: {product.category}</p>
         <p className="text-neutral-400">Color:</p>
<div className="lg:flex sm:grid sm:grid-cols-2 sm:space-y-2 lg:space-x-2">
  {["Black","White","Blue"].map((color) => (
    <label key={color} className="cursor-pointer">
      <input
        type="radio"
        name="color"
        value={color}
        className="peer hidden"
        onChange={() => setA(true)}
      />
      <div className="h-8 w-14 rounded-2xl border border-gray-300 
                      peer-checked:border-blue-500 flex items-center justify-center">
        {color}
      </div>
    </label>
  ))}
</div>

<p className="text-neutral-400 lg:mt-4">Size:</p>
<div className="lg:flex sm:grid sm:grid-cols-2 sm:space-y-2 lg:space-x-2">
  {["XS","S","M","L"].map((size) => (
    <label key={size} className="cursor-pointer">
      <input
        type="radio"
        name="size"
        value={size}
        className="peer hidden"
        onChange={() => setB(true)}
      />
      <div className="h-8 w-12 rounded-2xl border border-gray-300 
                      peer-checked:border-blue-500 flex items-center justify-center">
        {size}
      </div>
    </label>
  ))}
</div>


          {chosen ?(          <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-4 py-2 font-semibold lg:mt-4">
            Add to Cart
          </button>):(          <button className="bg-blue-600 opacity-50 text-white rounded-md px-4 py-2 font-semibold lg:mt-4">
            Add to Cart
          </button>)}

        </div>
      </div>):(<div className="flex w-8/12 mt-10 space-x-6 bg-black rounded-md p-6 h-150">
      <p>This product does not exist</p>
      </div>)}
            <h1 className="mt-20 font-bold text-2xl">Related Products</h1>
           <div className="relative w-full flex justify-center mt-10 mb-10 overflow-hidden ">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-32  from-neutral-900 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-32  from-neutral-900 to-transparent z-10" />

        <div
          className="flex space-x-6 overflow-x-scroll scrollbar max-w-10/12"
          style={{ scrollbarWidth: "w-full", msOverflowStyle: 'none' }}
        >
          {products.map((product, i) => (
            <Link
            href={`/product/${i}`}
              key={i}
              className="group relative bg-black rounded-md shrink-0 w-80 h-80 flex justify-center items-center overflow-hidden cursor-pointer hover:border-2 hover:border-blue-500 transition duration-300 ease-in-out"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-1/2 h-2/3 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute bottom-4 left-4 flex items-center space-x-3 bg-black/70 border border-gray-500 rounded-3xl h-10 px-3 text-xs">
                <p className="font-semibold">{product.name}</p>
                <div className="bg-blue-600 rounded-3xl px-3 py-1 font-semibold">
                  {product.price}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      

 <footer className="w-full bg-neutral-950 text-neutral-400 mt-16 py-10 border-t border-neutral-800 ">
        <div className="max-w-9/12 mx-auto flex justify-between px-10">
          <div className="flex items-start space-x-3">
            <div className="h-10 w-10 border rounded-md flex justify-center items-center bg-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 28"
                className="h-4 w-4 fill-white"
              >
                <path d="M21.5758 9.75769L16 0L0 28H11.6255L21.5758 9.75769Z"></path>
                <path d="M26.2381 17.9167L20.7382 28H32L26.2381 17.9167Z"></path>
              </svg>
            </div>
            <div>
              <p className="font-semibold text-white">ACME STORE</p>
              <p className="text-xs mt-1">
                © 2023–2025 ACME, Inc. All rights reserved.
              </p>
            </div>
          </div>

          <div className="flex space-x-12 text-sm">
            <div className="flex flex-col space-y-2">
              <p className="font-semibold text-white">Home</p>
              <Link href="#">About</Link>
              <Link href="#">Terms & Conditions</Link>
              <Link href="#">Shipping & Returns</Link>
              <Link href="#">Privacy Policy</Link>
              <Link href="#">FAQ</Link>
            </div>
          </div>
        </div>

        <div className="text-center text-xs text-neutral-600 mt-6">
          Created by ▲ Vercel
        </div>
      </footer>
    </div>
  );
}


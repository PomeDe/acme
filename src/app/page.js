"use client";
import Image from "next/image";
import Link from "next/link";

import { useEffect, useRef, useState } from "react";


export default function Home() {
  const scrollRef = useRef(0);
  const isHovered = false;
  const [sidebar, setSidebar] = useState(false);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationId;
    const speed = 0.5;

    const scroll = () => {
      if (!isHovered && container) {
        container.scrollLeft += speed;

        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, [isHovered]);



  const products = [
    { name: "Acme Mug", price: "$10.00 USD", image: "/mug-1.avif" },
    { name: "Acme Hoodie", price: "$50.00 USD", image: "/hoodie-1.avif" },
    { name: "Acme Baby Onesie", price: "$10.00 USD", image: "/baby-onesie-beige-1.avif" },
    { name: "Acme Baby Cap", price: "$10.00 USD", image: "/baby-cap-black.avif" },
  ];
  return (
    <div className={`w-full flex flex-col items-center bg-neutral-900 text-white `}>
      <div className="flex justify-between items-center h-20 w-11/12">
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
            <p className="font-semibold text-white">ACME STORE</p>
          </div>

          <div className="flex space-x-4 text-neutral-400">
                    <Link href="/search" className="hover:underline">All</Link>
                    <Link href="/search/shirts" className="hover:underline">Shirts</Link>
                    <Link href="/search/stickers"className="hover:underline">Stickers</Link>
          </div>
        </div>

        <div className="flex items-center w-1/3">
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


      <div className="flex w-11/12 max-w-9/12 mt-20 space-x-6 h-[600px]">
        <Link href={`/product/${6}`} className="group relative flex-2 rounded-md bg-black flex justify-center items-center overflow-hidden hover:cursor-pointer hover:border-2 hover:border-blue-500 transition duration-300 ease-in-out">
          <img
            src="/t-shirt-1.avif"
            alt="Acme Circles T-Shirt"
            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute bottom-6 left-6 flex items-center space-x-3 bg-black/70 border border-gray-500 rounded-3xl h-12 px-2 text-sm">
            <p className="font-semibold ml-2">Acme Circles T-Shirt</p>
            <div className="bg-blue-600 rounded-3xl px-4 py-2 flex items-center justify-center text-sm font-semibold">
              $20.00 USD
            </div>
          </div>
        </Link>

        <div className="flex flex-col flex-1 space-y-6">

          <Link href={`/product/${8}`} className="group relative h-1/2 rounded-md bg-black flex justify-center items-center overflow-hidden hover:cursor-pointer hover:border-2 hover:border-blue-500 transition duration-300 ease-in-out">
            <img
              src="/bag-1-dark (1).avif"
              alt="Acme Drawstring Bag"
              className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute bottom-4 left-4 flex items-center space-x-3 bg-black/70 border border-gray-500 rounded-3xl h-10 px-2 text-xs">
              <p className="font-semibold ml-2">Acme Drawstring Bag</p>
              <div className="bg-blue-600 rounded-3xl px-3 py-1 flex items-center justify-center font-semibold">
                $12.00 USD
              </div>
            </div>
          </Link>

          <Link href={`/product/${7}`} className="group relative h-1/2 rounded-md bg-black flex justify-center items-center overflow-hidden hover:cursor-pointer hover:border-2 hover:border-blue-500 transition duration-300 ease-in-out">
            <img
              src="/cup-black.avif"
              alt="Acme Cup"
              className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute bottom-4 left-4 flex items-center space-x-3 bg-black/70 border border-gray-500 rounded-3xl h-10 px-2 text-xs">
              <p className="font-semibold ml-2">Acme Cup</p>
              <div className="bg-blue-600 rounded-3xl px-3 py-1 flex items-center justify-center font-semibold">
                $15.00 USD
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className="relative w-full flex justify-center mt-20 overflow-hidden ">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-32  from-neutral-900 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-32  from-neutral-900 to-transparent z-10" />

        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-scroll scrollbar max-w-10xl"
          style={{ scrollbarWidth: "w-full", msOverflowStyle: 'none' }}
        >
          {[...products, ...products, ...products].map((product, i) => (
            <Link
            href={`/product/${i}`}
              key={i}
              className="group relative bg-black rounded-md shrink-0 w-150 h-80 flex justify-center items-center overflow-hidden cursor-pointer hover:border-2 hover:border-blue-500 transition duration-300 ease-in-out"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-1/2 h-full object-cover transition-transform duration-300 group-hover:scale-110"
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

      <footer className="w-full bg-neutral-950 text-neutral-400 mt-20 py-10 border-t border-neutral-800 h-85">
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


"use client";
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";
export default function Home() {

    const products = [
        {id:11, name: "Acme Slip-on Shoes", price: "$45.00 USD", image: "/shoes-1.avif", category: "footwear" },
    ];
       const [val, setVal] = useState("");
               const [sidebar, setSidebar] = useState(false);
    return (<div className={`w-full min-h-screen flex flex-col items-center bg-neutral-900 text-white `}>
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
                    <Link href="/" className="font-semibold text-white">ACME STORE</Link>
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
                    value={val}
                    onChange={()=>(window.location.href="/search")}
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
                    className={` absolute right-0 top-0 bottom-0 w-100 h-400 z-10 bg-black border-l border-gray-400 transition-all duration-500 transform  ease-out  ${sidebar ? " translate-x-0" : " translate-x-full"
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
                            <img src="https://pngimg.com/d/shopping_cart_PNG4.png" className="h-20 w-20" />
                            <p className="font-bold text-2xl">Your cart is empty</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  <div className="flex flex-row justify-center space-x-25  w-full">
            <div className="flex flex-col">
                <h3 className=" text-xs text-neutral-500 md:block dark:text-neutral-400">Collections</h3>
                <ul className=" md:block">
<li className="mt-2 flex text-white"><a className="w-full text-sm underline-offset-4 hover:underline dark:hover:text-neutral-100 underline" href="/search">All</a></li>
<li className="mt-2 flex text-white"><a className="w-full text-sm underline-offset-4 hover:underline dark:hover:text-neutral-100 " href="/search/bags">Bags</a></li>
<li className="mt-2 flex text-white"><a className="w-full text-sm underline-offset-4 hover:underline dark:hover:text-neutral-100 " href="/search/drinkware">Drinkware</a></li>
<li className="mt-2 flex text-white"><a className="w-full text-sm underline-offset-4 hover:underline dark:hover:text-neutral-100 " href="/search/electronics">Electronics</a></li>
<li className="mt-2 flex text-white"><a className="w-full text-sm underline-offset-4 hover:underline dark:hover:text-neutral-100 " href="/search/footwear">Footwear</a></li>
<li className="mt-2 flex text-white"><a className="w-full text-sm underline-offset-4 hover:underline dark:hover:text-neutral-100 " href="/search/headwear">Headwear</a></li>
<li className="mt-2 flex text-white"><a className="w-full text-sm underline-offset-4 hover:underline dark:hover:text-neutral-100 " href="/search/hoodies">Hoodies</a></li>
<li className="mt-2 flex text-white"><a className="w-full text-sm underline-offset-4 hover:underline dark:hover:text-neutral-100 " href="/search/jackets">Jackets</a></li>
<li className="mt-2 flex text-white"><a className="w-full text-sm underline-offset-4 hover:underline dark:hover:text-neutral-100 " href="/search/kids">Kids</a></li>
<li className="mt-2 flex text-white"><a className="w-full text-sm underline-offset-4 hover:underline dark:hover:text-neutral-100 " href="/search/pets">Pets</a></li>
<li className="mt-2 flex text-white"><a className="w-full text-sm underline-offset-4 hover:underline dark:hover:text-neutral-100 " href="/search/shirts">Shirts</a></li>
<li className="mt-2 flex text-white"><a className="w-full text-sm underline-offset-4 hover:underline dark:hover:text-neutral-100 " href="/search/stickers">Stickers</a></li>


                </ul>
               
            </div>
            <div className="grid lg:grid-cols-3 gap-5 sm:grid-cols-1 ">
                {products.map((element)=>(
                          <Link
                     href={`/product/${element.id}`}
              key={element.id}
              className="group relative bg-black rounded-md shrink-0 w-90 h-80 flex justify-center items-center overflow-hidden cursor-pointer hover:border-2 hover:border-blue-500 transition duration-300 ease-in-out"
            >
              <img
                src={element.image}
                alt={element.name}
                className="w-2/3 h-2/3 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute bottom-4 left-4 flex items-center space-x-3 bg-black/70 border border-gray-500 rounded-3xl h-10 px-3 text-xs">
                <p className="font-semibold">{element.name}</p>
                <div className="bg-blue-600 rounded-3xl px-3 py-1 font-semibold">
                  {element.price}
                </div>
              </div>
            </Link>
                ))}
            </div>
 <div className=" flex flex-col">
                <h3 className=" text-xs text-neutral-500 md:block dark:text-neutral-400">Sort by</h3>
                <ul className=" md:block">
 <li className="mt-2 flex text-white"><a className="w-full text-sm underline-offset-4 hover:underline dark:hover:text-neutral-100 underline" href="/search">Relevance</a></li>
<li className="mt-2 flex text-white"><a className="w-full text-sm underline-offset-4 hover:underline dark:hover:text-neutral-100 " href="/search">Trending</a></li>
<li className="mt-2 flex text-white"><a className="w-full text-sm underline-offset-4 hover:underline dark:hover:text-neutral-100 " href="/search">Latest Arrivals</a></li>
<li className="mt-2 flex text-white"><a className="w-full text-sm underline-offset-4 hover:underline dark:hover:text-neutral-100 " href="/search">Price: Low to High</a></li>
<li className="mt-2 flex text-white"><a className="w-full text-sm underline-offset-4 hover:underline dark:hover:text-neutral-100 " href="/search">Price: High to Low</a></li>

                </ul>
               
            </div>
        </div>
    </div>)
}

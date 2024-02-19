import React from "react"
import ProductCard from "../components/Cards/ProductCard";
import apiService from "../service/apiService";
import { GoArrowSwitch } from "react-icons/go";
import { FaAngleDown } from "react-icons/fa";

export default async function Home() {
  console.log("values");

  const response = await apiService({
    method: "GET",
    path: "/products"
  });
  console.log(response);

  return (
    <main className="bg-white relative">
      <div className="sticky top-0" style={{ position: "sticky", top: "0px" }}>
        <div className="flex justify-between gap-8 justify-end py-6">
          <div className="text-xl font-semibold">
            Sandals & People ({response.payload.length})
          </div>
          <div className="flex gap-8">
            <div className="flex items-center gap-2 cursor-pointer"><p>Hide Filters</p> <GoArrowSwitch className="text-xl" /></div>
            <div className="flex items-center gap-2 cursor-pointer"><p>Sort By</p> <FaAngleDown className="text-xl" /> </div>
          </div>
        </div>

      </div>
      <div className="grid grid-cols-3 gap-6">
        {response.payload.map((product: any) => (
          <div key={product.id}>
            <ProductCard imageUrl={product.imageUrl} title={product.title} shoeType={product.shoeType} price={product.price} colorNumber={1} />
          </div>
        ))}
      </div>
    </main>
  );
}

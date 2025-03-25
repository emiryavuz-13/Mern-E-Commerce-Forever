import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";

const Collection = () => {
  const { products } = useContext(ShopContext);
  const [shotFilter, setShortFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  useEffect(() => {
    setFilterProducts(products);
  }, []);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Filter Options*/}
      <div className="min-w-60">
        <p
          onClick={() => setShortFilter(!shotFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS
          <img
            className={`h-3 sm:hidden ${shotFilter ? "rotate-90" : ""}`}
            src={assets.dropdown_icon}
            alt=""
          />
        </p>
        {/* Category Filter*/}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            shotFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700 ">
            <p className="flex gap-2 ">
              <input className="w-3" type="checkbox" value={"Men"} />
              Men
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Women"} />
              Women
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Kids"} />
              Kids
            </p>
          </div>
        </div>
        {/* SubCategory Filter*/}

        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            shotFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700 ">
            <p className="flex gap-2 ">
              <input className="w-3" type="checkbox" value={"Topwear"} />
              Topwear
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Bottomwear"} />
              Bottomwear
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={"Winterwear"} />
              Winterwear
            </p>
          </div>
        </div>
      </div>
      {/* Right Side*/}
    </div>
  );
};

export default Collection;

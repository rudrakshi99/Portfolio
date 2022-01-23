import React from "react";
import Categories from "../Components/Categories";
import MenuItems from "../Components/MenuItems";
import Tittle from "../Components/Title";
import portfolios from "../Components/allportfolios";
import { useState } from "react";

let list = portfolios.map((item) => item.category);
const allCategories = [
  "All",
  ...new Set(Array.prototype.concat.apply([], list)),
];

const PortfoliosPage = () => {
  const [categories, setCategories] = useState(allCategories);
  const [menuItems, setMenuItems] = useState(portfolios);

  const filter = (category) => {
    if (category === "All") {
      setMenuItems(portfolios);
      return;
    }
    const filteredData = portfolios.filter((item) => {
      return item.category.reduce((acc, curr) => {
        return acc || curr === category;
      }, false);
    });
    setMenuItems(filteredData);
  };

  return (
    <div className="PortfolioPage">
      <div className="title">
        <Tittle title={"Projects"} span={"projects"} />
      </div>
      <div className="portfolios-data">
        <Categories filter={filter} categories={categories} />
        <MenuItems menuItem={menuItems} />
      </div>
    </div>
  );
};

export default PortfoliosPage;

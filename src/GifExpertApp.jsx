import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

// const KEY = "AVrncvcscO2kPRUOg7r0fkpkdrUMAI7z";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Jujutsu Kaisen"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories((categories) => [newCategory, ...categories]);
    // console.log(newCategory);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={onAddCategory} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};

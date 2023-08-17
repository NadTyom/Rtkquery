import React from "react";
import { useAppSelector } from "../hooks/redux";

export default function FavoritesPages() {
  const { favorites } = useAppSelector((state) => state.github);

  if (favorites.length === 0) return <p className="text-center">N items.</p>;

  return (
    <div className="border  flex justify-center pt-10 mx-auto h-screen w-screen hover:shadow-md hover:bg-gray-100 transition-all">
      <ul className="list-none">
        {favorites.map((f) => (
          <li key={f}>
            <a href={f} target="blank">{f}</a>
          </li>
        ))}
      </ul>
      ;
    </div>
  );
}

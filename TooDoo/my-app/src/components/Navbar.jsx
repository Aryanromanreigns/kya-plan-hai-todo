import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-indigo-800 text-white px-8 py-3 shadow-md">
      <div className="brand">
        <span className="font-extrabold text-2xl tracking-wide">To Do</span>
      </div>
      <nav>
        <ul className="flex gap-10 text-lg">
          <li className="cursor-pointer hover:underline underline-offset-4 transition-all">Dashboard</li>
          <li className="cursor-pointer hover:underline underline-offset-4 transition-all">My Tasks</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

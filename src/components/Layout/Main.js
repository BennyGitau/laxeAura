import React from "react";

function Main({ children }) {
  return (
    <main className="w-full relative min-h-[calc(100vh-200px)] mt-[125px] xl:mt-[104px] px-10 overflow-x-hidden  xl:px-16">
      {children}
    </main>
  );
}

export default Main;

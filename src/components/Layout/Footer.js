import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-slate-50 z-50 px-10 xl:px-16">
      <span className="inline-flex h-[1.5px] w-full bg-slate-300" />
      <span className="inline-flex pb-4 w-full justify-between items-center text-center text-xs font-bold text-slate-900">
        <span>&copy; LuxeAura. 2000-{new Date().getFullYear()}</span>
        <span className="w-fit inline-flex  border-b border-slate-500 pb-1">
          All rights reserved{" "}
          <span className="inline-flex text-xs ml-1 border border-slate-500 rounded-sm">
            🔗
          </span>
        </span>
      </span>
    </footer>
  );
}

export default Footer;

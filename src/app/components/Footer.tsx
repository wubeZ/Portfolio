import React from "react";

const Footer = () => {
  return (
    <main className="text-white">
      <div className="mx-auto px-8 max-w-7xl">
        <div className="mt-12 py-6 text-center border-t-2 border-slate-600">
          <h3 className="text-xs">
            &copy;Copyright {new Date().getFullYear()}. Made by{" "}
            <span className="underline-offset-2 underline">Wubshet Zeleke</span>
          </h3>
        </div>
      </div>
    </main>
  );
};

export default Footer;

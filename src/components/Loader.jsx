import React from "react";

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
      {/* Logo ou Nome da Empresa */}
      <h1 className="text-wzblue text-3xl font-bold mb-4 animate-pulse">
        WZ Solutions
      </h1>

      {/* Animação de bolinhas */}
      <div className="flex space-x-2">
        <div className="w-3 h-3 bg-wzblue rounded-full animate-bounce"></div>
        <div className="w-3 h-3 bg-wzblue rounded-full animate-bounce delay-150"></div>
        <div className="w-3 h-3 bg-wzblue rounded-full animate-bounce delay-300"></div>
      </div>
    </div>
  );
}

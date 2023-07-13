"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const { push } = useRouter();
  function handleSubmit(e) {
    e.preventDefault();
    push(`/prediction/${inputValue}`);
  }
  return (

      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="p-4 shadow-md bg-white rounded-md">
          <h1 className="text-2xl font-semibold mb-4 text-black">
            Enter Your Name{" "}
          </h1>
      
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            value={inputValue}
            className="text-black w-full p-2 border border-gray-300 rounded "
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="type your name"
          />
          <button
            className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white"
            type="submit"
          >
            Predict Data
          </button>
        </form>
        </div>
      </div>
    
  );
}

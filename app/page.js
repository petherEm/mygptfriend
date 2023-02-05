"use client";

import React, { useState } from "react";
import Image from "next/image";

const Home = () => {
  const [prompt, setPrompt] = useState("Say random joke.");
  const [answers, setAnswers] = useState([]);

  let loadInterval = null;

  function loader(e) {
    e.textContent = "";

    loadInterval = setInterval(() => {
      e.textContent += ".";
      if (e.textContent === "...") {
        e.textContent = "";
      }
    }, 300);
  }

  function typeText(e, text) {
    let index = 0;

    let interval = setInterval(() => {
      if (index < text.length) {
        e.innerHTML += text.charAt(index);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 20);
  }

  function generateUniqueId() {
    const timestamp = Date.now();
    const randomNumber = Math.random();
    const hexadecimalString = randomNumber.toString(16);

    return `id-${timestamp}-${hexadecimalString}`;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (prompt) {
      console.log(prompt);
      try {
        const response = await fetch(
          "/api/fetchAnswers?prompt=" + encodeURIComponent(prompt)
        );

        const body = await response.json();

        setAnswers(body.quote);
      } catch (error) {
        console.log(error);
      } finally {
        setPrompt("");
      }
    } else {
      alert("Please enter a prompt");
      setPrompt("Say random joke.");
    }
  };

  return (
    <>
     
      <div className="">
        <main className="max-w-6xl p-10 mx-auto mt-32 flex flex-col mb-10">
          <h1 className="text-4xl font-bold">Hi,</h1>
          <h1 className="text-3xl font-bold">What's your question?</h1>

          <div className="mt-10">
            <form onSubmit={handleSubmit} className="flex">
              <input
                type="text"
                name="prompt"
                placeholder="Enter your question"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="flex background-transparent w-full p-4 rounded-l-lg outline-none text-slate-600"
              />

              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 p-4 w-[150px] rounded-r-lg"
              >
                Ask
              </button>
            </form>
          </div>
          {/* ANSWERS */}

          <section className="mt-20">
            <div>
              <h1 className="text-4xl font-bold">
                This is what{" "}
                <span className="underline underline-offset-1 decoration-pink-500">
                  I think,
                </span>{" "}
                buddy:
              </h1>
              <div className="p-2">
                {answers && <p className="text-green-300">{answers}</p>}
              </div>
            </div>
          </section>
        </main>

      </div>
    </>
  );
};

export default Home;

import { introContext } from "./context/introContext";
import { useContext } from "react";

const Intro = () => {
  const context = useContext(introContext);

  return (
    <>
      <div className="p-5 flex justify-center">
        <button onClick={context.handleToggle}>About me</button>
      </div>
      {context.toggle && (
        <article className="mb-10 px-5 py-10 w-[80%] max-h-[400px] overflow-y-auto mt-5 bg-[#262626] border border-gray-700 shadow-2xl mx-auto">
          <h1>
            Hey, I’m Johnsen Berdin always working to get better at what I do.
            <br className="mb-5" />
            This space is where I document my experiences and the lessons I've
            picked up along the way, whether that's frontend, backend, or dev
            tools in between.
            <br className="mb-5" />
            I believe the best way to truly understand something is to be able
            to explain it in simple terms. So I try to break down coding
            concepts here so anyone, regardless of background, can learn and
            follow along.
            <br className="mb-10" />
            <span className="text-gray-500 text-sm">
              The documentation here is generated as I learn and
              experiment—sometimes with a little help from GitHub Copilot for
              ideas and code snippets. Always open to new challenges and always
              improving.
            </span>
          </h1>
        </article>
      )}
    </>
  );
};

export default Intro;

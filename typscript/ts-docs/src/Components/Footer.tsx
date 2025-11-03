import { FaLinkedin, FaGithub } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <>
      <footer
        className="
        fixed bottom-0 left-0 w-full 
        border border-gray-700 shadow-2xl p-5 
        flex flex-col items-center justify-center z-10 bg-[#222]"
      >
        <div className="flex items-center gap-5 mb-2">
          <a
            href="https://www.linkedin.com/in/johnsen-berdin-a30b4a383/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors duration-150"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="https://github.com/codeGoCodeNot"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors duration-150"
          >
            <FaGithub size={28} />
          </a>
        </div>

        <div className="flex justify-center items-center gap-5 mt-5">
          <div className="text-xs">
            📧{" "}
            <a
              href="mailto:johnsenberdin2930@gmail.com"
              className="hover:underline"
            >
              johnsenberdin2930@gmail.com
            </a>
          </div>
          <div className="text-xs">
            📞{" "}
            <a href="tel:09260826406" className="hover:underline">
              09260826406
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default SocialLinks;

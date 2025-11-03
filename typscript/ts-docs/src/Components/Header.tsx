import IntroContextProvider from "./context/IntroContextProvider";
import Intro from "./Intro";

const Header = () => {
  return (
    <>
      <header>
        <div className="flex justify-center items-center py-5  border border-gray-700 shadow-2xl">
          <h1 className="text-2xl ">Typescript</h1>
        </div>
      </header>
      <IntroContextProvider>
        <Intro />
      </IntroContextProvider>
    </>
  );
};

export default Header;

import DocsProvider from "./Components/context/DocsProvider";
import Docs from "./Components/Docs";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <Header />
      <DocsProvider>
        <Docs />
      </DocsProvider>
      <Footer />
    </>
  );
}

export default App;

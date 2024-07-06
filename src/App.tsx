import NavBar from "./components/NavBar";
import About from "./components/About";
import Footer from "./components/Footer";

import { AppContextProvider } from "./context/appContext";

export default function App() {
  return (
    <AppContextProvider>
      <NavBar />
      <About />
      <Footer />
    </AppContextProvider>
  );
}

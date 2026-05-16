import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";

const pageBackgrounds: Record<string, string> = {
  "/": "bg-[url('/assets/home/background-home-mobile.jpg')] md:bg-[url('/assets/home/background-home-tablet.jpg')] lg:bg-[url('/assets/home/background-home-desktop.jpg')]",
  "/destination": "bg-[url('/assets/destination/background-destination-mobile.jpg')] md:bg-[url('/assets/destination/background-destination-tablet.jpg')] lg:bg-[url('/assets/destination/background-destination-desktop.jpg')]",
  "/crew": "bg-[url('/assets/crew/background-crew-mobile.jpg')] md:bg-[url('/assets/crew/background-crew-tablet.jpg')] lg:bg-[url('/assets/crew/background-crew-desktop.jpg')]",
  "/technology": "bg-[url('/assets/technology/background-technology-mobile.jpg')] md:bg-[url('/assets/technology/background-technology-tablet.jpg')] lg:bg-[url('/assets/technology/background-technology-desktop.jpg')]",
};

function App() {
  const { pathname } = useLocation();
  const background = pageBackgrounds[pathname] ?? pageBackgrounds["/"];

  return (
    <div className={`${background} min-h-screen bg-space-dark bg-cover bg-center bg-no-repeat font-barlow text-white`}>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;

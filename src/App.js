import { Outlet } from "react-router-dom";
import Header from "./organisms/Header";
import SiteFooter from"./organisms/SiteFooter";

function App() {
  return (
    <>
      <div className="container full-width">
        <Header />
      </div>
      <div className="container">
        <Outlet />
      </div>
      <div className="container full-width">
        <SiteFooter />
      </div>
    </>
  );
}

export default App;

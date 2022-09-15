import { Outlet } from "react-router-dom";
import Header from "./organisms/Header";
import SiteFooter from"./organisms/SiteFooter";

function App() {
  return (
    <>
      <section className="headfoot">
        <Header />
      </section>
      <div className="container p-4">
        <Outlet />
      </div>
      <section className="headfoot">
        <SiteFooter />
      </section>
    </>
  );
}

export default App;

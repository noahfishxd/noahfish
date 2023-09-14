import "../CSS/Main.css";
import "../CSS/Background.css";
import MainContent from "./MainContent";
import MainNav from "./MainNav";
import MainFoot from "./MainFoot";
import "../CSS/Name.css";

const Main = () => {
  return (
    <>
      <div className="bg"></div>
      <div className="main-container">
        <section class="wrapper">
          <div class="top">noahfish.dev</div>
          <div class="bottom" aria-hidden="true">
            noahfish.dev
          </div>
        </section>
        <div className="common-width">
          <MainNav />
          <MainContent />
          <MainFoot />
        </div>
      </div>
      \
    </>
  );
};

export default Main;

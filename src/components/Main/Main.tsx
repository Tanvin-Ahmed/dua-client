import LeftSideBar from "./LiftSideBar/LeftSideBar";
import MobileLeftSideBar from "./LiftSideBar/MobileLeftSideBar";
import DuaDetails from "./DuaDetails/DuaDetails";
import NavBar from "./NavBar/NavBar";
import RightSideBar from "./RightSideBar/RightSideBar";

const Main = () => {
  return (
    <div className="flex flex-col w-full lg:mt-0 mt-20">
      <NavBar className="mb-4" />
      <div className="flex w-full gap-6">
        <LeftSideBar className="flex-[0.30] lg:block hidden" />
        <MobileLeftSideBar>
          <LeftSideBar className="h-screen overflow-y-auto" />
        </MobileLeftSideBar>
        <DuaDetails className="2xl:flex-[0.50] lg:flex-[0.70] flex-1" />
        <RightSideBar className="flex-[0.20] 2xl:block hidden max-h-[65vh] xl:max-h-[80vh] h-fit" />
      </div>
    </div>
  );
};

export default Main;

import CategorySideBar from "./CategorySideBar/CategorySideBar";
import MobileCategoryBar from "./CategorySideBar/MobileCategoryBar";
import DuaDetails from "./DuaDetails/DuaDetails";
import NavBar from "./NavBar/NavBar";
import SettingsBar from "./SettingsBar/SettingsBar";

const Main = () => {
  return (
    <div className="flex flex-col w-full lg:mt-0 mt-20">
      <NavBar className="mb-4" />
      <div className="flex w-full gap-6">
        <CategorySideBar className="flex-[0.30] lg:block hidden" />
        <MobileCategoryBar>
          <CategorySideBar className="h-screen overflow-y-auto" />
        </MobileCategoryBar>
        <DuaDetails className="2xl:flex-[0.50] lg:flex-[0.70] flex-1" />
        <SettingsBar className="flex-[0.20] 2xl:block hidden max-h-[65vh] xl:max-h-[80vh] h-fit" />
      </div>
    </div>
  );
};

export default Main;

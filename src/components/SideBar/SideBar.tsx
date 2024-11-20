import Image from "next/image";
import Options from "./Options";

const SideBar = () => {
  return (
    <>
      {/* desktop */}
      <div className="xl:block hidden bg-white rounded-xl px-1 py-4 w-fit h-[88vh] overflow-y-auto overflow-x-hidden">
        <div className="flex flex-col justify-between items-center">
          <Image src={"/logo.png"} width={73} height={73} alt="logo" />
          <div className="flex flex-col justify-center items-center gap-y-3 my-8">
            <Options />
          </div>
          <Image
            src={"/icons/support.png"}
            width={67}
            height={66}
            alt="support"
          />
        </div>
      </div>
      {/* tab/fab/mobile */}
      <div className="xl:hidden fixed bottom-0 left-0 right-0 rounded-t-3xl p-4 bg-white">
        <div className="flex justify-around items-center gap-x-4">
          <Options />
        </div>
      </div>
    </>
  );
};

export default SideBar;

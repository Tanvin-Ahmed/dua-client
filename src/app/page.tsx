import Main from "@/components/Main/Main";
import SideBar from "@/components/SideBar/SideBar";

export default function Home() {
  return (
    <main className="container mx-auto p-5 min-h-screen max-h-full flex gap-x-4">
      <SideBar />
      <Main />
    </main>
  );
}

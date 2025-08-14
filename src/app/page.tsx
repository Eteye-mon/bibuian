import MyTab from "@/components/myTab";
import Header from "@/components/header";
import CustomSideBar from "@/components/customsidebar";

export default function Component() {
  return (
    <div className="flex h-screen overflow-hidden">
      <CustomSideBar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto pt-4">
          <section className="w-full h-full">
            <MyTab />
          </section>
        </main>
      </div>
    </div>
  );
}

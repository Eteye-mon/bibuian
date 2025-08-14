

import MyTab from "@/components/myTab";
import Header from "@/components/header";
import CustomSideBar from "@/components/customsidebar";

export default function Component() {
  return (
    <div className="flex min-h-screen">
      <CustomSideBar/>
      <div className="flex-1">
        <Header />
        <main className="flex-1 pt-4">
          <section className="w-full">
            <MyTab />
          </section>
        </main>
      </div>
    </div>
  );
}


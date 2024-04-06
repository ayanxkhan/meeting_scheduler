import React from "react";
import SideNavBar from "./_components/SideNavBar";
import DashboardHeader from "./_components/DashboardHeader";
import { Toaster } from "sonner";


function DashboardLayout({ children }) {
  return (
    <div>

        {/* to fix out sidenavbar throughout out dashboard */}
      <div className="hidden md:w-64 md:block bg-slate-50 h-screen fixed">
        <SideNavBar />
      </div>

      <div className="md:ml-64">
        <DashboardHeader/>
        <Toaster/>
        {children}
      </div>

    </div>

  );
}

export default DashboardLayout;

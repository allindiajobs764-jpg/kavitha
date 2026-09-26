import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "../Screen/Footer/Footer";

const Loading = () => {
  return (
    <div className="flex min-h-[70vh] items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-green-600" />
        <span className="text-sm font-medium text-green-600">
          Loading...
        </span>
      </div>
    </div>
  );
};

const MainLayout = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar/>

      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default MainLayout;
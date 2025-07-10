import React from "react";
import Header from "../components/Common/Header";
import Footer from "../components/Common/Footer";
interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className="w-full ">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;

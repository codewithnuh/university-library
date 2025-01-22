import Header from "@/components/user/globals/Header";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="root-container ">
      <div className="mx-auto max-w-6xl w-full ">
        <Header />
        <div className="mt-20 pb-20"> {children}</div>
      </div>
    </main>
  );
};

export default Layout;

import type { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";
import "../styles/wrapper.css";

export default function Wrapper({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
        {children}
      <Footer />
    </>
  );
}
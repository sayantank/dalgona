import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function DefaultLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

import "../styles/globals.css";
import Header from "./Header";
import Footer from "./Footer";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body className="bg-slate-800 text-white min-h-screen h-auto">
        <Header />

        {children}
        <Footer />
      </body>
    </html>
  );
}

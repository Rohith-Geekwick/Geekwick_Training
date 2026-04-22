import Header from "../components/Header";
import Footer from "../components/footer";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
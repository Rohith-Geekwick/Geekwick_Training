import "../styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <h2>Intern Portal Day 2</h2>
        {children}
      </body>
    </html>
  );
}
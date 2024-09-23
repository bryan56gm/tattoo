// Styles
import "./ui/styles/config.scss";
import "./ui/styles/breakpoints.scss";
import "./ui/styles/globals.scss";

import Header from "./ui/Header/Header";


export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Header />

        {children}

      </body>
    </html>
  );
}

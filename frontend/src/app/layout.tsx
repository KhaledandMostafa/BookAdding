import "./globals.css";
import Navbar from "./_Components/NavBar";
import { MainContextProvider } from "./_Contexts/MainContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MainContextProvider>
      <html lang="en">
        <body>
          <Navbar />
          {children}
        </body>
      </html>
    </MainContextProvider>
  );
}

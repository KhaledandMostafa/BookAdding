"use client";
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const MainContext = createContext();

export function MainContextProvider({ children }) {
  const [Books, setBooks] = useState([]);
  const [Sec, setSec] = useState(``);
  const filter: any = Books.filter((x: any) =>
    x.title.toLowerCase().includes(Sec.toLowerCase())
  );

  async function GetBooks() {
    const data = await axios
      .get("https://0823-41-233-93-160.ngrok-free.app/books")
      .then((x) => setBooks(x?.data));
  }
  useEffect(() => {
    GetBooks();
  }, []);
  return (
    <MainContext.Provider value={{ filter, Books, setBooks, setSec }}>
      {children}
    </MainContext.Provider>
  );
}

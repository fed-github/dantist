// Context.js
import React, { createContext, useState } from "react";

const ScrollContext = createContext();

const ScrollProvider = ({ children }) => {
  const [scrollTo, setScrollTo] = useState(null);

  const handleScroll = (position) => {
    setScrollTo(position);
  };

  return (
    <ScrollContext.Provider value={{ scrollTo, handleScroll }}>
      {children}
    </ScrollContext.Provider>
  );
};

export { ScrollContext, ScrollProvider };

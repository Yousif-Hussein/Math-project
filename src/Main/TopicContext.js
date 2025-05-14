import { createContext, useState } from "react";
import { useLocation } from "react-router-dom";

export const TopicContext = createContext();

export function TopicProvider({ children }) {
  const location = useLocation();
  const pathParts = location.pathname.split("/").filter(Boolean);
  const currentTopic = pathParts[0] || "exponents"; // Default to geometry if no topic

  return (
    <TopicContext.Provider value={currentTopic}>
      {children}
    </TopicContext.Provider>
  );
}

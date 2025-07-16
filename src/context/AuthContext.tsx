import React, { createContext, useContext, useState, ReactNode } from "react";

type User = {
  username: string;
  role: "admin" | "client";
};

type AuthContextType = {
  user: User | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (username: string, password: string) => {
    // Simple hardcoded authentication for demonstration
    if (username === "admin" && password === "admin123") {
      setUser({ username, role: "admin" });
      return true;
    } else if (username === "client" && password === "client123") {
      setUser({ username, role: "client" });
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

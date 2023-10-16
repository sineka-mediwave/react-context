import "@picocss/pico";
import { lazy, Suspense, useEffect, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ThemeProvider, UserProvider } from "./contexts/UserContext";

import IndexPage from "./pages/IndexPage";
import NotfoundPage from "./pages/NotfoundPage";
const LoginPage = lazy(() => import("./pages/LoginPage"));

function Loading() {
  return <p>Loading ...</p>;
}

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <ThemeProvider>
        <UserProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<IndexPage />} />
              <Route path="/form" element={<LoginPage />} />
              <Route path="*" element={<NotfoundPage />} />
            </Routes>
          </BrowserRouter>
        </UserProvider>
      </ThemeProvider>
    </Suspense>
  );
}

export default App;

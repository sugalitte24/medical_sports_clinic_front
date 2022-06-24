import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import RoutesMap from "./config/routes";
import AuthProvider from "./providers/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {RoutesMap.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                <route.layout>
                  <route.component />
                </route.layout>
              }
            />
          ))}
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
export default App;

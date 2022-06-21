import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import RoutesMap from "./config/routes";

console.log(RoutesMap);

function App() {
  return (
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
  );
}
export default App;

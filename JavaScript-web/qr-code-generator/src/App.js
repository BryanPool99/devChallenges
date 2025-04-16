import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
const QRCodePage = React.lazy(() => import("./pages/QRCodePage"));
const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route
          path="/qrCode"
          element={
            <Suspense fallback={<div>Cargando</div>}>
              <QRCodePage />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;

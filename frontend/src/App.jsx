import React, { useState, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import Layout from "./screens/Layout";
import DashboardLayout from "./screens/DashboardLayout";
import { ProtectRoute } from "./lib/ProtectRoute";
const HomeWrapper = lazy(() => import("./screens/Home"));
const Products = lazy(() => import("./screens/Products"));
const SingleWrapper = lazy(() => import("./screens/Single"));
const Journal = lazy(() => import("./screens/Journal"));
// // PaymentSuccess
export default function App() {
  const [height, setHeight] = useState(0);

  return (
    <div className="based" style={{ height }}>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route
            index
            element={
              <Suspense fallback={<></>}>
                <HomeWrapper />
              </Suspense>
            }
          />
          <Route
            path="products"
            element={
              <Suspense fallback={<></>}>
                <Products />
              </Suspense>
            }
          />
          <Route
            path="product/:id"
            element={
              <Suspense fallback={<></>}>
                <SingleWrapper />
              </Suspense>
            }
          />
          <Route
            path="journal"
            element={
              <Suspense fallback={<></>}>
                <Journal />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

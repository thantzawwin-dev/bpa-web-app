import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import logo from './logo.svg';
import { ThemeProvider, THEME } from "contexts";

import './App.css';

type Props = {};

const loading = <div>loading</div>;

// Containers
const DefaultLayout = lazy(() => import("./pages/layout/DefaultLayout"));


const App = (props: Props) => {
  
  return (
    <ThemeProvider defaultValue={THEME.light}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Suspense fallback={loading}>
          <Routes>
            {/* <Route exact path="/login" name="Login Page" element={<Login />} />
          <Route
            exact
            path="/register"
            name="Register Page"
            element={<Register />}
          />
          <Route exact path="/404" name="Page 404" element={<Page404 />} />
          <Route exact path="/500" name="Page 500" element={<Page500 />} /> */}
            <Route path="*" element={<DefaultLayout />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;

import styled from "styled-components";
import { useState, useLayoutEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import routes from './routes'

import NavBar from '../component/navbar'
const Core = styled.div`
  width: 100%;
  min-height: 100vh;
`
const Router = () => {
  const [getRoutes, setRoutes] = useState(routes)
  return (
    <Core>
        <NavBar/>
        <Routes>
            {
              getRoutes.map(element => {
                  return <Route
                      path={element.path}
                      element={element.component}
                      key={element.path}
                  />
              })
            }
        </Routes>
    </Core>
  )
}

export default Router;
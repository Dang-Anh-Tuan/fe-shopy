import { useLayoutEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "../components/UserPage/NavBar";
import { ContainerFull } from "../components/container/ContainerFull/ContainerFull";
import { Flex } from "../components/container/Flex/Flex";
import SideBar from "../components/AdminPage/SideBar/SideBar";
import ManageBook from "../pages/admin/ManageBook/ManageBook";
import FormBook from "../pages/admin/FormBook/FormBook";
import { ContainerContent } from "../components/AdminPage/ContainerContent/ContainerContent";
import { ContainerContentBgWhite } from "../components/AdminPage/ContainerContentBgWhite/ContainerContentBgWhite";
import Breadcrumbs from "../components/AdminPage/Breadcrumbs/Breadcrumbs";
import ManageLaptop from "../pages/admin/ManageLaptop/ManageLaptop";
import FormLaptop from "../pages/admin/FormLaptop/FormLaptop";

const user = {
  username: "Tuan",
  avatar:
    "https://ss-images.saostar.vn/wp700/2020/02/23/7040341/67402236_2137340026563283_3067126297437143040_o.jpg",
};

const cartCount = 3;

function Routers() {
  const [isLogin, setIsLogin] = useState(true);
  const [isAdmin, setIsAdmin] = useState(true);
  const token = localStorage.getItem("token");

  useLayoutEffect(() => {
    if (token) {
      setIsLogin(true);
    }
  }, [token]);

  return (
    <Router>
      <NavBar
        user={user}
        cartCount={cartCount}
        isLogin={isLogin}
        isAdmin={isAdmin}
      />
      {isAdmin && (
        <ContainerFull>
          <Flex>
            <SideBar />
            <ContainerContent>
              <Breadcrumbs />
              <ContainerContentBgWhite>
                <Routes>
                  <Route path="/admin/product/book" element={<ManageBook />} />
                  <Route
                    path="/admin/product/book/add"
                    element={<FormBook />}
                  />
                  <Route
                    path="/admin/product/laptop"
                    element={<ManageLaptop />}
                  />
                  <Route
                    path="/admin/product/laptop/add"
                    element={<FormLaptop />}
                  />
                  <Route
                    path="/admin/product/laptop/edit/:id"
                    element={<FormLaptop edit/>}
                  />
                </Routes>
              </ContainerContentBgWhite>
            </ContainerContent>
          </Flex>
        </ContainerFull>
      )}
    </Router>
  );
}

export default Routers;

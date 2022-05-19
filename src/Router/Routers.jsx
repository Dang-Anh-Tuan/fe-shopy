import { useLayoutEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Breadcrumbs from "../components/AdminPage/Breadcrumbs/Breadcrumbs";
import { ContainerContent } from "../components/AdminPage/ContainerContent/ContainerContent";
import { ContainerContentBgWhite } from "../components/AdminPage/ContainerContentBgWhite/ContainerContentBgWhite";
import SideBar from "../components/AdminPage/SideBar/SideBar";
import { ContainerFull } from "../components/container/ContainerFull/ContainerFull";
import { Flex } from "../components/container/Flex/Flex";
import NavBar from "../components/UserPage/NavBar";
import DashBoard from "../pages/admin/DashBoard";
import UserPage from "../pages/user";

const user = {
  username: "Tuan",
  avatar:
    "https://ss-images.saostar.vn/wp700/2020/02/23/7040341/67402236_2137340026563283_3067126297437143040_o.jpg",
};

function Routers() {
  const [isLogin, setIsLogin] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const token = localStorage.getItem("token");

  useLayoutEffect(() => {
    if (token) {
      setIsLogin(true);
    }
  }, [token]);

  return (
    <Router>
      <NavBar user={user} isLogin={isLogin} isAdmin={isAdmin} />
      {isAdmin && (
        <ContainerFull>
          <Flex>
            <SideBar />
            <ContainerContent>
              <Breadcrumbs />
              <ContainerContentBgWhite>
                <DashBoard />
              </ContainerContentBgWhite>
            </ContainerContent>
          </Flex>
        </ContainerFull>
      )}
      {!isAdmin && <UserPage />}
    </Router>
  );
}

export default Routers;

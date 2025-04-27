import Header from "../component/Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import styled from "styled-components";

const AppWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
`;

function AppLayout() {
  return (
    <AppWrapper>
      <Header />
      <MainContent>
        <Outlet />
      </MainContent>
      <Footer />
    </AppWrapper>
  );
}

export default AppLayout;

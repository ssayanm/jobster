import { Outlet, useLoaderData, useNavigate } from "react-router-dom";
import styled from "styled-components";
import SmallSidebar from "../components/SmallSidebar";
import BigSidebar from "../components/BigSidebar";
import Navbar from "../components/Navbar";
import { useState } from "react";
import DashboardContext from "../DashboardContext"; // Adjust the path based on your project structure
import propTypes from "prop-types";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";
import checkDefaultTheme from "../utils/checkDefaultTheme";
import { loader } from "../utils/loader";

export default function DashboardLayout() {
  const navigate = useNavigate();
  const { user } = useLoaderData(loader);

  const [showSidebar, setShowSidebar] = useState("false");
  const [isDarkTheme, setIsDarkTheme] = useState(checkDefaultTheme());

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    document.body.classList.toggle("dark-theme", newDarkTheme);
    localStorage.setItem("darkTheme", newDarkTheme);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const logoutUser = async () => {
    navigate("/");
    await customFetch.get("/auth/logout");
    toast.success("Logging out...");
  };

  return (
    <DashboardContext.Provider
      value={{
        toggleDarkTheme,
        toggleSidebar,
        showSidebar,
        isDarkTheme,
        user,
        logoutUser,
      }}
    >
      <Wrapper>
        <main className="dashboard">
          <SmallSidebar />
          <BigSidebar />
          <div>
            <Navbar />
            <div className="dashboard-page">
              <Outlet context={{ user }} />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
}

const Wrapper = styled.section`
  .dashboard {
    display: grid;
    grid-template-columns: 1fr;
  }
  .dashboard-page {
    width: 90vw;
    margin: 0 auto;
    padding: 2rem 0;
  }
  @media (min-width: 992px) {
    .dashboard {
      grid-template-columns: auto 1fr;
    }
    .dashboard-page {
      width: 90%;
    }
  }
`;

DashboardLayout.propTypes = {
  isDarkThemeEnabled: propTypes.any,
};

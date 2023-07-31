import React, { useContext, useRef, useState } from "react";
import {
  SDivider,
  SLink,
  SLinkContainer,
  SLinkIcon,
  SLinkLabel,
  SLinkNotification,
  SLogo,
  SSearch,
  SSearchIcon,
  SSidebar,
  SSidebarButton,
} from "./styles";
// to add light and dark mode
// STheme,
//   SThemeLabel,
//   SThemeToggler,
//   SToggleThumb,

import { logoSVG } from "../../assets";

import {
  AiOutlineLeft,
  AiOutlineSearch,
  AiFillFolder,
  AiOutlineRight,
} from "react-icons/ai";

// import { ThemeContext } from "./../../App";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const searchRef = useRef(null);
  // const { setTheme, theme } = useContext(ThemeContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { pathname } = useLocation();

  const searchClickHandler = () => {
    if (!sidebarOpen) {
      setSidebarOpen(true);
      searchRef.current.focus();
    } else {
      // search functionality
    }
  };

  return (
    <SSidebar>
      <SLogo>
        <img src={logoSVG} alt="logo" />
      </SLogo>

      {linksArray.map(({ icon, val, label, to, handleReload }) => (
        <SLinkContainer
          key={label}
          isActive={pathname === to}
          className="py-2 "
          onClick={handleReload}
        >
          <SLink to={to}>
            <SLinkIcon>{icon}</SLinkIcon>

            <>
              <SLinkLabel className="px-3 ">{label}</SLinkLabel>
              {/* if notifications are at 0 or null, do not display */}
              <SLinkNotification className="bg-transparent">
                {val}
              </SLinkNotification>
            </>
          </SLink>
        </SLinkContainer>
      ))}
      {/* to add light and dark mode  */}
      {/* <STheme>
        {sidebarOpen && <SThemeLabel>Dark Mode</SThemeLabel>}
        <SThemeToggler
          isActive={theme === "dark"}
          onClick={() => setTheme((p) => (p === "light" ? "dark" : "light"))}
        >
          <SToggleThumb style={theme === "dark" ? { right: "1px" } : {}} />
        </SThemeToggler>
      </STheme> */}
    </SSidebar>
  );
};

const linksArray = [
  {
    label: "Films",
    icon: <AiFillFolder />,
    to: "/films",
    val: <AiOutlineRight />,
    handleReload: () => {
      window.location.reload(); // Reload the window
    },
  },
  {
    label: "People",
    icon: <AiFillFolder />,
    to: "/people",
    val: <AiOutlineRight />,
    handleReload: () => {
      window.location.reload(); // Reload the window
    },
  },
  {
    label: "Planets",
    icon: <AiFillFolder />,
    to: "/planets",
    val: <AiOutlineRight />,
    handleReload: () => {
      window.location.reload(); // Reload the window
    },
  },
  {
    label: "Species",
    icon: <AiFillFolder />,
    to: "/species",
    val: <AiOutlineRight />,
    handleReload: () => {
      window.location.reload(); // Reload the window
    },
  },
  {
    label: "Starships",
    icon: <AiFillFolder />,
    to: "/starships",
    val: <AiOutlineRight />,
    handleReload: () => {
      window.location.reload(); // Reload the window
    },
  },
  {
    label: "Vehicles",
    icon: <AiFillFolder />,
    to: "/vehicles",
    val: <AiOutlineRight />,
    handleReload: () => {
      window.location.reload(); // Reload the window
    },
  },
];

export default Sidebar;

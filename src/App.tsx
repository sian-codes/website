import './App.css'
import Header from "./components/Header.tsx";
import ProfileView from "../src/views/ProfileView.tsx";
import TechnologyView from "./views/TechnologyView.tsx";
import PersonalPortfolioCard from "./components/PersonalPortfolioCard.tsx";
import {createContext, useEffect, useState} from "react";
import ReactSwitch from "react-switch";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMoon, faSunBright} from "@awesome.me/kit-459d1b3662/icons/classic/solid";
import Footer from "./components/Footer.tsx";

const ThemeContext = createContext(null)

function App() {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
    };

    useEffect(() => {
        document.body.id = theme;
    }, [theme]);

    return (
  <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <Header />
          <div className="switch">
              <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} offColor={"#CAE8BD"}
                checkedIcon={<div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>
                      <FontAwesomeIcon icon={faMoon} style={{ color: "#fff", fontSize: 16 }} />
                  </div>
              }
               uncheckedIcon={
                   <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>
                       <FontAwesomeIcon icon={faSunBright} style={{ color: "#ffffff", fontSize: 16 }} />
                   </div>
               }/>
          </div>
          <ProfileView />
            <TechnologyView />
            <PersonalPortfolioCard />
          <Footer />
        </div>
    </ThemeContext.Provider>
  )
}

export default App

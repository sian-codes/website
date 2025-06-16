import './App.css'
import Header from "./components/Header.tsx";
import ProfileView from "../src/views/ProfileView.tsx";
import TechnologyView from "./views/TechnologyView.tsx";
import PersonalPortfolioCard from "./components/PersonalPortfolioCard.tsx";

function App() {

  return (
    <>
      <div>
        <Header />
      </div>
      <div>
          <ProfileView />
      </div>
        <div>
            <TechnologyView />
        </div>
        <div>
            <PersonalPortfolioCard />
        </div>
    </>
  )
}

export default App

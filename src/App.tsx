// @ts-ignore
import './App.css'
import Header from "./components/Header.tsx";
import ProfileView from "./views/Profile-View.tsx";
import TechnologyView from "./views/TechnologyView.tsx";

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
    </>
  )
}

export default App

import './App.css'
import Header from "./components/Header.tsx";
import ProfileView from "./views/Profile-View.tsx";
import TimelineView from "./views/Timeline-View.tsx";
import TechnologyView from "./views/TechnologyView.tsx";

function App() {

  return (
    <>
      <div>
        <Header />
      </div>
      <div>
          <ProfileView />
          <TimelineView />
      </div>
        <div>
            <TechnologyView />
        </div>
    </>
  )
}

export default App

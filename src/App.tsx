// @ts-ignore
import './App.css'
import Header from "./components/Header.tsx";
import ProfileView from "./views/Profile-View.tsx";
import TimelineView from "./views/Timeline-View.tsx";

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
    </>
  )
}

export default App

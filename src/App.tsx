// @ts-ignore
import './App.css'
import Header from "./components/Header.tsx";
import ProfileView from "./views/Profile-View.tsx";

function App() {

  return (
    <>
      <div>
        <Header />
      </div>
      <div>
          <ProfileView />
      </div>
    </>
  )
}

export default App

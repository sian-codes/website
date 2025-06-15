import './App.css'
import Header from './components/Header.tsx';
import ProfileView from '../src/views/ProfileView.tsx';
import TechnologyView from '../src/views/TechnologyView.tsx';

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

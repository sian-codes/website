import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import ProfileView from './views/ProfileView';
import TechnologyView from './views/TechnologyView';
import PersonalPortfolioCard from './components/PersonalPortfolioCard';
import Footer from './components/Footer';
import ExperienceView from './views/ExperienceView';

function App() {
    const [theme, setTheme] = useState(() => {
        try { return localStorage.getItem('portfolio-theme') === 'light' ? 'light' : 'dark'; }
        catch { return 'dark'; }
    });
    useEffect(() => {
        document.body.dataset.theme = theme;
        document.documentElement.style.colorScheme = theme;
        try { localStorage.setItem('portfolio-theme', theme); } catch { /* Storage may be unavailable. */ }
    }, [theme]);
    return <div className="App">
        <a className="skip-link" href="#main">Skip to content</a>
        <Header theme={theme} toggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
        <main id="main"><ProfileView /><TechnologyView /><ExperienceView /><PersonalPortfolioCard /></main>
        <Footer />
    </div>;
}
export default App;

import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Footer from './components/Footer';
import Experience from './sections/Experience';

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
        <main id="main"><About /><Skills /><Experience /><Projects /></main>
        <Footer />
    </div>;
}
export default App;

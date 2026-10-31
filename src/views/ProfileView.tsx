import '../styling/profileView.css';
import picture from '../assets/portrait.png';

// The button appears when the current CV is added to this asset path.
const cvFiles = import.meta.glob('../assets/Sian-Kearley-CV.pdf', {
    eager: true,
    query: '?url',
    import: 'default',
});
const cvUrl = Object.values(cvFiles)[0] as string | undefined;
const ProfileView = () => (
    <section className="hero" id="about" aria-labelledby="intro-title">
        <div className="hero-copy"><p className="eyebrow">ANDROID & MOBILE SDK ENGINEER</p>
            <h1 id="intro-title">Hey, I’m Siân.<br /><span>I build mobile<br />experiences.</span></h1>
            <p className="intro">Thoughtful mobile software. A curious mind. A love of solving the interesting problems.</p>
            <p className="bio">I’m a Senior Associate Software Engineer at Global Payments, specialising in Android and mobile payment SDKs. My experience spans Android, microservices and APIs, with Kotlin and Jetpack Compose at the heart of my mobile work. I also contribute to the Frontend Community of Practice (FE CoP).</p>
            <div className="hero-actions"><a className="button primary" href="#work">Explore my work</a>{cvUrl && <a className="button secondary" href={cvUrl} download="Sian-Kearley-CV.pdf">Download CV <span className="file-type">PDF</span></a>}<a className="text-link" href="mailto:siannicole@proton.me">Let’s talk</a></div>
        </div>
        <div className="portrait-wrap"><div className="portrait-frame"><img src={picture} alt="Siân" className="portrait" /></div><div className="portrait-note"><span className="status-dot" /> Always curious. Always building.</div><span className="portrait-caption">ENGINEER / SCI-FI FAN / LEGO BUILDER</span></div>
        <div className="about-details"><div><p className="eyebrow">THE DAY JOB</p><p>Senior Associate Software Engineer at <a href="https://www.globalpayments.com/">Global Payments</a></p></div><div><p className="eyebrow">MY FOCUS</p><p>Android · Kotlin · Jetpack Compose · Mobile SDKs</p></div><div><p className="eyebrow">BEYOND THE CODE</p><p>Science fiction, Xbox, Switch & a good LEGO build.</p></div></div>
    </section>
);
export default ProfileView;

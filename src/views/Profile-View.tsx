// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import '../views/profile-view.css'
// @ts-ignore
import picture from '../assets/display.png'
import IconCarisol from "../components/IconCarisol.tsx";

const ProfileView = () => {
    return (
        <div className="container">
            <div className="title"><h2>Siân the Software Engineer</h2></div>
            <div className="image"><img alt="Me" src={picture}></img></div>
            <div className="content"><h3>Hey, I'm Siân a full stack Software Engineer</h3>
            <p>I have four years professional experience building and maintaining microservices, SDK's and products in a FinTech environment.</p>
            <p></p>
            </div>
            <div className="footer"><h4>I love working in and with the following technologies:</h4>
            <p><IconCarisol /></p>
            </div>
        </div>
    );
};

export default ProfileView

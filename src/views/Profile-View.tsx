// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import '../views/profile-view.css'
// @ts-ignore
import picture from '../assets/display.png'

const ProfileView = () => {
    return (
        <div className="container">
            <div className="title"><h2>Siân the Software Engineer</h2></div>
            <div className="image"><img alt="Me" src={picture}></img></div>
            <div className="content"><h3>Hey, I'm Siân a full stack Software Engineer</h3>
                <p>I have four years professional experience building and maintaining microservices, SDK's and products in a FinTech environment.</p></div>
            <div className="footer"><h4>Currently I am learning Kotlin and Android Development:</h4>
            </div>
        </div>
    );
};

export default ProfileView

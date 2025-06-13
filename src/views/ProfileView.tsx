import '../views/profile-view.css'
import picture from '../assets/display.png'
import logo from '../assets/worldpay-logo-dark.svg'

const ProfileView = () => {
    return (
        <div className="container">
            <div className="title"><h2>Siân the Software Engineer</h2></div>
            <div><img alt="Me" src={picture} className="image"></img></div>
            <div className="content"><h3>Hey, I'm Siân a full stack Software Engineer</h3>
                <p>I have four years professional experience building and maintaining microservices, SDK's and products
                    in a FinTech environment.</p>
                <p>In my personal life I love watching and reading Science Fiction, playing games on my Xbox or Switch
                    and building lego.</p>
                <p>My future professional goals are to learn Software Architecture and get to the next engineering
                    level. </p>
                <p>Current employer:</p>
                <p><a href="https://developer.worldpay.com/"><img alt="logo" src={logo} className="logo"/></a></p>
            </div>
            <div className="footer"><h4>Currently I am learning Kotlin and Android Development.</h4>
            </div>
        </div>
    );
};

export default ProfileView

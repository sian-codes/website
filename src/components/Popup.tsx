import './popup.css'
import ContactPopUp from "./ContactPopUp.tsx";

const Popup = (props: any) => {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <ContactPopUp />
                <button className="close-btn" onClick={() => props.setTrigger(false)}>Close</button>
                {props.children}
            </div>
        </div>
    ) : "";
};

export default Popup

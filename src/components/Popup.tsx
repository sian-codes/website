import './popup.css'
import ContactDetails from "./ContactDetails.tsx";

const Popup = (props: any) => {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <ContactDetails />
                <button className="close-btn" onClick={() => props.setTrigger(false)}>Close</button>
                {props.children}
            </div>
        </div>
    ) : "";
};

export default Popup

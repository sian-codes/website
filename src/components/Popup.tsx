import type { ReactNode } from 'react';
import './popup.css'
import ContactDetails from "./ContactDetails.tsx";

type PopupProps = {
    trigger: boolean;
    setTrigger: (open: boolean) => void;
    children?: ReactNode;
};

const Popup = (props: PopupProps) => {
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

import TimelineObserver from "react-timeline-animation";
import {useState} from "react";
import Timeline from "../components/Timeline.tsx";
import "../views/timeline-view.css";

export default function TimelineView() {
    const [message, setMessage] = useState("");

    const onCallback = () => {
        console.log("awesome");
    };

    return (
        <div className="timeline-view">
            <h1>Work Experience</h1>
            <TimelineObserver
                initialColor="#e5e5e5"
                fillColor="black"
                handleObserve={(setObserver) => (
                    <Timeline
                        callback={onCallback}
                        className="timeline"
                        setObserver={setObserver}
                    />
                )}
            />
            <div className="stub2">{message}</div>
        </div>
    );
}

import { useEffect, useRef, useState} from "react";
import "../views/timeline-view.css";

// @ts-expect-error
const Timeline = ({ setObserver, callback }) => {
        const [message1, setMessage1] = useState("");
        const [message2, setMessage2] = useState("");
        const [message3, setMessage3] = useState("");

        const timeline1 = useRef(null);
        const timeline2 = useRef(null);
        const timeline3 = useRef(null);
        const circle1 = useRef(null);
        const circle2 = useRef(null);
        const circle3 = useRef(null);

    const someCallback = () => {
        setMessage1("WorldPay: Software Engineer 1 Sept 2021 - Current Role");
        callback();
    };

    const someCallback2 = () => {
        setMessage2("Roche: Technical Support Aug 2017 - Aug 2021");
    };

    const someCallback3 = () => {
        setMessage3("Case London LTD: Customer Service Manager Aug 2013 - Aug 2017");
    };

    useEffect(() => {
        setObserver(timeline1.current);
        setObserver(timeline2.current);
        setObserver(timeline3.current);
        setObserver(circle1.current, someCallback);
        setObserver(circle2.current, someCallback2);
        setObserver(circle3.current, someCallback3);
    }, []);

    return (
        <div className="wrapper">
            <div id="timeline1" ref={timeline1} className="timeline" />
            <div className="circleWrapper">
                <div id="circle1" ref={circle1} className="circle">
                    1
                </div>
                <div className="message">{message1}</div>
            </div>
            <div id="timeline2" ref={timeline2} className="timeline" />
            <div className="circleWrapper">
                <div id="circle2" ref={circle2} className="circle">
                    2
                </div>
                <div className="message">{message2}</div>
            </div>
            <div id="timeline3" ref={timeline3} className="timeline" />
            <div className="circleWrapper">
                <div id="circle3" ref={circle3} className="circle">
                    3
                </div>
                <div className="message">{message3}</div>
            </div>
        </div>
    );
};

export default Timeline

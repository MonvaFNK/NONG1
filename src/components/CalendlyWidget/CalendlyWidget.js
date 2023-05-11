import React, { useEffect } from "react";

const CalendlyWidget = () => {
    useEffect(() => {
        const head = document.querySelector("head");
        const script = document.createElement("script");
        script.setAttribute("src", "https://assets.calendly.com/assets/external/widget.js");
        head.appendChild(script);
        return () => {
            head.removeChild(script);
        };
    }, []);

    return (
        <div className="calendly-inline-widget contact__container--calendly" data-url="https://calendly.com/santiago-diaz-monvale/galindo-meeting" style={{ minWidth: "320px", height: "630px" }}></div>
    );
};

export default CalendlyWidget;
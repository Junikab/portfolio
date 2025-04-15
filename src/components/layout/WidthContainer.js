import React from "react";

function WidthContainer({ children, className = "" }) {
    return <div className={`w-full ${className}`}>{children}</div>;
}

export default WidthContainer;

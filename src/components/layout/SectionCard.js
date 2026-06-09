import React from "react";

function SectionCard({ as: Component = "section", className = "", children }) {
    return <Component className={`surface-card ${className}`}>{children}</Component>;
}

export default SectionCard;

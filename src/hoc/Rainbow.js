import React from "react";

const Rainbow = (WrappedComponent) => {
    const colors = ["red", "blue", "yellow", "orange", "purple", "brown", "green"];
    const randomColor = colors[Math.floor(Math.random() * 6)];
    const className = randomColor + "-text";

    return (props) => {
        return (
            <div className={className} {...props}>
                <WrappedComponent />
            </div>
        );
    };

}

export default Rainbow;
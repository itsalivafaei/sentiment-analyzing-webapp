import React from "react";

export default function AnimationControls ({onSetAnimation}) {
    return (
        <div className="controls">
            <button onClick={() => onSetAnimation('passive')}>Passive</button>
            <button onClick={() => onSetAnimation('waiting')}>Waiting</button>
            <button onClick={() => onSetAnimation('thinking')}>Thinking</button>
            <button onClick={() => onSetAnimation('typing')}>Typing</button>
            <button onClick={() => onSetAnimation('stressed', 240)}>Nailing it</button>
        </div>
    );
};
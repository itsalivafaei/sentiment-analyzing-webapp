import React from "react";

export default function Sliders({frequency, amplitude, onSetConfig}) {
    return (
        <div className="sliders">
          <input
            type="range"
            step="0.01"
            name="frequency"
            value={frequency}
            onChange={onSetConfig}
            min="0"
            max="10"
          />
          <input
            type="range"
            step="0.01"
            name="amplitude"
            value={amplitude}
            onChange={onSetConfig}
            min="0.05"
            max="2"
          />
        </div>
    );
};
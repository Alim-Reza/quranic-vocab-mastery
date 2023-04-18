import React from 'react';
import './Progressbar.css';

export default function ProgressBar({ progress }) {
  return (
    <div className="progressbar">
      <div className="progress" style={{ width: `${progress}%` }}></div>
    </div>
  );
}

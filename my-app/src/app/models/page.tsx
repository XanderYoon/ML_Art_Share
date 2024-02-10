'use client'
import React from 'react';

//import { css } from '@emotion/react';
interface Props {
  state: any;
  setState: React.Dispatch<React.SetStateAction<any>>;
}

const MonaLisaShares: React.FC<Props> = ({ state, setState }) =>{
  // State to store selected shares
  const [selectedShares, setSelectedShares] = React.useState<number[]>([]);

  // Function to toggle share selection
  function toggleShare(shareNumber: number) {
    if (selectedShares.includes(shareNumber)) {
      setSelectedShares(selectedShares.filter(share => share !== shareNumber));
    } else {
      setSelectedShares([...selectedShares, shareNumber]);
    }
  }

  // Generate shares
  const shares = [];
  for (let i = 1; i <= 64; i++) {
    shares.push(
      <div
        key={i}
        className={`share ${selectedShares.includes(i) ? 'selected' : 'available'}`}
        onClick={() => toggleShare(i)}
      >
        {i}
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Mona Lisa Shares</h1>
      <div className="shares-container">
        {shares}
      </div>
      <style>{`
        .container {
          max-width: 800px;
          margin: 50px auto;
          padding: 20px;
          background-color: #fff;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          text-align: center;
        }
        .share {
          display: inline-block;
          width: calc(12.5% - 10px);
          margin: 5px;
          border: 2px solid #ccc;
          background-color: #f0f0f0; /* Default color */
          cursor: pointer;
        }
        .share.selected {
          border-color: #007bff;
          background-color: #cce5ff; /* Selected color */
        }
        .share.available {
          background-color: #f0f0f0; /* Available color */
        }
      `}</style>
    </div>
  );
}

export default MonaLisaShares;

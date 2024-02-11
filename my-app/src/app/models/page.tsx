'use client'
import React, { useEffect, useState } from 'react';

const MonaLisaShares: React.FC = () => {
  const [imagePieces, setImagePieces] = useState<string[]>([]);
  const [selectedPiece, setSelectedPiece] = useState<number | null>(null);
  const [ownedPieces, setOwnedPieces] = useState<boolean[]>(new Array(25).fill(false));

  useEffect(() => {
    const image = new Image();
    image.onload = () => {
      const widthOfOnePiece = Math.floor(image.width / 5);
      const heightOfOnePiece = Math.floor(image.height / 5);
      const numColsToCut = 5;
      const numRowsToCut = 5;
      let tempImagePieces: string[] = [];

      for (let y = 0; y < numRowsToCut; y++) {
        for (let x = 0; x < numColsToCut; x++) {
          const canvas = document.createElement('canvas');
          const context = canvas.getContext('2d');

          if (!context) return;

          canvas.width = widthOfOnePiece;
          canvas.height = heightOfOnePiece;

          context.drawImage(image, x * widthOfOnePiece, y * heightOfOnePiece, widthOfOnePiece, heightOfOnePiece, 0, 0, canvas.width, canvas.height);
          const dataUrl = canvas.toDataURL();
          tempImagePieces.push(dataUrl);
        }
      }
      setImagePieces(tempImagePieces);
    };

    image.src = 'GirlWithAPearlEarring.jpeg';
  }, []);

  const handlePieceClick = (index: number) => {
    setSelectedPiece(index);
  };

  const handleInvest = () => {
    if (selectedPiece !== null) {
      setOwnedPieces(prevState => {
        const newState = [...prevState];
        newState[selectedPiece] = true;
        return newState;
      });
    }
  };

  return (
    <div className="container">
      <h1>Mona Lisa Shares</h1>
      <div className="shares-container">
        {imagePieces.map((piece, index) => (
          <img
            key={index}
            src={piece}
            alt={`Piece ${index}`}
            className="image-piece"
            onClick={() => handlePieceClick(index)}
            style={{
              border: selectedPiece === index ? '2px solid blue' : ownedPieces[index] ? '2px solid grey' : '2px solid black',
              opacity: ownedPieces[index] ? 0.5 : 1
            }}
          />
        ))}
      </div>
      <button onClick={handleInvest}>Invest</button>
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
        .shares-container {
          display: flex;
          flex-wrap: wrap;
          gap: 2px; /* Adjust gap between pieces */
        }
        .image-piece {
          width: calc(20% - 4px); /* Adjust width of pieces */
          height: auto;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}

export default MonaLisaShares;
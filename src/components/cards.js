import React, { useState } from "react";
import { Card, Button } from "antd";
import { useDispatch } from 'react-redux';


const { Meta } = Card;

const mockData = [
  {
    id: 1,
    title: "Card 1",
    description: 94,
    imageUrl: "https://via.placeholder.com/300x200",
  },
  {
    id: 2,
    title: "Card 23333",
    description: 53,
    imageUrl: "https://via.placeholder.com/300x200",
  },
  {
    id: 3,
    title: "Card 32233",
    description: 53,
    imageUrl: "https://via.placeholder.com/300x200",
  },
  {
    id: 4,
    title: "Card 44324",
    description: "82",
    imageUrl: "https://via.placeholder.com/300x200",
  },
  {
    id: 5,
    title: "Card 5",
    description: "82",
    imageUrl: "https://via.placeholder.com/300x200",
  },
  {
    id: 6,
    title: "Card 6",
    description: "This is a card description",
    imageUrl: "https://via.placeholder.com/300x200",
  },
];

const MultiSelectCard = () => {
  const [selectedCards, setSelectedCards] = useState([]);

  const handleCardClick = (cardId) => {
    if (selectedCards.includes(cardId)) {
      setSelectedCards(selectedCards.filter((id) => id !== cardId));
    } else {
      setSelectedCards([...selectedCards, cardId]);
      dispatch(updateSelectedCards(selectedCards)); 
  };


  const handleResetClick = () => {
    setSelectedCards([]);
  };
  const cardData = mockData.map((card) => ({
    ...card,
    description: `${Math.round(card.description)}`,
  }));

  return (
    <>
      <div style={{ marginBottom: "10px" }}>
        <Button onClick={handleResetClick}>Reset</Button>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {cardData.map((card) => (
          <div
            key={card.id}
            style={{
              width: "150px",
              margin: "10px",
              border: "1px solid #d9d9d9",
              borderRadius: "8px",
              backgroundColor: selectedCards.includes(card.id)
                ? "lightblue"
                : "white",
              cursor: "pointer",
            }}
            onClick={() => handleCardClick(card.id)}
          >
            <Card style={{ backgroundColor: "transparent", border: "none" }}>
              <Meta
                title={card.title}
                description={card.description}
                style={
                  card.description >= 95
                    ? { color: "red", textAlign: "center" }
                    : card.description >= 85
                    ? { color: "orange", textAlign: "center" }
                    : { color: "green", textAlign: "center" }
                }
              />
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};

export default MultiSelectCard;

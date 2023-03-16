import React, { useState } from "react";
import { Card, Button } from "antd";

const { Meta } = Card;

const mockData = [
  {
    id: 1,
    title: "Card 1",
    description: "This is a card description",
    imageUrl: "https://via.placeholder.com/300x200",
  },
  {
    id: 2,
    title: "Card 2",
    description: "This is a card description",
    imageUrl: "https://via.placeholder.com/300x200",
  },
  {
    id: 3,
    title: "Card 3",
    description: "This is a card description",
    imageUrl: "https://via.placeholder.com/300x200",
  },
  {
    id: 4,
    title: "Card 4",
    description: "This is a card description",
    imageUrl: "https://via.placeholder.com/300x200",
  },
  {
    id: 5,
    title: "Card 5",
    description: "This is a card description",
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
    }
  };

  const handleResetClick = () => {
    setSelectedCards([]);
  };

  return (
    <>
      <div style={{ marginBottom: "10px" }}>
        <Button onClick={handleResetClick}>Reset</Button>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {mockData.map((card) => (
          <div
            key={card.id}
            style={{
              width: "300px",
              margin: "10px",
              backgroundColor: selectedCards.includes(card.id)
                ? "lightblue"
                : "white",
              cursor: "pointer",
            }}
            onClick={() => handleCardClick(card.id)}
          >
            <Card
              hoverable
              cover={<img alt={card.title} src={card.imageUrl} />}
              style={{
                height: "100%",
                backgroundColor: "transparent",
                border: "none",
              }}
            >
              <Meta title={card.title} description={card.description} />
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};

export default MultiSelectCard;
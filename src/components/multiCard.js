import React from "react";
import { connect } from "react-redux";
import { updatedSelectedCards, resetSelectedCards } from "./selectedCardSlice";

const cards = [
  {
    id: "card1",
    title: "Card 1",
    description: "Lorem ipsum dolor sit amet",
    width: 200,
    height: 200,
  },
  {
    id: "card2",
    title: "Card 2",
    description: "consectetur adipiscing elit",
    width: 200,
    height: 200,
  },
  {
    id: "card3",
    title: "Card 3",
    description: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    width: 200,
    height: 200,
  },
  {
    id: "card4",
    title: "Card 4",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    width: 200,
    height: 200,
  },
  {
    id: "card5",
    title: "Card 5",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    width: 200,
    height: 200,
  },
];

class MultiSelectCard extends React.Component {
  handleCardClick = (id) => {
    const { selectedCards, updatedSelectedCards } = this.props;
    const cardIndex = selectedCards.indexOf(id);
    let newSelectedCards = [];

    if (cardIndex === -1) {
      newSelectedCards = [...selectedCards, id];
    } else {
      newSelectedCards = [
        ...selectedCards.slice(0, cardIndex),
        ...selectedCards.slice(cardIndex + 1),
      ];
    }

    updatedSelectedCards(newSelectedCards);
  };

  handleResetClick = () => {
    this.props.resetSelectedCards();
  };

  render() {
    const { selectedCards } = this.props;

    return (
      <div>
        <div>
          {cards.map((card) => {
            const isSelected = selectedCards.indexOf(card.id) !== -1;

            return (
              <div
                key={card.id}
                onClick={() => this.handleCardClick(card.id)}
                style={{
                  width: card.width,
                  height: card.height,
                  border: "1px solid black",
                  margin: "10px",
                  display: "inline-block",
                  cursor: "pointer",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "5px",
                    left: "5px",
                  }}
                >
                  <h3
                    style={{
                      margin: 0,
                      fontSize: 16,
                      fontWeight: "bold",
                      maxWidth: "100%",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {card.title}
                  </h3>
                </div>
                <div
                  style={{
                    position: "absolute",
                    bottom: "5px",
                    left: "5px",
                    width: "100%",
                  }}
                >
                  <p
                    style={{
                      margin: 0,
                      fontSize: 14,
                      fontWeight: "bold",
                      maxWidth: "100%",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                     

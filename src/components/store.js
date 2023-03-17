const updateSelectedCards = (selectedCards) => {
    return {
      type: 'UPDATE_SELECTED_CARDS',
      payload: selectedCards,
    };
  };
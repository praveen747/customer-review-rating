import { useSelector } from "react-redux";

const data = useSelector((state) => state.data);
const selectedCardIds = useSelector((state) => state.selectedCardIds);

const filteredData = data.filter((item) =>
  selectedCardIds.includes(item.cardId)
);

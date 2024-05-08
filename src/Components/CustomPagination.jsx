import { useState } from "react";
import Pagination from "react-bootstrap/Pagination";

function CustomPagination({ totalPages, onChangePage }) {
  const [active, setActive] = useState(1);
  let items = [];

  const handleClick = (number) => {
    setActive(number);
    onChangePage(number);
  };

  for (let number = 1; number <= totalPages; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={() => handleClick(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div>
      <Pagination>{items}</Pagination>
    </div>
  );
}

export default CustomPagination;

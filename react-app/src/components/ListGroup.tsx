import { MouseEvent, useState } from "react";

function ListGroup() {
  let listOfCountries = [
    "New York",
    "San Fransico",
    "London",
    "Paris",
    "Tokyo",
    "Vancouver",
  ];
  const [selectedIndex, setSelectedIndex] = useState(0);

  // const handleClickItems = (item: string, index: number): void => {
  //   console.log(`Item ${item} Number : ${index}`);
  // };

  const handleClick = (mevent: MouseEvent) => {
    console.log(mevent);
  };

  return (
    <div>
      <h1>List</h1>
      {listOfCountries.length === 0 && <p>Not Items Found</p>}
      <ul className="list-group">
        {listOfCountries.map((item, index) => (
          <li
            className={
              index === selectedIndex
                ? "list-group-item active"
                : "list-group-item"
            }
            // onClick={() => handleClickItems(item, index)}
            onClick={() => setSelectedIndex(index)}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListGroup;

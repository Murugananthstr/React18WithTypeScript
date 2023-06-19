import { useState } from "react";
import styled from "styled-components";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

const List = styled.ul`
  list-style: lower-roman;
  color: red;
`;

const ListItem = styled.li`
  padding-left: 100px;
  background: blue;
`;

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <div>
      <h1>{heading}</h1>
      {items.length === 0 && <p>Not Items Found</p>}
      <List>
        {items.map((item, index) => (
          <ListItem
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
            key={item}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default ListGroup;

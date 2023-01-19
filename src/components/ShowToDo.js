import React from "react";
import { ListContainer, Row, Text, DeleteIcon } from "./StyledComponents";

const ShowToDo = ({todos}) => {
    console.log(todos);
  return (
    <div>
      <ListContainer>
        {/* render all todos in bullet points */}
        {todos?.map((todo) => (
          <Row key={todo._id}>
            <Text>{todo.text}</Text>
          </Row>
        ))}
      </ListContainer>
    </div>
  );
};

export default ShowToDo;
import styled from "styled-components";

// ToDoList component
export const Container = styled.div`
  width: 50%;
  margin: 0 auto;
  text-align: center;
`;

// Form component
export const FormContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 0px;
  @media (max-width: 420px) {
    flex-direction: column;
  }
`;

export const Input = styled.input`
  background-color: #f7f7f7;
  width: 100%;
  padding: 8px;
  border: 1px solid blue;
  border-radius: 8px;
  :focus {
    border: 3px solid #ef7360;
    outline: none;
  }
`;

export const Button = styled.button`
  background: black;
  border-radius: 18px;
  border: 2px solid black;
  color: white;
  margin-left: 1em;
  padding: 8px 20px;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 600;
  @media (max-width: 420px) {
    margin-top: 10px;
    margin-left: 0;
    width: 100%;
  }
`;

// ShowToDo
export const ListContainer = styled.ul`
  padding: 0;
  cursor: pointer;
`;

export const Row = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  font-size: 1rem;
  background-color: #111;
  color: #fff;
  margin-top: 5px;
`;

export const Text = styled.span`
  ::first-letter {
    text-transform: capitalize;
  }
  color: ${(props) => (props.isCompleted ? "red" : null)};
  text-decoration: ${(props) => (props.isCompleted ? "line-through" : "none")};
`;

export const DeleteIcon = styled(Text)`
  cursor: pointer;
`;
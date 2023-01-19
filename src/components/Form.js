import React from 'react';
import { FormContainer, Input, Button } from './StyledComponents';

const Form = ({input, setInput}) => {
    return (
        <FormContainer>
        <Input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        role="input"
        />
        <Button type="submit">
          Add
        </Button>
      </FormContainer>
    );
};

export default Form;
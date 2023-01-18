import React from 'react';
import { FormContainer, Input, Button } from './StyledComponents';

const Form = () => {
    return (
        <FormContainer>
        <Input
          value=""
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
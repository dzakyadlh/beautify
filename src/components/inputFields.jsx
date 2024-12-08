// components/FormInput.jsx
import React from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from '@chakra-ui/react';

export const CommonFormInput = ({
  id,
  label,
  type,
  placeholder,
  field,
  form,
}) => {
  return (
    <FormControl
      isInvalid={!!form.errors[field.name] && !!form.touched[field.name]}
    >
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        {...field} // Spread the field props (value, onChange, onBlur)
        border="solid 1px"
        backgroundColor="white"
      />
      <FormErrorMessage>{form.errors[field.name]}</FormErrorMessage>
    </FormControl>
  );
};

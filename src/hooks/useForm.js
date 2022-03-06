import React from 'react';

export default function useForm({ initialValues, onSubmit }) {
  const [inputValue, setInputValue] = React.useState(initialValues);
  const [isFormValid, setIsFormValid] = React.useState(false);

  return {
    inputValue,
    handleSubmit(event) {
      event.preventDefault();
      onSubmit(inputValue);
    },
    handleChange(event) {
      const { name, value, form } = event.target;
      const formValidity = form.checkValidity();
      setInputValue((currentValues) => ({
        ...currentValues,
        [name]: value,
      }));
      setIsFormValid(formValidity);
    },
    isFormValid,
  };
}

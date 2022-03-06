import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import validations from '../utils/validate';
import Text from './Text';

const InputWrapper = styled.div`
  color: ${({ theme }) => theme.colors.dark};
  font-size: ${({ theme }) => theme.typographyVariants.label.fontSize};
  display: flex;
  flex-direction: column;
`;

const InputElement = styled.input`
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  
  margin-top: 8px;
  padding: 14px 6px;
  height: 48px;
  
  font-size: ${({ theme }) => theme.typographyVariants.input.fontSize};
  font-family: ${({ theme }) => theme.fontFamily.common};
`;

const InvalidMessageElement = styled.span`
  display: block;
  font-size: 12px;
  margin: 2px 0;
  color: ${({ theme }) => theme.colors.error};
  height: 15px;
`;

export default function Input({
  label,
  id,
  type,
  validate,
  value,
  onChange,
  pattern,
  placeholder,
  required,
}) {
  const [invalidMessage, setInvalidMessage] = React.useState('');
  const [isFieldValid, setIsFieldValid] = React.useState(true);

  function checkValidation(event) {
    const validField = validations(event.target, validate, setInvalidMessage);
    setIsFieldValid(validField);
  }

  return (
    <InputWrapper>
      <Text as="label" name={id} htmlFor={id}>{`${label} ${required ? '*' : ''}`}</Text>
      <InputElement
        id={id}
        name={id}
        type={type}
        className="input"
        onChange={onChange}
        value={value}
        pattern={pattern || '[A-Za-z0-9]*'}
        onBlur={checkValidation}
        placeholder={placeholder}
        required={required}
      />
      <InvalidMessageElement>
        {!isFieldValid && invalidMessage}
      </InvalidMessageElement>
    </InputWrapper>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  validate: PropTypes.func,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  pattern: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
};

Input.defaultProps = {
  validate: () => {},
  placeholder: '',
  pattern: undefined,
  required: false,
};

/* eslint-disable no-use-before-define */
export default function validations(input, validationFunction, setInvalidMessage) {
  if (validationFunction) {
    const customMessage = validationFunction(input);
    if (customMessage) {
      setInvalidMessage(customMessage);
      input.setCustomValidity(message);
    } else {
      input.setCustomValidity('');
      setInvalidMessage('');
    }
  }
  const defaultValidations = [
    'valueMissing', // quando o input tem "required"
    'typeMismatch', // quando o type do input foge do padrão estabelecido, como email, data...
    'patternMismatch', // quando o input tem o atributo "pattern"
  ];

  const defaultValidationsMessage = {
    valueMissing: 'Campo não pode estar vazio',
    typeMismatch: 'Valor inválido',
    patternMismatch: 'Valor inválido',
  };

  const message = defaultValidations.forEach((validation) => {
    if (input.validity[validation]) setInvalidMessage(defaultValidationsMessage[validation]);
  });

  return input.validity.valid;
}

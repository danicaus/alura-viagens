/* eslint-disable no-undef */
import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import PageWrapper from '../src/components/PageWrapper';
import Title from '../src/components/Title';
import Input from '../src/components/Input';
import RadioInput from '../src/components/RadioInput';
import Section from '../src/components/Section';
import Text from '../src/components/Text';
import useForm from '../src/hooks/useForm';
import formatDateToInput from '../src/utils/formatDateToInput';

const Button = styled.button`
  color: ${({ theme }) => theme.colors.light};
  background-color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.typographyVariants.label.fontSize};
  font-weight: 700;
  border-radius: 10px;

  width: 100%;
  height: 60px;
  margin-top: 32px;

  border: none;
`;

export default function Home() {
  const router = useRouter();
  const tomorrow = formatDateToInput(1);
  const oneWeekFromNow = formatDateToInput(7);

  const initialValues = {
    departureDate: tomorrow,
    returnDate: oneWeekFromNow,
    departurePlace: '',
    arrivalPlace: '',
    paymentMethod: 'card',
    clientName: '',
    clientSurname: '',
    clientNationality: '',
    clientBirthDate: '',
    clientDocument: '',
    clientEmail: '',
    clientTelephone: '',
  };

  const form = useForm({
    initialValues,
    onSubmit: (values) => {
      // eslint-disable-next-line no-undef
      localStorage.setItem('FormData', JSON.stringify(values));
      router.push('/confirm');
    },
  });

  function isCPFValid(input) {
    const { value } = input;
    const formattedCPF = value.replace(/\D/g, '');

    function checkRepeatedNumbers() {
      const repeatedNumbers = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999',
      ];
      const hasRepeatedNumbers = repeatedNumbers.find(
        (repeatedNumber) => formattedCPF === repeatedNumber,
      );
      if (hasRepeatedNumbers) return true;
      return false;
    }

    const hasOnlyRepeatedNumbers = checkRepeatedNumbers();

    if (hasOnlyRepeatedNumbers) return 'CPF não pode ter valores repetidos';
    return null;
  }

  function isAgeValid(input) {
    const { value } = input;
    const today = new Date();
    const birthDate = new Date(value);
    const clientAgeIn18Years = new Date(
      birthDate.getUTCFullYear() + 18,
      birthDate.getUTCMonth(),
      birthDate.getUTCDate(),
    );

    if (clientAgeIn18Years >= today) {
      return 'Você deve ser maior de 18 anos para fazer a compra';
    }

    return null;
  }

  function areTravelDatesValid(input) {
    const inputId = input.getAttribute('name');

    if (inputId === 'departureDate') {
      const departureDate = input.value;
      const returnDate = document.getElementById('returnDate').value;
      const isDateOrderValid = returnDate >= departureDate;
      const isDepartureBeforeToday = formatDateToInput(0) >= departureDate;

      if (isDepartureBeforeToday) return 'Data deve ser a partir de amanhã';
      if (!isDateOrderValid) return 'Saída não pode ser depois do retorno';
    }

    if (inputId === 'returnDate') {
      const returnDate = input.value;
      const departureDate = document.getElementById('departureDate').value;
      const isDateOrderValid = returnDate >= departureDate;
      const isReturnBeforeToday = formatDateToInput(0) >= returnDate;

      if (isReturnBeforeToday) return 'Data deve ser a partir de amanhã';
      if (!isDateOrderValid) return 'Retorno não pode ser antes da saída';
    }

    return null;
  }

  function handleCPFMask(inputValue) {
    const onlyFieldNumbers = inputValue.replace(/\D/g, '');
    const maskedCPF = onlyFieldNumbers
      .replace(/(\d{3})(\d{1})/, '$1.$2')
      .replace(/(\d{3})(\d{1})/, '$1.$2')
      .replace(/(\d{3})(\d{1})/, '$1-$2');
    return maskedCPF;
  }

  function handleTelMask(inputValue) {
    const onlyFieldNumbers = inputValue.replace(/\D/g, '');
    const maskedNumber = onlyFieldNumbers
      .replace(/(\d{2})(\d{1})/, '($1) $2')
      .replace(/(\d{4,5})(\d{4})/, '$1 - $2');
    return maskedNumber;
  }

  return (
    <PageWrapper>
      <Title>Alura Viagens</Title>
      <Text small>* Dados obrigatórios</Text>
      <form id="alura-travel" onSubmit={form.handleSubmit}>
        <Section title="Quando será a viagem?">
          <Input
            id="departureDate"
            type="date"
            label="Data de saída"
            validate={areTravelDatesValid}
            value={form.inputValue.departureDate}
            onChange={form.handleChange}
            required
          />
          <Input
            id="returnDate"
            type="date"
            label="Data de retorno"
            validate={areTravelDatesValid}
            value={form.inputValue.returnDate}
            onChange={form.handleChange}
            required
          />
          <Input
            id="departurePlace"
            type="text"
            label="Local de origem"
            value={form.inputValue.departurePlace}
            onChange={form.handleChange}
            required
          />
          <Input
            id="arrivalPlace"
            type="text"
            label="Local de destino"
            value={form.inputValue.arrivalPlace}
            onChange={form.handleChange}
            required
          />
        </Section>
        <Section title="Qual será a forma de pagamento?">
          <RadioInput
            value={form.inputValue.paymentMethod}
            handleValue={form.handleChange}
            form="alura-travel"
          />
        </Section>
        <Section title="Quem irá viajar?">
          <Input
            id="clientName"
            type="text"
            label="Nome"
            pattern="[A-Za-z]*"
            value={form.inputValue.clientName}
            onChange={form.handleChange}
            required
          />
          <Input
            id="clientSurname"
            type="text"
            label="Sobrenome"
            value={form.inputValue.clientSurname}
            onChange={form.handleChange}
            required
          />
          <Input
            id="clientNationality"
            type="text"
            label="País de residência"
            value={form.inputValue.clientNationality}
            onChange={form.handleChange}
          />
          <Input
            id="clientBirthDate"
            type="date"
            label="Data de nascimento"
            validate={isAgeValid}
            value={form.inputValue.clientBirthDate}
            onChange={form.handleChange}
            required
          />
          <Input
            id="clientDocument"
            type="text"
            label="CPF"
            pattern="^([0-9]{3})([\.]?[0-9]{3})([\.]?[0-9]{3})([\-]?[0-9]{2})$"
            validate={isCPFValid}
            placeholder="000.000.000-00"
            value={handleCPFMask(form.inputValue.clientDocument)}
            onChange={form.handleChange}
            required
          />
          <Input
            id="clientEmail"
            type="email"
            label="Email"
            pattern="[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+"
            value={form.inputValue.clientEmail}
            onChange={form.handleChange}
            required
          />
          <Input
            id="clientTelephone"
            type="tel"
            label="Telefone"
            pattern="^([0-9]{2}|([\(][0-9]{2}[\)])) ?([0-9]{4,5})([ -]{1,3})?([0-9]{4})$"
            placeholder="(__) _____ - ____"
            value={handleTelMask(form.inputValue.clientTelephone)}
            onChange={form.handleChange}
          />
        </Section>
        {form.isFormValid && <Button type="submit" form="alura-travel">Comprar</Button>}
      </form>
    </PageWrapper>
  );
}

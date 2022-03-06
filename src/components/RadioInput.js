import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import PropTypes from 'prop-types';

import PixIcon from '../../public/assets/icon-pix.svg';
import PayPalIcon from '../../public/assets/icon-paypal.svg';
import CardIcon from '../../public/assets/icon-card.svg';

const RadioInputButton = styled.button`
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.light};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 9px;
  height: 80px;
  flex: 1;
  max-width: 370px;
  
  &:first-of-type {
    border-radius: 10px 0 0 10px;
  }

  &:last-of-type {
    border-radius: 0 10px 10px 0;
  }

  &.active {
    background-color: ${({ theme }) => `${theme.colors.primary}6b`};
  }
`;

const RadioInputButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export default function RadioInput({ value, handleValue, form }) {
  return (
    <RadioInputButtonWrapper>
      <RadioInputButton
        className={value === 'card' ? 'active' : ''}
        name="paymentMethod"
        value="card"
        onClick={handleValue}
        form={form}
        id="card"
      >
        <Image src={CardIcon} form={form} />
        Cartão
      </RadioInputButton>
      <RadioInputButton
        className={value === 'paypal' ? 'active' : ''}
        name="paymentMethod"
        value="paypal"
        onClick={handleValue}
        form={form}
        id="paypal"
      >
        <Image src={PayPalIcon} form={form} />
        Pay Pal
      </RadioInputButton>
      <RadioInputButton
        className={value === 'pix' ? 'active' : ''}
        name="paymentMethod"
        value="pix"
        onClick={handleValue}
        form={form}
        id="pix"
      >
        <Image src={PixIcon} form={form} />
        Pix
      </RadioInputButton>
    </RadioInputButtonWrapper>
  );
}

RadioInput.propTypes = {
  value: PropTypes.string.isRequired,
  handleValue: PropTypes.func.isRequired,
  form: PropTypes.string.isRequired,
};

import styled from 'styled-components';

const Text = styled.p`
  color: ${({ theme }) => theme.colors.dark};
  font-size: ${({ theme, small }) => (small ? theme.typographyVariants.errorMessage.fontSize : theme.typographyVariants.label.fontSize)};
  font-weight: ${({ light }) => (light ? '300' : '400')};

  margin-top: 16px;
`;

export default Text;

import styled from 'styled-components';

const Title = styled.h1`
font-family: ${({ theme }) => theme.fontFamily.title};
color: ${({ theme }) => theme.colors.primary};
font-size: ${({ theme }) => theme.typographyVariants.titleXs.fontSize};
margin: 0;

@media screen and (min-width: 720px) {
  font-size: ${({ theme }) => theme.typographyVariants.title.fontSize};
}
`;

export default Title;

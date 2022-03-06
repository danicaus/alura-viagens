import styled from 'styled-components';

const PageWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.light};
  max-width: 350px;
  padding-top: 16px;
  padding-left: 18px;
  padding-right: 18px;
  padding-bottom: 32px;
  margin: 0 auto;
  min-height: 100vh;
  height: 100%;
  box-shadow: 0 0 20px 5px #0000004D;
  
  @media screen and (min-width: 720px) {
    max-width: 900px;
    padding: 10px 170px;
  }
`;

export default PageWrapper;

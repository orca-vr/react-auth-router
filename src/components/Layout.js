import styled from 'styled-components';

export const Layout = styled.div`
width: 100%;
height: calc(100vh - 80px);
display: flex;
gap: 40px;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const Title = styled.h1`
  width: 50%;
   margin: 0 auto ${({theme}) => theme.spacing(3)};
   display: flex;
   justify-content: center;
   gap: ${({theme}) => theme.spacing(10)};
   align-items: center;
   font-size: 32px;
  text-align: center;
`
export const Text = styled.p`
  font-size: 20px;
  text-align: center;
`

export const ErrMsg = styled.div`
  margin: ${({theme}) => theme.spacing(8)} auto;
  font-size: 24px;
  font-weight: 500;
  text-align: center;
`

import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import styled from 'styled-components';
import { AppHeader } from '../components/AppHeader/AppHeader';

const Wrapper = styled.div`
max-width: 800px;
height: 100vh;
margin: 0 auto;
background-color: ${({ theme }) => theme.colors.background};
`;

export const SharedLayout = () => {
  return (
    <Wrapper>
      <AppHeader />
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
      <Toaster />
    </Wrapper>
  );
};

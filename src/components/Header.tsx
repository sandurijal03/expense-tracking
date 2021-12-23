import { FC } from 'react';
import styled from 'styled-components';

interface HeaderProps {
  title: string;
}

const Wrapper = styled.div`
  h1 {
    letter-spacing: 1px;
    margin: 0;
  }
`;

const Header: FC<HeaderProps> = ({ title }) => {
  return (
    <Wrapper>
      <h1>{title}</h1>
    </Wrapper>
  );
};

export default Header;

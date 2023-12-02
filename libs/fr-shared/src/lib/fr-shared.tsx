import styled from 'styled-components';

/* eslint-disable-next-line */
export interface FrSharedProps {}

const StyledFrShared = styled.div`
  color: pink;
`;

export function FrShared(props: FrSharedProps) {
  return (
    <StyledFrShared>
      <h1>Welcome to FrShared!</h1>
    </StyledFrShared>
  );
}

export default FrShared;

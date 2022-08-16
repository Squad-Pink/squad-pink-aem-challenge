import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 5rem;
  padding: 1.875rem 10%;
  background: #eceef2;
  @media (max-width: 768px) {
    height: 4rem;
    padding: 0.875rem 10%;
  }
`;
export default HeaderContainer;

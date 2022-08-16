import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 7rem;
  padding: 1.875rem 10%;
  background: #eceef2;
  @media (max-width: 768px) {
    height: 5rem;
    padding: 0.875rem 8%;
  }
`;
export default HeaderContainer;

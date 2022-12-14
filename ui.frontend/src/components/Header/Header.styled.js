import styled from "styled-components";
import { toRem } from "../../utils/convertToRem";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 7rem;
  padding: 1.875rem 10%;
  background: #eceef2;
  @media (max-width: 768px) {
    height: 6rem;
    padding: 0.875rem 5%;
  }
  @media (max-width: 420px) {
    height: 5rem;
  }
  
`;
export default HeaderContainer;

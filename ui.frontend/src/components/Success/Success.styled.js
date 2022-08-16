import styled from "styled-components";

const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 36rem;
  width: 85%;
  border-radius: 1em;
  margin: auto;
  padding: 2rem 0rem;
  overflow: hidden;
  text-overflow: ellipsis;    
  @media (max-width: 768px) {
    padding: 0 0 2rem 0;
    border-radius: 0;
  }
`;
const ReturnContainer = styled.div`
    width: 100%;
    height: 3rem;
    display: flex;
    flex-direction: row-reverse;
`;

const CertificatesContainer = styled.div`
  width: 100%;
  display: inline-flex;
  height: 6rem;
  max-width: 100%; 
  div:nth-child(2) {
    flex: 2;
    color: black;
    white-space: pre;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`


export { SuccessContainer, ReturnContainer, CertificatesContainer }
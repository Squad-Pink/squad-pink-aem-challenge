import styled from "styled-components";

const SuccessContainer = styled.div`
  padding: 2rem;
  width: 100%;
  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

const ReturnContainer = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
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
`;

export { SuccessContainer, ReturnContainer, CertificatesContainer };

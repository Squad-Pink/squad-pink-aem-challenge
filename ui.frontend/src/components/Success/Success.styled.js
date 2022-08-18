import styled from "styled-components";
import { toRem } from "../../utils/convertToRem";

const SuccessContainer = styled.div`
  padding: 0 3.5rem;
  width: 100%;
  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

const ReturnContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  margin-top: 7rem;
`;

const CertificatesContainer = styled.div`
  width: 100%;
  display: inline-flex;
  height: 6rem;
  width: 100%;
  white-space: pre;
  overflow: hidden;
  text-overflow: ellipsis;
  div:nth-child(2) {
    flex: 2;
    color: black;
    white-space: pre;
    overflow: hidden;
    text-overflow: ellipsis ;
  }
`;

const Container = styled.div`
  display: flex;
  background: white;
  border-radius: 0 0 ${toRem(20)} ${toRem(20)}  ;
  width: ${toRem(617)};
  margin: auto;
  height: ${toRem(553)};
  flex-direction: column;  
  padding: auto;
    @media (max-width: 768px) {
      width: 100%;
      margin-top: ${toRem(5)};
    }
`;

export { SuccessContainer, ReturnContainer, CertificatesContainer, Container  };

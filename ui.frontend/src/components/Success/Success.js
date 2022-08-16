import React, { useState, useEffect } from "react";
import Text from "../Micro/MicroText/MicroText";
import { SuccessContainer, CertificatesContainer, ReturnContainer } from "./Success.styled";
import Button from "../Micro/Button/Button";
//import Title from "../Micro/Title/Title";
//import { MapTo } from "@adobe/aem-react-editable-components";
//import { useNavigate } from "react-router-dom";

const Success = (props) => {
  //const { setSocialContainer, setCertificateContainer } = props;
  const [fullName, setFullName] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [birthday, setBirthday] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [gitHub, setGitHub] = useState("");
  const [certificates, setCertificates] = useState("");
  const [teamName, setTeamName] = useState("");
  const [institution, setInstitution] = useState("");
  const [graduation, setGraduation] = useState("");

  //let navigate = useNavigate();

  useEffect(() => {
    const fullName = `Full Name: ${localStorage.getItem("Full Name *")}`;
    const nickname = `Nickname: ${localStorage.getItem("Nickname")}`;
    const email = `Email: ${localStorage.getItem("Email *")}`;
    const phone = `Phone: ${localStorage.getItem("Phone")}`;
    const birthday = `Birthday: ${localStorage.getItem("Birthday *")}`;
    const linkedIn = `LinkedIn: ${localStorage.getItem("LinkedIn")}`;
    const gitHub = `GitHub: ${localStorage.getItem("GitHub *")}`;
    const certificates = `${JSON.parse(
      localStorage.getItem("Certificates")
    )}`;
    const teamName = `TeamName: ${localStorage.getItem("Team Name *")}`;
    const institution = `Institution: ${localStorage.getItem("Institution *")}`;
    const graduation = `Graduation: ${localStorage.getItem("Graduation *")}`;

    if (localStorage.getItem("Full Name *") !== null) {
      setFullName(fullName);
    }
    if (localStorage.getItem("Nickname") !== null) {
      setNickname(nickname);
    }
    if (localStorage.getItem("Email *") !== null) {
      setEmail(email);
    }
    if (localStorage.getItem("Phone") !== null) {
      setPhone(phone);
    }
    if (localStorage.getItem("Birthday *") !== null) {
      setBirthday(birthday);
    }
    if (localStorage.getItem("GitHub *") !== null) {
      setGitHub(gitHub);
    }
    if (localStorage.getItem("LinkedIn") !== null) {
      setLinkedIn(linkedIn);
    }
    if (localStorage.getItem("Certificates") !== null) {
      setCertificates(certificates);
    }
    if (localStorage.getItem("Team Name *") !== null) {
      setTeamName(teamName);
    }
    if (localStorage.getItem("Institution *") !== null) {
      setInstitution(institution);
    }
    if (localStorage.getItem("Graduation *") !== null) {
      setGraduation(graduation);
    }
  }, []);

  /*const handleClick = () => {
    setSocialContainer(false);
    setCertificateContainer(false);
    localStorage.clear();
    navigate("/basic", { replace: true });
  };*/

  return (
    <SuccessContainer>
      <Text title="Your data has been sent successfully!" />
      <Text variable={fullName} />
      <Text variable={nickname} />
      <Text variable={email} />
      <Text variable={phone} />
      <Text variable={birthday} />
      <Text variable={linkedIn} />
      <Text variable={gitHub} />
      <CertificatesContainer>
        <Text id="titlecertificate" variable={"Certificates: "} />
        <Text id="contentCertificate" variable={certificates.replace(/\,/sg, "\n")} />
      </CertificatesContainer>
      <Text variable={teamName} />
      <Text variable={institution} />
      <Text variable={graduation} />
      <ReturnContainer>
        <Button id="Ending" title="Return" />
      </ReturnContainer>
    </SuccessContainer>
  );
};

export default Success;
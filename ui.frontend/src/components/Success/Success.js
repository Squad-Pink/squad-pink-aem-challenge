import React, { useState, useEffect } from "react";
import Text from "../Micro/MicroText/MicroText";
import {
  SuccessContainer,
  CertificatesContainer,
  ReturnContainer,
  Container,
} from "./Success.styled";
import Button from "../Micro/Button/Button";
import { MapTo } from "@adobe/aem-react-editable-components";
import {useHistory} from "react-router-dom"

const Success = ({
  submitBtnTitle,
  submitBtnColor,
  submitColorText,
  submitFirstIcon={},
  submitSecondIcon={},
  textColor,
}) => {
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
  const regex = /[,"]/g ;
  const history = useHistory();

  useEffect(() => {
    const fullName = `Full Name: ${localStorage.getItem("Full Name *")}`;
    const nickname = `Nickname: ${localStorage.getItem("Nickname")}`;
    const email = `Email: ${localStorage.getItem("Email *")}`;
    const phone = `Phone: ${localStorage.getItem("Phone")}`;
    const birthday = `Birthday: ${localStorage.getItem("Birthday *")}`;
    const linkedIn = `LinkedIn: ${localStorage.getItem("LinkedIn")}`;
    const gitHub = `GitHub: ${localStorage.getItem("GitHub *")}`;
    const certificates = `${JSON.parse(localStorage.getItem("certificates"))}`;
    const teamName = `TeamName: ${localStorage.getItem("Team Name *")}`;
    const institution = `Institution: ${localStorage.getItem("Institution *")}`;
    const graduation = `Graduation: ${localStorage.getItem("Graduation *")}`;

    if (localStorage.getItem("Full Name *")) {
      setFullName(fullName);
    }
    if (localStorage.getItem("Nickname")) {
      setNickname(nickname);
    }
    if (localStorage.getItem("Email *")) {
      setEmail(email);
    }
    if (localStorage.getItem("Phone")) {
      setPhone(phone);
    }
    if (localStorage.getItem("Birthday *")) {
      setBirthday(birthday);
    }
    if (localStorage.getItem("GitHub *")) {
      setGitHub(gitHub);
    }
    if (localStorage.getItem("LinkedIn")) {
      setLinkedIn(linkedIn);
    }
    if (localStorage.getItem("certificates")) {
      setCertificates(certificates);
    }
    if (localStorage.getItem("Team Name *")) {
      setTeamName(teamName);
    }
    if (localStorage.getItem("Institution *")) {
      setInstitution(institution);
    }
    if (localStorage.getItem("Graduation *")) {
      setGraduation(graduation);
    }
  }, []);

  const onSubmit = () => {
    localStorage.clear();
    history.push("/content/reactapp/us/en/home");
  }

  return (
    <Container>
    <div class='formContainer'>
      <SuccessContainer>
        <Text
          textColor={textColor}
          TextP='Your data has been sent successfully!'
        />
        <Text textColor={textColor} TextP={fullName} />
        <Text textColor={textColor} TextP={nickname} />
        <Text textColor={textColor} TextP={email} />
        <Text textColor={textColor} TextP={phone} />
        <Text textColor={textColor} TextP={birthday} />
        <Text textColor={textColor} TextP={linkedIn} />
        <Text textColor={textColor} TextP={gitHub} />
        <CertificatesContainer>
          <Text textColor={textColor} TextP={"Certificates: "} />
          <Text
            textColor={textColor}
            TextP={certificates.replace(regex, '\n' )}
          />
        </CertificatesContainer>
        <Text textColor={textColor} TextP={teamName} />
        <Text textColor={textColor} TextP={institution} />
        <Text textColor={textColor} TextP={graduation} />
        <ReturnContainer>
          <Button
            type='submit'
            textButton={submitBtnTitle}
            colorButton={submitBtnColor}
            colorTextButton={submitColorText}
            src={submitFirstIcon.src}
            src1={submitSecondIcon.src}
            id='Submit'
            onClick={onSubmit}
          />
        </ReturnContainer>
      </SuccessContainer>
    </div>
    </Container>
  );
};

export default MapTo("reactapp/components/success")(Success);

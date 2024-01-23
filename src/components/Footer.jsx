import React from "react";
import styled from "styled-components";
import footerLogo from "../assets/images/footer/footerTbcLogo.webp";
import tbcFbIcon from "../assets/images/footer/tbcFb.webp";
import tbcYtIcon from "../assets/images/footer/tbcYt.webp";

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContent>
        <div className="wrapColum">
          <FooterLogo>
            <img src={footerLogo} alt="Logo" />
          </FooterLogo>
          <FooterBottom>
            <p>&copy; 2023 ყველა უფლება დაცულია</p>
            <button className="conditionsBtn">წესები და პირობები</button>
          </FooterBottom>
        </div>
        <FooterSocialMedia>
          <MailWrapper>
            <a href="mailto:your@email.com">მოგვწერეთ</a>
          </MailWrapper>
          <SocialWrapper>
            <a
              href="https://www.facebook.com/tbcbank/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={tbcFbIcon} alt="Facebook" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCGk9R2LV2ywOL80r8Xc6xtQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={tbcYtIcon} alt="Youtube" />
            </a>
          </SocialWrapper>
        </FooterSocialMedia>
      </FooterContent>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  @media (max-width: 769px) {
    display: none;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(26, 30, 31);
  color: rgb(244, 244, 244);
  padding: 40px 0;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1000px;
  width: 100%;
  padding: 0px 20px 0px 20px;
  .wrapColum {
    display: flex;
    flex-direction: column;
  }
`;

const FooterLogo = styled.div``;

const FooterSocialMedia = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
`;
const MailWrapper = styled.div`
  order: 3;
  a {
    padding: 10px 40px;
    background-color: rgb(0, 174, 243);
    border-radius: 8px;
    font-size: 20px;
    font-family: 300;
    color: white;
    transition: background-color 0.3s, color 0.3s;
    &:hover {
      color: black;
      background-color: rgb(148, 148, 148);
    }
  }
`;

const SocialWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  a:nth-child(2) {
    margin-left: 20px;
  }
`;
const FooterBottom = styled.div`
  .conditionsBtn {
    font-size: 16px;
    color: white;
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition: 0.9s ease;
    &:hover {
      color: gray;
    }
  }
  p {
    margin: 30px 0px;
  }
`;

export default Footer;

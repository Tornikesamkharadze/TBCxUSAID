import React from "react";
import styled from "styled-components";
import footerLogo from "../assets/images/footer/footerTbcLogo.webp";
import tbcFbIcon from "../assets/images/footer/tbcFb.webp";
import tbcYtIcon from "../assets/images/footer/tbcYt.webp";

const MobileFooter = () => {
  return (
    <StyledFooter>
      <FooterContent>
        <div className="wrapColum">
          <FooterLogo>
            <img src={footerLogo} alt="Logo" />
          </FooterLogo>
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
          <FooterBottom>
            <button className="conditionsBtn">წესები და პირობები</button>
            <p>&copy; 2023 ყველა უფლება დაცულია</p>
          </FooterBottom>
        </div>
      </FooterContent>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(26, 30, 31);
  color: rgb(244, 244, 244);
  padding: 40px 0;
`;

const FooterContent = styled.div`
  max-width: 1000px;
  width: 100%;
  padding: 0px 20px 0px 20px;
`;

const FooterLogo = styled.div``;

const FooterSocialMedia = styled.div`
  display: flex;
  max-width: 700px;
  width: 100%;

  justify-content: space-between;
  align-items: flex-start;
  padding: 30px 0px;
`;

const MailWrapper = styled.div`
  a {
    display: inline-block;
    padding: 10px 40px;
    background-color: rgb(0, 174, 243);
    border-radius: 8px;
    font-size: 20px;
    font-family: 300;
    color: white;
  }
`;

const SocialWrapper = styled.div`
  a {
    margin-left: 30px;
  }
`;

const FooterBottom = styled.div`
  .conditionsBtn {
    font-size: 16px;
    color: white;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
  p {
    margin: 30px 0px;
  }
`;

export default MobileFooter;

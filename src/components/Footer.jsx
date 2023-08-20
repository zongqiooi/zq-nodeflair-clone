import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <p className="icons">
        <div className="linkedin">
          <a href="https://www.linkedin.com/in/zongqiooi/">
            <AiFillLinkedin style={{ color: "black" }} />
          </a>
        </div>
        <div className="github">
          <a href="https://github.com/zongqiooi/zq-nodeflair-clone">
            <AiFillGithub style={{ color: "black" }} />
          </a>
        </div>
      </p>
      <p>Made with ❤️ by Zong Qi.</p>
    </div>
  );
};

export default Footer;

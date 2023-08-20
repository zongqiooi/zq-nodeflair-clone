import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <span className="icons">
        <span className="github">
          <a href="https://github.com/zongqiooi/zq-nodeflair-clone">
            <AiFillGithub style={{ color: "black" }} />
          </a>
        </span>
      </span>
      <p>Made with ❤️ by Zong Qi </p>
    </div>
  );
};

export default Footer;

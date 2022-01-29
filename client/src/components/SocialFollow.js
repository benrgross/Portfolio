import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FcDocument } from "react-icons/fc";
function SocialFallow() {
  return (
    <div className="social__cont">
      <a
        href="https://linkedin.com/in/ben-gross-b5a91192/"
        className="social__icon social__linkedIn"
      >
        <FontAwesomeIcon
          className="fa_linkedIn"
          icon={faLinkedin}
          size="2x"
          alt="linked in icon"
        />
      </a>
      <a
        href="https://github.com/benrgross"
        className="social__icon social__gitHub"
        alt="github icon"
      >
        <FontAwesomeIcon className="fa_gitHub" icon={faGithub} size="2x" />
      </a>
      <a
        href="https://drive.google.com/uc?export=download&id=1HaLbVUPqMCy0fivvQw_5DL-uZEK_afev"
        className="social__icon social__resume"
        alt="file icon / resume"
      >
        <FcDocument size="2.4em" className="fc_resume" />
      </a>
    </div>
  );
}

export default SocialFallow;

import React, { useEffect } from "react";
import Tag from "./ui-components/Tag";
//import ContentWrapper from "./ContentWrapper/ContentWrapper";

const About = (siteSettings) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { settings } = siteSettings;

  const getContent = () => {
    return (
      <>
        <Tag content="<img>" indent="4%" />
        <img className="profile-img" src="assets/craigbauer.jpg" width="60" />
        <Tag content="/>" indent="4%" />
        <Tag content="<h1>" indent="4%" />
        <h1>{settings.bio_intro}</h1>
        <h1>{settings.bio_tagline}</h1>
        <Tag content="</h1>" indent="4%" />
        <Tag content="<img>" indent="4%" />
        <img src="assets/technologies.png" width="400" />
        <Tag content="</img>" indent="4%" />
        <div className="bio">
          <Tag content="<p>" indent="4%" />
          <p>{settings.bio}</p>
          <Tag content="</p>" indent="4%" />
        </div>
      </>
    );
  };

  return (
    <div id="about-wrap" className="inner">
      {getContent()}
    </div>
  );
};

export default About;

import React, { useEffect } from "react";
import Tag from "./ui-components/Tag";
//import ReactContactForm from 'react-mail-form';

const About = (siteSettings) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { settings } = siteSettings;

  console.log(settings);

  return (
    <div id="about-wrap" className="inner">
      {/* <div className="bio-pic"></div> */}
      <Tag content="<!doctype>" indent="0" />
      <Tag content="<html>" indent="0" />
      <Tag content="<body>" indent="2%" />
      <Tag content="<h1>" indent="4%" />
      <h1>{settings.bio_intro}</h1>
      {/* <Tag content={"</h1>"} indent={10} /> */}
      <h1>{settings.bio_tagline}</h1>
      <Tag content="</h1>" indent="4%" />
      <Tag content="<p>" indent="4%" />
      <p>Specializing in React, Redux and WordPress</p>
      <Tag content="</p>" indent="4%" />
      {/* <img
        src="http://craigbauer.nyc/wp-content/uploads/2020/06/mern.png"
        className="mern-stack"
        alt="mern stack"
        width="100%"
      /> */}
      <div className="bio">
        <Tag content="<p>" indent="4%" />
        <p>{settings.bio}</p>
        <Tag content="</p>" indent="4%" />
        <Tag content="</body>" indent="2%" />
        <Tag content="</html>" indent="0" />
      </div>

      {/*<ReactContactForm to="craigbauer23@gmail.com" />*/}
      {/*  <Weather weather={this.props.weather} /> */}
    </div>
  );
};

export default About;

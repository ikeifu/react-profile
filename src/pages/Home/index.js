import React, { useEffect } from "react";
import MainHeading from "../../components/MainHeading";

function Home() {
  useEffect(() => {
    document.title = "Keith Fung";
  }, []);

  return (
    <>
      <MainHeading>About Me</MainHeading>
      <div className="row">
        <div className="col">
          <img
            className="float-left mr-4"
            src="https://avatars0.githubusercontent.com/u/68919302?s=400&u=e053f709aa59e44f18b6a787f8899a32b14a3140&v=4"
            alt="Keith"
            width="150px"
            height="150px"
          />
          <p>
            Hey there welcome to my portfolio. My name's Keith, and I grew up in
            New York. I am a chinese born american that has basically known only
            city life throughout my short years on this earth. I'm currently in
            a coding bootcamp hosted by columbia, to hopefully get into the
            field.
            <br></br>
            <br></br>I like to try to be a multifacted person, so I dabble in a
            lot of different hobbies and interests. I take pictures, dance and
            play games. Hopefully one day I get to develop my own game, as that
            has been a big part of my life.
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;

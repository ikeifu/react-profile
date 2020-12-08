import React from "react";
function AboutMe() {
  const cardStyle = {
    width: "50rem",
  };
  const pictureStyle = {
    width: "17rem",
  };
  return (
    <div className="card mb-3 bg-dark text-white" style={cardStyle}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src="https://avatars0.githubusercontent.com/u/68919302?s=400&u=e053f709aa59e44f18b6a787f8899a32b14a3140&v=4"
            style={pictureStyle}
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Hey there welcome to my portfolio. My name's Keith, and I grew up
              in New York. I am a chinese born american that has basically known
              only city life throughout my short years on this earth. I'm
              currently in a coding bootcamp hosted by columbia, to hopefully
              get into the field.
              <br></br>
              <br></br>I like to try to be a multifacted person, so I dabble in
              a lot of different hobbies and interests. I take pictures, dance
              and play games. Hopefully one day I get to develop my own game, as
              that has been a big part of my life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutMe;

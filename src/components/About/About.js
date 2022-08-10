import React, { useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

import "./Scss/About.scss";
import Img1 from "./images/1.png";
import Img2 from "./images/2.png";
import Img3 from "./images/3.png";
import Img4 from "./images/4.png";
import Img5 from "./images/5.png";
import Img6 from "./images/6.png";
import Partner from "./images/p.png";
import Video from "./video/Munis2.mp4";
import videojs from "video.js";
import "video.js/dist/video-js.css";
// import { useTranslation } from "react-i18next";

const About = ({ english, uzbek, russian, gallery }) => {
  // const { t } = useTranslation();
  const [iframes, setIframes] = useState(null);
  const [playIframes, setPlayIframes] = useState(false);
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  const options = {
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: Video,
        type: "video/mp4",
      },
    ],
  };

  const onReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      player.log("player is waiting");
    });

    player.on("dispose", () => {
      player.log("player will dispose");
    });
  };

  const videoRef = React.useRef(null);
  const playerRef = React.useRef(null);

  const settings = {
    className: "center",
    // dots: true,
    infinite: true,
    speed: 2000,
    // centerMode: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    // centerPadding: padding,
    autoplaySpeed: 3000,
    // cssEase: "linear"
  };
  React.useEffect(() => {
    // Make sure Video.js player is only initialized once
    if (!playerRef.current) {
      const videoElement = videoRef.current;

      if (!videoElement) return;

      const player = (playerRef.current = videojs(videoElement, options, () => {
        player.log("player is ready");
        onReady && onReady(player);
      }));

      // You can update player in the `else` block here, for example:
    } else {
      // const player = playerRef.current
      // player.autoplay(options.autoplay);
      // player.src(options.sources);
    }
  }, [options, videoRef]);

  // Dispose the Video.js player when the functional component unmounts
  React.useEffect(() => {
    const player = playerRef.current;

    return () => {
      if (player) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);

  // dataImages

  const dataImages = [
    { id: 1, image: Img1 },
    { id: 2, image: Img2 },
    { id: 3, image: Img3 },
    { id: 4, image: Img4 },
    { id: 5, image: Img5 },
    { id: 6, image: Img6 },
  ];

  return (
    <>
      <div className={`About`}>
        <div className={`wrapper1 ${gallery && "wrapper"}`}>
          <div className="AboutCont">
            {" "}
            <div className="leftAboutContainer">
              {" "}
              <div className=" row text">
                <h1 className={`name`}>About us</h1>
                {english && (
                  <p>
                    "Aliquam erat volutpat. Nulla pretium nec urna et convallis.
                    Ut varius mi lacus, nec molestie libero ultricies nec.
                    Aenean lacinia dui elit, ut gravida quam.""Aliquam erat
                    volutpa
                  </p>
                )}
                {russian && (
                  <p>
                    "Aliquam erat volutpat. Nulla pretium nec urna et convallis.
                    Ut varius mi lacus, nec molestie libero ultricies nec.
                    Aenean lacinia dui elit, ut gravida quam.""Aliquam erat
                    volutpa
                  </p>
                )}
                {uzbek && (
                  <p>
                    "Aliquam erat volutpat. Nulla pretium nec urna et convallis.
                    Ut varius mi lacus, nec molestie libero ultricies nec.
                    Aenean lacinia dui elit, ut gravida quam.""Aliquam erat
                    volutpa
                  </p>
                )}
              </div>
              <div className={`col-md-12 explore ${gallery && "d-none"}`}>
                <Link to="/aboutus" className="nav-link">
                  EXPLORE
                </Link>
              </div>
              <div className={`col-12 about-video ${!gallery && "d-none"}`}>
                <div className="video">
                  <div data-vjs-player>
                    <video
                      ref={videoRef}
                      className="video-js vjs-big-play-centered"
                    />
                  </div>
                </div>
              </div>
              <div className={`col-md-12 gallery ${!gallery && "d-none"}`}>
                <h1 className={`name col-md-12`}>Gallery</h1>
                {dataImages.map((data, index) =>
                  data.id % 2 ? (
                    <div className="col-4" key={index}>
                      <img src={data.image} alt="..." />
                    </div>
                  ) : (
                    <div className="col-8" key={index}>
                      <img src={data.image} alt="..." />
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="chint_video">
              <div
                className="__iframe"
                onClick={() => {
                  setIframes(1);
                }}
              >
                <iframe
                  style={{
                    pointerEvents: "none",
                    borderRadius: "1.171875vw",
                  }}
                  width="252"
                  height="230"
                  src="https://www.youtube.com/embed/IABfPAr6K1w"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              {iframes === 1 ? (
                <div className="__iframe_modal">
                  <div className="__iframe_body">
                    <span
                      className="__iframe_close"
                      onClick={() => {
                        setIframes(0);
                        setPlayIframes(false);
                      }}
                    >
                      &times;
                    </span>
                    <div
                      onClick={() => {
                        setPlayIframes(true);
                      }}
                    >
                      {playIframes === false ? (
                        <svg
                          style={{ cursor: "pointer" }}
                          xmlns="http://www.w3.org/2000/svg"
                          width={"24"}
                          height={"24"}
                          viewBox="0 0 24 24"
                          fill="#fff"
                        >
                          <path d="m12.954 11.616 2.957-2.957L6.36 3.291c-.633-.342-1.226-.39-1.746-.016l8.34 8.341zm3.461 3.462 3.074-1.729c.6-.336.929-.812.929-1.34 0-.527-.329-1.004-.928-1.34l-2.783-1.563-3.133 3.132 2.841 2.84zM4.1 4.002c-.064.197-.1.417-.1.658v14.705c0 .381.084.709.236.97l8.097-8.098L4.1 4.002zm8.854 8.855L4.902 20.91c.154.059.32.09.495.09.312 0 .637-.092.968-.276l9.255-5.197-2.666-2.67z" />
                        </svg>
                      ) : (
                        ""
                      )}
                    </div>

                    <iframe
                      src={`https://www.youtube.com/embed/IABfPAr6K1w
                    `}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={
                        playIframes
                          ? {
                              width: "90vw",
                              height: "90vh",
                              pointerEvents: "auto",
                            }
                          : {
                              width: "90vw",
                              height: "90vh",
                              pointerEvents: "none",
                            }
                      }
                    ></iframe>
                  </div>
                  <div
                    className="close__iframe_"
                    onClick={() => {
                      setIframes(0);
                      setPlayIframes(false);
                    }}
                  ></div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>

          <h1 className="title">Our Partners</h1>

          {/* <div className="col-md-12 partners">
            <div className="col-3 list">
              <img src={Partner} alt="..." />
            </div>
            <div className="col-3 list">
              <img src={Partner} alt="..." />
            </div>
            <div className="col-3 list">
              <img src={Partner} alt="..." />
            </div>
            <div className="col-3 list">
              <img src={Partner} alt="..." />
            </div>
          </div> */}
          <div className="col-md-12 partners">
            <Slider
              {...settings}
             
              // className="slider"
            >
              <div className="col-3 list">
                <img src={Partner} alt="..." />
              </div>
              <div className="col-3 list">
                <img src={Partner} alt="..." />
              </div>
              <div className="col-3 list">
                <img src={Partner} alt="..." />
              </div><div className="col-3 list">
                <img src={Partner} alt="..." />
              </div><div className="col-3 list">
                <img src={Partner} alt="..." />
              </div>
             
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

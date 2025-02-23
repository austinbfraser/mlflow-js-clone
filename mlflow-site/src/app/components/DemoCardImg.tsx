// import Image from 'next/image';

const DemoCardImg = ({
  header,
  blurb,
  video,
}: {
  key: string;
  blurb: string | React.JSX.Element;
  header: string;
  video: string;
}) => {
  if (video !== undefined) {
    return (
      <div className="demoCard">
        <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
          <iframe
            className="vimeoPlayer"
            src={video}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Vimeo Video Player"
          />
        </div>
        <div className="demoCardText">
          <div className="demoCardHeader">{header}</div>
          <div className="demoCardInfo">{blurb}</div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="demoCard" id="MLflow-ui-screenshot">
        <img
          src="/assets/mlflow-ui-screenshot-new.png"
          width="1089"
          height="845"
          alt="MLflow UI"
        />
        <div className="demoCardText">
          <div className="demoCardHeader">{header}</div>
          <div className="demoCardInfo">{blurb}</div>
        </div>
      </div>
    );
  }
};


export default DemoCardImg;

'use client';

// import Image from 'next/image';

const NavBarImg = () => {
  return (
    <div className="navBar">
      <div className="navBarMlflow">
        <img
          src="/assets/MLflow-js-logo.png"
          width="965"
          height="289"
          alt="MLflow JS Logo"
          className="mlflow-logo"
        />
      </div>
      <div className="navBarLinks">
        <button
          onClick={() => {
            const element = document.getElementById('headline');
            element?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="navBarLinksHome"
        >
          Home
        </button>
        <button
          onClick={() => {
            const element = document.getElementById('features');
            element?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="navBarLinksFeatures"
        >
          Features
        </button>
        <button
          onClick={() => {
            const element = document.getElementById('demo');
            element?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="navBarLinksDemo"
        >
          Demo
        </button>
        <button
          onClick={() => {
            const element = document.getElementById('team');
            element?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="navBarLinksTeam"
        >
          Team
        </button>
        <a
          href="https://github.com/oslabs-beta/mlflow-js"
          className="navBarLinksGithub"
        >
          <img
            src="/assets/GithubLogo.png"
            width="24"
            height="24"
            alt="GitHub Logo"
            className="navbarGithub"
          />
        </a>
      </div>
    </div>
  );
};

export default NavBarImg;

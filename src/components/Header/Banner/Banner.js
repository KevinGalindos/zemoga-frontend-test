import Wiki from "../../../assets/images/wikipedia.svg";

import Up from "../../../assets/images/thumbs-up.svg";
import Down from "../../../assets/images/thumbs-down.svg";

export const Banner = () => {
  return (
    <div className="Banner">
      <div className="container">
        <div className="Banner box">
          <div className="banner box header">
            <p>What’s your opinion on</p>
            <h1>Pope Francis?</h1>
          </div>
          <div className="banner box mid-text">
            <p>
              He’s talking tough on clergy sexual abuse, or is he just another
              pervert protector? (thumbs down) or a true pedophile punishing
              pontiff? (thumbs up)
            </p>
            <a
              href="https://es.wikipedia.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img src={Wiki} alt="Go to Wikipedia" />
              More information
            </a>
          </div>

          <div className="banner box footer">
            <h3>What’s Your Veredict?</h3>
          </div>
        </div>
        <div className="banner thumbs">
          <div className="banner thumbs up">
            <img src={Up} alt="ThumbsUp like" />
          </div>
          <div className="banner thumbs down">
            <img src={Down} alt="Down dislike" />
          </div>
        </div>
      </div>
    </div>
  );
};

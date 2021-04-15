import Up from "../../../assets/images/thumbs-up.svg";
import Down from "../../../assets/images/thumbs-down.svg";

import { DummyData } from "../../../assets/common/utils/data/DummyData";

export const Card = () => {
  return (
    <div className="Card">
      <div className="container">
        {DummyData.data.map((item) => (
          <div key={item.id} className="Card box">
            <div className="picture">
              <img src={item.picture} alt={item.name} />
            </div>
            <div className="background">
              <div className="content-rotate">
                <div className="up">
                  <div className="up_left">
                    <div className="indicator">
                      <img src={Down} alt="Indicator" />
                    </div>
                  </div>
                  <div className="up_mid">
                    <h1>{item.name}</h1>
                    <p>{item.description}</p>
                  </div>
                  <div className="up_right">
                    <div className="last-cat">
                      <p>
                        {item.lastUpdated}
                        {item.category}
                      </p>
                    </div>
                    <div className="votation">
                      <button className="btn-like">
                        <img src={Up} alt="Like" />
                      </button>
                      <button className="btn-unlike">
                        <img src={Down} alt="Dislike" />
                      </button>
                      <button className ="btn-vote">Vote Now</button>
                    </div>
                  </div>
                </div>
                <div className="down">
                  <div className="down_left">
                    <img src={Up} alt="Like" />
                    <h3>{item.votes.positive}</h3>
                  </div>

                  <div className="down_right">
                    <h3>{item.votes.negative}</h3>
                    <img src={Down} alt="Dislike" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

import React, { useState } from "react";
import audioX from "./NzEzMzE2MzcxMzQ2Mg_hePGru5u8uk.mp3";

import Card from "react-bootstrap/Card";
import "./home.css";
const HomePage = () => {
  const [isAudioPlayed, setIsAudioPlayed] = useState(false);
  return (
    <div className="change">
      <Card>
        <Card.Img
          onClick={() => setIsAudioPlayed(true)}
          style={{ borderRadius: "10px" }}
          variant="top"
          src="https://www.barnesandnoble.com/blog/wp-content/uploads/2019/12/swvillainranking.png"
          width={"500px"}
          height={"300px"}
          draggable={false}
        />
        <Card.Body>
          <Card.Text>
            <h3 style={{ color: "#3B3F5C" }}>
              <strong>
                {" "}
                Welcome to Star Wars
                <br />
                Dashbord
              </strong>
            </h3>
            Star Wars is an American epic space opera multimedia franchise
            created by George Lucas, which began
            <br /> with the eponymous 1977 film and quickly became a worldwide
            pop culture phenomenon.
          </Card.Text>
        </Card.Body>
      </Card>
      {isAudioPlayed && (
        <audio preload={true} autoPlay>
          <source src={audioX} type="audio/mp3" />
        </audio>
      )}
    </div>
  );
};

export default HomePage;

import React, { useState } from "react";
import "./Tweetbox.css";
import db from "./firebase";
import { Avatar, Button } from "@material-ui/core";

const Tweetbox = () => {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");
  
    const sendTweet = (e) => {
      e.preventDefault();
  
      db.collection("posts").add({
        displayName: "Hero Omolola",
        username: "hero",
        verified: true,
        text: tweetMessage,
        image: tweetImage,
        avatar:
          "https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png",
      });
  
      setTweetMessage("");
      setTweetImage("");
    };
  
    return (
      <div className="tweetBox">
        <form>
          <div className="tweetBox__input">
            <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />
            <input
              onChange={(e) => setTweetMessage(e.target.value)}
              value={tweetMessage}
              placeholder="What's happening?"
              type="text"
            />
          </div>
          <input
            value={tweetImage}
            onChange={(e) => setTweetImage(e.target.value)}
            className="tweetBox__imageInput"
            placeholder="Optional: Enter image URL"
            type="text"
          />
  
          <Button
            onClick={sendTweet}
            type="submit"
            className="tweetBox__tweetButton"
          >
            Tweet
          </Button>
        </form>
      </div>
    );
}

export default Tweetbox

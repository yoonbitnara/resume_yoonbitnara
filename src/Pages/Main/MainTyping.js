import React, { Component } from "react";
import Typing from "react-typing-animation";
import ReactHtmlParser from "react-html-parser";

class MainTyping extends Component {
  render() {
    let introTypeText = "안녕하세요<br/>윤빛나라입니다.";
    return (
      <Typing speed={120} loop={true} className="main-intro-text">
        {ReactHtmlParser(introTypeText)}
        <Typing.Reset delay={4000} />
      </Typing>
    );
  }
}

export default React.memo(MainTyping);

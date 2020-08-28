import React, { Component } from "react";
import VIDEO from "./발표.mp4";

export default class Etc extends Component {
  render() {
    return (
      <article className="etc">
        <div className="etc-text">
          Wecode에서 후배 기수분들에게 발표한 영상입니다.
          <br />
          예쁘게 봐주세요😜😝
        </div>
        <video controls width="100%">
          <source src={VIDEO} type="video/mp4" />
          현재 비디오가 보이지 않습니다.
        </video>
        <div className="etc-final">
          지금까지 보셨던 페이지는 <span>React</span>를 이용하여 만들었습니다.
        </div>
      </article>
    );
  }
}

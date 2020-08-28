import React, { Component } from "react";

export default class Etc extends Component {
  render() {
    return (
      <article className="etc">
        <div className="etc-text">
          Wecode에서 후배 기수분들에게 발표한 영상입니다.
          <br />
          예쁘게 봐주세요. 😜😝
        </div>
        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/Kcyd1jLp9fU"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          title="presentation video"
        ></iframe>
        <div className="etc-final">
          지금까지 보셨던 페이지는 <span>React</span>를 이용하여 만들었습니다.
        </div>
      </article>
    );
  }
}

import React, { Component } from "react";
import RESUME from "./YOON BITNARA.png";

export default class Introduce extends Component {
  render() {
    return (
      <article className="introduce">
        <div className="introduce-text">
          간단한 제 이력서 입니다.
          <br />
          취미는 책읽기 그리고 영화,해외축구 시청하는 것을 좋아합니다.
          <br />
          특기는 상대방의 고민을 들어주는 것을 잘합니다.
          <br />
          이력서 안에 있는 프로젝트 링크는 프로젝트 탭에서 확인해주세요.😊
        </div>
        <img className="introduce-img" alt="이력서" src={RESUME} />
      </article>
    );
  }
}

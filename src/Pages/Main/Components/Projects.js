import React, { Component } from "react";
import projectData from "./projectData";

export default class Projects extends Component {
  render() {
    return (
      <article className="projects">
        <div className="projects-text">
          Wecode Bootcamp에서 동기들과 같이 한 프로젝트 입니다. <br />
          1차 프로젝트는 LUSH KOREA 클론 프로젝트 였고,
          <br />
          2차 프로젝트는 IKEA KOREA 클론 프로젝트 였습니다.
          <br />
          자세한 내용은 아래 배너를 클릭해주세요😊
        </div>
        {projectData.map((card) => {
          return (
            <section className="projects-card" key={card.pjt_img_title}>
              <img
                className="projects-card-img"
                alt={card.pjt_img_title}
                src={card.pjt_img}
              />
              <ul className="projects-card-list">
                <li>
                  <a
                    href={card.pjt_git_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {card.pjt_git_icon}
                    {card.pjt_git_text}
                  </a>
                </li>
                <li>
                  <a
                    href={card.pjt_velog_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {card.pjt_velog_icon}
                    {card.pjt_velog_text}
                  </a>
                </li>
                <li>
                  <a
                    href={card.pjt_youtube_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {card.pjt_youtube_icon}
                    {card.pjt_youtube_text}
                  </a>
                </li>
              </ul>
            </section>
          );
        })}
      </article>
    );
  }
}

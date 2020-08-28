import React from "react";
import {
  faGithub,
  faReadme,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const projectData = [
  {
    pjt_img_title: "러쉬 로고",
    pjt_img: "https://www.waterfront.co.za/wp-content/uploads/2018/05/lush.jpg",
    pjt_git_link:
      "https://github.com/wecode-bootcamp-korea/9-rush-hour-backend",
    pjt_git_icon: (
      <FontAwesomeIcon icon={faGithub} size="2x" className="icon" />
    ),
    pjt_git_text: "GitHub",
    pjt_velog_link:
      "https://velog.io/@ybnr_92/1%EC%B0%A8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%9B%84%EA%B8%B0",
    pjt_velog_icon: (
      <FontAwesomeIcon icon={faReadme} size="2x" className="icon" />
    ),
    pjt_velog_text: "프로젝트 후기",
    pjt_youtube_link: "https://www.youtube.com/watch?v=qA_mm-B3PJU",
    pjt_youtube_icon: (
      <FontAwesomeIcon icon={faYoutube} size="2x" className="icon" />
    ),
    pjt_youtube_text: "데모 영상",
  },
  {
    pjt_img_title: "이케아 로고",
    pjt_img:
      "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbcUz9J%2FbtqELRj7PBP%2F0jwfTog7eYg0cC1toK5TT1%2Fimg.jpg",
    pjt_git_link: "https://github.com/wecode-bootcamp-korea/9-ekek-backend",
    pjt_git_icon: (
      <FontAwesomeIcon icon={faGithub} size="2x" className="icon" />
    ),
    pjt_git_text: "GitHub",
    pjt_velog_link:
      "https://velog.io/@ybnr_92/2%EC%B0%A8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%9B%84%EA%B8%B0",
    pjt_velog_icon: (
      <FontAwesomeIcon icon={faReadme} size="2x" className="icon" />
    ),
    pjt_velog_text: "프로젝트 후기",
    pjt_youtube_link: "https://www.youtube.com/watch?v=UKBLibbS8Jc",
    pjt_youtube_icon: (
      <FontAwesomeIcon icon={faYoutube} size="2x" className="icon" />
    ),
    pjt_youtube_text: "데모 영상",
  },
];
export default projectData;

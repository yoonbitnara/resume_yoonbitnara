import React, { Component } from "react";
import MainTyping from "./MainTyping";
import Introduce from "./Components/Introduce";
import Projects from "./Components/Projects";
import Etc from "./Components/Etc";
import "./Main.scss";

//activeTab기능구현을 위한 객체 생성
const activeTab = {
  myIntroduce: <Introduce />,
  myProjects: <Projects />,
  myEtc: <Etc />,
};

export default class Main extends Component {
  state = {
    contentsMenuActive: "",
    menuIsActive: "is-active",
  };

  handleClickMenu = (tabName) => {
    this.setState({ contentsMenuActive: tabName });
  };

  render() {
    const { contentsMenuActive, menuIsActive } = this.state;
    return (
      <main className="Main">
        <section className="main-intro">
          <MainTyping />
        </section>
        <section className="main-contents">
          <header className="main-contents-header">
            <ul className="main-contents-header-menu">
              <li
                className={
                  contentsMenuActive === "myIntroduce" ? menuIsActive : ""
                }
                onClick={() => this.handleClickMenu("myIntroduce")}
              >
                Introduce
              </li>
              <li
                className={
                  contentsMenuActive === "myProjects" ? menuIsActive : ""
                }
                onClick={() => this.handleClickMenu("myProjects")}
              >
                Projects
              </li>
              <li
                className={contentsMenuActive === "myEtc" ? menuIsActive : ""}
                onClick={() => this.handleClickMenu("myEtc")}
              >
                Etc
              </li>
            </ul>
          </header>
          <main className="main-contents-article">
            {activeTab[contentsMenuActive]}
          </main>
        </section>
      </main>
    );
  }
}

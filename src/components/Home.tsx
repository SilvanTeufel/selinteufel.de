import * as React from "react";
import { animateScroll as scroller, Element, Link } from "react-scroll";

import Kontaktformular from "./Kontakt";
import Philosophie from "./Philosophie";
import Haare from "./Haare";
import Nageldesign from "./Nageldesign";
import Kosmetik from "./Kosmetik";
import Permanentmakeup from "./Permanentmakeup";
import Team from "./Team";
import Verlängerung from "./Verlängerung";

import "./css/box.css";
import "./css/Cursor.css";

interface MyComponentStates {}

interface MyComponentProps {
  Key?: any;
}

class Home extends React.Component<MyComponentProps, MyComponentStates> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  createScrollButton = (
    scrollString: string,
    buttonString: string,
    clickevent: any
  ) => {
    const button = [];

    button.push(
      <Link
        activeClass="active"
        to={scrollString}
        spy={true}
        smooth={true}
        offset={-120}
        duration={500}
        delay={200}
      >
        <button
          type="button"
          className="btn btn-outline-light"
          style={{ minWidth: 150 }}
          onClick={clickevent}
        >
          {buttonString}
        </button>
      </Link>
    );
    return button;
  };

  donothing = () => {
    return 0;
  };

  checkKey = () => {};

  createHome = () => {
    const home = [];
    console.log(this.props.Key);
    home.push(
      <div className="row">
        <div className="col">
          <Element name="Philosophie" className="element" id="E1">
            <div className="row boxkit-first border border-dark rounded">
              <div className="col">
                <div className="row text-left align-items-center">
                  <div className="col-md-1 col-3">
                    <i className="fas fa-yin-yang fa-3x margintop"></i>
                  </div>
                  <div className="col-md-11 col-9">
                    <h2 className="main-point">{"Philosophie"}</h2>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-12">
                    <Philosophie />
                  </div>
                </div>
              </div>
            </div>
          </Element>

          <Element name="Haare" className="element" id="E1">
            <div className="row boxkit-mid border border-dark rounded">
              <div className="col">
                <div className="row text-left align-items-center">
                  <div className="col-md-1 col-3">
                    <i className="fas fa-cut fa-3x margintop"></i>
                  </div>
                  <div className="col-md-11 col-9">
                    <h2 className="main-point">{"Haare"}</h2>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-12">
                    <Haare />
                  </div>
                </div>
              </div>
            </div>
          </Element>

          <Element name="Extensions" className="element" id="E1">
            <div className="row boxkit-mid border border-dark rounded">
              <div className="col">
                <div className="row text-left align-items-center">
                  <div className="col-md-1 col-3">
                    <i className="fas fa-ruler-combined fa-3x margintop"></i>
                  </div>
                  <div className="col-md-11 col-9">
                    <h2 className="main-point">{"Extensions"}</h2>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-12">
                    <Verlängerung />
                  </div>
                </div>
              </div>
            </div>
          </Element>

          <Element name="Nageldesign" className="element" id="E1">
            <div className="row boxkit-mid border border-dark rounded">
              <div className="col">
                <div className="row text-left align-items-center">
                  <div className="col-md-1 col-3">
                    <i className="fas fa-paint-brush fa-3x margintop"></i>
                  </div>
                  <div className="col-md-11 col-9">
                    <h2 className="main-point">{"Nageldesign"}</h2>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-12">
                    <Nageldesign />
                  </div>
                </div>
              </div>
            </div>
          </Element>

          <Element name="Kosmetik" className="element" id="E1">
            <div className="row boxkit-mid border border-dark rounded">
              <div className="col">
                <div className="row text-left align-items-center">
                  <div className="col-md-1 col-3">
                    <i className="fas fa-sun fa-3x margintop"></i>
                  </div>
                  <div className="col-md-11 col-9">
                    <h2 className="main-point">{"Kosmetik"}</h2>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-12">
                    <Kosmetik />
                  </div>
                </div>
              </div>
            </div>
          </Element>

          <Element name="Per. Make-Up" className="element" id="E1">
            <div className="row boxkit-mid border border-dark rounded">
              <div className="col">
                <div className="row text-left align-items-center">
                  <div className="col-md-1 col-3">
                    <i className="fas fa-moon fa-3x margintop"></i>
                  </div>
                  <div className="col-md-11 col-9">
                    <h2 className="main-point">{"Perm. Makeup"}</h2>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-12">
                    <Permanentmakeup />
                  </div>
                </div>
              </div>
            </div>
          </Element>

          <Element name="Team" className="element" id="E1">
            <div className="row boxkit-mid border border-dark rounded">
              <div className="col">
                <div className="row text-left align-items-center">
                  <div className="col-md-1 col-3">
                    <i className="fas fa-user fa-3x margintop"></i>
                  </div>
                  <div className="col-md-11 col-9">
                    <h2 className="main-point">{"Team"}</h2>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-12">
                    <Team />
                  </div>
                </div>
              </div>
            </div>
          </Element>

          <Element name="Kontakt" className="element">
            <div className="row boxkit-last border border-dark rounded">
              <div className="col">
                <div className="row text-left align-items-center">
                  <div className="col-md-1 col-3">
                    <i className="fas fa-phone fa-3x margintop"></i>
                  </div>
                  <div className=" col-md-11 col-9">
                    <h2 className="main-point">{"Kontakt"}</h2>
                  </div>
                </div>
                <div className="row text-center">
                  <div className="col">
                    <Kontaktformular />
                  </div>
                </div>
              </div>
            </div>
          </Element>
        </div>
      </div>
    );

    return home;
  };

  render() {
    return this.createHome();
  }
}

export default Home;

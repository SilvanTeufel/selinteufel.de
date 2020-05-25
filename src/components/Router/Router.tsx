import * as React from "react";
import { Helmet } from "react-helmet";
import { Redirect, HashRouter, Switch } from "react-router-dom"; // Link declare
import { animateScroll as scroller, Link } from "react-scroll";
import Datenschutz from "../Footer/Datenschutz";
import Home from "../Home";
import { CustomRoute } from "./CustomRoute";
import Impressum from "../Footer/Impressum";
import RouterDropdownField from "./RouterDropdownField";
import "../css/Header.css";
import "../css/Cursor.css";
import "../css/Navbar.css";
import "../css/Layout.css";

var classNames = require("classnames");
const LogoImage = require("../Pictures/LogoWideSelinTeufel2.png");

interface MyComponentState {
  DropdownisOpen: boolean;

  routerstructure: any;
}

class Router extends React.Component<{}, MyComponentState> {
  constructor(props: any) {
    super(props);
    this.state = {
      DropdownisOpen: true,
      routerstructure: {
        navKeys: {
          Philosophie: { General: false },
          Haare: {
            General: false,
          },
          Extensions: {
            General: false,
          },
          Nageldesign: {
            General: false,
          },
          Kosmetik: {
            General: false,
          },
          "Per. Make-Up": {
            General: false,
          },
          Team: {
            General: false,
          },
          Kontakt: { General: false },
        },
        footKeys: {
          Kontakt: false,
          Impressum: false,
          Datenschutz: false,
        },
        icon: {
          Philosophie: {
            state: false,
            class: "fas fa-yin-yang fa-lg",
          },
          Haare: {
            state: false,
            class: "fas fa-cut fa-lg marginscissor",
          },
          Extensions: { state: false, class: "fas fa-ruler-combined fa-lg" },
          Nageldesign: {
            state: false,
            class: "fas fa-paint-brush fa-lg",
          },
          Kosmetik: {
            state: false,
            class: "fas fa-sun fa-lg",
          },
          Team: {
            state: false,
            class: "fas fa-user fa-lg",
          },
          Kontakt: {
            state: false,
            class: "fas fa-phone fa-lg",
          },
          "Per. Make-Up": { state: false, class: "fas fa-moon fa-lg" },
          General: {
            state: false,
            class: "fas fa-cut fa-lg",
          },
        },
      },
    };
  }

  toggleDropDown = () => {
    this.setState({ DropdownisOpen: !this.state.DropdownisOpen });
  };

  closeDropDown = () => {
    console.log(window.innerWidth);
    if (this.state.DropdownisOpen && window.innerWidth < 1200) {
      this.setState({ DropdownisOpen: false });
    } else if (window.innerWidth >= 1200 && !this.state.DropdownisOpen) {
      this.setState({ DropdownisOpen: true });
    }
  };

  scrollToTop = () => {
    scroller.scrollToTop();
  };

  scrollToBottom = () => {
    scroller.scrollTo(2500);
  };

  redirectToLink = (key0: string, key1: string) => {
    const routerstructure = this.state.routerstructure;
    routerstructure.navKeys[key0][key1] = true;
    this.toggleIconState(key0, key1);
    this.setState({ routerstructure });
  };

  toggleIconState = (key0: string, key1: string) => {
    const routerstructure = this.state.routerstructure;
    for (var k in routerstructure.icon) {
      console.log(k);
      if (k !== key0) {
        routerstructure.icon[k].state = false;
      }
    }
    routerstructure.icon[key1].state = true;
    routerstructure.icon[key0].state = true;
    this.setState(routerstructure);
  };

  getIconState = (key: string) => {
    return this.state.routerstructure.iconstate[key];
  };

  createScrollButtonArray = () => {
    const buttons: any = {};

    if (this.state) {
      for (var key in this.state.routerstructure.navKeys) {
        buttons[key] = this.createScrollButton(key);
      }
    }

    return buttons;
  };

  createIcon = (iconClass: string, rotate: boolean) => {
    const icon = [];

    icon.push(
      <i
        className={classNames({
          [iconClass]: true,
          "fa-spin": rotate,
        })}
      ></i>
    );

    return icon;
  };

  createScrollButton = (key0: string) => {
    const button = [];
    button.push(
      <Link
        to={key0}
        spy={true}
        smooth={true}
        offset={-240}
        duration={500}
        delay={200}
      >
        {this.createIcon(
          this.state.routerstructure.icon[key0].class,
          this.state.routerstructure.icon[key0].state
        )}
        <button
          type="button"
          className="btn btn-outline-secondary"
          style={{ minWidth: 135, marginLeft: "0.5em" }}
          onClick={() => this.redirectToLink(key0, "General")}
        >
          {key0}
        </button>
      </Link>
    );

    return button;
  };

  createComponents = () => {
    const comps = [];
    const router = [];

    comps.push(<CustomRoute path="/Home" component={Home} />);

    for (var key0 in this.state.routerstructure.navKeys) {
      for (var key1 in this.state.routerstructure.navKeys[key0]) {
        comps.push(<CustomRoute path={`/${key0}/${key1}`} component={Home} />);
      }
    }

    comps.push(<CustomRoute path="/Datenschutz" component={Datenschutz} />);
    comps.push(<CustomRoute path="/Impressum" component={Impressum} />);
    comps.push(<CustomRoute path="/*" component={Home} />);

    router.push(<Switch>{comps}</Switch>);

    return router;
  };

  createHeader = () => {
    const header = [];
    if (this.state && this.state.routerstructure) {
      header.push(
        <div className="row">
          <div className="col">
            <div className="row header0">
              <div className="col-2 align-items-center">
                <RouterDropdownField
                  buttons={this.createScrollButtonArray()}
                  toggleDropDown={() => this.toggleDropDown()}
                  DropdownisOpen={this.state.DropdownisOpen}
                  routerstructure={this.state.routerstructure}
                />
              </div>
              <div className="col-9 text-left">
                <img
                  src={LogoImage}
                  className="img-fluid"
                  alt="Responsive image"
                  style={{ maxHeight: 140, paddingBottom: "0.5em" }}
                />
              </div>
              <div className="col-1" />
            </div>
            <div className="row header1">
              <div className="col text-right text-secondary">
                <a className="text-secondary" href="tel:07221-3731182">
                  <h5>{"07221 / 373 11 82"}</h5>
                </a>
                <p
                  className="d-none d-md-block"
                  style={{ paddingTop: "-0.9em" }}
                >
                  {
                    "Mo, Di: 7:00- 16:00, Mi: 7:00 - 20:00, Do, Fr: 8:00 - 18:00, Sa: 8:00 - 16:00 "
                  }{" "}
                </p>
                <p
                  className="smallfont d-block d-md-none"
                  style={{ paddingTop: "-0.9em" }}
                >
                  {"Mo, Di: 7:00- 16:00, Mi: 7:00 - 20:00"}
                  <br />
                  {"Do, Fr: 8:00 - 18:00, Sa: 8:00 - 16:00 "}
                </p>
              </div>
              <div
                className="col-lg-2 col-md-3 col-4 text-right text-secondary"
                style={{ paddingRight: "5vw" }}
              >
                <a
                  className="text-secondary"
                  href={"https://www.facebook.com/selinteufel/"}
                  target="_blank"
                >
                  <i className="fab fa-facebook-square fa-2x"></i>
                </a>{" "}
                <a
                  className="text-secondary"
                  href={"https://wa.me/4901773276945"}
                  target="_blank"
                >
                  <i className="fab fa-whatsapp-square fa-2x"></i>
                </a>{" "}
                <a
                  className="text-secondary"
                  href={"https://www.instagram.com/selin_teufel/"}
                  target="_blank"
                >
                  <i className="fab fa-instagram-square fa-2x"></i>
                </a>{" "}
              </div>
            </div>
            <div className="row headerb">
              <div className="col text-right text-secondary minusposition">
                <a className="text-secondary" href="tel:07221-3731182">
                  <h5>{"07221 / 373 11 82"}</h5>
                </a>
                <p
                  className="d-none d-md-block"
                  style={{ paddingTop: "-0.9em" }}
                >
                  {
                    "Mo, Di: 7:00- 16:00, Mi: 7:00 - 20:00, Do, Fr: 8:00 - 18:00, Sa: 8:00 - 16:00 "
                  }{" "}
                </p>
                <p
                  className="smallfont d-block d-md-none"
                  style={{ paddingTop: "-0.9em" }}
                >
                  {"Mo, Di: 7:00- 16:00, Mi: 7:00 - 20:00"}
                  <br />
                  {"Do, Fr: 8:00 - 18:00, Sa: 8:00 - 16:00 "}
                </p>
              </div>
              <div
                className="col-lg-2 col-md-3 col-4 text-right text-secondary"
                style={{ paddingRight: "5vw" }}
              >
                <a
                  className="text-secondary"
                  href={"https://www.facebook.com/selinteufel/"}
                  target="_blank"
                >
                  <i className="fab fa-facebook-square fa-2x"></i>
                </a>{" "}
                <a
                  className="text-secondary"
                  href={"https://wa.me/4901773276945"}
                  target="_blank"
                >
                  <i className="fab fa-whatsapp-square fa-2x"></i>
                </a>{" "}
                <a
                  className="text-secondary"
                  href={"https://www.instagram.com/selin_teufel/"}
                  target="_blank"
                >
                  <i className="fab fa-instagram-square fa-2x"></i>
                </a>{" "}
              </div>
            </div>
            <div className="headerbottomborder"></div>
          </div>
        </div>
      );
    }
    return header;
  };

  createFooter = () => {
    const footer = [];

    footer.push(
      <div className="row text-light footer">
        <div className="col-sm-4 col-0 text-right align-items-bottom">
          <a
            className="d-none d-sm-block"
            href={"/#/Home"}
            onClick={this.scrollToBottom}
          >
            <p className="text-dark">
              <i className="fas fa-phone"></i> Kontakt
            </p>
          </a>
        </div>
        <div className="col-sm-3 col-6 text-center align-items-center">
          <a href={"/#/Impressum"} onClick={this.scrollToTop}>
            <p className="text-dark">
              <i className="fas fa-stamp"></i> Impressum
            </p>
          </a>
        </div>
        <div className="col-sm-5 col-6 text-left align-items-center">
          <a href={"/#/Datenschutz"} onClick={this.scrollToTop}>
            <p className="text-dark">
              <i className="fas fa-lock"></i> Datenschutz
            </p>
          </a>
        </div>
      </div>
    );

    return footer;
  };

  createRedirections = () => {
    for (var key0 in this.state.routerstructure.navKeys) {
      for (var key1 in this.state.routerstructure.navKeys[key0]) {
        if (this.state.routerstructure.navKeys[key0][key1]) {
          const routerstructure = this.state.routerstructure;
          routerstructure.navKeys[key0][key1] = false;
          this.setState({ routerstructure });
          return <Redirect to={`/${key0}/${key1}`} />;
        }
      }
    }
  };

  render() {
    return (
      <HashRouter>
        {this.createRedirections()}
        <div>
          <Helmet>
            <meta charSet="utf-8" />
            <title>{"Selin Teufel - Teuflisch Schön"}</title>
            <meta
              name="description"
              content={"Teuflisch Schön - Haare, Nageldesign und Kosmetik"}
            />
          </Helmet>
          {this.createHeader()}
          <div
            className="container text-dark"
            onClick={this.closeDropDown}
            style={{ minHeight: "95.5vh" }}
          >
            {this.createComponents()}
          </div>
          {this.createFooter()}
        </div>
      </HashRouter>
    );
  }
}

export default Router;

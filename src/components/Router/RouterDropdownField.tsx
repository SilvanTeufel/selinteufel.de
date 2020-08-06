import * as React from "react";
import "../css/Navbar.css";
var classNames = require("classnames");

interface MyComponentProps {
  buttons: any;
  toggleDropDown: any;
  DropdownisOpen: boolean;
  routerstructure: any;
}

interface MyComponentStates {}

class RouterDropdownField extends React.Component<
  MyComponentProps,
  MyComponentStates
> {
  constructor(props: MyComponentProps) {
    super(props);
    this.state = {};
  }

  createInputs = () => {
    const row = [];

    row.push(<div className="dropdown-item first-dropdownelement"></div>);

    for (var key in this.props.buttons) {
      row.push(
        <div className="dropdown-item dropdownelement text-left">
          <div className="row">
            <div className="col-2 col-sm-0"></div>
            <div className="col-9 col-sm-12">{this.props.buttons[key]}</div>
          </div>
        </div>
      );
    }

    row.push(
      <div className="dropdown-item last-dropdownelement">
        <div className="row text-secondary">
          <div className="col-2 col-sm-0"></div>
          <div className="col-10 col-sm-12">
            <a className="text-secondary" href="tel:07221-3731182">
              <h5>{"07221 / 373 11 82"}</h5>
            </a>
            <p className="d-none d-md-block" style={{ paddingTop: "-0.9em" }}>
              {"Mo, Di: 7:00- 16:00,"}
              <br />
              {"Mi: 7:00 - 20:00"}
              <br />
              {"Do, Fr: 8:00 - 18:00,"}
              <br />
              {"Sa: 8:00 - 16:00 "}
            </p>
            <p
              className="smallfont d-block d-md-none"
              style={{ paddingTop: "-0.9em" }}
            >
              {"Mo, Di: 7:00- 16:00,"}
              <br />
              {"Mi: 7:00 - 20:00"}
              <br />
              {"Do, Fr: 8:00 - 18:00,"}
              <br />
              {"Sa: 8:00 - 16:00 "}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-2 col-sm-0"></div>
          <div className="col-10 col-sm-12">
            {" "}
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
            </a>
          </div>
        </div>
      </div>
    );

    row.push(
      <div className="row text-light greatmargintop footer">
        <div className="col-6 col-sm-12 text-center align-items-center">
          <a href={"/#/Impressum"}>
            <p className="text-dark">
              <i className="fas fa-stamp"></i> Impressum
            </p>
          </a>
        </div>
        <div className="col-6 col-sm-12 text-center  align-items-center">
          <a href={"/#/Datenschutz"}>
            <p className="text-dark">
              <i className="fas fa-lock"></i> Datenschutz
            </p>
          </a>
        </div>
      </div>
    );

    return row;
  };

  createField = () => {
    const row = [];

    row.push(
      <div className="dropdown fixedposition">
        <div
          className="row align-items-center text-right navbar-icon"
          onClick={this.props.toggleDropDown}
        >
          <div className="col-md-1 col-1 navicon">
            <div className="row">
              <div className="col">
                <span
                  className={classNames({
                    "fa-stack fa-2x": true,
                  })}
                  style={{ paddingLeft: "0.25vw", marginTop: "-0.25em" }}
                >
                  <i
                    className={classNames({
                      "fas fa-square fa-stack-1x fa-lg text-dark": !this.props
                        .DropdownisOpen,
                    })}
                  ></i>
                  <i
                    className={classNames({
                      "fas fa-bars fa-stack-1x": true,
                      "fa-inverse": !this.props.DropdownisOpen,
                    })}
                  ></i>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          className={classNames({
            slidein: this.props.DropdownisOpen,
            slideout: !this.props.DropdownisOpen,
          })}
          aria-labelledby="dropdownMenuButton"
        >
          {this.createInputs()}
        </div>
      </div>
    );

    return row;
  };

  render() {
    return this.createField();
  }
}

export default RouterDropdownField;

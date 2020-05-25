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

    row.push(
      <div className="dropdown-item first-dropdownelement">
        <br />
      </div>
    );
    for (var key in this.props.buttons) {
      row.push(
        <div className="dropdown-item dropdownelement text-left">
          <div className="row">
            <div className="col-12">{this.props.buttons[key]}</div>
          </div>
        </div>
      );
    }

    row.push(
      <div className="dropdown-item last-dropdownelement">
        <br />
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
          <div className="col-md-1 col-3">
            <div className="row">
              <div className="col">
                <span
                  className={classNames({
                    "fa-stack fa-2x": true,
                  })}
                  style={{ paddingLeft: "0.25vw", paddingTop: "0.25vh" }}
                >
                  <i
                    className={classNames({
                      "fas fa-square fa-stack-1x fa-lg text-dark": this.props
                        .DropdownisOpen,
                    })}
                  ></i>
                  <i
                    className={classNames({
                      "fas fa-bars fa-stack-1x": true,
                      "fa-inverse": this.props.DropdownisOpen,
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

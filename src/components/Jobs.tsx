import * as React from "react";
const LogoImage = require("./Pictures/scissor.png");
const LogoImageteam = require("./Pictures/Team/0.jpg");

interface TimerStates {}

export default class Jobs extends React.Component<{}, TimerStates> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="row">
        <div className="col-md"></div>
        <div className="col-lg-5  col-12 justify-content-center align-self-center">
          <img
            src={LogoImage}
            className="img-fluid "
            alt="Responsive image"
            style={{ marginBottom: "1em" }}
          />
        </div>
        <div className="col-lg-5  col-12 text-left justify-content-center align-self-center">
          <ul className="list-unstyled h5">
            <li>
              Wir suchen für unsere Salons in Sinzheim noch tatkräftige
              Unterstützung.
            </li>
            <br />
            <br />
            <li>
              <li className="font-weight-bold">Teilzeit oder Vollzeit</li>
              <br />
              <ul>
                <li>Friseur (m/w/d)</li>
                <li>Friseurmeisterin (m/w/d)</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="col-md"></div>
      </div>
    );
  }
}

/*
style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}

*/

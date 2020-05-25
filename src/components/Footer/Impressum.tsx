import * as React from "react";
import "../css/box.css";

interface MyComponentStates {}

class Impressum extends React.Component<{}, MyComponentStates> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  createDataP = () => {
    const dp = [];

    dp.push(
      <div className="row text-left align-items-center">
        <div className="col boxkit-Impressum border border-dark rounded">
          <h3>Impressum</h3>

          <h6>Selin Teufel, Teuflisch-Schön</h6>
          <h6>Markplatz 12</h6>
          <h6>76547 Sinzheim</h6>
          <h6>
            <a href="tel:07221-3731182"> Tel.: 07221 / 3731182</a>
          </h6>

          <br />
          <h6>
            Umsatzsteuer-Identifikationsnummer gem. § 27a UStG: DE 320651127
          </h6>
        </div>
      </div>
    );

    return dp;
  };

  render() {
    return this.createDataP();
  }
}

export default Impressum;

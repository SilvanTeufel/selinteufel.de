import * as React from "react";
const kontakt = require("./Pictures/kontakt.jpg");

interface MyComponentStates {
  formulardata: any[];
  formulartitles: string[];
  formularI: number | undefined;
  showPopup: boolean;
  popuptext: string;
  DSGVOaccepted: boolean;
}

class Kontakt extends React.Component<{}, MyComponentStates> {
  constructor(props: any) {
    super(props);
    this.state = {
      formulardata: ["", "", "", ""],
      formulartitles: ["Name", "Firma", "eMail", "Anfrage"],
      formularI: undefined,
      showPopup: false,
      popuptext: "",
      DSGVOaccepted: false,
    };
  }

  render() {
    return (
      <div>
        <div className="row text-left align-items-center">
          <div className="col-lg col-0" />
          <div className="col-lg-5 col-12">
            <p className="h5">
              Selin Teufel, Teuflisch-Schön
              <br />
              76547 Sinzheim
              <br />
              Markplatz 12
              <br />
              <a href="tel:07221-3731182"> Tel.: 07221 / 373 11 82</a>
              <br />
            </p>
          </div>
          <div className="col-lg-5 col-12">
            <img
              src={kontakt}
              className="img-fluid border border-secondary rounded"
              alt="Responsive image"
              style={{ marginBottom: "1em" }}
            />
          </div>
          <div className="col-lg col-0" />
        </div>
      </div>
    );
  }
}

export default Kontakt;

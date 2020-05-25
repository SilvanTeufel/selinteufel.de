import * as React from "react";
const LogoImage = require("./Pictures/nails.jpg");
const Logorosel = require("./Pictures/lcn.png");

export default class Nageldesign extends React.Component<{}, {}> {
  render() {
    return (
      <div className="row">
        <div className="col-md"></div>
        <div className="col-lg-5  col-12 text-left justify-content-center align-self-center">
          <ul className="list-unstyled h5">
            <li>
              Die Nagel- und Fußmodellage wird von der seit 2003 seltständigen
              Kosmetikerin Heike Teufel durchgeführt. Durch ihre jahrelange
              Erfahrung übt Sie diesen Beruf mit sehr viel Fachwissen und Liebe
              aus.
            </li>
            <br />
            <br />
            <table className="table table-sm">
              <thead>
                <tr>
                  <th scope="col">Leistung</th>
                  <th scope="col" className="text-right">
                    Preis
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Gelnägel&Farbgel</td>
                  <td className="text-right">ab 40 €</td>
                </tr>
                <tr>
                  <td>Gelnägel&Weiße Spitzen</td>
                  <td className="text-right">ab 45 €</td>
                </tr>
                <tr>
                  <td>Naturnagelverstärkung</td>
                  <td className="text-right">ab 40 €</td>
                </tr>
                <tr>
                  <td>Schüler und Stundenten</td>
                  <td className="text-right">ab 35 €</td>
                </tr>
                <tr>
                  <td>Fußnägel</td>
                  <td className="text-right">ab 30 €</td>
                </tr>
              </tbody>
            </table>
            <li className="text-right font-weight-bold">
              <br />
              <li>Wir verwenden ausschließlich Produkte von:</li>
              <br />
              <img
                src={Logorosel}
                className="img-fluid"
                alt="Responsive image"
                style={{ marginBottom: "1em", maxHeight: 50 }}
              />
            </li>
            <br />
          </ul>
        </div>
        <div className="col-lg-5  col-12">
          <img
            src={LogoImage}
            className="img-fluid border border-secondary rounded"
            alt="Responsive image"
            style={{ marginBottom: "1em" }}
          />
        </div>
        <div className="col-md"></div>
      </div>
    );
  }
}

/*
style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}

*/

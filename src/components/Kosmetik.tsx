import * as React from "react";
const LogoImage = require("./Pictures/beauty.jpg");
const Logorosel = require("./Pictures/roselheim.png");

export default class Kosmetik extends React.Component<{}, {}> {
  render() {
    return (
      <div className="row">
        <div className="col-md"></div>
        <div className="col-lg-5  col-12 justify-content-center align-self-center">
          <img
            src={LogoImage}
            className="img-fluid border border-secondary rounded"
            alt="Responsive image"
            style={{ marginBottom: "1em" }}
          />
        </div>
        <div className="col-lg-5  col-12 text-left justify-content-center align-self-center">
          <ul className="list-unstyled h5">
            <li>
              Gesichtsbehandlungen werden von unserer Friseurmeisterin und
              Kosmetikerin Ariane Seiler praktiziert. Mit viel Erfahrung, Gefühl
              und sorgfältig ausgewählten Naturprodukten werden die Behandlungen
              durchgeführt. Vereinbaren Sie einen Termin und Genießen sie die
              Entspannung in unseren schönen Räumlichkeiten.
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
                  <td>Wimpernwelle</td>
                  <td className="text-right">59 €</td>
                </tr>
                <tr>
                  <td>Wimpernwelle + färben</td>
                  <td className="text-right">71 €</td>
                </tr>
                <tr>
                  <td>Gesichtsbehandlung </td>
                  <td className="text-right">ab 68 €</td>
                </tr>
                <tr>
                  <td>Augenbrauen färben</td>
                  <td className="text-right">ab 9 €</td>
                </tr>
                <tr>
                  <td>Augenbrauen zupfen</td>
                  <td className="text-right">ab 6 €</td>
                </tr>
                <tr>
                  <td>Wimpern färben</td>
                  <td className="text-right">ab 12 €</td>
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
        <div className="col-md"></div>
      </div>
    );
  }
}

/*
style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}

*/

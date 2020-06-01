import * as React from "react";
const LogoImagehaare = require("./Pictures/haare2.jpg");
const Logolabio = require("./Pictures/labio.png");

interface TimerStates {}

export default class Haare extends React.Component<{}, TimerStates> {
  render() {
    return (
      <div className="row">
        <div className="col">
          <div className="row">
            <div className="col-md"></div>
            <div className="col-lg-4  col-12">
              <img
                src={LogoImagehaare}
                className="img-fluid border border-secondary rounded"
                alt="Responsive image"
                style={{ marginBottom: "1em" }}
              />
            </div>
            <div className="col-lg-6  col-12 text-left justify-content-center align-self-center">
              <ul className="list-unstyled h5">
                <li>
                  Wir, die Friseurmeister bei Teuflisch Schön, legen sehr viel
                  Wert auf die individuelle Beratung des Kunden. Mit viel
                  Kreativität und Freude zum Beruf wird auf jeden Charakter
                  eingegangen. Wir arbeiten im Farb-, Styling- und
                  Harrpflegebereich ausschließlich mit Produkten der Firma LA
                  Biosthetique.
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
                      <td>Damenschnitt</td>
                      <td className="text-right">ab 24 €</td>
                    </tr>
                    <tr>
                      <td>Waschen/Föhnen</td>
                      <td className="text-right">ab 23 €</td>
                    </tr>
                    <tr>
                      <td>Pflege</td>
                      <td className="text-right">ab 8 €</td>
                    </tr>
                    <tr>
                      <td>Herrenschnitt</td>
                      <td className="text-right">23,50 €</td>
                    </tr>
                    <tr>
                      <td>Schüler/Stundenten</td>
                      <td className="text-right">ab 19 €</td>
                    </tr>
                    <tr>
                      <td>Kinder</td>
                      <td className="text-right">ab 19 €</td>
                    </tr>
                    <tr>
                      <td>Farbe/Strähnen</td>
                      <td className="text-right">ab 35 €</td>
                    </tr>
                    <tr>
                      <td>Brautfrisur Komplett</td>
                      <td className="text-right">ab 295 €</td>
                    </tr>
                  </tbody>
                </table>
                <li className="text-right font-weight-bold">
                  <br />
                  <li>Wir verwenden ausschließlich Produkte von:</li>
                  <br />
                  <img
                    src={Logolabio}
                    className="img-fluid"
                    alt="Responsive image"
                    style={{ marginBottom: "1em", maxHeight: 40 }}
                  />
                </li>
              </ul>
            </div>
            <div className="col-md"></div>
          </div>
          <div className="row">
            <div className="col"></div>
          </div>
        </div>
      </div>
    );
  }
}

/*
style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}

*/

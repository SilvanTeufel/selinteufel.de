import * as React from "react";
const LogoImagenails = require("./Pictures/nails.jpg");
const Logoak = require("./Pictures/ak.png");
const Logopb = require("./Pictures/phibrows.png");
const LogoImage: any = [];

for (let i = 0; i < 6; i++) {
  LogoImage[i] = require(`./Pictures/Microblading/${i}.jpeg`);
}

interface TimerStates {
  intervalID: any;
  carouselClasses: string[];
  carouselID: number;
}
export default class Permanentmakeup extends React.Component<{}, TimerStates> {
  constructor(props: any) {
    super(props);
    this.state = {
      intervalID: setInterval(() => this.tick(), 5000),
      carouselClasses: [
        "active",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
      ],
      carouselID: 0,
    };
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalID);
  }

  tick() {
    if (this.state.carouselID < 5) {
      var carouselClasses = this.state.carouselClasses;
      carouselClasses[this.state.carouselID] = "";
      carouselClasses[this.state.carouselID + 1] = "active";
      this.setState({ carouselClasses, carouselID: this.state.carouselID + 1 });
    } else {
      var carouselClasses = [
        "active",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
      ];
      this.setState({ carouselClasses, carouselID: 0 });
    }
  }

  prev() {
    if (this.state.carouselID < 5 && this.state.carouselID > 0) {
      var carouselClasses = this.state.carouselClasses;
      carouselClasses[this.state.carouselID] = "";
      carouselClasses[this.state.carouselID - 1] = "active";
      this.setState({ carouselClasses, carouselID: this.state.carouselID - 1 });
    } else {
      var carouselClasses = [
        "active",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
      ];
      this.setState({ carouselClasses, carouselID: 0 });
    }
  }

  createPictures = () => {
    const pictures = [];

    for (let i = 0; i < 6; i++) {
      pictures.push(
        <div className={"carousel-item" + this.state.carouselClasses[i]}>
          <img
            className="img-fluid border border-secondary rounded"
            src={LogoImage[i]}
            alt={`${i} Slide`}
          />
        </div>
      );
    }

    return pictures;
  };

  render() {
    return (
      <div className="row">
        <div className="col-md"></div>
        <div className="col-lg-5  col-12 text-left justify-content-center align-self-center">
          <ul className="list-unstyled h5">
            <li>
              Als gelernte Kosmetikerin habe ich seit 2017 zahlreiche Schulungen
              und Weiterbildungen besucht, um meine Erfahrungen im
              Permanent-Make-Up zu perfektionieren. Beim Permanent-Make-Up ist
              es das Ziel die Natürlichkeit zu behalten, welches ich mit
              Leidenschaft verfolge.
            </li>
            <br />
            <br />

            <table className="table table-sm">
              <thead>
                <tr>
                  <th scope="col">Augenbrauen</th>
                  <th scope="col" className="text-right">
                    Preis
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Microblading / Härchenzeichnung</td>
                  <td className="text-right">420 €</td>
                </tr>
                <tr>
                  <td>Powderbrows / Puder Look</td>
                  <td className="text-right">420 €</td>
                </tr>
              </tbody>
            </table>

            <table className="table table-sm">
              <thead>
                <tr>
                  <th scope="col">Augen</th>
                  <th scope="col" className="text-right">
                    Preis
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Lidstrich fein oben</td>
                  <td className="text-right">290 €</td>
                </tr>
                <tr>
                  <td>Lidstrich schattiert</td>
                  <td className="text-right">320 €</td>
                </tr>
                <tr>
                  <td>Lidstrich fein oben und unten</td>
                  <td className="text-right">390 €</td>
                </tr>
              </tbody>
            </table>

            <table className="table table-sm">
              <thead>
                <tr>
                  <th scope="col">Lippen</th>
                  <th scope="col" className="text-right">
                    Preis
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Lippenumrandung + Schattierung</td>
                  <td className="text-right">490 €</td>
                </tr>
              </tbody>
            </table>
            <li className="text-right">
              <li>
                <em>
                  Das nacharbeiten innerhalb von drei Monaten ist in den Preisen
                  inbegriffen.
                </em>
              </li>
            </li>
            <li className="text-right font-weight-bold">
              <br />
              <li>Wir verwenden ausschließlich Produkte von:</li>
              <br />
              <div className="row">
                <div className="col"></div>
                <div className="col">
                  {" "}
                  <img
                    src={Logoak}
                    className="img-fluid"
                    alt="Responsive image"
                    style={{ marginBottom: "1em", maxHeight: 60 }}
                  />
                </div>
                <div className="col">
                  {" "}
                  <img
                    src={Logopb}
                    className="img-fluid"
                    alt="Responsive image"
                    style={{
                      marginTop: "0.6em",
                      marginBottom: "1em",
                      maxHeight: 40,
                    }}
                  />
                </div>
              </div>
            </li>
            <br />
          </ul>
        </div>
        <div className="col-lg-5  col-12 justify-content-center align-self-center">
          <div
            id="carouselExampleSlidesOnly"
            className="carousel slide "
            data-ride="carousel"
            style={{ marginBottom: "1em", borderRadius: "0.2em" }}
          >
            <div className="carousel-inner" style={{ borderRadius: "0.2em" }}>
              {this.createPictures()}
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
                onClick={() => this.prev()}
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
                onClick={() => this.tick()}
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div className="col-md"></div>
      </div>
    );
  }
}

/*
style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}

*/

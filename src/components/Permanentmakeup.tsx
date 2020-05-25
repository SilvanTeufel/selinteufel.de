import * as React from "react";
const LogoImagenails = require("./Pictures/nails.jpg");
const Logoak = require("./Pictures/ak.png");
const Logopb = require("./Pictures/phibrows.png");
const LogoImage: any = [];

for (let i = 0; i < 15; i++) {
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
    console.log(this.state.carouselID);
    if (this.state.carouselID < 14) {
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
    console.log(this.state.carouselID);
    if (this.state.carouselID < 14 && this.state.carouselID > 0) {
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

    for (let i = 0; i < 15; i++) {
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
                  <th scope="col">Leistung</th>
                  <th scope="col" className="text-right">
                    Preis
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Microblading</td>
                  <td className="text-right">390 €</td>
                </tr>
                <tr>
                  <td>Powderbrows + Färben</td>
                  <td className="text-right">390 €</td>
                </tr>
                <tr>
                  <td>Aquarell Lips </td>
                  <td className="text-right">450 €</td>
                </tr>
                <tr>
                  <td>Perm. Lidstrich Fein</td>
                  <td className="text-right">220 €</td>
                </tr>
                <tr>
                  <td>Perm. Lidstrich Schattiert</td>
                  <td className="text-right">290 €</td>
                </tr>
              </tbody>
            </table>
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
        <div className="col-lg-5  col-12">
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

import * as React from "react";
const LogoImagehaare = require("./Pictures/haare2.jpg");
const Logogl = require("./Pictures/gl.png");

const LogoImage: any = [];

for (let i = 0; i < 4; i++) {
  LogoImage[i] = require(`./Pictures/Haare/${i}.jpeg`);
}

interface TimerStates {
  intervalID: any;
  carouselClasses: string[];
  carouselID: number;
}

export default class Verlängerung extends React.Component<{}, TimerStates> {
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
    if (this.state.carouselID < 3) {
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
    if (this.state.carouselID < 3 && this.state.carouselID > 0) {
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

    for (let i = 0; i < 4; i++) {
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
        <div className="col-1"></div>
        <div className="col-lg-6  col-12  justify-content-center align-self-center">
          <ul className="list-unstyled h5">
            <li>
              Mit den premium Haaren von der Firma Great Lengths ist es uns
              möglich die Naturhaare zu verlängern oder zu verdichten. So sind
              der Kreativität und den Wünschen des Kunden keine Grenzen gesetzt.
              Sichern Sie sich Ihren individuellen Beratungstermin.
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
                  <td>Haarverdichtung</td>
                  <td className="text-right">ab 168 €</td>
                </tr>
                <tr>
                  <td>Haarverlängerung</td>
                  <td className="text-right">ab 330 €</td>
                </tr>
              </tbody>
            </table>
            <li className="text-right font-weight-bold">
              <br />
              <li>Wir verwenden ausschließlich Produkte von:</li>
              <br />
              <img
                src={Logogl}
                className="img-fluid"
                alt="Responsive image"
                style={{ marginBottom: "1em", maxHeight: 40 }}
              />
            </li>
            <br />
          </ul>
        </div>
        <div className="col-lg-4  col-12 justify-content-center align-self-center">
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
        <div className="col-1"></div>
      </div>
    );
  }
}

/*
style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}

*/

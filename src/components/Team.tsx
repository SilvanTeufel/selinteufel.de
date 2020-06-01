import * as React from "react";
const LogoImageteam = require("./Pictures/Team/0.jpg");
const LogoImage: any = [];

for (let i = 0; i < 3; i++) {
  LogoImage[i] = require(`./Pictures/Team/${i}.jpg`);
}

interface TimerStates {
  intervalID: any;
  carouselClasses: string[];
  carouselID: number;
  names: string[];
}

export default class Team extends React.Component<{}, TimerStates> {
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
      names: ["Heike Teufel", "Selin Teufel", "Ariane Seiler"],
    };
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalID);
  }

  tick() {
    console.log(this.state.carouselID);
    if (this.state.carouselID < 2) {
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
    if (this.state.carouselID < 2 && this.state.carouselID > 0) {
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

    for (let i = 0; i < 3; i++) {
      pictures.push(
        <div className={"carousel-item " + this.state.carouselClasses[i]}>
          <img
            className="img-fluid border border-secondary rounded"
            src={LogoImage[i]}
            alt={`${i} Slide`}
            style={{
              maxHeight: 400,
            }}
          />
          <div
            className="carousel-caption text-center"
            style={{
              top: "-1em",
            }}
          >
            <h3>
              <strong>{this.state.names[i]}</strong>
            </h3>
          </div>
        </div>
      );
    }

    return pictures;
  };

  render() {
    return (
      <div className="row">
        <div className="col-md"></div>
        <div className="col-lg-4  col-12 justify-content-center align-self-center text-center">
          {/* <img
            src={LogoImageteam}
            className="img-fluid border border-secondary rounded"
            alt="Responsive image"
            style={{ marginBottom: "1em" }}
          /> */}
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
        <div className="col-lg-6  col-12 text-left justify-content-center align-self-center">
          <ul className="list-unstyled h5">
            <li>
              <li className="font-weight-bold">Ariane Seiler:</li>
              <ul>
                <li>Stellvertretende Salonleitung</li>
                <li>Friseurmeisterin</li>
                <li>Kosmetikerin</li>
                <li>Selbstständige Brautstylistin</li>
              </ul>
            </li>
            <br />
            <li>
              <li className="font-weight-bold">Heike Teufel:</li>
              <ul>
                <li>Nagelpflege</li>
                <li>Fußpflege</li>
                <li>Selbstständige Kosmetikerin</li>
              </ul>
            </li>
            <br />
            <li>
              <li className="font-weight-bold">Selin Teufel:</li>
              <ul>
                <li>Inhaberin</li>
                <li>Friseurmeisterin</li>
                <li>Kosmetikerin</li>
                <li>Permanent Makeup</li>
              </ul>
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

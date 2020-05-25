import * as React from "react";
const LogoImage = require("./Pictures/philosophie.jpg");

export default class Philosophie extends React.Component<{}, {}> {
  render() {
    return (
      <div className="row">
        <div className="col-md"></div>
        <div className="col-lg-5  col-12 text-left justify-content-center align-self-center">
          {/* <h5>
            Teuflisch schön ist ein Beautysalon, der sehr viel wert auf
            Persönlichkeit legt. Von Kopf bis Fuß verschönern wir unsere Kunden.
            Wir sind hoch qualifizierte Friseurmeisterinnen und Kosmetikerinnen,
            welche nur die höchste Qualität an Produkten verwendet. Unsere
            Aufgabe ist der Schönheit und Pflege des Körpers keine Grenzen zu
            setzen.
          </h5> */}
          <h5>
            <strong>
              "Ein Lächeln ist das schönste Make-up, das eine Frau tragen kann."
            </strong>
            <br /> <br />
            Wir von Teuflisch schön leben nach diesem Motto und zaubern Euch,
            unseren liebsten Kunden, ein Lächeln ins Gesicht. Die Natürlichkeit
            und Eleganz sowie die Professionalität steht bei uns an erster
            Stelle. Die Wünsche unserer Kunden werden mit langjähriger
            Berufserfahrung gepaart um die perfekten Ergebnisse zu erzielen.
            Hiermit stehen wir seit 2013 für den Namen Teuflisch Schön.
          </h5>
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

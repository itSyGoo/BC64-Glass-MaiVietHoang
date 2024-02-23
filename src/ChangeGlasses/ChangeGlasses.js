import React, { Component } from "react";
import "./ChangeGlasses.css";

const arrGlasses = [
  {
    id: 1,
    price: 30,
    name: "GUCCI G8850U",
    url: "./img/v1.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 2,
    price: 50,
    name: "GUCCI G8759H",
    url: "./img/v2.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 3,
    price: 30,
    name: "DIOR D6700HQ",
    url: "./img/v3.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 4,
    price: 70,
    name: "DIOR D6005U",
    url: "./img/v4.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 5,
    price: 40,
    name: "PRADA P8750",
    url: "./img/v5.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 6,
    price: 60,
    name: "PRADA P9700",
    url: "./img/v6.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 7,
    price: 80,
    name: "FENDI F8750",
    url: "./img/v7.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 8,
    price: 100,
    name: "FENDI F8500",
    url: "./img/v8.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 9,
    price: 60,
    name: "FENDI F4300",
    url: "./img/v9.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
];

export default class ChangeGlasses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGlasses: null,
    };
  }

  selectGlasses = (glasses) => {
    this.setState({ selectedGlasses: glasses });
  };

  renderGlassesList = () => {
    return arrGlasses.map((glasses) => (
      <img
        key={glasses.id}
        src={glasses.url}
        alt={glasses.name}
        onClick={() => this.selectGlasses(glasses)}
        className="glasses-img"
      />
    ));
  };

  removeSelectedGlasses = () => {
    this.setState({ selectedGlasses: null });
  };

  render() {
    const { selectedGlasses } = this.state;

    return (
      <div className="change-glasses-app">
        <div className="model-container mt-5">
          <img src="./img/model.jpg" alt="Model" className="model" />
          {selectedGlasses && (
            <div className="glasses-overlay">
              <img
                src={selectedGlasses.url}
                alt="Selected Glasses"
                className="selected-glasses-img"
              />
              <div className="glasses-details">
                <h4>{selectedGlasses.name}</h4>
                <p>{selectedGlasses.desc}</p>
                <p>Price: ${selectedGlasses.price}</p>
                <button
                  onClick={this.removeSelectedGlasses}
                  className="remove-glasses-btn"
                >
                  Remove
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="glasses-list-container">{this.renderGlassesList()}</div>
      </div>
    );
  }
}

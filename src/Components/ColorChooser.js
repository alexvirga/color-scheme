import React, { Component } from "react";
import ColorScheme from "color-scheme";
import Hue from "./Hue";
import Distance from "./Distance";
import ColorBlock from "./ColorBlock";
import Slider from "@material-ui/core/Slider";
import Scheme from "./Scheme";
import Variation from "./Variation";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

class ColorChooser extends Component {
  state = {
    colors: [],
    hue: 260,
    scheme: "monochromatic",
    variation: "light",
    distance: 0.01,
  };

  componentDidMount() {
    this.newScheme();
  }

  newScheme = () => {
    const scheme = new ColorScheme();
    scheme
      .from_hue(this.state.hue)
      .scheme(this.state.scheme)
      .distance(this.state.distance)

      .variation(this.state.variation);

    var colors = scheme.colors();
    this.setState({ colors: colors });
  };

  handleHueChange = (event, newValue) => {
    this.setState({ hue: newValue }, () => this.newScheme());
  };

  handleDistanceChange = (event, newValue) => {
    this.setState({ distance: newValue });
    this.newScheme();
  };

  handleScheme = (event, newValue) => {
    console.log(newValue);
    this.setState({ scheme: `${newValue}` }, () => this.newScheme());
  };

  handleVariation = (event, newValue) => {
    this.setState({ variation: `${newValue}` }, () => this.newScheme());
  };

  render() {
    return (
        <div className="home">

       
        <div className="colors-container">
        {this.state.colors.map((color) => (
            <ColorBlock color={color} /> 
  
        ))}
        </div>
      
      <div className="color-chooser" style={{backgroundColor:`#${this.state.colors[2]}`}}>

        <div>
          <div>
            <Hue
              handleHueChange={this.handleHueChange}
              value={this.state.hue}
            />
          </div>

          <div>
            <Scheme
              handleScheme={this.handleScheme}
              scheme={this.state.scheme}
            />
          </div>

          <div>
            <Variation
              handleVariation={this.handleVariation}
              variation={this.state.variation}
            />
          </div>

          <div>
<Distance handleDistanceChange={this.handleDistanceChange} distance={this.state.distance} />
          </div>
        </div>
      </div>
      </div>
      
    );
  }
}

export default ColorChooser;

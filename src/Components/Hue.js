import React, { Component } from "react";
import ColorScheme from "color-scheme";
import Slider from "@material-ui/core/Slider";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
class Hue extends Component {


  render() {
   


    return(
        <div>
        <h1> Hue </h1>
        <Slider
          value={this.props.hue}
          onChange={this.props.handleHueChange}
          max={360}
        
        />
      </div>
    )
  }
}

export default Hue;

import React, { Component } from "react";
import ColorScheme from "color-scheme";
import Slider from "@material-ui/core/Slider";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
class Distance extends Component {


  render() {
   


    return(
        <div>
        <h1> Distance </h1>
        <Slider
          value={this.props.distance}
          onChange={this.props.handleDistanceChange}
          min={0}
          max={1}
          step={0.00000001}
        />
      </div>
    )
  }
}

export default Distance;

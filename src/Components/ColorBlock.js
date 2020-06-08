import React, { Component } from "react";
import ColorScheme from "color-scheme";
import Slider from "@material-ui/core/Slider";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
class ColorBlock extends Component {


  render() {
   


    return(
        <div className="color-block" style={{ backgroundColor: `#${this.props.color}` }}> 
        {this.props.color}

      </div>
    )
  }
}

export default ColorBlock;

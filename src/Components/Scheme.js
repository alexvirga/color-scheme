import React, { Component } from "react";
import ColorScheme from "color-scheme";
import Slider from "@material-ui/core/Slider";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
class Scheme extends Component {


  render() {
   


    return(
        <div>
            <h4> Scheme </h4>
        <ToggleButtonGroup
      value={this.props.scheme}
      exclusive
      onChange={this.props.handleScheme}
    
    >
      <ToggleButton value="monochromatic" > Monochromatic
      
      </ToggleButton>
      <ToggleButton value="contrast">Contrast
    
      </ToggleButton>
      <ToggleButton value="triade">Triade
    
      </ToggleButton>
      <ToggleButton value="tetrade">Tetrade
   
      </ToggleButton>
      <ToggleButton value="analogic" >Analogic
   
   </ToggleButton>
    </ToggleButtonGroup>

    </div>
    )
  }
}

export default Scheme;

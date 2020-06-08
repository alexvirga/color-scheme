import React, { Component } from "react";
import ColorScheme from "color-scheme";
import Slider from "@material-ui/core/Slider";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
class Variation extends Component {


  render() {
   


    return(
        <div>
        <h4> Variation </h4>
        <ToggleButtonGroup
      value={this.props.variation}
      exclusive
      onChange={this.props.handleVariation}
    
    >
      <ToggleButton value="default" > Default
      
      </ToggleButton>
      <ToggleButton value="pastel">Pastel
    
      </ToggleButton>
      <ToggleButton value="soft">Soft
    
      </ToggleButton>
      <ToggleButton value="light">Light
   
      </ToggleButton>
      <ToggleButton value="hard" >Hard
   
   </ToggleButton>
   <ToggleButton value="pale" >Pale
   
   </ToggleButton>

    </ToggleButtonGroup>

    </div>
    )
  }
}

export default Variation;

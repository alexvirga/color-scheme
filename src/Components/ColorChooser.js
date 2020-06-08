import React, { Component } from "react";
import ColorScheme from "color-scheme";
import Slider from '@material-ui/core/Slider';

class ColorChooser extends Component {
    state = {
        colors: [],
        hue: 10,
        sceheme: "triade",
        variation: "pastel",
        distance: .01,

    }

    componentDidMount(){
        this.newScheme()
    }
     
    
        
    


  newScheme = () => {
    const scheme = new ColorScheme();
    scheme
      .from_hue(this.state.hue) 
      .scheme(this.state.sceheme) 
      .distance(this.state.distance)

      .variation(this.state.variation); 

    var colors = scheme.colors();
    this.setState({colors: colors})
  };

  handleHueChange = (event, newValue) => {
      console.log(newValue)
      this.setState({hue: newValue})
      this.newScheme()

  }

  render() {

 
    return (
        <div>
            <div>
            {this.state.colors.map(color => <div style={{backgroundColor: `#${color}` }}> {color} </div>)}

            </div>

            <div>
<Slider value={this.state.hue} onChange={this.handleHueChange} max={180} />

</div>


    </div> 

    )

  }
}



export default ColorChooser;

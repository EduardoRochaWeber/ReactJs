import { Component } from "react";

class GarrafaListCor extends Component{

    handlerSubmitColor(event){
        event.stopPropagation();
          if (event.keyCode === 13) {
            this.color = event.target.value;
            this.props.create_color(this.color);
            event.preventDefault();
        }
      }

    render(){
        return(
            <section>
                <label>Cor </label><input type="text" onKeyDown={this.handlerSubmitColor.bind(this)} />
            </section>
        );
    }
}

export default GarrafaListCor;
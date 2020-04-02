import React from 'react';

class Display extends React.Component{
	render(){
	return(
    <div>
     { this.props.rec!=" " && <div className="abc"> 
        <br />
        { this.props.Images && 
          <img className="image" src={this.props.Images} alt=" "/> }

        { this.props.Name && <p> Name: 

         <span> {this.props.Name }</span> </p> }

        { this.props.Category && <p>Category: 

          <span> {this.props.Category } </span> </p> }

        { this.props.Area && <p>Area: 

           <span> {this.props.Area }  </span> </p> }

        { this.props.video && <p> Youtube: 

         <video> {this.props.video }</video> </p> }

        {this.props.Instructions && <p>Instructions: <br />

        	<span> {this.props.Instructions }  </span> </p> }
        	
        { this.props.error && <p className ="erro">{this.props.error}</p> }

        </div> }
    </div>
	);
	}
};

export default Display;
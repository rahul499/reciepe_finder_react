import React from 'react';

class Form extends React.Component{

	render(){
		return(
		<form onSubmit={this.props.getRecipe}  style={{color: "black"}}>   <br />
         <input type="text" name="rec" placeholder="Recipe..." />
         <button>Get Recipe</button>
         </form>

         );
	}
}

export default Form;
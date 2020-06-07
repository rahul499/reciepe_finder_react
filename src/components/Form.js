import React from 'react';

class Form extends React.Component{

	render(){
		return(
		<form onSubmit={this.props.getRecipe}  style={{color: "black"}}>   <br />
         <input type="text" name="recc" placeholder="Recipe..." />
         <button>Get Recipe</button>
         <br /><br />
         </form>

         );
	}
}

export default Form;
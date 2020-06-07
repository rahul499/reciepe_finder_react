import React from 'react';
import './App.css';
import a from './images/a.jpeg';
import Form from './components/Form.js';
import Recipes from "./components/Recipes";

class App extends React.Component{

state = {
    recipes: []
}

  getRecipe = async (e) => {


      e.preventDefault();
      const rec = e.target.elements.recc.value;
   
      
        const api_call = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${rec}`);

        const data = await api_call.json();

        this.setState({
             recipes: data.meals,
        });
      
    

  }
componentDidMount = () => {
    const json = localStorage.getItem("recipes");
    const recipes = JSON.parse(json);
    this.setState({ recipes });
  }

  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes);
  }

  render(){
    return(
     
     <div>
     <div className="App-header">
        <center><img src={a} className="App-logo" alt="logo" /> </center>
     </div>
     <Form getRecipe = {this.getRecipe} />
      <Recipes recipes={this.state.recipes} />
     </div>

      );
  }
}
export default App;

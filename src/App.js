import React from 'react';
import './App.css';
import a from './images/a.jpeg';
import Form from './components/Form.js';
import Display from './components/Display.js';

class App extends React.Component{

state ={
Name: undefined,
Category: undefined,
Area: undefined,
Instructions: undefined,
Images: undefined,
loadingState: null,
video: undefined,
error: undefined
}

  getRecipe = async (e) => {
   
   this.setState({
      loadingState: 'LOADING'
    })

     e.preventDefault();
     const rec =e.target.elements.rec.value;
   
      const api_call = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${rec}`); 

      const data = await api_call.json();

if(rec)  
 {   
        console.log(data);
        
         if(data.meals == null) {    
      this.setState({
      loadingState: 'LOADING_FAILED'
      })
    } 
    else
    {
       for (var i = 0; i < data.meals.length; i++) {
        this.setState({
        Name: data.meals[i].strMeal,
        Category: data.meals[i].strCategory,
        Area: data.meals[i].strArea,
        Instructions: data.meals[i].strInstructions,
         loadingState: 'LOADING_DONE',
         video: data.meals[i].strYoutube,
        Images: data.meals[i].strMealThumb,
        error: " "
      })
      }
      }
 }
else
  {
    this.setState({
     Name: undefined,
     Category: undefined,
     Area: undefined,
     Instructions: undefined,
     Images: undefined,
     video: undefined,
     error: "Enter Keywords."
    })
  }
}


  render(){
    return(
     
     <div>
     <div className="App-header">
        <center><img src={a} className="App-logo" alt="logo" /> </center>
     </div>
      <header className="App-header2">

    <Form getRecipe = {this.getRecipe} />

         <center>{this.state.loadingState=="LOADING" ? (<h2>Loading!</h2>): ("")} </center>
    </header>

         <div className ="App-header3 ">

           <center> {this.state.loadingState == null ? (<h3>Type a Dish Name to Search for it's ingredient</h3>): ("")}
         {this.state.loadingState == "LOADING_FAILED" ? (<h3>Data did not match with the input! </h3>): ("")}  </center>

    <Display 
      Name = {this.state.Name}
     Category = {this.state.Category}
     Area = {this.state.Area}
     Instructions = {this.state.Instructions}
     Images = {this.state.Images}
     Video = {this.state.video}
    error = {this.state.error}
    />
    </div>
  
     </div>
      );
  }
}
export default App;

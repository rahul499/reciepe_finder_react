import React from 'react';

import { Link } from "react-router-dom";
import a from '../images/a.jpeg';


class Rec extends React.Component {
  state = {
    activeRecipe: []
  }
  componentDidMount = async () => {
    const title = this.props.location.state.recipe;
    const req = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${title}`);

    const res = await req.json();
    this.setState({ activeRecipe: res.meals[0] });
    console.log(this.state.activeRecipe);
  }
  render() {
    const recipe = this.state.activeRecipe;
    return (
       <div>
        <div className="App-header">
                     <center><img src={a} className="App-logo" alt="logo" /> </center>

                  </div>
      <div className="container">

 <br /><br />
        { this.state.activeRecipe.length !== 0 &&
          <div className="active-recipe">

            <h3 className="active-recipe__title">{ recipe.strMeal }</h3>
            <img className="active-recipe__img" src={recipe.strMealThumb} alt={recipe.strMeal}/>
            <h4 className="active-recipe__publisher"><br />
              Area: <span>{ recipe.strArea }</span>
            </h4>
            <h4 className="active-recipe__publisher">
               Category: <span>{ recipe.strCategory }</span>
            </h4>
            <h4 className="active-recipe__publisher">
            Instructions: <span>{ recipe.strInstructions }</span>
            </h4>

            <p className="active-recipe__website">Source:
              <span><a href={recipe.strSource}>{recipe.strSource}</a></span>
            </p>
            <button className="active-recipe__button">
              <Link to="/">Go Home</Link>
            </button>
            <br /><br /><br />
          </div>
        }
      </div>
      </div>
    );
  }
};

export default Rec;
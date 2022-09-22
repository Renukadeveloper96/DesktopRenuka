import { Injectable } from '@angular/core';
import {Recipe} from './recipe.model';
@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private recipes: Recipe[]=[
    {
      id:'r1',
      title:'ionic',
      imageUrl:'https://i.ibb.co/G2Lgs2j/images-1.jpg',
      ingredients:['French Fries','pork Meat','salad']
      },
      {
        id:'r2',
        title:'ionic2',
        imageUrl:'https://i.ibb.co/YT0gX2r/images.jpg',
        ingredients:[' Fries',' Meat','salad trrr']
        },
  ];
  constructor() {}

	getAllRecipes() {
		return [...this.recipes];
	}
	// return a single recipe for an id
	  getRecipe(recipeId: string): Recipe {
		  return {
			  ...this.recipes.find((recipe) => {
				  return recipe.id === recipeId;
			  }),
		  };
	}
}

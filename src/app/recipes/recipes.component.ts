import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';
//change recipe service level, so when we navigate page through all
// app, the service data survives.

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: []
})
export class RecipesComponent implements OnInit {
	selectedRecipe: Recipe;
	
  constructor(private recipesService: RecipesService ) { }

  ngOnInit() {
  	this.recipesService.recipeSelected.subscribe(
  		(recipe: Recipe) => {
  			this.selectedRecipe= recipe;
  		}
  	);
  }

}

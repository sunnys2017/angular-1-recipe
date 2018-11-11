import { Component, 
	OnInit, 
	Input//, 
//	EventEmitter, 
//	Output
   } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipesService } from '../../recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
	@Input() recipe: Recipe;
  @Input() index: number;
  /*Remove method of event emmiter, by
    passing param all the way from recipe-item -> recipe-list 
    -> recipes -> recipe-detals.
    use service instead.
  */
	//@Output() recipeSelected = new EventEmitter<void>();

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
  }

  //no need any more, use router instead of action emitter
  onSelected() {
    this.recipesService.recipeSelected.emit(this.recipe);

  /* we do not need to add recipe as param here, because
     now recipe-list listen to this recipe item, it holds 
     the recipe info.
  */
  //	this.recipeSelected.emit();
  }


}

import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipe.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    console.log("this.recipeService ", this.recipeService);
    this.recipes = this.recipeService.getRecipes();
  }

  onRecipeSelected(element: Recipe) {
    this.recipeWasSelected.emit(element);
  }

}

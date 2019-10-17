import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

/* @Injectable({
  providedIn: 'root'
}) */
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe("TestName 2", "TestDescription", "https://hips.hearstapps.com/delish/assets/17/37/1505333248-goulash-delish-1.jpg"),
    new Recipe("TestName", "TestDescription", "https://hips.hearstapps.com/delish/assets/17/37/1505333248-goulash-delish-1.jpg"),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  constructor() { }
}

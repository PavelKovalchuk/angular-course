import { AuthService } from "./../auth/auth.service";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, tap } from "rxjs/operators";

import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";

@Injectable({ providedIn: "root" })
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService
  ) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http
      .put("https://angular-course-7f424.firebaseio.com/recipes.json", recipes)
      .subscribe(response => {
        console.log("storeRecipes recipes ", recipes);
      });
  }

  fetchRecipes() {
    // get the latest value and unsubscribe
    return this.http
      .get<Recipe[]>(
        "https://angular-course-7f424.firebaseio.com/recipes.json"
      )
      .pipe(
        map(recipes => {
          return recipes.map(recipe => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : []
            };
          });
        }),
        tap(recipes => this.recipeService.setRecipes(recipes))
      );
  }
}

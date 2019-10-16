import { Recipe } from '../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  constructor() { }

  recipes: Recipe[] = [
    new Recipe("TestName 2", "TestDescription", "https://hips.hearstapps.com/delish/assets/17/37/1505333248-goulash-delish-1.jpg"),
    new Recipe("TestName", "TestDescription", "https://hips.hearstapps.com/delish/assets/17/37/1505333248-goulash-delish-1.jpg"),
  ];

  ngOnInit() {
  }

}

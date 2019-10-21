import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  constructor(private SLService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem(form: NgForm) {
    const values = form.form.value;
    const ingredient = new Ingredient(values.name, values.amount);
    console.log("ingredient ", ingredient);

    this.SLService.addIngredient(ingredient);
  }

}

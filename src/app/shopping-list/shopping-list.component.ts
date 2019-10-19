import { ShoppingListService } from "./shopping-list.service";
import { Ingredient } from "./../shared/ingredient.model";
import {Component, OnDestroy, OnInit} from "@angular/core";
import {Subscription} from "rxjs/index";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"]
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  constructor(private SLService: ShoppingListService) {}

  ingredients: Ingredient[] = [];
  private subscription: Subscription;

  ngOnInit() {
    this.ingredients = this.SLService.getIngredients();
    this.subscription = this.SLService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

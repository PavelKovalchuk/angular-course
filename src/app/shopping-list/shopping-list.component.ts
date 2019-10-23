import { ShoppingListService } from "./shopping-list.service";
import { Ingredient } from "./../shared/ingredient.model";
import {Component, OnDestroy, OnInit} from "@angular/core";
import {Subscription} from "rxjs/index";
import { LoggingService } from '../logging.service';

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"]
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  constructor(private SLService: ShoppingListService, private loggingService: LoggingService) {}

  ingredients: Ingredient[] = [];
  private subscription: Subscription;

  ngOnInit() {
    this.ingredients = this.SLService.getIngredients();
    this.subscription = this.SLService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );

    this.loggingService.printLog("ShoppingListComponent ngOnInit");
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onEditItem(index: number) {
    this.SLService.startedEditing.next(index);
  }
}

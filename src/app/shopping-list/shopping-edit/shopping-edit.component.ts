import { Subscription } from "rxjs/index";
import { Ingredient } from "./../../shared/ingredient.model";
import { Component, OnInit, OnDestroy, ViewChild } from "@angular/core";
import { ShoppingListService } from "../shopping-list.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.css"]
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild("f", { static: false }) SLForm: NgForm;
  constructor(private SLService: ShoppingListService) {}

  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  ngOnInit() {
    this.subscription = this.SLService.startedEditing.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editedItemIndex = index;
        this.editedItem = this.SLService.getIngredient(index);

        this.SLForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        });
      }
    );
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    this.subscription.unsubscribe;
  }

  onSubmit(form: NgForm) {
    const values = form.form.value;
    const ingredient = new Ingredient(values.name, values.amount);
    if (this.editMode) {
      this.SLService.updateIngredient(this.editedItemIndex, ingredient);
    } else {
      this.SLService.addIngredient(ingredient);
    }
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.SLForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.SLService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }
}

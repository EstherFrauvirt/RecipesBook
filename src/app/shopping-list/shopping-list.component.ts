import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShopppingListService } from './shopping-list.service';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients!: Ingredient[];

  subscription!: Subscription;
  constructor(private shoppingListServer: ShopppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListServer.getIngredients();


    this.subscription = this.shoppingListServer.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = [...ingredients];
      }
    )

  }
  onEditIngredient(index: number) {
    this.shoppingListServer.startedEditing.next(index);
  }
}

import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShopppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();
    private recipes: Recipe[] = [
        new Recipe('cookies', 'choco chips cookies', 'https://www.shugarysweets.com/wp-content/uploads/2020/05/chocolate-chip-cookies-baked.jpg', [new Ingredient("flour", 1)]),
        new Recipe('ice cream', 'Bubblegum flavored ice cream', 'https://www.shutterstock.com/image-photo/three-cotton-candy-flavored-ice-600nw-2163919901.jpg', [new Ingredient("eggs", 6)])
    ];
    constructor(private slService: ShopppingListService) { }
    getRecipes() {
        return this.recipes.slice();
    }
    getRecipe(index: number) {
        return this.recipes[index];
    }
    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice())
    }
    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice())
    }
    deleteRecipe(index:number){
        this.recipes.splice(index,1);
        this.recipesChanged.next(this.recipes.slice())
    }

}
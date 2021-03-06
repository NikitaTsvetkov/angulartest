import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";

export class ShoppingListService {
    ingredientListChanged = new EventEmitter<Ingredient[]>()

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
      ];

    getIngredients() {
        return this.ingredients.slice()
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientListChanged.emit(this.getIngredients())
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients)
        this.ingredientListChanged.emit(this.getIngredients())
    }
    
}
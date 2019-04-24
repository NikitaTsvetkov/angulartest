import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter, Injectable } from "@angular/core";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>()
    constructor(private shoppingListService: ShoppingListService) {}
    private recipes: Recipe[] = [
        new Recipe('Huitsy with Gretschka', 
          'Tasty gretschka with erected huitsy', 
          'https://cs9.pikabu.ru/images/big_size_comm/2016-11_3/147911371415352994.jpg', 
          [new Ingredient('Huitsy', 4), 
          new Ingredient('Gretschka', 1)
        ]),
        new Recipe('Serpentine salad', 
          'A simple salad everyone can make', 
          'https://avatars.mds.yandex.net/get-zen_doc/40456/pub_5c0d059744c73500ae9398cf_5c0d05e5006e0000abd78b58/scale_600',
          [new Ingredient('Mayonnaise', 1), 
          new Ingredient('Black pepper peas', 2)
        ])    
      ];


    getRecipes() {
        return this.recipes.slice();
    }
    
    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.shoppingListService.addIngredients(ingredients)
    }

} 
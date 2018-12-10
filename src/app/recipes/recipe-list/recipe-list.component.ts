import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 
      'Just a test', 
      'https://cs9.pikabu.ru/images/big_size_comm/2016-11_3/147911371415352994.jpg', 
      [new Ingredient('Huitsy', 4)]),
    new Recipe('A test recipe', 
      'Just a test2', 
      'https://cs9.pikabu.ru/images/big_size_comm/2016-11_3/147911371415352994.jpg',
      [new Ingredient('Gretschka', 1)])    
  ];

  @Output() recipeSelectedFromList = new EventEmitter<Recipe>()


  constructor() { }

  

  ngOnInit() {
  }

  selectRecipe(recipe: Recipe){
    this.recipeSelectedFromList.emit(recipe)
  }

}

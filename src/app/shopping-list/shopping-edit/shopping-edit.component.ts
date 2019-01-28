import { Component, OnInit, ViewChild, EventEmitter, Output, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;
  @Output() ingredientAddedToList = new EventEmitter<Ingredient>()
  constructor() { }

  ngOnInit() {
  }

  onAddClick(){
    console.log(this.nameInput)
    this.ingredientAddedToList.emit(new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value))
  }
}

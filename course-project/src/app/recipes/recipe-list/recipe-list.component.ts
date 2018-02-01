import { Output } from '@angular/core';
import { Recipe } from './../recipe.model';
import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test Recipe 1', 'This is a test 1', 'https://drop.ndtv.com/albums/COOKS/corngallery/creolespicedcornthumb_640x480.jpg'),
    new Recipe('A test Recipe 2', 'This is a test 2', 'https://drop.ndtv.com/albums/COOKS/corngallery/creolespicedcornthumb_640x480.jpg'),
    new Recipe('A test Recipe 3', 'This is a test 3', 'https://drop.ndtv.com/albums/COOKS/corngallery/creolespicedcornthumb_640x480.jpg'),
  ];

  @Output()
  recipeSelected = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }

  selectRecipe($event) {
    this.recipeSelected.emit($event);
  }

}

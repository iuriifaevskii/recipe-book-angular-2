import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe'

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  recipe = new Recipe('Dummy', 'Dummy', 'http://a-shishkin.ru/assets/images/55gg70%20%20%202007.jpg');

  constructor() { }

  ngOnInit() {
  }

}

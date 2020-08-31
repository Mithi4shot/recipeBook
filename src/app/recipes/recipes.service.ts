import { Injectable } from '@angular/core';
import { Recipe } from '../shared/model/recipe.model';
import { Ingredient } from '../shared/model/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  recipeChanged = new Subject<Recipe[]>();

  /* private recipes: Recipe[] = [
    new Recipe(
      'tasty schnitzel',
      'a super-tasty schnitzel - just awesome!',
      'https://simply-delicious-food.com/wp-content/uploads/2019/09/Chicken-schnitzel-1.jpg',
      [
        new Ingredient('meat', 1),
        new Ingredient('french fries', 20)
      ]
    ),
    new Recipe(
      'big fat burger',
      'what else you need to say?',
      'https://www.girardatlarge.com/wp-content/uploads/2014/02/Burger.jpg',
      [
        new Ingredient('bun', 2),
        new Ingredient('meat', 1)
      ]
    )
  ]; */

  private recipes: Recipe[] = [];

  constructor(private slService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }
  setRecipe(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipeChanged.next(this.recipes.slice());
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());

  }

}

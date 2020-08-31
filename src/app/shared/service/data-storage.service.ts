import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RecipesService } from 'src/app/recipes/recipes.service';
import { Recipe } from '../model/recipe.model';
import { map, tap, take, exhaustMap } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: HttpClient, private recipeService: RecipesService, private authService: AuthService) { }

  storeRecipe() {
    const recipes = this.recipeService.getRecipes();
    return this.http.put('https://ostore-fa0fa.firebaseio.com/recipes.json', recipes);
  }

  fetchRecipe() {
    return this.http.get<Recipe[]>('https://ostore-fa0fa.firebaseio.com/recipes.json').pipe(map(recipes => {
      return recipes.map(recipe => {
        return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] }
      });
    }), tap(recipes => {
      this.recipeService.setRecipe(recipes);
    }))
  }
}

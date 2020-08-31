import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Recipe } from '../shared/model/recipe.model';
import { DataStorageService } from '../shared/service/data-storage.service';
import { Injectable } from '@angular/core';
import { RecipesService } from './recipes.service';

@Injectable({ providedIn: "root" })

export class RecipesResolverService implements Resolve<Recipe[]> {

    constructor(private dataStorageService: DataStorageService, private recipeService: RecipesService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        const recipes = this.recipeService.getRecipes();

        if (recipes.length === 0)
            return this.dataStorageService.fetchRecipe();
        else
            return recipes;
    }
} 
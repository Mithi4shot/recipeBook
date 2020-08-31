import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../shared/model/recipe.model';
import { RecipesService } from '../recipes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];


  constructor(private recipeService: RecipesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.recipeService.recipeChanged.subscribe((recipe: Recipe[]) => {
      this.recipes = recipe;
    });
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}

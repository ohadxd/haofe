// import {Injectable} from '@angular/core';
// import {HttpClient} from '@angular/common/http';
// // import {RecipeService} from '../recipes/recipe.service';
// // import {Recipe} from '../recipes/recipe.model';
// // import {map, tap} from 'rxjs/operators';
// // import {AuthService} from '../auth/auth.service';
//
// @Injectable({providedIn: 'root'})
// export class DataStorageService {
//   constructor(private http: HttpClient, private recipeService: RecipeService, private auth: AuthService) {
//   }
//   url = 'https://ng-complete-guide-ohadcoc-default-rtdb.firebaseio.com/recipes.json';
//
//   dataStorage() {
//     return this.http.put
//     (this.url,
//       this.recipeService.getRecipes()).subscribe(data => {
//       console.log(data);
//     });
//   }
//   fetchData() {
//     return this.http.get<Recipe[]>(this.url).pipe(
//       map(recipes => {
//         return recipes.map(recipe => {
//           return {
//             ...recipe,
//             ingredients: recipe.ingredients ? recipe.ingredients : []
//           };
//         });
//       }),
//       tap(recipes => {
//         this.recipeService.setRecipes(recipes);
//         console.log(this.recipeService.getRecipes());
//       })
//     );
//   }
// }

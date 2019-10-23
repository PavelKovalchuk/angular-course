import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";


const appRoutes: Routes = [
  {
    path: "",
    redirectTo: "/recipes",
    pathMatch: "full"
  },
  {
    path: "recipes",
    loadChildren: "./recipes/recipes.module#RecipesModule"
  },
  {
    path: "shopping-list",
    loadChildren: "./shopping-list/shopping-list.module#ShoppingListModule"
  },
  {
    path: "auth",
    // loadChildren: "./auth/auth.module#AuthModule",
    loadChildren:  () => import('./auth/auth.module').then(m => m.AuthModule)
  }
];

/**
 * Alternative
 * const routes: Routes = [{
  path: 'your-path',
  loadChildren: () => import('./your-module-path/module-name.module').then(m => m.ModuleName)
}];
 */

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {}

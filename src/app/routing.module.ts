import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {path: '', component: MainComponent}
    ],
    // canActivate: [AuthGuard]
  },
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
  },
  {
    path: 'blogs',
    loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
  }
];
@NgModule({

  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
function appRoutes(appRoutes: any,
                   arg1: { preloadingStrategy: typeof PreloadAllModules; }): any[]
  | import("@angular/core").Type<any>
  | import("@angular/core").ModuleWithProviders<{}> {
  throw new Error("Function not implemented.");
}

function redirectLoggedInTo(arg0: string[]) {
  throw new Error("Function not implemented.");
}

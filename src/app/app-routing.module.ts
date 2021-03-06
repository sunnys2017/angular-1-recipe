import { NgModule } from '@angular/core';
import { Routes, RouterModule,PreloadAllModules } from '@angular/router';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
	//{ path: '', redirectTo: '/recipes', pathMatch:'full'},
	{ path: '', component: HomeComponent },
	{ path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule'}, 
	//lazy loading: module-tobe-loading # className
	{ path: 'shopping-list', component: ShoppingListComponent },
	{ path: 'signup', component: SignupComponent },
	{ path: 'signin', component: SigninComponent }
]

@NgModule({
	//preloading strategy, basic preload all lazy loading modules 
	// after app loaded.

	imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules} )], 

	/*
	we should pass the appRoute to configure this router module that angular ships with. with that now, our router now configured
	and then get this module into our main module by export this regular configured module
	*/
	exports: [RouterModule]
})
export class AppRoutingModule {
	

}
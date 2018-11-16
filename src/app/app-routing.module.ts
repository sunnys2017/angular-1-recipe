import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthGuard } from './auth/auth-guard.service';

const appRoutes: Routes = [
	{ path: '', redirectTo: '/recipes', pathMatch:'full'},
	{ path: 'recipes', component: RecipesComponent, children: [
		{ path: '', component: RecipeStartComponent },
		{ path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard] },
		{ path: ':id', component: RecipeDetailComponent }, 
		//the url order matters!! video155
		{ path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard] }
	]},
	{ path: 'shopping-list', component: ShoppingListComponent },
	{ path: 'signup', component: SignupComponent },
	{ path: 'signin', component: SigninComponent }
]

@NgModule({
	imports: [RouterModule.forRoot(appRoutes)], 
	/*we should pass the appRoute to configure this router module that angular ships with. with that now, our router now configured
	and then get this module into our main module by export this regular configured module
	*/
	exports: [RouterModule]
})
export class AppRoutingModule {
	

}
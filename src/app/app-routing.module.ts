import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
	{
		path: "home",
		loadChildren: () =>
			import("./pages/home/home.module").then((m) => m.HomePageModule),
	},
	{
		path: "",
		redirectTo: "home",
		pathMatch: "full",
	},
	{
		path: "auth",
		loadChildren: () =>
			import("./pages/auth/auth.module").then((m) => m.AuthPageModule),
	},
  {
    path: 'asamblea',
    loadChildren: () => import('./pages/asamblea/asamblea.module').then( m => m.AsambleaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

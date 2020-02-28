import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
	// exakt "/blog"
	{ path: 'blog', component: BlogComponent, pathMatch: 'full' },

	// vanlig felstavning
	{ path: 'blogg', redirectTo: '/blog' },
	{ path: 'blogga', redirectTo: '/blog' },

	{ path: 'about', component: AboutComponent },

	// { path: 'blog', component: RemovedArticleComponent },

	{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }

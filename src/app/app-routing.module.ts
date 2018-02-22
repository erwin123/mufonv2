import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BundlebarComponent } from './bundlebar/bundlebar.component';

const appRoutes: Routes = [
  { path: 'bundle', component: BundlebarComponent},
  

  // otherwise redirect to home
  { path: '**', redirectTo: 'bundle' }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes, { useHash: true }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { NotfoundComponent } from './core/notfound/notfound.component';

const routes: Routes = [
{
  path: '',
  component: LayoutComponent,
  children: [
    {
      path: '',
      redirectTo: 'inicio',
      pathMatch: 'full'
    },
    {
      path: 'inicio',
      loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
    },
    {
      path: 'curso',
      loadChildren: () => import('./modules/course/course.module').then(m => m.CourseModule)
    },
    {
      path: 'contactenos',
      loadChildren: () => import('./modules/contact/contact.module').then(m => m.ContactModule)
    },
    {
      path: 'administrador',
      loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
    },
    {
      path: 'ingresar',
      loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
    }

  ]
},
{
  path: '**',
  component: NotfoundComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

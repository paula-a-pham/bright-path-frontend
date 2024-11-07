import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../app/modules/guest/guest.module').then((m) => m.GuestModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('../app/modules/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'student',
    loadChildren: () =>
      import('../app/modules/student/student.module').then(
        (m) => m.StudentModule
      ),
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

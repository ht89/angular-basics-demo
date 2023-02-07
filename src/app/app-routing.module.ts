import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigComponent } from './config/config.component';
import { FirstComponent } from './first/first.component';
import { HostContextExampleComponent } from './host-context-example/host-context-example.component';
import { ChildComponent } from './second/child/child.component';
import { SecondComponent } from './second/second.component';

const routes: Routes = [
  { path: 'first-component', component: FirstComponent },
  {
    path: 'second-component',
    component: SecondComponent,
    children: [{ path: ':id', component: ChildComponent }],
  },
  { path: 'config', component: ConfigComponent },
  { path: 'host-context', component: HostContextExampleComponent },
  { path: '', redirectTo: '/first-component', pathMatch: 'full' }, // redirect to `first-component`
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

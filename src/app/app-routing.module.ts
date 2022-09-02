import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StudioComponent } from './studio/studio.component';
import { HomepageComponent } from './homepage/homepage.component';
import { StudioUploadComponent } from './studio/studio-upload/studio-upload.component';
import { StudioLivestreamComponent } from './studio/studio-livestream/studio-livestream.component';
import { CredentialComponent } from './credential/credential.component';
import { LoginComponent } from './credential/login/login.component';
import { RegisterComponent } from './credential/register/register.component';
import { MyguardGuard } from './myguard.guard';
import { MyguardoneGuard } from './myguardone.guard';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'studio', component: StudioComponent, children: [
    {path: 'studio-upload', component: StudioUploadComponent, canActivate:[MyguardGuard]},
    {path: 'studio-live', component: StudioLivestreamComponent, canActivate:[MyguardoneGuard]}
  ]},
  {path: 'credential', component: CredentialComponent, children: [
    {path: 'login', component: LoginComponent},
    {path: 'register', component:RegisterComponent}
  ]}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GrupaComponent } from './components/grupa/grupa.component';
import { SmerComponent } from './components/smer/smer.component';
import { StudentComponent } from './components/student/student.component';
import { ProjekatComponent } from './components/projekat/projekat.component';

import { HomeComponent } from './components/core/home/home.component';
import { AuthorComponent } from './components/core/author/author.component';
import { HelpComponent } from './components/core/help/help.component';

const routes: Routes = [  
{path: 'grupa', component: GrupaComponent},
{path: 'smer', component: SmerComponent},
{path: 'student', component: StudentComponent},
{path: 'projekat', component: ProjekatComponent},
{path: 'home', component: HomeComponent},
{path: 'author', component: AuthorComponent},
{path: 'help', component: HelpComponent},
{path: '', redirectTo: 'home', pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const declarations = [NotFoundComponent];
const imports = [
  CommonModule,
  HttpClientModule,
  FormsModule,
  ReactiveFormsModule,
];

@NgModule({
  declarations: declarations,
  imports: imports,
  exports: [...declarations, ...imports],
})
export class SharedModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const declarations = [NotFoundComponent];
const imports = [CommonModule, NgbModule];

@NgModule({
  declarations: declarations,
  imports: imports,
  exports: [...declarations, ...imports],
})
export class SharedModule {}

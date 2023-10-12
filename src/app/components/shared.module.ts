import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { LoaderComponent } from "./loader/loader.component";

const exportedComponents = [
  HeaderComponent,
  FooterComponent,
  LoaderComponent
];
const exportedModules = [
  ReactiveFormsModule,
  FormsModule,
];

@NgModule({
  declarations: [
    ...exportedComponents,
  ],
  imports: [
    ...exportedModules,
    CommonModule,
  ],
  exports: [
    ...exportedComponents,
    ...exportedModules,
  ],
  providers: [],
})
export class SharedModule {
}

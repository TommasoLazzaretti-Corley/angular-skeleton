import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { LoaderComponent } from "./loader/loader.component";
import { ModalComponent } from "./modal/modal.component";
import { LottieAnimationComponent } from './lottie-animation/lottie-animation.component';
import { LottieComponent } from "ngx-lottie";

const exportedComponents = [
  HeaderComponent,
  FooterComponent,
  LoaderComponent,
  ModalComponent,
  LottieAnimationComponent
];
const exportedModules = [
  ReactiveFormsModule,
  FormsModule,
];

@NgModule({
  declarations: [
    ...exportedComponents,
    LottieAnimationComponent,
  ],
  imports: [
    ...exportedModules,
    CommonModule,
    LottieComponent,
  ],
  exports: [
    ...exportedComponents,
    ...exportedModules,
  ],
  providers: [],
})
export class SharedModule {
}

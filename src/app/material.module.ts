import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
    exports: [
        MatCheckboxModule,
        MatRadioModule,
        MatFormFieldModule,
        MatSelectModule
    ]
})
export class MaterialModules { }
import { MatButtonModule } from '@angular/material';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';


const MaterialComponents = [ MatButtonModule, MatButtonToggleModule,MatIconModule,MatBadgeModule];
@NgModule({
  declarations: [],
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }

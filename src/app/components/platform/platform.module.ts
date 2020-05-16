import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination'; 
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { PlatformRoutingModule } from './platform-routing.module';

import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { AuthGuard } from "../../guards/auth-guard.service";


import { PlatformComponent } from './platform.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { UnitComponent } from './unit/unit.component';
import { NewUnitComponent } from './unit/new-unit/new-unit.component';
import { UpdateUnitComponent } from './unit/update-unit/update-unit.component';
import { DeleteUnitComponent } from './unit/delete-unit/delete-unit.component';
import { ProductComponent } from './product/product.component';
import { NewProductComponent } from './product/new-product/new-product.component';
import { DeleteProductComponent } from './product/delete-product/delete-product.component';
import { UpdateProductComponent } from './product/update-product/update-product.component';
import { ProductSupplierComponent } from './product/product-supplier/product-supplier.component';
import { NewProductSupplierComponent } from './product/new-product-supplier/new-product-supplier.component';
import { DeleteProductSupplierComponent } from './product/delete-product-supplier/delete-product-supplier.component';
import { SupplierComponent } from './supplier/supplier.component';
import { NewSupplierComponent } from './supplier/new-supplier/new-supplier.component';
import { UpdateSupplierComponent } from './supplier/update-supplier/update-supplier.component';
import { DeleteSupplierComponent } from './supplier/delete-supplier/delete-supplier.component';
import { StockComponent } from './stock/stock.component';
import { MoveComponent } from './move/move.component';
import { NewMoveComponent } from './move/new-move/new-move.component';

@NgModule({
  imports: [
    CommonModule,
    PlatformRoutingModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added,
    NgxPaginationModule,
    FormsModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule
    
  ],
  declarations: [
    SidebarComponent,
    HeaderComponent,
    FooterComponent, 
    PlatformComponent,
    ProfileComponent,
    HomeComponent,
    UnitComponent,
    NewUnitComponent,
    UpdateUnitComponent,
    DeleteUnitComponent,
    ProductComponent,
    NewProductComponent,
    DeleteProductComponent,
    UpdateProductComponent,
    ProductSupplierComponent,
    NewProductSupplierComponent,
    DeleteProductSupplierComponent,
    SupplierComponent,
    NewSupplierComponent,
    UpdateSupplierComponent,
    DeleteSupplierComponent,
    StockComponent,
    MoveComponent,
    NewMoveComponent
  ],
  providers: [AuthGuard]
})
export class PlatformModule { }

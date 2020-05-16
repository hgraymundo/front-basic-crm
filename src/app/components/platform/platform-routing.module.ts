import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlatformComponent } from './platform.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from '../../guards/auth-guard.service';
import { UnitComponent } from './unit/unit.component';
import { NewUnitComponent } from './unit/new-unit/new-unit.component';
import { UpdateUnitComponent } from './unit/update-unit/update-unit.component';
import { DeleteUnitComponent } from './unit/delete-unit/delete-unit.component';
import { ProductComponent } from './product/product.component';
import { NewProductComponent } from './product/new-product/new-product.component';
import { UpdateProductComponent } from './product/update-product/update-product.component';
import { DeleteProductComponent } from './product/delete-product/delete-product.component';
import { SupplierComponent } from './supplier/supplier.component';
import { NewSupplierComponent } from './supplier/new-supplier/new-supplier.component';
import { UpdateSupplierComponent } from './supplier/update-supplier/update-supplier.component';
import { DeleteSupplierComponent } from './supplier/delete-supplier/delete-supplier.component';
import { StockComponent } from './stock/stock.component';

const platformRoutes: Routes = [
    { path: 'platform', component: PlatformComponent,
      children:[
        { path: 'home', component: HomeComponent },
        { path: 'profile', component: ProfileComponent },
        
        { path: 'unit', component: UnitComponent },
        { path: 'new-unit', component: NewUnitComponent },
        { path: 'update-unit/:id', component: UpdateUnitComponent },
        { path: 'delete-unit/:id', component: DeleteUnitComponent},

        { path: 'product', component: ProductComponent },
        { path: 'new-product', component: NewProductComponent },
        { path: 'update-product/:id', component:  UpdateProductComponent },
        { path: 'delete-product/:id', component: DeleteProductComponent },

        { path: 'supplier', component: SupplierComponent },
        { path: 'new-supplier', component: NewSupplierComponent },
        { path: 'update-supplier/:id', component:  UpdateSupplierComponent },
        { path: 'delete-supplier/:id', component: DeleteSupplierComponent },

        { path: 'stock', component: StockComponent },







      ]
    },
];

@NgModule({
  imports: [
    RouterModule.forChild(platformRoutes)
  ],
  exports: [RouterModule],
  
})

export class PlatformRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactHomeComponent } from './contact-home/contact-home.component';
import { ProductsHomeComponent } from './products-home/products-home.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ContactUpdateComponent } from './contact-update/contact-update.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { ContactNewComponent } from './contact-new/contact-new.component';
import { ProductNewComponent } from './product-new/product-new.component';
import { ChartsComponent } from './charts/charts.component';

const routes: Routes = [
  {path: '', component: ChartsComponent},
  {path: 'contacts', component: ContactHomeComponent},
  {path: 'products', component: ProductsHomeComponent},
  {path: 'contacts/new', component: ContactNewComponent},
  {path: 'products/new', component: ProductNewComponent},
  {path: 'contacts/:id', component: ContactDetailComponent},
  {path: 'products/:id', component: ProductDetailComponent},
  {path: 'contacts/edit/:id', component: ContactUpdateComponent},
  {path: 'products/edit/:id', component: ProductUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

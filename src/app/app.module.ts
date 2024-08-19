import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutesModule } from './app.routes'; // Update import to match file name
import { AppComponent } from './app.component'; // Add AppComponent
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { RouterModule} from "@angular/router";

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutesModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      { path: 'add-product', component: ProductFormComponent },
      { path: 'edit-product/:id', component: ProductFormComponent },
      { path: '', redirectTo: '/products', pathMatch: 'full' },
      { path: '**', redirectTo: '/products' }
    ])
  ],
  providers: [],
})
export class AppModule { }

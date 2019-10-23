import { AppRoutingModule } from "./app-routing.module";
import { HeaderComponent } from "./header/header.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    // RecipesModule, // Lazy loaded module
   // ShoppingListModule,  // Lazy loaded module
    SharedModule,
    CoreModule,
   // AuthModule // Lazy loaded module
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

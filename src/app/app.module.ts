import { NgModule, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';

import { environment } from 'src/environments/environment';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatBadgeModule } from '@angular/material/badge';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { UserComponent } from './pages/user/user.component';
import { AdminComponent } from './pages/admin/admin.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainComponent } from './components/main/main.component';
import { DialogBoxComponent } from './components/dialog-box/dialog-box.component';
import { ModalItemComponent } from './components/modal-item/modal-item.component';
import { SocialButtonsComponent } from './components/social-buttons/social-buttons.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AccordionItemComponent } from './components/accordion-item/accordion-item.component';
import { CartComponent } from './components/cart/cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminModalHeaderComponent } from './components/admin-modal-header/admin-modal-header.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AdminComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    MainComponent,
    DialogBoxComponent,
    ModalItemComponent,
    SocialButtonsComponent,
    AccordionItemComponent,
    CartComponent,
    CartItemComponent,
    LoginComponent,
    AdminModalHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebase),
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatExpansionModule,
    MatDividerModule,
    MatDialogModule,
    MatButtonToggleModule,
    MatInputModule,
    MatBadgeModule,
    MatTabsModule,
    MatSidenavModule,
    MatFormFieldModule,
    ScrollingModule,
  ],
  providers: [
    importProvidersFrom([
      provideFirebaseApp(() => initializeApp(environment.firebase)),
      provideFirestore(() => getFirestore()),
    ]),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

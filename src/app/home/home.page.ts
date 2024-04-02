import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';


// import { IonHeader, IonToolbar, IonTitle, IonContent,IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  text="Default Text";
  constructor(
    private router: Router
  ) {}
  changeText(){
    this.text="Text with change event";
  }
  login(){
    this.router.navigate(['/login']);

  }
  register(){
    this.router.navigate(['/register']);

  }
}

import { Component, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent {
  mp = new Map();
  selected_button: any = 'Account';
  // @Input() categoryId: string = '';
  constructor(private router: Router) {
    this.mp.set('Account', true);
    this.mp.set('Privacy', false);
    this.mp.set('Notifications', false);
  }

  buttonClick(formName: any) {
    for (let [key] of this.mp) {
      this.mp.set(key, false);
    }
    let buttons = <HTMLInputElement>document.getElementById(formName);
    buttons.checked = true;
    this.selected_button = formName;
    this.mp.set(formName, true);
  }

  setTab(tabname: string) {
    this.router.navigate([`/${tabname}`]);
  }
}

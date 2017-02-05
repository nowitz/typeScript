import { Component } from '@angular/core';

@Component({
    templateUrl: 'app/home/welcome.component.html' //COMMENT definovani HTML sablony
})
export class WelcomeComponent {
    public pageTitle: string = 'Welcome';
}

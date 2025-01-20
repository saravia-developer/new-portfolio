import { Component } from '@angular/core';
import { listContact } from './utils/list-contact-me'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  listContactMe = listContact
}

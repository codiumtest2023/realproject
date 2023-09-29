import { Component } from '@angular/core';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-g-error',
  templateUrl: './g-error.component.html',
  styleUrls: ['./g-error.component.scss']
})
export class GErrorComponent {

  constructor(public errorService: ErrorService){

  } 

}

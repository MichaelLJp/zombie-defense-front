import { Component,Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-ui-input',
  standalone: false,
  templateUrl: './ui-input.html',
  styleUrl: './ui-input.scss',
})
export class UiInputComponent {

@Input() label: string = '';
@Input() placeholder: string = '';
@Input() control!: FormControl;

@Input() type:String = 'number'
}

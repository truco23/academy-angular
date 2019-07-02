import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  
  title = 'Genilson';
  number = 0;
  interval = null;
  items = ['1','2','3','4','5']

  ngOnInit(): void {
    
  }
  newItem() {

    let text = prompt('Digite um valor');
    console.log(text);

    this.items.push(text);
    
  }
}

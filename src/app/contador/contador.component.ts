import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  constructor() { }

  contador = 0;
  interval = null;
  items = ['1','2','3','4','5']

  ngOnInit() {
    
    this.init();
  }
  
  init() {
    this.interval = setInterval(() => {
      this.contador += 1;
    }, 1000);
  }

  stop() {
    console.log(this.contador);
    clearInterval(this.interval)
  }

}

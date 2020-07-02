import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  date: number;
  nombre = 'Nil';
  apellido = 'De Marco';

  constructor() {
    this.date = new Date().getFullYear()
  }

  ngOnInit(): void {
  }

}

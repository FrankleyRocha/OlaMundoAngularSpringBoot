import { Component, OnInit } from '@angular/core';
import { OlamundoService } from '../olamundo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nome : String = "";

  constructor(
    private olaMundoService: OlamundoService
  ) { }

  ngOnInit(): void {

    let nome = "Mundo";

    this.olaMundoService.getOla(nome).subscribe( (data: any) => {
      //console.log(data);
      this.nome = data.msg;
    });

  }

}

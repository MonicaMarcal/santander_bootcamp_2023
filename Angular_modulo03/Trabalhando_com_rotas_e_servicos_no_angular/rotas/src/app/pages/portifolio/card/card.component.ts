import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{

  constructor(private parametrizador: ActivatedRoute, private navegador:Router){
     //http://localhost:4200/portfolio/{1}
      this.parametrizador.params.subscribe(
        res => console.log(res)
      )


      //http://localhost:4200/portfolio/1?{name=monica&token=123}
       this.parametrizador.queryParams.subscribe(
         res => console.log(res)
    )
  }
  ngOnInit(): void {
    //redidireciona apos 5 segundos para a pagina principal
      setInterval(()=>{
    this.navegador.navigate(['/'])
    }, 5000)
  }

}

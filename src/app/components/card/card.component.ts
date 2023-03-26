import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ImovelService } from 'src/app/services/imovel.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input('imovel') imovel: any

  constructor(private imovelService: ImovelService, private route: Router) { }

  ngOnInit(): void {
  }

  /*deleteImovel(id: string){
    this.imovelService.deleteImovel(id).subscribe({
      next:(res:any)=>{      
        console.log(res)
      },
      error:(error:any)=>{
        console.log(error)
      }
    })
  }*/

  navigationImovelPage(id: string){
    this.route.navigate([
      '/imovel-page',
      { imovel: JSON.stringify(id) },
    ]);
  }

}

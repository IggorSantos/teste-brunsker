import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImovelService } from 'src/app/services/imovel.service';
import { Imovel } from 'src/app/models/imovel.model';

@Component({
  selector: 'app-imovel-page',
  templateUrl: './imovel-page.component.html',
  styleUrls: ['./imovel-page.component.css']
})
export class ImovelPageComponent implements OnInit {
  imovelId: number = 0;
  imovel: Imovel | any;

  constructor(
    private route: ActivatedRoute,
    private imovelService: ImovelService,
    private router: Router ) { }

  ngOnInit(): void {
    this.imovelId = JSON.parse(this.route.snapshot.params['imovel']);
    this.getImovel()
  }

  getImovel(){
    this.imovelService.getImovelById(this.imovelId).subscribe({
      next:(res:any)=>{ 
        this.imovel = res   
      },
      error:(error:any)=>{
        console.log(error)
      }
    })
  }

  deleteImovel(){
    this.imovelService.deleteImovel(this.imovelId).subscribe({
      next:(res:any)=>{      
        console.log(res)
        this.router.navigate(['/home'])
      },
      error:(error:any)=>{
        console.log(error)
      }
    })
  }

}

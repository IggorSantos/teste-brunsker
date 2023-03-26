import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImovelService } from 'src/app/services/imovel.service';
import { Imovel } from 'src/app/models/imovel.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  imoveis: Imovel[] = [];

  constructor(private imovel: ImovelService, private router: Router) { }

  ngOnInit(): void {     
      this.getImoveis()
      //this.createImovel()
      //this.deleteImovel()
      //this.updateImovel()
  }
  
    getImoveis(){
      this.imovel.getImovel().subscribe({
        next:(res:any)=>{        
          this.imoveis = res
          console.log(this.imoveis)
        },
        error:(error:any)=>{
          console.log(error)
        }
      })
    }

    navigate(){
      this.router.navigate(['/create-imovel'])
    }

    createImovel(){
      let imovel = {
          "id": 5,
          "nome": "Exemplo create",
          "imagem": "https://img.olx.com.br/images/01/017375733730956.jpg"        
      }

      this.imovel.createImovel(imovel).subscribe({
        next:(res:any)=>{      
          console.log(res)
        },
        error:(error:any)=>{
          console.log(error)
        }
      })
    }

   /* updateImovel(){
      let imovel = {
        "id": 3,
        "nome": "Exemplo create update",
        "imagem": "https://img.olx.com.br/images/01/017375733730956.jpg"        
    }
      this.imovel.updateImovel(imovel).subscribe({
        next:(res:any)=>{      
          console.log(res)
        },
        error:(error:any)=>{
          console.log(error)
        }
      })
    }*/

    deleteImovel(){
      this.imovel.deleteImovel(5).subscribe({
        next:(res:any)=>{      
          console.log(res)
        },
        error:(error:any)=>{
          console.log(error)
        }
      })
    }
  }



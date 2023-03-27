import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImovelService } from 'src/app/services/imovel.service';
import { Imovel } from 'src/app/models/imovel.model';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  imovelSearch: string = '';
  imoveis: Imovel[] = [];
  selectedImoveis: Imovel[] = [];  

  constructor(
    private route: ActivatedRoute,
    private imovelService: ImovelService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getImoveis()
    this.imovelSearch = JSON.parse(this.route.snapshot.params['search']);
    this.getSelectedImoveis()
  }

  getImoveis(){
    this.imovelService.getImovel().subscribe({
      next:(res:any)=>{        
        this.imoveis = res
        console.log(this.imoveis)
      },
      error:(error:any)=>{
        console.log(error)
      }
    })
  }

  async getSelectedImoveis(){
    let responseJson = ''                 
          const url = await fetch(`http://viacep.com.br/ws/${this.imovelSearch}/json/`)
          if(url.ok){
            responseJson = await url.json() 
            console.log(responseJson)   
            this.compareAddress(responseJson)              
          }else{
            console.log(responseJson)            
          } 
  }

  compareAddress(address: any){
    this.imoveis.forEach((imovel: Imovel) => {
      if(imovel.cidade == address.localidade){
        this.selectedImoveis.push(imovel)
      }
    })
    console.log(this.selectedImoveis)
  }

}

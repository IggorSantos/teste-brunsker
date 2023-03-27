import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ImovelService } from 'src/app/services/imovel.service';
import { Imovel } from 'src/app/models/imovel.model';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  form: FormGroup | any;
  imoveis: Imovel[] = [];
  selectedImoveis: Imovel[] = [];  

  constructor(
    private imovel: ImovelService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {     
      this.getImoveis()
      this.buildForm()
  }

  buildForm(){
    this.form = this.formBuilder.group({
      search: [, Validators.compose([
        Validators.required        
      ])],
    });
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

    async search(){
      if(this.form.value.search != null){
        this.router.navigate(['search', { search: this.form.value.search }]);
        /*let responseJson = ''
        console.log(this.form.value.search)          
          const url = await fetch(`http://viacep.com.br/ws/${this.form.value.search}/json/`)
          if(url.ok){
            responseJson = await url.json()    
            this.compareAddress(responseJson)              
          }else{
            console.log(responseJson)            
          }   */  
      }else{
        Swal.fire({
          title: 'Digite um CEP!',          
          icon: 'warning',
          confirmButtonText: 'OK'
        })
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



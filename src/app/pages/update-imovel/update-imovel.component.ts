import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ImovelService } from 'src/app/services/imovel.service';
import { Imovel } from 'src/app/models/imovel.model';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-update-imovel',
  templateUrl: './update-imovel.component.html',
  styleUrls: ['./update-imovel.component.css']
})
export class UpdateImovelComponent implements OnInit {
  form: FormGroup | any;
  imovelId: number = 0;
  imovel: Imovel | any;

  constructor(
    private route: ActivatedRoute,
    private imovelService: ImovelService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.buildForm()
    this.imovelId = JSON.parse(this.route.snapshot.params['imovel']);
    this.getImovel()
  }

  buildForm(){
    this.form = this.formBuilder.group({
      nome: [, Validators.compose([
        Validators.required        
      ])],
      imagem: [, Validators.compose([
        Validators.required
      ])]
    });
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

  updateImovel(){  
    this.imovelService.updateImovel(this.imovelId,this.form.value).subscribe({
      next:(res:any)=>{    
        console.log(res)
        Swal.fire({
          title: 'Imovel atualizado!',          
          icon: 'success',
          confirmButtonText: 'OK'
        })
        this.router.navigate(['/home'])
      },
      error:(error:any)=>{
        console.log(error)
      }
    })
  }

}

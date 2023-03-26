import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ImovelService } from 'src/app/services/imovel.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-create-imovel',
  templateUrl: './create-imovel.component.html',
  styleUrls: ['./create-imovel.component.css']
})
export class CreateImovelComponent implements OnInit {
  form: FormGroup | any;

  constructor(private formBuilder: FormBuilder,
              private imovelService: ImovelService,
              private router: Router) { }

  ngOnInit(): void {
    this.buildForm()
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

  submit(){
    this.imovelService.createImovel(this.form.value).subscribe({
      next:(res:any)=>{      
        console.log(res)
        Swal.fire({
          title: 'Imovel criado!',          
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

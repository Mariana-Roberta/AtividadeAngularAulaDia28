import { Component, OnInit } from '@angular/core';
import { FormularioService } from "../../services/formulario.service";
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from "@angular/router";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  formularioForm: FormGroup;
  form: any[] = [];

  constructor(private fb: FormBuilder, private formularioService: FormularioService) {
    this.formularioForm = this.fb.group({
      nome: ['', [Validators.required]],
      idade: [null, [Validators.required, Validators.min(0)]]
    });
   }

  adicionarFormulario(): void {
    /*if (this.formularioForm.valid) {
      this.formularioService.addFormulario(this.formularioForm.value);

    }*/

    if (this.formularioForm.valid) {
      this.formularioService.addFormulario(this.formularioForm.value).subscribe(
        (response: any) => {
          console.log('Usuário registrado com sucesso!', response);
          this.form.push(response);
        },
        (error: any) => {
          console.error('Erro ao registrar usuário', error);
        }
      );
    } else {
      console.log('Formulário inválido. Por favor, corrija os campos destacados.');
    }
  }



  /*formulario: Formulario = { id: 0, nome: '', idade: 0 };

  constructor(
    private formularioService: FormularioService,
    private router: Router
  ) {}

  adicionarFormulario(): void {
    if (!this.formulario.nome || this.formulario.idade <= 0) {
      alert('Por favor, preencha todos os campos corretamente.');
      return;
    }
    this.formulario.id = this.formularioService.getFormularios().length ? Math.max(...this.pessoaService.getFormularios().map(p => p.id)) + 1 : 1;
    this.formularioService.addFormulario(this.pessoa);
    this.router.navigate(['/formulario/listaFormularios']);
  }*/
}

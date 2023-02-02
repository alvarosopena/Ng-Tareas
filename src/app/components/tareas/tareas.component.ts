import { Component } from '@angular/core';
import { Tarea } from 'src/app/models/Tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent {
  listaTareas: Tarea [] = []
  nombreTarea = "";

  agregarTarea(){
    //Crear un objeto tarea
    if (!this.nombreTarea || this.nombreTarea === "") return;
    const tarea: Tarea = {
      nombre: this.nombreTarea,
      estado: false
    }

    //Agregar el objeto tarea al array
    this.listaTareas.push(tarea)

    //Reset input
    this.nombreTarea = "";
  }

  eliminarTarea(index:number):void {
    this.listaTareas.splice(index,1)
  }

  actualizarTarea(tarea:Tarea, index:number): void {
    this.listaTareas[index].estado = !tarea.estado
  }

}

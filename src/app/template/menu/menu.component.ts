import { MenuItem } from 'primeng/api';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input('titulo-pagina') tituloPagina: string = '';
  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.getMenu();
  }


  async getMenu() {

    this.items = [
      {
        label: 'Home',
        icon: "pi pi-home",
        routerLink: '/'
      },
      {
          label: 'Cadastros',
          icon: 'pi pi-plus',
          items: [
            {label: 'Pessoas', icon: 'pi pi-user-plus'},
            {label: 'Livros', icon: 'pi pi-book'},
            {label: 'Autores', icon: 'pi pi-user-edit',"routerLink": '/autores'}
          ]
      },
      {
          label: 'Edit',
          icon: 'pi pi-fw pi-pencil',
          items: [
              {label: 'Delete', icon: 'pi pi-fw pi-trash'},
              {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
          ]
      },
      {
        label: 'Sair', style: {'margin-left': 'auto'},
        icon: "pi pi-power-off",
        routerLink: '/login',

      }
  ];



  }

}

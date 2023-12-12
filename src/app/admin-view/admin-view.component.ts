import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['../main-page/main-page.component.css']
})
export class AdminViewComponent {
  customData: any;
  showRegisterComponent = false;
  showConsultarClientesComponent = true;
  showAltaVehiculoComponent = false;
  showVehiculosComponent = false;
  showParametrosComponent = false;
  showRegisterMaintenanceComponent = false;
  showFacturacionComponent = false;
  showRegisterAdmin() {
    this.showRegisterComponent = true;
    this.showConsultarClientesComponent = false;
    this.showAltaVehiculoComponent = false;
    this.showVehiculosComponent = false;
    this.showRegisterMaintenanceComponent = false;
    this.showParametrosComponent = false;
    this.showFacturacionComponent = false;
 }
}

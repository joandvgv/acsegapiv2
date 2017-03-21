import { Injectable} from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class DataService implements CanActivate{
  baseUrl = 'https://acseg.herokuapp.com';


  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });
  
  constructor(private http: Http, private router: Router) { }

   getPeopleLogs(): Observable<any> {
    return this.http.get('https://acseg.herokuapp.com/api/logs/persona').map(res => res.json());
  }

  getMonthlyUsers(): Observable<any> {
    return this.http.get('https://acseg.herokuapp.com/api/logs/month').map(res => res.json());
  }

  getHourlyUsers(): Observable<any> {
    return this.http.get('https://acseg.herokuapp.com/api/logs/hour').map(res => res.json());
  }
   getVehicleLogs(): Observable<any> {
    return this.http.get('https://acseg.herokuapp.com/api/logs/vehiculo').map(res => res.json());
  }

     getAtlantico(): Observable<any> {
    return this.http.get('https://acseg.herokuapp.com/api/statistics/psede/Atlantico').map(res => res.json());
  }
    getVillaAsia(): Observable<any> {
    return this.http.get('https://acseg.herokuapp.com/api/statistics/psede/Villa Asia').map(res => res.json());
  }
     getInformatica(): Observable<any> {
    return this.http.get('https://acseg.herokuapp.com/api/statistics/pcarrera/Informatica').map(res => res.json());
  }
    getContaduria(): Observable<any> {
    return this.http.get('https://acseg.herokuapp.com/api/statistics/pcarrera/Contaduría').map(res => res.json());
  }
    getFiscales(): Observable<any> {
    return this.http.get('https://acseg.herokuapp.com/api/statistics/pcarrera/Cs.Fiscales').map(res => res.json());
  }
    getIndustrial(): Observable<any> {
    return this.http.get('https://acseg.herokuapp.com/api/statistics/pcarrera/Industrial').map(res => res.json());
  }

    getPercentIndustrial(): Observable<any> {
    return this.http.get('https://acseg.herokuapp.com/api/statistics/pcarrerap/Industrial').map(res => res.json());
  }

      getPercentFiscales(): Observable<any> {
    return this.http.get('https://acseg.herokuapp.com/api/statistics/pcarrerap/Cs.Fiscales').map(res => res.json());
  }

      getPercentContaduria(): Observable<any> {
    return this.http.get('https://acseg.herokuapp.com/api/statistics/pcarrerap/Contaduría').map(res => res.json());
  }

      getPercentInformatica(): Observable<any> {
    return this.http.get('https://acseg.herokuapp.com/api/statistics/pcarrerap/Informatica').map(res => res.json());
  }

      getVehiclePercentIndustrial(): Observable<any> {
    return this.http.get('https://acseg.herokuapp.com/api/statistics/vcarrerap/Industrial').map(res => res.json());
  }

      getVehiclePercentFiscales(): Observable<any> {
    return this.http.get('https://acseg.herokuapp.com/api/statistics/vcarrerap/Cs.Fiscales').map(res => res.json());
  }

      getVehiclePercentContaduria(): Observable<any> {
    return this.http.get('https://acseg.herokuapp.com/api/statistics/vcarrerap/Contaduria').map(res => res.json());
  }

      getVehiclePercentInformatica(): Observable<any> {
    return this.http.get('https://acseg.herokuapp.com/api/statistics/vcarrerap/Informatica').map(res => res.json());
  }


     getTotalVehicles(): Observable<any> {
    return this.http.get('https://acseg.herokuapp.com/api/statistics/onCampus/vehicles').map(res => res.json());
  }


     getTotalPeople(): Observable<any> {
    return this.http.get('https://acseg.herokuapp.com/api/onCampus/count').map(res => res.json());
  }

    getVehiclesInformatica(){
      return this.http.get('https://acseg.herokuapp.com/api/statistics/vcarrera/Informatica').map(res => res.json());

    }

    getVehiclesContaduria(){
      return this.http.get('https://acseg.herokuapp.com/api/statistics/vcarrera/Contaduria').map(res => res.json());
    }

    getVehiclesFiscales(){
      return this.http.get('https://acseg.herokuapp.com/api/statistics/vcarrera/Cs.Fiscales').map(res => res.json());
    }

     getVehiclesIndustrial(){
      return this.http.get('https://acseg.herokuapp.com/api/statistics/vcarrera/Industrial').map(res => res.json());
    }


    login(username: string, password: string) {
        return this.http.post('https://acseg.herokuapp.com/api/authuser', { username: username, password: password })
            .map((response: Response) => {
                let user = response.json();
                if (user && (user.authsucess="true")) {
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.router.navigate(['/home'])
                }
            });
    }

    logout() {
        localStorage.removeItem('currentUser');
    }


    isAuthenticated(): boolean{
      var aValue = localStorage.getItem('currentUser');
      console.log("called to authenticated");
      if (aValue!=null)
        return true;
      else
        return false;
    }
    

    canActivate(): boolean{
        const isAuth = this.isAuthenticated();
        if(!isAuth){
            this.router.navigate(['/login'])
        }
        return isAuth;
    }

}

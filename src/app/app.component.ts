import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DC-Map';

  //DC Hospitals
  hospitals = [{lat:38.927291, lng:-77.014418},
  {lat:38.9012, lng:-77.0506},
  {lat:38.94136, lng:-76.981159},
  {lat:38.9175, lng:-77.02},
  {lat:38.911667, lng:-77.075556},
  {lat:38.930528, lng:-77.013306},
  {lat:38.93, lng:-77.02 },
  {lat:38.944, lng:-76.991},
  {lat:38.943889, lng:-77.078056},
  {lat:38.9365, lng:-77.109},
  {lat:38.892426, lng:-76.995411 },
  {lat:38.893261, lng:-76.995662},
  {lat:38.850833, lng:-76.994444},
  {lat:38.835696, lng:-76.984499}];

  //DC Firestations
  fireStations = [{lat:38.901079, lng:-76.943238},
  {lat:38.905603, lng:-77.049716},
  {lat:38.90748, lng:-77.029981},
  {lat:38.901718, lng:-76.985504},
  {lat:38.917304, lng:-77.037421},
  {lat:38.911581, lng:-77.068453},
  {lat:38.871651, lng:-76.967073},
  {lat:38.895833, lng:-77.011049},
  {lat:38.945104, lng:-77.078478},
  {lat:38.907730, lng:-77.015899},
  {lat:38.907801, lng:-77.015668},
  {lat:38.973498, lng:-77.026486},
  {lat:38.830940, lng:-77.004842},
  {lat:38.898697, lng:-77.047600},
  {lat:38.864997, lng:-76.986146},
  {lat:38.883321, lng:-76.994193},
  {lat:38.932349, lng:-77.033006}];

  postOffices = [{lat:38.919826, lng:-77.041857},
  {lat:38.897768, lng:-77.006757},
  {lat:38.916807, lng:-76.995342},
  {lat:38.905486, lng:-77.042232},
  {lat:38.894818, lng:-77.028921},
  {lat:38.941725, lng:-77.075627},
  {lat:38.903552, lng:-77.031969},
  {lat:38.883732, lng:-77.024538},
  {lat:38.936248, lng:-77.011059},
  {lat:38.917533, lng:-77.032448},
  {lat:38.898608, lng:-77.039884},
  {lat:38.895151, lng:-77.042416},
  {lat:38.885841, lng:-76.997140},
  {lat:38.901844, lng:-77.022680},
  {lat:38.901830, lng:-77.022708},
  {lat:38.903435, lng:-77.040434},
  {lat:38.915479, lng:-77.044827},
  {lat:38.906797, lng:-77.048506},
  {lat:38.877887, lng:-77.010368},
  {lat:38.835134, lng:-77.058617},
  {lat:38.82236, lng:-77.000304}];

  //Buttons
  Hbutton: boolean;
  FSbutton: boolean;
  PObutton: boolean;


  constructor(){
    this.Hbutton = false;
    this.FSbutton = false;
    this.PObutton = false;

  }

  showHospitals() {
    this.Hbutton = !this.Hbutton;

  }

  showFireStations(){
    this.FSbutton = !this.FSbutton;
  }
  showPostOffices(){
    this.PObutton = !this.PObutton;
  }
}

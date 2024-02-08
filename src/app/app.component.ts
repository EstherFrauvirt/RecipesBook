import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature = 'recipe';
  ngOnInit(): void {
    console.log('initialize');
    
  }
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}

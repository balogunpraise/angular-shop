import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit{


  ngOnInit(): void {
    
  }

  performSearch(input: HTMLInputElement): boolean{
    console.log(input.value);
    return false;
  }
}

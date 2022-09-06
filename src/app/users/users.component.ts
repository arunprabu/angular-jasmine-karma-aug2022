import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [
  ]
})
export class UsersComponent implements OnInit {

  isLoading = true;
  myCity = '';
  userList: any[] = [];

  constructor() { 
    console.log('Inside Constructor');
  }

  ngOnInit(): void {
    console.log('Inside ngOnInit');
    // whenever the comp is coming into view -- ngOnInit will be called
    // ideal lifecycle hook for us to connet with REST API 

    // faking ajax call
    setTimeout( () => {
      this.isLoading = false;
      this.myCity = 'London';

      // filling this with fake data. 
      this.userList = [
        {
          id: 1, 
          name: 'John Williams',
          phone: 3434232
        },
        {
          id: 2, 
          name: 'Steve Smith',
          phone: 56756674
        }
      ];
      
    }, 4000);
  }

}

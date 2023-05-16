import {
  Component,
  ViewChild,
  ViewEncapsulation,
  Inject,
  ElementRef,
  HostListener,
} from '@angular/core';

/**
 * Default Uploader Default Component
 */
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  constructor(private elementRef: ElementRef) {}
  public searchResult: Object[] = [];
  selectedIndex = -1;
  selectedItem: any;

  // defined the array of data
  public sportsData: Object[] = [
    { Id: 1, Email: 'k@gmail.com', UserName: 'American', arrayPossition: 0 },
    { Id: 2, Email: 'b@gmail.com', UserName: 'Badminton', arrayPossition: 1 },
    { Id: 3, Email: 'C@gmail.com', UserName: 'Basketball', arrayPossition: 2 },
    { Id: 4, Email: 'D@gmail.com', UserName: 'Cricket', arrayPossition: 3 },
    { Id: 5, Email: 'E@gmail.com', UserName: 'Football', arrayPossition: 4 },
    { Id: 6, Email: 'F@gmail.com', UserName: 'Golf', arrayPossition: 5 },
    { Id: 7, Email: 'G@gmail.com', UserName: 'Hockey', arrayPossition: 6 },
    { Id: 8, Email: 'H@gmail.com', UserName: 'Rugby', arrayPossition: 7 },
    { Id: 9, Email: 'I@gmail.com', UserName: 'Snooker', arrayPossition: 8 },
    { Id: 10, Email: 'R@gmail.com', UserName: 'Tennis', arrayPossition: 9 },
    { Id: 11, Email: 'Fr@gmail.com', UserName: 'American', arrayPossition: 10 },
  ];

  public users: any[] = [
    {
      Id: 1,
      Email: '',
      UserName: '',
      optionSelected: false,
      optionSelectedEmail: false,
      optionSelectedUserName: false,
    },
    {
      Id: 2,
      Email: '',
      UserName: '',
      optionSelected: false,
      optionSelectedEmail: false,
      optionSelectedUserName: false,
    },
    {
      Id: 3,
      Email: '',
      UserName: '',
      optionSelected: false,
      optionSelectedEmail: false,
      optionSelectedUserName: false,
    },
  ];

  //public fieldsForSuggestionName: Object = { value: 'UserName' };
  //public fieldsForSuggestionEmail: Object = { value: 'Email' };

  public fieldsForSuggestionName: Object = {
    value: 'UserName',
    text: 'UserName',
  };
  public fieldsForSuggestionEmail: Object = { value: 'Email', text: 'Email' };

  // maps the appropriate column to fields property
  public fields: Object = { value: 'UserName' };
  public value: string = '';
  // set the placeholder to AutoComplete input
  public waterMark: string = 'e.g. kasun';
  public waterMark1: string = 'e.g. kasunysoft@gmail.com';
  // set the height of the popup element
  public height: string = '250px';
  // bind the change event
  public onChange(args: any, user: any): void {
    // let valueEle: HTMLInputElement = document.getElementsByClassName(
    //   'e-input'
    // )[0] as HTMLInputElement;
    // // make empty the input value when typed characters is 'null' in input element
    // if (
    //   this.AutoCompleteObj.value === 'null' ||
    //   this.AutoCompleteObj.value === null ||
    //   this.AutoCompleteObj.value === ''
    // ) {
    //   valueEle.value = '';
    // }
  }
  // public selectedContact(event, user: any) {
  //   if (event.itemData) {
  //     this.users.forEach((x) => {
  //       if (x.Id == user.Id) {
  //         x.UserName = event.itemData.UserName;
  //         x.Email = event.itemData.Email;
  //       }
  //     });
  //   }
  // }

  selectData(selectData: any, user: any, type: string) {
    debugger;
    if (selectData) {
      this.users.forEach((x) => {
        if (x.Id == user.Id) {
          if (type == 'userName') {
            x.optionSelectedUserName = true;
            x.optionSelectedEmail = true;
          } else {
            x.optionSelectedUserName = true;
            x.optionSelectedEmail = true;
          }
          x.optionSelected = true;
          x.UserName = selectData.UserName;
          x.Email = selectData.Email;
        }
      });
      // this.searchResult = [];
    }
  }

  public filtering(args) {
    // let predicate = new Predicate('Email', 'contains', args.text, true);
    // predicate = predicate.or('UserName', 'contains', args.text, true);
    // let query = new Query();
    // query = args.text !== '' ? query.where(predicate) : query;
    // args.updateData(this.sportsData, query);
  }

  AddUser(length: number) {
    this.users.push({ Id: length + 1, Email: '', UserName: '' });
  }

  modelChanged(event: any, user: any, type: string) {
    this.users.forEach((x) => {
      if (x.Id == user.Id) {
        x.optionSelected = false;
        if (type == 'userName') {
          x.optionSelectedUserName = false;
          //x.optionSelectedEmail = true;
        } else {
          x.optionSelectedEmail = false;
          //x.optionSelectedUserName = true;
        }
      }
    });
    // console.log(event);
    // console.log(user);
    //this.optionSelected = true;
    // if (user.UserName === '' && user.Email === '') {
    //   this.searchResult = [];
    //   return;
    // }

    // const filteredResults = this.sportsData.filter((result: any) => {
    //   if (user.UserName != '' && user.Email != '') {
    //     result.UserName.includes(user.UserName) ||
    //       result.Email.includes(user.Email);
    //   } else if (user.UserName == '' && user.Email != '') {
    //     result.Email.includes(user.Email);
    //   } else if (user.UserName != '' && user.Email == '') {
    //     result.Email.includes(user.UserName);
    //   }
    // });

    // this.searchResult = filteredResults;
    // this.selectedIndex = -1;
  }

  // @HostListener('window:keydown', ['$event'])
  // onKeyDown(event: KeyboardEvent) {
  //   console.log(event);
  //   if (event.keyCode === 38) {
  //     // up arrow
  //     this.selectedIndex = Math.max(0, this.selectedIndex - 1);
  //     event.preventDefault();
  //   } else if (event.keyCode === 40) {
  //     // down arrow
  //     this.selectedIndex = Math.min(
  //       this.sportsData.length - 1,
  //       this.selectedIndex + 1
  //     );
  //     event.preventDefault();
  //   } else if (event.keyCode === 13) {
  //     const selectedUser = this.getSelectedUser();
  //     if (selectedUser) {
  //       console.log('Selected user:', selectedUser);
  //       // do something with the selected user, e.g. navigate to their profile page
  //     }
  //   }
  // }

  // getSelectedUser() {
  //   console.log('select index', this.selectedIndex);
  //   if (
  //     this.selectedIndex >= 0 &&
  //     this.selectedIndex < this.sportsData.length
  //   ) {
  //     return this.sportsData[this.selectedIndex];
  //   } else {
  //     return null;
  //   }
  // }

  // onEnterKey(event: any, user: any, type: string) {}

  handleKeyUp(event: any, user: any, type: string) {
    const currentIndex = this.sportsData.indexOf(this.selectedItem);

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      this.selectedItem =
        currentIndex > 0
          ? this.sportsData[currentIndex - 1]
          : this.sportsData[this.sportsData.length - 1];
      console.log('ArroyUpeventSelected item ', this.selectedItem);
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();
      this.selectedItem =
        currentIndex < this.sportsData.length - 1
          ? this.sportsData[currentIndex + 1]
          : this.sportsData[0];
      console.log('ArroydowneventSelected item ', this.selectedItem);
    } else if (event.key === 'Enter') {
      if (this.selectedItem) {
        console.log('enter tSelected item ', this.selectedItem);
        this.users.forEach((x) => {
          if (x.Id == user.Id) {
            if (type == 'userName') {
              x.optionSelectedUserName = true;
              x.optionSelectedEmail = true;
            } else {
              x.optionSelectedUserName = true;
              x.optionSelectedEmail = true;
            }
            x.optionSelected = true;
            x.UserName = this.selectedItem.UserName;
            x.Email = this.selectedItem.Email;
          }
        });
      }
    }
  }

  isItemSelected(item: any) {
    console.log('isItemSelected' + item);
    return item === this.selectedItem;
  }
}

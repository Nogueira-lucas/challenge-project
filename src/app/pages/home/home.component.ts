import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { UserDataInterface, UserResponseInterface } from 'src/app/model/user.interface';
import { UserService } from 'src/app/service/user.service';
import { DeleteUserModalComponent } from '../delete-user-modal/delete-user-modal.component';

const MAX_LIMIT = 5

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users: UserDataInterface[] = [];

  data$?: Observable<UserResponseInterface>;

  displayedColumns = ['firstName', 'lastName', 'options']

  length?: number;
  pageSize?: number = MAX_LIMIT;
  currPage: number = 1
  pageOptions = [1, 2, 5];

  pageEvent?: PageEvent;

  isLoading: boolean = false

  constructor(
    private service: UserService,
    public dialog: MatDialog
  ) {}

  openDeleteDialog(id: string) {
    const dialogRef = this.dialog.open(DeleteUserModalComponent, {
      data: {
        id: id
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Result:', result);
      this.service.getUsers(MAX_LIMIT, this.currPage).subscribe(result => {
        this.users = result.data
      })
    });
  }

  ngOnInit(): void {
    this.isLoading = true
    this.data$ = this.service.getUsers(MAX_LIMIT)

    this.data$.subscribe(result => {
      this.users = result.data
      this.length = result.total
      this.isLoading = false
    })    
  }

  changePage(event: PageEvent) {
    if(event.previousPageIndex) {
      if (event.previousPageIndex < event.pageIndex)
        this.next();
      else if (event.previousPageIndex > event.pageIndex)
        this.previous();
    }
  }

  next() {
    this.isLoading = true
    this.currPage++
    this.service.getUsers(MAX_LIMIT, this.currPage).subscribe(response => {
      this.users = response.data
      this.isLoading = false
    })
  }

  previous() {
    this.isLoading = true
    this.currPage--
    this.service.getUsers(MAX_LIMIT, this.currPage).subscribe(response => {
      this.users = response.data
      this.isLoading = false
    })
  }
  
}

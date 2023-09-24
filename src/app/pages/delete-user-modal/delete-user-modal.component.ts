import { NgIf } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/service/user.service';

interface DialogData {
  id: string
}

@Component({
  selector: 'app-delete-user-modal',
  templateUrl: './delete-user-modal.component.html',
  styleUrls: ['./delete-user-modal.component.scss'],
  standalone: true,
  imports: [MatDialogModule, NgIf, MatButtonModule,],
})
export class DeleteUserModalComponent {
  constructor(private service: UserService,
    public dialogRef: MatDialogRef<DeleteUserModalComponent>,
    private snack: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {

  }

  removeUser() {
    this.service.removeUserBy(this.data.id).subscribe(() => {
      this.snack.open('Success')
      this.dialogRef.close()
    }, err => {
      this.snack.open('Fail')
    })
  }

  close() {
    this.dialogRef.close()
  }
}

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { FoodsService } from 'src/app/services/foods.service';
import { PageInfo } from 'src/app/types/PageInfo';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  infos!: PageInfo;

  constructor(public dialog: MatDialog, private service: FoodsService) {}

  ngOnInit(): void {
    this.getInfos();
  }

  getInfos() {
    this.service.getInfosPage().subscribe((info) => {
      info.map((data) => {
        this.infos = data;
      })
    })
  }

  openDialog() {
    this.dialog.open(DialogBoxComponent, {
      width: '500px',
      data: 'rigth click'
    })
  }
}

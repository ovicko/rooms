import { Component, OnInit } from '@angular/core';
import { ROOMS } from '../services/mock-room';
import { Room } from '../services/room';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {
  rooms: Room[] = [];
  constructor() { }

  ngOnInit(): void {
    this.rooms = ROOMS;
    // console.table(this.rooms)
  }

}

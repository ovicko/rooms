import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ROOMS } from '../services/mock-room';
import { Room } from '../services/room';

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.css']
})
export class RoomDetailComponent implements OnInit {
  room: Room = null;
  roomId: number;
  constructor(private route: ActivatedRoute) {
    this.roomId = this.route.snapshot.params.id;
   }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const aRoom: Room[] = ROOMS.filter( r => r.id == this.roomId);
      this.room = aRoom[0];
      console.table(aRoom);
    });
  }

}

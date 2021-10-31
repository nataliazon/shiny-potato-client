import { Component } from "@angular/core";
import { RoomsService } from "src/app/services/rooms.service";

@Component({
    selector: "app-room-creator",
    templateUrl: "./room-creator.component.html",
})
export class RoomCreatorComponent{

    public availableRooms!: string[];
    public takenRooms!: string[];

    constructor(private roomsService: RoomsService){

    }

    ngOnInit() {
        this.refreshData();
    }


    public requestRoom(){
        console.log("Room request called");
        let myRoom = this.availableRooms[0];
        this.roomsService.reserveRoom(myRoom).subscribe(result => {console.log(result)});
        this.refreshData();
    }

    private refreshData(){
        this.roomsService.findAllAvailableRooms().subscribe(data => {
            this.availableRooms = data;
          });
  
        this.roomsService.findAllTakenRooms().subscribe(data => {
              this.takenRooms = data;
            });
    }
}
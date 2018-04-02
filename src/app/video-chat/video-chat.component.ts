import { Component, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "app-video-chat",
  templateUrl: "./video-chat.component.html",
  styleUrls: ["./video-chat.component.css"]
})
export class VideoChatComponent implements OnInit {
  rooms = {
    LivingRoom: {
      label: "Living Room",
      icon: "lounge",
      peerId: ""
    },
    Bedroom: {
      label: "Bedroom",
      icon: "bedroom",
      peerId: ""
    }
  };

  @ViewChild("myvideo") myVideo: any;
  
  
  targetpeer: any;
  peer: any;
  n = <any>navigator;
  str: string;

  ngOnInit() {
    this.n.getUserMedia = (this.n.getUserMedia || this.n.webkitGetUserMedia || this.n.mozGetUserMedia || this.n.msGetUserMedia);
    this.n.getUserMedia({video:true, audio:true}, stream => {
      // this.test(stream);
      this.initWebRTC(stream);
    }, err => {
      console.log('Failed to get stream', err);
    });
  }

  test(stream) {
    let video = this.myVideo.nativeElement;
    var peer1 = new SimplePeer({ initiator: location.hash === '#init', stream: stream })
    var peer2 = new SimplePeer()
  
    peer1.on('signal', data => {
      peer2.signal(data)
    })
  
    peer2.on('signal', data => {
      peer1.signal(data)
    })
  
    peer2.on('stream', stream => {
      // got remote video stream, now let's show it in a video tag
      
      video.src = URL.createObjectURL(stream)
      video.play()
    })
  }

  initWebRTC(stream) {
    let video = this.myVideo.nativeElement;
    let peerx: any;
    
    peerx = new SimplePeer ({
      // initiator: true,
      initiator: window.location.hash === "#/video-chat#init",
      trickle: false,
      stream:stream
    })
    
    peerx.on('signal', data => {
      console.log(JSON.stringify(data));
      
      this.targetpeer = data;
      this.str = JSON.stringify(data);
    });
    
    peerx.on('data', data => {
      console.log('Recieved message:' + data);
    });
    
    peerx.on('stream', stream => {
      video.src = URL.createObjectURL(stream);
      video.play();
    });
    
    setTimeout(() => {
      this.peer = peerx;
      console.log(this.peer);
    }, 5000);
  }
  
  connect() {
    this.peer.signal(JSON.parse(this.targetpeer));
  }
  
  message() {
    this.peer.send('Hello world');
  }

  getRooms() {
    return Object.values(this.rooms);
  }
}

import { AfterViewInit, Component, effect, ElementRef, OnInit, signal, Signal, ViewChild, WritableSignal } from '@angular/core';
import { Sponnculerservices } from '../../../core/services/sponnculer/sponnculerservices';
import { NgStyle } from '@angular/common';
import { forkJoin } from 'rxjs';
import { Router, RouterLink } from '@angular/router';
import { Coursol } from "../../../shared/coursol/coursol";
import { Player } from '../../../core/services/player/player';


@Component({
  selector: 'app-tracks-all',
  imports: [NgStyle, RouterLink, Coursol],
  templateUrl: './tracks-all.html',
  styleUrl: './tracks-all.css',
})
export class TracksAll implements OnInit,AfterViewInit{


  constructor(private spotifyservice:Sponnculerservices, private router:Router,private playerServices:Player){
    effect(()=>{
      this.spotifyservice.userName()
    })

  }
  topTracks:WritableSignal<any>=signal([])
  topArtist:WritableSignal<any>=signal([])
  userName:any
  recentlyplayed:any=[]
  ngOnInit(): void {
        this.spotifyservice.currentUser().subscribe()
        this.userName=this.spotifyservice.userName
    this.fetchRecentTracks()
    this.topFetch()

   
  }


  trackNameStyle = {
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  width: '100px',
  display: 'inline-block',

};

  fetchRecentTracks(){
    this.spotifyservice.recentlyPlayed().subscribe(
      {
        next:((data)=>{
          console.log(data,"data");
          this.recentlyplayed=data.items.slice(0,8)
         
        }),
        error:((error:Error)=>{
          console.log(error);
          throw new Error("error occured")
        })
      }
    )
    // this.recentlyplayed= this.spotifyservice.recentlyplayed$
  }

  bootstrap: any;
    ngAfterViewInit() {
    const tooltipElements = document.querySelectorAll('[data-bs-toggle="tooltip"]');

    tooltipElements.forEach((element: any) => {
      new this.bootstrap.Tooltip(element);
    });
  }

  topFetch(){

 
    forkJoin({
      topTracks:this.spotifyservice.topTrack(),
      topArtist:this.spotifyservice.topArtist(20)
    }).subscribe({
      next:(res:any)=>{
        console.log(res,"response");
        this.topTracks.set(res.topTracks?.items ||[]),
        this.topArtist.set(res.topArtist?.items || [])
      },
      error:(error)=>{
        console.log("error",error);
      }
    })
  
  }

  showAllArtists(tracks:any){
    console.log("object");
    this.router.navigateByUrl(`/callback/top-artist/${tracks}`)
  }

    @ViewChild('scrollContainer') scrollContainer!: ElementRef<HTMLDivElement>;
  
  scrollLeft(){
      const left=this.scrollContainer.nativeElement
      left.scrollBy({left: -300,behavior:'smooth'})
  }

  scrollRight(){
  const left=this.scrollContainer.nativeElement
      left.scrollBy({left: 300,behavior:'smooth'})
  }
}

import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sponnculerservices } from '../../core/services/sponnculer/sponnculerservices';
import { Coursol } from "../coursol/coursol";

@Component({
  selector: 'app-top-artist',
  imports: [Coursol],
  templateUrl: './top-artist.html',
  styleUrl: './top-artist.css',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class TopArtist implements OnInit{
  type=signal<string>('')
  data=signal<any[]>([])

  constructor(private aroute:ActivatedRoute,private spotifyservices:Sponnculerservices) {
    
  }

  ngOnInit():void{
this.type.set(this.aroute.snapshot.paramMap.get('type') || '')
this.loaddata(this.type())
  }

  loaddata(type:any){
    if(type==='artist'){
      this.spotifyservices.topArtist(50).subscribe((data)=>{
        console.log(data.items,"data");
        this.data.set(data.items)
      })
    }
   if (type === 'track') {
      this.spotifyservices.topTrack().subscribe((res: any) => {
        console.log(res,"res");
        this.data.set(res.items);
      });
    }
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styles: ['.childcls { margin-left: 20px; }']
})
export class TreeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
   // this.getChildren(this.data,this.pId)
  }

  @Input() public data: any;
  @Input() public pId: any;
  @Input() public cls: string;

  public getChildren(): any {
      let childs = [];
       if (this.data && this.data.length > 0) {
          childs = this.data.filter(((x) => { return x.parentLayerId == this.pId }).bind(this));
         // console.log("Childs",childs)
      }
      return childs;
  }  

  // public getChildren(arr,parentId ) {
  //   //console.log("arr , parentId",arr,parentId)
  //   let output = [];
  //   for (const obj of arr) 
  //   {           
  //     //console.log("obj",obj)
  //     if(obj.parentLayerId == parentId) 
  //     {        
  //       var children = this.getChildren(arr,obj.id)
  //       if(children.length)
  //       {
  //         obj.children = children
  //       }
  //       output.push(obj)
  //     }
  //   }
  //   console.log("output",output)
  //   return output
  // }
}

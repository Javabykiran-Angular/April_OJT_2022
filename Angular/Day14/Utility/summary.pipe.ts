import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
  name:'summary'
})
export class SummaryPipe implements PipeTransform
{
    transform(value: any,start:number=0,end:number=15) {
      // console.log("We r in transform method");

      
        let temp=(<string> value);

          // return (temp.substring(0,15)+" ...");

          return (temp.substring(start,end)+" ...");



    }
}
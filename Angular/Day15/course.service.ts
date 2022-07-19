
export class CourseService{

    private course:string[]=["Angular 8",'React js','Vue Js','Embber Js','JSP'];


    getCourse(){
      return (this.course);
    }

}
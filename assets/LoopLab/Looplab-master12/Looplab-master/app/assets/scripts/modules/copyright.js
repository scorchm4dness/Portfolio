import $ from "jquery";

class copyright{
  constructor(){
    this.newYear();
    this.year = $("#year");
  }
  newYear(){
     // this.year.text(new Date().getFullYear());
    $('#year').text(new Date().getFullYear());
  }

}


export default copyright;

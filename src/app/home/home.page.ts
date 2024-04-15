import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  surveyCode: number=100000;

  surveyData: SurveyData={
    University: "",
    Major: "",
    Sem:"",
    Lecturer:"",
    Subject:"",
    LectureType:"",
    Group:""
  }

  constructor() {}

  getSurveyData(){
    //pobranie z backendu

    //przypisanie do modelu
    this.surveyData = {
      University:"University of Gdańsk",
      Major:"AiB",
      Sem:"2024 letni",
      Lecturer: "Michał Kuciapski",
      Subject:"Technologie e-lerningowe 2.0",
      LectureType:"Lab",
      Group:"S22-31"


    }

  }
}

interface SurveyData{
  University : string
  Major : string
  Sem : string
  Lecturer: string
  Subject: string
  LectureType: string
  Group: string

}

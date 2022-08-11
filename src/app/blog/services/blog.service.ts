import { Injectable } from '@angular/core';
import { Blog } from '../models/blog';


@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor() { }
  getDetails:Blog[] = [
    {
      id: 1,
      title:"Plan A Romantic Getaway",
      description:"The sexy vacation",
      author:"TravelMiso",
      comments:["Relationships","Romatic"],
    },
    {
      id: 2,
      title:"New York City, USA: Travel Guide",
      description:"Top attractions in the Big Apple!",
      author:"TravelMiso",
      comments:["USA","Big city"],
    },
    {
      id: 3,
      title:"Surviving A Long Flight",
      description:"Get the tips on how to make the plane trip a little easier.",
      author:"TravelMiso",
      comments:["Plans","Flights"],
    },
  ];

  getBlogDetails(){
    return this.getDetails;
  }

  getDetail(){
    return this.getDetails[0];
  }
}

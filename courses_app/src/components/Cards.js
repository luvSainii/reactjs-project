import React from 'react'
import Card from './Card';

const Cards = ({ courses }) => {
    let allCourses = [];

    //this function will collect the all the objects values which are present in the different arrays using object.value because we only need the value not keys using for each loop 
  
    function getCourses() {
      Object.values(courses).forEach((coursesCategory) => {
        coursesCategory.forEach((course) => {
          allCourses.push(course);
        })
      })
      return allCourses;
    }
    return (
      <div>
        {getCourses().map((value) => {
          return (
            <Card value={value} />
          )
        })}
      </div>
    )
  }



export default Cards
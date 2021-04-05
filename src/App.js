import React, { Component, Fragment } from 'react';
import './App.css';
import ActivityList from './components/activity-list/activity-list';
import NavbarItem from './components/navbar-item/navbar-item';
import RevardList from './components/revard-list/revard-list';
import StudentList from './components/student-list/student-list';



class App extends Component {
  
  state = {
    student:{
        fullName: 'Dmutro Matviiv',
        groupName: 'ПВ927',
        pointsCount: 3582,
        diamondsCount: 1002,
        coinsCount: 2458,
        avatar: 'https://funik.ru/wp-content/uploads/2019/03/9d7d012aa40221c52ee0.jpg'
    },
    revards:[
     
      {
        title: 'Full profile info in MyStat',
        image: 'https://www.freeiconspng.com/uploads/green-ok-png-icon-12.png',
      },
      {
        title: '20 consecutive attendances',
        image: 'https://www.freeiconspng.com/uploads/green-ok-png-icon-12.png',
      },
      {
        title: 'Full profile info in MyStat',
        image: 'https://www.freeiconspng.com/uploads/green-ok-png-icon-12.png',
      },
      {
        title: '20 consecutive attendances',
        image: 'https://www.freeiconspng.com/uploads/green-ok-png-icon-12.png',
      },
      {
        title: '10 consecutive attendances',
        image: 'https://www.freeiconspng.com/uploads/green-ok-png-icon-12.png',
      },
      {
        title: 'Full profile info in MyStat',
        image: 'https://www.freeiconspng.com/uploads/green-ok-png-icon-12.png',
      },
    ],
    students:[
      {
        fullName: 'Заєць Микола Леонтійович',
        positionInRating: 1,
        pointsCount: 5045,
        isActive: true
      },
      {
        fullName: 'Закотюк Вікторія Русланівна',
        positionInRating: 2,
        pointsCount: 4089,
        isActive: false
      },
      {
        fullName: 'Скрипнюк Денис Олексійович',
        positionInRating: 3,
        pointsCount: 3569,
        isActive: false
      },
      {
        fullName: 'Олексійчук Віталій Володимирович',
        positionInRating: 4,
        pointsCount: 3566,
        isActive: false
      },
      {
        fullName: ' Ісламов Богдан Дмитрович',
        positionInRating: 5,
        pointsCount: 3513,
        isActive: false
        
      },  
      {
        fullName: 'Гнатюк Дмитро Олександрович',
        positionInRating: 6,
        pointsCount: 3317,
        isActive: false
        
      },    {
        fullName: 'Стецюк Владислав Тарасович',
        positionInRating: 7,
        pointsCount: 2764,
        isActive: false
        
      },    {
        fullName: 'Денищук Сергій Сергійович',
        positionInRating: 8,
        pointsCount: 2192,
        isActive: false
        
      },    {
        fullName: 'Матвіїв Дмитро Володимирович',
        positionInRating: 9,
        pointsCount: 50000,
        isActive: false
        
      },   
       {
        fullName: ' Костюк Максим Олександрович',
        positionInRating: 10,
        pointsCount: 2073,
        isActive: false
        
      },  
      {
        fullName: 'Ткачук Олександр Ігорович',
        positionInRating: 11,
        pointsCount: 1804,
        isActive: false
        
      },   {
        fullName: 'Федорчук Софія Юріївна',
        positionInRating: 12,
        pointsCount: 1552,
        isActive: false
        
      },   {
        fullName: 'Сівіцький Василь Миколайович',
        positionInRating: 13,
        pointsCount: 1291,
        isActive: false
        
      },  
    ],
    activities:[
      {
        date: '25.03.2021',
        text: 'Attendance of the session',
        itemCount: 1,
        revardType: 'diamond'
      },
      {
        date: '24.03.2021',
        text: 'Attendance of the session',
        itemCount: 1,
        revardType: 'diamond'
      },
      {
        date: '23.03.2021',
        text: 'Grade',
        itemCount: 5,
        revardType: 'coin'
      },
      {
        date: '22.03.2021',
        text: 'Attendance of the session',
        itemCount: 1,
        revardType: 'diamond'
      },
      {
        date: '21.03.2021',
        text: 'Grade',
        itemCount: 5,
        revardType: 'coin'
      },
      {
        date: '20.03.2021',
        text: 'Attendance of the session',
        itemCount: 1,
        revardType: 'diamond'
      },
      {
        date: '19.03.2021',
        text: 'Attendance of the session',
        itemCount: 1,
        revardType: 'diamond'
      },
  
    ]
  }
  
  render() {
    return (
      <Fragment>
        <NavbarItem student={this.state.student}></NavbarItem>
        <div className="container-fluid main-section">
          <div className="row">

            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                <h2>Your revards:</h2>
              <div className="row">
                  <RevardList revards={this.state.revards}></RevardList>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
              <h2>Leaders:</h2>
              <div className="row">
                  <StudentList students={this.state.students}></StudentList>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
              <h2>Activities:</h2>
                  <ActivityList activities={this.state.activities}></ActivityList>
            </div>
  

          </div>
        </div>

      </Fragment>
    );
  }

}

export default App;

import React, { useState } from "react";
import "./Dashboard.css";
import TopCardList from "../../components/dashboardCard/TopCardList";
import DashboardCard from "../../components/dashboardCard/DashboardCard";
import icon_arrow from "../../assets/images/dashboard/icon_arrow.png";
import icon_calendar_big from "../../assets/images/dashboard/icon_calendar_big.svg";
import icon_attendee from "../../assets/images/dashboard/icon_attendee.png"
import HolidayCardList from "../../components/holidayCard/HolidayList";
import HolidayCard from "../../components/holidayCard/HolidayCard";
import ExpenseList from "../../components/expenseCard/ExpenseList";
import ExpenseCard from "../../components/expenseCard/ExpenseCard";

const Dashboard = () => {
  const [selectCard, setSelectCard] = useState(0);
  const n = 5;
  //console.log(ExpenseList);
  //console.log(TopCardList, "Works!");
  return (
    <section className="mainContent">
      <header className="Dashboard-header">
        <h2 className="Dashboard-header-text">Good Morning Maria Gomez!</h2>
        <h3 className="Dashboard-header-time">Today, Thursday 11.00am</h3>
      </header>
      <div className="Dashboard-cards">
        {TopCardList.map((topCards) => {
          return (
            <div
              key={topCards.id}
              onClick={() => setSelectCard(topCards.id)}
              id={selectCard === topCards.id ? "activeCard" : null}
            >
              <DashboardCard
                icon={topCards.icon}
                title={topCards.title}
                subtext={topCards.subtext}
                count1={topCards.count1}
                text1={topCards.text1}
                count2={topCards.count2}
                text2={topCards.text2}
              />
            </div>
          );
        })}
      </div>
      
      <div className="Dashboard-items">
        <div className="Dashboard-items-left">
          <div className="expense-header">
            <h2 className="expense-header-text">Pending Expenses Request</h2>
            <div className="expense-header-right">
              <span className="all-requests">All Requests</span>
              <img className="icon-arrow" src={icon_arrow} alt=""></img>
            </div>
          </div>
          <div className="expenses-container">
            {ExpenseList.map((expenses) => {
              return (
                <div className = "expense-card" key={expenses.id} >
                  <ExpenseCard
                    icon={expenses.icon}
                    emp={expenses.emp}
                    name={expenses.name}
                    dates={expenses.dates}
                    comments={expenses.comments}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="Dashboard-items-right">
          <div className="Upcoming_events">
            <div className="events-header">
              <h2 className="events-header-text">Upcoming Events</h2>
              <img className="icon-arrow2" src={icon_arrow} alt=""></img>
            </div>
            <div className="event-content">
            <div className="meeting">
              <img className="icon-calendar" src={icon_calendar_big} alt=""></img>
              <div className="meeting-info">
                <span className="townhall">Townhall Meeting</span>
                <span className="Time">
                  <span className="Time-text">Time: </span>
                  8 pm, 25 Dec, Friday
                </span>
                <span className="meet-location">Location: Google Meet</span>
              </div>
            </div>
            <div className="participants">
              {[...Array(n)].map((e, i) => <img key={i} className="icon-attendee" src={icon_attendee} alt=""></img>)}
              <div className="attendee-count"><span>+20</span></div>
            </div>
            </div>
          </div>
          <div className="Upcoming_holidays">
            <div className="events-header">
              <h2 className="events-header-text">Upcoming Holidays</h2>
              <img className="icon-arrow2" src={icon_arrow} alt=""></img>
            </div>
            <div className="holidays-container">
              {HolidayCardList.map((holidays) => {
                return (
                  <div key={holidays.id} className="holiday-card" id={holidays.text4}>
                    <HolidayCard
                      date={holidays.num1}
                      mon={holidays.text1}
                      day={holidays.text2}
                      event={holidays.text3}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;

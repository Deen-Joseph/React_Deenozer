import React from "react";
import { useForm } from "react-hook-form";
import './EventsTab.css'

const EventsTab =()=>{
    let clubs = [
        {
          name: "Manchester United",
          league: "English Premier League",
          country: "England",
        },
        {
          name: "Manchester City",
          league: "English Premier League",
          country: "England",
        },
        {
          name: "Newcastle United",
          league: "English Premier League",
          country: "England",
        },
        {
          name: "Arsenal",
          league: "English Premier League",
          country: "England",
        },
        {
          name: "Chelsea",
          league: "English Premier League",
          country: "England",
        },
      ];
    
      const {
        register,
        handleSubmit,
        // watch,
        reset,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => {
        console.log(data);      
        reset()
      }
      //   console.log(watch("example"));
      //   console.log(watch("exampleRequired"));
      return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="container-form">
            <h1>Events</h1>
            <ul className="flex-outer">
              <li>
                <label htmlFor="first-name">First Name</label>
                <input
                  type="text"
                  id="first-name"
                  {...register("first-name")}
                  placeholder="Enter your first name here"
                ></input>
              </li>
              <li>
                <label htmlFor="last-name">Last Name</label>
                <input
                  type="text"
                  id="last-name"
                  {...register("last-name", { required: true })}
                  placeholder="Enter your last name here"
                ></input>
                {errors.exampleRequired && <span>This field is required</span>}
              </li>
              <li>
                <label htmlFor="nation">Nationality</label>
                <input
                  type="text"
                  id="nation"
                  placeholder="Enter Nationality here"
                  {...register("nation")}
                ></input>
              </li>
              <li>
                <label htmlFor="club">Club</label>
                <select
                  id="club"
                  placeholder="Select your club"
                  {...register("club")}
                >
                  {clubs.map((item, index) => {
                    return (
                      <option key={index} value={clubs.name}>
                        {item.name}
                      </option>
                    );
                  })}
                </select>
              </li>
              <li>
                <label htmlFor="dob">Date of birth</label>
                <input
                  type="date"
                  id="dob"
                  placeholder="Enter Date of Birth here"
                  {...register("dob")}
                ></input>
              </li>
              <li>
                <label htmlFor="about">About</label>
                <textarea
                  rows="6"
                  id="about"
                  placeholder="Enter Enter about Player"
                  {...register("about")}
                ></textarea>
              </li>
    
              <li>
                <label htmlFor="position">Position</label>
                <select
                  id="position"
                  placeholder="Select Position"
                  {...register("Position")}
                >
                  <option value="Forward">Forward</option>
                  <option value="Striker">Striker</option>
                  <option value="Secondary Striker">Secondary Striker</option>
                  <option value="Left-Wing">Left-Wing</option>
                  <option value="Right Wing">Right Wing</option>
                  <option value="Left-Midfield<">Left-Midfield</option>
                  <option value="Right-Midfield">Right-Midfield</option>
                  <option value="Centre Attacking-Midfield">
                    Centre Attacking-Midfield
                  </option>
                  <option value="Centre Midfield">Centre Midfield</option>
                  <option value="Defensive Midfield">Defensive Midfield</option>
                  <option value="Left-back">Left-back</option>
                  <option value="Right-back">Right-back</option>
                  <option value="Left Wing-Back">Left Wing-Back</option>
                  <option value="Right Wing-Back">Right Wing-Back</option>
                  <option value="Centre Back">Centre Back</option>
                  <option value="Goal Keeper">Goal Keeper</option>
                </select>
              </li>
              {/* <li>
            <p>Age</p>
            <ul className="flex-inner">
              <li>
                <input type="checkbox" id="twenty-to-twentynine"></input>
                <label htmlFor="twenty-to-twentynine">20-29</label>
              </li>
              <li>
                <input type="checkbox" id="thirty-to-thirtynine"></input>
                <label htmlFor="thirty-to-thirtynine">30-39</label>
              </li>
              <li>
                <input type="checkbox" id="fourty-to-fourtynine"></input>
                <label htmlFor="fourty-to-fourtynine">40-49</label>
              </li>
              <li>
                <input type="checkbox" id="fifty-to-fiftynine"></input>
                <label htmlFor="fifty-to-fiftynine">50-59</label>
              </li>
              <li>
                <input type="checkbox" id="sixty-to-sixtynine"></input>
                <label htmlFor="sixty-to-sixtynine">60-69</label>
              </li>
              <li>
                <input type="checkbox" id="other"></input>
                <label htmlFor="other">Other</label>
              </li>
            </ul>
          </li> */}
              <li>
                <button className="formSubmit" type="submit">
                  Submit
                </button>
              </li>
            </ul>
          </div>
        </form>
      );
}

export default EventsTab
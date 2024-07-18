import React, { useState } from 'react'
import './App.css'
import { IoFilter } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";


const App = () => {
   const[isVisible,setIsVisible]=useState(false)

  const toggleList = ()=> {
      setIsVisible(!isVisible)
  }
  return (
    <div className='Container'>
      <div className="Grand">
        <div className="parent">
          <div className="child">
            <div className="btn">
              <button className="filterbtn" onClick={toggleList}>
                <IoFilter />
                Filters
              </button>
              {isVisible && (
                <div className="">
                  
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="Grand">
        <div className="parent">
          <div className="child">
            <div className="btn">
              <button className="filterbtn" onClick={toggleList}>
                <IoFilter />
                Filters
              </button>
              {isVisible && (
                <div className="lists">
                  <div className="list-head">
                    {" "}
                    <p>Refine by </p>
                    <p className="clear">Clear</p>
                  </div>
                  <div className="listItem">
                    <p>Date of registeration</p>{" "}
                    <p>
                      {" "}
                      <IoIosArrowForward />
                    </p>
                  </div>
                  <div className="listItem">
                    <p>Vendor score</p>{" "}
                    <p>
                      {" "}
                      <IoIosArrowForward />
                    </p>
                  </div>
                  <div className="listItem">
                    <p>Rating</p>
                    <p>
                      {" "}
                      <IoIosArrowForward />
                    </p>
                  </div>
                  <div className="listItem">
                    <p>Status</p>
                    <p>
                      {" "}
                      <IoIosArrowForward />
                    </p>
                  </div>
                  <div className="listItem">
                    <p>Type of Business</p>
                    <p>
                      {" "}
                      <IoIosArrowForward />
                    </p>
                  </div>
                  <div className="listItem">
                    <p>Location</p>
                    <p>
                      {" "}
                      <IoIosArrowForward />
                    </p>
                  </div>
                  <div className="listItem">
                    <p>Assign to</p>
                    <p>
                      {" "}
                      <IoIosArrowForward />
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App

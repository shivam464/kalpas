import React, { useState } from 'react'
import "./Dashboard.css"
import Form from './Form'
// import Sidedashboard from './Sidedashboard'

const Dashboard = ({ settoggle_button, toggle_button,feedback,setfeedback }) => {
    
    return (
        <div className={`main-container-bar ${!feedback ? "br-container":""}`}>
            <div className={`left-bar-container ${!feedback?"bar-container":"new-bar-container"}`}>

                <div className="profile-container">
                    <img src="https://source.unsplash.com/user/erondu/60x60" alt="profile" />
                    <div className="data-div">
                        <h3>Hi Reader</h3>
                        <p>Here's your News!</p>
                    </div>
                </div>
                {!feedback?<div className="toggle-div">
                    <h2>View Toggle</h2>
                    <div className="toggle-button">
                        <div className={`horizontal-btn ${!toggle_button ? "gray-color" : "green-color"}`} onClick={() => settoggle_button(!toggle_button)}> <i class="fas fa-grip-lines-vertical"></i></div>

                        <div className={`verticle-btn ${!toggle_button ? "green-color" : "gray-color"}`} onClick={() => settoggle_button(!toggle_button)} > <i class="fas fa-sliders-h"></i></div>
                    </div>
                </div>:""}
                <div className="toggle-div">
                    <h2>Have a Feedback?</h2>
                    <div className={`toggle-button ${feedback ?"btn-color":"grn-color"}`} onClick={()=>setfeedback(!feedback)}>
                        <h2>We're Listening!</h2>
                    </div>
                </div>
            </div>
            {feedback && <Form />}

        </div>

    )
}

export default Dashboard

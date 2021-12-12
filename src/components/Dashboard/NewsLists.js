import React, { useState } from 'react'
import "./NewsLists.css"
import Pagination from './Pagination';


const NewsLists = ({ data,toggle_button,deletedata }) => {
    const [id, setid] = useState("")
    console.log("apidata", id);
    
    return (
        <div className="lists-container">

            {!toggle_button ? data.slice(0, 5).filter(data=>data.name !== id).map((list_data) => {
                return (
                    <div className="list-div" key={list_data.id}>
                        <div className="details">
                            <img src="https://source.unsplash.com/user/erondu/70x70" alt="profile" />
                            <div className="data">
                                <h3>{list_data.title.concat("...")}</h3>
                                <p>{list_data.body.substr(0, 70).concat("...")}</p>
                                <p className="date_part">Mon,21 Dec 2020 14:57 GMT</p>
                            </div>
                        </div>
                        <div className="cross-icon" onClick={()=>deletedata(list_data.id)}> <i class="far fa-times-circle" ></i></div>
                    </div>
                )
            }) :


                <div className="verticle-lists">
                    <div className="grid-container">
                        {data.slice(0, 6).map((list_data) => {
                            return (
                                <div className="list" key={list_data.id}>
                                    <div className="icon-ver" ><i class="fas fa-times" onClick={()=>deletedata(list_data.id)}></i></div>
                                    <h3 className="heading">{list_data.title.substr(0, 20).concat("...")}</h3>
                                    <p>{list_data.body.substr(0, 20).concat("...")}</p>
                                    <p className="date_part">Mon,21 Dec 2020 14:57 GMT</p>
                                    <img src="https://source.unsplash.com/user/erondu/210x130" alt="img" />
                                </div>
                            )
                        })}

                    </div>


                </div>
            }





            <div>
                <Pagination />
            </div>



        </div>
    )
}

export default NewsLists

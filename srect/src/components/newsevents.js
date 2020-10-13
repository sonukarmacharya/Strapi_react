import React, { useEffect, useState } from 'react'
import axios from "axios";
import orbit from '../assets/img/about/orbit.jpg'
import '../assets/css/style.css'

const API_URL = "http://localhost:1337";
const Newevents= ()=> {
    const [news, setNews] = useState([]);
    useEffect(() => {
      axios.get("http://localhost:1337/news-and-events").then((response) => {
        console.log("News", response.data);
        setNews(response.data);
       
      });
    }, []);
    return (
        <div className="tips-triks-area tips-padding" id="newsevents">
            <div className="container">
                 {/* <!-- Section-tittle --> */}
                 <div className="row d-flex justify-content-center">
                    <div className="col-lg-6 col-md-8 pr-0">
                        <div className="section-tittle text-center">
                            <h2>News & Events</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                {news.map((data)=>(
                     <div className="col-xl-4 col-lg-4 col-md-6" key={data.Id}>
                     <div className="single-tips mb-50">
                         <div className="tips-img">
                             <img src={`${API_URL}${data.Image.url}`} alt=""/>
                         </div>
                         <div className="tips-caption">
                <h4><a href="#">{data.Title}</a></h4>
                             <p className="tips-news"> {data.Desc}</p>
                             <span>{data.Date}</span>
                             
                         </div>

                     </div>
                 </div>
                ))}
                </div>
            </div>
            </div>
                
    )
}
export default Newevents
// import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function DayList() {
    // const [days, setDays] = useState([]);
    //const [count, setCount] = useState(0);

   const days =  useFetch('http://localhost:3001/days');

    // useEffect(() => {
    //     fetch('http://localhost:3001/days')
    //     .then(res => {
    //         return res.json();
    //     })
    //     .then(data => {
    //         setDays(data);
    //     });
    // }, []);

    if(days.length === 0) {  // 이렇게 legth가 0일때 로딩글자를 보여줌.
        return <span>Loading...</span>
    }

    return (
        <>
        <ul className="list_day">
           {days.map(day => (
            <li key={day.id}> 
                <Link to={`/day/${day.day}`}>Day {day.day}</Link>
            </li>
           ))} 
        </ul>
    </>
    )
}
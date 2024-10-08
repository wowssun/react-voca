import { useParams } from "react-router-dom";
import Word from "./Word";
// import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";


export default function Day() {
    const { day } = useParams();
   // const [words, setWords] = useState([]);

    // useEffect(() => {
    //     fetch(`http://localhost:3001/words?day=${day}`)
    //     .then(res => {
    //         return res.json();
    //     })
    //     .then(data => {
    //         setWords(data);
    //     });
    // }, [day]);

    const words = useFetch(`http://localhost:3001/words?day=${day}`);

    // const a = useParams();
    // console.log(a);  // 해당 파라미터가 들어옴 App.js에서 :day를 사용했기 때문에
    // day 값으로 파라미터가 들어옴.
    // const day = a.day; // a 안에 있는 day를 사용해야 한다.
    // dummy.words
//     const wordList = dummy.words.filter(word => (
//         Number(word.day) === Number(day)
//  ))

    return (
        <>
        <h2>Day {day}</h2>
        {words.length === 0 && <span>Loading...</span>}
        <table>
            <tbody>
                {words.map(word => (
                    <Word word={word} key={word.id}></Word>
                ))}
            </tbody>
        </table>
        </>
    )

}
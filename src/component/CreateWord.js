import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useRef, useState } from "react"

export default function CreateWord() {
    const days = useFetch('http://localhost:3001/days');
    const history = useNavigate();
    const [isLoading, setIsLoding] = useState(false);

    function onSubmit(e) {
        e.preventDefault();  // 이렇게 하면 form태그로 묶인 저장버튼을 눌러도 아무일도 일어나지 않는다. 기본 기능을 막아준 것.

        // console.log(engRef.current.value);  // current 속성을 이용하면 해당요소에 접근, value는 input에 입력된 값.
        // console.log(korRef.current.value);
        // console.log(dayRef.current.value);

        if (!isLoading) {
            setIsLoding(true);
            fetch(`http://localhost:3001/words/`, {
                method : "POST",
                headers : {
                    "Content-Type" : 'application/json',
                },
                body : JSON.stringify({
                    day : dayRef.current.value,
                    eng : engRef.current.value,
                    kor : korRef.current.value,
                    isDone : false,
                }),
            })
            .then(res => {
                if(res.ok) {
                    alert("생성이 완료되었습니다");
                    history(`/day/${dayRef.current.value}`)
                    setIsLoding(false);
                }
            });
        }
        
    }

    const engRef = useRef(null); // 초기값은 null
    const korRef = useRef(null);
    const dayRef = useRef(null);

   

    return (
        <form onSubmit={onSubmit}>
            <div className="input_area">
                <label>Eng</label>
                <input type="text" placeholder="computer" ref={engRef} />
            </div>
            <div className="input_area">
                <label>Kor</label>
                <input type="text" placeholder="컴퓨터" ref={korRef} />
            </div>
            
            <div className="input_area">
                <label>Day</label>
                <select ref={dayRef}>
                    {days.map(day => (
                        <option key={day.id} value={day.day}>{day.day}</option>
                    ))}
                </select>
                
            </div>
            <button style={{
                opacity : isLoading ? 0.3 : 1,
            }}>{isLoading ? "Saving..." : "저장"}</button>
        </form>
    )
}
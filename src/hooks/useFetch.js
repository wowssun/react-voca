import { useState, useEffect } from "react";

export default function useFetch(url) {
    const [data, setData] = useState([]);  // 초기값이 빈배열

    useEffect(() => {
        fetch(url)
        .then(res => {
            return res.json();
        })
        .then(data => {
            setData(data);
        });
    }, [url]);

    return data;
}
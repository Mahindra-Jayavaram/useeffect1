import { useEffect, useState } from "react";
// const axios = require('axios');
import axios from "axios"

export const Groceries = ()=>{
    const [text, setText] = useState("");
    const [groceries, setGroceries] = useState([]);
    const [page, setPage] = useState(1);


    useEffect(()=>{
      getData();
    },[page])

const total_pages = Math.floor(groceries.length/3);

    const getData = ()=>{
        // console.log(groceries.length)
        axios.get(`http://localhost:1342/groceries?_limit=3&_page=${page}`).then((res)=>{
            setGroceries(res.data);
        })
    }

return (
    <div>
        <input type= "text" onChange ={(e) => setText(e.target.value)} />

        <button onClick={()=>{
            fetch(" http://localhost:1342/groceries", {
                method: "POST",
                body: JSON.stringify({title:text, purchased: false}),
                headers:{
                    "content-type" : "application/json"
                }
            }).then(()=>{
                getData()
            });
            // axios.post("http://localhost:1342/groceries", {tile :text, purchased: false})
        }}>
           Save Grocery 
        </button>
        {groceries.map((g)=>
            <div key={g.id} className = "itemNames"> {g.title} </div>
        )}
        <button onClick={()=>{
            setPage(page - 1)
        }}  className = "prev">Prev</button>


        <button onClick ={()=>{
            console.log(groceries.length)
            if(groceries.length > 0 && groceries.length === 3) setPage(page + 1);
        }}>Next</button>
    </div>
);


};
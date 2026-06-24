// import { useEffect, useState } from "react";



// function App(){

//   const [query , setQuery] =useState("")
//   const [result,setResult] = useState("")

//   useEffect(()=>{
//       const debouncing = setTimeout(() => {
//         setResult(query)
//       }, 2000);
//   },[query])
//   return(
//     <>
//     <input type="text" name="" id=""  onChange={(e)=>setQuery(e.target.value)}/>
//     <div>
//       Result:{result}
//     </div>
//     </>
//   )
// }

// export default App;
// // it is an technique in which we make Api optimize
// //pegination

import { useEffect, useState } from "react"
import axios from "axios";
function App(){
      const API="https://api.themoviedb.org/3/discover/movie?api_key=857696c41ec9ba15dd7185a7b50478e0&page="

      const [page,setpage] =useState(1)
      const [movies,setmovies] = useState([])
      const handlePrevious = ()=>{
        if(page>1){

          setpage(page-1)
        }
        
      }
      const handleNext =()=>{
        setpage(page+1)
      }

      useEffect(()=>{
          async function fetchingAPI()  {
            let response = await axios.get(`${API}${page}`)
            console.log(response.data.results)
            setmovies(response.data.results)
          }
          fetchingAPI();
      },[page])
  return(
    <>
    <button onClick={handlePrevious}>Previous</button>
    <span>{page}</span>
    <button onClick={handleNext}>Next</button>
    <div>
      {movies.map((item,index)=>{
        return(
          <div>
            <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="" width={50}/>
            <h4>{item.title}</h4>
            </div>
        )
      })}
    </div>
    </>
  )
}

export default App;



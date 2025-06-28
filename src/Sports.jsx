// import React, { Fragment, useEffect, useState } from 'react'
// import NavBar from './Navbar'
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Sports = () => {
//     const [search, setSearch] = useState("india");
//     const [newsData, setNewsData] = useState([])
  
//     const API_KEY = "46b42d992d354eefb64a3c64047de78e";
  
//     const getdata = async () => {
//       let { data } = await axios.get(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
//       // console.log(data.articles);
//       setNewsData(data.articles)
//     };
//   console.log(newsData);
  
//     let navigate=useNavigate()
  
//     useEffect(() => {
//       getdata()
//     }, [])
  
//     const handleinput = (event) => {
//       setSearch(event.target.value);
//     };
  
//     const userInput = (event) => {
//       setSearch(event.target.value)
  
//     }
//     // console.log(event);
  
//     const handleSubmit = (event) => {
//       event.preventDefault()
//     }
//   return (
//     <>
//      <NavBar/>
//       <section className="heading">
//         <div>
//           <h1>LATEST NEWS</h1>
//         </div>
//         <div>ALL NEWS</div>

//         <div>
//           <form onSubmit={handleSubmit}>
//           <input type="text" placeholder="Search News" onChange={handleinput} value={search} />
//           <button onClick={()=>{navigate(getdata())}}>Search</button>
//           </form>
//         </div>
//       </section>
//       <div className="pagetitle">
//         <h3>Stay Update With LatestNews</h3>
//       </div>

//       <section>
//         <div className="navbar">
//           <button onClick={userInput} value="sports">Sports</button>
//           <button onClick={userInput} value="politics">Politics</button>
//           <button onClick={userInput} value="health">Health</button>
//           <button onClick={userInput} value="entertainment">Entertainment</button>
//           <button onClick={userInput} value="technology">Technology</button>
//         </div>
//       </section>

//       <section>
//         <div>
//            {newsData.map((val)=>{
//             console.log(val);
            

// if (!val.urlToImage) {
//   return null
// }else{
//   return (
//     <Fragment  key={val.url}>
//    <div>
//    <img src={val.urlToImage} alt="" width="150px" height="150px"/>
//    <span onClick={()=>{window.open(val.url)}}>{val.title}</span>
//     <p>{val.description}</p>

//     <button onClick={()=>{window.open(val.url)}}>Read More</button>

//    </div>
//     </Fragment>
//   )
// }
// })}

//         </div>
//       </section>

//     </>
//   )
// }

// export default Sports
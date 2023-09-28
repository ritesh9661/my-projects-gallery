import React, { useEffect, useState,useRef } from "react";
import icon from './assets/rectangle-list-regular.svg'

import "./App.css";
function App() {
  const [BackendData, setBeckendData] = useState([{}]);
  const [search,setSearch]=useState('')
  const [clickData,setClickData]=useState('')
  const [isClicked,setIsClicked]=useState(false)
  const inputRef = useRef(null);
  console.log(isClicked);
  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setBeckendData(data);
        console.log(data);
      });
  }, []);

  BackendData.sort();
  const togleClicked=()=>{
    setIsClicked(!isClicked)
  }

  const view = (a) => {
	setClickData(a)
    setIsClicked(true)
  }

  const searchfunction=()=>{
    setSearch(inputRef.current.value)
  }



  return (
    // onChange={(e)=>setSearch(e.target.value)}
    <div className="  w-full">
        <div className=" text-center">
        <input  ref={inputRef} placeholder="Title, Project.Technologies" className=" bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow min-w-[50%] "></input>
        <button onClick={searchfunction} class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
  Search
</button>
        </div>
        <div className=" absolute right-0 w-[50%]">
        { isClicked  && (
        <div className=  " popUp top-0 py-5 min-w-[100%]  max-w-fit  align-middle  m-auto profile-popup  rounded-xl text-sm" onClick={ (e) => togleClicked()}>
         <div className="m-3 ">
            <div className=" font-semibold flex max-w-max align-middle text-xl"><img className=" pe-2 h-5 m-auto" src={icon}/> Title</div><div className=" text-lg">{clickData.Project_Title}</div></div>
                  <div className="m-3 text-lg"><div className=" font-semibold flex max-w-max align-middle text-xl"><img className=" pe-2 h-5 m-auto" src={icon}/>Project.Technologies</div><div className=" max-w-full">{clickData.Project_Technologies}</div></div>
                  <div className="m-3 text-lg"><div className=" font-semibold flex max-w-max align-middle text-xl"><img className=" pe-2 h-5 m-auto" src={icon}/>Technical_Skillset.Frontend</div><div>{clickData.Technical_Skillset_Frontend}</div></div>
                  <div className="m-3 text-lg"><div className=" font-semibold flex max-w-max align-middle text-xl"><img className=" pe-2 h-5 m-auto" src={icon}/>Technical_Skillset.Backend</div><div>{clickData.Technical_Skillset_Backend}</div></div>
                  <div className="m-3 text-lg"><div className=" font-semibold flex max-w-max align-middle text-xl"><img className=" pe-2 h-5 m-auto" src={icon}/>Other_Information_Availability</div><div className=" overflow-auto">{clickData.Other_Information_Availability}</div></div>
             
        </div>
      )}</div>
        <div className="container  self-center inline-flex ">
    
        
          {BackendData !== null &&
            BackendData.filter((val)=>{
                return search.toLowerCase()===''? val:
                val.Project_Title.toLowerCase().includes(search) ||val.Project_Technologies.toLowerCase().includes(search)  ;
            }).map((val) => {
              return (
                <div className="   ">
                <div key={val._id} className="cards border-2 p-2 " onClick={(e) => view(val)}>
                    
                  <div className=""><div className=" font-semibold">Title</div><div>{val.Project_Title}</div></div>
                  <div className=""><div className=" font-semibold">Project.Technologies</div><div>{val.Project_Technologies}</div></div>
                  <div className=""><div className=" font-semibold">Technical_Skillset.Frontend</div><div>{val.Technical_Skillset_Frontend}</div></div>
                  <div className=""><div className=" font-semibold">Technical_Skillset.Frontend</div><div>{val.Technical_Skillset_Backend}</div></div>
                  <div className=""><div className=" font-semibold">Other_Information_Availability</div><div>{val.Other_Information_Availability}</div></div>
                </div>
                </div>
              );
            })}
           

    </div>
   
    
    
    </div>
  );
}

export default App;

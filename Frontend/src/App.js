import React, { useEffect, useState, useRef } from "react";
import icon from "./assets/rectangle-list-regular.svg";
import ReadMore from "./components/ReadMore";

import "./App.css";
function App() {
  const [BackendData, setBeckendData] = useState([{}]);
  const [search, setSearch] = useState("");
  const [clickData, setClickData] = useState("");
  const [isClicked, setIsClicked] = useState(false);
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
  const togleClicked = () => {
    setIsClicked(!isClicked);
  };

  const view = (a) => {
    setClickData(a);
    setIsClicked(true);
  };

  const searchfunction = () => {
    setSearch(inputRef.current.value);
  };

  return (
    <div className="container mx-auto ">
              {isClicked && (
          <div
            className="fixed right-0 flex flex-col cursor-not-allowed justify-between popUp py-5 h-full sm:w-[30%] w-full align-bottom profile-popup text-sm"
            onClick={(e) => togleClicked()}
          > 
            
            <div className=" font-semibold m-3 text-2xl">{clickData.Project_Title}</div>
            <div className="m-3 ">
              <div className=" font-semibold flex max-w-max align-middle text-xl">
                <img className=" pe-2 h-5 m-auto" src={icon} /> Title
              </div>
              <div className=" text-lg">{clickData.Project_Title}</div>
            </div>
            <div className="m-3 text-lg">
              <div className=" font-semibold flex max-w-max align-middle text-xl">
                <img className=" pe-2 h-5 m-auto" src={icon} />
                Project.Technologies
              </div>
              <div className=" max-w-full">
                {clickData.Project_Technologies}
              </div>
            </div>
            <div className="m-3 text-lg">
              <div className=" font-semibold flex max-w-max align-middle text-xl">
                <img className=" pe-2 h-5 m-auto" src={icon} />
                Technical_Skillset.Frontend
              </div>
              <div>{clickData.Technical_Skillset_Frontend}</div>
            </div>
            <div className="m-3 text-lg">
              <div className=" font-semibold flex max-w-max align-middle text-xl">
                <img className=" pe-2 h-5 m-auto" src={icon} />
                Technical_Skillset.Backend
              </div>
              <div>{clickData.Technical_Skillset_Backend}</div>
            </div>
            <div className="m-3 text-lg">
              <div className=" font-semibold flex max-w-max align-middle text-xl">
                <img className=" pe-2 h-5 m-auto" src={icon} />
                Other_Information_Availability
              </div>
              <div className=" overflow-auto">
                {clickData.Other_Information_Availability}
              </div>
            </div>
          </div>
        )}
      <div className=" text-center">
        <input
          ref={inputRef}
          placeholder="Title, Project.Technologies"
          className=" bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow min-w-[50%] "
        ></input>
        <button
          onClick={searchfunction}
          class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        >
          Search
        </button>
      </div>

      <div className=" grid xl:grid-cols-5 sm:grid-cols-3 grid-cols-1 max-h-max px-5 py-2 gap-6">
        {BackendData !== null &&
          BackendData.filter((val) => {
            return search.toLowerCase() === ""
              ? val
              : val.Project_Title.toLowerCase().includes(search) ||
                  val.Project_Technologies.toLowerCase().includes(search);
          }).map((val) => {
            return (
              
              <div className="  card p-2 rounded">
                <div
                  key={val._id}
                  className=" p-2 "
                  onClick={(e) => view(val)}
                >
                  <div className="py-2">
                    <div className=" text-slate-400 text-sm">Title</div>
                    <div className=" font-semibold">{val.Project_Title}</div>
                  </div>
                  <div className="py-2">
                    <div className=" text-slate-400 text-sm">Project.Technologies</div>
                    <div><ReadMore>{val.Project_Technologies}</ReadMore></div>
                  </div>
                  <div className=" py-2">
                    <div className=" text-slate-400 text-sm">
                      Technical_Skillset.Frontend
                    </div>
                    <div><ReadMore>{val.Technical_Skillset_Frontend}</ReadMore></div>
                  </div>
                  <div className="py-2">
                    <div className=" text-slate-400 text-sm">
                      Technical_Skillset.Frontend
                    </div>
                    <div><ReadMore>{val.Technical_Skillset_Backend}</ReadMore></div>
                  </div>
                  <div className="py-2">
                    <div className=" text-slate-400 text-sm">
                      Other_Information_Availability
                    </div>
                    <div><ReadMore>{val.Other_Information_Availability}</ReadMore></div>
                  </div>
                </div>
              </div>
            
            );
          })}
      </div>
    </div>
  );
}

export default App;

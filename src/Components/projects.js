import React, {useState, useEffect} from 'react';

import data from './data';

const Projects = () => {

    const [dataNew, setDataNew] = useState(data);
    const [type, setType] = useState("All");

    const changeData = (newType) => {
        setType(newType);
        switch(newType){
            case "ALL":
                setDataNew(data);
                break;
            case "VUE JS":
                setDataNew(data.filter(datas => datas.tags.includes("Vue JS")));
                break;
            case "REACT":
                setDataNew(data.filter(datas => datas.tags.includes("React")));
                break;
            case "API":
                setDataNew(data.filter(datas => datas.tags.includes("Axios") || datas.tags.includes("API Handling")));
                break;
            default:
                setDataNew(data);
                break;
        }
    }

    return (
        <div style={{backgroundColor:"#00000d", width:"100%"}}>       
            <div class = "row" style = {{minHeight:"100px", marginBottom:"80px"}} id = "projects">
                <div class = "row80" style = {{color:"white", marginTop:"150px"}} >
                    <div class = "column" style={{textAlign:"left"}}>
                        <h5 className="numbering">03 | 05</h5>
                        <h5 className="subHeader">{type} PROJECTS ({dataNew.length})</h5>
                        <h5 className="projectsText">A showcase containing some of the many projects I have developed</h5>
                    </div>
                    <div class ="column" style={{textAlign:"right"}}>
                        <select className="ml-auto my-2 p-2 shadow-md rounded-md font-medium" onChange={ val => changeData(val.target.value)}>
                            <option value="ALL">All</option>
                            <option value="REACT">React</option>
                            <option value="VUE JS">Vue JS</option>
                            <option value="API">External API</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class = "row center">
                <div class="grid">
                    {dataNew.map((x) => {
                        return (
                            <div class = "card-alt">
                                <img src={x.image} alt="Logo" style = {{width:"100%"}}/>
                                <div class = "card-text">
                                    <div style={{display:"flex", justifyContent:"space-between"}}>
                                        <p className="projectsText">{x.name}</p>
                                        <p className="projectsText">{x.date}</p>
                                        <a target="_blank" href={x.link}><i class="fab fa-github fa-2x" style = {{color: "#ff6666"}}></i></a>
                                    </div>
                                    <div>
                                        {x.tags.map((tag) => {
                                            return (
                                                <p className="projectsSmall badge badge-success">{tag}</p>
                                            )
                                        })}
                                    </div>
                                    <p className="projectsSmall">{x.desc}</p>
                                
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div class = "row" style = {{backgroundColor:"#00000d", height:"100px"}}>
            </div>
        </div>
    );
}

export default Projects;
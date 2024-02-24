import React from "react";
import ServicesCard from "./ServicesCard";
import {services} from "./../../assets/data/services"
const Serviceslist = () => {
    return (
        <>
            <div className="row">
                {services.map((item, index) => (
                    <div className="col-md-6" key={index}>
                        <ServicesCard item={item} index={index} />
                    </div>
                ))}
            </div>
        </>
    );
};

export default Serviceslist;
// const Serviceslist=()=>{
//     return(
//         <>
//         <div className="row">
//             <div className="col-md-6">
//             {services.map((item,index)=>{
//                 return(
//                     <ServicesCard item={item} index={index}/>)}
//                 )
//             }
           
//             </div>
//         </div>
           
//         </>
//     )
// }
// export default Serviceslist;

import type { Data } from "@/lib/types"
import Image from "next/image"

export default function PackageDetails(props:Data){



    return(
        <div className="text-white text-center pt-10  flex flex-col items-center mx-20 mb-20  ">

                <div className="text-4xl">
                    Details of {props.name}

                </div>

                <div className="pt-10">
                    <Image alt="package image" src={`/${props.image}`} width={600} height={400}></Image>
                </div>

                <div className="pt-10 text-2xl">
                    {props.description}
                </div>

                <div className="pt-10 text-xl font-bold">
                    Visit the place in just {props.cost}Rs.
                </div>

                <div className="pt-10 pb-8">
                <div className="pb-8" style={{fontSize:"20px"}}>Activities which is available in this region :</div>
                {props.activities.map((value,index)=>{
                     return(
                        <div key={index} className="p-2 font-bold"> {value}</div>
                    )
                })}

                </div>

                <div style={{fontSize:"30px"}}>

                    Contact : {props.contact}
                </div>

        </div>
    )




}
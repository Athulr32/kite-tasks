
import Image from 'next/image'
import Package from '@/components/Package'
import { useEffect, useState } from 'react'
import { Data } from '@/lib/types';

export default function Home() {

  const [packageState, setPackage] = useState<Data[]>();
  const [location, setLocation] = useState<String>("All");
  const [sort, setSort] = useState<String>("random");


  async function getPackage() {

    try{
      const res = await fetch("/api/package/list");
      const allPackages: Data[] = await res.json() as Data[]
  
      const fliteredPackages = allPackages.filter((value, index) => {
        if (location === "All") {
          return value;
        }
        else {
          if (value.location === location) {
            return value
          }
        }
      })
  
      if(sort === "ht"){
  
        fliteredPackages.sort((a,b) => a.cost - b.cost); 
      }
      else if (sort === "lh"){
        fliteredPackages.sort((a,b) => a.cost - b.cost); 
      }
  
      setPackage(fliteredPackages)
    }
    catch(e){

      getPackage()
    }

  }


  function locationHandler(e: any) {

    setLocation(e.target.value)


  }

  function sortHandler(e: any) {

    setSort(e.target.value)
  }


  useEffect(() => {

    getPackage();


  }, [location, sort])



  return (
    <>

      {!packageState && <div>Loading</div>}

      {packageState &&
        <div style={{ height: "100%" }}>


          <div style={{ display: "flex", flexDirection: "row", margin: "0px 0px 0px 100px", width: "90%", height: "100vh", }}>

            <div style={{ display: "flex", flexWrap: "wrap", width: "85%", color: "white" }}>

              {packageState.length === 0 ? <div> Sorry No package Available</div> : packageState.map((value, index) => {
                return (
                  <div style={{ margin: "40px" }} key={index} >
                    <Package id={value.id} cost={value.cost} image={value.image} description={value.description} name={value.name}></Package>
                  </div>
                )
              })

              }


            </div>

            <div className='flex flex-col' >


              {/* {Filter based on location} */}
              <div className='text-white pt-20' >

                <div className='py-5'>
                  <div> Fliter</div>
                  <div> based on Location</div>
                </div>
                <select onChange={locationHandler} className="text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option selected>All</option>
                  <option value="Nepal">Nepal</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Kashmir">Kashmir</option>
                  <option value="Ladakh">Ladakh</option>
                </select>
              </div>


              {/* Fliter based on price*/}

              <div className='text-white pt-10' >

                <div className='py-5'>
                  <div> Sort</div>
                  <div> based on Price</div>
                </div>
                <select onChange={sortHandler} className="text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option value="random">Random</option>
                  <option value="ht">High to Low</option>
                  <option value="lh">Low to High</option>
                </select>
              </div>
            </div>

          </div>



        </div>

      }

    </>
  )
}

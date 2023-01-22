import React from 'react'
import P1 from "../utils/img/P1.jpg"
import P2 from "../utils/img/p2.jpg"
import P3 from "../utils/img/p8.jpg"

const Testimonial = () => {
  return (
    <div style={{background:"brown",color:"white"}}>
    
<section className="relative pt-24 pb-32 bg-white overflow-hidden" style={{background:"brown",color:"white"}} >

  <div className="relative z-10 container px-4 mx-auto grid-22 div-center-80">
    <h3 className="mb-16 text-6xl md:text-7xl font-bold font-heading text-center tracking-px-n leading-tight">Don&apos;t just take our word for it</h3>

    {/*  */}
    <div className="flex flex-wrap -m-3">
      <div className="w-full md:w-1/2 lg:w-1/3 p-3">
        <div className="p-6 h-full bg-white bg-opacity-60 border rounded-4xl">
          <div className="flex flex-col justify-between h-full">

            <div className="mb-5 block">


              <div className="flex flex-wrap mb-4 -m-2">
                <div className="w-auto p-2">
                  <img alt="Image" src={P2}  style={{borderRadius:"50%",height:"150px",width:"150px"}}/>
                </div>
                <div className="w-auto p-2">
                  <h3 className="font-semibold leading-normal label">Jacob Jones</h3>
                  <p className="text-gray-500 uppercase form-font">@brooklysim</p>
                </div>
              </div>

              <p className="text-lg font-medium label">If you haven&rsquo;t tried out Flaro App yet, I would definitely recommend it for both designers and developers &#x1F919;&#x1F3FB;</p>

            </div>

            <div className="block">
              <p className="text-sm text-gray-500 font-medium form-font">3 days ago</p>
            </div>

          </div>
        </div>
      </div>
      </div>
    <div className="flex flex-wrap -m-3">
      <div className="w-full md:w-1/2 lg:w-1/3 p-3">
        <div className="p-6 h-full bg-white bg-opacity-60 border rounded-4xl">
          <div className="flex flex-col justify-between h-full">

            <div className="mb-5 block">


              <div className="flex flex-wrap mb-4 -m-2">
                <div className="w-auto p-2">
                  <img src={P1} alt="Image" style={{borderRadius:"50%",height:"150px",width:"150px"}}/>
                </div>
                <div className="w-auto p-2">
                  <h3 className="font-semibold leading-normal label">Jacob Jones</h3>
                  <p className="text-gray-500 uppercase form-font">@brooklysim</p>
                </div>
              </div>

              <p className="text-lg font-medium label">If you haven&rsquo;t tried out Flaro App yet, I would definitely recommend it for both designers and developers &#x1F919;&#x1F3FB;</p>

            </div>

            <div className="block">
              <p className="text-sm text-gray-500 font-medium form-font">3 days ago</p>
            </div>

          </div>
        </div>
      </div>
      </div>
    <div className="flex flex-wrap -m-3">
      <div className="w-full md:w-1/2 lg:w-1/3 p-3">
        <div className="p-6 h-full bg-white bg-opacity-60 border rounded-4xl">
          <div className="flex flex-col justify-between h-full">

            <div className="mb-5 block">


              <div className="flex flex-wrap mb-4 -m-2">
                <div className="w-auto p-2">
                  <img src={P3} alt="Image" style={{borderRadius:"50%",height:"150px",width:"150px"}}/>
                </div>
                <div className="w-auto p-2">
                  <h3 className="font-semibold leading-normal label">Jacob Jones</h3>
                  <p className="text-gray-500 uppercase form-font">@brooklysim</p>
                </div>
              </div>

              <p className="text-lg font-medium label">If you haven&rsquo;t tried out Flaro App yet, I would definitely recommend it for both designers and developers &#x1F919;&#x1F3FB;</p>

            </div>

            <div className="block">
              <p className="text-sm text-gray-500 font-medium form-font">3 days ago</p>
            </div>

          </div>
        </div>
      </div>
      </div>

      {/*  */}
      </div>


  



</section>


    </div>
  )
}

export default Testimonial

import React from "react"
import videobg from '../assets/video305.mp4'

const Hero = () => {
    return (
        <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover main custom-img">
            {/*Overlay*/}
            <div className=" bg-red-800">
            <video src={videobg} autoPlay loop muted/>
            <div className="content">
                
                {/* <h2 className="font-extrabold text-5xl opacity-75 text-white mb-40 shadow">Welcome to 305 Sports</h2> */}
                {/* <p>"Building the community, one child at a time"</p> */}
                <button className="mt-40 border rounded-xl px-4 py-1 hover:bg-red-700 hover:text-black">Register Now!</button>
            </div>
            </div>
        </div>
    )
}

export default Hero
import React from "react"
import videobg from '../assets/video305.mp4'

const Hero = () => {
    return (
        <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover main">
            {/*Overlay*/}
            <div />
            <video src={videobg} autoPlay loop muted/>
            <div className="content">
                {/* <h2 className="font-extrabold text-4xl">Welcome to 305 Sports</h2>
                <p>"Building the community, one child at a time"</p> */}
                <button className="mt-40 border-spacing-7 rounded-xl">Register Now!</button>
            </div>
        </div>
    )
}

export default Hero
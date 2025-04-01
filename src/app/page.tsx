"use client";
import { useEffect, useState } from "react";
import Header from "@/components/Header"; // Ensure correct import
import Spline from "@splinetool/react-spline";
import Typewriter from "typewriter-effect";
import Footer from "@/components/Footer";
import Image from "next/image";
import profilePic from "@/public/profile.png"; // Import your profile picture
import { FaArrowRight } from "react-icons/fa"; // Import right arrow icon
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter(); // Initialize the router

  // Function to handle navigation to the Projects page
  const onClick = () => {
    router.push("/Projects"); // This will navigate to the '/projects' page
    console.log("Navigating to Projects page...");
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* ✅ Render Header */}
      <Header />

      {/* Right Arrow for Navigation with Pulsing Effect */}
      <button
        onClick={onClick}
        className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg z-50 hover:bg-gray-600 pulse-effect"
      >
        <FaArrowRight size={30} />
       
      </button>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row w-full h-screen pt-16"> {/* pt-16 to avoid overlap */}
        
        {/* Left Half - Profile Picture & Welcome Text */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center bg-black p-8">
          <div className="text-white text-center md:text-left">
            {/* Profile Picture */}
            <div className="flex justify-center md:justify-start mb-6">
              <Image 
                src={profilePic} 
                alt="Profile Picture" 
                width={200} 
                height={200} 
                className="rounded-full border-3 border-Black shadow-lg"
              />
            </div>
            
            <p className="text-lg opacity-80 max-w-md mt-4">
              Senior DevOps Engineer
            </p>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-[-.02em] mb-4">
              Hello there,
            </h1>
            <div className="text-xl font-semibold text-blue-400">
              <Typewriter
                options={{
                  strings: [
                    "I am a Senior DevOps Specialist",
                    "I am a Cloud Engineer",
                    "I am a Cloud Architect",
                    "I am a Cloud Consultant",
                    "I am a Cloud Developer",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50,
                }}
              />
            </div>
            <p className="text-lg opacity-80 max-w-md mt-4">
              I help companies scale and operate smoothly with rock-solid cloud infrastructure.
              With <strong>10+ years in DevOps,</strong><br></br>I design, automate, and optimize cloud environments using 
              <strong> Terraform, Multi-cloud Providers, Kubernetes, and CI/CD Tools.</strong>
            </p>
          </div>
        </div>

        {/* Right Half - Spline Animation */}
        <div className="w-full md:w-1/2 h-full relative">
          <Spline
            scene="https://prod.spline.design/m9s3sYiLmNjNDAVq/scene.splinecode"
            className="absolute inset-0 w-full h-full"
          />
        </div>
      </div>

      {/* ✅ Render Footer */}
      <Footer />
    </div>
  );
}

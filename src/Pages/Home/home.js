import React from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import Button from '@mui/material/Button';

import './home.css';

const ArtemisHomepage = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* Background Animation */}
      <Canvas>
        <Stars count={5000} factor={4} fade speed={0.5} />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
      
      {/* Content */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold text-blue-400 drop-shadow-lg"
        >
          Artemis: A New Era of Lunar Exploration
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg mt-4 text-gray-300 max-w-2xl"
        >
          Join NASA’s Artemis program as we journey back to the Moon and beyond. Explore the technology, mission objectives, and the future of space travel.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-6 flex gap-4"
        >
          <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 text-lg rounded-2xl shadow-lg">
            Explore the Mission
          </Button>
          <Button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 text-lg rounded-2xl shadow-lg">
            View 3D Model
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default ArtemisHomepage;
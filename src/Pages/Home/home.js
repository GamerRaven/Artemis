import React from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import Button from '@mui/material/Button';

import './home.css';

export default function ArtemisHomepage(){
  return (
    <div className="relative h-screen w-full overflow-hidden bg-black text-white">
      <Canvas>
        <Stars count={5000} factor={4} fade speed={0.5} />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>

      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="bg-black bg-opacity-30 backdrop-blur-md p-8 rounded-2xl"
        >
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl font-bold text-blue-400 drop-shadow-lg font-orbitron"
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
            className="mt-6 flex gap-4 justify-center"
          >
            <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 text-lg rounded-2xl shadow-lg button_one" href="/mission">
              Explore the Mission
            </Button>
            <Button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 text-lg rounded-2xl shadow-lg button_two">
              View 3D Model
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
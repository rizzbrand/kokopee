import "./Transition.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Transition = (Page) => {
  return () => {
    const [dimensions, setDimensions] = useState({
      blocks: [],
      width: 0,
      height: 0,
    });

    useEffect(() => {
      const blockSize = 100;
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      const numCols = Math.ceil(screenWidth / blockSize);
      const numRows = Math.ceil(screenHeight / blockSize);
      const numblocks = numCols * numRows;

      const containerWidth = numCols * blockSize + 50;
      const containerHeight = numRows * blockSize + 50;

      const blocksArray = Array.from({ length: numblocks }).map((_, i) => ({
        id: i,
        delay: Math.random() * 0.5,
      }));

      setDimensions({
        blocks: blocksArray,
        width: containerWidth,
        height: containerHeight,
      });
    }, []);

    return (
      <>
        <Page />

        <div
          className="block-container transition-in"
          style={{
            width: dimensions.width,
            height: dimensions.height,
          }}
        >
          {dimensions.blocks.map((block) => (
            <motion.div
              key={`in-${block.id}`}
              className="block"
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.005,
                delay: 0.25 + block.delay,
              }}
            />
          ))}
        </div>

        <div
          className="block-container transition-out"
          style={{
            width: dimensions.width,
            height: dimensions.height,
          }}
        >
          {dimensions.blocks.map((block) => (
            <motion.div
              key={`out-${block.id}`}
              className="block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0 }}
              exit={{ opacity: 1 }}
              transition={{
                duration: 0.005,
                delay: 0.25 + block.delay,
              }}
            />
          ))}
        </div>
      </>
    );
  };
};

export default Transition;

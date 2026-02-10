'use client'

import { motion } from 'framer-motion'

export default function AIVisualization() {
  const nodes = [
    { x: 150, y: 100 },
    { x: 300, y: 150 },
    { x: 450, y: 120 },
    { x: 600, y: 180 },
    { x: 200, y: 250 },
    { x: 350, y: 300 },
    { x: 500, y: 280 },
    { x: 650, y: 320 },
    { x: 150, y: 400 },
    { x: 300, y: 450 },
    { x: 450, y: 420 },
    { x: 600, y: 480 },
  ]

  const connections = [
    { x1: 150, y1: 100, x2: 300, y2: 150 },
    { x1: 300, y1: 150, x2: 450, y2: 120 },
    { x1: 450, y1: 120, x2: 600, y2: 180 },
    { x1: 200, y1: 250, x2: 350, y2: 300 },
    { x1: 350, y1: 300, x2: 500, y2: 280 },
    { x1: 500, y1: 280, x2: 650, y2: 320 },
    { x1: 150, y1: 100, x2: 200, y2: 250 },
    { x1: 300, y1: 150, x2: 350, y2: 300 },
    { x1: 450, y1: 120, x2: 500, y2: 280 },
    { x1: 200, y1: 250, x2: 150, y2: 400 },
    { x1: 350, y1: 300, x2: 300, y2: 450 },
    { x1: 500, y1: 280, x2: 450, y2: 420 },
  ]

  return (
    <div className="relative w-full h-full bg-gray-800">
      <svg
        viewBox="0 0 800 600"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#d946ef" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#d946ef" stopOpacity="0.5" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Connection Lines */}
        {connections.map((line, i) => (
          <motion.line
            key={`line-${i}`}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke="#0ea5e9"
            strokeWidth="2"
            strokeOpacity="0.2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{
              duration: 2,
              delay: i * 0.1,
              repeat: Infinity,
              repeatType: 'reverse',
              repeatDelay: 1,
            }}
          />
        ))}

        {/* Neural Network Nodes */}
        {nodes.map((node, i) => (
          <motion.circle
            key={`node-${i}`}
            cx={node.x}
            cy={node.y}
            r="10"
            fill="#0ea5e9"
            filter="url(#glow)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: i * 0.15,
            }}
          />
        ))}

        {/* Data Flow Particles */}
        {[...Array(12)].map((_, i) => {
          const startX = 100 + (i % 4) * 200
          const startY = 80 + Math.floor(i / 4) * 200
          const endX = startX + 150
          const endY = startY + 120
          return (
            <motion.circle
              key={`particle-${i}`}
              cx={startX}
              cy={startY}
              r="5"
              fill="#d946ef"
              initial={{ opacity: 0 }}
              animate={{
                cx: [startX, endX, startX],
                cy: [startY, endY, startY],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          )
        })}

        {/* Molecular Structure */}
        <g opacity="0.5">
          {[
            { x: 400, y: 200, r: 25 },
            { x: 350, y: 250, r: 18 },
            { x: 450, y: 250, r: 18 },
            { x: 400, y: 300, r: 18 },
          ].map((atom, i) => (
            <motion.circle
              key={`atom-${i}`}
              cx={atom.x}
              cy={atom.y}
              r={atom.r}
              fill="none"
              stroke="#0ea5e9"
              strokeWidth="2.5"
              initial={{ scale: 0 }}
              animate={{ scale: [1, 1.15, 1] }}
              transition={{
                duration: 3,
                delay: i * 0.25,
                repeat: Infinity,
              }}
            />
          ))}
          {[
            { x1: 400, y1: 200, x2: 350, y2: 250 },
            { x1: 400, y1: 200, x2: 450, y2: 250 },
            { x1: 400, y1: 200, x2: 400, y2: 300 },
            { x1: 350, y1: 250, x2: 450, y2: 250 },
          ].map((bond, i) => (
            <line
              key={`bond-${i}`}
              x1={bond.x1}
              y1={bond.y1}
              x2={bond.x2}
              y2={bond.y2}
              stroke="#0ea5e9"
              strokeWidth="2"
              strokeOpacity="0.6"
            />
          ))}
        </g>

        {/* Chart Bars */}
        <g opacity="0.7">
          {[120, 180, 140, 200, 160, 170].map((height, i) => (
            <motion.rect
              key={`bar-${i}`}
              x={50 + i * 115}
              y={500 - height}
              width="50"
              height={height}
              fill="url(#grad2)"
              rx="6"
              initial={{ height: 0, y: 500 }}
              animate={{ height, y: 500 - height }}
              transition={{
                duration: 1.5,
                delay: i * 0.15,
                repeat: Infinity,
                repeatType: 'reverse',
                repeatDelay: 2.5,
              }}
            />
          ))}
        </g>
      </svg>
    </div>
  )
}

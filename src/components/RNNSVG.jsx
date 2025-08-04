

// Animation variants
const nodeVariants = {
  initial: { opacity: 0, scale: 0 },
  animate: i => ({
    opacity: 1,
    scale: 1,
    transition: { 
      delay: i * 0.05, 
      duration: 0.5,
      type: "spring",
      stiffness: 200,
      damping: 10
    }
  })
};

const pathVariants = {
  initial: { pathLength: 0, opacity: 0 },
  animate: i => ({
    pathLength: 1,
    opacity: 0.7,
    transition: {
      pathLength: { type: "spring", duration: 1.5, bounce: 0, delay: 0.3 + i * 0.05 },
      opacity: { duration: 0.3, delay: 0.3 + i * 0.05 }
    }
  })
};

const pulseVariants = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.7, 1, 0.7],
    transition: { 
      repeat: Infinity, 
      duration: 2,
      ease: "easeInOut"
    }
  }
};

function RNNCell({ x, y, isActive = false, timeStep }) {
  const cellSize = 100;
  const nodeRadius = 15;
  
  return (
    <g transform={`translate(${x}, ${y})`}>
      {/* Cell background */}
      <motion.rect
        x={-cellSize/2}
        y={-cellSize/2}
        width={cellSize}
        height={cellSize}
        rx={5}
        fill={isActive ? "#1A2234" : "#1F2937"}
        stroke={isActive ? "#4F46E5" : "#374151"}
        strokeWidth={isActive ? 2 : 1.5}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.9 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      />
      
      {/* RNN Cell */}
      <motion.circle
        cx={0}
        cy={0}
        r={nodeRadius}
        fill={isActive ? "url(#activeNodeGradient)" : "url(#nodeGradient)"}
        filter={isActive ? "url(#glow)" : ""}
        custom={1}
        initial="initial"
        animate="animate"
        variants={nodeVariants}
        {...(isActive && { variants: { ...nodeVariants, animate: pulseVariants.animate } })}
      />
      
      <motion.text
        y={3}
        textAnchor="middle"
        className="fill-current text-white text-xs font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        A
      </motion.text>
      
      {/* Recurrent connection (loop) */}
      <motion.path
        d={`M ${nodeRadius + 2} -${nodeRadius/2} 
           C ${nodeRadius*2.5} -${nodeRadius*2}, ${nodeRadius*2.5} ${nodeRadius*2}, ${nodeRadius + 2} ${nodeRadius/2}`}
        stroke={isActive ? "#A78BFA" : "#8B5CF6"}
        strokeWidth={1.5}
        fill="none"
        markerEnd="url(#arrowhead)"
        custom={3}
        initial="initial"
        animate="animate"
        variants={pathVariants}
      />
      
      {/* Input arrow */}
      <motion.path
        d={`M -${cellSize/2 + 30} 0 L -${nodeRadius + 5} 0`}
        stroke="#6366F1"
        strokeWidth={1.5}
        fill="none"
        markerEnd="url(#arrowhead)"
        custom={4}
        initial="initial"
        animate="animate"
        variants={pathVariants}
      />
      
      {/* Output arrow */}
      <motion.path
        d={`M ${nodeRadius + 5} 0 L ${cellSize/2 + 30} 0`}
        stroke="#6366F1"
        strokeWidth={1.5}
        fill="none"
        markerEnd="url(#arrowhead)"
        custom={5}
        initial="initial"
        animate="animate"
        variants={pathVariants}
      />
      
      {/* Time step label */}
      <motion.text
        y={cellSize/2 + 20}
        textAnchor="middle"
        className={`fill-current ${isActive ? "text-indigo-300 font-medium" : "text-gray-400"} text-sm`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        t = {timeStep}
      </motion.text>
    </g>
  );
}

export default function RNNSVG() {
  const timeSteps = [
    { x: 200, y: 250, isActive: false, timeStep: 't-1' },
    { x: 400, y: 250, isActive: true, timeStep: 't' },
    { x: 600, y: 250, isActive: false, timeStep: 't+1' },
  ];
  
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <svg width="100%" height="100%" viewBox="0 0 800 600" className="overflow-visible">
        <defs>
          {/* Gradient for nodes */}
          <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366F1" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.3" />
          </linearGradient>
          
          {/* Gradient for active nodes */}
          <linearGradient id="activeNodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#EC4899" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#DB2777" stopOpacity="0.3" />
          </linearGradient>
          
          {/* Filter for glowing effects */}
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          
          {/* Arrow marker */}
          <marker 
            id="arrowhead" 
            markerWidth="5" 
            markerHeight="5"
            refX="5" 
            refY="2.5" 
            orient="auto"
          >
            <polygon points="0 0, 5 2.5, 0 5" fill="#6366F1" />
          </marker>
        </defs>
        
        {/* Title */}
        <text 
          x="400" 
          y="70" 
          textAnchor="middle" 
          className="fill-current text-gray-100 text-xl font-medium"
        >
          Recurrent Neural Network (RNN) Architecture
        </text>
        
        {/* Explanatory Text */}
        <text 
          x="400"
          y="95"
          textAnchor="middle"
          className="fill-current text-gray-400 text-xs"
        >
          Simple RNNs process sequential data by maintaining a hidden state across time steps
        </text>
        
        {/* Time step labels */}
        {timeSteps.map((step, i) => (
          <text 
            key={`timestep-label-${i}`}
            x={step.x} 
            y="140"
            textAnchor="middle"
            className={`fill-current ${i === 1 ? "text-indigo-300 font-medium" : "text-gray-300"} text-sm`}
          >
            Time step {step.timeStep}
          </text>
        ))}
        
        {/* Input sequence labels */}
        <text
          x="150"
          y="240"
          textAnchor="end"
          className="fill-current text-gray-400 text-xs"
        >
          Input (x)
        </text>
        
        <text
          x="650"
          y="240"
          textAnchor="start"
          className="fill-current text-gray-400 text-xs"
        >
          Output (y)
        </text>
        
        {/* Connect the cells */}
        <motion.path
          d="M 255 250 L 345 250"
          stroke="#6366F1"
          strokeWidth={1.5}
          fill="none"
          strokeDasharray="4,2"
          markerEnd="url(#arrowhead)"
          custom={6}
          initial="initial"
          animate="animate"
          variants={pathVariants}
        />
        
        <motion.path
          d="M 455 250 L 545 250"
          stroke="#6366F1"
          strokeWidth={1.5}
          fill="none"
          strokeDasharray="4,2"
          markerEnd="url(#arrowhead)"
          custom={7}
          initial="initial"
          animate="animate"
          variants={pathVariants}
        />
        
        {/* RNN Cells */}
        {timeSteps.map((cell, i) => (
          <RNNCell key={`cell-${i}`} {...cell} />
        ))}
        
        {/* Key features section */}
        <g transform="translate(200, 480)">
          <rect width="400" height="60" rx="4" fill="#1E293B" fillOpacity="0.3" />
          
          <text x="15" y="22" className="fill-current text-gray-300 text-xs font-medium">• Hidden state is passed between time steps</text>
          <text x="250" y="22" className="fill-current text-gray-300 text-xs font-medium">• Simple activation function</text>
          
          <text x="15" y="42" className="fill-current text-gray-300 text-xs font-medium">• Processes sequences one element at a time</text>
          <text x="250" y="42" className="fill-current text-gray-300 text-xs font-medium">• Same weights used at each step</text>
        </g>
        
        {/* Legend */}
        <g transform="translate(320, 550)">
          <circle cx="0" cy="0" r="8" fill="url(#nodeGradient)" />
          <text x="12" y="4" className="fill-current text-gray-300 text-xs">RNN Unit</text>
          
          <circle cx="100" cy="0" r="8" fill="url(#activeNodeGradient)" />
          <text x="112" y="4" className="fill-current text-gray-300 text-xs">Active Unit</text>
        </g>
        
        {/* Footer text */}
        <text 
          x="400" 
          y="580" 
          textAnchor="middle" 
          className="fill-current text-gray-400 text-xs"
        >
          RNNs can suffer from vanishing/exploding gradients with long sequences
        </text>
      </svg>
    </div>
  );
} 


// Animation variants (move outside the component)
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

function LSTMCell({ x, y, activeGates = [], showInput = true, showOutput = true, timeLabel, isActiveTimeStep = false }) {
  // Cell dimensions - adjusted to be taller rather than wider
  const width = 130;
  const height = 200;
  const gateRadius = 12;
  const memoryBoxSize = 14;
  
  // Is this gate active
  const isActive = (gate) => activeGates.includes(gate);
  
  return (
    <g transform={`translate(${x}, ${y})`}>
      {/* Cell outline */}
      <motion.rect 
        x={-width/2} 
        y={-height/2} 
        width={width} 
        height={height} 
        rx={6} 
        fill={isActiveTimeStep ? "#1A2234" : "#1F2937"} 
        stroke={isActiveTimeStep ? "#4F46E5" : "#374151"} 
        strokeWidth={isActiveTimeStep ? 2 : 1.5}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.9 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      />
      
    
      
      {/* Internal Memory Line (Cell State) */}
      <motion.path
        d={`M ${-width/2 - 15} 0 L ${width/2 + 15} 0`}
        stroke={isActiveTimeStep ? "#A78BFA" : "#8B5CF6"}
        strokeWidth={isActiveTimeStep ? 2.5 : 2}
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
      />
      
      {/* Memory Cell Box */}
      <motion.rect
        x={-memoryBoxSize/2}
        y={-memoryBoxSize/2}
        width={memoryBoxSize}
        height={memoryBoxSize}
        rx={2}
        fill="url(#memoryGradient)"
        filter={isActiveTimeStep ? "url(#glow)" : ""}
        custom={0}
        initial="initial"
        animate="animate"
        variants={nodeVariants}
      />
      <motion.text
        y={-memoryBoxSize/2 - 8}
        textAnchor="middle"
        className="fill-current text-gray-400 text-xs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        Memory
      </motion.text>
      
      {/* Top Gate Row */}
      {/* Forget Gate */}
      <motion.circle
        cx={-width/3}
        cy={-height/3}
        r={gateRadius}
        fill={isActive('forget') ? "url(#activeGateGradient)" : "url(#cellGradient)"}
        filter={isActive('forget') ? "url(#glow)" : ""}
        custom={1}
        initial="initial"
        animate="animate"
        variants={nodeVariants}
        {...(isActive('forget') && { variants: { ...nodeVariants, animate: pulseVariants.animate } })}
      />
      <motion.text
        x={-width/3}
        y={-height/3 + gateRadius + 15}
        textAnchor="middle"
        className="fill-current text-gray-400 text-xs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        σ
      </motion.text>
      <motion.text
        x={-width/3}
        y={-height/3 - gateRadius - 8}
        textAnchor="middle"
        className="fill-current text-gray-400 text-xs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        Forget
      </motion.text>
      
      {/* Input Gate */}
      <motion.circle
        cx={width/3}
        cy={-height/3}
        r={gateRadius}
        fill={isActive('input') ? "url(#activeGateGradient)" : "url(#cellGradient)"}
        filter={isActive('input') ? "url(#glow)" : ""}
        custom={2}
        initial="initial"
        animate="animate"
        variants={nodeVariants}
        {...(isActive('input') && { variants: { ...nodeVariants, animate: pulseVariants.animate } })}
      />
      <motion.text
        x={width/3}
        y={-height/3 + gateRadius + 15}
        textAnchor="middle"
        className="fill-current text-gray-400 text-xs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        σ
      </motion.text>
      <motion.text
        x={width/3}
        y={-height/3 - gateRadius - 8}
        textAnchor="middle"
        className="fill-current text-gray-400 text-xs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        Input
      </motion.text>
      
      {/* Middle Row - Candidate */}
      <motion.circle
        cx={0}
        cy={-height/6}
        r={gateRadius}
        fill={isActive('candidate') ? "url(#activeGateGradient)" : "url(#cellGradient)"}
        filter={isActive('candidate') ? "url(#glow)" : ""}
        custom={2.5}
        initial="initial"
        animate="animate"
        variants={nodeVariants}
      />
      <motion.text
        x={0}
        y={-height/6 + gateRadius + 15}
        textAnchor="middle"
        className="fill-current text-gray-400 text-xs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.85 }}
      >
        tanh
      </motion.text>
      <motion.text
        x={0}
        y={-height/6 - gateRadius - 8}
        textAnchor="middle"
        className="fill-current text-gray-400 text-xs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.85 }}
      >
        Candidate
      </motion.text>
      
      {/* Bottom Row */}
      {/* Output Gate */}
      <motion.circle
        cx={-width/3}
        cy={height/3}
        r={gateRadius}
        fill={isActive('output') ? "url(#activeGateGradient)" : "url(#cellGradient)"}
        filter={isActive('output') ? "url(#glow)" : ""}
        custom={3}
        initial="initial"
        animate="animate"
        variants={nodeVariants}
        {...(isActive('output') && { variants: { ...nodeVariants, animate: pulseVariants.animate } })}
      />
      <motion.text
        x={-width/3}
        y={height/3 + gateRadius + 15}
        textAnchor="middle"
        className="fill-current text-gray-400 text-xs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        σ
      </motion.text>
      <motion.text
        x={-width/3}
        y={height/3 - gateRadius - 8}
        textAnchor="middle"
        className="fill-current text-gray-400 text-xs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        Output
      </motion.text>
      
      {/* Final Tanh */}
      <motion.circle
        cx={width/3}
        cy={height/3}
        r={gateRadius}
        fill="url(#cellGradient)"
        custom={3.5}
        initial="initial"
        animate="animate"
        variants={nodeVariants}
      />
      <motion.text
        x={width/3}
        y={height/3 + gateRadius + 15}
        textAnchor="middle"
        className="fill-current text-gray-400 text-xs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.95 }}
      >
        tanh
      </motion.text>
      
      {/* Essential connections - simplified */}
      {/* Forget gate to memory */}
      <motion.path
        d={`M ${-width/3} ${-height/3 + gateRadius + 2} C ${-width/3} ${-height/6}, ${-width/4} ${-10}, ${-memoryBoxSize} ${-10}`}
        stroke="#6366F1"
        strokeWidth={1.5}
        fill="none"
        strokeDasharray="3,2"
        custom={7}
        initial="initial"
        animate="animate"
        variants={pathVariants}
      />
      
      {/* Input gate to memory */}
      <motion.path
        d={`M ${width/3} ${-height/3 + gateRadius + 2} C ${width/3} ${-height/6}, ${width/4} ${-20}, ${memoryBoxSize} ${-10}`}
        stroke="#6366F1"
        strokeWidth={1.5}
        fill="none"
        strokeDasharray="3,2"
        custom={8}
        initial="initial"
        animate="animate"
        variants={pathVariants}
      />
      
      {/* Candidate to memory */}
      <motion.path
        d={`M ${0} ${-height/6 + gateRadius + 2} L ${0} ${-height/10} L ${memoryBoxSize/2} ${-height/10} L ${memoryBoxSize/2} ${0}`}
        stroke="#6366F1"
        strokeWidth={1.5}
        fill="none"
        custom={8.5}
        initial="initial"
        animate="animate"
        variants={pathVariants}
      />
      
      {/* Memory to tanh */}
      <motion.path
        d={`M ${memoryBoxSize/2} 0 L ${width/3 - 10} 0 C ${width/3 + 10} 0, ${width/3 + 15} ${height/6}, ${width/3} ${height/3 - gateRadius - 2}`}
        stroke="#6366F1"
        strokeWidth={1.5}
        fill="none"
        custom={9.5}
        initial="initial"
        animate="animate"
        variants={pathVariants}
      />
      
      {/* Output to tanh connection */}
      <motion.path
        d={`M ${-width/3 + gateRadius + 2} ${height/3} L ${width/3 - gateRadius - 2} ${height/3}`}
        stroke="#6366F1"
        strokeWidth={1.5}
        fill="none"
        custom={9.8}
        initial="initial"
        animate="animate"
        variants={pathVariants}
      />
      
      {/* Input Arrows - simplified */}
      {showInput && (
        <>
          {/* Input to all gates */}
          <motion.path
            d={`M ${-width/2 - 30} ${-height/3} L ${-width/3 - gateRadius - 2} ${-height/3}`}
            stroke="#6366F1"
            strokeWidth={1.5}
            fill="none"
            markerEnd="url(#arrowhead)"
            custom={4}
            initial="initial"
            animate="animate"
            variants={pathVariants}
          />
          <motion.text
            x={-width/2 - 35}
            y={-height/3}
            textAnchor="end"
            className="fill-current text-gray-400 text-xs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            Input (x)
          </motion.text>
          
          {/* Hidden state to gates */}
          <motion.path
            d={`M ${-width/2 - 30} ${height/3} L ${-width/3 - gateRadius - 2} ${height/3}`}
            stroke="#6366F1"
            strokeWidth={1.5}
            fill="none"
            markerEnd="url(#arrowhead)"
            custom={6}
            initial="initial"
            animate="animate"
            variants={pathVariants}
          />
          <motion.text
            x={-width/2 - 35}
            y={height/3}
            textAnchor="end"
            className="fill-current text-gray-400 text-xs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            h(t-1)
          </motion.text>
        </>
      )}
      
      {/* Output arrows */}
      {showOutput && (
        <>
          <motion.path
            d={`M ${width/3 + gateRadius + 2} ${height/3} L ${width/2 + 30} ${height/3}`}
            stroke="#6366F1"
            strokeWidth={1.5}
            fill="none"
            markerEnd="url(#arrowhead)"
            custom={10}
            initial="initial"
            animate="animate"
            variants={pathVariants}
          />
          <motion.text
            x={width/2 + 35}
            y={height/3}
            textAnchor="start"
            className="fill-current text-gray-400 text-xs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            h(t)
          </motion.text>
        </>
      )}
      
      {/* Time Step Label */}
      {timeLabel && (
        <motion.text
          x={0}
          y={height/2 + 20}
          textAnchor="middle"
          className={`fill-current ${isActiveTimeStep ? "text-indigo-300 font-medium" : "text-gray-400"} text-sm`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          t = {timeLabel}
        </motion.text>
      )}
    </g>
  );
}

export default function LSTMSVG() {
  // More compact horizontal spacing with increased vertical space
  const timeSteps = [
    { label: 't-1', x: 200, y: 250, activeGates: [] },
    { label: 't', x: 400, y: 250, activeGates: ['input', 'output', 'candidate', 'forget'] },
    { label: 't+1', x: 600, y: 250, activeGates: [] },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <svg width="100%" height="100%" viewBox="0 0 800 600" className="overflow-visible">
        <defs>
          {/* Gradient for nodes */}
          <linearGradient id="cellGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366F1" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.3" />
          </linearGradient>
          
          {/* Gradient for active gates */}
          <linearGradient id="activeGateGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#EC4899" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#DB2777" stopOpacity="0.3" />
          </linearGradient>
          
          {/* Gradient for memory cell */}
          <linearGradient id="memoryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#6D28D9" stopOpacity="0.3" />
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
          Long Short-Term Memory (LSTM) Architecture
        </text>
        
        {/* Explanatory Text */}
        <text 
          x="400"
          y="95"
          textAnchor="middle"
          className="fill-current text-gray-400 text-xs"
        >
          Controls information flow through cell state using gates to remember long-term dependencies
        </text>
        
        {/* Time step labels */}
        {timeSteps.map((step, i) => (
          <text 
            key={`timestep-${i}`}
            x={step.x} 
            y="140"
            textAnchor="middle"
            className={`fill-current ${i === 1 ? "text-indigo-300 font-medium" : "text-gray-300"} text-sm`}
          >
            Time step {step.label}
          </text>
        ))}
        
        {/* Cell State connections between time steps */}
        <motion.path
          d="M 265 250 L 335 250"
          stroke="#8B5CF6"
          strokeWidth={2}
          fill="none"
          markerEnd="url(#arrowhead)"
          custom={10}
          initial="initial"
          animate="animate"
          variants={pathVariants}
        />
        
        <motion.path
          d="M 465 250 L 535 250"
          stroke="#8B5CF6"
          strokeWidth={2}
          fill="none"
          markerEnd="url(#arrowhead)"
          custom={11}
          initial="initial"
          animate="animate"
          variants={pathVariants}
        />
        
        {/* Hidden state connections between time steps */}
        <motion.path
          d="M 265 335 C 290 335, 310 335, 335 335"
          stroke="#6366F1"
          strokeWidth={1.5}
          strokeDasharray="4,2"
          fill="none"
          markerEnd="url(#arrowhead)"
          custom={11.5}
          initial="initial"
          animate="animate"
          variants={pathVariants}
        />
        
        <motion.path
          d="M 465 335 C 490 335, 510 335, 535 335"
          stroke="#6366F1"
          strokeWidth={1.5}
          strokeDasharray="4,2"
          fill="none"
          markerEnd="url(#arrowhead)"
          custom={12}
          initial="initial"
          animate="animate"
          variants={pathVariants}
        />
        
        {/* LSTM Cells */}
        {timeSteps.map((step, i) => (
          <LSTMCell 
            key={step.label} 
            {...step} 
            showInput={i === 0 || i === 1} 
            showOutput={i === 1 || i === 2}
            isActiveTimeStep={i === 1}
            timeLabel={step.label}
          />
        ))}
        
        {/* Key features descriptions section */}
        <g transform="translate(200, 480)">
          <rect width="400" height="60" rx="4" fill="#1E293B" fillOpacity="0.3" />
          
          <text x="15" y="22" className="fill-current text-gray-300 text-xs font-medium">• Long-term memory (Cell State)</text>
          <text x="250" y="22" className="fill-current text-gray-300 text-xs font-medium">• Gates: Forget, Input, Output</text>
          
          <text x="15" y="42" className="fill-current text-gray-300 text-xs font-medium">• Short-term memory (Hidden State)</text>
          <text x="250" y="42" className="fill-current text-gray-300 text-xs font-medium">• Sigmoid (σ) & tanh activations</text>
        </g>
        
        {/* Legend */}
        <g transform="translate(270, 550)">
          <circle cx="0" cy="0" r="6" fill="url(#cellGradient)" />
          <text x="10" y="4" className="fill-current text-gray-300 text-xs">Gate</text>
          
          <circle cx="70" cy="0" r="8" fill="url(#activeGateGradient)" />
          <text x="85" y="4" className="fill-current text-gray-300 text-xs">Active Gate</text>
          
          <rect x="170" y="-7" width="14" height="14" rx="2" fill="url(#memoryGradient)" />
          <text x="190" y="4" className="fill-current text-gray-300 text-xs">Memory Cell</text>
        </g>

        {/* Footer text */}
        <text 
          x="400" 
          y="580" 
          textAnchor="middle" 
          className="fill-current text-gray-400 text-xs"
        >
          LSTM networks excel at learning long-term dependencies in sequential data
        </text>
      </svg>
    </div>
  );
} 
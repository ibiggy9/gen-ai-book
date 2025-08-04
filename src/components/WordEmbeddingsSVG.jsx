



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

const textVariants = {
  initial: { opacity: 0, y: 5 },
  animate: i => ({
    opacity: 1,
    y: 0,
    transition: { 
      delay: i * 0.1, 
      duration: 0.5 
    }
  })
};



// Vector component for displaying word vector coordinates
function WordVector({ x, y, word, vector, isHighlighted = false, index }) {
  const boxWidth = 180;
  const boxHeight = 100;
  
  return (
    <g transform={`translate(${x}, ${y})`}>
      {/* Vector box */}
      <motion.rect
        x={-boxWidth/2}
        y={-boxHeight/2}
        width={boxWidth}
        height={boxHeight}
        rx={5}
        fill={isHighlighted ? "#1A2234" : "#1F2937"}
        stroke={isHighlighted ? "#4F46E5" : "#374151"}
        strokeWidth={isHighlighted ? 2 : 1.5}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.9 }}
        transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
      />
      
      {/* Word label */}
      <motion.text
        y={-boxHeight/2 + 20}
        textAnchor="middle"
        className={`fill-current ${isHighlighted ? "text-blue-300 font-medium" : "text-gray-300"} text-sm`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
      >
        "{word}"
      </motion.text>
      
      {/* Vector values */}
      <g>
        {vector.map((value, i) => (
          <motion.text
            key={`vector-${i}`}
            x={i % 2 === 0 ? -boxWidth/4 : boxWidth/4}
            y={-boxHeight/4 + Math.floor(i/2) * 20}
            textAnchor="middle"
            className="fill-current text-gray-400 text-xs font-mono"
            custom={i}
            initial="initial"
            animate="animate"
            variants={textVariants}
          >
            {value.toFixed(2)}
          </motion.text>
        ))}
      </g>
      
      {/* Vector dimensions label */}
      <motion.text
        y={boxHeight/2 - 10}
        textAnchor="middle"
        className="fill-current text-gray-500 text-xs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
      >
        Vector dimensions
      </motion.text>
    </g>
  );
}

// Semantic relationship arrows
function SemanticArrow({ startX, startY, endX, endY, label, index }) {
  const midX = (startX + endX) / 2;
  const midY = (startY + endY) / 2;
  
  // Calculate the angle of the line
  const angle = Math.atan2(endY - startY, endX - startX) * (180 / Math.PI);
  
  return (
    <>
      {/* Semantic relationship arrow */}
      <motion.path
        d={`M ${startX} ${startY} L ${endX} ${endY}`}
        stroke="#6366F1"
        strokeWidth={1.5}
        fill="none"
        markerEnd="url(#arrowhead)"
        custom={index + 2}
        initial="initial"
        animate="animate"
        variants={pathVariants}
      />
      
      {/* Semantic relationship label */}
      <motion.g transform={`translate(${midX}, ${midY}) rotate(${angle})`}>
        <rect 
          x={-40}
          y={-12}
          width={80}
          height={24}
          rx={3}
          fill="#1F2937"
          stroke="#4F46E5"
          strokeWidth={1}
          strokeOpacity={0.5}
        />
        <text
          textAnchor="middle"
          dominantBaseline="middle"
          className="fill-current text-gray-300 text-xs"
        >
          {label}
        </text>
      </motion.g>
    </>
  );
}

export default function WordEmbeddingsSVG() {
  // Example word vectors (simplified to 4D for visualization)
  const wordVectors = [
    { word: "king", vector: [0.2, 0.8, -0.3, 0.5], x: 200, y: 180, isHighlighted: true },
    { word: "queen", vector: [0.1, 0.7, -0.3, 0.6], x: 500, y: 180, isHighlighted: false },
    { word: "man", vector: [0.3, 0.2, -0.1, 0.1], x: 200, y: 350, isHighlighted: false },
    { word: "woman", vector: [0.2, 0.1, -0.1, 0.2], x: 500, y: 350, isHighlighted: false }
  ];
  
  // Semantic relationships
  const semanticRelationships = [
    { start: 0, end: 1, label: "gender" },  // king → queen
    { start: 2, end: 3, label: "gender" },  // man → woman
    { start: 0, end: 2, label: "royalty" }, // king → man
    { start: 1, end: 3, label: "royalty" }  // queen → woman
  ];
  
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <svg width="100%" height="100%" viewBox="0 0 800 600" className="overflow-visible">
        <defs>
          {/* Gradient for nodes */}
          <linearGradient id="embeddingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366F1" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.3" />
          </linearGradient>
          
          {/* Gradient for active nodes */}
          <linearGradient id="activeEmbeddingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
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
          Word Embeddings
        </text>
        
        {/* Explanatory Text */}
        <text 
          x="400"
          y="95"
          textAnchor="middle"
          className="fill-current text-gray-400 text-xs"
        >
          Word embeddings capture semantic relationships between words as vectors in high-dimensional space
        </text>
        
        {/* Semantic relationships */}
        {semanticRelationships.map((rel, i) => {
          const start = wordVectors[rel.start];
          const end = wordVectors[rel.end];
          return (
            <SemanticArrow 
              key={`rel-${i}`}
              startX={start.x} 
              startY={start.y} 
              endX={end.x} 
              endY={end.y} 
              label={rel.label}
              index={i}
            />
          );
        })}
        
        {/* Word vectors */}
        {wordVectors.map((wordVec, i) => (
          <WordVector 
            key={`word-${i}`} 
            {...wordVec}
            index={i}
          />
        ))}
        
        {/* Vector operation demonstration */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <rect
            x="250"
            y="450"
            width="300"
            height="80"
            rx={5}
            fill="#1A2234"
            stroke="#4F46E5"
            strokeWidth={1.5}
          />
          
          <text
            x="400"
            y="470"
            textAnchor="middle"
            className="fill-current text-gray-200 text-sm font-medium"
          >
            Vector Analogy: King - Man + Woman = ?
          </text>
          
          <motion.text
            x="400"
            y="500"
            textAnchor="middle"
            className="fill-current text-blue-300 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2 }}
          >
            Queen
          </motion.text>
          
          <motion.path
            d="M 330 510 C 350 530, 450 530, 470 510"
            stroke="#EC4899"
            strokeWidth={1.5}
            fill="none"
            markerEnd="url(#arrowhead)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.7 }}
            transition={{ duration: 1, delay: 2.3 }}
          />
        </motion.g>
        
        {/* Key features section */}
        <g transform="translate(200, 550)">
          <rect width="400" height="40" rx="4" fill="#1E293B" fillOpacity="0.3" />
          
          <text x="15" y="25" className="fill-current text-gray-300 text-xs font-medium">• Words with similar meanings cluster together</text>
          <text x="250" y="25" className="fill-current text-gray-300 text-xs font-medium">• Captures semantic relationships & analogies</text>
        </g>
      </svg>
    </div>
  );
} 
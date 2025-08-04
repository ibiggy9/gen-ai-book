

// Improved animation variants with consistent timing
const containerVariants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1, 
    transition: { 
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const titleVariants = {
  initial: { opacity: 0, y: -10 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.4,
      ease: "easeOut"
    } 
  }
};

const boxVariants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { 
    opacity: 0.9, 
    scale: 1,
    transition: { 
      duration: 0.5,
      ease: "easeOut"
    } 
  }
};

const itemVariants = {
  initial: { opacity: 0, y: 10 },
  animate: i => ({ 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.3,
      delay: i * 0.05,
      ease: "easeOut"
    } 
  })
};

const pathVariants = {
  initial: { pathLength: 0, opacity: 0 },
  animate: { 
    pathLength: 1, 
    opacity: 0.7,
    transition: { 
      pathLength: { 
        duration: 0.8,
        ease: "easeInOut",
        delay: 1.5
      },
      opacity: { 
        duration: 0.3, 
        delay: 1.5 
      }
    }
  }
};

// N-gram model component
function NGramModel({ x, y, isActive = false }) {
  const boxWidth = 240;
  const boxHeight = 380;
  const tokenSize = 36;


  // Example n-grams with order 2 (bigrams)
  const tokens = ["the cat", "cat sat", "sat on", "on the", "the mat"];
  
  return (
    <motion.g 
      transform={`translate(${x}, ${y})`}
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      {/* Model background */}
      <motion.rect
        x={-boxWidth/2}
        y={-boxHeight/2}
        width={boxWidth}
        height={boxHeight}
        rx={8}
        fill={isActive ? "#1A2234" : "#1F2937"}
        stroke={isActive ? "#4F46E5" : "#374151"}
        strokeWidth={isActive ? 2 : 1.5}
        variants={boxVariants}
      />
      
      {/* N-Gram Header */}
      <motion.text
        y={-boxHeight/2 + 30}
        textAnchor="middle"
        className="fill-current text-indigo-300 text-base font-medium"
        variants={titleVariants}
      >
        N-Gram Model
      </motion.text>
      
      {/* Text context */}
      <motion.text
        y={-boxHeight/2 + 60}
        textAnchor="middle"
        className="fill-current text-gray-400 text-xs"
        custom={1}
        variants={itemVariants}
      >
        "the cat sat on the mat"
      </motion.text>
      
      {/* Bigram tokens - Adjusted position and spacing to fit within container */}
      {tokens.map((token, i) => (
        <motion.g 
          key={`ngram-${i}`}
          transform={`translate(0, ${-boxHeight/2 + 100 + i * (tokenSize + 14)})`}
          custom={i + 2}
          variants={itemVariants}
        >
          <rect
            x={-boxWidth/2 + 20}
            y={0}
            width={boxWidth - 40}
            height={tokenSize}
            rx={4}
            fill={isActive ? "#2D3748" : "#1F2937"}
            stroke="#4B5563"
            strokeWidth={1}
          />
          <text
            x={0}
            y={tokenSize/2 + 5}
            textAnchor="middle"
            className={`fill-current ${isActive ? "text-blue-300" : "text-gray-300"} text-sm`}
          >
            {token}
          </text>
          
          {/* Probability indicator */}
          <text
            x={boxWidth/2 - 30}
            y={tokenSize/2 + 5}
            textAnchor="end"
            className="fill-current text-gray-400 text-xs"
          >
            {((1 / tokens.length) + (i * 0.05)).toFixed(2)}
          </text>
        </motion.g>
      ))}
      
      {/* Sequence preservation indicator */}
      <motion.text
        y={boxHeight/2 - 15}
        textAnchor="middle"
        className="fill-current text-green-400 text-xs font-medium"
        custom={tokens.length + 3}
        variants={itemVariants}
      >
        ✓ Preserves word order
      </motion.text>
    </motion.g>
  );
}

// Bag of Words model component
function BagOfWordsModel({ x, y, isActive = false }) {
  const boxWidth = 240;
  const boxHeight = 380;
  const tokenSize = 36;


  // Example bag of words counts
  const tokens = [
    { word: "the", count: 2 },
    { word: "cat", count: 1 },
    { word: "sat", count: 1 },
    { word: "on", count: 1 },
    { word: "mat", count: 1 }
  ];
  
  return (
    <motion.g 
      transform={`translate(${x}, ${y})`}
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      {/* Model background */}
      <motion.rect
        x={-boxWidth/2}
        y={-boxHeight/2}
        width={boxWidth}
        height={boxHeight}
        rx={8}
        fill={isActive ? "#1A2234" : "#1F2937"}
        stroke={isActive ? "#4F46E5" : "#374151"}
        strokeWidth={isActive ? 2 : 1.5}
        variants={boxVariants}
      />
      
      {/* BoW Header */}
      <motion.text
        y={-boxHeight/2 + 30}
        textAnchor="middle"
        className="fill-current text-rose-300 text-base font-medium"
        variants={titleVariants}
      >
        Bag of Words
      </motion.text>
      
      {/* Text context */}
      <motion.text
        y={-boxHeight/2 + 60}
        textAnchor="middle"
        className="fill-current text-gray-400 text-xs"
        custom={1}
        variants={itemVariants}
      >
        "the cat sat on the mat"
      </motion.text>
      
      {/* Word count tokens - Adjusted position and spacing to fit within container */}
      {tokens.map((token, i) => (
        <motion.g
          key={`bow-${i}`}
          transform={`translate(0, ${-boxHeight/2 + 100 + i * (tokenSize + 14)})`}
          custom={i + 2}
          variants={itemVariants}
        >
          <rect
            x={-boxWidth/2 + 20}
            y={0}
            width={boxWidth - 40}
            height={tokenSize}
            rx={4}
            fill={isActive ? "#2D3748" : "#1F2937"}
            stroke="#4B5563"
            strokeWidth={1}
          />
          <text
            x={-50}
            y={tokenSize/2 + 5}
            textAnchor="middle"
            className={`fill-current ${isActive ? "text-rose-300" : "text-gray-300"} text-sm`}
          >
            {token.word}
          </text>
          
          {/* Count indicator */}
          <circle
            cx={0}
            cy={tokenSize/2}
            r={12}
            fill="#3D2D4D"
            stroke="#A78BFA"
            strokeWidth={1}
          />
          <text
            x={0}
            y={tokenSize/2 + 5}
            textAnchor="middle"
            className="fill-current text-white text-xs font-medium"
          >
            {token.count}
          </text>
          
          {/* Probability/frequency indicator */}
          <text
            x={boxWidth/2 - 30}
            y={tokenSize/2 + 5}
            textAnchor="end"
            className="fill-current text-gray-400 text-xs"
          >
            {(token.count / 6).toFixed(2)}
          </text>
        </motion.g>
      ))}
      
      {/* Order indicator */}
      <motion.text
        y={boxHeight/2 - 15}
        textAnchor="middle"
        className="fill-current text-red-400 text-xs font-medium"
        custom={tokens.length + 3}
        variants={itemVariants}
      >
        ✗ Ignores word order
      </motion.text>
    </motion.g>
  );
}

// Comparison arrow between models
function ComparisonArrows({ x, y }) {
  return (
    <motion.g 
      transform={`translate(${x}, ${y})`}
      initial="initial"
      animate="animate"
      variants={containerVariants}
    >
      {/* Order preservation arrow */}
      <motion.path
        d="M -100 -50 L 100 -50"
        stroke="#6366F1"
        strokeWidth={1.5}
        fill="none"
        strokeDasharray="4,2"
        markerEnd="url(#arrowhead)"
        variants={pathVariants}
      />
      
      <motion.text
        y={-60}
        textAnchor="middle"
        className="fill-current text-gray-400 text-xs"
        custom={10}
        variants={itemVariants}
      >
        Order Preservation
      </motion.text>
      
      {/* Simplicity arrow */}
      <motion.path
        d="M 100 50 L -100 50"
        stroke="#A78BFA"
        strokeWidth={1.5}
        fill="none"
        strokeDasharray="4,2"
        markerEnd="url(#arrowhead)"
        variants={pathVariants}
      />
      
      <motion.text
        y={65}
        textAnchor="middle"
        className="fill-current text-gray-400 text-xs"
        custom={11}
        variants={itemVariants}
      >
        Simplicity
      </motion.text>
    </motion.g>
  );
}

export default function TextModelsSVG() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <svg width="100%" height="100%" viewBox="0 0 800 650" className="overflow-visible">
        <defs>
          {/* Gradient for nodes */}
          <linearGradient id="ngramGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366F1" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.3" />
          </linearGradient>
          
          {/* Gradient for BOW nodes */}
          <linearGradient id="bowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
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
        
        <motion.g
          initial="initial"
          animate="animate"
          variants={containerVariants}
        >
          {/* Title */}
          <motion.text 
            x="400" 
            y="50" 
            textAnchor="middle" 
            className="fill-current text-gray-100 text-xl font-medium"
            variants={titleVariants}
          >
            Text Representation Models Comparison
          </motion.text>
          
          {/* Subtitle */}
          <motion.text 
            x="400"
            y="75"
            textAnchor="middle"
            className="fill-current text-gray-400 text-xs"
            variants={titleVariants}
            custom={1}
          >
            N-Gram vs Bag of Words approaches for analyzing and representing text
          </motion.text>
        </motion.g>
        
        {/* NGram Model */}
        <NGramModel x={230} y={300} isActive={true} />
        
        {/* BoW Model */}
        <BagOfWordsModel x={570} y={300} isActive={true} />
        
        {/* Comparison arrows */}
        <ComparisonArrows x={400} y={300} />
        
        {/* Key features section */}
        <motion.g 
          transform="translate(400, 560)"
          initial="initial"
          animate="animate"
          variants={containerVariants}
        >
          <motion.rect 
            x={-300} 
            y={-20} 
            width={600} 
            height={60} 
            rx={4} 
            fill="#1E293B" 
            fillOpacity="0.3"
            variants={boxVariants}
          />
          
          <motion.text 
            x={-285} 
            y={5} 
            className="fill-current text-indigo-300 text-xs font-medium"
            custom={12}
            variants={itemVariants}
          >
            • N-Gram: Sequence of N adjacent words
          </motion.text>
          
          <motion.text 
            x={40} 
            y={5} 
            className="fill-current text-rose-300 text-xs font-medium"
            custom={13}
            variants={itemVariants}
          >
            • BoW: Word frequency counts
          </motion.text>
          
          <motion.text 
            x={-285} 
            y={30} 
            className="fill-current text-indigo-300 text-xs font-medium"
            custom={14}
            variants={itemVariants}
          >
            • Better for sequence-dependent tasks
          </motion.text>
          
          <motion.text 
            x={40} 
            y={30} 
            className="fill-current text-rose-300 text-xs font-medium"
            custom={15}
            variants={itemVariants}
          >
            • Simpler, works well for classification
          </motion.text>
        </motion.g>
      </svg>
    </div>
  );
} 
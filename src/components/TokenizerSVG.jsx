

export default function TokenizerSVG() {
  // The sample text to tokenize
  const sampleText = "The quick brown fox jumps over the lazy dog";
  
  // Breaking down into tokens (just a demonstration)
  const tokens = [
    { text: "The", id: 1138 },
    { text: "quick", id: 4929 },
    { text: "brown", id: 7542 },
    { text: "fox", id: 8862 },
    { text: "jumps", id: 12667 },
    { text: "over", id: 1106 },
    { text: "the", id: 1104 },
    { text: "lazy", id: 15631 },
    { text: "dog", id: 6953 }
  ];
  
  // Subword tokenization example
  const subwordExample = [
    { text: "un", id: 512, color: "#8B5CF6" },
    { text: "friend", id: 3291, color: "#3B82F6" },
    { text: "ly", id: 714, color: "#EC4899" }
  ];
  
  // Animation variants
  const staggerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };
  
  const flowVariants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: { duration: 1.5, ease: "easeInOut" }
    }
  };
  
  const blinkVariants = {
    blink: {
      opacity: [0.3, 1, 0.3],
      transition: { repeat: Infinity, duration: 3, ease: "easeInOut" }
    }
  };
  
  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg width="100%" height="100%" viewBox="0 0 900 500" className="overflow-visible">
        <defs>
          {/* Gradient for text highlight */}
          <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.2" />
          </linearGradient>
          
          {/* Arrow marker */}
          <marker 
            id="arrow" 
            viewBox="0 0 10 10" 
            refX="5" 
            refY="5"
            markerWidth="6" 
            markerHeight="6" 
            orient="auto"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#6366F1" />
          </marker>
          
          {/* Glow filter */}
          <filter id="tokenGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        
        {/* Title */}
        <text 
          x="450" 
          y="40" 
          textAnchor="middle" 
          className="fill-current text-gray-200 text-xl font-medium"
        >
          Tokenization Process
        </text>
        
        {/* Input text section */}
        <g>
          <text 
            x="100" 
            y="90" 
            className="fill-current text-gray-400 text-sm"
          >
            Input Text:
          </text>
          
          <rect 
            x="100" 
            y="100" 
            width="700" 
            height="60" 
            rx="4" 
            fill="#1E293B" 
            stroke="#3B82F6" 
            strokeWidth="1.5" 
            strokeOpacity="0.4" 
          />
          
          <motion.rect 
            x="100" 
            y="100" 
            width="700" 
            height="60" 
            rx="4" 
            fill="url(#textGradient)" 
            variants={blinkVariants}
            animate="blink"
          />
          
          <text 
            x="450" 
            y="135" 
            textAnchor="middle" 
            className="fill-current text-gray-200 text-base font-mono"
          >
            "{sampleText}"
          </text>
        </g>
        
        {/* Tokenizer processing box */}
        <g>
          <rect 
            x="250" 
            y="200" 
            width="400" 
            height="80" 
            rx="6" 
            fill="#374151" 
            stroke="#6366F1" 
            strokeWidth="2" 
          />
          
          <text 
            x="450" 
            y="225" 
            textAnchor="middle" 
            className="fill-current text-gray-200 text-base"
          >
            Tokenizer
          </text>
          
          <text 
            x="450" 
            y="255" 
            textAnchor="middle" 
            className="fill-current text-gray-400 text-xs"
          >
            Splits text → Normalizes → Maps to vocabulary
          </text>
          
          {/* Animated processing dots */}
          <g>
            {[0, 1, 2].map(i => (
              <motion.circle 
                key={`process-dot-${i}`}
                cx={420 + i * 30} 
                cy="275" 
                r="4" 
                className="fill-current text-blue-500"
                animate={{
                  opacity: [0, 1, 0],
                  y: [0, -5, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut"
                }}
              />
            ))}
          </g>
        </g>
        
        {/* Flow arrow from input to tokenizer */}
        <motion.path 
          d="M 450 160 L 450 200"
          stroke="#6366F1"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          markerEnd="url(#arrow)"
          variants={flowVariants}
          initial="hidden"
          animate="visible"
        />
        
        {/* Flow arrow from tokenizer to tokens */}
        <motion.path 
          d="M 450 280 L 450 320"
          stroke="#6366F1"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          markerEnd="url(#arrow)"
          variants={flowVariants}
          initial="hidden"
          animate="visible"
        />
        
        {/* Tokens result section */}
        <g>
          <text 
            x="120" 
            y="350" 
            className="fill-current text-gray-400 text-sm"
          >
            Tokenized Output:
          </text>
          
          <rect 
            x="100" 
            y="360" 
            width="700" 
            height="100" 
            rx="4" 
            fill="#1E293B" 
            stroke="#3B82F6" 
            strokeWidth="1" 
            strokeOpacity="0.4" 
          />
          
          {/* Token boxes */}
          <g>
            {tokens.map((token, i) => (
              <motion.g 
                key={`token-${i}`}
                custom={i}
                variants={staggerVariants}
                initial="hidden"
                animate="visible"
              >
                <rect 
                  x={120 + i * 74} 
                  y="370" 
                  width="70" 
                  height="30" 
                  rx="4" 
                  fill="#3B82F6" 
                  fillOpacity="0.2" 
                  stroke="#3B82F6" 
                  strokeWidth="1" 
                />
                <text 
                  x={155 + i * 74} 
                  y="390" 
                  textAnchor="middle" 
                  className="fill-current text-gray-200 text-xs font-mono"
                >
                  "{token.text}"
                </text>
              </motion.g>
            ))}
          </g>
          
          {/* Token IDs */}
          <g>
            {tokens.map((token, i) => (
              <motion.g 
                key={`id-${i}`}
                custom={i + 3} // Delay these after the token boxes
                variants={staggerVariants}
                initial="hidden"
                animate="visible"
              >
                <rect 
                  x={120 + i * 74} 
                  y="410" 
                  width="70" 
                  height="25" 
                  rx="4" 
                  fill="#6366F1" 
                  fillOpacity="0.15" 
                  stroke="#6366F1" 
                  strokeWidth="1" 
                />
                <text 
                  x={155 + i * 74} 
                  y="427" 
                  textAnchor="middle" 
                  className="fill-current text-gray-400 text-xs font-mono"
                >
                  ID: {token.id}
                </text>
              </motion.g>
            ))}
          </g>
        </g>
        
        {/* Subword tokenization example */}
        <g>
          <rect 
            x="200" 
            y="465" 
            width="500" 
            height="35" 
            rx="4" 
            fill="#374151" 
            fillOpacity="0.5" 
            stroke="#6366F1" 
            strokeWidth="1" 
            strokeOpacity="0.4" 
            strokeDasharray="3 2"
          />
          
          <text 
            x="230" 
            y="487" 
            className="fill-current text-gray-400 text-xs"
          >
            Subword Example:
          </text>
          
          {/* Subword tokens */}
          <g>
            {subwordExample.map((token, i) => (
              <motion.g 
                key={`subword-${i}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  transition: { delay: 2 + i * 0.2, duration: 0.5 }
                }}
              >
                <rect 
                  x={330 + i * 80} 
                  y="470" 
                  width="75" 
                  height="25" 
                  rx="3" 
                  fill={token.color} 
                  fillOpacity="0.2"
                  stroke={token.color}
                  strokeWidth="1"
                />
                <text 
                  x={367 + i * 80} 
                  y="487" 
                  textAnchor="middle" 
                  className="fill-current text-gray-200 text-xs font-mono"
                >
                  "{token.text}"
                </text>
                
                {/* Connection lines for subwords */}
                {i > 0 && (
                  <motion.path 
                    d={`M ${330 + i * 80} 482 L ${(330 + i * 80) - 5} 482`}
                    stroke={token.color}
                    strokeWidth="1.5"
                    strokeDasharray="2 1"
                    initial={{ pathLength: 0 }}
                    animate={{ 
                      pathLength: 1,
                      transition: { delay: 2 + i * 0.2, duration: 0.3 }
                    }}
                  />
                )}
              </motion.g>
            ))}
          </g>
          
          <motion.text 
            x="590" 
            y="487" 
            className="fill-current text-gray-400 text-xs"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              transition: { delay: 2.8, duration: 0.5 }
            }}
          >
            → "unfriendly"
          </motion.text>
        </g>
        
        {/* Animated processing particles */}
        {[0, 1, 2, 3, 4].map(i => (
          <motion.circle
            key={`particle-${i}`}
            cx="450"
            cy="170"
            r="3"
            fill="#6366F1"
            filter="url(#tokenGlow)"
            animate={{
              cy: [170, 190],
              opacity: [0, 0.8, 0]
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {[0, 1, 2, 3, 4].map(i => (
          <motion.circle
            key={`particle2-${i}`}
            cx="450"
            cy="290"
            r="3"
            fill="#6366F1"
            filter="url(#tokenGlow)"
            animate={{
              cy: [290, 310],
              opacity: [0, 0.8, 0]
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              delay: i * 0.8 + 0.5,
              ease: "easeInOut"
            }}
          />
        ))}
      </svg>
    </div>
  );
} 
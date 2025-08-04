

export default function TransformerSVG() {
  // Animation variants
  const tokenVariants = {
    initial: { opacity: 0, y: 10 },
    animate: i => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.5 }
    })
  };

  const flowVariants = {
    initial: { pathLength: 0, opacity: 0.6 },
    animate: i => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { type: "spring", duration: 1.5, bounce: 0, delay: 0.5 + i * 0.1 },
        opacity: { duration: 0.2, delay: 0.5 + i * 0.1 }
      }
    })
  };



  // Input tokens in the example
  const inputTokens = ["The", "cat", "sits", "on", "the"];
  
  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg width="100%" height="100%" viewBox="0 0 800 400" className="overflow-visible">
        <defs>
          {/* Gradient for attention highlight */}
          <linearGradient id="attentionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#4F46E5" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#4F46E5" stopOpacity="0.1" />
          </linearGradient>
          
          {/* Arrow marker for flow lines */}
          <marker 
            id="arrowhead" 
            markerWidth="5" 
            markerHeight="5"
            refX="5" 
            refY="2.5" 
            orient="auto"
          >
            <polygon points="0 0, 5 2.5, 0 5" fill="#4F46E5" />
          </marker>
          
          {/* Filter for glowing effects */}
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        
        {/* Title - single instance */}
        <text 
          x="400" 
          y="30" 
          textAnchor="middle" 
          className="fill-current text-gray-100 text-xl font-medium"
        >
          Transformer Architecture
        </text>
        
        {/* Input tokens */}
        {inputTokens.map((token, i) => (
          <motion.g 
            key={`input-${i}`}
            custom={i}
            initial="initial"
            animate="animate"
            variants={tokenVariants}
          >
            <rect 
              x={120 + i * 95} 
              y="80" 
              width="80" 
              height="30" 
              rx="4" 
              fill="#3B82F6" 
              fillOpacity="0.2" 
              stroke="#3B82F6" 
              strokeWidth="1.5" 
            />
            <text 
              x={160 + i * 95} 
              y="100" 
              textAnchor="middle" 
              className="fill-current text-gray-200 text-xs"
            >
              "{token}"
            </text>
          </motion.g>
        ))}
        
        {/* Embedding layer */}
        <g>
          <rect 
            x="100" 
            y="140" 
            width="600" 
            height="40" 
            rx="4" 
            fill="#6366F1" 
            fillOpacity="0.15" 
            stroke="#6366F1" 
            strokeWidth="1.5" 
          />
          <text 
            x="400" 
            y="165" 
            textAnchor="middle" 
            className="fill-current text-gray-200 text-sm"
          >
            Word Embeddings + Positional Encoding
          </text>
          
          {/* Vectors flowing from tokens to embedding */}
          {inputTokens.map((_, i) => (
            <motion.path 
              key={`embed-flow-${i}`}
              d={`M ${160 + i * 95} 110 L ${160 + i * 95} 140`}
              stroke="#3B82F6"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
              markerEnd="url(#arrowhead)"
              variants={flowVariants}
              custom={i}
              initial="initial"
              animate="animate"
            />
          ))}
        </g>
        
        {/* Decoder stack with layers */}
        <g>
          <rect 
            x="100" 
            y="210" 
            width="600" 
            height="120" 
            rx="4" 
            fill="#4F46E5" 
            fillOpacity="0.1" 
            stroke="#4F46E5" 
            strokeWidth="1.5" 
          />
          <text 
            x="160" 
            y="230" 
            textAnchor="middle" 
            className="fill-current text-gray-200 text-sm"
          >
            Decoder Stack
          </text>
          
          {/* Masked self-attention mechanism */}
          <g>
            <rect 
              x="120" 
              y="240" 
              width="260" 
              height="70" 
              rx="3" 
              fill="#9333EA" 
              fillOpacity="0.15" 
              stroke="#9333EA" 
              strokeWidth="1" 
            />
            <text 
              x="250" 
              y="255" 
              textAnchor="middle" 
              className="fill-current text-gray-200 text-xs"
            >
              Multi-Head Self-Attention
            </text>
            
            {/* Attention visualization with masking */}
            <g>
              {/* Tokens in the attention mechanism */}
              {[0, 1, 2].map(i => (
                <g key={`att-token-${i}`}>
                  <rect 
                    x={150 + i * 70} 
                    y="270" 
                    width="60" 
                    height="24" 
                    rx="2" 
                    fill="#9333EA" 
                    fillOpacity="0.2" 
                    stroke="#9333EA" 
                    strokeWidth="1" 
                  />
                  <text 
                    x={180 + i * 70} 
                    y="285" 
                    textAnchor="middle" 
                    className="fill-current text-gray-200 text-xs"
                  >
                    Token {i+1}
                  </text>
                </g>
              ))}
              
              {/* Masked attention connections (only show connections to previous and current tokens) */}
              {[0, 1, 2].map(from => (
                [0, 1, 2].map(to => {
                  // Only show connections where to <= from (masking future tokens)
                  if (to <= from) {
                    return (
                      <motion.path 
                        key={`att-conn-${from}-${to}`}
                        d={`M ${180 + from * 70} 282 
                          C ${180 + from * 70} 290, 
                            ${180 + to * 70} 290, 
                            ${180 + to * 70} 282`}
                        stroke="#9333EA"
                        strokeWidth={from === 1 && to === 1 ? "1.5" : "0.75"}
                        strokeOpacity={from === 1 && to === 1 ? 1 : 0.3}
                        fill="none"
                        animate={{
                          strokeOpacity: from === 1 && to === 1 ? [1, 0.7, 1] : [0.3, 0.15, 0.3],
                          strokeWidth: from === 1 && to === 1 ? ["1.5px", "2px", "1.5px"] : ["0.75px", "0.75px", "0.75px"]
                        }}
                        transition={{ 
                          repeat: Infinity, 
                          duration: 3,
                          delay: from * 0.2 + to * 0.1
                        }}
                      />
                    );
                  }
                  return null;
                })
              ))}
            </g>
          </g>
          
          {/* Feed forward network */}
          <g>
            <rect 
              x="420" 
              y="240" 
              width="260" 
              height="70" 
              rx="3" 
              fill="#3B82F6" 
              fillOpacity="0.15" 
              stroke="#3B82F6" 
              strokeWidth="1" 
            />
            <text 
              x="550" 
              y="255" 
              textAnchor="middle" 
              className="fill-current text-gray-200 text-xs"
            >
              Feed-Forward Network
            </text>
            
            {/* FFN visualization */}
            <g>
              {/* Input layer */}
              {[0, 1, 2].map(i => (
                <circle 
                  key={`ffn-in-${i}`} 
                  cx={460 + i * 40} 
                  cy="275" 
                  r="8" 
                  fill="#3B82F6" 
                  fillOpacity="0.3" 
                  stroke="#3B82F6" 
                  strokeWidth="1" 
                />
              ))}
              
              {/* Hidden layer */}
              {[0, 1, 2, 3, 4].map(i => (
                <circle 
                  key={`ffn-mid-${i}`} 
                  cx={550} 
                  cy={265 + i * 10} 
                  r="6" 
                  fill="#3B82F6" 
                  fillOpacity="0.3" 
                  stroke="#3B82F6" 
                  strokeWidth="1" 
                />
              ))}
              
              {/* Output layer */}
              <circle 
                key="ffn-out" 
                cx={640} 
                cy="275" 
                r="8" 
                fill="#3B82F6" 
                fillOpacity="0.3" 
                stroke="#3B82F6" 
                strokeWidth="1" 
              />
              
              {/* Neuron connections */}
              {[0, 1, 2].map(from => (
                [0, 1, 2, 3, 4].map(to => (
                  <motion.path 
                    key={`ffn-conn-in-${from}-${to}`}
                    d={`M ${460 + from * 40} 275 L ${550} ${265 + to * 10}`}
                    stroke="#3B82F6"
                    strokeWidth="0.5"
                    strokeOpacity="0.3"
                    fill="none"
                    animate={{
                      strokeOpacity: [0.3, 0.7, 0.3]
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 2 + from * 0.5,
                      delay: from * 0.2 + to * 0.1
                    }}
                  />
                ))
              ))}
              
              {[0, 1, 2, 3, 4].map(from => (
                <motion.path 
                  key={`ffn-conn-out-${from}`}
                  d={`M ${550} ${265 + from * 10} L ${640} 275`}
                  stroke="#3B82F6"
                  strokeWidth="0.5"
                  strokeOpacity="0.3"
                  fill="none"
                  animate={{
                    strokeOpacity: [0.3, 0.7, 0.3]
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 2,
                    delay: from * 0.2
                  }}
                />
              ))}
            </g>
          </g>
          
          {/* Flow between attention and FFN */}
          <motion.path 
            d="M 380 275 L 420 275"
            stroke="#4F46E5"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
            markerEnd="url(#arrowhead)"
            variants={flowVariants}
            custom={6}
            initial="initial"
            animate="animate"
          />
        </g>
        
        {/* Flow from embedding to decoder */}
        <motion.path 
          d="M 400 180 L 400 210"
          stroke="#4F46E5"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          markerEnd="url(#arrowhead)"
          variants={flowVariants}
          custom={5}
          initial="initial"
          animate="animate"
        />
        
        {/* Output layer - Fixed to prevent text overlap */}
        <g>
          <rect 
            x="100" 
            y="360" 
            width="600" 
            height="40" 
            rx="4" 
            fill="#EC4899" 
            fillOpacity="0.15" 
            stroke="#EC4899" 
            strokeWidth="1.5" 
          />
          <text 
            x="280" 
            y="385" 
            textAnchor="middle" 
            className="fill-current text-gray-200 text-sm"
          >
            Linear Layer
          </text>
          <text 
            x="520" 
            y="385" 
            textAnchor="middle" 
            className="fill-current text-gray-200 text-sm"
          >
            Softmax
          </text>
          
          {/* Output token - repositioned to avoid overlap */}
          <motion.g 
            key="output-next"
            custom={0}
            initial="initial"
            animate="animate"
            variants={tokenVariants}
          >
            <rect 
              x="360" 
              y="366" 
              width="80" 
              height="28" 
              rx="4" 
              fill="#EC4899" 
              fillOpacity="0.2" 
              stroke="#EC4899" 
              strokeWidth="1.5" 
            />
            <text 
              x="400" 
              y="385" 
              textAnchor="middle" 
              className="fill-current text-gray-200 text-xs"
            >
              "mat"
            </text>
          </motion.g>
        </g>
        
        {/* Flow from decoder to output */}
        <motion.path 
          d="M 400 330 L 400 360"
          stroke="#4F46E5"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          markerEnd="url(#arrowhead)"
          variants={flowVariants}
          custom={7}
          initial="initial"
          animate="animate"
        />
        
        {/* Animated data flow particles */}
        {[0, 1, 2, 3, 4, 5].map(i => (
          <motion.circle
            key={`particle-vertical-${i}`}
            cx="400"
            cy="0"
            r="2.5"
            fill="#6366F1"
            filter="url(#glow)"
            animate={{
              cy: [140, 360],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {[0, 1, 2].map(i => (
          <motion.circle
            key={`particle-horizontal-${i}`}
            cx="0"
            cy="275"
            r="2.5"
            fill="#9333EA"
            filter="url(#glow)"
            animate={{
              cx: [380, 420],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 1.5 + 1,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Layer labels */}
        <text 
          x="80" 
          y="95" 
          textAnchor="end" 
          className="fill-current text-gray-400 text-xs"
        >
          Input
        </text>
        <text 
          x="80" 
          y="160" 
          textAnchor="end" 
          className="fill-current text-gray-400 text-xs"
        >
          Embedding
        </text>
        <text 
          x="80" 
          y="270" 
          textAnchor="end" 
          className="fill-current text-gray-400 text-xs"
        >
          Decoder
        </text>
        <text 
          x="80" 
          y="380" 
          textAnchor="end" 
          className="fill-current text-gray-400 text-xs"
        >
          Output
        </text>
      </svg>
    </div>
  );
} 
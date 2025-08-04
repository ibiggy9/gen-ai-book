

export default function LLMArchitectureSVG() {
  // Animation variants
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { duration: 0.8 }
    }
  };
  
  const scaleUpVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: i => ({ 
      scale: 1, 
      opacity: 1, 
      transition: { 
        delay: i * 0.2,
        duration: 0.5
      }
    })
  };
  
  const flowVariants = {
    hidden: { pathLength: 0 },
    visible: i => ({ 
      pathLength: 1, 
      transition: { 
        delay: i * 0.3,
        duration: 1.5,
        ease: "easeInOut"
      }
    })
  };

  // Data for the LLM comparison display
  const llmModels = [
    { name: "GPT-4", params: "1.76T", year: 2023, size: 100, color: "#4F46E5" },
    { name: "PaLM", params: "540B", year: 2022, size: 80, color: "#8B5CF6" },
    { name: "LLaMA 2", params: "70B", year: 2023, size: 65, color: "#3B82F6" },
    { name: "BERT", params: "340M", year: 2018, size: 35, color: "#EC4899" }
  ];
  
  // LLM capabilities
  const capabilities = [
    "Text Generation",
    "Translation",
    "Summarization",
    "Question Answering",
    "Code Generation",
    "Reasoning"
  ];
  
  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg width="100%" height="100%" viewBox="0 0 900 500" className="overflow-visible">
        <defs>
          {/* Gradient for background */}
          <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E293B" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#1E293B" stopOpacity="0.1" />
          </linearGradient>
          
          {/* Gradient for LLM models */}
          <linearGradient id="llmGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.1" />
          </linearGradient>
          
          {/* Arrow marker */}
          <marker 
            id="arrowMarker" 
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
          <filter id="glowEffect" x="-20%" y="-20%" width="140%" height="140%">
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
          Large Language Models
        </text>
        
        {/* Background */}
        <motion.rect 
          x="50" 
          y="60" 
          width="800" 
          height="400" 
          rx="8" 
          fill="url(#bgGradient)"
          stroke="#6366F1"
          strokeOpacity="0.2"
          strokeWidth="1"
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
        />
        
        {/* LLM comparison section */}
        <g>
          <text 
            x="250" 
            y="90" 
            textAnchor="middle" 
            className="fill-current text-gray-200 text-base"
          >
            Model Size Comparison
          </text>
          
          {/* Model visualization */}
          {llmModels.map((model, i) => (
            <motion.g 
              key={`llm-${i}`}
              custom={i}
              variants={scaleUpVariants}
              initial="hidden"
              animate="visible"
            >
              <circle 
                cx="250" 
                cy={140 + i * 60} 
                r={model.size / 4} 
                fill={model.color} 
                fillOpacity="0.15" 
                stroke={model.color} 
                strokeWidth="1.5" 
              />
              <text 
                x="250" 
                y={140 + i * 60} 
                textAnchor="middle" 
                className="fill-current text-gray-200 text-xs"
                dominantBaseline="middle"
              >
                {model.name}
              </text>
              <text 
                x="350" 
                y={140 + i * 60} 
                className="fill-current text-gray-300 text-xs"
                dominantBaseline="middle"
              >
                {model.params} parameters
              </text>
              <text 
                x="450" 
                y={140 + i * 60} 
                className="fill-current text-gray-400 text-xs"
                dominantBaseline="middle"
              >
                ({model.year})
              </text>
            </motion.g>
          ))}
        </g>
        
        {/* LLM architecture */}
        <g>
          <text 
            x="650" 
            y="90" 
            textAnchor="middle" 
            className="fill-current text-gray-200 text-base"
          >
            Basic Architecture
          </text>
          
          {/* Architecture boxes */}
          <motion.rect 
            x="550" 
            y="110" 
            width="200" 
            height="40" 
            rx="4" 
            fill="#4F46E5" 
            fillOpacity="0.1" 
            stroke="#4F46E5" 
            strokeWidth="1.5" 
            custom={0}
            variants={scaleUpVariants}
            initial="hidden"
            animate="visible"
          />
          <motion.text 
            x="650" 
            y="135" 
            textAnchor="middle" 
            className="fill-current text-gray-200 text-sm"
            custom={0}
            variants={scaleUpVariants}
            initial="hidden"
            animate="visible"
          >
            Input Embeddings
          </motion.text>
          
          <motion.rect 
            x="550" 
            y="170" 
            width="200" 
            height="80" 
            rx="4" 
            fill="#8B5CF6" 
            fillOpacity="0.1" 
            stroke="#8B5CF6" 
            strokeWidth="1.5" 
            custom={1}
            variants={scaleUpVariants}
            initial="hidden"
            animate="visible"
          />
          <motion.text 
            x="650" 
            y="185" 
            textAnchor="middle" 
            className="fill-current text-gray-200 text-sm"
            custom={1}
            variants={scaleUpVariants}
            initial="hidden"
            animate="visible"
          >
            Transformer Layers
          </motion.text>
          
          {/* Small building blocks inside */}
          {[0, 1, 2].map((i) => (
            <motion.rect 
              key={`block-${i}`}
              x={570 + i * 65} 
              y="200" 
              width="55" 
              height="30" 
              rx="2" 
              fill="#8B5CF6" 
              fillOpacity="0.2" 
              stroke="#8B5CF6" 
              strokeWidth="0.75" 
              custom={i + 2}
              variants={scaleUpVariants}
              initial="hidden"
              animate="visible"
            />
          ))}
          {[0, 1, 2].map((i) => (
            <motion.text 
              key={`block-text-${i}`}
              x={597 + i * 65} 
              y="217" 
              textAnchor="middle" 
              dominantBaseline="middle"
              className="fill-current text-gray-300 text-[8px]"
              custom={i + 2}
              variants={scaleUpVariants}
              initial="hidden"
              animate="visible"
            >
              {i === 0 ? "Attention" : i === 1 ? "FFN" : "x N"}
            </motion.text>
          ))}
          
          <motion.rect 
            x="550" 
            y="270" 
            width="200" 
            height="40" 
            rx="4" 
            fill="#3B82F6" 
            fillOpacity="0.1" 
            stroke="#3B82F6" 
            strokeWidth="1.5" 
            custom={5}
            variants={scaleUpVariants}
            initial="hidden"
            animate="visible"
          />
          <motion.text 
            x="650" 
            y="295" 
            textAnchor="middle" 
            className="fill-current text-gray-200 text-sm"
            custom={5}
            variants={scaleUpVariants}
            initial="hidden"
            animate="visible"
          >
            Output Projection
          </motion.text>
          
          {/* Flow arrows */}
          <motion.path 
            d="M 650 150 L 650 170"
            stroke="#6366F1"
            strokeWidth="1.5"
            fill="none"
            markerEnd="url(#arrowMarker)"
            custom={0}
            variants={flowVariants}
            initial="hidden"
            animate="visible"
          />
          
          <motion.path 
            d="M 650 250 L 650 270"
            stroke="#6366F1"
            strokeWidth="1.5"
            fill="none"
            markerEnd="url(#arrowMarker)"
            custom={1}
            variants={flowVariants}
            initial="hidden"
            animate="visible"
          />
        </g>
        
        {/* LLM capabilities section */}
        <g>
          <text 
            x="250" 
            y="340" 
            textAnchor="middle" 
            className="fill-current text-gray-200 text-base"
          >
            Key Capabilities
          </text>
          
          {/* Capability items */}
          <g>
            {capabilities.map((capability, i) => (
              <motion.g 
                key={`capability-${i}`}
                custom={i}
                variants={scaleUpVariants}
                initial="hidden"
                animate="visible"
              >
                <rect 
                  x={150 + (i % 3) * 160} 
                  y={370 + Math.floor(i / 3) * 50} 
                  width="140" 
                  height="35" 
                  rx="4" 
                  fill="#1E293B" 
                  stroke={i % 4 === 0 ? "#4F46E5" : i % 4 === 1 ? "#8B5CF6" : i % 4 === 2 ? "#3B82F6" : "#EC4899"} 
                  strokeWidth="1.5"
                  strokeOpacity="0.7" 
                />
                <text 
                  x={220 + (i % 3) * 160} 
                  y={390 + Math.floor(i / 3) * 50} 
                  textAnchor="middle" 
                  dominantBaseline="middle"
                  className="fill-current text-gray-300 text-xs"
                >
                  {capability}
                </text>
              </motion.g>
            ))}
          </g>
        </g>
        
        {/* Decorative particles */}
        {[...Array(10)].map((_, i) => (
          <motion.circle
            key={`particle-${i}`}
            cx={50 + Math.random() * 800}
            cy={60 + Math.random() * 400}
            r={1 + Math.random() * 2}
            fill="#6366F1"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 0.7, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Animated flow line down the middle of the architecture */}
        <motion.path
          d="M 650 310 C 650 330, 650 360, 650 380 C 650 400, 620 420, 590 420"
          stroke="#6366F1"
          strokeWidth="1.5"
          strokeOpacity="0.4"
          fill="none"
          strokeDasharray="4 4"
          animate={{
            strokeDashoffset: [0, -16]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Year timeline at the bottom */}
        <line 
          x1="100" 
          y1="450" 
          x2="800" 
          y2="450" 
          stroke="#4B5563" 
          strokeWidth="1" 
          strokeOpacity="0.4" 
        />
        
        {[2018, 2019, 2020, 2021, 2022, 2023].map((year, i) => (
          <g key={`year-${i}`}>
            <line 
              x1={200 + i * 120} 
              y1="445" 
              x2={200 + i * 120} 
              y2="455" 
              stroke="#4B5563" 
              strokeWidth="1" 
              strokeOpacity="0.4" 
            />
            <text 
              x={200 + i * 120} 
              y="470" 
              textAnchor="middle" 
              className="fill-current text-gray-400 text-xs"
            >
              {year}
            </text>
          </g>
        ))}
        
        <text 
          x="100" 
          y="470" 
          className="fill-current text-gray-500 text-xs"
        >
          Evolution →
        </text>
      </svg>
    </div>
  );
} 
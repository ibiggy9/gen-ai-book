

const GeneralVisuals = () => (
  <>
    <div className="bg-gray-800 rounded-lg p-4 h-24 flex items-center justify-center">
      <motion.div 
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="w-12 h-12 bg-blue-500 opacity-30 rounded-md"
      />
    </div>
    <div className="bg-gray-800 rounded-lg p-4 h-24 flex items-center justify-center">
      <div className="flex space-x-2">
        {[...Array(5)].map((_, i) => (
          <motion.div 
            key={i}
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.2 }}
            className="w-2 h-2 bg-blue-400 rounded-full"
          />
        ))}
      </div>
    </div>
    <div className="bg-gray-800 rounded-lg p-4 h-24 overflow-hidden">
      <div className="grid grid-cols-10 gap-1">
        {[...Array(50)].map((_, i) => (
          <motion.div 
            key={i}
            animate={{ opacity: [0, 0.7, 0] }}
            transition={{ repeat: Infinity, duration: 2, delay: Math.random() * 2 }}
            className="w-full h-2 bg-blue-500 rounded-full"
          />
        ))}
      </div>
    </div>
  </>
);

const TokenizerVisual = () => (
  <>
    <div className="bg-gray-800 rounded-lg p-4 h-24 flex items-center justify-center">
      <div className="w-full">
        <div className="flex items-center justify-between space-x-2">
          <div className="text-xs text-center text-blue-400">Text</div>
          <div className="text-xs text-center text-gray-400">→</div>
          <div className="text-xs text-center text-blue-400">Tokens</div>
        </div>
        <div className="mt-2 w-full flex justify-between">
          <motion.div 
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="py-1 px-2 bg-blue-900/30 text-blue-400 text-xs rounded"
          >
            "Hello world"
          </motion.div>
          <div className="text-gray-400">→</div>
          <div className="flex space-x-1">
            {["Hello", "world"].map((token, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.5 }}
                className="py-1 px-2 bg-blue-900/30 text-blue-400 text-xs rounded"
              >
                {token}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <div className="bg-gray-800 rounded-lg p-4 h-24 flex items-center justify-center overflow-hidden">
      <div className="flex flex-wrap gap-1 justify-center">
        {["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"].map((token, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="py-1 px-2 bg-blue-900/30 text-blue-400 text-xs rounded"
          >
            {token}
          </motion.div>
        ))}
      </div>
    </div>
    <div className="bg-gray-800 rounded-lg p-4 h-24 flex flex-col justify-center">
      <div className="text-xs text-blue-400 mb-2">Token IDs:</div>
      <div className="flex flex-wrap gap-1">
        {[101, 2028, 2003, 2204, 3492, 102].map((id, i) => (
          <motion.div 
            key={i}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: i * 0.15 }}
            className="py-1 px-2 bg-blue-900/20 text-gray-400 text-xs rounded font-mono"
          >
            {id}
          </motion.div>
        ))}
      </div>
    </div>
  </>
);

const TransformerVisual = () => (
  <>
    <div className="bg-gray-800 rounded-lg p-4 h-24 flex items-center justify-center">
      <svg width="90%" height="90%" viewBox="0 0 100 50">
        {/* Transformer base architecture */}
        <rect x="10" y="5" width="80" height="40" rx="2" fill="transparent" stroke="#6366F1" strokeWidth="1.5" />
        
        {/* Encoder */}
        <rect x="15" y="10" width="30" height="30" rx="2" fill="#3B82F6" fillOpacity="0.2" stroke="#3B82F6" strokeWidth="1" />
        <text x="30" y="25" fontSize="5" textAnchor="middle" fill="var(--text-primary)">Encoder</text>
        
        {/* Decoder */}
        <rect x="55" y="10" width="30" height="30" rx="2" fill="#8B5CF6" fillOpacity="0.2" stroke="#8B5CF6" strokeWidth="1" />
        <text x="70" y="25" fontSize="5" textAnchor="middle" fill="var(--text-primary)">Decoder</text>
        
        {/* Attention lines */}
        <motion.path 
          d="M 45 20 C 50 20, 50 20, 55 20"
          strokeWidth="0.75"
          stroke="#4F46E5"
          fill="none"
          animate={{ pathLength: [0, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
        />
        <motion.path 
          d="M 45 25 C 50 25, 50 25, 55 25"
          strokeWidth="0.75"
          stroke="#4F46E5"
          fill="none"
          animate={{ pathLength: [0, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop", delay: 0.2 }}
        />
        <motion.path 
          d="M 45 30 C 50 30, 50 30, 55 30"
          strokeWidth="0.75"
          stroke="#4F46E5"
          fill="none"
          animate={{ pathLength: [0, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop", delay: 0.4 }}
        />
      </svg>
    </div>
    <div className="bg-gray-800 rounded-lg p-4 h-24 flex items-center justify-center">
      <svg width="100%" height="100%" viewBox="0 0 100 50">
        {/* Self-attention mechanism visualization */}
        <text x="50" y="8" fontSize="4" textAnchor="middle" fill="var(--text-primary)">Self-Attention</text>
        
        {/* Input tokens */}
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <rect x={20 + i*20} y="12" width="16" height="8" rx="1" fill="#3B82F6" fillOpacity="0.2" stroke="#3B82F6" strokeWidth="0.5" />
            <text x={28 + i*20} y="17" fontSize="4" textAnchor="middle" fill="var(--text-primary)">Token {i+1}</text>
          </g>
        ))}
        
        {/* Attention connections */}
        {[0, 1, 2].map((from) => (
          [0, 1, 2].map((to) => (
            <motion.line 
              key={`${from}-${to}`}
              x1={28 + from*20} 
              y1="20" 
              x2={28 + to*20} 
              y2="30"
              stroke="#4F46E5"
              strokeWidth="0.5"
              strokeOpacity={from === to ? 0.8 : 0.3}
              animate={{ strokeOpacity: [from === to ? 0.8 : 0.3, from === to ? 1 : 0.6, from === to ? 0.8 : 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          ))
        ))}
        
        {/* Output tokens */}
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <rect x={20 + i*20} y="30" width="16" height="8" rx="1" fill="#8B5CF6" fillOpacity="0.2" stroke="#8B5CF6" strokeWidth="0.5" />
            <text x={28 + i*20} y="35" fontSize="4" textAnchor="middle" fill="var(--text-primary)">Output {i+1}</text>
          </g>
        ))}
      </svg>
    </div>
    <div className="bg-gray-800 rounded-lg p-4 h-24 flex flex-col justify-center">
      <div className="text-xs text-blue-400 mb-2">Features:</div>
      <div className="grid grid-cols-2 gap-1">
        {["Attention", "Self-Attention", "Multi-Head", "Positional Encoding"].map((feature, i) => (
          <motion.div 
            key={i}
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: i * 0.2 }}
            className="flex items-center gap-1"
          >
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-xs text-gray-300">{feature}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </>
);

const LLMVisual = () => (
  <>
    <div className="bg-gray-800 rounded-lg p-4 h-24 flex items-center justify-center">
      <svg width="90%" height="90%" viewBox="0 0 100 50">
        {/* LLM architecture visualization */}
        <text x="50" y="8" fontSize="5" textAnchor="middle" fill="var(--text-primary)">LLM Architecture</text>
        
        {/* Layers */}
        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
            <rect x="20" y={10 + i*8} width="60" height="6" rx="1" 
              fill={i === 0 ? "#3B82F6" : i === 3 ? "#8B5CF6" : "#6366F1"} 
              fillOpacity="0.2" 
              stroke={i === 0 ? "#3B82F6" : i === 3 ? "#8B5CF6" : "#6366F1"} 
              strokeWidth="0.5" 
            />
            <text x="50" y={14 + i*8} fontSize="3" textAnchor="middle" fill="var(--text-primary)">
              {i === 0 ? "Embedding Layer" : i === 3 ? "Output Layer" : `Transformer Layer ${i}`}
            </text>
          </g>
        ))}
        
        {/* Arrows between layers */}
        {[0, 1, 2].map((i) => (
          <motion.path 
            key={i}
            d={`M 50 ${16 + i*8} L 50 ${18 + i*8}`}
            stroke="#4F46E5"
            strokeWidth="0.75"
            markerEnd="url(#arrowhead)"
            animate={{ strokeDashoffset: [10, 0] }}
            style={{ strokeDasharray: 10 }}
            transition={{ duration: 1, repeat: Infinity, delay: i * 0.3 }}
          />
        ))}
        
        <defs>
          <marker id="arrowhead" markerWidth="4" markerHeight="3" 
            refX="2" refY="1.5" orient="auto">
            <polygon points="0 0, 4 1.5, 0 3" fill="#4F46E5" />
          </marker>
        </defs>
      </svg>
    </div>
    <div className="bg-gray-800 rounded-lg p-4 h-24 flex items-center justify-center">
      <div className="w-full">
        <div className="text-xs text-blue-400 mb-2 text-center">Text Generation</div>
        <div className="w-full flex justify-center space-x-1">
          <div className="py-1 px-2 bg-blue-900/30 text-blue-400 text-xs rounded">The</div>
          <div className="py-1 px-2 bg-blue-900/30 text-blue-400 text-xs rounded">quick</div>
          <div className="py-1 px-2 bg-blue-900/30 text-blue-400 text-xs rounded">brown</div>
          <motion.div 
            animate={{ opacity: [0, 1], scale: [0.8, 1] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
            className="py-1 px-2 bg-purple-900/40 text-purple-400 text-xs rounded"
          >
            fox
          </motion.div>
        </div>
        <div className="w-full mt-2 flex justify-center">
          <div className="grid grid-cols-3 gap-1 text-[8px]">
            <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity }} className="px-1 py-0.5 bg-gray-700/50 rounded text-center">fox (92%)</motion.div>
            <motion.div animate={{ opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 2, repeat: Infinity, delay: 0.3 }} className="px-1 py-0.5 bg-gray-700/50 rounded text-center">dog (5%)</motion.div>
            <motion.div animate={{ opacity: [0.3, 0.4, 0.3] }} transition={{ duration: 2, repeat: Infinity, delay: 0.6 }} className="px-1 py-0.5 bg-gray-700/50 rounded text-center">cat (3%)</motion.div>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-gray-800 rounded-lg p-4 h-24 flex flex-col justify-center">
      <div className="text-xs text-blue-400 mb-1">Notable Models:</div>
      <div className="flex flex-col gap-1">
        {[
          { name: "GPT-4", size: "1.76T params" },
          { name: "PaLM", size: "540B params" },
          { name: "LLaMA 2", size: "70B params" }
        ].map((model, i) => (
          <motion.div 
            key={i}
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: i * 0.2 }}
            className="flex justify-between text-xs"
          >
            <span className="text-gray-300 font-medium">{model.name}</span>
            <span className="text-gray-400">{model.size}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </>
);

const AgentVisual = () => (
  <>
    <div className="bg-gray-800 rounded-lg p-4 h-24 flex items-center justify-center">
      <svg width="90%" height="90%" viewBox="0 0 100 50">
        <text x="50" y="8" fontSize="5" textAnchor="middle" fill="var(--text-primary)">Agent Architecture</text>
        
        {/* Brain/LLM */}
        <circle cx="50" cy="25" r="10" fill="#6366F1" fillOpacity="0.2" stroke="#6366F1" strokeWidth="1" />
        <text x="50" y="26" fontSize="4" textAnchor="middle" fill="var(--text-primary)">LLM</text>
        
        {/* Memory */}
        <rect x="67" y="20" width="14" height="10" rx="1" fill="#3B82F6" fillOpacity="0.2" stroke="#3B82F6" strokeWidth="0.75" />
        <text x="74" y="26" fontSize="3" textAnchor="middle" fill="var(--text-primary)">Memory</text>
        
        {/* Tools */}
        <rect x="19" y="20" width="14" height="10" rx="1" fill="#8B5CF6" fillOpacity="0.2" stroke="#8B5CF6" strokeWidth="0.75" />
        <text x="26" y="26" fontSize="3" textAnchor="middle" fill="var(--text-primary)">Tools</text>
        
        {/* Connection lines */}
        <motion.path 
          d="M 33 25 L 40 25"
          stroke="#4F46E5"
          strokeWidth="0.75"
          animate={{ pathLength: [0, 1] }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "loop" }}
        />
        <motion.path 
          d="M 60 25 L 67 25"
          stroke="#4F46E5"
          strokeWidth="0.75"
          animate={{ pathLength: [0, 1] }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "loop", delay: 0.5 }}
        />
        
        {/* Input/Output arrows */}
        <motion.path 
          d="M 50 10 L 50 15"
          stroke="#4F46E5"
          strokeWidth="0.75"
          markerEnd="url(#arrowhead)"
          animate={{ y: [0, 2, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <text x="50" y="15" fontSize="3" dx="-6" textAnchor="end" fill="var(--text-primary)">Input</text>
        
        <motion.path 
          d="M 50 35 L 50 40"
          stroke="#4F46E5"
          strokeWidth="0.75"
          markerEnd="url(#arrowhead)"
          animate={{ y: [0, 2, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        />
        <text x="50" y="40" fontSize="3" dx="6" textAnchor="start" fill="var(--text-primary)">Action</text>
        
        <defs>
          <marker id="arrowhead" markerWidth="4" markerHeight="3" 
            refX="2" refY="1.5" orient="auto">
            <polygon points="0 0, 4 1.5, 0 3" fill="#4F46E5" />
          </marker>
        </defs>
      </svg>
    </div>
    <div className="bg-gray-800 rounded-lg p-4 h-24 flex items-center justify-center">
      <div className="w-full">
        <div className="text-xs text-blue-400 mb-2 text-center">Agent Loop</div>
        <div className="relative flex items-center justify-center">
          <svg width="80%" height="60" viewBox="0 0 100 60">
            {/* Circular process visualization */}
            <circle cx="50" cy="30" r="24" fill="transparent" stroke="#6366F1" strokeWidth="0.75" strokeOpacity="0.3" />
            
            {/* Process steps */}
            {["Observe", "Think", "Act", "Learn"].map((step, i) => {
              const angle = (i / 4) * 2 * Math.PI - Math.PI/2;
              const x = 50 + 24 * Math.cos(angle);
              const y = 30 + 24 * Math.sin(angle);
              
              return (
                <g key={i}>
                  <circle 
                    cx={x} 
                    cy={y} 
                    r="8" 
                    fill="#6366F1" 
                    fillOpacity="0.2" 
                    stroke="#6366F1" 
                    strokeWidth="0.75" 
                  />
                  <text 
                    x={x} 
                    y={y} 
                    fontSize="3.5" 
                    textAnchor="middle" 
                    dominantBaseline="middle"
                    fill="var(--text-primary)"
                  >
                    {step}
                  </text>
                </g>
              );
            })}
            
            {/* Animated dot moving around the circle */}
            <motion.circle 
              cx="50" 
              cy="6" 
              r="2" 
              fill="#F472B6" 
              animate={{
                cx: [50, 74, 50, 26, 50],
                cy: [6, 30, 54, 30, 6]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </svg>
        </div>
      </div>
    </div>
    <div className="bg-gray-800 rounded-lg p-4 h-24 flex flex-col justify-center">
      <div className="text-xs text-blue-400 mb-1">Agent Capabilities:</div>
      <div className="grid grid-cols-2 gap-1">
        {[
          "Decision Making", 
          "Tool Use", 
          "Memory", 
          "Planning",
          "Learning",
          "Interaction"
        ].map((capability, i) => (
          <motion.div 
            key={i}
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center gap-1"
          >
            <motion.div 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
              className="w-2 h-2 bg-blue-500 rounded-full"
            />
            <span className="text-xs text-gray-300">{capability}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </>
);

export default function VisualElements({ activeSection }) {
  // Helper function to determine which visuals to display based on the section ID
  const getVisualForSection = () => {
    // Get the section number as an integer
    const sectionNum = parseInt(activeSection, 10);
    
    // Choose visuals based on section ranges
    if (sectionNum >= 0 && sectionNum <= 5) {
      // Intro and generative AI basics
      return <GeneralVisuals />;
    } else if (sectionNum >= 6 && sectionNum <= 10) {
      // Language models and tokenization
      return <TokenizerVisual />;
    } else if ((sectionNum >= 11 && sectionNum <= 13) || (sectionNum >= 14 && sectionNum <= 17)) {
      // Neural networks and transformers
      return <TransformerVisual />;
    } else if (sectionNum >= 18 && sectionNum <= 21) {
      // Large language models
      return <LLMVisual />;
    } else if (sectionNum >= 22) {
      // AI agents and beyond
      return <AgentVisual />;
    }
    
    // Default case
    return <GeneralVisuals />;
  };

  return (
    <div className="grid grid-cols-3 gap-4 w-full">
      {getVisualForSection()}
    </div>
  );
} 
import React from 'react';


const AIVisualizationGrid = ({ showLLMOnly = false }) => {
  return (
    <div className='flex justify-center mb-10'>
    <div className={showLLMOnly ? "" : "grid grid-cols-3  gap-4 w-4/4"}>
      {!showLLMOnly && (
        // Neural Network Visualization
        <div 
          className="bg-slate-900 rounded-lg p-4 aspect-[4/3]  flex items-center justify-center"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <g>
              {/* Input Layer */}
              <circle cx="20" cy="25" r="4" fill="#8B5CF6">
                <animate 
                  attributeName="opacity" 
                  from="0" 
                  to="1" 
                  dur="1s" 
                  begin="0.2s"
                  fill="freeze"
                />
              </circle>
              <circle cx="20" cy="50" r="4" fill="#8B5CF6">
                <animate 
                  attributeName="opacity" 
                  from="0" 
                  to="1" 
                  dur="1s" 
                  begin="0.3s"
                  fill="freeze"
                />
              </circle>
              <circle cx="20" cy="75" r="4" fill="#8B5CF6">
                <animate 
                  attributeName="opacity" 
                  from="0" 
                  to="1" 
                  dur="1s" 
                  begin="0.4s"
                  fill="freeze"
                />
              </circle>
              
              {/* Hidden Layer */}
              <circle cx="50" cy="20" r="4" fill="#8B5CF6">
                <animate 
                  attributeName="opacity" 
                  from="0" 
                  to="1" 
                  dur="1s" 
                  begin="0.5s"
                  fill="freeze"
                />
              </circle>
              <circle cx="50" cy="40" r="4" fill="#8B5CF6">
                <animate 
                  attributeName="opacity" 
                  from="0" 
                  to="1" 
                  dur="1s" 
                  begin="0.6s"
                  fill="freeze"
                />
              </circle>
              <circle cx="50" cy="60" r="4" fill="#8B5CF6">
                <animate 
                  attributeName="opacity" 
                  from="0" 
                  to="1" 
                  dur="1s" 
                  begin="0.7s"
                  fill="freeze"
                />
              </circle>
              <circle cx="50" cy="80" r="4" fill="#8B5CF6">
                <animate 
                  attributeName="opacity" 
                  from="0" 
                  to="1" 
                  dur="1s" 
                  begin="0.8s"
                  fill="freeze"
                />
              </circle>
              
              {/* Output Layer */}
              <circle cx="80" cy="33" r="4" fill="#8B5CF6">
                <animate 
                  attributeName="opacity" 
                  from="0" 
                  to="1" 
                  dur="1s" 
                  begin="0.9s"
                  fill="freeze"
                />
              </circle>
              <circle cx="80" cy="67" r="4" fill="#8B5CF6">
                <animate 
                  attributeName="opacity" 
                  from="0" 
                  to="1" 
                  dur="1s" 
                  begin="1s"
                  fill="freeze"
                />
              </circle>
              
              {/* Connections - Using stroke animation */}
              {/* Input to Hidden */}
              <line x1="20" y1="25" x2="50" y2="20" stroke="#6D28D9" strokeWidth="0.5">
                <animate 
                  attributeName="opacity" 
                  from="0" 
                  to="0.6" 
                  dur="1.5s" 
                  begin="1.1s"
                  fill="freeze"
                />
                <animate 
                  attributeName="stroke-dashoffset" 
                  from="100" 
                  to="0" 
                  dur="1.5s" 
                  begin="1.1s"
                  fill="freeze"
                />
                <animate 
                  attributeName="stroke-dasharray" 
                  values="0 100;100 0" 
                  dur="1.5s" 
                  begin="1.1s"
                  fill="freeze"
                />
              </line>
              
              <line x1="20" y1="25" x2="50" y2="40" stroke="#6D28D9" strokeWidth="0.5">
                <animate 
                  attributeName="opacity" 
                  from="0" 
                  to="0.6" 
                  dur="1.5s" 
                  begin="1.15s"
                  fill="freeze"
                />
                <animate 
                  attributeName="stroke-dashoffset" 
                  from="100" 
                  to="0" 
                  dur="1.5s" 
                  begin="1.15s"
                  fill="freeze"
                />
                <animate 
                  attributeName="stroke-dasharray" 
                  values="0 100;100 0" 
                  dur="1.5s" 
                  begin="1.15s"
                  fill="freeze"
                />
              </line>
              
              <line x1="20" y1="25" x2="50" y2="60" stroke="#6D28D9" strokeWidth="0.5">
                <animate 
                  attributeName="opacity" 
                  from="0" 
                  to="0.6" 
                  dur="1.5s" 
                  begin="1.2s"
                  fill="freeze"
                />
                <animate 
                  attributeName="stroke-dashoffset" 
                  from="100" 
                  to="0" 
                  dur="1.5s" 
                  begin="1.2s"
                  fill="freeze"
                />
                <animate 
                  attributeName="stroke-dasharray" 
                  values="0 100;100 0" 
                  dur="1.5s" 
                  begin="1.2s"
                  fill="freeze"
                />
              </line>
              
              <line x1="20" y1="25" x2="50" y2="80" stroke="#6D28D9" strokeWidth="0.5">
                <animate 
                  attributeName="opacity" 
                  from="0" 
                  to="0.6" 
                  dur="1.5s" 
                  begin="1.25s"
                  fill="freeze"
                />
                <animate 
                  attributeName="stroke-dashoffset" 
                  from="100" 
                  to="0" 
                  dur="1.5s" 
                  begin="1.25s"
                  fill="freeze"
                />
                <animate 
                  attributeName="stroke-dasharray" 
                  values="0 100;100 0" 
                  dur="1.5s" 
                  begin="1.25s"
                  fill="freeze"
                />
              </line>
              
              {/* Add pulsing animation to nodes that repeats infinitely */}
              <circle cx="20" cy="25" r="4" fill="none" stroke="#8B5CF6" strokeWidth="0.5">
                <animate 
                  attributeName="r" 
                  values="4;5;4" 
                  dur="3s" 
                  begin="2s"
                  repeatCount="indefinite"
                />
                <animate 
                  attributeName="opacity" 
                  values="0.6;1;0.6" 
                  dur="3s" 
                  begin="2s"
                  repeatCount="indefinite"
                />
              </circle>
              
              <circle cx="50" cy="40" r="4" fill="none" stroke="#8B5CF6" strokeWidth="0.5">
                <animate 
                  attributeName="r" 
                  values="4;5;4" 
                  dur="3s" 
                  begin="2.2s"
                  repeatCount="indefinite"
                />
                <animate 
                  attributeName="opacity" 
                  values="0.6;1;0.6" 
                  dur="3s" 
                  begin="2.2s"
                  repeatCount="indefinite"
                />
              </circle>
              
              <circle cx="80" cy="67" r="4" fill="none" stroke="#8B5CF6" strokeWidth="0.5">
                <animate 
                  attributeName="r" 
                  values="4;5;4" 
                  dur="3s" 
                  begin="2.4s"
                  repeatCount="indefinite"
                />
                <animate 
                  attributeName="opacity" 
                  values="0.6;1;0.6" 
                  dur="3s" 
                  begin="2.4s"
                  repeatCount="indefinite"
                />
              </circle>
              
              {/* Data flow animation along the connections */}
              <circle r="1.5" fill="#A78BFA">
                <animate 
                  attributeName="opacity" 
                  values="0;1;0" 
                  dur="3s" 
                  begin="3s"
                  repeatCount="indefinite"
                />
                <animateMotion 
                  path="M20,25 L50,40" 
                  dur="3s" 
                  begin="3s"
                  repeatCount="indefinite"
                />
              </circle>
              
              <circle r="1.5" fill="#A78BFA">
                <animate 
                  attributeName="opacity" 
                  values="0;1;0" 
                  dur="3.5s" 
                  begin="3.2s"
                  repeatCount="indefinite"
                />
                <animateMotion 
                  path="M50,40 L80,67" 
                  dur="3.5s" 
                  begin="3.2s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          </svg>
        </div>
      )}

      {/* Attention Mechanism */}
      {!showLLMOnly && (
        <motion.div 
          className="bg-slate-900 rounded-lg p-4  aspect-[4/3] flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <filter id="attentionGlow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="1.5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
              <linearGradient id="heatmapGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#6D28D9" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.9" />
                <animate 
                  attributeName="x1" 
                  values="0%;20%;0%" 
                  dur="5s" 
                  repeatCount="indefinite" 
                />
              </linearGradient>
            </defs>
            <g>
              {/* Title */}
              <text x="20" y="12" fill="#A78BFA" fontSize="6" fontWeight="bold">
                Attention Mechanism
                <animate 
                  attributeName="opacity" 
                  values="0;1" 
                  dur="0.8s" 
                  begin="0s"
                  fill="freeze" 
                />
              </text>
              
              {/* Labels */}
              <text x="10" y="18" fill="#A78BFA" fontSize="4" textAnchor="start" opacity="0">
                Query Tokens
                <animate 
                  attributeName="opacity" 
                  values="0;0.9" 
                  dur="0.5s" 
                  begin="0.3s" 
                  fill="freeze" 
                />
              </text>
              
              <text x="75" y="18" fill="#A78BFA" fontSize="4" textAnchor="start" opacity="0">
                Key Tokens
                <animate 
                  attributeName="opacity" 
                  values="0;0.9" 
                  dur="0.5s" 
                  begin="0.7s" 
                  fill="freeze" 
                />
              </text>
              
              {/* Source/Query tokens */}
              <motion.rect 
                x="10" y="22" width="15" height="10" rx="2" fill="#8B5CF6"
                initial={{ x: -5, opacity: 0 }}
                animate={{ x: 10, opacity: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.3,
                  repeat: Infinity,
                  repeatDelay: 6,
                  repeatType: "loop"
                }}
              />
              <text x="17.5" y="27.5" fill="white" fontSize="3.5" textAnchor="middle" opacity="0">
                "What"
                <animate 
                  attributeName="opacity" 
                  values="0;1" 
                  dur="0.5s" 
                  begin="0.35s" 
                  fill="freeze" 
                  repeatCount="1"
                />
              </text>
              
              <motion.rect 
                x="10" y="37" width="15" height="10" rx="2" fill="#8B5CF6"
                initial={{ x: -5, opacity: 0 }}
                animate={{ x: 10, opacity: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.4,
                  repeat: Infinity,
                  repeatDelay: 6,
                  repeatType: "loop"
                }}
              />
              <text x="17.5" y="42.5" fill="white" fontSize="3.5" textAnchor="middle" opacity="0">
                "is"
                <animate 
                  attributeName="opacity" 
                  values="0;1" 
                  dur="0.5s" 
                  begin="0.45s" 
                  fill="freeze" 
                  repeatCount="1"
                />
              </text>
              
              <motion.rect 
                x="10" y="52" width="15" height="10" rx="2" fill="#8B5CF6"
                initial={{ x: -5, opacity: 0 }}
                animate={{ x: 10, opacity: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.5,
                  repeat: Infinity,
                  repeatDelay: 6,
                  repeatType: "loop"
                }}
              />
              <text x="17.5" y="57.5" fill="white" fontSize="3.2" textAnchor="middle" opacity="0">
                "attention"
                <animate 
                  attributeName="opacity" 
                  values="0;1" 
                  dur="0.5s" 
                  begin="0.55s" 
                  fill="freeze" 
                  repeatCount="1"
                />
              </text>
              
              <motion.rect 
                x="10" y="67" width="15" height="10" rx="2" fill="#8B5CF6"
                initial={{ x: -5, opacity: 0 }}
                animate={{ x: 10, opacity: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.6,
                  repeat: Infinity,
                  repeatDelay: 6,
                  repeatType: "loop"
                }}
              />
              <text x="17.5" y="72.5" fill="white" fontSize="3.5" textAnchor="middle" opacity="0">
                "?"
                <animate 
                  attributeName="opacity" 
                  values="0;1" 
                  dur="0.5s" 
                  begin="0.65s" 
                  fill="freeze" 
                  repeatCount="1"
                />
              </text>
              
              {/* Target/Key tokens */}
              <motion.rect 
                x="75" y="22" width="15" height="10" rx="2" fill="#8B5CF6"
                initial={{ x: 90, opacity: 0 }}
                animate={{ x: 75, opacity: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.7,
                  repeat: Infinity,
                  repeatDelay: 6,
                  repeatType: "loop"
                }}
              />
              <text x="77" y="27.5" fill="white" fontSize="3.5" opacity="0">
                "attention"
                <animate 
                  attributeName="opacity" 
                  values="0;1" 
                  dur="0.5s" 
                  begin="0.75s" 
                  fill="freeze" 
                  repeatCount="1"
                />
              </text>
              
              <motion.rect 
                x="75" y="37" width="15" height="10" rx="2" fill="#8B5CF6"
                initial={{ x: 90, opacity: 0 }}
                animate={{ x: 75, opacity: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.8,
                  repeat: Infinity,
                  repeatDelay: 6,
                  repeatType: "loop"
                }}
              />
              <text x="77" y="42.5" fill="white" fontSize="3.5" opacity="0">
                "is"
                <animate 
                  attributeName="opacity" 
                  values="0;1" 
                  dur="0.5s" 
                  begin="0.85s" 
                  fill="freeze" 
                  repeatCount="1"
                />
              </text>
              
              <motion.rect 
                x="75" y="52" width="15" height="10" rx="2" fill="#8B5CF6"
                initial={{ x: 90, opacity: 0 }}
                animate={{ x: 75, opacity: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.9,
                  repeat: Infinity,
                  repeatDelay: 6,
                  repeatType: "loop"
                }}
              />
              <text x="80" y="57.5" fill="white" fontSize="3.5" opacity="0">
                "key"
                <animate 
                  attributeName="opacity" 
                  values="0;1" 
                  dur="0.5s" 
                  begin="0.95s" 
                  fill="freeze" 
                  repeatCount="1"
                />
              </text>
              
              <motion.rect 
                x="75" y="67" width="15" height="10" rx="2" fill="#8B5CF6"
                initial={{ x: 90, opacity: 0 }}
                animate={{ x: 75, opacity: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 1,
                  repeat: Infinity,
                  repeatDelay: 6,
                  repeatType: "loop"
                }}
              />
              <text x="80" y="72.5" fill="white" fontSize="3.5" opacity="0">
                "concept"
                <animate 
                  attributeName="opacity" 
                  values="0;1" 
                  dur="0.5s" 
                  begin="1.05s" 
                  fill="freeze" 
                  repeatCount="1"
                />
              </text>
              
              {/* Attention score label */}
              <text x="50" y="82" fill="#A78BFA" fontSize="4.5" textAnchor="middle" opacity="0">
                Attention Scores
                <animate 
                  attributeName="opacity" 
                  values="0;0.9" 
                  dur="0.5s" 
                  begin="1.1s" 
                  fill="freeze" 
                />
              </text>
              
              {/* Attention legend - restructured for better alignment */}
              <g opacity="0">
                {/* High Attention */}
                <text x="30" y="88" fill="#A78BFA" fontSize="3.5" textAnchor="end">High</text>
                <rect x="32" y="85.5" width="8" height="3.5" fill="#8B5CF6"/>
                
                {/* Medium Attention */}
                <text x="55" y="88" fill="#A78BFA" fontSize="3.5" textAnchor="end">Medium</text>
                <rect x="57" y="85.5" width="8" height="3.5" fill="#A78BFA" opacity="0.7"/>
                
                {/* Low Attention */}
                <text x="78" y="88" fill="#A78BFA" fontSize="3.5" textAnchor="end">Low</text>
                <rect x="80" y="85.5" width="8" height="3.5" fill="#A78BFA" opacity="0.3"/>
                
                <animate 
                  attributeName="opacity" 
                  values="0;1" 
                  dur="0.5s" 
                  begin="1.2s" 
                  fill="freeze" 
                />
              </g>
              
              {/* Attention lines with varying opacity - animated to pulse */}
              {/* Strong attention connection: "attention" token to "attention" token */}
              <motion.line 
                x1="25" y1="57" x2="75" y2="27" stroke="url(#heatmapGradient)" strokeWidth="2.5" 
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: 1, 
                  opacity: [0, 0.95, 0.7, 0.95],
                  strokeWidth: [1, 2.5, 2, 2.5]
                }}
                transition={{ 
                  duration: 3, 
                  delay: 1.5,
                  repeat: Infinity,
                  repeatType: "loop"
                }}
                filter="url(#attentionGlow)"
              />
              <circle r="1.8" fill="#8B5CF6" opacity="0">
                <animate 
                  attributeName="opacity" 
                  values="0;1;0" 
                  dur="2.5s" 
                  begin="2s" 
                  repeatCount="indefinite" 
                />
                <animateMotion 
                  path="M25,57 L75,27" 
                  dur="2.5s" 
                  begin="2s" 
                  repeatCount="indefinite" 
                />
              </circle>
              
              {/* Strong attention connection: "is" token to "is" token */}
              <motion.line 
                x1="25" y1="42" x2="75" y2="42" stroke="url(#heatmapGradient)" strokeWidth="2.5" 
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: 1, 
                  opacity: [0, 0.95, 0.7, 0.95],
                  strokeWidth: [1, 2.5, 2, 2.5]
                }}
                transition={{ 
                  duration: 3, 
                  delay: 1.7,
                  repeat: Infinity,
                  repeatType: "loop"
                }}
                filter="url(#attentionGlow)"
              />
              <circle r="1.8" fill="#8B5CF6" opacity="0">
                <animate 
                  attributeName="opacity" 
                  values="0;1;0" 
                  dur="2.5s" 
                  begin="2.2s" 
                  repeatCount="indefinite" 
                />
                <animateMotion 
                  path="M25,42 L75,42" 
                  dur="2.5s" 
                  begin="2.2s" 
                  repeatCount="indefinite" 
                />
              </circle>
              
              {/* Medium attention connections */}
              <motion.line 
                x1="25" y1="27" x2="75" y2="42" stroke="#A78BFA" strokeWidth="1.5" strokeOpacity="0.6"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{ 
                  duration: 1.5, 
                  delay: 2.1,
                  repeat: Infinity,
                  repeatDelay: 4,
                  repeatType: "loop"
                }}
              />
              <circle r="1.2" fill="#A78BFA" opacity="0">
                <animate 
                  attributeName="opacity" 
                  values="0;0.7;0" 
                  dur="2s" 
                  begin="2.3s" 
                  repeatCount="indefinite" 
                />
                <animateMotion 
                  path="M25,27 L75,42" 
                  dur="2s" 
                  begin="2.3s" 
                  repeatCount="indefinite" 
                />
              </circle>
              
              <motion.line 
                x1="25" y1="57" x2="75" y2="57" stroke="#A78BFA" strokeWidth="1.5" strokeOpacity="0.6"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{ 
                  duration: 1.5, 
                  delay: 2.2,
                  repeat: Infinity,
                  repeatDelay: 4,
                  repeatType: "loop"
                }}
              />
              <circle r="1.2" fill="#A78BFA" opacity="0">
                <animate 
                  attributeName="opacity" 
                  values="0;0.7;0" 
                  dur="2s" 
                  begin="2.4s" 
                  repeatCount="indefinite" 
                />
                <animateMotion 
                  path="M25,57 L75,57" 
                  dur="2s" 
                  begin="2.4s" 
                  repeatCount="indefinite" 
                />
              </circle>
              
              <motion.line 
                x1="25" y1="72" x2="75" y2="27" stroke="#A78BFA" strokeWidth="1.5" strokeOpacity="0.6"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{ 
                  duration: 1.5, 
                  delay: 2.3,
                  repeat: Infinity,
                  repeatDelay: 4,
                  repeatType: "loop"
                }}
              />
              <circle r="1.2" fill="#A78BFA" opacity="0">
                <animate 
                  attributeName="opacity" 
                  values="0;0.7;0" 
                  dur="2s" 
                  begin="2.5s" 
                  repeatCount="indefinite" 
                />
                <animateMotion 
                  path="M25,72 L75,27" 
                  dur="2s" 
                  begin="2.5s" 
                  repeatCount="indefinite" 
                />
              </circle>
              
              {/* Low attention connections - many thin lines */}
              <motion.line 
                x1="25" y1="27" x2="75" y2="57" stroke="#A78BFA" strokeWidth="0.5" strokeOpacity="0.3"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.3 }}
                transition={{ 
                  duration: 1, 
                  delay: 2.5,
                  repeat: Infinity,
                  repeatDelay: 5,
                  repeatType: "loop"
                }}
              />
              
              <motion.line 
                x1="25" y1="27" x2="75" y2="72" stroke="#A78BFA" strokeWidth="0.5" strokeOpacity="0.3"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.3 }}
                transition={{ 
                  duration: 1, 
                  delay: 2.6,
                  repeat: Infinity,
                  repeatDelay: 5,
                  repeatType: "loop"
                }}
              />
              
              <motion.line 
                x1="25" y1="42" x2="75" y2="27" stroke="#A78BFA" strokeWidth="0.5" strokeOpacity="0.3"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.3 }}
                transition={{ 
                  duration: 1, 
                  delay: 2.7,
                  repeat: Infinity,
                  repeatDelay: 5,
                  repeatType: "loop"
                }}
              />
              
              <motion.line 
                x1="25" y1="42" x2="75" y2="57" stroke="#A78BFA" strokeWidth="0.5" strokeOpacity="0.3"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.3 }}
                transition={{ 
                  duration: 1, 
                  delay: 2.8,
                  repeat: Infinity,
                  repeatDelay: 5,
                  repeatType: "loop"
                }}
              />
              
              <motion.line 
                x1="25" y1="42" x2="75" y2="72" stroke="#A78BFA" strokeWidth="0.5" strokeOpacity="0.3"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.3 }}
                transition={{ 
                  duration: 1, 
                  delay: 2.9,
                  repeat: Infinity,
                  repeatDelay: 5,
                  repeatType: "loop"
                }}
              />
              
              <motion.line 
                x1="25" y1="72" x2="75" y2="42" stroke="#A78BFA" strokeWidth="0.5" strokeOpacity="0.3"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.3 }}
                transition={{ 
                  duration: 1, 
                  delay: 3,
                  repeat: Infinity,
                  repeatDelay: 5,
                  repeatType: "loop"
                }}
              />
              
              <motion.line 
                x1="25" y1="72" x2="75" y2="57" stroke="#A78BFA" strokeWidth="0.5" strokeOpacity="0.3"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.3 }}
                transition={{ 
                  duration: 1, 
                  delay: 3.1,
                  repeat: Infinity,
                  repeatDelay: 5,
                  repeatType: "loop"
                }}
              />
              
              <motion.line 
                x1="25" y1="72" x2="75" y2="72" stroke="#A78BFA" strokeWidth="0.5" strokeOpacity="0.3"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.3 }}
                transition={{ 
                  duration: 1, 
                  delay: 3.2,
                  repeat: Infinity,
                  repeatDelay: 5,
                  repeatType: "loop"
                }}
              />
              
              {/* Spotlight effect - Highlight key feature */}
              <circle cx="50" cy="42" r="0" fill="none" stroke="#8B5CF6" strokeWidth="1.5" opacity="0">
                <animate 
                  attributeName="r" 
                  values="0;10;5;10;0" 
                  dur="6s" 
                  begin="4s" 
                  repeatCount="indefinite" 
                />
                <animate 
                  attributeName="opacity" 
                  values="0;0.6;0.3;0.6;0" 
                  dur="6s" 
                  begin="4s" 
                  repeatCount="indefinite" 
                />
              </circle>
              
              <text x="45" y="39" fill="#A78BFA" fontSize="3.2" textAnchor="middle" opacity="0">
                <animate 
                  attributeName="opacity" 
                  values="0;0.9;0;0.9;0" 
                  dur="6s" 
                  begin="4.5s" 
                  repeatCount="indefinite" 
                />
                Self-
              </text>
              <text x="45" y="43" fill="#A78BFA" fontSize="3.2" textAnchor="middle" opacity="0">
                <animate 
                  attributeName="opacity" 
                  values="0;0.9;0;0.9;0" 
                  dur="6s" 
                  begin="4.5s" 
                  repeatCount="indefinite" 
                />
                Attention
              </text>
            </g>
          </svg>
        </motion.div>
      )}

      {/* Embedding Vector Space */}
      {!showLLMOnly && (
        <div 
          className="bg-slate-900 rounded-lg p-4 aspect-[4/3]  flex items-center justify-center"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              {/* Gradient definitions for word vectors */}
              <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#6D28D9" />
              </linearGradient>
              
              <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#818CF8" />
                <stop offset="100%" stopColor="#4F46E5" />
              </linearGradient>
              
              <linearGradient id="pinkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#E879F9" />
                <stop offset="100%" stopColor="#C026D3" />
              </linearGradient>
              
              {/* Glow for vectors */}
              <filter id="vectorGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="1" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
              
              {/* Grid pattern */}
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#A78BFA" strokeWidth="0.2" opacity="0.3" />
              </pattern>
            </defs>
            
            <g>
              {/* Title */}
              <text x="28" y="12" fill="#A78BFA" fontSize="6" fontWeight="bold">
                Embedding Space
                <animate 
                  attributeName="opacity" 
                  from="0" 
                  to="1" 
                  dur="1s" 
                  begin="0s" 
                  fill="freeze" 
                />
              </text>
              
              {/* Background grid */}
              <rect x="15" y="20" width="70" height="70" fill="url(#grid)" opacity="0">
                <animate 
                  attributeName="opacity" 
                  from="0" 
                  to="0.3" 
                  dur="2s" 
                  begin="0.5s" 
                  fill="freeze" 
                />
              </rect>
              
              {/* Axes */}
              <line x1="15" y1="90" x2="85" y2="90" stroke="#A78BFA" strokeWidth="0.7">
                <animate 
                  attributeName="x2" 
                  from="15" 
                  to="85" 
                  dur="1s" 
                  begin="1s" 
                  fill="freeze" 
                />
              </line>
              <line x1="15" y1="90" x2="15" y2="20" stroke="#A78BFA" strokeWidth="0.7">
                <animate 
                  attributeName="y2" 
                  from="90" 
                  to="20" 
                  dur="1s" 
                  begin="1s" 
                  fill="freeze" 
                />
              </line>
              
              {/* Axis labels */}
              <text x="85" y="95" fill="#A78BFA" fontSize="4" opacity="0">
                x
                <animate 
                  attributeName="opacity" 
                  from="0" 
                  to="1" 
                  dur="0.5s" 
                  begin="1.5s" 
                  fill="freeze" 
                />
              </text>
              <text x="10" y="25" fill="#A78BFA" fontSize="4" opacity="0">
                y
                <animate 
                  attributeName="opacity" 
                  from="0" 
                  to="1" 
                  dur="0.5s" 
                  begin="1.5s" 
                  fill="freeze" 
                />
              </text>
              
              {/* Purple Word Cluster */}
              <g id="purpleCluster">
                <circle cx="30" cy="30" r="2.5" fill="url(#purpleGradient)" opacity="0" filter="url(#vectorGlow)">
                  <animate 
                    attributeName="opacity" 
                    from="0" 
                    to="1" 
                    dur="0.6s" 
                    begin="2s" 
                    fill="freeze" 
                  />
                  <animate 
                    attributeName="r" 
                    values="2.5;3;2.5" 
                    dur="3s" 
                    begin="2s" 
                    repeatCount="indefinite" 
                  />
                </circle>
                <circle cx="33" cy="34" r="2" fill="url(#purpleGradient)" opacity="0" filter="url(#vectorGlow)">
                  <animate 
                    attributeName="opacity" 
                    from="0" 
                    to="0.9" 
                    dur="0.6s" 
                    begin="2.1s" 
                    fill="freeze" 
                  />
                  <animate 
                    attributeName="r" 
                    values="2;2.5;2" 
                    dur="4s" 
                    begin="2.1s" 
                    repeatCount="indefinite" 
                  />
                </circle>
                <circle cx="28" cy="36" r="2" fill="url(#purpleGradient)" opacity="0" filter="url(#vectorGlow)">
                  <animate 
                    attributeName="opacity" 
                    from="0" 
                    to="0.9" 
                    dur="0.6s" 
                    begin="2.2s" 
                    fill="freeze" 
                  />
                  <animate 
                    attributeName="r" 
                    values="2;2.3;2" 
                    dur="5s" 
                    begin="2.2s" 
                    repeatCount="indefinite" 
                  />
                </circle>
                <circle cx="35" cy="29" r="2" fill="url(#purpleGradient)" opacity="0" filter="url(#vectorGlow)">
                  <animate 
                    attributeName="opacity" 
                    from="0" 
                    to="0.9" 
                    dur="0.6s" 
                    begin="2.3s" 
                    fill="freeze" 
                  />
                  <animate 
                    attributeName="r" 
                    values="2;2.4;2" 
                    dur="4.5s" 
                    begin="2.3s" 
                    repeatCount="indefinite" 
                  />
                </circle>
                
                {/* Label for purple cluster */}
                <text x="33" y="25" fill="#A78BFA" fontSize="3.2" textAnchor="middle" opacity="0">
                  "king", "queen", 
                  <animate 
                    attributeName="opacity" 
                    from="0" 
                    to="1" 
                    dur="0.8s" 
                    begin="3s" 
                    fill="freeze" 
                  />
                </text>
                <text x="33" y="29" fill="#A78BFA" fontSize="3.2" textAnchor="middle" opacity="0">
                  "prince", "royal"
                  <animate 
                    attributeName="opacity" 
                    from="0" 
                    to="1" 
                    dur="0.8s" 
                    begin="3.2s" 
                    fill="freeze" 
                  />
                </text>
              </g>
              
              {/* Blue Word Cluster */}
              <g id="blueCluster">
                <circle cx="70" cy="60" r="2.5" fill="url(#blueGradient)" opacity="0" filter="url(#vectorGlow)">
                  <animate 
                    attributeName="opacity" 
                    from="0" 
                    to="1" 
                    dur="0.6s" 
                    begin="2.5s" 
                    fill="freeze" 
                  />
                  <animate 
                    attributeName="r" 
                    values="2.5;3;2.5" 
                    dur="4s" 
                    begin="2.5s" 
                    repeatCount="indefinite" 
                  />
                </circle>
                <circle cx="67" cy="57" r="2" fill="url(#blueGradient)" opacity="0" filter="url(#vectorGlow)">
                  <animate 
                    attributeName="opacity" 
                    from="0" 
                    to="0.9" 
                    dur="0.6s" 
                    begin="2.6s" 
                    fill="freeze" 
                  />
                  <animate 
                    attributeName="r" 
                    values="2;2.5;2" 
                    dur="3.5s" 
                    begin="2.6s" 
                    repeatCount="indefinite" 
                  />
                </circle>
                <circle cx="73" cy="55" r="2" fill="url(#blueGradient)" opacity="0" filter="url(#vectorGlow)">
                  <animate 
                    attributeName="opacity" 
                    from="0" 
                    to="0.9" 
                    dur="0.6s" 
                    begin="2.7s" 
                    fill="freeze" 
                  />
                  <animate 
                    attributeName="r" 
                    values="2;2.3;2" 
                    dur="4.5s" 
                    begin="2.7s" 
                    repeatCount="indefinite" 
                  />
                </circle>
                <circle cx="74" cy="62" r="2" fill="url(#blueGradient)" opacity="0" filter="url(#vectorGlow)">
                  <animate 
                    attributeName="opacity" 
                    from="0" 
                    to="0.9" 
                    dur="0.6s" 
                    begin="2.8s" 
                    fill="freeze" 
                  />
                  <animate 
                    attributeName="r" 
                    values="2;2.4;2" 
                    dur="5s" 
                    begin="2.8s" 
                    repeatCount="indefinite" 
                  />
                </circle>
                
                {/* Label for blue cluster */}
                <text x="70" y="52" fill="#818CF8" fontSize="3.2" textAnchor="middle" opacity="0">
                  "ocean", "water", 
                  <animate 
                    attributeName="opacity" 
                    from="0" 
                    to="1" 
                    dur="0.8s" 
                    begin="3.3s" 
                    fill="freeze" 
                  />
                </text>
                <text x="70" y="56" fill="#818CF8" fontSize="3.2" textAnchor="middle" opacity="0">
                  "sea", "lake"
                  <animate 
                    attributeName="opacity" 
                    from="0" 
                    to="1" 
                    dur="0.8s" 
                    begin="3.5s" 
                    fill="freeze" 
                  />
                </text>
              </g>
              
              {/* Pink Word Cluster */}
              <g id="pinkCluster">
                <circle cx="40" cy="70" r="2.5" fill="url(#pinkGradient)" opacity="0" filter="url(#vectorGlow)">
                  <animate 
                    attributeName="opacity" 
                    from="0" 
                    to="1" 
                    dur="0.6s" 
                    begin="3s" 
                    fill="freeze" 
                  />
                  <animate 
                    attributeName="r" 
                    values="2.5;3;2.5" 
                    dur="3.5s" 
                    begin="3s" 
                    repeatCount="indefinite" 
                  />
                </circle>
                <circle cx="43" cy="74" r="2" fill="url(#pinkGradient)" opacity="0" filter="url(#vectorGlow)">
                  <animate 
                    attributeName="opacity" 
                    from="0" 
                    to="0.9" 
                    dur="0.6s" 
                    begin="3.1s" 
                    fill="freeze" 
                  />
                  <animate 
                    attributeName="r" 
                    values="2;2.5;2" 
                    dur="4s" 
                    begin="3.1s" 
                    repeatCount="indefinite" 
                  />
                </circle>
                <circle cx="37" cy="75" r="2" fill="url(#pinkGradient)" opacity="0" filter="url(#vectorGlow)">
                  <animate 
                    attributeName="opacity" 
                    from="0" 
                    to="0.9" 
                    dur="0.6s" 
                    begin="3.2s" 
                    fill="freeze" 
                  />
                  <animate 
                    attributeName="r" 
                    values="2;2.3;2" 
                    dur="3.5s" 
                    begin="3.2s" 
                    repeatCount="indefinite" 
                  />
                </circle>
                <circle cx="45" cy="68" r="2" fill="url(#pinkGradient)" opacity="0" filter="url(#vectorGlow)">
                  <animate 
                    attributeName="opacity" 
                    from="0" 
                    to="0.9" 
                    dur="0.6s" 
                    begin="3.3s" 
                    fill="freeze" 
                  />
                  <animate 
                    attributeName="r" 
                    values="2;2.4;2" 
                    dur="4.5s" 
                    begin="3.3s" 
                    repeatCount="indefinite" 
                  />
                </circle>
                
                {/* Label for pink cluster */}
                <text x="40" y="80" fill="#E879F9" fontSize="3.2" textAnchor="middle" opacity="0">
                  "car", "vehicle", 
                  <animate 
                    attributeName="opacity" 
                    from="0" 
                    to="1" 
                    dur="0.8s" 
                    begin="3.6s" 
                    fill="freeze" 
                  />
                </text>
                <text x="40" y="84" fill="#E879F9" fontSize="3.2" textAnchor="middle" opacity="0">
                  "truck", "drive"
                  <animate 
                    attributeName="opacity" 
                    from="0" 
                    to="1" 
                    dur="0.8s" 
                    begin="3.8s" 
                    fill="freeze" 
                  />
                </text>
              </g>
              
              {/* Vector arrows from origin */}
              <line x1="15" y1="90" x2="15" y2="90" stroke="url(#purpleGradient)" strokeWidth="0.8" opacity="0.7" strokeDasharray="1, 1">
                <animate 
                  attributeName="x2" 
                  from="15" 
                  to="30" 
                  dur="1s" 
                  begin="4s" 
                  fill="freeze" 
                />
                <animate 
                  attributeName="y2" 
                  from="90" 
                  to="30" 
                  dur="1s" 
                  begin="4s" 
                  fill="freeze" 
                />
              </line>
              
              <line x1="15" y1="90" x2="15" y2="90" stroke="url(#blueGradient)" strokeWidth="0.8" opacity="0.7" strokeDasharray="1, 1">
                <animate 
                  attributeName="x2" 
                  from="15" 
                  to="70" 
                  dur="1s" 
                  begin="4.2s" 
                  fill="freeze" 
                />
                <animate 
                  attributeName="y2" 
                  from="90" 
                  to="60" 
                  dur="1s" 
                  begin="4.2s" 
                  fill="freeze" 
                />
              </line>
              
              <line x1="15" y1="90" x2="15" y2="90" stroke="url(#pinkGradient)" strokeWidth="0.8" opacity="0.7" strokeDasharray="1, 1">
                <animate 
                  attributeName="x2" 
                  from="15" 
                  to="40" 
                  dur="1s" 
                  begin="4.4s" 
                  fill="freeze" 
                />
                <animate 
                  attributeName="y2" 
                  from="90" 
                  to="70" 
                  dur="1s" 
                  begin="4.4s" 
                  fill="freeze" 
                />
              </line>
              
              {/* Similarity illustration */}
              <line x1="30" y1="30" x2="30" y2="30" stroke="#A78BFA" strokeWidth="0.5" strokeDasharray="1" opacity="0">
                <animate 
                  attributeName="opacity" 
                  from="0" 
                  to="0.6" 
                  dur="0.5s" 
                  begin="5s" 
                  fill="freeze" 
                />
                <animate 
                  attributeName="x2" 
                  from="30" 
                  to="70" 
                  dur="1s" 
                  begin="5s" 
                  fill="freeze" 
                />
                <animate 
                  attributeName="y2" 
                  from="30" 
                  to="60" 
                  dur="1s" 
                  begin="5s" 
                  fill="freeze" 
                />
              </line>
              
              <text x="45" y="40" fill="#A78BFA" fontSize="3.5" opacity="0">
                <animate 
                  attributeName="opacity" 
                  values="0;0.8;0" 
                  dur="3s" 
                  begin="6s" 
                  repeatCount="indefinite" 
                />
                Distance = Similarity
              </text>
              
              {/* Animation for word movement */}
              <g>
                <circle cx="54" cy="54" r="2.5" fill="#A78BFA" opacity="0">
                  <animate 
                    id="moveWordAnim1" 
                    attributeName="opacity" 
                    values="0;1;0" 
                    dur="4s" 
                    begin="7s;moveWordAnim1.end+3s" 
                    repeatCount="2" 
                  />
                  <animate 
                    attributeName="cx" 
                    values="54;40;30;40;54" 
                    dur="4s" 
                    begin="7s;moveWordAnim1.end+3s" 
                    repeatCount="2" 
                  />
                  <animate 
                    attributeName="cy" 
                    values="54;60;30;60;54" 
                    dur="4s" 
                    begin="7s;moveWordAnim1.end+3s" 
                    repeatCount="2" 
                  />
                </circle>
                <text x="54" y="54" fill="white" fontSize="3" textAnchor="middle" opacity="0">
                  word
                  <animate 
                    attributeName="opacity" 
                    values="0;1;0" 
                    dur="4s" 
                    begin="7s;moveWordAnim1.end+3s" 
                    repeatCount="2" 
                  />
                  <animate 
                    attributeName="x" 
                    values="54;40;30;40;54" 
                    dur="4s" 
                    begin="7s;moveWordAnim1.end+3s" 
                    repeatCount="2" 
                  />
                  <animate 
                    attributeName="y" 
                    values="54;60;30;60;54" 
                    dur="4s" 
                    begin="7s;moveWordAnim1.end+3s" 
                    repeatCount="2" 
                  />
                </text>
              </g>
            </g>
          </svg>
        </div>
      )}

      {/* Transformer Architecture */}
      {!showLLMOnly && (
        <motion.div 
          className="bg-slate-900 rounded-lg p-4 aspect-[4/3] flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <filter id="transformerGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="1.5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
              <linearGradient id="blockGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.9" />
                <animate 
                  attributeName="x1" 
                  values="0%;30%;0%" 
                  dur="5s" 
                  repeatCount="indefinite" 
                />
              </linearGradient>
            </defs>
            <g>
              {/* Title */}
              
              
              {/* Input embeddings */}
              <rect 
                x="10" 
                y="82" 
                width="80" 
                height="8" 
                rx="2" 
                fill="#8B5CF6" 
                opacity="0"
              >
                <animate 
                  attributeName="opacity" 
                  values="0;0.8" 
                  dur="0.8s" 
                  begin="0.5s" 
                  fill="freeze" 
                />
                <animate 
                  attributeName="fill" 
                  values="#8B5CF6;#A78BFA;#8B5CF6" 
                  dur="3s" 
                  begin="1s" 
                  repeatCount="indefinite" 
                />
              </rect>
              <text 
                x="30" 
                y="87.5" 
                fill="white" 
                fontSize="4.5" 
                textAnchor="start" 
                opacity="0"
              >
                Token Embeddings
                <animate 
                  attributeName="opacity" 
                  values="0;1" 
                  dur="0.8s" 
                  begin="0.7s" 
                  fill="freeze" 
                />
              </text>
              
              {/* Transformer blocks with sequential animation */}
              <rect 
                x="15" 
                y="67" 
                width="70" 
                height="10" 
                rx="2" 
                fill="url(#blockGradient)" 
                opacity="0"
              >
                <animate 
                  attributeName="opacity" 
                  values="0;1" 
                  dur="0.5s" 
                  begin="1.1s" 
                  fill="freeze" 
                />
                <animate 
                  attributeName="filter" 
                  values="none;url(#transformerGlow);none" 
                  dur="4s" 
                  begin="4s" 
                  repeatCount="indefinite" 
                />
              </rect>
              <text 
                x="25" 
                y="73.5" 
                fill="white" 
                fontSize="4" 
                opacity="0"
              >
                Self-Attention Layer
                <animate 
                  attributeName="opacity" 
                  values="0;1" 
                  dur="0.5s" 
                  begin="1.3s" 
                  fill="freeze" 
                />
              </text>
              
              <rect 
                x="15" 
                y="52" 
                width="70" 
                height="10" 
                rx="2" 
                fill="url(#blockGradient)" 
                opacity="0"
              >
                <animate 
                  attributeName="opacity" 
                  values="0;1" 
                  dur="0.5s" 
                  begin="1.6s" 
                  fill="freeze" 
                />
                <animate 
                  attributeName="filter" 
                  values="none;url(#transformerGlow);none" 
                  dur="4s" 
                  begin="5s" 
                  repeatCount="indefinite" 
                />
              </rect>
              <text 
                x="18" 
                y="58.5" 
                fill="white" 
                fontSize="4" 
                opacity="0"
              >
                Feed-Forward Network
                <animate 
                  attributeName="opacity" 
                  values="0;1" 
                  dur="0.5s" 
                  begin="1.8s" 
                  fill="freeze" 
                />
              </text>
              
              <rect 
                x="15" 
                y="37" 
                width="70" 
                height="10" 
                rx="2" 
                fill="url(#blockGradient)" 
                opacity="0"
              >
                <animate 
                  attributeName="opacity" 
                  values="0;1" 
                  dur="0.5s" 
                  begin="2.1s" 
                  fill="freeze" 
                />
                <animate 
                  attributeName="filter" 
                  values="none;url(#transformerGlow);none" 
                  dur="4s" 
                  begin="6s" 
                  repeatCount="indefinite" 
                />
              </rect>
              <text 
                x="25" 
                y="43.5" 
                fill="white" 
                fontSize="4" 
                opacity="0"
              >
                Self-Attention Layer
                <animate 
                  attributeName="opacity" 
                  values="0;1" 
                  dur="0.5s" 
                  begin="2.3s" 
                  fill="freeze" 
                />
              </text>
              
              <rect 
                x="15" 
                y="22" 
                width="70" 
                height="10" 
                rx="2" 
                fill="url(#blockGradient)" 
                opacity="0"
              >
                <animate 
                  attributeName="opacity" 
                  values="0;1" 
                  dur="0.5s" 
                  begin="2.6s" 
                  fill="freeze" 
                />
                <animate 
                  attributeName="filter" 
                  values="none;url(#transformerGlow);none" 
                  dur="4s" 
                  begin="7s" 
                  repeatCount="indefinite" 
                />
              </rect>
              <text 
                x="18" 
                y="28.5" 
                fill="white" 
                fontSize="4" 
                opacity="0"
              >
                Feed-Forward Network
                <animate 
                  attributeName="opacity" 
                  values="0;1" 
                  dur="0.5s" 
                  begin="2.8s" 
                  fill="freeze" 
                />
              </text>
              
              {/* Connecting lines with animated flow */}
              <line 
                x1="50" 
                y1="82" 
                x2="50" 
                y2="77" 
                stroke="#6D28D9" 
                strokeWidth="1" 
                strokeDasharray="2 1" 
                opacity="0"
              >
                <animate 
                  attributeName="opacity" 
                  values="0;0.8" 
                  dur="0.3s" 
                  begin="0.9s" 
                  fill="freeze" 
                />
                <animate 
                  attributeName="stroke-dashoffset" 
                  values="10;0" 
                  dur="1s" 
                  begin="0.9s" 
                  repeatCount="indefinite" 
                />
              </line>
              
              <line 
                x1="50" 
                y1="67" 
                x2="50" 
                y2="62" 
                stroke="#6D28D9" 
                strokeWidth="1" 
                strokeDasharray="2 1" 
                opacity="0"
              >
                <animate 
                  attributeName="opacity" 
                  values="0;0.8" 
                  dur="0.3s" 
                  begin="1.4s" 
                  fill="freeze" 
                />
                <animate 
                  attributeName="stroke-dashoffset" 
                  values="10;0" 
                  dur="1s" 
                  begin="1.4s" 
                  repeatCount="indefinite" 
                />
              </line>
              
              <line 
                x1="50" 
                y1="52" 
                x2="50" 
                y2="47" 
                stroke="#6D28D9" 
                strokeWidth="1" 
                strokeDasharray="2 1" 
                opacity="0"
              >
                <animate 
                  attributeName="opacity" 
                  values="0;0.8" 
                  dur="0.3s" 
                  begin="1.9s" 
                  fill="freeze" 
                />
                <animate 
                  attributeName="stroke-dashoffset" 
                  values="10;0" 
                  dur="1s" 
                  begin="1.9s" 
                  repeatCount="indefinite" 
                />
              </line>
              
              <line 
                x1="50" 
                y1="37" 
                x2="50" 
                y2="32" 
                stroke="#6D28D9" 
                strokeWidth="1" 
                strokeDasharray="2 1" 
                opacity="0"
              >
                <animate 
                  attributeName="opacity" 
                  values="0;0.8" 
                  dur="0.3s" 
                  begin="2.4s" 
                  fill="freeze" 
                />
                <animate 
                  attributeName="stroke-dashoffset" 
                  values="10;0" 
                  dur="1s" 
                  begin="2.4s" 
                  repeatCount="indefinite" 
                />
              </line>
              
              {/* Skip connections with animation */}
              <path 
                d="M85 72 Q95 64.5 85 57" 
                fill="none" 
                stroke="#6D28D9" 
                strokeWidth="0.7" 
                strokeDasharray="3 1.5" 
                opacity="0"
              >
                <animate 
                  attributeName="opacity" 
                  values="0;0.8" 
                  dur="0.5s" 
                  begin="1.4s" 
                  fill="freeze" 
                />
                <animate 
                  attributeName="stroke-dashoffset" 
                  values="20;0" 
                  dur="2s" 
                  begin="1.4s" 
                  repeatCount="indefinite" 
                />
                <animate 
                  attributeName="stroke" 
                  values="#6D28D9;#A78BFA;#6D28D9" 
                  dur="4s" 
                  begin="1.4s" 
                  repeatCount="indefinite" 
                />
              </path>
              <text 
                x="92" 
                y="65" 
                fill="#A78BFA" 
                fontSize="3.5" 
                textAnchor="middle" 
                opacity="0"
              >
                +
                <animate 
                  attributeName="opacity" 
                  values="0;0.9" 
                  dur="0.5s" 
                  begin="1.5s" 
                  fill="freeze" 
                />
              </text>
              
              <path 
                d="M85 57 Q95 49.5 85 42" 
                fill="none" 
                stroke="#6D28D9" 
                strokeWidth="0.7" 
                strokeDasharray="3 1.5" 
                opacity="0"
              >
                <animate 
                  attributeName="opacity" 
                  values="0;0.8" 
                  dur="0.5s" 
                  begin="1.9s" 
                  fill="freeze" 
                />
                <animate 
                  attributeName="stroke-dashoffset" 
                  values="20;0" 
                  dur="2s" 
                  begin="1.9s" 
                  repeatCount="indefinite" 
                />
                <animate 
                  attributeName="stroke" 
                  values="#6D28D9;#A78BFA;#6D28D9" 
                  dur="4s" 
                  begin="1.9s" 
                  repeatCount="indefinite" 
                />
              </path>
              <text 
                x="92" 
                y="50" 
                fill="#A78BFA" 
                fontSize="3.5" 
                textAnchor="middle" 
                opacity="0"
              >
                +
                <animate 
                  attributeName="opacity" 
                  values="0;0.9" 
                  dur="0.5s" 
                  begin="2s" 
                  fill="freeze" 
                />
              </text>
              
              <path 
                d="M85 42 Q95 34.5 85 27" 
                fill="none" 
                stroke="#6D28D9" 
                strokeWidth="0.7" 
                strokeDasharray="3 1.5" 
                opacity="0"
              >
                <animate 
                  attributeName="opacity" 
                  values="0;0.8" 
                  dur="0.5s" 
                  begin="2.4s" 
                  fill="freeze" 
                />
                <animate 
                  attributeName="stroke-dashoffset" 
                  values="20;0" 
                  dur="2s" 
                  begin="2.4s" 
                  repeatCount="indefinite" 
                />
                <animate 
                  attributeName="stroke" 
                  values="#6D28D9;#A78BFA;#6D28D9" 
                  dur="4s" 
                  begin="2.4s" 
                  repeatCount="indefinite" 
                />
              </path>
              <text 
                x="92" 
                y="35" 
                fill="#A78BFA" 
                fontSize="3.5" 
                textAnchor="middle" 
                opacity="0"
              >
                +
                <animate 
                  attributeName="opacity" 
                  values="0;0.9" 
                  dur="0.5s" 
                  begin="2.5s" 
                  fill="freeze" 
                />
              </text>
              
              {/* Output layer */}
              <rect 
                x="30" 
                y="7" 
                width="40" 
                height="10" 
                rx="2" 
                fill="#6D28D9" 
                opacity="0"
                filter="url(#transformerGlow)"
              >
                <animate 
                  attributeName="opacity" 
                  values="0;0.95" 
                  dur="0.8s" 
                  begin="3s" 
                  fill="freeze" 
                />
                <animate 
                  attributeName="fill" 
                  values="#6D28D9;#8B5CF6;#6D28D9" 
                  dur="4s" 
                  begin="3.5s" 
                  repeatCount="indefinite" 
                />
              </rect>
              <text 
                x="50" 
                y="13.5" 
                fill="white" 
                fontSize="4.5" 
                textAnchor="middle" 
                opacity="0"
              >
                Output
                <animate 
                  attributeName="opacity" 
                  values="0;1" 
                  dur="0.8s" 
                  begin="3.2s" 
                  fill="freeze" 
                />
              </text>
              
              <line 
                x1="50" 
                y1="22" 
                x2="50" 
                y2="17" 
                stroke="#6D28D9" 
                strokeWidth="1" 
                strokeDasharray="2 1" 
                opacity="0"
              >
                <animate 
                  attributeName="opacity" 
                  values="0;0.8" 
                  dur="0.3s" 
                  begin="2.9s" 
                  fill="freeze" 
                />
                <animate 
                  attributeName="stroke-dashoffset" 
                  values="10;0" 
                  dur="1s" 
                  begin="2.9s" 
                  repeatCount="indefinite" 
                />
              </line>
              
              {/* Data flow particles */}
              <circle r="1.5" fill="#A78BFA">
                <animate 
                  attributeName="opacity" 
                  values="0;1;0" 
                  dur="2s" 
                  begin="1s" 
                  repeatCount="indefinite" 
                />
                <animateMotion 
                  path="M50,77 L50,67" 
                  dur="1s" 
                  begin="1s" 
                  repeatCount="indefinite" 
                />
              </circle>
              
              <circle r="1.5" fill="#A78BFA">
                <animate 
                  attributeName="opacity" 
                  values="0;1;0" 
                  dur="2s" 
                  begin="1.5s" 
                  repeatCount="indefinite" 
                />
                <animateMotion 
                  path="M50,62 L50,52" 
                  dur="1s" 
                  begin="1.5s" 
                  repeatCount="indefinite" 
                />
              </circle>
              
              <circle r="1.5" fill="#A78BFA">
                <animate 
                  attributeName="opacity" 
                  values="0;1;0" 
                  dur="2s" 
                  begin="2s" 
                  repeatCount="indefinite" 
                />
                <animateMotion 
                  path="M50,47 L50,37" 
                  dur="1s" 
                  begin="2s" 
                  repeatCount="indefinite" 
                />
              </circle>
              
              <circle r="1.5" fill="#A78BFA">
                <animate 
                  attributeName="opacity" 
                  values="0;1;0" 
                  dur="2s" 
                  begin="2.5s" 
                  repeatCount="indefinite" 
                />
                <animateMotion 
                  path="M50,32 L50,17" 
                  dur="1s" 
                  begin="2.5s" 
                  repeatCount="indefinite" 
                />
              </circle>
              
              {/* Residual connection particles */}
              <circle r="1" fill="#A78BFA">
                <animate 
                  attributeName="opacity" 
                  values="0;1;0" 
                  dur="1.5s" 
                  begin="2s" 
                  repeatCount="indefinite" 
                />
                <animateMotion 
                  path="M85,72 Q95,64.5 85,57" 
                  dur="1.5s" 
                  begin="2s" 
                  repeatCount="indefinite" 
                />
              </circle>
              
              <circle r="1" fill="#A78BFA">
                <animate 
                  attributeName="opacity" 
                  values="0;1;0" 
                  dur="1.5s" 
                  begin="3s" 
                  repeatCount="indefinite" 
                />
                <animateMotion 
                  path="M85,57 Q95,49.5 85,42" 
                  dur="1.5s" 
                  begin="3s" 
                  repeatCount="indefinite" 
                />
              </circle>
              
              <circle r="1" fill="#A78BFA">
                <animate 
                  attributeName="opacity" 
                  values="0;1;0" 
                  dur="1.5s" 
                  begin="4s" 
                  repeatCount="indefinite" 
                />
                <animateMotion 
                  path="M85,42 Q95,34.5 85,27" 
                  dur="1.5s" 
                  begin="4s" 
                  repeatCount="indefinite" 
                />
              </circle>
              
              {/* Layer numbering */}
              <circle cx="10" cy="72" r="5" fill="#6D28D9" opacity="0">
                <animate 
                  attributeName="opacity" 
                  values="0;0.7" 
                  dur="0.5s" 
                  begin="1s" 
                  fill="freeze" 
                />
              </circle>
              <text x="10" y="74" fill="white" fontSize="4.5" textAnchor="middle" opacity="0">
                1
                <animate 
                  attributeName="opacity" 
                  values="0;1" 
                  dur="0.5s" 
                  begin="1.1s" 
                  fill="freeze" 
                />
              </text>
              
              <circle cx="10" cy="44.5" r="5" fill="#6D28D9" opacity="0">
                <animate 
                  attributeName="opacity" 
                  values="0;0.7" 
                  dur="0.5s" 
                  begin="2s" 
                  fill="freeze" 
                />
              </circle>
              <text x="10" y="46.5" fill="white" fontSize="4.5" textAnchor="middle" opacity="0">
                2
                <animate 
                  attributeName="opacity" 
                  values="0;1" 
                  dur="0.5s" 
                  begin="2.1s" 
                  fill="freeze" 
                />
              </text>
              
              {/* "Nx" label to indicate there are more layers */}
              <text x="8" y="32" fill="#A78BFA" fontSize="6" opacity="0">
                ⋮
                <animate 
                  attributeName="opacity" 
                  values="0;1" 
                  dur="0.5s" 
                  begin="3s" 
                  fill="freeze" 
                />
              </text>
              <text x="14" y="32" fill="#A78BFA" fontSize="4.5" opacity="0">
                N×
                <animate 
                  attributeName="opacity" 
                  values="0;1" 
                  dur="0.5s" 
                  begin="3s" 
                  fill="freeze" 
                />
              </text>
            </g>
          </svg>
        </motion.div>
      )}

      {/* Tokenization */}
      {!showLLMOnly && (
        <motion.div 
          className="bg-slate-900 rounded-lg p-4 aspect-[4/3] flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="1" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
            <g>
              {/* Title */}
              <text x="20" y="15" fill="#A78BFA" fontSize="6.5" fontWeight="bold">
                Tokenization Process
                <animate 
                  attributeName="opacity" 
                  values="0;1" 
                  dur="1s" 
                  begin="0s" 
                  fill="freeze" 
                />
              </text>
              
              {/* Text */}
              <text x="15" y="30" fill="#8B5CF6" fontSize="7" fontWeight="normal">
                "Hello world!"
                <animate 
                  attributeName="opacity" 
                  values="1;0.7;1" 
                  dur="3s" 
                  begin="0s" 
                  repeatCount="indefinite" 
                />
              </text>
              
              {/* Step Labels */}
              <text x="5" y="47" fill="#A78BFA" fontSize="4" textAnchor="start">
                1. Split into tokens
                <animate 
                  attributeName="opacity" 
                  values="0;1" 
                  dur="1s" 
                  begin="0.5s" 
                  fill="freeze" 
                />
              </text>
              
              <text x="5" y="62" fill="#A78BFA" fontSize="4" textAnchor="start">
                2. Convert to IDs
                <animate 
                  attributeName="opacity" 
                  values="0;1" 
                  dur="1s" 
                  begin="1.5s" 
                  fill="freeze" 
                />
              </text>
              
              <text x="5" y="77" fill="#A78BFA" fontSize="4" textAnchor="start">
                3. Embed vectors
                <animate 
                  attributeName="opacity" 
                  values="0;1" 
                  dur="1s" 
                  begin="2.5s" 
                  fill="freeze" 
                />
              </text>
              
              {/* Token boxes with animation */}
              <rect x="50" y="40" width="18" height="10" rx="2" fill="#A78BFA" opacity="0">
                <animate 
                  attributeName="opacity" 
                  values="0;0.8;0.8" 
                  dur="1s" 
                  begin="1s;tokenLoop.end+6s" 
                  id="token1" 
                  fill="freeze" 
                />
                <animate 
                  attributeName="y" 
                  values="35;40" 
                  dur="0.5s" 
                  begin="1s;tokenLoop.end+6s" 
                  fill="freeze" 
                />
                <animate 
                  attributeName="fill" 
                  values="#A78BFA;#8B5CF6;#A78BFA" 
                  dur="4s" 
                  begin="1.2s;tokenLoop.end+6.2s" 
                  repeatCount="indefinite" 
                />
              </rect>
              <text x="54" y="47" fill="white" fontSize="5" opacity="0">
                Hello
                <animate 
                  attributeName="opacity" 
                  values="0;1" 
                  dur="0.5s" 
                  begin="1.1s;tokenLoop.end+6.1s" 
                  fill="freeze" 
                />
              </text>
              
              <rect x="73" y="40" width="18" height="10" rx="2" fill="#A78BFA" opacity="0">
                <animate 
                  attributeName="opacity" 
                  values="0;0.8;0.8" 
                  dur="1s" 
                  begin="1.2s;tokenLoop.end+6.2s" 
                  fill="freeze" 
                />
                <animate 
                  attributeName="y" 
                  values="35;40" 
                  dur="0.5s" 
                  begin="1.2s;tokenLoop.end+6.2s" 
                  fill="freeze" 
                />
                <animate 
                  attributeName="fill" 
                  values="#A78BFA;#8B5CF6;#A78BFA" 
                  dur="4s" 
                  begin="1.4s;tokenLoop.end+6.4s" 
                  repeatCount="indefinite" 
                />
              </rect>
              <text x="75" y="47" fill="white" fontSize="5" opacity="0">
                world!
                <animate 
                  attributeName="opacity" 
                  values="0;1" 
                  dur="0.5s" 
                  begin="1.3s;tokenLoop.end+6.3s" 
                  fill="freeze" 
                />
              </text>
              
              {/* Token IDs with animation */}
              <rect x="50" y="55" width="18" height="10" rx="2" fill="#6D28D9" opacity="0">
                <animate 
                  attributeName="opacity" 
                  values="0;0.8;0.8" 
                  dur="1s" 
                  begin="2s;tokenLoop.end+7s" 
                  fill="freeze" 
                />
                <animate 
                  attributeName="filter" 
                  values="none;url(#glowFilter);none" 
                  dur="3s" 
                  begin="2.2s;tokenLoop.end+7.2s" 
                  repeatCount="indefinite" 
                />
              </rect>
              <text x="55" y="62" fill="white" fontSize="5" opacity="0">
                101
                <animate 
                  attributeName="opacity" 
                  values="0;1" 
                  dur="0.5s" 
                  begin="2.1s;tokenLoop.end+7.1s" 
                  fill="freeze" 
                />
              </text>
              
              <rect x="73" y="55" width="18" height="10" rx="2" fill="#6D28D9" opacity="0">
                <animate 
                  attributeName="opacity" 
                  values="0;0.8;0.8" 
                  dur="1s" 
                  begin="2.2s;tokenLoop.end+7.2s" 
                  fill="freeze" 
                />
                <animate 
                  attributeName="filter" 
                  values="none;url(#glowFilter);none" 
                  dur="3s" 
                  begin="2.4s;tokenLoop.end+7.4s" 
                  repeatCount="indefinite" 
                />
              </rect>
              <text x="78" y="62" fill="white" fontSize="5" opacity="0">
                203
                <animate 
                  attributeName="opacity" 
                  values="0;1" 
                  dur="0.5s" 
                  begin="2.3s;tokenLoop.end+7.3s" 
                  fill="freeze" 
                />
              </text>
              
              {/* Embedding vectors with animation */}
              <rect x="50" y="70" width="18" height="10" rx="2" fill="#8B5CF6" opacity="0">
                <animate 
                  attributeName="opacity" 
                  values="0;0.8;0.8" 
                  dur="1s" 
                  begin="3s;tokenLoop.end+8s" 
                  fill="freeze" 
                />
                <animate 
                  attributeName="fill" 
                  values="#8B5CF6;#A78BFA;#8B5CF6" 
                  dur="2s" 
                  begin="3.2s;tokenLoop.end+8.2s" 
                  repeatCount="indefinite" 
                />
              </rect>
              <text x="51" y="75" fill="white" fontSize="3.2" opacity="0">
                [0.2,0.8,0.1...]
                <animate 
                  attributeName="opacity" 
                  values="0;1" 
                  dur="0.5s" 
                  begin="3.1s;tokenLoop.end+8.1s" 
                  fill="freeze" 
                />
              </text>
              
              <rect x="73" y="70" width="18" height="10" rx="2" fill="#8B5CF6" opacity="0">
                <animate 
                  attributeName="opacity" 
                  values="0;0.8;0.8" 
                  dur="1s" 
                  begin="3.2s;tokenLoop.end+8.2s" 
                  fill="freeze" 
                />
                <animate 
                  attributeName="fill" 
                  values="#8B5CF6;#A78BFA;#8B5CF6" 
                  dur="2s" 
                  begin="3.4s;tokenLoop.end+8.4s" 
                  repeatCount="indefinite" 
                />
              </rect>
              <text x="74" y="75" fill="white" fontSize="3.2" opacity="0">
                [0.5,0.3,0.7...]
                <animate 
                  attributeName="opacity" 
                  values="0;1" 
                  dur="0.5s" 
                  begin="3.3s;tokenLoop.end+8.3s" 
                  fill="freeze" 
                />
              </text>
              
              {/* Model input arrow */}
              <text x="50" y="88" fill="#A78BFA" fontSize="4.5" textAnchor="middle" opacity="0">
                To Neural Network
                <animate 
                  attributeName="opacity" 
                  values="0;1;0" 
                  dur="5s" 
                  begin="3.8s;tokenLoop.end+8.8s" 
                  fill="freeze" 
                  id="tokenLoop"
                />
              </text>
              
              {/* Animated arrows showing flow */}
              <line x1="35" y1="30" x2="50" y2="35" stroke="#6D28D9" strokeWidth="0.8" opacity="0">
                <animate 
                  attributeName="opacity" 
                  values="0;0.8;0" 
                  dur="1s" 
                  begin="0.8s;tokenLoop.end+5.8s" 
                  fill="freeze" 
                />
                <animate 
                  attributeName="stroke-dashoffset" 
                  from="20" 
                  to="0" 
                  dur="0.8s" 
                  begin="0.8s;tokenLoop.end+5.8s" 
                  fill="freeze" 
                />
                <animate 
                  attributeName="stroke-dasharray" 
                  values="1 2;3 2" 
                  dur="0.8s" 
                  begin="0.8s;tokenLoop.end+5.8s" 
                  fill="freeze" 
                />
              </line>
              
              <line x1="50" y1="30" x2="73" y2="35" stroke="#6D28D9" strokeWidth="0.8" opacity="0">
                <animate 
                  attributeName="opacity" 
                  values="0;0.8;0" 
                  dur="1s" 
                  begin="0.9s;tokenLoop.end+5.9s" 
                  fill="freeze" 
                />
                <animate 
                  attributeName="stroke-dashoffset" 
                  from="20" 
                  to="0" 
                  dur="0.8s" 
                  begin="0.9s;tokenLoop.end+5.9s" 
                  fill="freeze" 
                />
                <animate 
                  attributeName="stroke-dasharray" 
                  values="1 2;3 2" 
                  dur="0.8s" 
                  begin="0.9s;tokenLoop.end+5.9s" 
                  fill="freeze" 
                />
              </line>
              
              {/* Vertical flow arrows */}
              <line x1="59" y1="50" x2="59" y2="55" stroke="#6D28D9" strokeWidth="0.8" opacity="0">
                <animate 
                  attributeName="opacity" 
                  values="0;0.8;0" 
                  dur="1s" 
                  begin="1.7s;tokenLoop.end+6.7s" 
                  fill="freeze" 
                />
                <animate 
                  attributeName="stroke-dashoffset" 
                  from="10" 
                  to="0" 
                  dur="0.8s" 
                  begin="1.7s;tokenLoop.end+6.7s" 
                  fill="freeze" 
                />
                <animate 
                  attributeName="stroke-dasharray" 
                  values="1 2;3 2" 
                  dur="0.8s" 
                  begin="1.7s;tokenLoop.end+6.7s" 
                  fill="freeze" 
                />
              </line>
              
              <line x1="82" y1="50" x2="82" y2="55" stroke="#6D28D9" strokeWidth="0.8" opacity="0">
                <animate 
                  attributeName="opacity" 
                  values="0;0.8;0" 
                  dur="1s" 
                  begin="1.9s;tokenLoop.end+6.9s" 
                  fill="freeze" 
                />
                <animate 
                  attributeName="stroke-dashoffset" 
                  from="10" 
                  to="0" 
                  dur="0.8s" 
                  begin="1.9s;tokenLoop.end+6.9s" 
                  fill="freeze" 
                />
                <animate 
                  attributeName="stroke-dasharray" 
                  values="1 2;3 2" 
                  dur="0.8s" 
                  begin="1.9s;tokenLoop.end+6.9s" 
                  fill="freeze" 
                />
              </line>
              
              <line x1="59" y1="65" x2="59" y2="70" stroke="#6D28D9" strokeWidth="0.8" opacity="0">
                <animate 
                  attributeName="opacity" 
                  values="0;0.8;0" 
                  dur="1s" 
                  begin="2.7s;tokenLoop.end+7.7s" 
                  fill="freeze" 
                />
                <animate 
                  attributeName="stroke-dashoffset" 
                  from="10" 
                  to="0" 
                  dur="0.8s" 
                  begin="2.7s;tokenLoop.end+7.7s" 
                  fill="freeze" 
                />
                <animate 
                  attributeName="stroke-dasharray" 
                  values="1 2;3 2" 
                  dur="0.8s" 
                  begin="2.7s;tokenLoop.end+7.7s" 
                  fill="freeze" 
                />
              </line>
              
              <line x1="82" y1="65" x2="82" y2="70" stroke="#6D28D9" strokeWidth="0.8" opacity="0">
                <animate 
                  attributeName="opacity" 
                  values="0;0.8;0" 
                  dur="1s" 
                  begin="2.9s;tokenLoop.end+7.9s" 
                  fill="freeze" 
                />
                <animate 
                  attributeName="stroke-dashoffset" 
                  from="10" 
                  to="0" 
                  dur="0.8s" 
                  begin="2.9s;tokenLoop.end+7.9s" 
                  fill="freeze" 
                />
                <animate 
                  attributeName="stroke-dasharray" 
                  values="1 2;3 2" 
                  dur="0.8s" 
                  begin="2.9s;tokenLoop.end+7.9s" 
                  fill="freeze" 
                />
              </line>
              
              {/* Animated data flow markers */}
              <circle r="1.2" fill="#A78BFA">
                <animate 
                  attributeName="opacity" 
                  values="0;1;0" 
                  dur="1.5s" 
                  begin="0.8s;tokenLoop.end+5.8s" 
                  fill="freeze" 
                />
                <animateMotion 
                  path="M35,30 L50,35" 
                  dur="0.8s" 
                  begin="0.8s;tokenLoop.end+5.8s" 
                  fill="freeze" 
                />
              </circle>
              
              <circle r="1.2" fill="#A78BFA">
                <animate 
                  attributeName="opacity" 
                  values="0;1;0" 
                  dur="1.5s" 
                  begin="0.9s;tokenLoop.end+5.9s" 
                  fill="freeze" 
                />
                <animateMotion 
                  path="M50,30 L73,35" 
                  dur="0.8s" 
                  begin="0.9s;tokenLoop.end+5.9s" 
                  fill="freeze" 
                />
              </circle>
              
              <circle r="1.2" fill="#A78BFA">
                <animate 
                  attributeName="opacity" 
                  values="0;1;0" 
                  dur="1.5s" 
                  begin="1.7s;tokenLoop.end+6.7s" 
                  fill="freeze" 
                />
                <animateMotion 
                  path="M59,50 L59,55" 
                  dur="0.5s" 
                  begin="1.7s;tokenLoop.end+6.7s" 
                  fill="freeze" 
                />
              </circle>
              
              <circle r="1.2" fill="#A78BFA">
                <animate 
                  attributeName="opacity" 
                  values="0;1;0" 
                  dur="1.5s" 
                  begin="1.9s;tokenLoop.end+6.9s" 
                  fill="freeze" 
                />
                <animateMotion 
                  path="M82,50 L82,55" 
                  dur="0.5s" 
                  begin="1.9s;tokenLoop.end+6.9s" 
                  fill="freeze" 
                />
              </circle>
              
              <circle r="1.2" fill="#A78BFA">
                <animate 
                  attributeName="opacity" 
                  values="0;1;0" 
                  dur="1.5s" 
                  begin="2.7s;tokenLoop.end+7.7s" 
                  fill="freeze" 
                />
                <animateMotion 
                  path="M59,65 L59,70" 
                  dur="0.5s" 
                  begin="2.7s;tokenLoop.end+7.7s" 
                  fill="freeze" 
                />
              </circle>
              
              <circle r="1.2" fill="#A78BFA">
                <animate 
                  attributeName="opacity" 
                  values="0;1;0" 
                  dur="1.5s" 
                  begin="2.9s;tokenLoop.end+7.9s" 
                  fill="freeze" 
                />
                <animateMotion 
                  path="M82,65 L82,70" 
                  dur="0.5s" 
                  begin="2.9s;tokenLoop.end+7.9s" 
                  fill="freeze" 
                />
              </circle>
              
              {/* Final arrows to neural network */}
              <line x1="59" y1="80" x2="59" y2="83" stroke="#6D28D9" strokeWidth="0.8" opacity="0">
                <animate 
                  attributeName="opacity" 
                  values="0;0.8;0" 
                  dur="1s" 
                  begin="3.6s;tokenLoop.end+8.6s" 
                  fill="freeze" 
                />
              </line>
              
              <line x1="82" y1="80" x2="82" y2="83" stroke="#6D28D9" strokeWidth="0.8" opacity="0">
                <animate 
                  attributeName="opacity" 
                  values="0;0.8;0" 
                  dur="1s" 
                  begin="3.7s;tokenLoop.end+8.7s" 
                  fill="freeze" 
                />
              </line>
            </g>
          </svg>
        </motion.div>
      )}

      {/* Activation Function */}
      {!showLLMOnly && (
        <div 
          className="bg-slate-900 rounded-lg p-4 aspect-[4/3] flex items-center justify-center"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              {/* Glowing effect for the function line */}
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
              
              {/* Gradient for the function line */}
              <linearGradient id="reluGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#6D28D9" />
                <animate 
                  attributeName="x1" 
                  values="0%;20%;0%" 
                  dur="8s" 
                  repeatCount="indefinite" 
                />
                <animate 
                  attributeName="x2" 
                  values="100%;80%;100%" 
                  dur="8s" 
                  repeatCount="indefinite" 
                />
              </linearGradient>
              
              {/* Gradient for the grid */}
              <linearGradient id="gridGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            
            <g>
              {/* Title with subtle fade-in */}
              <text 
                x="32" y="15" 
                fill="#A78BFA" 
                fontSize="7" 
                fontWeight="bold" 
                textAnchor="middle"
              >
                ReLU
                <animate 
                  attributeName="opacity" 
                  from="0" 
                  to="1" 
                  dur="1s" 
                  begin="0s" 
                  fill="freeze" 
                />
              </text>
              
              {/* Subtle grid in background */}
              <g opacity="0.2">
                {/* Vertical grid lines */}
                {[...Array(9)].map((_, i) => (
                  <line 
                    key={`vgrid-${i}`}
                    x1={15 + i * 8} 
                    y1="20" 
                    x2={15 + i * 8} 
                    y2="80" 
                    stroke="url(#gridGradient)" 
                    strokeWidth="0.3"
                  >
                    <animate 
                      attributeName="opacity" 
                      from="0" 
                      to="0.5" 
                      dur="2s" 
                      begin={`${0.1 + i * 0.1}s`} 
                      fill="freeze" 
                    />
                  </line>
                ))}
                
                {/* Horizontal grid lines */}
                {[...Array(7)].map((_, i) => (
                  <line 
                    key={`hgrid-${i}`}
                    x1="15" 
                    y1={30 + i * 8} 
                    x2="80" 
                    y2={30 + i * 8} 
                    stroke="url(#gridGradient)" 
                    strokeWidth="0.3"
                  >
                    <animate 
                      attributeName="opacity" 
                      from="0" 
                      to="0.5" 
                      dur="2s" 
                      begin={`${0.1 + i * 0.1}s`} 
                      fill="freeze" 
                    />
                  </line>
                ))}
              </g>
              
              {/* Axes */}
              <line 
                x1="15" y1="20" 
                x2="15" y2="80" 
                stroke="#A78BFA" 
                strokeWidth="0.8"
              >
                <animate 
                  attributeName="y2" 
                  from="20" 
                  to="80" 
                  dur="1.5s" 
                  begin="0.5s" 
                  fill="freeze" 
                />
              </line>
              <line 
                x1="15" y1="50" 
                x2="80" y2="50" 
                stroke="#A78BFA" 
                strokeWidth="0.8"
              >
                <animate 
                  attributeName="x2" 
                  from="15" 
                  to="80" 
                  dur="1.5s" 
                  begin="0.8s" 
                  fill="freeze" 
                />
              </line>
              
              {/* Axis labels */}
              <text 
                x="13" y="20" 
                fill="#A78BFA" 
                fontSize="4" 
                textAnchor="end"
              >
                y
                <animate 
                  attributeName="opacity" 
                  from="0" 
                  to="1" 
                  dur="1s" 
                  begin="1.3s" 
                  fill="freeze" 
                />
              </text>
              <text 
                x="80" y="53" 
                fill="#A78BFA" 
                fontSize="4"
              >
                x
                <animate 
                  attributeName="opacity" 
                  from="0" 
                  to="1" 
                  dur="1s" 
                  begin="1.3s" 
                  fill="freeze" 
                />
              </text>
              
              {/* Origin label */}
              <text 
                x="13" y="53" 
                fill="#A78BFA" 
                fontSize="4" 
                textAnchor="end"
              >
                0
                <animate 
                  attributeName="opacity" 
                  from="0" 
                  to="1" 
                  dur="1s" 
                  begin="1.5s" 
                  fill="freeze" 
                />
              </text>
              
              {/* The ReLU function line with gradient and glow */}
              <polyline 
                points="15,50 15,50" 
                stroke="url(#reluGradient)" 
                strokeWidth="2" 
                strokeLinejoin="round" 
                strokeLinecap="round"
                fill="none"
                filter="url(#glow)"
              >
                <animate 
                  attributeName="points" 
                  values="15,50 15,50; 15,50 50,50; 15,50 50,50 80,20" 
                  dur="3s" 
                  begin="2s" 
                  fill="freeze" 
                />
              </polyline>
              
              {/* Small circles representing input data points */}
              <circle 
                cx="30" 
                cy="50" 
                r="0" 
                fill="#8B5CF6"
              >
                <animate 
                  attributeName="r" 
                  from="0" 
                  to="1.5" 
                  dur="0.5s" 
                  begin="3.2s" 
                  fill="freeze" 
                />
                <animate 
                  attributeName="opacity" 
                  values="0;1;0.8;1" 
                  dur="3s" 
                  begin="3.5s" 
                  repeatCount="indefinite" 
                />
              </circle>
              
              <circle 
                cx="40" 
                cy="50" 
                r="0" 
                fill="#8B5CF6"
              >
                <animate 
                  attributeName="r" 
                  from="0" 
                  to="1.5" 
                  dur="0.5s" 
                  begin="3.4s" 
                  fill="freeze" 
                />
                <animate 
                  attributeName="opacity" 
                  values="0;1;0.8;1" 
                  dur="3s" 
                  begin="3.7s" 
                  repeatCount="indefinite" 
                />
              </circle>
              
              <circle 
                cx="60" 
                cy="36" 
                r="0" 
                fill="#8B5CF6"
              >
                <animate 
                  attributeName="r" 
                  from="0" 
                  to="1.5" 
                  dur="0.5s" 
                  begin="3.6s" 
                  fill="freeze" 
                />
                <animate 
                  attributeName="opacity" 
                  values="0;1;0.8;1" 
                  dur="3s" 
                  begin="3.9s" 
                  repeatCount="indefinite" 
                />
              </circle>
              
              <circle 
                cx="75" 
                cy="24" 
                r="0" 
                fill="#8B5CF6"
              >
                <animate 
                  attributeName="r" 
                  from="0" 
                  to="1.5" 
                  dur="0.5s" 
                  begin="3.8s" 
                  fill="freeze" 
                />
                <animate 
                  attributeName="opacity" 
                  values="0;1;0.8;1" 
                  dur="3s" 
                  begin="4.1s" 
                  repeatCount="indefinite" 
                />
              </circle>
              
              {/* Animation showing how ReLU transforms values */}
              <g>
                {/* Animated input point and its output */}
                <circle 
                  cx="25" 
                  cy="65" 
                  r="2" 
                  fill="#6D28D9"
                  opacity="0"
                >
                  <animate 
                    id="inputPoint1" 
                    attributeName="opacity" 
                    values="0;1" 
                    dur="0.5s" 
                    begin="5s" 
                    fill="freeze" 
                  />
                  <animate 
                    attributeName="cy" 
                    values="65;65;50" 
                    dur="4s" 
                    begin="inputPoint1.end" 
                    fill="freeze" 
                  />
                  <animate 
                    attributeName="cx" 
                    values="25;25;65" 
                    dur="4s" 
                    begin="inputPoint1.end" 
                    fill="freeze" 
                  />
                </circle>
                
                {/* Dotted reference lines */}
                <line 
                  x1="25" 
                  y1="65" 
                  x2="25" 
                  y2="50" 
                  stroke="#6D28D9" 
                  strokeWidth="0.5" 
                  strokeDasharray="1" 
                  opacity="0"
                >
                  <animate 
                    attributeName="opacity" 
                    values="0;0.6" 
                    dur="0.5s" 
                    begin="5.2s" 
                    fill="freeze" 
                  />
                  <animate 
                    attributeName="opacity" 
                    values="0.6;0" 
                    dur="0.5s" 
                    begin="7s" 
                    fill="freeze" 
                  />
                </line>
                
                <line 
                  x1="15" 
                  y1="65" 
                  x2="25" 
                  y2="65" 
                  stroke="#6D28D9" 
                  strokeWidth="0.5" 
                  strokeDasharray="1" 
                  opacity="0"
                >
                  <animate 
                    attributeName="opacity" 
                    values="0;0.6" 
                    dur="0.5s" 
                    begin="5.2s" 
                    fill="freeze" 
                  />
                  <animate 
                    attributeName="opacity" 
                    values="0.6;0" 
                    dur="0.5s" 
                    begin="7s" 
                    fill="freeze" 
                  />
                </line>
                
                {/* Output value indication */}
                <text 
                  x="28" 
                  y="65" 
                  fill="#A78BFA" 
                  fontSize="4" 
                  opacity="0"
                >
                  ReLU(x) = 0
                  <animate 
                    attributeName="opacity" 
                    values="0;1" 
                    dur="0.5s" 
                    begin="5.3s" 
                    fill="freeze" 
                  />
                  <animate 
                    attributeName="opacity" 
                    values="1;0" 
                    dur="0.5s" 
                    begin="7s" 
                    fill="freeze" 
                  />
                </text>
                
                {/* Another input point and transformation */}
                <circle 
                  cx="65" 
                  cy="35" 
                  r="2" 
                  fill="#6D28D9"
                  opacity="0"
                >
                  <animate 
                    id="inputPoint2" 
                    attributeName="opacity" 
                    values="0;1" 
                    dur="0.5s" 
                    begin="9s" 
                    fill="freeze" 
                  />
                  <animate 
                    attributeName="cy" 
                    values="35;35" 
                    dur="4s" 
                    begin="inputPoint2.end" 
                    fill="freeze" 
                  />
                </circle>
                
                {/* Second point's reference lines */}
                <line 
                  x1="65" 
                  y1="35" 
                  x2="65" 
                  y2="50" 
                  stroke="#6D28D9" 
                  strokeWidth="0.5" 
                  strokeDasharray="1" 
                  opacity="0"
                >
                  <animate 
                    attributeName="opacity" 
                    values="0;0.6" 
                    dur="0.5s" 
                    begin="9.2s" 
                    fill="freeze" 
                  />
                  <animate 
                    attributeName="opacity" 
                    values="0.6;0" 
                    dur="0.5s" 
                    begin="11s" 
                    fill="freeze" 
                  />
                </line>
                
                <line 
                  x1="15" 
                  y1="35" 
                  x2="65" 
                  y2="35" 
                  stroke="#6D28D9" 
                  strokeWidth="0.5" 
                  strokeDasharray="1" 
                  opacity="0"
                >
                  <animate 
                    attributeName="opacity" 
                    values="0;0.6" 
                    dur="0.5s" 
                    begin="9.2s" 
                    fill="freeze" 
                  />
                  <animate 
                    attributeName="opacity" 
                    values="0.6;0" 
                    dur="0.5s" 
                    begin="11s" 
                    fill="freeze" 
                  />
                </line>
                
                {/* Second output value */}
                <text 
                  x="68" 
                  y="35" 
                  fill="#A78BFA" 
                  fontSize="4" 
                  opacity="0"
                >
                  ReLU(x) = x
                  <animate 
                    attributeName="opacity" 
                    values="0;1" 
                    dur="0.5s" 
                    begin="9.3s" 
                    fill="freeze" 
                  />
                  <animate 
                    attributeName="opacity" 
                    values="1;0" 
                    dur="0.5s" 
                    begin="11s" 
                    fill="freeze" 
                  />
                </text>
                
                {/* Formula for ReLU */}
                <text 
                  x="50" 
                  y="75" 
                  fill="#A78BFA" 
                  fontSize="5" 
                  textAnchor="middle" 
                  opacity="0"
                >
                  ReLU(x) = max(0, x)
                  <animate 
                    attributeName="opacity" 
                    values="0;1" 
                    dur="1s" 
                    begin="12s" 
                    fill="freeze" 
                  />
                </text>
                
                {/* Pulsing effect near the bend point */}
                <circle 
                  cx="50" 
                  cy="50" 
                  r="2" 
                  fill="none" 
                  stroke="#8B5CF6" 
                  strokeWidth="0.5" 
                  opacity="0"
                >
                  <animate 
                    attributeName="opacity" 
                    values="0;0.8;0" 
                    dur="3s" 
                    begin="13s" 
                    repeatCount="indefinite" 
                  />
                  <animate 
                    attributeName="r" 
                    values="2;4;2" 
                    dur="3s" 
                    begin="13s" 
                    repeatCount="indefinite" 
                  />
                </circle>
              </g>
            </g>
          </svg>
        </div>
      )}

      {/* LLM Generation Flow */}
      {!showLLMOnly && (
        <div 
          className="bg-slate-900 rounded-lg p-4 aspect-[4/3] flex items-center justify-center"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <g>
              {/* Input text */}
              <rect 
                x="10" y="20" width="80" height="12" rx="2" fill="#6D28D9" opacity="0.7"
              >
                <animate
                  attributeName="opacity"
                  values="0;0.7"
                  dur="0.5s"
                  begin="0.4s"
                  fill="freeze"
                />
              </rect>
              <text 
                x="15" y="28" fill="white" fontSize="6"
              >
                What is an LLM?
                <animate
                  attributeName="opacity"
                  values="0;1"
                  dur="0.5s"
                  begin="0.5s"
                  fill="freeze"
                />
              </text>
              
              {/* Model processing - pulsing animation */}
              <rect 
                x="25" y="40" width="50" height="20" rx="3" fill="#8B5CF6"
              >
                <animate
                  attributeName="opacity"
                  values="0;1;0.8;1"
                  dur="2s"
                  begin="0.6s"
                  repeatCount="indefinite"
                />
              </rect>
              <text 
                x="33" y="54" fill="white" fontSize="7"
              >
                LLM
                <animate
                  attributeName="opacity"
                  values="0;1"
                  dur="0.5s"
                  begin="0.7s"
                  fill="freeze"
                />
              </text>
              
              {/* Output tokens - appear sequentially and repeat */}
              <rect 
                x="10" y="70" width="20" height="10" rx="2" fill="#A78BFA" opacity="0.7"
              >
                <animate
                  attributeName="opacity"
                  values="0;0.7"
                  dur="0.5s"
                  begin="0.8s;token1.end+5s"
                  id="token1"
                />
                <animate
                  attributeName="y"
                  values="75;70"
                  dur="0.5s"
                  begin="0.8s;token1.end+5s"
                />
              </rect>
              <text 
                x="13" y="77" fill="white" fontSize="5"
              >
                A
                <animate
                  attributeName="opacity"
                  values="0;1"
                  dur="0.5s"
                  begin="0.9s;token1.end+5s"
                />
              </text>
              
              <rect 
                x="35" y="70" width="20" height="10" rx="2" fill="#A78BFA" opacity="0.7"
              >
                <animate
                  attributeName="opacity"
                  values="0;0.7"
                  dur="0.5s"
                  begin="1.0s;token2.end+4.8s"
                  id="token2"
                />
                <animate
                  attributeName="y"
                  values="75;70"
                  dur="0.5s"
                  begin="1.0s;token2.end+4.8s"
                />
              </rect>
              <text 
                x="38" y="77" fill="white" fontSize="5"
              >
                Large
                <animate
                  attributeName="opacity"
                  values="0;1"
                  dur="0.5s"
                  begin="1.1s;token2.end+4.8s"
                />
              </text>
            
              <rect 
                x="60" y="70" width="30" height="10" rx="2" fill="#A78BFA" opacity="0.7"
              >
                <animate
                  attributeName="opacity"
                  values="0;0.7"
                  dur="0.5s"
                  begin="1.2s;token3.end+4.6s"
                  id="token3"
                />
                <animate
                  attributeName="y"
                  values="75;70"
                  dur="0.5s"
                  begin="1.2s;token3.end+4.6s"
                />
              </rect>
              <text 
                x="63" y="77" fill="white" fontSize="5"
              >
                Language
                <animate
                  attributeName="opacity"
                  values="0;1"
                  dur="0.5s"
                  begin="1.3s;token3.end+4.6s"
                />
              </text>
              
              {/* Arrows with infinite animation */}
              <line 
                x1="50" y1="32" x2="50" y2="40" stroke="#6D28D9" strokeWidth="1"
              >
                <animate
                  attributeName="opacity"
                  values="0;1"
                  dur="0.5s"
                  begin="1.4s;arrow1.end+4.4s"
                  id="arrow1"
                />
                <animate
                  attributeName="stroke-dashoffset"
                  from="10"
                  to="0"
                  dur="0.5s"
                  begin="1.4s;arrow1.end+4.4s"
                />
                <animate
                  attributeName="stroke-dasharray"
                  values="0 10;10 0"
                  dur="0.5s"
                  begin="1.4s;arrow1.end+4.4s"
                />
              </line>
              
              <line 
                x1="50" y1="60" x2="50" y2="65" stroke="#6D28D9" strokeWidth="1"
              >
                <animate
                  attributeName="opacity"
                  values="0;1"
                  dur="0.5s"
                  begin="1.7s;arrow2.end+4.1s"
                  id="arrow2"
                />
                <animate
                  attributeName="stroke-dashoffset"
                  from="10"
                  to="0"
                  dur="0.5s"
                  begin="1.7s;arrow2.end+4.1s"
                />
                <animate
                  attributeName="stroke-dasharray"
                  values="0 10;10 0"
                  dur="0.5s"
                  begin="1.7s;arrow2.end+4.1s"
                />
              </line>
              
              {/* Branch arrows to tokens */}
              <line 
                x1="50" y1="65" x2="20" y2="70" stroke="#6D28D9" strokeWidth="0.5"
              >
                <animate
                  attributeName="opacity"
                  values="0;0.6"
                  dur="0.3s"
                  begin="1.8s;branch1.end+4s"
                  id="branch1"
                />
                <animate
                  attributeName="stroke-dashoffset"
                  from="40"
                  to="0"
                  dur="0.3s"
                  begin="1.8s;branch1.end+4s"
                />
                <animate
                  attributeName="stroke-dasharray"
                  values="0 40;40 0"
                  dur="0.3s"
                  begin="1.8s;branch1.end+4s"
                />
              </line>
              <line 
                x1="50" y1="65" x2="45" y2="70" stroke="#6D28D9" strokeWidth="0.5"
              >
                <animate
                  attributeName="opacity"
                  values="0;0.6"
                  dur="0.3s"
                  begin="2.1s;branch2.end+3.7s"
                  id="branch2"
                />
                <animate
                  attributeName="stroke-dashoffset"
                  from="10"
                  to="0"
                  dur="0.3s"
                  begin="2.1s;branch2.end+3.7s"
                />
                <animate
                  attributeName="stroke-dasharray"
                  values="0 10;10 0"
                  dur="0.3s"
                  begin="2.1s;branch2.end+3.7s"
                />
              </line>
              <line 
                x1="50" y1="65" x2="75" y2="70" stroke="#6D28D9" strokeWidth="0.5"
              >
                <animate
                  attributeName="opacity"
                  values="0;0.6"
                  dur="0.3s"
                  begin="2.4s;branch3.end+3.4s"
                  id="branch3"
                />
                <animate
                  attributeName="stroke-dashoffset"
                  from="30"
                  to="0"
                  dur="0.3s"
                  begin="2.4s;branch3.end+3.4s"
                />
                <animate
                  attributeName="stroke-dasharray"
                  values="0 30;30 0"
                  dur="0.3s"
                  begin="2.4s;branch3.end+3.4s"
                />
              </line>
              
              {/* Data flow animation */}
              <circle r="1.5" fill="#A78BFA">
                <animate 
                  attributeName="opacity" 
                  values="0;1;0" 
                  dur="2s" 
                  begin="2.5s;flow1.end+3s"
                  repeatCount="indefinite"
                  id="flow1"
                />
                <animateMotion 
                  path="M50,40 L50,65" 
                  dur="1s" 
                  begin="2.5s;flow1.end+3s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          </svg>
        </div>
      )}

      {/* LLM-only expanded view for chapter 4 */}
      {showLLMOnly && (
        <div className="max-w-2xl mx-auto bg-slate-900 rounded-lg p-6 aspect-[4/3] flex items-center justify-center">
          <svg viewBox="0 0 160 90" className="w-full h-full">
            <g>
              {/* Title */}
              <text 
                x="35" y="10" fill="#A78BFA" fontSize="6" fontWeight="bold"
              >
                Large Language Model - Generation Process
                <animate
                  attributeName="opacity"
                  values="0;1"
                  dur="0.8s"
                  begin="0s"
                  fill="freeze"
                />
              </text>
              
              {/* Input prompt */}
              <rect 
                x="10" y="20" width="140" height="12" rx="2" fill="#6D28D9" opacity="0.8"
              >
                <animate
                  attributeName="opacity"
                  values="0;0.8"
                  dur="0.5s"
                  begin="0.3s"
                  fill="freeze"
                />
              </rect>
              <text 
                x="15" y="28" fill="white" fontSize="5.5"
              >
                Prompt: "Explain how large language models work in simple terms."
                <animate
                  attributeName="opacity"
                  values="0;1"
                  dur="0.5s"
                  begin="0.5s"
                  fill="freeze"
                />
              </text>
              
              {/* Tokenization stage */}
              <rect 
                x="20" y="38" width="120" height="10" rx="2" fill="#8B5CF6" opacity="0.8"
              >
                <animate
                  attributeName="opacity"
                  values="0;0.8"
                  dur="0.5s"
                  begin="0.8s"
                  fill="freeze"
                />
              </rect>
              <text 
                x="55" y="44" fill="white" fontSize="5"
              >
                Tokenization
                <animate
                  attributeName="opacity"
                  values="0;1"
                  dur="0.5s"
                  begin="1s"
                  fill="freeze"
                />
              </text>
              
              {/* Tokens */}
              <g>
                {/* Token boxes with repeating animations */}
                <rect x="15" y="52" width="14" height="8" rx="1" fill="#A78BFA" opacity="0.7">
                  <animate
                    attributeName="opacity"
                    values="0;0.7;0.7;0"
                    dur="10s"
                    begin="1.3s"
                    repeatCount="indefinite"
                  />
                </rect>
                <rect x="32" y="52" width="14" height="8" rx="1" fill="#A78BFA" opacity="0.7">
                  <animate
                    attributeName="opacity"
                    values="0;0.7;0.7;0"
                    dur="10s"
                    begin="1.4s"
                    repeatCount="indefinite"
                  />
                </rect>
                <rect x="49" y="52" width="14" height="8" rx="1" fill="#A78BFA" opacity="0.7">
                  <animate
                    attributeName="opacity"
                    values="0;0.7;0.7;0"
                    dur="10s"
                    begin="1.5s"
                    repeatCount="indefinite"
                  />
                </rect>
                <rect x="66" y="52" width="14" height="8" rx="1" fill="#A78BFA" opacity="0.7">
                  <animate
                    attributeName="opacity"
                    values="0;0.7;0.7;0"
                    dur="10s"
                    begin="1.6s"
                    repeatCount="indefinite"
                  />
                </rect>
                <rect x="83" y="52" width="14" height="8" rx="1" fill="#A78BFA" opacity="0.7">
                  <animate
                    attributeName="opacity"
                    values="0;0.7;0.7;0"
                    dur="10s"
                    begin="1.7s"
                    repeatCount="indefinite"
                  />
                </rect>
                <rect x="100" y="52" width="14" height="8" rx="1" fill="#A78BFA" opacity="0.7">
                  <animate
                    attributeName="opacity"
                    values="0;0.7;0.7;0"
                    dur="10s"
                    begin="1.8s"
                    repeatCount="indefinite"
                  />
                </rect>
                <rect x="117" y="52" width="14" height="8" rx="1" fill="#A78BFA" opacity="0.7">
                  <animate
                    attributeName="opacity"
                    values="0;0.7;0.7;0"
                    dur="10s"
                    begin="1.9s"
                    repeatCount="indefinite"
                  />
                </rect>
                
                {/* Token text */}
                <text x="18" y="57" fill="white" fontSize="3">
                  Explain
                  <animate
                    attributeName="opacity"
                    values="0;1;1;0"
                    dur="10s"
                    begin="1.35s"
                    repeatCount="indefinite"
                  />
                </text>
                <text x="35" y="57" fill="white" fontSize="3">
                  how
                  <animate
                    attributeName="opacity"
                    values="0;1;1;0"
                    dur="10s"
                    begin="1.45s"
                    repeatCount="indefinite"
                  />
                </text>
                <text x="52" y="57" fill="white" fontSize="3">
                  large
                  <animate
                    attributeName="opacity"
                    values="0;1;1;0"
                    dur="10s"
                    begin="1.55s"
                    repeatCount="indefinite"
                  />
                </text>
                <text x="69" y="57" fill="white" fontSize="3">
                  language
                  <animate
                    attributeName="opacity"
                    values="0;1;1;0"
                    dur="10s"
                    begin="1.65s"
                    repeatCount="indefinite"
                  />
                </text>
                <text x="86" y="57" fill="white" fontSize="3">
                  models
                  <animate
                    attributeName="opacity"
                    values="0;1;1;0"
                    dur="10s"
                    begin="1.75s"
                    repeatCount="indefinite"
                  />
                </text>
                <text x="103" y="57" fill="white" fontSize="3">
                  work
                  <animate
                    attributeName="opacity"
                    values="0;1;1;0"
                    dur="10s"
                    begin="1.85s"
                    repeatCount="indefinite"
                  />
                </text>
                <text x="120" y="57" fill="white" fontSize="3">
                  simply
                  <animate
                    attributeName="opacity"
                    values="0;1;1;0"
                    dur="10s"
                    begin="1.95s"
                    repeatCount="indefinite"
                  />
                </text>
              </g>
              
              {/* Model processing */}
              <rect 
                x="20" y="65" width="120" height="12" rx="2" fill="#6D28D9" opacity="0.8"
              >
                <animate
                  attributeName="opacity"
                  values="0;0.8"
                  dur="0.5s"
                  begin="2.2s"
                  fill="freeze"
                />
                <animate
                  attributeName="fill-opacity"
                  values="0.8;1;0.8"
                  dur="3s"
                  begin="2.5s"
                  repeatCount="indefinite"
                />
              </rect>
              <text 
                x="40" y="73" fill="white" fontSize="5.5"
              >
                Neural Network Processing
                <animate
                  attributeName="opacity"
                  values="0;1"
                  dur="0.5s"
                  begin="2.4s"
                  fill="freeze"
                />
              </text>
              
              {/* Data flow circles moving through the model */}
              <circle r="1.5" fill="#A78BFA">
                <animate 
                  attributeName="opacity" 
                  values="0;1;0" 
                  dur="3s" 
                  begin="3s"
                  repeatCount="indefinite"
                />
                <animateMotion 
                  path="M20,49 L20,65" 
                  dur="1s" 
                  begin="3s"
                  repeatCount="indefinite"
                />
              </circle>
              
              <circle r="1.5" fill="#A78BFA">
                <animate 
                  attributeName="opacity" 
                  values="0;1;0" 
                  dur="3s" 
                  begin="3.2s"
                  repeatCount="indefinite"
                />
                <animateMotion 
                  path="M40,49 L40,65" 
                  dur="1s" 
                  begin="3.2s"
                  repeatCount="indefinite"
                />
              </circle>
              
              <circle r="1.5" fill="#A78BFA">
                <animate 
                  attributeName="opacity" 
                  values="0;1;0" 
                  dur="3s" 
                  begin="3.4s"
                  repeatCount="indefinite"
                />
                <animateMotion 
                  path="M60,49 L60,65" 
                  dur="1s" 
                  begin="3.4s"
                  repeatCount="indefinite"
                />
              </circle>
              
              <circle r="1.5" fill="#A78BFA">
                <animate 
                  attributeName="opacity" 
                  values="0;1;0" 
                  dur="3s" 
                  begin="3.6s"
                  repeatCount="indefinite"
                />
                <animateMotion 
                  path="M100,49 L100,65" 
                  dur="1s" 
                  begin="3.6s"
                  repeatCount="indefinite"
                />
              </circle>
              
              {/* Generated tokens */}
              <g>
                <rect x="25" y="81" width="20" height="8" rx="1" fill="#8B5CF6" opacity="0">
                  <animate
                    attributeName="opacity"
                    values="0;0.8;0.8"
                    dur="1s"
                    begin="4s"
                    fill="freeze"
                  />
                  <animate
                    attributeName="y"
                    values="85;81"
                    dur="0.5s"
                    begin="4s"
                    fill="freeze"
                  />
                </rect>
                <text x="29" y="86" fill="white" fontSize="4" opacity="0">
                  LLMs
                  <animate
                    attributeName="opacity"
                    values="0;1"
                    dur="0.5s"
                    begin="4.2s"
                    fill="freeze"
                  />
                </text>
                
                <rect x="50" y="81" width="20" height="8" rx="1" fill="#8B5CF6" opacity="0">
                  <animate
                    attributeName="opacity"
                    values="0;0.8;0.8"
                    dur="1s"
                    begin="5s"
                    fill="freeze"
                  />
                  <animate
                    attributeName="y"
                    values="85;81"
                    dur="0.5s"
                    begin="5s"
                    fill="freeze"
                  />
                </rect>
                <text x="54" y="86" fill="white" fontSize="4" opacity="0">
                  are
                  <animate
                    attributeName="opacity"
                    values="0;1"
                    dur="0.5s"
                    begin="5.2s"
                    fill="freeze"
                  />
                </text>
                
                <rect x="75" y="81" width="50" height="8" rx="1" fill="#8B5CF6" opacity="0">
                  <animate
                    attributeName="opacity"
                    values="0;0.8;0.8"
                    dur="1s"
                    begin="6s"
                    fill="freeze"
                  />
                  <animate
                    attributeName="y"
                    values="85;81"
                    dur="0.5s"
                    begin="6s"
                    fill="freeze"
                  />
                </rect>
                <text x="80" y="86" fill="white" fontSize="4" opacity="0">
                  neural networks
                  <animate
                    attributeName="opacity"
                    values="0;1"
                    dur="0.5s"
                    begin="6.2s"
                    fill="freeze"
                  />
                </text>
                
                {/* More tokens appear and fade - continuous generation effect */}
                <rect x="130" y="81" width="20" height="8" rx="1" fill="#8B5CF6" opacity="0">
                  <animate
                    attributeName="opacity"
                    values="0;0.8;0.8;0"
                    dur="5s"
                    begin="7s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="x"
                    values="130;130;150"
                    dur="5s"
                    begin="7s"
                    repeatCount="indefinite"
                  />
                </rect>
                <text x="134" y="86" fill="white" fontSize="4" opacity="0">
                  that
                  <animate
                    attributeName="opacity"
                    values="0;1;1;0"
                    dur="5s"
                    begin="7.2s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="x"
                    values="134;134;154"
                    dur="5s"
                    begin="7.2s"
                    repeatCount="indefinite"
                  />
                </text>
              </g>
              
              {/* Data flow from model to output */}
              <line 
                x1="80" y1="77" x2="80" y2="81" stroke="#6D28D9" strokeWidth="1"
              >
                <animate
                  attributeName="opacity"
                  values="0;1;1;1;0"
                  dur="8s"
                  begin="3.8s"
                  repeatCount="indefinite"
                />
              </line>
              
              <circle r="1.5" fill="#A78BFA">
                <animate 
                  attributeName="opacity" 
                  values="0;1;0" 
                  dur="1s" 
                  begin="3.9s"
                  repeatCount="indefinite"
                />
                <animateMotion 
                  path="M80,77 L35,81" 
                  dur="1s" 
                  begin="3.9s"
                  repeatCount="indefinite"
                />
              </circle>
              
              <circle r="1.5" fill="#A78BFA">
                <animate 
                  attributeName="opacity" 
                  values="0;1;0" 
                  dur="1s" 
                  begin="4.9s"
                  repeatCount="indefinite"
                />
                <animateMotion 
                  path="M80,77 L60,81" 
                  dur="1s" 
                  begin="4.9s"
                  repeatCount="indefinite"
                />
              </circle>
              
              <circle r="1.5" fill="#A78BFA">
                <animate 
                  attributeName="opacity" 
                  values="0;1;0" 
                  dur="1s" 
                  begin="5.9s"
                  repeatCount="indefinite"
                />
                <animateMotion 
                  path="M80,77 L100,81" 
                  dur="1s" 
                  begin="5.9s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          </svg>
        </div>
      )}

      {/* Diffusion Process */}
      {!showLLMOnly && (
        <div 
          className="bg-slate-900 rounded-lg p-4 aspect-[4/3] flex items-center justify-center"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              {/* Gradient definition for the noise effect */}
              <radialGradient id="noiseGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" stopColor="#8B5CF6" stopOpacity="1" />
                <stop offset="100%" stopColor="#6D28D9" stopOpacity="0.5" />
                <animate 
                  attributeName="fx" 
                  values="40%;60%;40%" 
                  dur="8s" 
                  repeatCount="indefinite" 
                />
                <animate 
                  attributeName="fy" 
                  values="40%;60%;40%" 
                  dur="8s" 
                  repeatCount="indefinite" 
                />
              </radialGradient>
              
              {/* Filter for the noise texture */}
              <filter id="noise" x="0%" y="0%" width="100%" height="100%">
                <feTurbulence baseFrequency="0.65" result="noise" numOctaves="3" seed="1" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
              </filter>
              
              {/* Gaussian blur for soft edges */}
              <filter id="blur" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="1" />
              </filter>
            </defs>
            
            <g>
              {/* Title with fade-in */}
              <text 
                x="28" y="12" fill="#A78BFA" fontSize="6" fontWeight="bold"
              >
                Diffusion Process
                <animate 
                  attributeName="opacity" 
                  from="0" 
                  to="1" 
                  dur="1s" 
                  begin="0s" 
                  fill="freeze" 
                />
              </text>
              
              {/* Image Sequence - Clear to Noisy */}
              <rect 
                x="10" y="20" width="18" height="18" rx="2" fill="#8B5CF6"
              >
                <animate 
                  attributeName="opacity" 
                  values="0;1" 
                  dur="1s" 
                  begin="0.5s" 
                  fill="freeze" 
                />
              </rect>
              
              {/* Cat silhouette in clear image */}
              <path 
                d="M16,25 C12,24 12,30 16,29 C19,33 23,33 26,29 C26,30 21,31 16,25" 
                fill="#6D28D9"
              >
                <animate 
                  attributeName="opacity" 
                  values="0;1" 
                  dur="1s" 
                  begin="0.7s" 
                  fill="freeze" 
                />
              </path>
              
              {/* Flow arrows */}
              <path 
                d="M28,29 L35,29" 
                stroke="#A78BFA" 
                strokeWidth="1" 
                strokeDasharray="1"
                fill="none"
              >
                <animate 
                  attributeName="opacity" 
                  values="0;1" 
                  dur="0.5s" 
                  begin="1.2s" 
                  fill="freeze" 
                />
                <animate 
                  attributeName="stroke-dashoffset" 
                  values="10;0" 
                  dur="1s" 
                  begin="1.2s;arrow1.end+2s" 
                  repeatCount="indefinite"
                  id="arrow1"
                />
              </path>
              <polygon 
                points="36,29 33,27 33,31" 
                fill="#A78BFA"
              >
                <animate 
                  attributeName="opacity" 
                  values="0;1" 
                  dur="0.5s" 
                  begin="1.2s" 
                  fill="freeze" 
                />
              </polygon>
              
              {/* Partially Noisy Image */}
              <rect 
                x="40" y="20" width="18" height="18" rx="2" 
                fill="#8B5CF6"
              >
                <animate 
                  attributeName="opacity" 
                  values="0;1" 
                  dur="1s" 
                  begin="1.4s" 
                  fill="freeze" 
                />
              </rect>
              
              {/* Cat silhouette with noise */}
              <path 
                d="M46,25 C42,24 42,30 46,29 C49,33 53,33 56,29 C56,30 51,31 46,25" 
                fill="#6D28D9"
                filter="url(#blur)"
              >
                <animate 
                  attributeName="opacity" 
                  values="0;0.7" 
                  dur="1s" 
                  begin="1.6s" 
                  fill="freeze" 
                />
              </path>
              
              {/* Noise Particles */}
              <g>
                {[...Array(15)].map((_, i) => (
                  <circle
                    key={`noise1-${i}`}
                    cx={40 + Math.random() * 18}
                    cy={20 + Math.random() * 18}
                    r={0.4 + Math.random() * 0.4}
                    fill="#A78BFA"
                  >
                    <animate 
                      attributeName="opacity" 
                      values="0;0.7;0" 
                      dur={`${2 + Math.random() * 2}s`} 
                      begin={`${1.8 + i * 0.1}s`} 
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="cy"
                      values={`${20 + Math.random() * 18};${20 + Math.random() * 18};${20 + Math.random() * 18}`}
                      dur={`${3 + Math.random() * 2}s`}
                      begin={`${1.8 + i * 0.1}s`}
                      repeatCount="indefinite"
                    />
                  </circle>
                ))}
              </g>
              
              {/* Second Flow Arrow */}
              <path 
                d="M58,29 L65,29" 
                stroke="#A78BFA" 
                strokeWidth="1" 
                strokeDasharray="1"
                fill="none"
              >
                <animate 
                  attributeName="opacity" 
                  values="0;1" 
                  dur="0.5s" 
                  begin="2s" 
                  fill="freeze" 
                />
                <animate 
                  attributeName="stroke-dashoffset" 
                  values="10;0" 
                  dur="1s" 
                  begin="2s;arrow2.end+2s" 
                  repeatCount="indefinite"
                  id="arrow2"
                />
              </path>
              <polygon 
                points="66,29 63,27 63,31" 
                fill="#A78BFA"
              >
                <animate 
                  attributeName="opacity" 
                  values="0;1" 
                  dur="0.5s" 
                  begin="2s" 
                  fill="freeze" 
                />
              </polygon>
              
              {/* Fully Noisy Image */}
              <rect 
                x="70" y="20" width="18" height="18" rx="2" 
                fill="url(#noiseGradient)"
                filter="url(#noise)"
              >
                <animate 
                  attributeName="opacity" 
                  values="0;1" 
                  dur="1s" 
                  begin="2.2s" 
                  fill="freeze" 
                />
              </rect>
              
              {/* Noise Particles - Fully Noisy */}
              <g>
                {[...Array(25)].map((_, i) => (
                  <circle
                    key={`noise2-${i}`}
                    cx={70 + Math.random() * 18}
                    cy={20 + Math.random() * 18}
                    r={0.4 + Math.random() * 0.6}
                    fill="white"
                  >
                    <animate 
                      attributeName="opacity" 
                      values="0;0.6;0" 
                      dur={`${1 + Math.random() * 2}s`} 
                      begin={`${2.5 + i * 0.05}s`} 
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="cx"
                      values={`${70 + Math.random() * 18};${70 + Math.random() * 18};${70 + Math.random() * 18}`}
                      dur={`${2 + Math.random() * 2}s`}
                      begin={`${2.5 + i * 0.05}s`}
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="cy"
                      values={`${20 + Math.random() * 18};${20 + Math.random() * 18};${20 + Math.random() * 18}`}
                      dur={`${2 + Math.random() * 2}s`}
                      begin={`${2.5 + i * 0.05}s`}
                      repeatCount="indefinite"
                    />
                  </circle>
                ))}
              </g>
              
              {/* Forward Process Label */}
              <text 
                x="32" y="45" fill="#A78BFA" fontSize="4"
              >
                Forward Process (Adding Noise)
                <animate 
                  attributeName="opacity" 
                  values="0;1" 
                  dur="1s" 
                  begin="3s" 
                  fill="freeze" 
                />
              </text>
              
              {/* Reverse Process - Noisy to Clear */}
              
              {/* Reverse flow arrows */}
              <path 
                d="M35,71 L28,71" 
                stroke="#A78BFA" 
                strokeWidth="1" 
                strokeDasharray="1"
                fill="none"
              >
                <animate 
                  attributeName="opacity" 
                  values="0;1" 
                  dur="0.5s" 
                  begin="3.5s" 
                  fill="freeze" 
                />
                <animate 
                  attributeName="stroke-dashoffset" 
                  values="10;0" 
                  dur="1s" 
                  begin="3.5s;arrow3.end+2s" 
                  repeatCount="indefinite"
                  id="arrow3"
                />
              </path>
              <polygon 
                points="27,71 30,69 30,73" 
                fill="#A78BFA"
              >
                <animate 
                  attributeName="opacity" 
                  values="0;1" 
                  dur="0.5s" 
                  begin="3.5s" 
                  fill="freeze" 
                />
              </polygon>
              
              {/* Fully Noisy Image - Bottom */}
              <rect 
                x="40" y="62" width="18" height="18" rx="2" 
                fill="url(#noiseGradient)"
                filter="url(#noise)"
              >
                <animate 
                  attributeName="opacity" 
                  values="0;1" 
                  dur="1s" 
                  begin="3.2s" 
                  fill="freeze" 
                />
              </rect>
              
              {/* Noise Particles in Fully Noisy - Bottom */}
              <g>
                {[...Array(25)].map((_, i) => (
                  <circle
                    key={`noise3-${i}`}
                    cx={40 + Math.random() * 18}
                    cy={62 + Math.random() * 18}
                    r={0.4 + Math.random() * 0.6}
                    fill="white"
                  >
                    <animate 
                      attributeName="opacity" 
                      values="0;0.7;0" 
                      dur={`${1 + Math.random() * 2}s`} 
                      begin={`${3.3 + i * 0.05}s`} 
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      values="0.7;0"
                      dur="4s"
                      begin="4.5s"
                      fill="freeze"
                    />
                  </circle>
                ))}
              </g>
              
              {/* Partially Denoised Image */}
              <rect 
                x="10" y="62" width="18" height="18" rx="2" 
                fill="#8B5CF6"
              >
                <animate 
                  attributeName="opacity" 
                  values="0;1" 
                  dur="1s" 
                  begin="3.7s" 
                  fill="freeze" 
                />
              </rect>
              
              {/* Cat silhouette emerging */}
              <path 
                d="M16,67 C12,66 12,72 16,71 C19,75 23,75 26,71 C26,72 21,73 16,67" 
                fill="#6D28D9"
                filter="url(#blur)"
              >
                <animate 
                  attributeName="opacity" 
                  values="0;0.3;0.7" 
                  dur="3s" 
                  begin="3.9s" 
                  fill="freeze" 
                />
                <animate
                  attributeName="filter"
                  values="url(#blur);none"
                  dur="3s"
                  begin="3.9s"
                  fill="freeze"
                />
              </path>
              
              {/* Noise Particles Fading */}
              <g>
                {[...Array(15)].map((_, i) => (
                  <circle
                    key={`noise4-${i}`}
                    cx={10 + Math.random() * 18}
                    cy={62 + Math.random() * 18}
                    r={0.4 + Math.random() * 0.4}
                    fill="#A78BFA"
                  >
                    <animate 
                      attributeName="opacity" 
                      values="0;0.5;0" 
                      dur={`${3}s`} 
                      begin={`${4 + i * 0.1}s`} 
                      fill="freeze"
                    />
                  </circle>
                ))}
              </g>
              
              {/* Second Flow Arrow Bottom */}
              <path 
                d="M65,71 L58,71" 
                stroke="#A78BFA" 
                strokeWidth="1" 
                strokeDasharray="1"
                fill="none"
              >
                <animate 
                  attributeName="opacity" 
                  values="0;1" 
                  dur="0.5s" 
                  begin="4.2s" 
                  fill="freeze" 
                />
                <animate 
                  attributeName="stroke-dashoffset" 
                  values="10;0" 
                  dur="1s" 
                  begin="4.2s;arrow4.end+2s" 
                  repeatCount="indefinite"
                  id="arrow4"
                />
              </path>
              <polygon 
                points="57,71 60,69 60,73" 
                fill="#A78BFA"
              >
                <animate 
                  attributeName="opacity" 
                  values="0;1" 
                  dur="0.5s" 
                  begin="4.2s" 
                  fill="freeze" 
                />
              </polygon>
              
              {/* Final Clear Image */}
              <rect 
                x="70" y="62" width="18" height="18" rx="2" 
                fill="#8B5CF6"
              >
                <animate 
                  attributeName="opacity" 
                  values="0;1" 
                  dur="1s" 
                  begin="4.4s" 
                  fill="freeze" 
                />
              </rect>
              
              {/* Clear Cat silhouette */}
              <path 
                d="M76,67 C72,66 72,72 76,71 C79,75 83,75 86,71 C86,72 81,73 76,67" 
                fill="#6D28D9"
              >
                <animate 
                  attributeName="opacity" 
                  values="0;1" 
                  dur="1s" 
                  begin="4.6s" 
                  fill="freeze" 
                />
              </path>
              
              {/* Reverse Process Label */}
              <text 
                x="24" y="87" fill="#A78BFA" fontSize="4"
              >
                Reverse Process (Removing Noise)
                <animate 
                  attributeName="opacity" 
                  values="0;1" 
                  dur="1s" 
                  begin="5s" 
                  fill="freeze" 
                />
              </text>
              
              {/* Restart Animation Chain - Smooth loop */}
              <animate
                attributeName="opacity"
                values="1;1"
                dur="1s"
                begin="5.5s"
                repeatCount="1"
                onend="resetAll.beginElement()"
                id="animEnd"
              />
              
              <animate
                id="resetAll"
                attributeName="opacity"
                from="1"
                to="1"
                dur="0.1s"
                begin="indefinite"
                fill="freeze"
                onend="restartAnim.beginElement()"
              />
              
              <animate
                id="restartAnim"
                attributeName="opacity"
                from="1"
                to="1"
                dur="0.1s"
                begin="indefinite"
                repeatCount="indefinite"
              />
            </g>
          </svg>
        </div>
      )}

      {/* Knowledge Graph */}
      {!showLLMOnly && (
        <motion.div 
          className="bg-slate-900 rounded-lg p-4 aspect-[4/3] flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <filter id="multimodalGlow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="1.5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
              <linearGradient id="imageGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#6D28D9" stopOpacity="0.9" />
              </linearGradient>
              <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.9" />
              </linearGradient>
            </defs>
            <g>
              {/* Title */}
              <text x="18" y="12" fill="#A78BFA" fontSize="5.5" fontWeight="bold">
                Multimodal Transformer
                <animate 
                  attributeName="opacity" 
                  values="0;1" 
                  dur="0.8s" 
                  begin="0s"
                  fill="freeze" 
                />
              </text>
              
              {/* Image Input */}
              <rect x="10" y="18" width="20" height="20" rx="2" fill="url(#imageGradient)" opacity="0">
                <animate 
                  attributeName="opacity" 
                  values="0;0.9" 
                  dur="0.8s" 
                  begin="0.5s" 
                  fill="freeze" 
                />
              </rect>
              
              {/* Simplified image features (mountains) */}
              <path d="M12,34 L18,25 L24,30 L28,22" stroke="#A78BFA" strokeWidth="1" fill="none" opacity="0">
                <animate 
                  attributeName="opacity" 
                  values="0;1" 
                  dur="0.5s" 
                  begin="0.7s" 
                  fill="freeze" 
                />
              </path>
              
              {/* Image icon */}
              <text x="15" y="26" fill="white" fontSize="3.5" opacity="0">
                IMAGE
                <animate 
                  attributeName="opacity" 
                  values="0;1" 
                  dur="0.5s" 
                  begin="0.8s" 
                  fill="freeze" 
                />
              </text>
              
              {/* Text Input */}
              <rect x="70" y="18" width="20" height="20" rx="2" fill="url(#textGradient)" opacity="0">
                <animate 
                  attributeName="opacity" 
                  values="0;0.9" 
                  dur="0.8s" 
                  begin="0.5s" 
                  fill="freeze" 
                />
              </rect>
              
              {/* Text lines */}
              <line x1="73" y1="23" x2="87" y2="23" stroke="white" strokeWidth="0.8" opacity="0">
                <animate 
                  attributeName="opacity" 
                  values="0;0.8" 
                  dur="0.5s" 
                  begin="0.9s" 
                  fill="freeze" 
                />
              </line>
              <line x1="73" y1="27" x2="85" y2="27" stroke="white" strokeWidth="0.8" opacity="0">
                <animate 
                  attributeName="opacity" 
                  values="0;0.8" 
                  dur="0.5s" 
                  begin="1s" 
                  fill="freeze" 
                />
              </line>
              <line x1="73" y1="31" x2="83" y2="31" stroke="white" strokeWidth="0.8" opacity="0">
                <animate 
                  attributeName="opacity" 
                  values="0;0.8" 
                  dur="0.5s" 
                  begin="1.1s" 
                  fill="freeze" 
                />
              </line>
              
              {/* Text icon */}
              <text x="77" y="36" fill="white" fontSize="3.5" opacity="0">
                TEXT
                <animate 
                  attributeName="opacity" 
                  values="0;1" 
                  dur="0.5s" 
                  begin="1.2s" 
                  fill="freeze" 
                />
              </text>
              
              {/* Input Labels */}
              <text x="20" y="42" fill="#A78BFA" fontSize="3.2" textAnchor="middle" opacity="0">
                Visual Input
                <animate 
                  attributeName="opacity" 
                  values="0;1" 
                  dur="0.5s" 
                  begin="1.3s" 
                  fill="freeze" 
                />
              </text>
              
              <text x="80" y="42" fill="#A78BFA" fontSize="3.2" textAnchor="middle" opacity="0">
                Text Input
                <animate 
                  attributeName="opacity" 
                  values="0;1" 
                  dur="0.5s" 
                  begin="1.3s" 
                  fill="freeze" 
                />
              </text>
              
              {/* Encoder blocks */}
              <rect x="15" y="47" width="15" height="12" rx="2" fill="#8B5CF6" opacity="0">
                <animate 
                  attributeName="opacity" 
                  values="0;0.9" 
                  dur="0.5s" 
                  begin="1.5s" 
                  fill="freeze" 
                />
                <animate 
                  attributeName="filter" 
                  values="none;url(#multimodalGlow);none" 
                  dur="4s" 
                  begin="4s" 
                  repeatCount="indefinite" 
                />
              </rect>
              <text x="17" y="54" fill="white" fontSize="3" opacity="0">
                Vision
                <animate 
                  attributeName="opacity" 
                  values="0;1" 
                  dur="0.5s" 
                  begin="1.6s" 
                  fill="freeze" 
                />
              </text>
              
              <rect x="15" y="62" width="15" height="12" rx="2" fill="#8B5CF6" opacity="0">
                <animate 
                  attributeName="opacity" 
                  values="0;0.9" 
                  dur="0.5s" 
                  begin="1.8s" 
                  fill="freeze" 
                />
                <animate 
                  attributeName="filter" 
                  values="none;url(#multimodalGlow);none" 
                  dur="4s" 
                  begin="4.3s" 
                  repeatCount="indefinite" 
                />
              </rect>
              <text x="17" y="69" fill="white" fontSize="3" opacity="0">
                Encoder
                <animate 
                  attributeName="opacity" 
                  values="0;1" 
                  dur="0.5s" 
                  begin="1.9s" 
                  fill="freeze" 
                />
              </text>
              
              <rect x="70" y="47" width="15" height="12" rx="2" fill="#8B5CF6" opacity="0">
                <animate 
                  attributeName="opacity" 
                  values="0;0.9" 
                  dur="0.5s" 
                  begin="1.5s" 
                  fill="freeze" 
                />
                <animate 
                  attributeName="filter" 
                  values="none;url(#multimodalGlow);none" 
                  dur="4s" 
                  begin="4.1s" 
                  repeatCount="indefinite" 
                />
              </rect>
              <text x="72" y="54" fill="white" fontSize="3" opacity="0">
                Text
                <animate 
                  attributeName="opacity" 
                  values="0;1" 
                  dur="0.5s" 
                  begin="1.6s" 
                  fill="freeze" 
                />
              </text>
              
              <rect x="70" y="62" width="15" height="12" rx="2" fill="#8B5CF6" opacity="0">
                <animate 
                  attributeName="opacity" 
                  values="0;0.9" 
                  dur="0.5s" 
                  begin="1.8s" 
                  fill="freeze" 
                />
                <animate 
                  attributeName="filter" 
                  values="none;url(#multimodalGlow);none" 
                  dur="4s" 
                  begin="4.4s" 
                  repeatCount="indefinite" 
                />
              </rect>
              <text x="72" y="69" fill="white" fontSize="3" opacity="0">
                Encoder
                <animate 
                  attributeName="opacity" 
                  values="0;1" 
                  dur="0.5s" 
                  begin="1.9s" 
                  fill="freeze" 
                />
              </text>
              
              {/* Fusion Block */}
              <rect x="40" y="54" width="20" height="15" rx="2" fill="#6D28D9" opacity="0">
                <animate 
                  attributeName="opacity" 
                  values="0;0.95" 
                  dur="0.5s" 
                  begin="2.2s" 
                  fill="freeze" 
                />
                <animate 
                  attributeName="filter" 
                  values="none;url(#multimodalGlow);none" 
                  dur="4s" 
                  begin="4.7s" 
                  repeatCount="indefinite" 
                />
              </rect>
              <text x="42" y="61" fill="white" fontSize="3.2" opacity="0">
                Cross-Modal
                <animate 
                  attributeName="opacity" 
                  values="0;1" 
                  dur="0.5s" 
                  begin="2.3s" 
                  fill="freeze" 
                />
              </text>
              <text x="44" y="65" fill="white" fontSize="3.2" opacity="0">
                Attention
                <animate 
                  attributeName="opacity" 
                  values="0;1" 
                  dur="0.5s" 
                  begin="2.4s" 
                  fill="freeze" 
                />
              </text>
              
              {/* Output Block */}
              <rect x="40" y="80" width="20" height="10" rx="2" fill="#A78BFA" opacity="0">
                <animate 
                  attributeName="opacity" 
                  values="0;0.9" 
                  dur="0.8s" 
                  begin="3s" 
                  fill="freeze" 
                />
              </rect>
              <text x="43" y="86" fill="white" fontSize="3.5" opacity="0">
                Output
                <animate 
                  attributeName="opacity" 
                  values="0;1" 
                  dur="0.8s" 
                  begin="3.2s" 
                  fill="freeze" 
                />
              </text>
              
              {/* Connecting Lines with Animation */}
              {/* Image to Vision Encoder */}
              <line x1="20" y1="38" x2="20" y2="47" stroke="#6D28D9" strokeWidth="1" strokeDasharray="2 1" opacity="0">
                <animate 
                  attributeName="opacity" 
                  values="0;0.8" 
                  dur="0.5s" 
                  begin="1.4s" 
                  fill="freeze" 
                />
                <animate 
                  attributeName="stroke-dashoffset" 
                  values="10;0" 
                  dur="1s" 
                  begin="1.4s" 
                  repeatCount="indefinite" 
                />
              </line>
              
              {/* Text to Text Encoder */}
              <line x1="80" y1="38" x2="80" y2="47" stroke="#6D28D9" strokeWidth="1" strokeDasharray="2 1" opacity="0">
                <animate 
                  attributeName="opacity" 
                  values="0;0.8" 
                  dur="0.5s" 
                  begin="1.4s" 
                  fill="freeze" 
                />
                <animate 
                  attributeName="stroke-dashoffset" 
                  values="10;0" 
                  dur="1s" 
                  begin="1.4s" 
                  repeatCount="indefinite" 
                />
              </line>
              
              {/* Vision Encoder to Next Block */}
              <line x1="20" y1="59" x2="20" y2="62" stroke="#6D28D9" strokeWidth="1" strokeDasharray="2 1" opacity="0">
                <animate 
                  attributeName="opacity" 
                  values="0;0.8" 
                  dur="0.5s" 
                  begin="1.7s" 
                  fill="freeze" 
                />
                <animate 
                  attributeName="stroke-dashoffset" 
                  values="10;0" 
                  dur="1s" 
                  begin="1.7s" 
                  repeatCount="indefinite" 
                />
              </line>
              
              {/* Text Encoder to Next Block */}
              <line x1="80" y1="59" x2="80" y2="62" stroke="#6D28D9" strokeWidth="1" strokeDasharray="2 1" opacity="0">
                <animate 
                  attributeName="opacity" 
                  values="0;0.8" 
                  dur="0.5s" 
                  begin="1.7s" 
                  fill="freeze" 
                />
                <animate 
                  attributeName="stroke-dashoffset" 
                  values="10;0" 
                  dur="1s" 
                  begin="1.7s" 
                  repeatCount="indefinite" 
                />
              </line>
              
              {/* Vision to Fusion */}
              <line x1="30" y1="62" x2="40" y2="62" stroke="#6D28D9" strokeWidth="1" strokeDasharray="2 1" opacity="0">
                <animate 
                  attributeName="opacity" 
                  values="0;0.8" 
                  dur="0.5s" 
                  begin="2.1s" 
                  fill="freeze" 
                />
                <animate 
                  attributeName="stroke-dashoffset" 
                  values="15;0" 
                  dur="1.5s" 
                  begin="2.1s" 
                  repeatCount="indefinite" 
                />
              </line>
              
              {/* Text to Fusion */}
              <line x1="70" y1="62" x2="60" y2="62" stroke="#6D28D9" strokeWidth="1" strokeDasharray="2 1" opacity="0">
                <animate 
                  attributeName="opacity" 
                  values="0;0.8" 
                  dur="0.5s" 
                  begin="2.1s" 
                  fill="freeze" 
                />
                <animate 
                  attributeName="stroke-dashoffset" 
                  values="15;0" 
                  dur="1.5s" 
                  begin="2.1s" 
                  repeatCount="indefinite" 
                />
              </line>
              
              {/* Fusion to Output */}
              <line x1="50" y1="69" x2="50" y2="80" stroke="#6D28D9" strokeWidth="1" strokeDasharray="2 1" opacity="0">
                <animate 
                  attributeName="opacity" 
                  values="0;0.8" 
                  dur="0.5s" 
                  begin="2.5s" 
                  fill="freeze" 
                />
                <animate 
                  attributeName="stroke-dashoffset" 
                  values="15;0" 
                  dur="1.5s" 
                  begin="2.5s" 
                  repeatCount="indefinite" 
                />
              </line>
              
              {/* Data Flow Animation */}
              <circle r="1.5" fill="#A78BFA">
                <animate 
                  attributeName="opacity" 
                  values="0;1;0" 
                  dur="2s" 
                  begin="3.5s" 
                  repeatCount="indefinite" 
                />
                <animateMotion 
                  path="M20,38 L20,70" 
                  dur="2s" 
                  begin="3.5s" 
                  repeatCount="indefinite" 
                />
              </circle>
              
              <circle r="1.5" fill="#A78BFA">
                <animate 
                  attributeName="opacity" 
                  values="0;1;0" 
                  dur="2s" 
                  begin="3.8s" 
                  repeatCount="indefinite" 
                />
                <animateMotion 
                  path="M80,38 L80,70" 
                  dur="2s" 
                  begin="3.8s" 
                  repeatCount="indefinite" 
                />
              </circle>
              
              <circle r="1.5" fill="#A78BFA">
                <animate 
                  attributeName="opacity" 
                  values="0;1;0" 
                  dur="1.5s" 
                  begin="4.1s" 
                  repeatCount="indefinite" 
                />
                <animateMotion 
                  path="M30,62 L40,62" 
                  dur="1.5s" 
                  begin="4.1s" 
                  repeatCount="indefinite" 
                />
              </circle>
              
              <circle r="1.5" fill="#A78BFA">
                <animate 
                  attributeName="opacity" 
                  values="0;1;0" 
                  dur="1.5s" 
                  begin="4.3s" 
                  repeatCount="indefinite" 
                />
                <animateMotion 
                  path="M70,62 L60,62" 
                  dur="1.5s" 
                  begin="4.3s" 
                  repeatCount="indefinite" 
                />
              </circle>
              
              <circle r="1.5" fill="#A78BFA">
                <animate 
                  attributeName="opacity" 
                  values="0;1;0" 
                  dur="1.5s" 
                  begin="4.5s" 
                  repeatCount="indefinite" 
                />
                <animateMotion 
                  path="M50,69 L50,80" 
                  dur="1.5s" 
                  begin="4.5s" 
                  repeatCount="indefinite" 
                />
              </circle>
            </g>
          </svg>
        </motion.div>
      )}
    </div>
    </div>
  );
};

export default AIVisualizationGrid;
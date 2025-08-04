

export default function NeuralNetworkSVG() {
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

  const connectionVariants = {
    initial: { pathLength: 0, opacity: 0 },
    animate: i => ({
      pathLength: 1,
      opacity: 0.5,
      transition: {
        pathLength: { type: "spring", duration: 1.5, bounce: 0, delay: 0.5 + i * 0.01 },
        opacity: { duration: 0.2, delay: 0.5 + i * 0.01 }
      }
    })
  };



  // Neural network architecture
  const layers = [
    { nodes: 4, name: "Input Layer" },     // Input layer
    { nodes: 6, name: "Hidden Layer 1" },  // Hidden layer 1
    { nodes: 5, name: "Hidden Layer 2" },  // Hidden layer 2 
    { nodes: 3, name: "Output Layer" }     // Output layer
  ];

  // Input layer labels
  const inputLabels = ["Feature 1", "Feature 2", "Feature 3", "Feature 4"];
  
  // Output layer labels
  const outputLabels = ["Class A", "Class B", "Class C"];

  // Sample activation data for visualization
  const activationData = {
    input: [0.8, 0.5, 0.3, 0.9],
    hidden1: [0.7, 0.2, 0.8, 0.5, 0.3, 0.6],
    hidden2: [0.4, 0.8, 0.3, 0.7, 0.5],
    output: [0.2, 0.7, 0.1]
  };

  // Calculate positions for nodes - improved centering
  const getNodePositions = () => {
    const positions = [];
    const width = 720; // Increased width for better fill
    const height = 360; // Increased height for better fill
    const horizontalSpacing = width / (layers.length + 1);
    const centerXOffset = 40; // Reduced offset to center better
    
    layers.forEach((layer, layerIndex) => {
      const layerPositions = [];
      const verticalSpacing = height / (layer.nodes + 1);
      
      for (let i = 0; i < layer.nodes; i++) {
        layerPositions.push({
          x: horizontalSpacing * (layerIndex + 1) + centerXOffset,
          y: verticalSpacing * (i + 1) + 70 // Adjusted vertical position
        });
      }
      
      positions.push(layerPositions);
    });
    
    return positions;
  };

  const nodePositions = getNodePositions();

  // Generate connections between layers
  const generateConnections = () => {
    const connections = [];
    let connectionIndex = 0;
    
    for (let layerIndex = 0; layerIndex < layers.length - 1; layerIndex++) {
      const currentLayer = nodePositions[layerIndex];
      const nextLayer = nodePositions[layerIndex + 1];
      
      currentLayer.forEach((startNode, startIndex) => {
        nextLayer.forEach((endNode, endIndex) => {
          connections.push({
            id: connectionIndex++,
            start: startNode,
            end: endNode,
            opacity: Math.random() * 0.5 + 0.1,
            layerIndex,
            startIndex,
            endIndex
          });
        });
      });
    }
    
    return connections;
  };

  const connections = generateConnections();

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <svg width="100%" height="100%" viewBox="0 0 800 480" className="overflow-visible">
        <defs>
          {/* Gradient for nodes */}
          <radialGradient id="nodeGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#6366F1" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#2563EB" stopOpacity="0.2" />
          </radialGradient>
          
          {/* Gradient for active nodes */}
          <radialGradient id="activeNodeGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#EC4899" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#DB2777" stopOpacity="0.2" />
          </radialGradient>
          
          {/* Gradient for hover effect */}
          <radialGradient id="hoverGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#6D28D9" stopOpacity="0.2" />
          </radialGradient>
          
          {/* Filter for glowing effects */}
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          {/* Create paths for signals to follow */}
          {connections.map((connection, i) => (
            <path
              key={`signal-path-${i}`}
              id={`signal-path-${i}`}
              d={`M ${connection.start.x} ${connection.start.y} L ${connection.end.x} ${connection.end.y}`}
              stroke="none"
              fill="none"
            />
          ))}
        </defs>
        
        {/* Title - properly positioned */}
        <text 
          x="400" 
          y="70"  
          textAnchor="middle" 
          className="fill-current text-gray-100 text-xl font-medium"
        >
          Neural Network
        </text>
        
        {/* Layer labels - positioned properly */}
        {layers.map((layer, i) => (
          <text 
            key={`layer-label-${i}`}
            x={nodePositions[i][0].x}
            y="100"
            textAnchor="middle"
            className="fill-current text-gray-300 text-sm"
          >
            {layer.name}
          </text>
        ))}
        
        {/* Connections */}
        {connections.map((connection, i) => (
          <motion.path
            key={`connection-${i}`}
            d={`M ${connection.start.x} ${connection.start.y} L ${connection.end.x} ${connection.end.y}`}
            stroke="#6366F1"
            strokeWidth="1"
            strokeOpacity={connection.opacity}
            fill="none"
            custom={i}
            initial="initial"
            animate="animate"
            variants={connectionVariants}
          />
        ))}
        
        {/* Animated signals traveling along connections */}
        {connections.filter((_, i) => i % 5 === 0).map((connection, i) => (
          <motion.circle
            key={`signal-${i}`}
            cx={connection.start.x}
            cy={connection.start.y}
            r="3"
            fill="#EC4899"
            filter="url(#glow)"
            animate={{
              x: [0, connection.end.x - connection.start.x],
              y: [0, connection.end.y - connection.start.y],
              scale: [0.5, 1.2, 0.5],
              opacity: [0.2, 1, 0.2]
            }}
            transition={{
              repeat: Infinity,
              duration: 2.5,
              ease: "easeInOut", 
              delay: i * 0.1
            }}
          />
        ))}
        
        {/* Nodes */}
        {nodePositions.map((layer, layerIndex) => (
          <g key={`layer-${layerIndex}`}>
            {layer.map((node, nodeIndex) => {
              // Determine if the node should be highlighted based on activation
              let fillValue = "url(#nodeGradient)";
              let nodeSize = 10;
              let activationLevel = 0;
              
              if (layerIndex === 0) {
                activationLevel = activationData.input[nodeIndex];
              } else if (layerIndex === 1) {
                activationLevel = activationData.hidden1[nodeIndex];
              } else if (layerIndex === 2) {
                activationLevel = activationData.hidden2[nodeIndex];
              } else if (layerIndex === 3) {
                activationLevel = activationData.output[nodeIndex];
              }
              
              if (activationLevel > 0.6) {
                fillValue = "url(#activeNodeGradient)";
                nodeSize = 12;
              }
              
              return (
                <g key={`node-${layerIndex}-${nodeIndex}`}>
                  <motion.circle
                    cx={node.x}
                    cy={node.y}
                    r={nodeSize}
                    fill={fillValue}
                    filter="url(#glow)"
                    custom={layerIndex * 10 + nodeIndex}
                    initial="initial"
                    animate="animate"
                    variants={nodeVariants}
                    whileHover={{
                      scale: 1.2,
                      fill: "url(#hoverGradient)",
                      transition: { duration: 0.3 }
                    }}
                  />
                  
                  {/* Input labels */}
                  {layerIndex === 0 && (
                    <text
                      x={node.x - 15}
                      y={node.y}
                      textAnchor="end"
                      dominantBaseline="middle"
                      className="fill-current text-gray-300 text-xs"
                    >
                      {inputLabels[nodeIndex]}
                    </text>
                  )}
                  
                  {/* Output labels */}
                  {layerIndex === layers.length - 1 && (
                    <text
                      x={node.x + 15}
                      y={node.y}
                      textAnchor="start"
                      dominantBaseline="middle"
                      className="fill-current text-gray-300 text-xs"
                    >
                      {outputLabels[nodeIndex]}
                    </text>
                  )}
                  
                  {/* Activation value for highly activated nodes */}
                  {activationLevel > 0.6 && (
                    <text
                      x={node.x}
                      y={node.y + nodeSize + 10}
                      textAnchor="middle"
                      className="fill-current text-gray-400 text-xs"
                    >
                      {activationLevel.toFixed(1)}
                    </text>
                  )}
                </g>
              );
            })}
          </g>
        ))}
        
        {/* Legend - centered at bottom */}
        <g transform="translate(185, 400)">
          <circle cx="10" cy="0" r="6" fill="url(#nodeGradient)" />
          <text x="25" y="4" className="fill-current text-gray-300 text-xs">Low Activation</text>
          
          <circle cx="150" cy="0" r="8" fill="url(#activeNodeGradient)" />
          <text x="165" y="4" className="fill-current text-gray-300 text-xs">High Activation</text>
          
          <path d="M 280 0 L 310 0" stroke="#6366F1" strokeWidth="1" strokeOpacity="0.5" />
          <text x="320" y="4" className="fill-current text-gray-300 text-xs">Connection</text>
          
          <circle cx="425" cy="0" r="3" fill="#EC4899" />
          <text x="440" y="4" className="fill-current text-gray-300 text-xs">Signal Propagation</text>
        </g>
        
        {/* Information text */}
        <text 
          x="400" 
          y="430" 
          textAnchor="middle" 
          className="fill-current text-gray-400 text-xs"
        >
          Neural networks process input features through weighted connections and activation functions
        </text>
      </svg>
    </div>
  );
} 
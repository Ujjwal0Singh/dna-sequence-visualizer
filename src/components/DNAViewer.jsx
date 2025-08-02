import { useState } from 'react';
import { motion } from 'framer-motion';

export default function DNAViewer({ dnaSequence, onBaseClick, highlightedGene }) {
  const [hoveredBase, setHoveredBase] = useState(null);

  const getBaseColorClass = (base) => {
    switch(base) {
      case 'A': return 'dna-a';
      case 'T': return 'dna-t';
      case 'C': return 'dna-c';
      case 'G': return 'dna-g';
      default: return 'bg-gray-700';
    }
  };

  return (
    <div className="relative">
      <div className="flex flex-wrap gap-2 justify-center p-4 bg-gray-800 rounded-lg shadow-lg border border-neon-blue">
        {dnaSequence.map((basePair, index) => (
          <motion.div
            key={`${basePair.position}-${basePair.base}`}
            initial={{ scale: 1 }}
            animate={{ 
              scale: highlightedGene === basePair.gene ? [1, 1.1, 1] : 1,
              boxShadow: highlightedGene === basePair.gene ? '0 0 10px #00f5ff' : 'none'
            }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.2 }}
            className={`dna-base ${getBaseColorClass(basePair.base)} 
              ${highlightedGene === basePair.gene ? 'ring-2 ring-neon-blue' : ''}`}
            onMouseEnter={() => setHoveredBase(basePair)}
            onMouseLeave={() => setHoveredBase(null)}
            onClick={() => onBaseClick(basePair)}
          >
            {basePair.base}
          </motion.div>
        ))}
      </div>
      
      {hoveredBase && (
        <div className="mt-2 p-2 bg-gray-800 text-neon-blue rounded border border-neon-blue">
          Position: {hoveredBase.position} | Gene: {hoveredBase.gene}
        </div>
      )}
    </div>
  );
}
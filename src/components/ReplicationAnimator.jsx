import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ReplicationAnimator({ dnaSequence }) {
  const [isReplicating, setIsReplicating] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState('normal');
  const [replicatedStrands, setReplicatedStrands] = useState([]);

  const replicateDNA = () => {
    setIsReplicating(true);
    
    const complementaryStrand = dnaSequence.map(basePair => {
      let complementaryBase;
      switch(basePair.base) {
        case 'A': complementaryBase = 'T'; break;
        case 'T': complementaryBase = 'A'; break;
        case 'C': complementaryBase = 'G'; break;
        case 'G': complementaryBase = 'C'; break;
        default: complementaryBase = 'A';
      }
      return {
        ...basePair,
        base: complementaryBase
      };
    });
    
    const originalStrand = dnaSequence.map(basePair => ({
      ...basePair,
      original: true
    }));
    
    setReplicatedStrands([originalStrand, complementaryStrand]);
    
    setTimeout(() => setIsReplicating(false), animationSpeed === 'fast' ? 2000 : 4000);
  };

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
    <div className="p-4 bg-gray-800 rounded-lg border border-neon-blue">
      <h3 className="text-xl font-bold text-neon-blue mb-4">DNA Replication</h3>
      
      <div className="flex items-center gap-4 mb-4">
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={replicateDNA}
            disabled={isReplicating}
            className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-gray-900 font-bold rounded-lg
                        hover:from-cyan-300 hover:to-blue-400
                        shadow-lg transition-all duration-300
                        disabled:opacity-50 disabled:cursor-not-allowed
                        relative overflow-hidden group"
            >
            <span className="relative z-10">
                {isReplicating ? 'Replicating...' : 'Start Replication'}
            </span>
            {isReplicating && (
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 animate-pulse"></span>
            )}
        </motion.button>
        
        <div className="flex items-center gap-2">
          <label>Speed:</label>
          <select 
            value={animationSpeed}
            onChange={(e) => setAnimationSpeed(e.target.value)}
            className="bg-gray-700 text-white rounded px-2 py-1"
          >
            <option value="slow">Slow</option>
            <option value="normal">Normal</option>
            <option value="fast">Fast</option>
          </select>
        </div>
      </div>
      
      <AnimatePresence>
        {isReplicating && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-4 space-y-8"
          >
            <motion.div
              initial={{ scaleX: 1 }}
              animate={{ scaleX: 0 }}
              transition={{ duration: animationSpeed === 'fast' ? 0.5 : 1 }}
              className="h-1 bg-neon-pink origin-left"
            />
            
            <div className="flex flex-col gap-8">
              {replicatedStrands.map((strand, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: animationSpeed === 'fast' ? 0.5 : 1 }}
                  className="flex flex-wrap gap-2 justify-center"
                >
                  {strand.map((basePair, i) => (
                    <motion.div
                      key={`${idx}-${basePair.position}`}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        delay: i * (animationSpeed === 'fast' ? 0.05 : 0.1),
                        type: 'spring'
                      }}
                      className={`dna-base ${getBaseColorClass(basePair.base)}`}
                    >
                      {basePair.base}
                    </motion.div>
                  ))}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
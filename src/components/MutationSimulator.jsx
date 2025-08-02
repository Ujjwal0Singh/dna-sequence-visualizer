import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
  DialogButton,
} from "./ui/dialog";
import { X } from 'lucide-react'; 

export default function MutationSimulator({ onMutate }) {
  const [mutationType, setMutationType] = useState('point');
  const [mutationResult, setMutationResult] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleMutate = () => {
    const result = onMutate(mutationType);
    setMutationResult(result.mutation);
    setIsDialogOpen(true);
  };

  return (
    <div className="p-4 bg-gray-800 rounded-lg border border-neon-pink">
      <h3 className="text-xl font-bold text-neon-pink mb-4">Mutation Simulator</h3>
      
      <div className="flex flex-wrap gap-4 mb-4">
        {['point', 'insertion', 'deletion'].map((type) => (
          <motion.div
            key={type}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                checked={mutationType === type}
                onChange={() => setMutationType(type)}
                className="form-radio text-neon-pink"
              />
              <span className="capitalize">{type} Mutation</span>
            </label>
          </motion.div>
        ))}
      </div>
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleMutate}
        className="px-4 py-2 bg-gradient-to-r from-pink-500 to-orange-500 text-gray-900 font-bold rounded-lg
                    shadow-lg hover:shadow-pink-500/40 transition-all"
        >
        Simulate Mutation
      </motion.button>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-gray-800 border-neon-blue text-white">
          <DialogHeader>
            <DialogTitle className="text-neon-blue">Mutation Occurred!</DialogTitle>
          </DialogHeader>
          {mutationResult && (
            <div className="mt-4 space-y-2">
              <p><span className="font-bold">Type:</span> {mutationResult.type}</p>
              <p><span className="font-bold">Position:</span> {mutationResult.position}</p>
              {mutationResult.type === 'Point Mutation' && (
                <>
                  <p><span className="font-bold">Changed From:</span> {mutationResult.changedFrom}</p>
                  <p><span className="font-bold">Changed To:</span> {mutationResult.changedTo}</p>
                </>
              )}
              {mutationResult.type === 'Insertion' && (
                <p><span className="font-bold">Inserted Base:</span> {mutationResult.insertedBase}</p>
              )}
              {mutationResult.type === 'Deletion' && (
                <p><span className="font-bold">Deleted Base:</span> {mutationResult.deletedBase}</p>
              )}
              <DialogButton
                onClick={() => setIsDialogOpen(false)}
                className="w-full mt-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-gray-900 
                            font-bold rounded-lg hover:from-cyan-300 hover:to-blue-400
                            shadow-lg transition-all duration-300 py-3"
                >
                Close & Try Again
              </DialogButton>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
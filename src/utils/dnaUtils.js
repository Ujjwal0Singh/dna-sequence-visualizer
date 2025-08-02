export const generateRandomDNA = (length) => {
  const bases = ['A', 'T', 'C', 'G'];
  return Array.from({ length }, (_, i) => ({
    base: bases[Math.floor(Math.random() * bases.length)],
    position: i + 1,
    gene: `GENE-${Math.floor(i / 3) + 1}`
  }));
};

export const mutateDNA = (dna, mutationType = 'point') => {
  const newDNA = [...dna];
  const index = Math.floor(Math.random() * dna.length);
  
  switch(mutationType) {
    case 'point':
      const bases = ['A', 'T', 'C', 'G'].filter(b => b !== dna[index].base);
      newDNA[index] = {
        ...newDNA[index],
        base: bases[Math.floor(Math.random() * bases.length)]
      };
      return {
        dna: newDNA,
        mutation: {
          type: 'Point Mutation',
          position: index + 1,
          changedFrom: dna[index].base,
          changedTo: newDNA[index].base
        }
      };
      
    case 'insertion':
      const newBase = ['A', 'T', 'C', 'G'][Math.floor(Math.random() * 4)];
      newDNA.splice(index, 0, {
        base: newBase,
        position: dna.length + 1,
        gene: dna[index].gene
      });
      return {
        dna: newDNA,
        mutation: {
          type: 'Insertion',
          position: index + 1,
          insertedBase: newBase
        }
      };
      
    case 'deletion':
      const deleted = newDNA.splice(index, 1);
      return {
        dna: newDNA,
        mutation: {
          type: 'Deletion',
          position: index + 1,
          deletedBase: deleted[0].base
        }
      };
      
    default:
      return { dna: newDNA, mutation: null };
  }
};
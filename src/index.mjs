export function createTransform(type, options = {}) {
  // Stub: log transform factory
  return (line) => line;
}

export function createPipeline(...transforms) {
  // Stub: compose transforms
  return async function* (input) {
    for await (const line of input) {
      let result = line;
      for (const transform of transforms) {
        result = transform(result);
        if (!result) break;
      }
      if (result) yield result;
    }
  };
}

export default { createTransform, createPipeline };

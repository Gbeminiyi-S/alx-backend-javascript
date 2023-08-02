export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  const endpointCount = weakMap.get(endpoint) || 0;

  weakMap.set(endpoint, endpointCount + 1);

  if (endpointCount >= 5) {
    throw new Error('Endpoint load is high');
  }
}

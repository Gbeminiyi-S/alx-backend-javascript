export default function cleanSet(set, startString) {
  const match = [];

  if (startString.length && (set instanceof Set)) {
    set.forEach((string) => {
      if (string.startsWith(startString)) {
        match.push(string.slice(startString.length));
      }
    });
  }
  return match.join('-');
}

export const getRandomID = () => {
  return Math.random().toString(16).substr(2, 9);
}

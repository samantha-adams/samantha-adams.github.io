import { StarProps } from "../components/Star";
import { getRandomNumberInRange, getRandomOffset } from "./random";

const MIN_STAR_NUM = 3;
const MAX_STAR_NUM = 15;
const MIN_STAR_SIZE = 10;
const MAX_STAR_SIZE = 25;

const MAX_GROUP_OFFSET = MAX_STAR_SIZE * 4;

const getRandomXYAndSize = (offsetX: number, offsetY: number): StarProps => (
  { 
    x: getRandomOffset(MAX_GROUP_OFFSET) + offsetX,
    y: getRandomOffset(MAX_GROUP_OFFSET) + offsetY,
    size: getRandomNumberInRange(MIN_STAR_SIZE, MAX_STAR_SIZE),
  }
);

export const getRandomStars = (): StarProps[] => {
  const numStars = getRandomNumberInRange(MIN_STAR_NUM, MAX_STAR_NUM);
  const constellationOffsetX = getRandomNumberInRange(1, window.screen.width);
  const constellationOffsetY = getRandomNumberInRange(1, window.screen.height);
  const stars: StarProps[] = [];
  // const usedPositions: {x: number, y: number}[] = [];
  for (let j = 0; j < numStars; j++) {
    let position = getRandomXYAndSize(constellationOffsetX, constellationOffsetY);

    // while (usedPositions.some(
    //   ({ x, y }) => (
    //     (position.x < x - MAX_STAR_SIZE/2 || position.x > x + MAX_STAR_SIZE/2)
    //     &&
    //     (position.y < y - MAX_STAR_SIZE/2 || position.y > y + MAX_STAR_SIZE/2)
    // ))) {
    //   position = { ...position, x: getRandomOffset(MAX_GROUP_OFFSET) + constellationOffsetX, y: getRandomOffset(MAX_GROUP_OFFSET) + constellationOffsetY };
    //   console.log("new position making... old pos and used positions:", position, usedPositions, constellationOffsetX, constellationOffsetY)
    // }

    // usedPositions.push({ x: position.x, y: position.y })
    stars.push(position);
  }
  return stars;
};

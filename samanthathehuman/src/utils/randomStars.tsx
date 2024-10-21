import { StarProps } from "../components/Star";
import { getRandomNumberInRange, getRandomOffset } from "./random";

const MAX_STAR_NUM = 12;
const MIN_STAR_NUM = 3;
const MIN_STAR_SIZE = 5;
const MAX_STAR_SIZE = 25;

const MAX_OFFSET = Math.max(window.innerWidth, window.innerHeight) * 2;
const MAX_GROUP_OFFSET = 40;

const getRandomXYAndSize = (offset: number): StarProps => (
  { 
    x: getRandomNumberInRange(offset, offset + MAX_GROUP_OFFSET),
    y: getRandomNumberInRange(offset, offset + MAX_GROUP_OFFSET),
    size: getRandomNumberInRange(MIN_STAR_SIZE, MAX_STAR_SIZE),
  }
);

export const getRandomStars = (): StarProps[] => {
  const numStars = getRandomNumberInRange(MIN_STAR_NUM, MAX_STAR_NUM);
  const constellationOffset = getRandomOffset(MAX_OFFSET);
  const stars: StarProps[] = [];

  for (let j = 0; j < numStars; j++) {
    stars.push(getRandomXYAndSize(constellationOffset));
  }
  return stars;
};

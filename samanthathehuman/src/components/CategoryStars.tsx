import { useCallback, useEffect, useState } from 'react';
import categoriesData from '../assets/categories.json';
import './CategoryStars.css';
import Constellations from './Constellations';
import Details from './Details';
import gsap from 'gsap';
import Clickout from './Clickout';

interface Category {
  name: string;
  detailLines: string[][];
  backgroundImage: string;
  x: number;
  y: number;
}

const initialStyle = {
  fontSize: "1.5rem",
  opacity: 1,
  padding: "1.5rem",
};

const deemphasizedStyle = {
  fontSize: "0.5rem",
  opacity: 0.4,
  padding: "0",
};

const focusedStyle = {
  fontSize: "3.5rem",
  opacity: 1,
  padding: "1.5rem",
  height: "100%",
};

const ease = "expoScale(0.5,7,none)";

const animateIfUnfocused = (name: string, x: number, y: number, focusedCategory: string | null) => {
  const hasFocusedCategory = !!focusedCategory;
  if (name !== focusedCategory) {
    gsap.to(`#${name} .detail-group`, { opacity: 0, display: 'none', duration: 1, ease });
    gsap.to(`#${name}`, {
      ...(hasFocusedCategory ? deemphasizedStyle : initialStyle),
      // left: x,
      // top: y,
      duration: 1,
      ease,
    });
  }
};

const animateFocused = (name: string) => {
  gsap.to(`#${name} .detail-group`, { opacity: 1, display: 'flex', duration: 1, ease });
  gsap.to(`#${name}`, {
    ...focusedStyle,
    duration: 1,
    ease,      
  });
};

const CategoryStars: React.FC = () => {
  const [focusedCategoryName, setFocusedCategoryName] = useState<string>('');
  const categories: Category[] = categoriesData;

  useEffect(() => {
    if (focusedCategoryName) {
      animateFocused(focusedCategoryName);
    }
    categories.forEach(({ name, x, y }) => (
      animateIfUnfocused(name, x, y, focusedCategoryName)
    ));
  }, [focusedCategoryName]);

  const updateFocusedCategoryName = useCallback((newCategoryName: string = '') => {
    setFocusedCategoryName(newCategoryName);
  }, []);

  const handleMouseEnter = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target instanceof HTMLDivElement) {
      const categoryName = e.target.getAttribute('id');
      if (categoryName) {
        updateFocusedCategoryName(categoryName);
      }
    }
  }, []);

  return (
    <div className="category-wrapper">
      {categories.map((category) => {
        return (
          <Clickout key={category.name} onClickout={updateFocusedCategoryName}>
            <div
              id={category.name}
              onMouseEnter={handleMouseEnter}
              className="category-star"
            >
                {category.name}
                <Details detailLines={category.detailLines} />
                <Constellations />
            </div>
          </Clickout>
        );
      })}
    </div>
  );
};

export default CategoryStars;

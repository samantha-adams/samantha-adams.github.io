import { useMemo, useState } from 'react';
import categoriesData from '../assets/categories.json';
import { getRandomOffset } from '../utils/random';
import './CategoryStars.css';

interface Category {
  name: string;
  detailLines: string[][];
  backgroundImage: string;
}

const CategoryStars: React.FC = () => {
  const [focusedCategoryName, setFocusedCategoryName] = useState<string | null>(null);
  const categories: Category[] = categoriesData;

  const categoryPositions = useMemo(() => {
    return categories.map(() => ({
      topOffset: getRandomOffset(20),
      leftOffset: getRandomOffset(20),
    }));
  }, [categories]);

  return (
    <div className="category-grid">
      {categories.map((category, index) => {
        const { topOffset, leftOffset } = categoryPositions[index];

        return (
          <div
            key={category.name}
            onMouseEnter={() => setFocusedCategoryName(category.name)}
            onMouseLeave={() => setFocusedCategoryName(null)}          
            className={`category-star ${focusedCategoryName === category.name ? 'focused' : ''}`}
            style={{
              transform: `translate(${leftOffset}px, ${topOffset}px)`
            } as React.CSSProperties}
          >
            {category.name}
          </div>
        );
      })}
    </div>
  );
};

export default CategoryStars;

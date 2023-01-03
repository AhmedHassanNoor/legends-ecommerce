import "./index.scss";
import CategoryItem from "../category-item";

const CategoryList = ({ categories }) => {
  return (
    <div className="categories-container">
      {(categories || []).map(({ title, id, imageUrl }) => (
        <CategoryItem key={id} title={title} imageUrl={imageUrl} />
      ))}
    </div>
  );
};

export default CategoryList;

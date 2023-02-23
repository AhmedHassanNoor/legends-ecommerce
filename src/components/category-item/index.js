import { CategoryContainer, CategoryBody, BackgroundImage } from "./styles";

const CategoryItem = ({ title, imageUrl }) => {
  return (
    <CategoryContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <CategoryBody>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </CategoryBody>
    </CategoryContainer>
  );
};

export default CategoryItem;

import { DirectoryContainer } from "./styles";

import CategoryItem from "../category-item";

const CategoryList = ({ categories }) => {
  return (
    <DirectoryContainer>
      {(categories || []).map(({ title, id, imageUrl }) => (
        <CategoryItem key={id} title={title} imageUrl={imageUrl} />
      ))}
    </DirectoryContainer>
  );
};

export default CategoryList;

import { CategoryContainer, CategoryBody, BackgroundImage } from "./styles";
import { useNavigate } from "react-router-dom";

const CategoryItem = ({ title, imageUrl, route }) => {
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);
  return (
    <CategoryContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <CategoryBody>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </CategoryBody>
    </CategoryContainer>
  );
};

export default CategoryItem;

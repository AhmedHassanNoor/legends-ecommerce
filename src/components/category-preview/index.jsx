import ProductCard from "../product-card";

import { CategoryPreviewContainer, Title, Preview } from "./styles";
import Spinner from "../spinner";
import { useSelector } from "react-redux";
import { selectCategoriesIsLoading } from "../../store/categories/selector";

const CategoryPreview = ({ title, products }) => {
  const isLoading = useSelector(selectCategoriesIsLoading);

  return (
    <CategoryPreviewContainer>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <h2>
            <Title to={title}>{title.toUpperCase()}</Title>
          </h2>
          <Preview>
            {products
              .filter((_, idx) => idx < 4)
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </Preview>
        </>
      )}
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;

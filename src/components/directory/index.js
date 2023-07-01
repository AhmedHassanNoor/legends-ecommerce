import { DirectoryContainer } from "./styles";

import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/selector";
import ProductCard from "../product-card";

const DirectoryList = () => {
  const categories = useSelector(selectCategoriesMap);
  const products = Object.keys(categories).reduce((acc, key) => {
    acc.push(...categories[key]);
    return acc.sort(() => 0.5 - Math.random());
  }, []);

  return (
    <DirectoryContainer>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </DirectoryContainer>
  );
};

export default DirectoryList;

import { DirectoryContainer } from "./styles";

import { useSelector } from "react-redux";
import { selectCategoriesIsLoading, selectCategoriesMap } from "../../store/categories/selector";
import ProductCard from "../product-card";
import Spinner from "../spinner";
import { Fragment } from "react";

const DirectoryList = () => {
  const categories = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const products = Object.keys(categories).reduce((acc, key) => {
    acc.push(...categories[key]);
    return acc.sort(() => 0.5 - Math.random());
  }, []);

  return (
    <Fragment>
      {isLoading || !products.length ? (
        <Spinner />
      ) : (
        <DirectoryContainer>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </DirectoryContainer>
      )}
      ;
    </Fragment>
  );
};

export default DirectoryList;

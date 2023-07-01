import { useEffect } from "react";
import Directory from "../../components/directory";
import { fetchCategoriesStart } from "../../store/categories/actions";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, [dispatch]);

  return <Directory />;
};

export default Home;

import { createSelector } from "reselect";

const selectedCategoryReducer = (state) => state.categories;

export const selectCategories = createSelector([selectedCategoryReducer], (categories) => categories.categories);

export const selectCategoriesMap = createSelector([selectCategories], (categories) => {
  return categories.reduce((acc, { title, items }) => {
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
});

export const selectCategoriesIsLoading = createSelector(
  [selectedCategoryReducer],
  (categoriesSLice) => categoriesSLice.isLoading
);

import { createSelector } from "reselect";

const selectCurrentUserReducer = (state) => state.user.currentUser;

export const selectCurrentUser = createSelector([selectCurrentUserReducer], (currentUser) => currentUser);

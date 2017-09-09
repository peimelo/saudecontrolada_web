import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as fromLayout from './layout';

export interface LayoutState {
  layout: fromLayout.State;
}

export interface State extends fromRoot.State {
  layout: LayoutState;
}

export const reducers = {
  layout: fromLayout.reducer,
};

export const selectLayoutFeature = createFeatureSelector<LayoutState>('layout');

export const selectLayoutState = createSelector(
  selectLayoutFeature,
  (state: LayoutState) => state.layout
);

export const getShowSidenav = createSelector(
  selectLayoutState,
  fromLayout.getShowSidenav
);

export const isDarkTheme = createSelector(
  selectLayoutState,
  fromLayout.isDarkTheme
);

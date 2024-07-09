import { createSelector } from 'reselect'

const isLoading = (s) => s.loading.isLoading
const isLoaded = (s) => s.loading.isLoaded
const isFailed = (s) => s.loading.isFailed

export const loadingState = createSelector([isLoading, isLoaded, isFailed], (isLoading, isLoaded, isFailed) => ({
  isLoading,
  isLoaded,
  isFailed,
}))

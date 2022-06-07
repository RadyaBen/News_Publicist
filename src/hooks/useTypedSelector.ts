import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../redux/helpers/combineReducers';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
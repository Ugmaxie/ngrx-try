import { compose } from '@ngrx/core/compose';
import { storeLogger } from 'ngrx-store-logger';
import { combineReducers } from '@ngrx/store';

import { myWildReducer } from './reducer';

export default compose(storeLogger(), combineReducers)({
  myWildReducer
});

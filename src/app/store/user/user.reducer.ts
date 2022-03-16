import { User } from './user.models';
import * as fromActions from './user.actions';

export interface UserState {
  entity: User | null;
  uid: string | null;
  loading: boolean | null;
  error: string | null;
}

const initialState: UserState = {
  entity: null,
  uid: null,
  loading: null,
  error: null,
};

export function reducer(
  state = initialState,
  action: fromActions.All | any
): UserState {
  switch (action.type) {
    // Sign In
    case fromActions.Types.SIGN_IN_EMAIL: {
      return { ...state, loading: true };
    }

    case fromActions.Types.SIGN_IN_EMAIL_SUCCESS: {
      return {
        ...state,
        entity: action.user,
        uid: action.uid,
        loading: false,
        error: null,
      };
    }

    case fromActions.Types.SIGN_IN_EMAIL_ERROR: {
      return { ...state, loading: false, error: action.error };
    }

    // Sign In
    case fromActions.Types.SIGN_IN_EMAIL: {
      return { ...state, loading: true };
    }

    case fromActions.Types.SIGN_IN_EMAIL_SUCCESS: {
      return {
        ...state,
        uid: action.uid,
        loading: false,
        error: null,
      };
    }

    case fromActions.Types.SIGN_IN_EMAIL_ERROR: {
      return { ...state, error: action.error, loading: false };
    }

    // Sign Out
    case fromActions.Types.SIGN_OUT_EMAIL: {
      return { ...state, loading: true };
    }

    case fromActions.Types.SIGN_OUT_EMAIL_SUCCESS: {
      return {
        ...initialState
      };
    }

    case fromActions.Types.SIGN_OUT_EMAIL_ERROR: {
      return { ...state, error: action.error, loading: false };
    }

    default: {
      return state;
    }
  }
}

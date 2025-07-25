import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
  switch (action.type) {
    case 'sort': { // by name
      let newState:UserType[] = [...state];
      if (action.payload === 'up') {
        return newState.sort((a, b) => a.name > b.name ? 1 : -1)
      }
      if (action.payload === 'down') {
        return newState.sort((a, b) => a.name > b.name ? -1 : 1)
      }
      return state
    }
    case 'check': {
      return state.filter(el => el.age >= action.payload)
    }
    default:
      return state
  }
}

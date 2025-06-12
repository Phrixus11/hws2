const initState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: ActionsType): InitStateType => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':
        return {...state, themeId: action.id}
        default:
            return state
    }
}

export const changeThemeId = (id: number): any => ({ type: 'SET_THEME_ID', id }) // fix any

type ActionsType = ReturnType<typeof changeThemeId>

type InitStateType = {
    themeId: number
}
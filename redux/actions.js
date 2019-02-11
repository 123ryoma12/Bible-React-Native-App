// action types
export const SETTINGS_FONT_UPDATE = 'SETTINGS_FONT_UPDATE'
export const SETTINGS_DARK_UPDATE = 'SETTINGS_DARK_UPDATE'

// action creators
export const settingsUpdateFont = update => ({
    type: SETTINGS_FONT_UPDATE,
    payload: update,
})

export const settingsUpdateDark = update => ({
    type: SETTINGS_DARK_UPDATE,
    payload: update,
})
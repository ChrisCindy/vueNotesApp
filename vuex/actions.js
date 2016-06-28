/*
 * @Author: chriscindy
 * @Date:   2016-06-17 16:15:05
 * @Last Modified by:   chriscindy
 * @Last Modified time: 2016-06-27 17:15:51
 */

export const addNote = ({ dispatch }) => {
    dispatch('ADD_NOTE')
}

export const editNote = ({ dispatch }, e) => {
    dispatch('EDIT_NOTE', e.target.value)
}

export const deleteNote = ({ dispatch }) => {
  dispatch('DELETE_NOTE')
}

export const updateActiveNote = ({ dispatch }, note) => {
    dispatch('SET_ACTIVE_NOTE', note)
}

export const toggleFavorite = ({ dispatch }) => {
    dispatch('TOGGLE_FAVORITE')
}

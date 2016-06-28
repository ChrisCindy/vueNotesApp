/*
 * @Author: chriscindy
 * @Date:   2016-06-16 18:02:23
 * @Last Modified by:   chriscindy
 * @Last Modified time: 2016-06-28 10:23:45
 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//the root,initial state object
const state = {
    notes: [],
    activeNotes: {}
}

//define the possible mutations that can be applied to our state
const mutations = {
    ADD_NOTE(state) {
        const newNote = {
                text: 'New note',
                favorite: false
            }
            //only mutators can mutate the state
        state.notes.push(newNote)
        state.activeNotes = newNote
    },

    EDIT_NOTE(state, text) {
        state.activeNotes.text = text
    },

    DELETE_NOTE(State) {
        state.notes.$remove(state.activeNotes)
        state.activeNotes = state.notes[0]
    },

    TOGGLE_FAVORITE(state) {
        state.activeNotes.favorite = !state.activeNotes.favorite
    },

    SET_ACTIVE_NOTE(state, note) {
        State.activeNotes = note
    }

}

//create the Vuex instance by combining the state and the mutations objects
//then export the Vuex store for use by our component
export default new Vuex.Store({
    state,
    mutations
})

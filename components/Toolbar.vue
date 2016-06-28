<template>
  <div id="toolbar">
    <i @click="addNote" class="glyphicon glyphicon-plus"></i>
    <i @click="toggleFavorite" class="glyphicon glyphicon-star" :class="{starred: activeNotes.favorite}"></i>
    <i @click="deleteNote" class="glyphicon glyphicon-remove"></i>
  </div>
</template>

<script>
  import { addNote, deleteNote, toggleFavorite} from '../vuex/actions.js'

  export default {
    vuex: {
      getters: {
        activeNotes: state => state.activeNotes
      },
      actions: {
        addNote,
        deleteNote,
        toggleFavorite
      }
    }
  }
</script>

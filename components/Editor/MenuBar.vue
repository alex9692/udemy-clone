<template>
  <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
    <div class="menubar">
      <button
        class="menubar__button"
        :class="{ 'is-active': isActive.bullet_list() }"
        @click="commands.bullet_list"
      >
        <font-awesome-icon
          size="2x"
          :icon="['fas', 'list-ul']"
        ></font-awesome-icon>
      </button>
      <button
        class="menubar__button"
        :class="{ 'is-active': isActive.ordered_list() }"
        @click="commands.ordered_list"
      >
        <font-awesome-icon
          size="2x"
          :icon="['fas', 'list-ol']"
        ></font-awesome-icon>
      </button>
      <button
        class="menubar__button"
        :class="{ 'is-active': isActive.blockquote() }"
        @click="commands.blockquote"
      >
        <font-awesome-icon
          size="2x"
          :icon="['fas', 'quote-right']"
        ></font-awesome-icon>
      </button>
      <button
        class="menubar__button"
        :class="{ 'is-active': isActive.code_block() }"
        @click="commands.code_block()"
      >
        <font-awesome-icon
          size="2x"
          :icon="['fas', 'terminal']"
        ></font-awesome-icon>
      </button>
      <button class="menubar__button" @click="commands.horizontal_rule">
        <font-awesome-icon
          size="2x"
          :icon="['fas', 'ruler-horizontal']"
        ></font-awesome-icon>
      </button>
      <button class="menubar__button" @click="commands.undo">
        <font-awesome-icon
          size="2x"
          :icon="['fas', 'undo-alt']"
        ></font-awesome-icon>
      </button>
      <button class="menubar__button" @click="commands.redo">
        <font-awesome-icon
          size="2x"
          :icon="['fas', 'redo']"
        ></font-awesome-icon>
      </button>
      <button class="button is-success button-save" @click="$emit('save')">
        Save
      </button>
    </div>
  </editor-menu-bar>
</template>
<script>
import { EditorMenuBar } from "tiptap";
export default {
  components: {
    EditorMenuBar
  },
  props: {
    editor: Object
  }
};
</script>
<style scoped lang="scss">
.button-save {
  margin-left: auto;
  background-color: #23d160;
  &:hover {
    background-color: #2bc76c;
  }
  &:disabled {
    cursor: not-allowed;
  }
}
</style>

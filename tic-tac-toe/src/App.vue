<template>
  <div id="app">
    <div class="board">
      <div v-for="(row, rowIndex) in boards" :key="rowIndex">
        <sqaure
          v-for="(col, colIndex) in row"
          :key="rowIndex * 10 + colIndex"
          @square-click="handleClick(rowIndex, colIndex)"
          :mark="col"
        />
      </div>
    </div>
    <div>Player: {{ player }}</div>
  </div>
</template>

<script>
import Sqaure from './components/Sqaure.vue';

const checkWinner = (boards) => {
  
}

export default {
  name: 'App',
  components: {
    Sqaure,
  },
  data() {
    return {
      player: 'O',
      boards: [Array(3), Array(3), Array(3)],
    };
  },
  methods: {
    handleClick(row, col) {
      if (this.boards[row][col]) {
        return;
      }

      this.boards[row][col] = this.player;
      this.$forceUpdate();
      this.player = this.player === 'O' ? 'X' : 'O';
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
}

.board {
  display: flex;
}
</style>

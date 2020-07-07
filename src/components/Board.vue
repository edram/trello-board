<template>
  <div class="board">
    <div
      id="list1"
      class="board-list"
      @dragover="handleCardDragover"
      @drop="handleCardDrop($event,list1)"
    >
      <div class="board-list__header">Doing</div>
      <div
        :id="'card'+card.id"
        draggable
        @dragstart="handleCardDragstart($event,index,list1)"
        :data-index="index"
        class="board-card"
        v-for="(card,index) in list1"
        :key="card.id"
      >{{card.name}}</div>
    </div>

    <div
      id="list2"
      class="board-list"
      @dragover="handleCardDragover"
      @drop="handleCardDrop($event,list2)"
    >
      <div class="board-list__header">Done</div>
      <div
        :id="'card'+card.id"
        draggable
        @dragstart="handleCardDragstart($event,index,list2)"
        class="board-card"
        v-for="(card,index) in list2"
        :key="card.id"
      >{{card.name}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data: function() {
    return {
      list1: [
        { id: 1, name: "card1" },
        { id: 2, name: "card2" },
        { id: 3, name: "card3" },
        { id: 4, name: "card4" },
        { id: 5, name: "card5" }
      ],
      list2: [],

      // 移动卡片记录响应的信息
      dragCardList: null, // 移动卡片所在的列表
      dragCardIndex: null // 移动卡片在当前列表中的索引
    };
  },
  methods: {
    handleCardDragstart(ev, index, list) {
      console.log(ev);
      // ev.currentTarget.style.background = "#000";
      this.dragCardIndex = index;
      this.dragCardList = list;

      ev.dataTransfer.setData("text/plain", ev.target.id);
    },
    handleCardDragover(ev) {
      // ev.currentTarget.style.background = "lightblue";

      // 指定放置目标
      // https://developer.mozilla.org/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#droptargets
      ev.preventDefault();
    },
    handleCardDrop(ev, list) {
      console.log("drop");
      const targetEl = ev.target;

      const { dragCardIndex, dragCardList } = this;
      const dragCard = dragCardList[dragCardIndex];
      // 从一个列表移动到另一个列表
      if (dragCardList !== list) {
        dragCardList.splice(dragCardIndex, 1);
        list.push(dragCard);
      } else {
        // 交换，修改顺序
        const { index } = targetEl.dataset;
        const swapCard = list[index];

        this.$set(list, index, dragCard);
        this.$set(list, dragCardIndex, swapCard);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.board {
  overflow: hidden;
}
.board-list {
  float: left;
  width: 250px;
  background: #ebecf0;
  border-radius: 3px;
  padding: 0 10px;
  margin: 0 10px;
}
.board-card {
  margin-bottom: 10px;
  background: #fff;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.board-list__header {
  text-align: left;
  height: 50px;
  line-height: 50px;
  font-size: 20px;
  font-weight: 600;
}
</style>

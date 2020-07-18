# trello-board

使用 vue 和 html 原生事件简单实现 **trello** 的卡片效果

## 效果展示

[Demo](https://edram.github.io/trello-board/)

[源代码](https://git.jiker-inc.com/one-plus-project/trello-board)

## 概念

- 卡片 看板的最小单元，卡片必须有一个载体(看板)
- 看板 卡片的载体，一个看板可以有N个卡片

## 原理

### html 实现机制

- draggable : 声明元素是否允许使用 拖放操作API 拖动的属性
- ondragstart : 当用户开始拖动一个元素时触发的事件
- ondrop: 当元素被释放时触发的事件

### 实现过程

#### 准备工作

- 先定义两个卡板中的数据 **list1** 和 **list2** 分别记录看板中初始的卡片信息
- 再定义两个操作卡片的交互数据 **dragCardList** 和 **dragCardIndex** 分别记录当前拖拽卡片所在的看板和当前卡片在看板中的索引

```
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
  }
```

#### 渲染看板和卡片

``` vue
<template>
  <div class="board">
    <div
      id="list1"
      class="board-list"
    >
      <div class="board-list__header">Doing</div>
      <div
        :id="'card'+card.id"
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
        :data-index="index"
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

```


#### 卡片增加 dragstart 事件,记录卡片所在的看板和索引

```
  methods: {
    handleCardDragstart(ev, index, list) {
      this.dragCardIndex = index;
      this.dragCardList = list;
    }
  }
```

#### 看板增加 drop 事件，实现卡片从一个看板移动到另一个看板，或者在同一个看板内排序的功能

```
  methods:{
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
```

## 常见问题

### drop 事件未执行

> [指定放置目标](https://developer.mozilla.org/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#droptargets)
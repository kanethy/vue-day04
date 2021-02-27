var todoList={
  props:["tasks"],
  template:`<ul>
    <todo-item v-for="(t,i) of tasks" :key="i" :t="t" :i="i"></todo-item>
  </ul>`,
  components:{ todoItem }
  //自动翻译为 todo-item
}
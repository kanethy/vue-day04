Vue.component("todo",{
  template:`<div>
    <h1>待办事项列表</h1>
    <todo-add></todo-add>
    <todo-list></todo-list>
  </div>`,
  components:{ todoAdd, todoList }
  //自动翻译  todo-add   todo-list
})
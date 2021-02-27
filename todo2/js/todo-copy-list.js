var todoList={
    props:["tasks"],
    //插槽  <template slot="task">{{task}}</template> 属性只用于显示，不会反复利用
    //子传参给父亲  @del="del"
    template:`<ul>
        <todo-items v-for="(task,i) of tasks" :key="i" :i="i" @del="del">
            <template slot="task">{{task}}</template>
        </todo-items>
    </ul>`,
    methods:{
        //定义事件函数 
        del(i){
            this.tasks.splice(i,1)
        }
    },
    components:{todoItems}
}
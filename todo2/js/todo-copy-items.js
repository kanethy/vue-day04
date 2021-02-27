var todoItems={
    props:["i"],
    //插槽  <slot name="task"></slot>   属性只用于显示，不会反复利用
    //子传参给父亲  @click="del"  绑定事假处理函数
    template:`<li>{{i+1}}-<slot name="task"></slot><a href="javascript:;" @click="del">×</a></li>`,
    methods:{
        del(){
            //$emit  关键词  del父亲定义的事件函数名
            this.$emit("del",this.i)
        }
    }
}
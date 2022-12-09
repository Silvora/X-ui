import Message from "./Message.vue"

import {createVNode,render} from "vue"

//let d = Date.now()
// const div=document.createElement('div')
// div.setAttribute('class','my-message-container')
// document.body.appendChild(div)
const div=document.createElement('div')
div.setAttribute('class','message')



//let messageList= []

export default ({type='info',message='',time=1500})=>{



  let timer:any=null
  //createVNode 用于创建一个虚拟节点
  // 参数1 支持组件
  // 参数2 表示传递给组件的选项
const vnode= createVNode(Message,{type,message})
//把虚拟的节点渲染到页面的DOM中即可
// render函数的参数
//参数一：表示表示需要渲染的内容（虚拟节点）
// 参数二：表示渲染的目标位置 （DOM元素）
   render(vnode,div)
   document.body.appendChild(div)


//    let id = Date.now()
//    messageList.push({
//     id:id,
//     message:message
//    })

   //console.log(messageList)

 // 希望1s后消失
  clearTimeout(timer)
   timer=setTimeout(()=>{
     // 清空div里面的内容
      render(null,div)
   },time)
}
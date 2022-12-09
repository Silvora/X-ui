<template>

    <div class="alert alert--success" v-if="props.type == 'success'">
        <svg class="alert__icon" width="64" height="64" viewBox="0 0 64 64" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <circle class="alert__icon-path" cx="32" cy="32" r="30.5" stroke="currentColor"></circle>
            <path class="alert__icon-path alert__icon-path--type" d="M15 33.5L25 43.5L48.5 20" stroke="currentColor">
            </path>
        </svg>
        <div class="alert__message">{{ props.message }}</div>
        <div class="alert__close">&times;</div>
    </div>
    <div class="alert alert--danger" v-if="props.type == 'danger'">
        <svg class="alert__icon" width="64" height="64" viewBox="0 0 64 64" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <circle class="aalert__icon-path" cx="32" cy="32" r="30.5" stroke="currentColor" stroke-width="5">
            </circle>
            <path class="alert__icon-path alert__icon-path--type" d="M20 44L44 20" stroke="currentColor"></path>
            <path class="alert__icon-path alert__icon-path--type" d="M44 44L20 20" stroke="currentColor"></path>
        </svg>
        <div class="alert__message">{{ props.message }}</div>
        <div class="alert__close">&times;</div>
    </div>
    <div class="alert alert--warning" v-if="props.type == 'warning'">
        <svg class="alert__icon" width="64" height="64" viewBox="0 0 64 64" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <circle class="alert__icon-path" cx="32" cy="32" r="30.5" stroke="currentColor"></circle>
            <path class="alert__icon-path alert__icon-path--type" d="M32 19V38" stroke="currentColor"></path>
            <path class="alert__icon-path alert__icon-path--type" d="M32 41L32 45" stroke="currentColor"></path>
        </svg>
        <div class="alert__message">{{ props.message }}</div>
        <div class="alert__close">&times;</div>
    </div>
    <div class="alert" v-if="props.type == 'info'">
        <svg class="alert__icon" width="64" height="64" viewBox="0 0 64 64" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <circle class="alert__icon-path" cx="32" cy="32" r="30.5" fill="currentColor" style="opacity: .2">
            </circle>
            <circle class="alert__icon-path" cx="32" cy="32" r="30.5" stroke="currentColor"></circle>
        </svg>
        <div class="alert__message">{{ props.message }}</div>
        <div class="alert__close">&times;</div>
    </div>

</template>

<script lang="ts" setup>
import { ref, unref } from 'vue';

const props = defineProps({
    type: {
        type: String,
        default: 'info'
    },
    message: {
        type: String,
        default: ''
    }
})
// 生成id
//let id = 0
//const uid = () => "message" + id++
// 消息列表
// const messagesList = ref<any>([])


// //console.log(props, Date.now())

// messagesList.value.push({
//     id: Date.now(),
//     message: props.message
// })

// console.log(messagesList)

// 添加消息对象
// const add = (props.message) => {
//     const id = uid()
//     const _message = {
//         ...props.message,
//         id
//     }
//     unref(messages).push(_message)
//     const { duration = 3 } = message
//     // 设置定时器
//     const timer = setTimeout(() => {
//         clearTimeout(timer)
//         remove(id)
//     }, duration * 1000)
// }

// // 根据 id 删除消息对象
// const remove = (id) => {
//     messagesList.value = unref(messagesList).filter(messagesList => messagesList.id !== id)
// }


// defineExpose(['add'])

//   clearTimeout(timer)
//    timer=setTimeout(()=>{
//      // 清空div里面的内容
//       //render(null,div)

//    },15000)

console.log(props)
</script>

<style scoped lang="scss">
.alert {
    background: white;
    width: 30%;
    display: flex;
    padding: 1rem;
    align-items: center;
    border-radius: 0.8rem;
    border: 2px solid;
    margin-bottom: 1rem;
    position: relative;
    box-shadow: 0px 5px 12px rgba(0, 0, 0, 0.04), 0px 12px 25px rgba(0, 0, 0, 0.07);
    -webkit-animation: transitionIn 200ms ease forwards;
    animation: transitionIn 200ms ease forwards;
    transition: all 200ms ease;
    position: fixed;
    top: 2%;
    left: 35%;
    z-index: 999;
}

.alert__message {
    color: #677b7a;
}

.alert__close {
    width: 1.3rem;
    height: 1.3rem;
    line-height: 1.3rem;
    color: #677b7a;
    text-align: center;
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    cursor: pointer;
    border-radius: 0.4rem;
}

.alert__close:hover,
.alert__close:focus {
    background: rgba(103, 123, 122, 0.2);
}

.alert__icon {
    margin-right: 1rem;
    width: 36px;
    height: 36px;
    -webkit-animation: fade 500ms linear forwards;
    animation: fade 500ms linear forwards;
}

.alert__icon-path {
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    stroke-width: 4px;
    -webkit-animation: dash 1s ease forwards;
    animation: dash 1s ease forwards;
}

.alert__icon-path--type {
    -webkit-animation-delay: 300ms;
    animation-delay: 300ms;
    -webkit-animation-duration: 5s;
    animation-duration: 5s;
}

.alert--success {
    color: #39D7B3;
    border-color: #39D7B3;
}

.alert--warning {
    color: #FFBA4B;
    border-color: #FFBA4B;
}

.alert--danger {
    color: #FF4555;
    border-color: #FF4555;
}

@-webkit-keyframes dash {
    from {
        stroke-dashoffset: 1000;
    }

    to {
        stroke-dashoffset: 0;
    }
}

@keyframes dash {
    from {
        stroke-dashoffset: 1000;
    }

    to {
        stroke-dashoffset: 0;
    }
}




.actions__title {
    width: 100%;
    text-align: center;
    padding-bottom: 0.5rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-size: 85%;
}

.actions .button {
    display: block;
    width: 25%;
}

.button {
    font-family: inherit;
    background: transparent;
    color: white;
    background: #677b7a;
    border: 0;
    padding: 1rem;
    cursor: pointer;
    margin: 0;
}

.button:hover {
    opacity: 0.8;
}

.button--success {
    background: #39D7B3;
}

.button--success:focus,
.button--success:active {
    box-shadow: 0px 0px 0px 3px rgba(57, 215, 179, 0.4);
}

.button--danger {
    background: #FF4555;
}

.button--danger:focus,
.button--danger:active {
    box-shadow: 0px 0px 0px 3px rgba(255, 69, 85, 0.4);
}

.button--warning {
    background: #FFBA4B;
}

.button--warning:focus,
.button--warning:active {
    box-shadow: 0px 0px 0px 3px rgba(255, 186, 75, 0.4);
}

.button:focus,
.button:active {
    outline: 0;
}

@-webkit-keyframes fade {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@keyframes fade {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}
</style>
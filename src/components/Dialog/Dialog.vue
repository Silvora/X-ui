<template>
    <transition name="dialog">
        <div class="modal " data-modal v-show="props.modelValue" @click.self="handleClose">
            <div class="modal_card">
                <div class="card-details">
                    <p class="text-title">{{ props.title }}</p>
                    <div class="text-body">
                        <slot></slot>
                    </div>
                </div>
                <button class="card-button-success" @click="handleOk">确认</button>
                <button class="card-button-cancel" @click="handleClose">取消</button>
            </div>

        </div>
    </transition>

</template>

<script lang="ts" setup>

const props = defineProps({
    title: {
        type: String,
        default: ''
    },
    modelValue: {
        type: Boolean,
        default: false
    }
})

const emit = defineEmits(['update:modelValue', 'ok'])
const handleClose = () => {
    //console.log(emit)

    emit('update:modelValue', false)
}
const handleOk = () => {
    //console.log("first", emit)

    emit('ok')
}
//const isShow = props.visible ? 'black' : 'none'

console.log(props)
</script>

<style scoped lang="scss">
.dialog-enter-active {
    animation: dialog 0.5s;
}

.dialog-leave-active {
    animation: dialog 0.5s reverse;
}

@keyframes dialog {
    0% {
        opacity: 0;
        transform: translateY(-20px);
    }

    100% {
        opacity: 1;
    }
}

.modal {
    width: 100%;
    height: 100vh;
    background-color: rgba(255, 251, 214, 0.1);
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999;

    //cursor: pointer;
    //display: none;
    //left: 50%;
    //position: absolute;
    //top: 50%;
    //z-index: 5;
    .modal_card {
        position: absolute;
        top: 30%;
        left: 20%;

        width: 500px;
        height: auto;
        border-radius: 20px;
        background: #f5f5f5;
        padding: 1.8rem;
        border: 2px solid #c3c6ce;
        overflow: visible;

        .card-details {
            color: black;
            height: 100%;
            //gap: .5em;
            //display: grid;
            //place-content: center;
        }

        .card-button-success {
            transform: translate(-50%, 25%);
            width: 20%;
            border-radius: 1rem;
            border: none;
            background-color: #1abc9c;
            color: #fff;
            font-size: 1rem;
            padding: .5rem 1rem;
            position: absolute;
            left: 35%;
            bottom: 0;
            opacity: 0;
            transition: 0.3s ease-out;
        }

        .card-button-cancel {
            transform: translate(-50%, 25%);
            width: 20%;
            border-radius: 1rem;
            border: none;
            background-color: #8e44ad;
            color: #fff;
            font-size: 1rem;
            padding: .5rem 1rem;
            position: absolute;
            left: 65%;
            bottom: 0;
            opacity: 0;
            transition: 0.3s ease-out;
        }

        .text-body {
            color: rgb(134, 134, 134);
        }

        /*Text*/
        .text-title {
            font-size: 1.5em;
            font-weight: bold;
        }

        /*Hover*/
        &:hover {
            border-color: #008bf8;
            box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.25);
        }

        &:hover .card-button-success,
        &:hover .card-button-cancel {
            transform: translate(-50%, 50%);
            opacity: 1;
        }
    }


}
</style>
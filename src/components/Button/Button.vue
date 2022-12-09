<template>

    <button class="x-button" :class="[props.type, props.fill ? 'fill' : '', props.animation]">
        <span class="x-button-icon" v-if="props.icon">{{ props.icon }}</span>
        <span>
            <slot></slot>
        </span>
    </button>

</template>

<script lang="ts" setup>
import { ref } from 'vue';
import resultColor from "../../utils/theme"

const props = defineProps({
    type: { type: String, default: "default" }, fill: {
        type: Boolean,
        default: false
    },
    icon: {
        type: String,
        default: ''
    },
    animation: {
        type: String,
        default: ''
    }
})


const color = resultColor(props.type)

//const typeColor = "--" + props.type

//

// const theme={
//     typeColor:"--" + props.type
// }
//console.log(typeColor)


//console.log(props)
</script>

<style lang="scss" scoped>
.x-button {
    box-sizing: border-box;
    appearance: none;
    background-color: transparent;
    border: 2px solid v-bind(color);
    border-radius: 0.6em;
    color: v-bind(color);
    cursor: pointer;
    //display: flex;
    //align-self: center;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1;
    margin: 20px;
    padding: 1.2em 2.8em;
    text-decoration: none;
    text-align: center;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;

    &:hover,
    &:focus {
        color: #fff;
        outline: 0;
    }

    .x-button-icon {
        padding-right: 8px;
    }

    &.fill {
        background-color: v-bind(color);
        color: #fff;

        &:hover,
        &:focus {
            color: #000;
            outline: 0;
        }
    }


    &.border:hover {
        // background: linear-gradient(45deg,
        // #FF0000,
        // #002BFF,
        // #FF00C8,
        // #002BFF,
        // #FF0000,
        // #002BFF,
        // #FF00C8,
        // #002BFF);
        transition: 100ms;

        //background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
        color: #82ffc9;
        box-shadow: inset 0 0 10px rgba(27, 253, 156, 0.6), 0 0 9px 3px rgba(27, 253, 156, 0.2);
    }

    &.font:hover {
        animation: .1s linear font;
    }

    @keyframes font {
        0% {
            //font-size: 20px;
            transform: scale(0.8);
        }

        80% {
            transform: scale(1.5);
        }

        100% {
            transform: scale(1);
        }
    }

    &.offset:hover {
        box-shadow: 0 0 0 0 v-bind(color), inset 6em 3.5em 0 0 v-bind(color);
    }

}
</style>
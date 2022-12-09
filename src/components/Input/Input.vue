<template>

    <div class="x-input" v-if="!props.styles">
        <span class="iconLeft" v-if="props.search === 'left'">
            🔍
        </span>

        <input :type="props.type" :placeholder="props.placeholder"
            :style="{ paddingLeft: props.search === 'left' ? '2.5rem' : '1rem', paddingRight: props.search === 'right' ? '2.5rem' : '1rem' }" />
        <span class="iconRight" v-if="props.search === 'right'">
            🔍
        </span>
    </div>

    <div class="x-input-styles" v-else>
        <input :type="props.type" required :value="props.modelValue" @input="handelInput">
        <label>
            <span v-for="(v, i) in props.label.split('')" :style="{ transitionDelay: i * 50 + 'ms' }" :key="i">{{ v
            }}</span>
        </label>
    </div>

</template>

<script lang="ts" setup>

const props = defineProps({
    type: {
        type: String,
        default: "text"
    },
    modelValue: {
        type: String,
        default: ""
    },
    search: {
        type: String,
        default: ''
    },
    placeholder: {
        type: String,
        default: ''

    },
    label: {
        type: String,
        default: 'Username'
    },
    styles: {
        type: String,
        default: ''
    }
})
//console.log(props)
const emit = defineEmits(['update:modelValue'])
const handelInput = (e: any) => {
    ///console.log(props.modelValue, e.target.value)
    emit('update:modelValue', e.target.value)
}

</script>

<style scoped lang="scss">
.x-input {
    display: flex;
    line-height: 28px;
    align-items: center;
    position: relative;
    max-width: 190px;

    & input {
        width: 100%;
        height: 40px;
        line-height: 28px;
        padding: 0 1rem;
        // padding-left: 2.5rem;
        border: 2px solid transparent;
        border-radius: 8px;
        outline: none;
        background-color: #f3f3f4;
        color: #0d0c22;
        transition: .3s ease;
    }

    & input::placeholder {
        color: #9e9ea7;
    }

    & input:focus,
    & input:hover {
        outline: none;
        border-color: #3498db;
        background-color: #fff;
        box-shadow: 0 0 0 4px rgb(234 76 137 / 10%);
    }

    & .iconLeft {
        position: absolute;
        left: 1rem;
        fill: #9e9ea7;
        width: 1rem;
        height: 1rem;
        line-height: 20px;
    }

    & .iconRight {
        position: absolute;
        right: 1rem;
        fill: #9e9ea7;
        width: 1rem;
        height: 1rem;
        line-height: 20px;
    }
}


.x-input-styles {
    position: relative;
    margin: 20px 0 40px;
    width: 190px;

    & input {
        background-color: transparent;
        border: 0;
        border-bottom: 2px #fff solid;
        display: block;
        width: 100%;
        padding: 15px 0;
        font-size: 18px;
        color: #fff;
    }

    & input:focus,
    & input:valid {
        outline: 0;
        border-bottom-color: #fff;
    }

    & label {
        position: absolute;
        top: 15px;
        left: 0;
        pointer-events: none;
    }

    & label span {
        display: inline-block;
        font-size: 18px;
        min-width: 5px;
        color: #fff;
        transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }

    & input:focus+label span,
    & input:valid+label span {
        color: fff;
        transform: translateY(-30px);
    }
}
</style>
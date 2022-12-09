<template>

  <div>
    <X-Button animation="border" @click="handleDialog">default</X-Button>
    <X-Button type="primary" icon="✍">primary</X-Button>
    <X-Button type="info" animation="font">info</X-Button>
    <X-Button type="danger" fill @click="handleMsg">danger</X-Button>
    <X-Button type="warning" animation="offset">warning</X-Button>
    <X-Button type="success" fill @click="handleOk">success</X-Button>

  </div>
  <div>
    <X-Input search="left" placeholder="input"></X-Input>
    <X-Input search="right" type="password"></X-Input>
    <X-Input styles="border" label="账号" v-model="name"></X-Input>
  </div>

  <div>
    <X-Dialog title="Model" v-model="visible" @ok="ok">
      <p>dsadsa</p>
      <X-Input styles="border" label="账号" v-model="name"></X-Input>
    </X-Dialog>
  </div>



</template>

<script lang="ts" setup>
import { ref } from 'vue';

import Message from "./components/Message/index"
// import {} from "vue"
const name = ref("")
const handleOk = () => {
  console.log(name.value)
}


const visible = ref(false)

const handleDialog = () => {
  visible.value = !visible.value
  console.log(visible.value)
}

const Close = (value: any) => {
  visible.value = value
}

const ok = () => {
  console.log(name.value)
  visible.value = !visible.value
  // console.log("first")
}

const handleMsg = () => {
  Message({
    type: "success",
    message: "aaaa",
  })

}

</script>

<style scoped>

</style>
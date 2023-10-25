<template>
  <div>
    <h1>あなたは17才です</h1>

    <p>生年月日を入力してください</p>
    <el-config-provider :locale="ja">
      <el-date-picker
      v-model="state.date"
      type="date"
      placeholder="日付を選択して下さい"
      :default-value="new Date(2000, 1, 1)"
      :change="dateChange()"
    />
  </el-config-provider>

  <p>名前を入力してください</p>
  <el-input v-model="state.name" style="width:300px;"></el-input>
  
    <div v-if="state.status === 'selected'">
      <p>あなたは10進数で数えると{{ state.age }}才です。</p>
      <p>あなたは{{ state.base }}進数で数えると17才です！</p>
      <el-button @click="tweet()">ツイート(Xでポスト)する</el-button>
    </div>
    <div v-if="state.status === 'error'">
      <p>エラー: あなたは若すぎるので17才になれません</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import ja from 'element-plus/dist/locale/ja.mjs'

export default defineComponent({
  setup() {

    const state = reactive({
      date: '',
      age: '',
      base: '',
      name: '',
      status: 'notselect', // 'notselect' | 'selected' | 'error'
    })
    const dateChange = () => {
      if (!state.date) return;
      const today = new Date();
      const birthday = new Date(state.date)
      let age = today.getFullYear() - birthday.getFullYear()
      const thisYearBirthDay = new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate())
      if (today < thisYearBirthDay) {
        age--;
      }
      state.age = `${age}`
      if (15 <= age) {
        state.base = `${age - 7}`
        state.status = 'selected'
      } else {
        state.base = ''
        state.status = 'error'
      }
    }

    const tweet = () => {
      const text = `${state.name ? state.name : 'わたし'}は${state.base}進数で数えると17才です!`
      const tag = ['17才', 'n進数', `${state.base}進数`, 'n進数17才メーカー']
      const url = 'https://seventeer.strawberrymilk.dev'
      window.open(`https://twitter.com/intent/tweet?text=${text}${tag.map(t => {return '%20%23'+ t}).join('')}&url=${url}`, '_blank');
    }

    return {
      state,
      dateChange,
      tweet,
      ja,
    }
  },
})
</script>

<template>
  <div :id="$style.main">
    <div :id="$style.sky">
      <h1>n進数17才メーカー</h1>
    </div>

    <div :id="$style.contents">
      <div :class="$style.input">
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
      </div>

      <div :class="$style.input">
        <p>名前を入力してください</p>
        <el-input v-model="state.name"></el-input>
      </div>

      <el-button :class="$style.el_button" @click="showResult()"
        >結果を見る</el-button
      >

      <div v-if="state.status === 'selected'">
        <p>
          {{ state.name ? state.name : 'あなた' }}は10進数で数えると{{
            state.age
          }}才です。
        </p>
        <p>でも{{ state.base }}進数で数えると17才です!</p>
        <el-button
          :id="$style.tweetButton"
          :class="$style.el_button"
          color="#1da1f2"
          @click="tweet()"
          >ツイート(Xでポスト)する</el-button
        >
      </div>

      <div v-if="state.status === 'error'">
        <p>エラー: あなたは若すぎるので17才になれません</p>
      </div>

      <CrackerAnimation
        v-if="state.status === 'selected'"
        :id="$style.cracker1"
      />
      <CrackerAnimation
        v-if="state.status === 'selected'"
        :id="$style.cracker2"
      />
      <div :id="$style.credit">
        <p>
          created:
          <a href="https://twitter.com/strawbeRinMilk">rin;</a>
        </p>
        <p>designed: <a href="https://twitter.com/Masstate">Masstate</a></p>
        <p>
          <a href="https://strawberrymilk.dev">strawberrymilk.dev</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, nextTick } from 'vue';
import ja from 'element-plus/dist/locale/ja.mjs';
import CrackerAnimation from '~/components/cracker.vue';

export default defineComponent({
  components: { CrackerAnimation },
  async setup() {
    const state = reactive({
      date: '',
      age: '',
      base: '',
      name: '',
      status: 'notselect', // 'notselect' | 'selected' | 'error'
    });

    const dateChange = (): void => {
      if (state.status === 'notselect') return;
      if (!state.date) return;
      const today = new Date();
      const birthday = new Date(state.date);
      let age = today.getFullYear() - birthday.getFullYear();
      const thisYearBirthDay = new Date(
        today.getFullYear(),
        birthday.getMonth(),
        birthday.getDate()
      );
      if (today < thisYearBirthDay) {
        age--;
      }
      state.age = `${age}`;
      if (age >= 15) {
        state.base = `${age - 7}`;
        state.status = 'selected';
      } else {
        state.base = '';
        state.status = 'error';
      }
    };

    const showResult = (): void => {
      if (!state.date) return;
      state.status = 'selected';
      dateChange();
      nextTick(() => {
        state.status = 'notselect';
        nextTick(() => {
          state.status = 'selected';
        });
      });
    };

    const tweet = (): void => {
      const text = `${state.name ? state.name : 'わたし'}は${
        state.base
      }進数で数えると17才です! ${encodeURIComponent('\n')}Powerd by @strawberinmilk${encodeURIComponent('\n')}`;
      const tag = ['17才', 'n進数', `${state.base}進数`, 'n進数17才メーカー'];
      const url = 'https://seventeen.strawberrymilk.dev';
      window.open(
        `https://twitter.com/intent/tweet?text=${text}${tag
          .map((t) => {
            return '%20%23' + t;
          })
          .join('')}&url=${url}`,
        '_blank'
      );
    };

    return {
      state,
      dateChange,
      showResult,
      tweet,
      ja,
    };
  },
});
</script>

<style lang="scss" module>
:root {
  --contents-width: 300px;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'DotGothic16', serif;
}

#main {
  text-align: center;
}

#contents {
  position: relative;
  height: calc(100vh - 70px);
  width: var(--contents-width);
  margin: 0 auto;
}

#sky {
  position: relative;
  margin-top: -21px;
  height: 70px;
  width: 100%;
  background-color: #73a5f1;
  color: white;
  h1 {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -70%);
  }
}

.input {
  background-color: rgb(242, 143, 139);
  font-size: 1.4em;
  width: var(--contents-width);
  margin: 10px auto;
  padding: 10px;
  color: white;
}

.el_button {
  font-family: 'DotGothic16', serif;
}
#tweetButton {
  color: #fff;
}

#cracker1 {
  position: absolute;
  left: 20px;
  transform: rotate(30deg);
}
#cracker2 {
  position: absolute;
  right: 20px;
  transform: rotate(-30deg);
}

#credit {
  position: absolute;
  text-align: center;
  bottom: 0px;
  width: var(--contents-width);
  margin: 0 auto;
}
</style>

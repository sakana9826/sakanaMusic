<script setup lang="ts">
import { ref } from 'vue'
import router from '@/router'

const client_id = ref('');
const client_secret = ref('');

function login(){
      router.push({ name: 'home' });
}

</script>

<template>
  <div class="bg-white dark:bg-gray-900">
    <div class="flex justify-center h-screen">
      <div class="hidden lg:block lg:w-2/3 bg-center bg-no-repeat bg-cover" style="background-image: url(/login.png);">
      <div class="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
          <div>
            <h2 class="text-4xl font-bold text-white"></h2>

            <p class="max-w-xl mt-3 text-gray-300">为什么要演奏春日影！</p>
            <p class="max-w-xl mt-3 text-gray-300">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;——長崎 そよ</p>
          </div>
        </div>
      </div>

      <div class="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
        <div class="flex-1">
          <div class="text-center">
            <h2 class="text-4xl font-bold text-center text-gray-700 dark:text-white">鱼 音</h2>

            <p class="mt-3 text-gray-500 dark:text-gray-300">准备好进入音乐的世界吗?</p>
          </div>

          <div class="mt-8">
            <form @submit=login>
              <div>
                <label for="email" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Client Id</label>
                <input v-model="client_id"  name="email" id="email" placeholder="example@example.com" class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
              </div>

              <div class="mt-6">
                <div class="flex justify-between mb-2">
                  <label for="password" class="text-sm text-gray-600 dark:text-gray-200">Client Secret</label>
                  <a href="#" class="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline">Forgot?</a>
                </div>

                <input v-model="client_secret" type="password" name="password" id="password" placeholder="Your Password" class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
              </div>

              <div class="mt-6">
                <button
                  type="submit"
                  class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                  Sign in
                </button>
              </div>

            </form>

            <p class="mt-6 text-sm text-center text-gray-400">Don&#x27;t have an account yet? <a href="#" class="text-blue-500 focus:outline-none focus:underline hover:underline">Sign up</a>.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
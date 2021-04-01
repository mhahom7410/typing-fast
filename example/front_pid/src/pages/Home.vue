<template>
    <div class="w-full h-full flex justify-center align-middle p-4">
      <div class="w-1/4 bg-gray-200 p-4">
        <label class="block">
          <div class="flex justify-between">
            <span class="text-gray-700"><b>PID</b></span>
            <span class="ml-auto text-red-400">{{ pid.length }}/{{ maxlength }}</span>
          </div>
          <input v-model="pid" type="text" :maxlength="maxlength" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="">
        </label>
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const pid = ref('')
    const maxlength = 13

    // write validate logic |or| use favorite form validator library, never mind depends on your, we have only one goal

    return { pid, maxlength }
  }
})
</script>
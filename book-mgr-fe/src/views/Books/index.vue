<template>
  <div>
    <a-card>
      <h2>图书列表</h2>
      <a-divider></a-divider>
    </a-card>
    <br />
    <space-between>
      <div class="search">
        <a-input-search placeholder="根据书名搜索" enter-button />
      </div>
      <a-button>添加一条</a-button>
    </space-between>
    <a-divider></a-divider>

    <a-table :dataSource="dataSource" :columns="columns" />
  </div>
</template>

<script src="./index.js">
</script>

<style lang="sass" scoped >
    @import './index.scss'
</style>

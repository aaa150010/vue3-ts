<template>
  <el-pagination
    :page-sizes="[100, 200, 300, 400]"
    layout="total, sizes, prev, pager, next, jumper"
    :total="400"
  />
  <svg>
    <use xlink:href="#icon-phone" fill="red"></use>
  </svg>
  引入svg
</template>
<script setup lang="ts"></script>
<style>
* {
  margin: 0;
  padding: 0;
}
</style>

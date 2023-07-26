<template>
  <el-pagination
    :page-sizes="[100, 200, 300, 400]"
    layout="total, sizes, prev, pager, next, jumper"
    :total="400"
  />
</template>
<script setup lang="ts"></script>
<style>
* {
  margin: 0;
  padding: 0;
}
</style>

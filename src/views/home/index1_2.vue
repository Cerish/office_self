<template>
    <div>
        <el-button v-loading="true">提交训练</el-button>
        <el-button><div class="train" v-loading="true"></div><span>训练中</span></el-button>
    </div>
</template>

<script>
export default {
    name: 'index1_2'
}
</script>

<style>
.el-button {
    border-radius: 0;
    padding: 10px;
    font-size: 14px;
}
.train{
    display: inline-block;
    /* width: 20px;
    height: 20px; */
}
</style>
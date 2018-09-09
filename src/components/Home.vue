<template>
  <f7-page>
    <f7-navbar bg-color="pink">
      <f7-nav-left back-link-url="/rank" back-link="Back" :sliding="true">
      </f7-nav-left>
      <f7-nav-title>转糖用户协议</f7-nav-title>
    </f7-navbar>
    <div page-content class="certificate-content">
        <p>转糖平台用户协议(第一版)<br/>
        版本生效日期：2018年1月1日</p>
        <h3>特别提示:</h3>
        <p>&nbsp;&nbsp;欢迎您与众神平台经营者(详见定义条款)共同签署本《众神平台服务协议》</p>
    </div>
  </f7-page>
</template>  

<script>
import {
  f7Page,
  f7Navbar,
  f7NavLeft,
  f7NavTitle,
  f7NavRight,
  f7Icon
} from "framework7-vue";

export default {
  components: {
    f7Page,
    f7Navbar,
    f7NavLeft,
    f7NavTitle,
    f7NavRight,
    f7Icon
  }
};
</script>

<style scoped>
.certificate-content {
  padding: 0 5px;
  margin-top: 5px;
}
</style>

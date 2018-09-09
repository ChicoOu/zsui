<template>
  <f7-page>
    <f7-navbar title="Not found" backLink="Back"></f7-navbar>
    <f7-block strong>
      <p>很抱歉</p>
      <p>无法找到请求内容.</p>
    </f7-block>
  </f7-page>
</template>

<script>
import { f7Page, f7Navbar, f7Block } from "framework7-vue";
export default {
  components: {
    f7Page,
    f7Navbar,
    f7Block
  }
};
</script>
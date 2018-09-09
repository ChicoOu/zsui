<template>
  <!-- Main Framework7 App component where we pass Framework7 params -->
  <f7-app :params="f7params">
    <!--f7-statusbar></f7-statusbar-->
    <!--f7-panel left cover>
      <f7-view url="/panel-left/" links-view=".view-main"></f7-view>
    </f7-panel>
    <f7-panel right reveal>
      <f7-view url="/panel-right/"></f7-view>
    </f7-panel-->
    <f7-view url="/" :main="true" class="ios-edges"></f7-view>
  </f7-app>
</template>


<script>
// import routes from "./routes.js";
import "../node_modules/framework7/css/framework7.min.css";
import "./main.css";
import { f7App, f7View, f7Panel, f7Statusbar } from "framework7-vue";
import routes from "./routes";
import HelloWrold from "./components/HelloWorld.vue";

export default {
  components: {
    f7App,
    f7Panel,
    f7View,
    f7Statusbar,
    HelloWrold
  },

  data() {
    let theme = "md";

    return {
      // Framework7 parameters that we pass to <f7-app> component
      f7params: {
        // Array with app routes
        // routes,
        // App Name
        theme: theme,
        routes: routes,
        name: "zsUI",
        // App id
        id: "com.zs.ui"
        // ...
      }
    };
  }
};
</script>


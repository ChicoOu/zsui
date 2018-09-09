<template>
    <f7-page>
        <f7-navbar bg-color="pink">
            <f7-nav-left back-link-url="/rank" back-link="Back" :sliding="true">
            </f7-nav-left>
            <f7-nav-title>我的粉丝</f7-nav-title>
        </f7-navbar>
        <div>
            <f7-list>
                <f7-list-item v-for="item in fans" :title="item.name">
                    <f7-icon slot="media" f7="person"></f7-icon>
                </f7-list-item>
            </f7-list>
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
        f7Icon,
        f7ListItem,
        f7List
    } from "framework7-vue";

    export default {
        name: "Mine",
        computed:{
            fans:function () {
                let result = [];
                for(let i = 0; i < 30; i++){
                    result.push({
                       icon:'',
                       name:'粉丝' + i
                    });
                }
                return result;
            }  
        },
        components: {
            f7Page,
            f7Navbar,
            f7NavLeft,
            f7NavTitle,
            f7NavRight,
            f7Icon,
            f7List,
            f7ListItem
        }
    }
</script>

<style scoped>

</style>
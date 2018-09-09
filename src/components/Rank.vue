<template>
    <f7-page :page-content="false">
        <f7-toolbar tabbar bottom-md>
            <f7-link tab-link="#netprofit"  icon-f7="money_dollar" class="my-tab-link">净赚处</f7-link>
            <f7-link tab-link="#rank" icon-f7="bookmark" tab-link-active class="my-tab-link my-tab-link-active">排行榜</f7-link>
            <f7-link tab-link="#candy" icon-f7="box" class="my-tab-link">糖果盒</f7-link>
            <f7-link tab-link="#my" icon-f7="home" class="my-tab-link">我的</f7-link>
        </f7-toolbar>
        <f7-tabs animated>
            <f7-tab id="netprofit" class="page-content" tab-active>
                <div>
                    <p>净赚处内容</p>
                </div>
            </f7-tab>
            <f7-tab id="rank" class="page-content">
                <div class="rank-content">
                    <div class="overall-info">
                        <f7-segmented raised tag="div">
                            <f7-button border-color="white" bg-color="white" text-color="pink" outline active>算力排行
                            </f7-button>
                            <f7-button border-color="white" color="white" outline>DLK排行</f7-button>
                        </f7-segmented>
                        <p>当前算力</p>
                        <p class="alg-emp">{{currentAlg}}</p>
                    </div>
                    <div class="rank-list">
                        <f7-list>
                            <f7-list-item v-for="item in ranks" :header="'第' + item.index + '名'" :title="item.name" :after="item.count + '算力'" :key="'rank' + item.index"></f7-list-item>
                        </f7-list>
                    </div>
                </div>
            </f7-tab>
            <f7-tab id="candy" class="page-content">
                <div>
                    <p>Tab 3 content</p>
                    ...
                </div>
            </f7-tab>
            <f7-tab id="my" class="page-content">
                <div>
                    <f7-link href="/mine">我的粉丝</f7-link>
                </div>

            </f7-tab>
        </f7-tabs>
    </f7-page>
</template>

<script>
    import {
        f7Page,
        f7Icon,
        f7Tab,
        f7Block,
        f7Tabs,
        f7Toolbar,
        f7Link,
        f7List,
        f7ListItem
    } from "framework7-vue";
    import Mine from "./Mine";
    import { RankService } from '../services/rank.service'

    export default {
        data: function () {
            return {
                currentAlg: 5667,
                rankService:new RankService(),
                isLoading: false,
                results:[]
            };
        },
        computed: {
            ranks : function () {
                let result = [];
                for(let i = 0;i < 20; i++){
                    result.push({
                        index : (i + 1),
                        name : '用户' + i,
                        count : Math.floor(Math.random() * 1000)
                    });
                }

                return result;
            }
        },
        created() {
            this.rankService
                .query()
                .subscribe(res => {
                    this.results = res.data;
                    this.isLoading = false;
                });
        },
        mounted() {
            /*this.rankService.windowScroll()
                .do(() => this.isLoading = true)
                .map((page) => this.searchService.query(page))
                .switch()
                .subscribe((res) => {
                    this.results = [...this.results, ...res.data]
                    this.isLoading = false
                })*/
        }
        components: {
            Mine,
            f7Page,
            f7Icon,
            f7Tab,
            f7Block,
            f7Tabs,
            f7Toolbar,
            f7Link,
            f7List,
            f7ListItem
        }
    };
</script>

<style scoped>
    .my-tab-link {
        color: black !important;
        background-color: white !important;
        line-height: unset !important;
    }

    .my-tab-link-active {
        color: #e91e63 !important;
    }

    .overall-info {
        background-color: #e91e63;
        color: white;
        text-align: center;
        padding: 15px 50px 5px 50px;
    }

    .alg-emp {
        font-size: 18px;
        font-weight: bold;
    }

    .rank-content {
        background-color: #ffe07a;
        height: 100%;
    }

    .rank-list {
        height: 80%;
        margin: -15px 10px 0 10px;
        background-color: white;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        overflow-y:scroll;
    }
</style>

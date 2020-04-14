<template>
  <div class="shoplist_container">
    <ul v-load-more="loaderMore" v-if="shopListArr.length" type="1">
      <router-link :to="{path: 'shop',query: {geohash,id: item.id}}" v-for="item in shopListArr" tag="li" :key="item.id" class="shop_li">
        <section>
          <img :src="imgBaseUrl + item.image_path" class="shop_img">
        </section>
        <hgroup class="shop_right">
          <header class="shop_detail_header">
            <h4 class="shop_title ellipsis">{{item.name}}}</h4>
            <ul class="shop_detail_ul">
              <li v-for="item in item.supports" :key="item.id" class="supports">{{item.icon_name}}</li>
            </ul>
          </header>
          <h5 class="rating_order_num">
            <section class="rating_order_num_left">
              <section class="rating_section">
                <rating-star :rating='item.rating'></rating-star>
                <span class="rating_num">{{item.rating}}</span>
              </section>
              <section class="order_section">
                月售{{item.recent_order_num}}单
              </section>
            </section>
            <section class="rating_order_num_right">
              <span class="delivery_style delivery_left" v-if="item.delivery_mode">{{item.delivery_mode.text}}</span>
              <span class="delivery_style delivery_right" v-if="zhunshi(item.supports)">准时达</span>
            </section>
          </h5>
        </hgroup>
      </router-link>
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import {loadMore,getImgPath} from "./mixin";
  import ratingStar from "./ratingStar";
  import {shopList} from "../../api";

  export default {
    components: {
      ratingStar
    },
    mixins: [loadMore,getImgPath],
    data() {
      return {
        offset: 0,  //批次加载店铺列表，每次加载20个 limit = 20
        shopListArr:[], // 店铺列表数据
        imgBaseUrl: 'https://fuss10.elemecdn.com', //图片域名地址
      }
    },
    mounted() {
      this.initData()
    },
    computed: {
      ...mapState([
          'latitude','longitude'
      ])
    },
    props: ['restaurantCategoryId','geohash'],
    methods: {
      loaderMore() {

      },
      async initData() {
        //获取数据
        let res = await shopList(this.latitude,this.longitude,this.offset,this.restaurantCategoryId)
        console.log(res)
      }
    }
  }
</script>

<style scoped>

</style>
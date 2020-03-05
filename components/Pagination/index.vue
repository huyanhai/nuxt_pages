<!--
 * @Author: huyanhai
 * @since: 2020-02-20 13:09:06
 * @LastAuthor: huyanhai
 * @lastTime: 2020-02-29 12:18:10
 * @FilePath: \nuxt_pages\components\Pagination\index.vue
 * @Description: 分页组件
 -->

 <template>
  <el-pagination background
                 layout="prev, pager, next"
                 :total="1000">
  </el-pagination>
</template>
 
 <script>
export default {

}
 </script>
 
 <style lang="scss">
.el-pagination {
  button {
    width: 40px;
    height: 40px;
    line-height: 40px;
  }
  &.is-background {
    .el-pager {
      li {
        font-weight: normal !important;
        color: $text-666;
        width: 40px;
        height: 40px;
        line-height: 40px;
        background: $text-while;
        border: 1px solid $line-gary;
        border-radius: 4px;
        &:not(.disabled) {
          &.active {
            background: $brand-orange !important;
            color: $text-dark;
            border: 1px solid $brand-orange;
          }
          &:hover {
            color: $text-dark;
            background: $brand-orange;
            border-radius: 5px;
            border: 1px solid $brand-orange;
          }
        }
      }
    }
  }
}
</style>

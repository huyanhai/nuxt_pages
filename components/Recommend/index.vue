<template>
  <article class="recommend">
    <div class="recommend--head">
      <ul class="head-repeart">
        <li class="repeart-item"
            :class="item.active ? 'active' : ''"
            v-for="(item,index) in menus"
            :key="index">
          <a class="link">{{item.name}}</a>
        </li>
      </ul>
    </div>
    <div class="recommend--body">
      <div class="container">
        <ul class="body-repeart">
          <li class="repeart-item"
              v-for="(item,index) in recommendList"
              :key="index">
            <a href="#"
               class="link">
              <img class="post"
                   src="https://img.zcool.cn/community/0314a655e4cd1aca80120a8952eb3d2.jpg@520w_390h_1c_1e_1o_100sh.jpg" />
            </a>
            <div class="info">
              <a class="ui-title">光绘创作—白衣天使战疫情</a>
              <p class="ui-text">摄影-其他摄影</p>
              <p class="more-info">
                <span class="view"><i class="icon icon-view"></i>2516</span>
                <span class="comment"><i class="icon icon-comment"></i>7</span>
                <span class="like"><i class="icon icon-like"></i>156</span>
              </p>
            </div>
            <div class="user">
              <span class="left"
                    v-if="types === 'index'">
                <a class="link">
                  <img src="https://img.zcool.cn/community/031130e5d098793a801205e4b0f8b8f.jpg@160w_160h_1c_1e_1o_100sh.jpg"
                       class="post">
                  CAA陈思佚
                </a>
              </span>
              <span class="right">10小时前</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="recommend--foot">
      <Pagination />
    </div>
  </article>
</template>

<script>
import Pagination from "../Pagination";
export default {
  props: {
    recommendList: {
      type: Array
    },
    menus: {
      type: Array
    },
    types: {
      type: String,
      default: 'index'
    }
  },
  components: {
    Pagination
  }
};
</script>

<style lang="scss">
.recommend {
  .recommend--head {
    .head-repeart {
      display: flex;
      align-items: center;
      justify-content: center;
      .repeart-item {
        height: 50px;
        line-height: 50px;
        padding: 0 30px;
        &.active {
          .link {
            color: $text-dark;
            border-bottom: 2px solid $text-dark;
            box-sizing: border-box;
          }
        }
        .link {
          font-size: 16px;
          display: block;
          height: 50px;
          color: $text-gary;
          &:hover {
            color: $text-dark;
            border-bottom: 2px solid $text-dark;
            box-sizing: border-box;
          }
        }
      }
    }
  }
  .recommend--body {
    border-top: 1px solid $line-gary;
    background: $text-lgary;
    box-sizing: border-box;
    padding: 20px 30px;
    .body-repeart {
      clear: both;
      overflow: hidden;
      .repeart-item {
        width: 228px;
        overflow: hidden;
        background: $text-while;
        border-radius: 5px;
        margin: 0 20px 20px 0;
        float: left;
        &:nth-child(5n) {
          margin-right: 0;
        }
        &:hover {
          .link {
            .post {
              opacity: 0.9;
            }
          }
        }
        .link {
          overflow: hidden;
          .post {
            width: 100%;
            transition: all 0.3s;
          }
        }
        .info {
          border-bottom: 1px solid #eee;
          padding: 11px 15px 13px;
          .ui-title {
            display: block;
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-size: 14px;
            color: $text-ddark;
          }
          .ui-text {
            color: $text-llgary;
            font-size: 12px;
          }
          .more-info {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 15px;
            .view,
            .comment,
            .like {
              font-size: 12px;
              color: $text-llgary;
              display: flex;
              align-items: center;
              .icon {
                margin-right: 5px;
              }
            }
          }
        }
        .user {
          padding: 0 15px;
          display: flex;
          justify-content: space-between;
          height: 50px;
          align-items: center;
          .link {
            display: flex;
            align-items: center;
            height: 24px;
            overflow: hidden;
            font-size: 12px;
            color: $text-222;
            .post {
              width: 24px;
              height: 24px;
              border-radius: 24px;
              margin-right: 5px;
            }
          }
          .right {
            color: $text-llgary;
            font-size: 12px;
            display: flex;
            align-items: center;
          }
        }
      }
    }
  }
  .recommend--foot {
    background: $text-lgary;
    display: flex;
    justify-content: center;
    padding-bottom: 30px;
  }
}
</style>

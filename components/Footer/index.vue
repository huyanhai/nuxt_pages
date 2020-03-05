<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-head">
        <ul class="ui-repeart">
          <li class="repeart-item">
            <a href=""
               class="link">
              关于我们
            </a>
          </li>
          <li class="repeart-item">
            <a href=""
               class="link">
              关于我们
            </a>
          </li>
        </ul>
      </div>
      <div class="footer-body"></div>
      <div class="footer-foot">
        Copyright © 2006-2020 ZCOOL站酷
      </div>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.footer {
  background: $text-dark;
  padding: 0 30px;
  .container {
    .footer-head {
      display: flex;
      justify-content: space-between;
      height: 150px;
      align-items: center;
      border-bottom: 1px solid $text-ddark;
      .ui-repeart {
        display: flex;
        .repeart-item {
          margin-right: 24px;
          &:last-child {
            margin-right: 0;
          }
          .link {
            color: $text-666;
            font-size: 14px;
            &:hover {
              color: $text-gary;
            }
          }
        }
      }
    }
    .footer-foot {
      height: 50px;
      line-height: 50px;
      color: $text-666;
      font-size: 14px;
    }
  }
}
</style>
import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _a7fb7112 = () => interopDefault(import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages_admin_index" */))
const _22fcb1c6 = () => interopDefault(import('..\\pages\\login\\index.vue' /* webpackChunkName: "pages_login_index" */))
const _57cc2164 = () => interopDefault(import('..\\pages\\works\\index.vue' /* webpackChunkName: "pages_works_index" */))
const _0b03dc54 = () => interopDefault(import('..\\pages\\works\\details.vue' /* webpackChunkName: "pages_works_details" */))
const _6952b85f = () => interopDefault(import('..\\pages\\works\\upload.vue' /* webpackChunkName: "pages_works_upload" */))
const _8e621aa4 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/admin",
    component: _a7fb7112,
    name: "admin"
  }, {
    path: "/login",
    component: _22fcb1c6,
    name: "login"
  }, {
    path: "/works",
    component: _57cc2164,
    name: "works"
  }, {
    path: "/works/details",
    component: _0b03dc54,
    name: "works-details"
  }, {
    path: "/works/upload",
    component: _6952b85f,
    name: "works-upload"
  }, {
    path: "/",
    component: _8e621aa4,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}

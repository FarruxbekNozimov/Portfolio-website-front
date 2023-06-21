import { _ as __nuxt_component_0 } from "./Header-ad7f1410.js";
import { withAsyncContext, withCtx, createTextVNode, unref, useSSRContext } from "vue";
import "hookable";
import { u as useFetch } from "./fetch-c7598eec.js";
import "destr";
import "devalue";
import "klona";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import "../server.mjs";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "h3";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "defu";
import "ohash";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "https://portfolio-farruxbeknozimov.vercel.app/api/about",
      "$46HtYhc5ci"
    )), __temp = await __temp, __restore(), __temp);
    const { data: skills } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "https://portfolio-farruxbeknozimov.vercel.app/api/skills",
      "$Kq5BGKzzG6"
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Header = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Header, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`About Me`);
          } else {
            return [
              createTextVNode("About Me")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h1 class="text-cyan-100 text-2xl"> I&#39;m Farruxbek and <span class="text-cyan-500">Web Developer</span></h1><p class="text-cyan-100 py-3">${ssrInterpolate(unref(data)[0].description)}</p><div class="flex gap-5"><div class="my-5 grid grid-cols-2 gap-5 w-[50%]"><span class="pb-2 px-1 text-cyan-100 border-b border-cyan-500/50"><span class="text-sm font-bold">Fullname : </span><span class="text-sm font-mono">${ssrInterpolate(unref(data)[0].fullname)}</span></span><span class="pb-2 px-1 text-cyan-100 border-b border-cyan-500/50"><span class="text-sm font-bold">Age : </span><span class="text-sm font-mono">${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear() - 2007)}</span></span><span class="pb-2 px-1 text-cyan-100 border-b border-cyan-500/50"><span class="text-sm font-bold">Website : </span><span class="text-sm font-mono">farruxdev.uz</span></span><span class="pb-2 px-1 text-cyan-100 border-b border-cyan-500/50"><span class="text-sm font-bold">Email : </span><span class="text-sm font-mono">${ssrInterpolate(unref(data)[0].email)}</span></span><span class="pb-2 px-1 text-cyan-100 border-b border-cyan-500/50"><span class="text-sm font-bold">Degree : </span><span class="text-sm font-mono">Junior</span></span><span class="pb-2 px-1 text-cyan-100 border-b border-cyan-500/50"><span class="text-sm font-bold">Phone : </span><span class="text-sm font-mono">${ssrInterpolate(unref(data)[0].phone)}</span></span><span class="pb-2 px-1 text-cyan-100 border-b border-cyan-500/50"><span class="text-sm font-bold">City : </span><span class="text-sm font-mono">${ssrInterpolate(unref(data)[0].phone)}</span></span></div><div class="my-5 grid grid-cols-2 gap-5 w-[50%]"><!--[-->`);
      ssrRenderList(unref(skills), (skill) => {
        _push(`<h1 class="bg-red-500"><span class="text-cyan-500">${ssrInterpolate(skill.title)}</span></h1>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-902b787f.js.map

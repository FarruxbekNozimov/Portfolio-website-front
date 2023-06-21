import __nuxt_component_0 from './Icon-155c6f68.mjs';
import { withAsyncContext, mergeProps, unref, useSSRContext } from 'vue';
import { u as useRoute } from '../server.mjs';
import { u as useFetch } from './fetch-c7598eec.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import './config-ea18f8e6.mjs';
import 'klona';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'h3';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'ufo';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';

const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { params } = useRoute();
    const { data } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      `https://portfolio-farruxbeknozimov.vercel.app/api/posts/${params.id}`,
      "$b6624wP6pv"
    )), __temp = await __temp, __restore(), __temp);
    console.log(data.value);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-full text-white text-center" }, _attrs))}><div class="w-full flex items-center justify-between"><button class="flex items-center gap-2 text-xl border border-cyan-500 px-4 rounded-lg p-1">`);
      _push(ssrRenderComponent(_component_Icon, { name: "material-symbols:arrow-back-rounded" }, null, _parent));
      _push(` Back </button></div><div class="p-5 w-full bg-slate-800 rounded-lg my-5 text-cyan-500"><h1 class="text-3xl mb-10">${ssrInterpolate((_a = unref(data)) == null ? void 0 : _a.title)}</h1><p${ssrRenderAttr("html", (_b = unref(data)) == null ? void 0 : _b.content)}></p></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-a3fa6e7e.mjs.map

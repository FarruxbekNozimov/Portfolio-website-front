import __nuxt_component_0 from './Icon-155c6f68.mjs';
import { withAsyncContext, unref, useSSRContext } from 'vue';
import { u as useFetch } from './fetch-c7598eec.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import '../server.mjs';
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
import 'klona';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import './config-ea18f8e6.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "https://portfolio-farruxbeknozimov.vercel.app/api/socials",
      "$PslAyef5YX"
    )), __temp = await __temp, __restore(), __temp);
    console.log(data.value);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="w-full flex items-center justify-evenly py-10"><div class="md:w-[50%] w-full mb-5 text-white"><h1 class="text-5xl my-4">Hi, I am Farruxbek</h1><h3 class="text-3xl text-cyan-500">Software Engineer</h3><p class="text-lg text-gray-400 mb-5 w-[80%]"> Hello, I am Web Developer. I love coding. </p><div class="w-full flex gap-3 mb-5"><!--[-->`);
      ssrRenderList(unref(data), (el) => {
        _push(`<a target="_blank"${ssrRenderAttr("href", el.link)} class="p-2 rounded-full flex items-center justify-center bg-slate-700 hover:bg-slate-500">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: el.icon,
          class: "block text-white"
        }, null, _parent));
        _push(`</a>`);
      });
      _push(`<!--]--></div><button class="bg-cyan-500 px-5 py-2 rounded-lg">Download CV</button></div><div class="hidden md:block md:w-[50%] relative"><img src="https://buddy.works/guides/covers/test-nodejs-app/share-nodejs-logo.png" alt="" class="w-[300px] h-[300px] md:w-[400px] md:h-[400px] border-4 p-2 border-cyan-500 mx-auto object-cover rounded-full"></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-1b0fcc94.mjs.map

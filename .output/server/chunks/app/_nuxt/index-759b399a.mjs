import { _ as __nuxt_component_0 } from './Header-ad7f1410.mjs';
import __nuxt_component_0$1 from './Icon-155c6f68.mjs';
import { ref, resolveComponent, mergeProps, withCtx, createTextVNode, unref, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { u as useFetch } from './fetch-c7598eec.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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
  setup(__props) {
    let projects = ref(null);
    setTimeout(async () => {
      const { data } = await useFetch(
        "https://portfolio-farruxbeknozimov.vercel.app/api/posts",
        "$ansXcfZp0C"
      );
      projects.value = data.value;
      console.log(projects.value);
    }, 1e3);
    console.log(projects.value);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Header = __nuxt_component_0;
      const _component_Icon = __nuxt_component_0$1;
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full h-full" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Header, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`My Posts`);
          } else {
            return [
              createTextVNode("My Posts")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class=""><div class="grid md:grid-cols-2 gap-5">`);
      if (!unref(projects)) {
        _push(`<!--[-->`);
        ssrRenderList(2, (load) => {
          _push(`<div class="border-2 border-cyan-500 bg-slate-700/50 rounded-tr-2xl rounded-bl-2xl min-h-[400px] p-3 animate-pulse"><div class="flex items-center justify-center w-full h-[300px] rounded bg-gray-700 mb-4"><svg class="w-12 h-12 text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"></path></svg></div><div class="w-full text-center"><div class="h-6 rounded-full mx-auto bg-gray-700 w-64 mb-2"></div><div class="h-5 rounded-full mx-auto bg-gray-700 w-full mb-4"></div><div class="border-b border-cyan-500 my-4"></div><div class="flex items-center justify-between gap-10"><button class="flex items-center justify-center gap-1 bg-cyan-500/70 hover:bg-cyan-500 p-1 px-2 rounded-md">`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "material-symbols:team-dashboard-outline",
            class: "text-xl"
          }, null, _parent));
          _push(`Preview </button><button class="flex items-center justify-center gap-1 bg-black/30 hover:bg-black/70 text-cyan-500 p-1 px-3 rounded-md"> Demo `);
          _push(ssrRenderComponent(_component_Icon, {
            name: "mdi:microsoft-visual-studio-code",
            class: "text-xl"
          }, null, _parent));
          _push(`</button></div></div><span class="sr-only">Loading...</span></div>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!--[-->`);
        ssrRenderList(unref(projects), (el) => {
          _push(ssrRenderComponent(_component_router_link, {
            to: `blog/${el._id}`,
            class: "border-2 border-cyan-500 bg-slate-700/50 rounded-tr-2xl rounded-bl-2xl min-h-[100px] p-3"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<h1 class="text-cyan-400 text-2xl text-center mt-3"${_scopeId}>${ssrInterpolate(el == null ? void 0 : el.title)}</h1><div class="border-b border-cyan-500 my-4"${_scopeId}></div><div class="flex flex-wrap mb-3"${_scopeId}><!--[-->`);
                ssrRenderList(el.tags.split(","), (tag) => {
                  _push2(`<p class="cursor-pointer text-cyan-200 mr-2 text-center bg-gray-950/50 hover:bg-gray-950 duration-300 p-1 rounded mt-2"${_scopeId}> #${ssrInterpolate(tag)}</p>`);
                });
                _push2(`<!--]--></div>`);
              } else {
                return [
                  createVNode("h1", { class: "text-cyan-400 text-2xl text-center mt-3" }, toDisplayString(el == null ? void 0 : el.title), 1),
                  createVNode("div", { class: "border-b border-cyan-500 my-4" }),
                  createVNode("div", { class: "flex flex-wrap mb-3" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(el.tags.split(","), (tag) => {
                      return openBlock(), createBlock("p", { class: "cursor-pointer text-cyan-200 mr-2 text-center bg-gray-950/50 hover:bg-gray-950 duration-300 p-1 rounded mt-2" }, " #" + toDisplayString(tag), 1);
                    }), 256))
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]-->`);
      }
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-759b399a.mjs.map

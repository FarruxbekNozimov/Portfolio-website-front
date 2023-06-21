import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import __nuxt_component_0$1 from './Icon-155c6f68.mjs';
import { useSSRContext, ref, resolveComponent, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import 'vue-bundle-renderer/runtime';
import 'h3';
import 'devalue';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'klona';
import 'defu';
import 'ohash';
import 'ufo';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import './config-ea18f8e6.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import 'unctx';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _imports_0 = "" + publicAssetsURL("logo.png");
const _sfc_main$2 = {
  __name: "Sidebar",
  __ssrInlineRender: true,
  setup(__props) {
    const openedNav = ref(false);
    const navLinks = [
      { icon: "ph:house-bold", name: "Home", path: "/" },
      { icon: "material-symbols:account-circle", name: "About", path: "/about" },
      {
        icon: "carbon:cloud-service-management",
        name: "Service",
        path: "/service"
      },
      { icon: "bytesize:portfolio", name: "Portfolio", path: "/projects" },
      { icon: "bi:signpost-split", name: "Blog", path: "/blog" },
      { icon: "solar:chat-dots-outline", name: "Contact", path: "/contact" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$1;
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["absolute w-72 lg:left-0 h-screen -left-72 bg-slate-900 duration-300 bg-gray-900 border-r border-cyan-500", unref(openedNav) ? "lg:left-0" : "w-72"]
      }, _attrs))} data-v-d274f918><button class="lg:hidden absolute -right-16 text-2xl top-5 bg-gray-800 sm:flex items-center justify-center rounded border border-cyan-500 p-1 px-2 text-cyan-500" data-v-d274f918>`);
      _push(ssrRenderComponent(_component_Icon, { name: "iconamoon:menu-burger-horizontal-bold" }, null, _parent));
      _push(`</button><a href="/" class="top-0 left-2 bg-gray-900 gap-2 flex items-center justify-center py-5" data-v-d274f918><img${ssrRenderAttr("src", _imports_0)} alt="logo" class="w-full" data-v-d274f918></a><div class="px-5" data-v-d274f918><div class="" data-v-d274f918><!--[-->`);
      ssrRenderList(navLinks, (el) => {
        _push(`<div data-v-d274f918>`);
        _push(ssrRenderComponent(_component_router_link, {
          onClick: () => _ctx.menuId = el.id,
          to: el.path,
          class: "text-cyan-300 bg-gray-950 duration-300 cursor-pointer px-5 py-3 rounded-xl text-md group hover:bg-cyan-500 hover:text-gray-950 flex items-center justify-between mt-3 border-b-2 border-transparent"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center text-md gap-2" data-v-d274f918${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: el.icon,
                class: "text-xl"
              }, null, _parent2, _scopeId));
              _push2(` ${ssrInterpolate(el.name)}</div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center text-md gap-2" }, [
                  createVNode(_component_Icon, {
                    name: el.icon,
                    class: "text-xl"
                  }, null, 8, ["name"]),
                  createTextVNode(" " + toDisplayString(el.name), 1)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Sidebar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-d274f918"]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}><div class="h-[70px] bg-slate-950">@Footer</div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Sidebar = __nuxt_component_0;
      const _component_Footer = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-3069ae4c><div class="h-screen overflow-y-hidden bg-slate-950" data-v-3069ae4c>`);
      _push(ssrRenderComponent(_component_Sidebar, null, null, _parent));
      _push(`<main class="h-full overflow-y-auto lg:ml-72 m-0 p-6 lg:pt-6 pt-20" data-v-3069ae4c>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3069ae4c"]]);

export { _default as default };
//# sourceMappingURL=default-3cf191db.mjs.map

import { _ as __nuxt_component_0$1 } from "./Header-ad7f1410.js";
import __nuxt_component_0 from "./Icon-155c6f68.js";
import { ref, unref, useSSRContext, mergeProps, withCtx, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import "hookable";
import { u as useFetch } from "./fetch-c7598eec.js";
import "destr";
import "devalue";
import "klona";
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
import "./config-ea18f8e6.js";
import "@iconify/vue/dist/offline";
import "@iconify/vue";
import "ohash";
const _sfc_main$1 = {
  __name: "Image",
  __ssrInlineRender: true,
  props: ["src"],
  setup(__props) {
    const full = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="${ssrRenderClass([unref(full) ? "h-full w-full" : "w-0 h-0", "absolute bg-black/50 z-10 top-0 left-0 flex items-center justify-center duration-300"])}"><img class="object-contain rounded-xl w-[80%] h-[80%]"${ssrRenderAttr("src", __props.src)}>`);
      _push(ssrRenderComponent(_component_Icon, {
        onClick: () => full.value = false,
        name: "ph:x-bold",
        class: "cursor-pointer hover:scale-110 absolute text-white text-3xl top-5 right-5"
      }, null, _parent));
      _push(`</div><div class="group relative h-full"><img class="object-cover w-full h-full rounded-lg"${ssrRenderAttr("src", __props.src)}><div class="group-hover:block absolute top-2 right-2 bg-black/70 border border-cyan-500 rounded duration-300">`);
      _push(ssrRenderComponent(_component_Icon, {
        onClick: () => full.value = true,
        name: "gridicons:fullscreen",
        class: "cursor-pointer hover:scale-110 duration-300 text-white text-3xl"
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Image.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$1;
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    let projects = ref(null);
    setTimeout(async () => {
      const { data } = await useFetch(
        "https://portfolio-farruxbeknozimov.vercel.app/api/projects",
        "$olQ4jpDRvq"
      );
      projects.value = data.value;
    }, 1e3);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Header = __nuxt_component_0$1;
      const _component_Icon = __nuxt_component_0;
      const _component_Image = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full h-full" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Header, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`My Projects`);
          } else {
            return [
              createTextVNode("My Projects")
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
          _push(`<div class="border-2 border-cyan-500 bg-slate-700/50 rounded-tr-2xl rounded-bl-2xl min-h-[400px] p-3">`);
          _push(ssrRenderComponent(_component_Image, {
            src: el == null ? void 0 : el.img,
            class: "h-[300px] w-full object-cover rounded-xl"
          }, null, _parent));
          _push(`<h1 class="text-cyan-400 text-2xl text-center mt-3">${ssrInterpolate(el == null ? void 0 : el.title)}</h1><p class="text-sm text-cyan-100 text-center">${ssrInterpolate(el == null ? void 0 : el.description)}</p><div class="border-b border-cyan-500 my-4"></div><div class="flex items-center justify-between gap-10"><button class="flex items-center justify-center gap-1 bg-cyan-500/70 hover:bg-cyan-500 p-1 px-2 rounded-md">`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "material-symbols:team-dashboard-outline",
            class: "text-xl"
          }, null, _parent));
          _push(`Preview </button><button class="flex items-center justify-center gap-1 bg-black/30 hover:bg-black/70 text-cyan-500 p-1 px-3 rounded-md"> Demo `);
          _push(ssrRenderComponent(_component_Icon, {
            name: "mdi:microsoft-visual-studio-code",
            class: "text-xl"
          }, null, _parent));
          _push(`</button></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-f9168f38.js.map

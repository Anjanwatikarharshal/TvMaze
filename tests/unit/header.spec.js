import { shallowMount, createLocalVue } from "@vue/test-utils";
import { BootstrapVue } from "bootstrap-vue";
import { BButton } from "bootstrap-vue";
import VueRouter from "vue-router";
import { routes } from "@/router/index";

import Header from "@/components/Header.vue";
describe("Header.vue", () => {
  let headerwrapper;
  const router = new VueRouter({ routes });

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(BootstrapVue);
    headerwrapper = shallowMount(Header, {
      localVue,
      router,
      stubs: ["router-link"]
    });
  });

  afterEach(() => {
    headerwrapper.destroy();
  });
  test("to check a header instance", () => {
    expect(headerwrapper.isVueInstance).toBeTruthy();
  });

  test("to check search function", () => {
    headerwrapper.vm.search = jest.fn();
    headerwrapper.findComponent(BButton).trigger("click");
    expect(headerwrapper.vm.search).toHaveBeenCalled();
  });
  test('to check router push', () => {
    headerwrapper.vm.$router.push = jest.fn()
    headerwrapper.vm.search();
    expect(headerwrapper.vm.$router.push).toHaveBeenCalled();
  })

  test("to check html contain ", () => {
    expect(headerwrapper.html()).toContain('b-button');
    expect(headerwrapper.html()).toContain('form');
    expect(headerwrapper.html()).toContain('nav');
  });
});

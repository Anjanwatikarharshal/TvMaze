import { shallowMount, createLocalVue } from "@vue/test-utils";
import VueRouter from "vue-router";
import App from "@/App.vue";
import Header from "@/components/Header.vue";

describe("app.vue testing", () => {
  let appwrapper;
  const router = new VueRouter({ path: "/", name: "Allshow" });
  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);

    appwrapper = shallowMount(App, {
      localVue,
      router
    });
  });
  afterEach(() => {
    appwrapper.destroy();
  });
  it("is a Vue Instance", () => {
    expect(appwrapper.isVueInstance).toBeTruthy();
  });
  it("it should load the Header", () => {
    expect(Header).toBeTruthy();
  });
});
import { shallowMount, createLocalVue } from "@vue/test-utils";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import moxios from "moxios";
import VueRouter from "vue-router";
import {Shows, ShowsByGenres } from "../unit/mock";
import AllShow from "@/components/Allshow";

describe("AllShows", () => {
  let AllShowswrapper;
  const router = new VueRouter({ 
      path: "/", 
      name: "AllShows"
     });
  beforeEach(() => {
    const localVue = createLocalVue();
    moxios.install();
    localVue.use(VueRouter);
    localVue.use(BootstrapVue);
    localVue.use(IconsPlugin);
    AllShowswrapper = shallowMount(AllShow, {
      localVue,
      router
    });
  });
  
  it("Should load Allshows vue instance", () => {
    expect(AllShowswrapper.isVueInstance).toBeTruthy();
  });

  it("for popularshows", () => {
    expect(AllShowswrapper.vm.popularShows).not.toBe(true);
  });

  it("getting the genres", () => {
    AllShowswrapper.setData({ shows: Shows });
    expect(AllShowswrapper.vm.genres).toEqual(ShowsByGenres);
  });
});

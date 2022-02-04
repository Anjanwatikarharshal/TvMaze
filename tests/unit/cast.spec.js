import { shallowMount, createLocalVue } from "@vue/test-utils";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import Cast from "@/components/Cast.vue";
import { showCast } from "../unit/mock";

describe("to test Cast.vue", () => {
  let cast;
  let castwrapper;
  cast = Object.assign({}, showCast);
  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(BootstrapVue);
    localVue.use(IconsPlugin);
    castwrapper = shallowMount(Cast, {
      localVue,
      propsData: {
        cast
      },
    });
  });
  afterEach(() => {
    castwrapper.destroy();
  });
  it("Should load cast vue instance", () => {
    expect(castwrapper.isVueInstance).toBeTruthy();
  });

  it("should test no cast image available", async () => {
    cast.character.image = null;
    cast.person.image = null;
    expect(castwrapper.vm.castImage).toEqual(null);
  });
});

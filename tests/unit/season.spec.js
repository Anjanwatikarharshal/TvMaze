import { shallowMount, createLocalVue } from "@vue/test-utils";
import Season from "@/components/Season.vue";
import { showSeasons } from "../unit/mock";


describe("It is ued to test Season.vue", () => {
  let seasonWrapper;
  const season = showSeasons;
  beforeEach(() => {
    const localVue = createLocalVue();
    seasonWrapper = shallowMount(Season, {
      localVue,
      propsData: {
        season
      }
    });
  });

  afterEach(() => {
    seasonWrapper.destroy();
  });
  it("is a Vue instance", () => {
    expect(seasonWrapper.isVueInstance).toBeTruthy();
  });

  it("Used to display test card-border", () => {
    expect(seasonWrapper.find(".mt-1").exists()).toBe(false);
  });
});

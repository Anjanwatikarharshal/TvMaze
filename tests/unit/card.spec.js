import { shallowMount, createLocalVue } from "@vue/test-utils";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { showDetails } from "../unit/mock";
import Card from "@/components/Card.vue";
import VueRouter from "vue-router";
import { routes } from "@/router/index";

describe("Card.vue", () => {
  let cardWrapper;
  const router = new VueRouter({ routes });
  const show = showDetails;
  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(BootstrapVue);
    localVue.use(IconsPlugin);

    cardWrapper = shallowMount(Card, {
      localVue,
      router,
      propsData: {
        show
      },
      stubs: ["router-link"]
    });
  });

  afterEach(() => {
    cardWrapper.destroy();
  });
  it("is a Vue instance", () => {
    expect(cardWrapper.isVueInstance).toBeTruthy();
  });
    it('should make call to function', () => {
    cardWrapper.vm.$router.push = jest.fn()
    cardWrapper.vm.detailOfCard()
    expect(cardWrapper.vm.$router.push).toHaveBeenCalled();
  });
});

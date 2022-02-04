import { shallowMount, createLocalVue } from "@vue/test-utils";
import VueRouter from "vue-router";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import ShowDetails from "@/components/ShowDetails.vue";
import { routes } from "@/router/index";

jest.mock("axios", () => ({
  get: () =>
    Promise.resolve({
      data: {
        id: 69,
        name: "The Blacklist",
        genres: ["Action", "Crime", "Thriller"],
        rating: {
          average: 8.2
        }
      }
    })
}));

describe("In ShowDetails Component", () => {
  let wrapper;
  const router = new VueRouter({ routes });

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    localVue.use(BootstrapVue);
    localVue.use(IconsPlugin);

    wrapper = shallowMount(ShowDetails, {
      localVue,
      router
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it("is a Vue instance", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
 
  it("testing show detail data by using id", () => {
    expect(wrapper.vm.show.id).toBe(69);
  });
});

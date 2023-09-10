import About from "@/views/About.vue";
import { mount } from "@vue/test-utils";
describe("about.vue", () => {
  test("renders inner text", () => {
    const warpper = mount(About);
    expect(warpper.text()).toContain('about')
  });
});

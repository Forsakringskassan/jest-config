import { mount } from "internal-vue2-jest/test-utils";
import AwesomeVue2Component from "../__fixtures__/AwesomeVue2Component.vue";

it("vue2 should mount component", () => {
    expect.assertions(1);
    const wrapper = mount(AwesomeVue2Component, {
        propsData: {
            name: "World",
        },
    });
    expect(wrapper.html()).toMatchSnapshot();
});

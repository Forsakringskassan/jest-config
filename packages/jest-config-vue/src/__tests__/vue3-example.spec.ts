import { mount } from "@vue/test-utils";
import AwesomeVue3Component from "../__fixtures__/AwesomeVue3Component.vue";

it("vue3 should mount component", () => {
    expect.assertions(1);
    const wrapper = mount(AwesomeVue3Component, {
        propsData: {
            name: "World",
        },
    });
    expect(wrapper.html()).toMatchSnapshot();
});

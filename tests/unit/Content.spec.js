import { mount } from "@vue/test-utils";
import Content from "../../src/components/Content";
import Vuetify from 'vuetify'
import Vue from 'vue';

Vue.use(Vuetify)

describe("Content.vue", () => {
  let wrapper;
  beforeEach(()=>{
    wrapper = mount(Content, {
      propsData: {
        item: { id: 1, text: "123" },
      },
    });
  })
  it("Content.vue props data check", () => {
    expect(wrapper.props().item.id).toBe(1);
    expect(wrapper.props().item.text).toBe("123");
    expect(wrapper.find('.v-btn.primary').exists).toBeTruthy;
    expect(wrapper.find('.v-btn.error').exists).toBeTruthy;
  });

  it("Content.vue edit feature check.", () =>{
    const editButton = wrapper.find('.v-btn.primary');
    editButton.trigger('click');
    expect(wrapper.find('.v-input').exists).toBeTruthy;
  })

  it("Content.vue delete feature check.", () =>{
    const editButton = wrapper.find('.v-btn.error');
    editButton.trigger('click');
    expect(wrapper.find('.v-list-item__content').exists).toBeFalsy;
  })
});

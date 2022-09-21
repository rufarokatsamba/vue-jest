import { mount, shallowMount } from "@vue/test-utils";
import Chat from './Chat.vue';

describe('Chat Service', ()=>{

    let wrapper = null;

    beforeEach(async()=>{
        wrapper = mount(Chat, {propsData: {}});
    });

    it("should match the snapshot",()=>{
        expect(wrapper.element).toMatchSnapshot();
    })

    it("should have a list item for every message in props", ()=>{
        const shallowWrapper = shallowMount(Chat, {propsData:{
            messages:[{content:"Hi"}, {content:"faffy"}]
        }});

        expect(shallowWrapper.findAll(".message-display")).toHaveLength(2);
    })

})
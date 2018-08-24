import React from 'react';
import { mount } from 'enzyme';

import CommentBox from '../CommentBox';
import Root from '../../root';

let wrapped;

beforeEach(()=>{
    wrapped = mount(
    <Root>
        <CommentBox />
    </Root>);
})

afterEach(() => {
    wrapped.unmount();
})

it ("Has a textarea and a button", () =>{
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);
})

describe("The textarea", ()=> {
    beforeEach(() => {
        wrapped.find("textarea").simulate("change", {
            target:{value:"Muck Test"}
        });
        wrapped.update();
    })
    it("let users write on textarea", () => {
        expect(wrapped.find("textarea").prop("value")).toEqual("Muck Test");
    })
    
    it("Make sure text area be empty after submit", () => {
        wrapped.find("form").simulate("submit");
        wrapped.update();
    
        expect(wrapped.find("textarea").prop("value")).toEqual("");
    })
})


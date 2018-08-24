import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';
import CommentBox from '../CommentBox';
import CommentList from '../CommentList';
import { wrap } from 'module';

let wrapped;

beforeEach(()=>{
    wrapped = shallow(<App />);
})

it ('Show a comment box', () => {
   expect(wrapped.find(CommentBox).length).toEqual(1);
})

it('Show a comment list', () =>{
    expect(wrapped.find(CommentList).length).toEqual(1);
})
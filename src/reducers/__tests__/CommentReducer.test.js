import CommentReducer from '../CommentReducer';
import { SAVE_COMMENT } from '../../actions/types';

it("Should handle actions with SAVE_COMMENT type", ()=> {
    const action = {
        type : SAVE_COMMENT,
        payload: "My Test Comment"
    }

    const newState = CommentReducer([],action);

    expect(newState).toEqual(["My Test Comment"]);
})

it("Should not throw error, if type is undefined", () =>{
    const newState = CommentReducer([],{});
    expect(newState).toEqual([]);
})
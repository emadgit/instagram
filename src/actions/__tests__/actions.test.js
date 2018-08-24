import * as Actions from '../index';
import { SAVE_COMMENT } from '../types';

let actionResult;

beforeEach(()=>{
    actionResult = Actions.SaveComment("My Test Comment");
})

it("Has a type of SAVE_COMMENT", () => {
    expect(actionResult.type).toEqual(SAVE_COMMENT);
})

it("Has a payload with new comment text", () =>{
    expect(actionResult.payload).toEqual("My Test Comment")
})
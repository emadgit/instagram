import { SAVE_COMMENT } from './types';

export function SaveComment(comment){
    return {
        type: SAVE_COMMENT,
        payload: comment
    }
}
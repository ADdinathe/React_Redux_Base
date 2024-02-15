import {COMMENT_CREATE} from "./types";
import {errorOn} from "./actions";

const badWords = ['осел', "какашка"];


export function spamFilter (store) {

    return function(next){
        return function (action){
            if(action.type === COMMENT_CREATE){
                console.log('spamFilter >>', action)


                const hasBadWords = badWords.some(res=> action.data.text.includes(res))

                if(hasBadWords){
                    return store.dispatch(errorOn('bad words!'))
                }
            }

            return next(action);
        }
    }
}

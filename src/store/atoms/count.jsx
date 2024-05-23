import { atom, selector } from "recoil";

const countAtom = atom({
    key: "countAtom",
    default: 0
});

const checkNum = selector({
    key: "countNum",
    get: ({get}) => {
        const text = get(countAtom)
        if(text % 2 == 0){
            return "It is even"
        }
    }
})

export {countAtom, checkNum}

import { sum } from "../sum";

test('Sum function should calculate the sum of two numbers',()=>{
    const result = sum(2,4);

    //Asserstion
    expect(result).toBe(6);
})
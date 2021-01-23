const breaker= require('./codeBreaker');

describe("code braker",()=>{
    test("brake XXXX",()=>{
        let value = breaker.codeBreaker("1234");
        expect(value).toBe("XXXX");
    });
    test("brake X-X-",()=>{
        let value = breaker.codeBreaker("1432");
        expect(value).toBe("X-X-")
    });
    test("brake null",()=>{
        let value = breaker.codeBreaker("9876");
        expect(value).toBe("")
    });
    test("brake ----",()=>{
        let value = breaker.codeBreaker("4321");
        expect(value).toBe("----")
    });
    test("brake -X",()=>{
        let value = breaker.codeBreaker("1049");
        expect(value).toBe("X-")
    });
    test("brake -",()=>{
        let value = breaker.codeBreaker("5671");
        expect(value).toBe("-")
    });
    test("brake X",()=>{
        let value = breaker.codeBreaker("5674");
        expect(value).toBe("X")
    });

}
)

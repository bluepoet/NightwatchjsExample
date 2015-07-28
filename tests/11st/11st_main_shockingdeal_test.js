module.exports = {
    tags: ['main_shockingdeal'],
    'Load www.11st.co.kr' : function(client) {
        client
            .url('http://www.11st.co.kr/html/main.html')
            .assert.containsText('.shocking_11am', '쇼킹딜')
            .getElementSize('ul[id="shockingDealPrdWrap"]', function(result) {
                this.assert.equal(typeof result, "object");
                this.assert.equal(result.status, 0);
                this.assert.equal(result.value.width, 1000);
                this.assert.equal(result.value.height, 1392);
            })
            .tagCountById('shockingDealPrdWrap', function(result) {
                console.log(
                    'NOTE : there are %s li elements on the page\n',
                    result.value 
                );
            })
            .assert.childElementsEquals('ul[id="shockingDealPrdWrap"] > li', 8)
            .click('button[id=main_btn_dealMorePrd]')
            .assert.childElementsEquals('ul[id="shockingDealPrdWrap"] > li', 12)
            .click('button[id=main_btn_dealMorePrd]')
            .assert.childElementsEquals('ul[id="shockingDealPrdWrap"] > li', 16)
            .end();
    }
};
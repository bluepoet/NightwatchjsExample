module.exports = {
    tags: ['outdoor'],
    'OutdoorCamping 전문관 Test' : function(client) {
        client.url('http://www.11st.co.kr/disp/DTAction.tmall?ID=OUTDOOR&ctgrNo=59385');
        
        client.pause(2000);

        //BDD Style Assert(Title)
        client.expect.element('div#dtGnbWrap > div#module_gnb_0 > h2 > a').text.to.equal('아웃도어캠핑전문관');

        //크롬, 파이어폭스에서 작동안됨
        // client.expect.element('div[id=dtGnbWrap] > div[id=module_gnb_0] > div.cmp_corner > ul > li:first-child > a > span').text.to.equal('베스트 100');
    
        // client.expect.element('div[id=dtGnbWrap] > div[id=module_gnb_0] > div.cmp_corner > ul > li:last-child > a > span').text.to.equal('리뷰100');

        // Custom Assert(Billboard)
        client.assert.childElementsEquals('div[id=dtCommonBillboard] > div[name=bilBanner]', 10);

         //배너 검증
        client.assert.childElementsEquals('div.tmp_ftype10 > div.cmp_bnr_ctr', 2);

        // 카테고리별 상품        
        client.assert.childElementsEquals('div[id=module_conts_2].tmp_ctype5 > .cate', 4);
        
        moveToElement(1);
        assertProductsByCategory(1);

        moveToElement(2);
        assertProductsByCategory(2);

        moveToElement(3);
        assertProductsByCategory(3);

        moveToElement(4);
        assertProductsByCategory(4);

        function moveToElement(tabId) {
            client.moveToElement('div[id=module_conts_2] > .cate.tab'+tabId, 10, 10);   
        };

        function assertProductsByCategory(tabId) {
            client.assert.childElementsEquals('div[id=module_conts_2] > .cate.tab'+tabId+' > .cmp_prd_fl > .thumb_w140 > li', 8);
            client.assert.childElementsEquals('div[id=module_conts_2] > .cate.tab'+tabId+' > .cmp_prd_fl > .thumb_w140 > .in_bnr', 1);
        };

        // Brand Best
        for(var i = 0; i < 14; i++) {
            client.click(".cmp_btnctr_pn > .in_next");
            client.assert.childElementsEquals('li[name=logo].selected > div > ul > li', 7);
        }

        client.end();
    }


};
'use strict';
/* global element, by, browser, describe, beforeEach, it, expect */

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('angular-trix', function() {

  beforeEach(function() {
    browser.get('/e2e-tests');
  });

  // https://github.com/sachinchoolur/angular-trix/pull/2
  // http://plnkr.co/edit/XQsKXpsH7LZ4m0XBkaR2
  it('does not update model when there is no change by user', function() {
    element(by.id('setSampleText')).click();
    expect(element(by.id('pristine')).getText()).toEqual('true');
    expect(element(by.id('modelText')).getText()).toEqual('the quick brown fox');
  });

  // https://github.com/sachinchoolur/angular-trix/pull/23
  it('uses proper serialization format', function() {
    element(by.id('editor')).sendKeys('the quick brown fox');
    expect(element(by.id('modelText')).getText()).toEqual('<div>the quick brown fox</div>');
  });

});

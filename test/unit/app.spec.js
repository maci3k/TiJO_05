describe('app', function () {
    'use strict';

    var app = window.app;

    describe('generateMessage', function () {
        it('should return number of vowels in string and whether string is a palindrome', function() {
            expect(app.generateMessage('kajak')).toEqual({vowel: 2, palindrome: true});
            expect(app.generateMessage('mam')).toEqual({vowel: 1, palindrome:true});
            expect(app.generateMessage('ala ma kota')).toEqual({vowel: 5, palindrome: false});
        });
        //asdasjdhasjkdhasjkdh
        xit('should raise excecption when string is empty', function() {
            expect(app.generateMessage('')).toThrow(new Error('Empty string!'));
        });
    });

    describe('isPalindrome', function () {

        describe('toHaveBeenCalled', function () {
            beforeAll(function() {
                spyOn(app, 'isPalindrome');
                app.isPalindrome('kajak');
            });
            it('should call isPalindrome function', function() {
                expect(app.isPalindrome).toHaveBeenCalled();
                expect(app.isPalindrome).toHaveBeenCalledWith('kajak');
                expect(app.isPalindrome).not.toHaveBeenCalledWith('ala');
            });
        });

        describe('and.callThrough', function () {

        });

        describe('and.returnValue', function () {

        });

        describe('and.callFake', function () {

        });

        describe('calls.count()', function () {

        });
    });

    describe('vowelCount', function () {

        describe('toHaveBeenCalled', function () {

        });

        describe('and.callThrough', function () {

        });

        describe('and.returnValue', function () {

        });

        describe('and.callFake', function () {

        });

        describe('calls.count()', function () {

        });
    });
});


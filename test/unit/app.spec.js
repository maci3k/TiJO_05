describe('app', function () {
    'use strict';

    var app = window.app;

    describe('generateMessage', function () {
        it('should return number of vowels in string and whether string is a palindrome', function() {
            expect(app.generateMessage('kajak')).toEqual({vowel: 2, palindrome: true});
            expect(app.generateMessage('mam')).toEqual({vowel: 1, palindrome:true});
            expect(app.generateMessage('ala ma kota')).toEqual({vowel: 5, palindrome: false});
        });
        //doesn't work yet
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
            beforeAll(function() {
                spyOn(app, 'isPalindrome').and.callThrough();
                app.generateMessage('kajak');
            });
            it('should call isPalindrome function', function() {
                expect(app.isPalindrome).toHaveBeenCalled();
                expect(app.isPalindrome).toHaveBeenCalledWith('kajak');
                expect(app.isPalindrome).not.toHaveBeenCalledWith('ala');
            });
        });

        describe('and.returnValue', function () {
            var isPal;
            beforeAll(function() {
                spyOn(app, 'isPalindrome').and.returnValue(false);
            });
            it('should call isPalindrome and return false', function() {
                isPal = app.isPalindrome('kajak');
                expect(isPal).toBe(false);
            });
            it('should call generateMessage function and isPalindrome should return false', function() {
                isPal = app.generateMessage('kajak');
                expect(isPal).toEqual({vowel: 2, palindrome: false});
            });
        });

        describe('and.callFake', function () {
            var isPal;
            beforeAll(function() {
                spyOn(app, 'isPalindrome').and.callFake(function (pal) {
                    return pal.length;
                });
            });
            it('should call fake isPalindrome function', function() {
                isPal = app.isPalindrome('kajak');
                expect(isPal).toBe(5);
            });
            it('should call generateMessage function and fake isPalindrome function', function() {
                isPal = app.generateMessage('kajak');
                expect(isPal).toEqual({vowel: 2, palindrome: 5});
            });
        });

        describe('calls.count()', function () {
            var isPal;
            beforeAll(function() {
                spyOn(app, 'isPalindrome').and.callThrough();
            });
            it('should realise that isPalindrome is called', function() {
                isPal = app.isPalindrome('kajak');
                isPal = app.isPalindrome('kajak');
                expect(app.isPalindrome.calls.count()).toBe(2);
            });
            it('should realise that isPalindrome is called ' +
                ' when generateMessage is called', function() {
                isPal = app.generateMessage('kajak');
                expect(app.isPalindrome.calls.count()).toEqual(3);
            });
        });
    });

    describe('vowelCount', function () {

        describe('toHaveBeenCalled', function () {
            beforeAll(function() {
                spyOn(app, 'vowelCount');
                app.vowelCount('kajak');
            });
            it('should call vowelCount function', function() {
                expect(app.vowelCount).toHaveBeenCalled();
                expect(app.vowelCount).toHaveBeenCalledWith('kajak');
                expect(app.vowelCount).not.toHaveBeenCalledWith('ala');
            });
        });

        describe('and.callThrough', function () {
            beforeAll(function() {
                spyOn(app, 'vowelCount').and.callThrough();
                app.generateMessage('kajak');
            });
            it('should call vowelCount function', function() {
                expect(app.vowelCount).toHaveBeenCalled();
                expect(app.vowelCount).toHaveBeenCalledWith('kajak');
                expect(app.vowelCount).not.toHaveBeenCalledWith('ala');
            });
        });

        describe('and.returnValue', function () {
            var vow;
            beforeAll(function() {
                spyOn(app, 'vowelCount').and.returnValue('two');
            });
            it('should call vowelCount function and return "two"', function() {
                vow = app.vowelCount('kajak');
                expect(vow).toBe('two');
            });
            it('should call generateMessage function and vowelCount should return "two"', function() {
                vow = app.generateMessage('akajaka');
                expect(vow).toEqual({vowel: "two", palindrome:true});
            });
        });

        describe('and.callFake', function () {
            var vow;
            beforeAll(function() {
                spyOn(app, 'vowelCount').and.callFake(function (vo) {
                    return Math.pow(vo.length, 2);
                });
            });
            it('should call fake vowelCount function', function() {
                vow = app.vowelCount('kajak');
                expect(vow).toBe(25);
            });
            it('should call generateMessage function and fake vowelCount function', function() {
                vow = app.generateMessage('kajak');
                expect(vow).toEqual({vowel: 25, palindrome: true});
            });
        });

        describe('calls.count()', function () {
            var vow;
            beforeAll(function() {
                spyOn(app, 'vowelCount').and.callThrough();
            });
            it('should realise that vowelCount is called', function() {
                vow = app.vowelCount('kajak');
                vow = app.vowelCount('ala');
                vow = app.vowelCount('kot');
                expect(app.vowelCount.calls.count()).toEqual(3);
            });
            it('should realise that vowelCount is called ' +
                'when generateMessage is called', function() {
                vow = app.generateMessage('nic');
                expect(app.vowelCount.calls.count()).toEqual(4);
            });
        });
    });
});


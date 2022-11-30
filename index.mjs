'use strict';
import { PinyinHelper } from './src/PinyinHelper.mjs';
import { ChineseHelper } from './src/ChineseHelper.mjs';

const WITH_TONE_MARK = "WITH_TONE_MARK";   //带声调
const WITHOUT_TONE = "WITHOUT_TONE";     //不带声调
const WITH_TONE_NUMBER = "WITH_TONE_NUMBER"; //数字代表声调
const FIRST_LETTER = "FIRST_LETTER";      //首字母风格

function convertToPinyinString(str, separator, format) {
    return PinyinHelper.convertToPinyinString(str, separator, format);
}

function convertToSimplifiedChinese(str) {
    return ChineseHelper.convertToSimplifiedChinese(str);
}

function convertToTraditionalChinese(str) {
    return ChineseHelper.convertToTraditionalChinese(str);
}

function getShortPinyin(str) {
    return PinyinHelper.getShortPinyin(str);
}

export {
    WITH_TONE_MARK,
    WITHOUT_TONE,
    WITH_TONE_NUMBER,
    FIRST_LETTER,
    convertToPinyinString,
    convertToSimplifiedChinese,
    convertToTraditionalChinese,
    getShortPinyin
}


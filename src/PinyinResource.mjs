/**
 * 字典加载
 * 
 * @auth superbiger(superbiger@qq.com)
 */
import { chinese_dict } from "./dict/chinese.dict.mjs"
import { mutil_pinyin_dict } from "./dict/mutil_pinyin.dict.mjs"
import { pinyin_dict } from "./dict/pinyin.dict.mjs"

export class PinyinResource {
    //单字拼音字典库
    static getPinyinResource() {
        return pinyin_dict;
    }
    //词组拼音字典库
    static getMutilPinyinResource() {
        return mutil_pinyin_dict;
    }
    //简繁对照库
    static getChineseResource() {
        return chinese_dict;
    }
}
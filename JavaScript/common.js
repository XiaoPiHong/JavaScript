/*
 * @Author: your name
 * @Date: 2020-03-04 18:15:39
 * @LastEditTime: 2020-03-04 18:49:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JavaScript\common.js
 */
/**
 * @description:获取指定格式的时间 
 * @param {dt} 日期的对象
 * @return: string 返回字符串的日期时间
 */
function getDate(dt) {
    //创建日期的对象
    var dt = new Date();
    //获取年
    var year = dt.getFullYear();
    //获取月
    var month = dt.getMonth();
    //获取日
    var day = dt.getDate();
    //获取时
    var hour = dt.getHours();
    //获取分
    var minute = dt.getMinutes();
    //获取秒
    var second = dt.getSeconds();
    month = month < 10 ? "0" + month : month;
    day = day < 10 ? "0" + day : day;
    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;
    return year + "年" + month + "月" + day + "日" + hour + ":" + minute + ":" + second;
}
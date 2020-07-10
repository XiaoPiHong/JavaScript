/*
 * @Author: your name
 * @Date: 2020-05-01 21:30:08
 * @LastEditTime: 2020-07-05 00:37:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \前端自学资料\WebAPI\common.js
 */
/**
 * @description: foreach的兼容代码(数组遍历的兼容代码，兼容ie8)
 * @param 
 * @return: 
 */
// Production steps of ECMA-262, Edition 5, 15.4.4.18
// Reference: http://es5.github.io/#x15.4.4.18
if (!Array.prototype.forEach) {

    Array.prototype.forEach = function (callback, thisArg) {

        var T, k;

        if (this == null) {
            throw new TypeError(' this is null or not defined');
        }

        // 1. Let O be the result of calling toObject() passing the
        // |this| value as the argument.
        var O = Object(this);

        // 2. Let lenValue be the result of calling the Get() internal
        // method of O with the argument "length".
        // 3. Let len be toUint32(lenValue).
        var len = O.length >>> 0;

        // 4. If isCallable(callback) is false, throw a TypeError exception. 
        // See: http://es5.github.com/#x9.11
        if (typeof callback !== "function") {
            throw new TypeError(callback + ' is not a function');
        }

        // 5. If thisArg was supplied, let T be thisArg; else let
        // T be undefined.
        if (arguments.length > 1) {
            T = thisArg;
        }

        // 6. Let k be 0
        k = 0;

        // 7. Repeat, while k < len
        while (k < len) {

            var kValue;

            // a. Let Pk be ToString(k).
            //    This is implicit for LHS operands of the in operator
            // b. Let kPresent be the result of calling the HasProperty
            //    internal method of O with argument Pk.
            //    This step can be combined with c
            // c. If kPresent is true, then
            if (k in O) {

                // i. Let kValue be the result of calling the Get internal
                // method of O with argument Pk.
                kValue = O[k];

                // ii. Call the Call internal method of callback with T as
                // the this value and argument list containing kValue, k, and O.
                callback.call(T, kValue, k, O);
            }
            // d. Increase k by 1.
            k++;
        }
        // 8. return undefined
    };
}

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
/**
 * @description: 根据id属性的值，返回对应的标签元素
 * @param {id} id属性的值(string类型)
 * @return: Element 元素对象
 */
function my$(id) {
    return document.getElementById(id);
}
/**
 * @description: 设置任意的标签中间的任意文本内容（封装的兼容代码）
 * @param {element,text} 元素对象，设置的文本内容
 * @return: 
 */
//设置任意的标签中间的任意文本内容------>没有返回值，因为只是设置文本内容
function setInnerText(element, text) {
    //判断浏览器是否支持这个属性
    if (typeof element.textContent == "undefined") {
        //不支持
        element.innerText = text;
    } else {
        //支持这个属性
        element.textContent = text;
    }
}
/**
 * @description: 获取任意标签中间的文本内容（封装的兼容代码）
 * @param {element} 元素对象
 * @return: string 获取的文本内容
 */
//获取任意标签中间的文本内容-------->有返回值，因为是要获取，返回值就是文本内容
function getInnerText(element) {
    if (typeof element.textContent == "undefined") {
        return element.innerText;
    } else {
        return element.textContent;
    }
}
/**
 * 获取父级元素中的第一个子元素
 * @param element 父级元素
 * @returns {*} 父级元素中的第一个子级元素
 */
function getFirstElement(element) {
    if (element.firstElementChild) {
        return element.firstElementChild;
    } else {
        var node = element.firstChild;
        while (node && node.nodeType != 1) {
            node = node.nextSibling;
        }
        return node;
    }
}
/**
 * 获取父级元素中的最后一个子元素
 * @param element 父级元素
 * @returns {*} 最后一个子元素
 */
function getLastElement(element) {
    if (element.lastElementChild) {
        return element.lastElementChild;
    } else {
        var node = element.lastChild;
        while (node && node.nodeType != 1) {
            node = node.previousSibling;
        }
        return node;
    }
}
/**
 * 获取某个元素的前一个兄弟元素
 * @param element 某个元素
 * @returns {*} 前一个兄弟元素
 */
function getPreviousElement(element) {
    if (element.previousElementSibling) {
        return element.previousElementSibling
    } else {
        var node = element.previousSibling;
        while (node && node.nodeType != 1) {
            node = node.previousSibling;
        }
        return node;
    }
}
/**
 * 获取某个元素的后一个兄弟元素
 * @param element 某个元素
 * @returns {*} 后一个兄弟元素
 */
function getNextElement(element) {
    if (element.nextElementSibling) {
        return element.nextElementSibling
    } else {
        var node = element.nextSibling;
        while (node && node.nodeType != 1) {
            node = node.nextSibling;
        }
        return node;
    }
}
/**
 * 获取某个元素的所有兄弟元素
 * @param element 某个元素
 * @returns {Array} 兄弟元素
 */
function getSiblings(element) {
    if (!element) return;
    var elements = [];
    var ele = element.previousSibling;
    while (ele) {
        if (ele.nodeType === 1) {
            elements.push(ele);
        }
        ele = ele.previousSibling;
    }
    ele = element.nextSibling;
    while (ele) {
        if (ele.nodeType === 1) {
            elements.push(ele);

        }
        ele = ele.nextSibling;
    }
    return elements;
}
/**
 * @description: 为任意元素，绑定任意的事件（防止同个元素绑定多个相同事件而导致前者事件被覆盖）
 * @param {element, type, fn} 元素对象，事件类型，事件处理函数
 * @return: 
 */
//为任意元素.绑定任意的事件（参数：任意的元素,事件的类型,事件处理函数）
function addEventListener(element, type, fn) {
    /*判断浏览器是否支持这个方法，直接===>对象.方法名,这样判断的是这个方法的类型，
    如：undefined；而不是===>对象.方法名(),因为这样判断的是方法的返回值 */
    if (element.addEventListener) {
        element.addEventListener(type, fn, false);
    } else if (element.attachEvent) {
        //为什么要加on，看webapi69
        element.attachEvent("on" + type, fn);
    } else {
        element["on" + type] = fn;
    }
}
/**
 * @description: 为任意元素解绑任意事件
 * @param {element, type, fnName} 元素对象，事件类型，函数的名字
 * @return: 
 */
//解绑事件的兼容代码
function removeEventListener(element, type, fnName) {
    if (element.removeEventListener) {
        element.removeEventListener(type, fnName, false);
    } else if (element.detachEvent) {
        element.detachEvent("on" + type, fnName);
    } else {
        element["on" + type] = null;
    }
}
/**
 * @description: 轮播图或Tab栏的排他功能
 * @param {elementObjs,className} 元素对象集合，类样式名
 * @return: 
 */
//轮播图或Tab栏的排他功能
function exclusive(elementObjs, claName) {
    //循环遍历elementObjs里所有的标签,注册鼠标进入的事件
    for (var i = 0; i < elementObjs.length; i++) {
        //循环的时候把索引值保存在每个标签的自定义属性中
        elementObjs[i].setAttribute("index", i);
        //注册鼠标进入事件
        elementObjs[i].onmouseover = function () {
            //先干掉所有标签的背景颜色
            for (var j = 0; j < elementObjs.length; j++) {
                //移除了每个元素的类样式
                elementObjs[j].removeAttribute("class");
            }
            //设置当前的标签的背景颜色
            this.className = "claName";
        };
    }
}
/**
 * @description: 轮播图图片的切换的封装函数
 * @param {element,target} 元素对象，目标距离
 * @return: 
 */
//设置任意的一个元素,移动到指定的目标位置
function animate(element, target) {
    clearInterval(element.timeId);
    //定时器的id值存储到对象的一个属性中
    element.timeId = setInterval(function () {
        //获取元素的当前的位置,数字类型
        var current = element.offsetLeft;
        //每次移动的距离
        var step = 10;
        step = current < target ? step : -step;
        //当前移动到位置
        current += step;
        if (Math.abs(current - target) > Math.abs(step)) {
            element.style.left = current + "px";
        } else {
            //清理定时器
            clearInterval(element.timeId);
            //直接到达目标
            element.style.left = target + "px";
        }
    }, 20);
}
/**
 * @description: 封装获取浏览器拉动滚动条时，卷曲出去的距离函数
 * @param {} 
 * @returns {{top: (Number|number), left: (Number|number)}} Obj 返回一个对象(该对象里面有left/top属性)
 */
function getScroll() {
    return {
        left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0,
        top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
    };
}
/**
 * @description: 封装变速动画函数
 * @param {element,target} 元素对象，目标距离
 * @return: 
 */
//变速动画
function animate1(element, target) {
    //清理定时器
    clearInterval(element.timeId);
    element.timeId = setInterval(function () {
        //获取元素的当前位置
        var current = element.offsetLeft;
        //移动的步数
        var step = (target - current) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        current += step;
        element.style.left = current + "px";
        if (current == target) {
            //清理定时器
            clearInterval(element.timeId);
        }
        //测试代码:
        console.log("目标位置:" + target + ",当前位置:" + current + ",每次移动步数:" + step);
    }, 20);
}
/**
 * @description: 封装获取任意一个元素的任意一个当前属性的属性值函数
 * @param {element,attr} 元素对象,样式属性(string类型)
 * @return: string(样式属性值，带单位的)
 */
function getStyle(element, attr) {
    //判断浏览器是否支持这个方法
    return window.getComputedStyle ? window.getComputedStyle(my$('dv'), null)[attr] : element.currentStyle[
        attr];
}
/**
 * @description: 封装缓动动画函数(可以是任意一个属性)
 * @param {element,attr,target}元素对象, 样式属性(string类型),目标距离
 * @return: 
 */
function animate2(element, attr, target) {
    //清理定时器
    clearInterval(element.timeId);
    element.timeId = setInterval(function () {
        //获取元素的当前位置
        var current = parseInt(getStyle(element, attr)); //数字类型===============================
        //移动的步数
        var step = (target - current) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        current += step;
        element.style[attr] = current + "px"; //============================================
        if (current == target) {
            //清理定时器
            clearInterval(element.timeId);
        }
        //测试代码:
        console.log("目标位置:" + target + ",当前位置:" + current + ",每次移动步数:" + step);
    }, 20);
}
/**
 * @description: 封装缓动动画函数（可以是任意多个属性）
 * @param {element,json} 元素对象,json对象
 * @return: 
 */
function animate3(element, json) {
    clearInterval(element.timeId);
    element.timeId = setInterval(function () {
        var flag = true; //默认,假设,全部到达目标
        for (var attr in json) {
            //获取元素这个属性的当前的值
            var current = parseInt(getStyle(element, attr));
            //当前的属性对应的目标值
            var target = json[attr];
            //移动的步数
            var step = (target - current) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            current += step; //移动后的值
            element.style[attr] = current + "px";
            if (current != target) {
                flag = false;
            }
        }
        if (flag) {
            //清理定时器
            clearInterval(element.timeId);
        }
        //测试代码
        console.log("目标:" + target + ",当前:" + current + ",每次的移动步数:" + step);
    }, 20);
}
/**
 * @description: 封装 缓动动画增加任意多个属性和回调函数 的函数
 * @param {element,json,fn} 元素对象，json对象，回调函数
 * @return: 
 */
//element---元素
//json---对象---多个属性及多个目标值
//fn---函数
function animate4(element, json, fn) {
    clearInterval(element.timeId);
    element.timeId = setInterval(function () {
        var flag = true; //默认,假设,全部到达目标
        for (var attr in json) {
            //获取元素这个属性的当前的值
            var current = parseInt(getStyle(element, attr));
            //当前的属性对应的目标值
            var target = json[attr];
            //移动的步数
            var step = (target - current) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            current += step; //移动后的值
            element.style[attr] = current + "px";
            if (current != target) {
                flag = false;
            }
        }
        if (flag) {
            //清理定时器
            clearInterval(element.timeId);
            //所有的属性到达目标才能使用这个函数,前提是用户传入了这个函数
            if (fn) {
                fn();
            }
        }
        //测试代码
        console.log("目标:" + target + ",当前:" + current + ",每次的移动步数:" + step);
    }, 20);
}
/**
 * @description: 封装缓动动画增加透明度和层级(最终)
 * @param {element,json,fn} 元素对象，json对象，回调函数 
 * @return: 
 */
function animate5(element, json, fn) {
    clearInterval(element.timeId); //清理定时器
    //定时器,返回的是定时器的id
    element.timeId = setInterval(function () {
        var flag = true; //默认,假设,全部到达目标
        //遍历json对象中的每个属性还有属性对应的目标值
        for (var attr in json) {
            //判断这个属性attr中是不是opacity
            if (attr == "opacity") {
                //获取元素的当前的透明度,当前的透明度放大100倍
                var current = getStyle(element, attr) * 100;
                //目标的透明度放大100倍
                var target = json[attr] * 100;
                var step = (target - current) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                current += step; //移动后的值
                element.style[attr] = current / 100;
            } else if (attr == "zIndex") { //判断这个属性attr中是不是zIndex
                //层级改变就是直接改变这个属性的值
                element.style[attr] = json[attr];
            } else {
                //普通的属性
                //获取元素这个属性的当前的值
                var current = parseInt(getStyle(element, attr));
                //当前的属性对应的目标值
                var target = json[attr];
                //移动的步数
                var step = (target - current) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                current += step; //移动后的值
                element.style[attr] = current + "px";
            }
            //是否到达目标
            if (current != target) {
                flag = false;
            }
        }
        if (flag) {
            //清理定时器
            clearInterval(element.timeId);
            //所有的属性到达目标才能使用这个函数,前提是用户传入了这个函数
            if (fn) {
                fn();
            }
        }
        //测试代码
        console.log("目标:" + target + ",当前:" + current + ",每次的移动步数:" + step);
    }, 20);
}
/**
 * @description: 返回当前浏览器是什么类型的浏览器
 * @param
 * @return:
 */
function userBrowser() {
    var browserName = navigator.userAgent.toLowerCase();
    if (/msie/i.test(browserName) && !/opera/.test(browserName)) {
        console.log("IE");
    } else if (/firefox/i.test(browserName)) {
        console.log("Firefox");
    } else if (/chrome/i.test(browserName) && /webkit/i.test(browserName) && /mozilla/i.test(browserName)) {
        console.log("Chrome");
    } else if (/opera/i.test(browserName)) {
        console.log("Opera");
    } else if (/webkit/i.test(browserName) && !(/chrome/i.test(browserName) && /webkit/i.test(browserName) && /mozilla/i.test(browserName))) {
        console.log("Safari");
    } else {
        console.log("不知道什么鬼!");
    }
}
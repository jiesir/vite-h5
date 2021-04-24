import axios from 'axios'
// import { uuid } from "@/utils/tools"
import router from '@/utils/router';

/**
 * 发起请求
 * @param {String} code 接口号
 * @param {Object} data 上送数据
 * @param {Object} options 请求配置
 */
export const rpc = (code, data = {}, options = {}) => {
    if (!App.device.isApp) {
        // H5
        if(App.ismock){
            const axiosConfig = {
                method: "GET",
                url: `${location.origin}/mock/${code}.app`
            }
            return new Promise((resolve, reject) => {
                axios(axiosConfig).then((res) => {
                    resolve(res.data)
                }).catch((err) => {
                    console.log('接口异常：' + err)
                    reject(err)
                });
            })
        }
        const method = (options.method !== 'GET') ? 'POST' : 'GET';
        const axiosConfig = {
            method: method,
            url: `${window.App.rpc_link}/${code}.app`
        }
        if (method === 'POST') {
            axiosConfig.headers = {
                // 'Accept': 'text/xml',
                // 'Content-Type': 'text/xml;charset=UTF-8',
                // 'Access-Control-Allow-Origin': '*'
            };
            axiosConfig.data = JSON.stringify(data);
        }
        console.warn(axiosConfig)
        return new Promise((resolve, reject) => {
            axios(axiosConfig).then((res) => {
                resolve(res.data)
            }).catch((err) => {
                console.log('接口异常：' + err)
                reject(err)
            });
        })
    } else {
        // 客户端

    }
};


/**
 * 打开页面
 * @param {String} url 页面地址
 * @param {Object} params 页面传参
 * @param {Object} options 页面配置
 */
export const pushWindow = (url, params = {}, options = {}) => {
    if (!App.device.isApp) {
        // H5
        window.App.params = Object.assign({}, params)
        router.push(url)
    } else {
        // 客户端
    }
};


/**
 * 关闭页面
 * @param {String} url 键
 */
export const popWindow = (url = {}) => {
    if (!App.device.isApp) {
        // H5
        router.back()
    } else {
        // 客户端
    }
};


/**
 * 设置数据缓存
 * @param {String} key 键
 * @param {Object} value 值
 */
export const setSessionStorage = (key, value) => {
    if (!App.device.isApp) {
        // H5
        sessionStorage.setItem(key, value)
    } else {
        // 客户端
    }
};


/**
 * 获取数据缓存
 * @param {String} key 键
 */
export const getSessionStorage = (key) => {
    return new Promise((resolve) => {
        if (!App.device.isApp) {
            // H5  
            const res = sessionStorage.getItem(key)
            resolve(res)
        } else {
            // 客户端
        }
    })
};


/**
 * 删除数据缓存
 * @param {String} key 键
 */
export const deleteSessionStorage = (key) => {
    if (!App.device.isApp) {
        // H5  
        return sessionStorage.removeItem(key)
    } else {
        // 客户端
    }
};


/**
 * 设置本地数据缓存
 * @param {String} key 键
 * @param {Object} value 值
 */
export const setLocalStorage = (key, value) => {
    if (!App.device.isApp) {
        // H5  
        localStorage.setItem(key, value)
    } else {
        // 客户端
    }
};


/**
 * 获取本地数据缓存
 * @param {String} key 键
 */
export const getLocalStorage = (key) => {
    return new Promise((resolve) => {
        if (!App.device.isApp) {
            // H5  
            const res = localStorage.getItem(key)
            resolve(res)
        } else {
            // 客户端
        }
    })
};


/**
 * 删除本地数据缓存
 * @param {String} key 键
 */
export const deleteLocalStorage = (key) => {
    if (!App.device.isApp) {
        // H5  
        return localStorage.removeItem(key)
    } else {
        // 客户端
    }
};


/**
 * 显示加载
 * @param {String} text 加载显示文本
 */
export const showLoading = (text) => {
    // return vant.Toast({
    //     type: 'loading',
    //     message: text,
    //     forbidClick: true,
    //     duration: 60000
    // });
};


/**
 * 隐藏加载
 */
export const hideLoading = (toast) => {
    // toast.clear();
};


/**
 * 提示框
 * @param {String} title 标题
 * @param {String} message 提示内容
 * @param {String} type 提示类型
 */
export const alert = (title, message, type = 0) => {
    // vant.Dialog.alert({
    //     title: title,
    //     message: message,
    // }).then(() => {
    //     // on close
    // });
};


/**
 * 弱提示
 * @param {String} message 提示内容
 * @param {String} icon 提示类型
 * @param {Integer} time 提示持续时间
 */
export const toast = (title, icon = '', time = 0) => {
    // vant.Toast(title);
};
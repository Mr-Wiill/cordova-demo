// 要求壳版本3.5.2
var Utils = {};

var appId = "";

Utils.init = function (_appId) {
  appId = _appId;
};


/**
 * 关闭页面
 */
Utils.goBack = function () {
  cordova.exec(null, null, "CDVEMPBridge", "goBack", []);
}

/**
 * H5手动设置原生导航栏标题
 * @param {string} title 标题
 */
Utils.setHtmlTitle = function (title) {
  cordova.exec(null, null, "CDVEMPBridge", "setHtmlTitle", [title]);
}

/**
 * 定位
 */
Utils.getLocation = function (callback) {
  cordova.exec(function (res) {
    if (typeof res == 'object') {
      callback(JSON.stringify(res))
    } else {
      callback(res)
    }
  }, null, "PMCdLocation", "getLocation", []);
}
/**
 * 开始录音
 * @param {number} time 可支持录音的时间，到时间自动停止并回调，0为不限制时长，需手动停止
 * @param {function} success 回调录音数据base64编码
 * @param {function} failure 回调失败信息 示例:'录音失败'
 */
Utils.startRecordNotice = function (time, success, failure) {
  cordova.exec(function (res) {
    if (!!res) {
      success && success(res);
    }
  }, function (error) {
    if (!!error) {
      failure && failure(error);
    }
  }, "CDVEMPBridge", "startRecordNotice", [time]);
}

/**
 * 结束录音 如果startRecordNotice没有限制时长，需要调用此方法结束录音。
 * @param {function} success 回调录音数据base64编码
 * @param {function} failure 回调失败信息 示例:'录音失败'
 */
Utils.audioRecorderStop = function (success, failure) {
  cordova.exec(function (res) {
    if (!!res) {
      success && success(res);
    }
  }, function (error) {
    if (!!error) {
      failure && failure(error);
    }
  }, "CDVEMPBridge", "audioRecorderStop", []);
}

/**
 * 播放路径下录音文件
 * @param {string} urlPath 音频文件路径
 */
Utils.audioRecorderPlay = function (urlPath) {
  cordova.exec(null, null, "CDVEMPBridge", "audioRecorderPlay", [urlPath]);
}

/**
 * 从外部系统返回太平洋寿险
 * @param {string} params RN通知接受参数
 */
Utils.toBxxe = function (params) {
  cordova.exec(null, null, "CDVEMPBridge", "toBxxe", [params]);
}

/**
 * folder:目录
 * fileName:文件名
 * validate_data:读数
 * {"folder":"testDir","fileName":"test.jpg","validate_data":"2826"}
 * 活体认证（唇语读数）
 * @param {string} params JSON字符串
 */
Utils.huotiCamera = function (params, callback) {
  cordova.exec(callback, null, "CDVEMPBridge", "huotiCamera", [params]);
}

/**
* 定位，根据缓存策略获取位置信息
* @param  {int} policy
* @desc 缓存策略，枚举值: 
* @enum SAPPLocationPolicyRealOnly = 0, // 获取实时位置，获取失败则返回失败，会触发加载
* @enum SAPPLocationPolicyRealFirst = 1, // 获取实时位置，获取失败则使用缓存，会触发加载
* @enum SAPPLocationPolicyCacheElseLoad = 2, // 使用缓存，无缓存则获取实时位置，有缓存时不触发加载
* @enum SAPPLocationPolicyCacheOnly = 3, // 仅使用缓存，不触发加载
* 
* @param  {function} success
* @desc 成功回调：定位成功时返回 success(jsonString)
*
* @param  {function} failure
* @desc 失败回调：定位服务不可用、无定位权限、定位失败时返回
* @desc 定位失败 failure({"code": "-1", "message": "描述，可能为空", "result": "jsonString, 可能为空"})
* @desc 定位服务不可用、无定位权限 failure({"code": "403", "message": "描述，可能为空", "result": "jsonString, 可能为空"})
*/
Utils.getLocationWithPolicy = function (policy, success, failure) {
  cordova.exec(function (res) {
    if (typeof res == 'object') {
      success(JSON.stringify(res))
    } else {
      success(res)
    }
  }, function (error) {
    if (typeof res == 'object') {
      failure(JSON.stringify(error))
    } else {
      failure(error)
    }
  }, "PMCdLocation", "getLocationWithPolicy", [policy]);
}

/**
* 经纬度转地址
*/
Utils.getAddress = function (point, callback) {
  cordova.exec(callback, null, "PMCdLocation", "getAddress", [point]);
}

/**
 * Get Constatns info
 *
 * @param {Function} successCallback The function to call when the heading data is available
 * @param {Function} errorCallback The function to call when there is an error getting the heading data. (OPTIONAL)
 */
Utils.getConstants = function (successCallback, errorCallback) {
  cordova.exec(
    successCallback,
    errorCallback,
    "CDVEMPBridge",
    "getConstants",
    []
  );
};

setTimeout(function () {
  Utils.getConstants(function (params) {
    Utils.userRootPath = params.userRootPath;
    // alert('userRootPath : ' + Utils.userRootPath);
  });
}, 300);

/**
 * 拨打电话
 * @param {string} phoneNumber 电话号码
 */
Utils.tel = function (phoneNumber) {
  cordova.exec(null, null, "CDVEMPBridge", "tel", [phoneNumber]);
};
/**
 * 发送短信
 * @param {string} phoneNumber 电话号码
 *  @param {string} content 短信内容
 */
Utils.sendMessage = function (phoneNumber, content) {
  cordova.exec(null, null, "CDVEMPBridge", "sendMessage", [
    phoneNumber,
    content
  ]);
};

/**
 * 生成二维码图片
 * @param {*} params
 * @param {function} callback
 */
Utils.getQRCodeImage = function (params, callback) { };
/**
 * 用系统浏览器打开网站
 * @param {function}url   网页url
 */
Utils.browser = function (url) {
  cordova.exec(null, null, "CDVEMPBridge", "browser", [url]);
};
/**
 * 复制内容到剪切板
 * @param {string} content
 */
Utils.copyToClipboard = function (content, callback) {
  cordova.exec(callback, null, "CDVEMPBridge", "copyToClipboard", [content]);
};

/**
 * 从剪切板读取内容
 * @param {function} callback
 */
Utils.getClipboardContent = function (callback) {
  cordova.exec(callback, null, "CDVEMPBridge", "getClipboardContent", [""]);
};

/**
 * 调用系统程序打开文件,只支持Android
 * @param {string} file 文件全路径
 * @param {function} callback
 */
Utils.openFile = function (file, callback) {
  cordova.exec(callback, null, "CDVEMPBridge", "openFile", [file]);
};
/**
 * 文件压缩
 * @param {string} destFile
 * @param {array} pathArray
 * @param {function} callback
 */
Utils.zipFile = function (destFile, pathArray, callback) {
  //pathArray = JSON.parse(pathArray);
  cordova.exec(callback, callback, "CDVEMPBridge", "zipFile", [
    destFile,
    JSON.stringify(pathArray)
  ]);
};

/**
 * 文件解压
 * @param {string} sourceFile  源文件
 * @param {string} destFile 目标路径
 * @param {function} callback
 */
Utils.unzipFile = function (sourceFile, destFile, callback) {
  cordova.exec(callback, callback, "CDVEMPBridge", "unzipFile", [
    sourceFile,
    destFile
  ]);
};
/**
 * 打开android应用
 * @param {string} packageName 包名
 * @param {string} className 类名
 * @param {object} params  参数
 */
Utils.openInstalledNativeApp = function (packageName, className, params) {
  cordova.exec(callback, null, "CDVEMPBridge", "openInstalledNativeApp", [
    packageName,
    className,
    params
  ]);
};
/**
 * 通过scheme方式打开第三方原生应用
 * @param {*} url   scheme
 * @param {*} params  参数
 * @param {*} callback  失败回调
 */
Utils.openInstalledNativeAppByScheme = function (url, params, callback) {
  cordova.exec(
    callback,
    null,
    "CDVEMPBridge",
    "openInstalledNativeAppByScheme",
    [url, params]
  );
};
/**
 * 压缩图片
 * @param {String} path  要压缩的图片的路径
 * @param {String} width  压缩后图片的宽度
 * @param {String} toPath  压缩后图片的存储路径
 * @param {function} callback 压缩回调
 */
Utils.zipImage = function (path, width, toPath, callback) {
  cordova.exec(callback, null, "CDVEMPBridge", "zipImage", [
    path,
    width,
    toPath
  ]);
};

/**
 * 获取手机是否越狱或root
 * @param {function} callback
 */
Utils.isRooted = function (callback) {
  cordova.exec(callback, null, "CDVEMPBridge", "isRooted", []);
};

/**
 * 获取图片base64编码
 * @param {String} path  要编码的图片路径
 * @param {function} callback  成功回调
 * @param {function} failureCallback 失败回调
 */
Utils.imageToBase64 = function (path, callback, failureCallback) {
  cordova.exec(callback, failureCallback, "CDVEMPBridge", "imageToBase64", [
    path
  ]);
};
/**
 * 获取app配置
 * @param  {string} appId
 * @param  {string} appType
 * @param  {function} callback
 */
Utils.getAppConfig = function (appId, appType, callback) {
  cordova.exec(callback, null, "CDVEMPBridge", "getAppConfig", [
    appId,
    appType
  ]);
};

/**
 * 获取当前用户信息
 * @param  {function} callback 用户信息回调
 */
Utils.getUserInfo = function (callback) {
  cordova.exec(callback, null, "CDVEMPBridge", "getUserInfo", []);
};
/**
 * 防止截屏和录屏
 */
Utils.disableScreenshots = function () {
  cordova.exec(null, null, "CDVEMPBridge", "disableScreenshots", []);
};
/**
 * 开放截屏和录屏
 */
Utils.enableScreenshots = function () {
  cordova.exec(null, null, "CDVEMPBridge", "enableScreenshots", []);
};
var ShareSDK = {};
ShareSDK.shareToWechat = function (params, callback) {
  params.appId = appId;
  params.appType = "cordova";
  cordova.exec(callback, null, "CDVEMPBridge", "shareToWechat", [
    JSON.stringify(params)
  ]);
};
ShareSDK.oneKeyShare = function (params, callback) {
  params.appId = appId;
  params.appType = "cordova";
  cordova.exec(callback, null, "CDVEMPBridge", "oneKeyShare", [
    JSON.stringify(params)
  ]);
};

/**
 * 打开安全认证登录页面
 * @param {function} callback 登录成功回调 (成功回调token2)
 * @param {function} failureCallback 失败或用户取消认证回调
 */
Utils.securityLogin = function (callback, failureCallback) {
  cordova.exec(callback, failureCallback, "CDVEMPBridge", "securityLogin", []);
};
/**
 * 校验安全token是否有效
 * @param {function} callback  true token有效  false token无效
 */
Utils.verifySecurityToken = function (callback) {
  cordova.exec(callback, null, "CDVEMPBridge", "verifySecurityToken", []);
};

/**
 * 获取安全认证token
 * @param {function} callback 若本地没有安全认证token 返回空
 */
Utils.getSecurityToken = function (callback) {
  cordova.exec(callback, null, "CDVEMPBridge", "getSecurityToken", []);
};
Utils.getSSOToken = function (callback) {
  cordova.exec(
    function (res) {
      var json = JSON.parse(res);
      var token = json.token;
      callback(token);
    },
    null,
    "CDVEMPBridge",
    "getUserInfo",
    []
  );
};

Utils.isLogin = function (callback) {
  cordova.exec(
    function (res) {
      var json = JSON.parse(res);
      var token = json.token;
      if (token == "") {
        callback(false);
      } else {
        callback(true);
      }
    },
    null,
    "CDVEMPBridge",
    "getUserInfo",
    []
  );
};

Utils.logout = function () {
  cordova.exec(null, null, "CDVEMPBridge", "logout", []);
};

Utils.login = function () {
  cordova.exec(null, null, "CDVEMPBridge", "login", []);
};

Utils.regist = function (params) {
  cordova.exec(null, null, "CDVEMPBridge", "regist", [params]);
};

Utils.zxRegist = function (params) {
  Utils.regist({
    source: "zx",
    url: params.url
  });
};

Utils.tbekRegist = function (params) {
  Utils.regist({
    source: "tbek",
    appName: params.appName,
    url: params.url
  });
};
/**
 * 注册完成后跳转RN应用
 * @param {Object} params 参数 params:{appName:"bxx",url:"http://www.baidu.com"}
 */
Utils.toAppRegist = function (params) {
  Utils.regist({
    source: "toApp",
    appName: params.appName,
    url: params.url
  });
};

Utils.toH5Regist = function (params) {
  Utils.regist({
    source: "toH5",
    url: params.url,
    showNav: params.showNav,
    navParams:
      params.showNav == false
        ? "{}"
        : JSON.stringify(params.navParams)
  });
};

Utils.goToMainApp = function (isClearUserInfo) {
  cordova.exec(null, null, "CDVEMPBridge", "goToMainApp", [isClearUserInfo]);
};

/**
 * 获取环境变量
 * @param {function} callback 回调字符串
 */
Utils.getCurrentEnv = function (callback) {
  cordova.exec(
    function (res) {
      callback(res);
    },
    null,
    "CDVEMPBridge",
    "getCurrentEnv",
    []
  );
};

/**
 * 校验安全token是否有效
 * @param {function} callback  true token有效  false token无效
 */
Utils.verifySecurityToken = function (callback) {
  cordova.exec(callback, null, "CDVEMPBridge", "verifySecurityToken", []);
};

/**
 * 获取安全认证token
 * @param {function} callback 若本地没有安全认证token 返回空
 */
Utils.getSecurityToken = function (callback) {
  cordova.exec(callback, null, "CDVEMPBridge", "getSecurityToken", []);
};

Utils.getIPAddress = function (callback) {
  cordova.exec(callback, null, "CDVEMPBridge", "getIPAddress", []);
};

/**
 * 获取设备唯一标识码
 */
Utils.getDeviceId = function (callback) {
  cordova.exec(callback, null, "CDVEMPBridge", "getDeviceID", []);
};

/**
 * 设置全局存储数据
 * @param {String} key
 * @param {String} value
 */
Utils.setGlobalValue = function (key, value) {
  cordova.exec(null, null, "CDVEMPBridge", "setGlobalValue", [key, value]);
};

/**
 * 获取全局存储数据 shouldDelete为是否清除该数据，默认为false不清除
 * @param {String} key
 * @param {bool} shouldDelete
 */
Utils.getGlobalValue = function (key, shouldDelete, callback) {
  cordova.exec(callback, null, "CDVEMPBridge", "getGlobalValue", [
    key,
    shouldDelete
  ]);
};

/**
 * Cordova 关闭三方webview
 */
Utils.closeWebview = function () {
  cordova.exec(null, null, "CDVEMPBridge", "closeWebview", []);
};

/**
 * Cordova打开太e赔
 */
Utils.openTEP = function (params, success, failure) {
  if (typeof params == "object") {
    if (params.showBack != undefined || params.showBack == true) {
      params.showBack = "yes";
    } else {
      params.showBack = "no";
    }
    params = JSON.stringify(params);
  }
  cordova.exec(success, failure, "CDVEMPBridge", "openTEP", [params]);
};

/**
 * 打开官网客服
 * params string （JSON字段:telNum、name、channel、headerTitle）
 */
Utils.openGwkfapp1 = function (params, callback) {
  cordova.exec(
    callback,
    function (res) {
      callback(res);
    },
    "CDVEMPBridge",
    "openGwkfapp1",
    [params]
  );
};

/**
 * 打开智享客服
 */
Utils.openHdCall = function (params, callback) {
  cordova.exec(
    callback,
    function (res) {
      callback(res);
    },
    "CDVEMPBridge",
    "openHdCall",
    [params]
  );
};

Utils.openHdCall2 = function (params, callback) {
  cordova.exec(
    callback,
    function (res) {
      callback(res);
    },
    "CDVEMPBridge",
    "openHdCall2",
    [params]
  );
};

Utils.isSecurityPwdEnable = function (type, callback) {
  cordova.exec(callback, null, "CDVEMPBridge", "isSecurityPwdEnable", [type]);
};

Utils.setSecurityPwd = function (type, callback) {
  cordova.exec(callback, null, "CDVEMPBridge", "setSecurityPwd", [type]);
};

Utils.updateSecurityPwd = function (type, callback) {
  cordova.exec(callback, null, "CDVEMPBridge", "updateSecurityPwd", [type]);
};

Utils.closeSecurityPwd = function (type, callback) {
  cordova.exec(callback, null, "CDVEMPBridge", "closeSecurityPwd", [type]);
};

Utils.saveBase64ImageToAlbum = function (base64, callback) {
  cordova.exec(callback, null, "CDVEMPBridge", "saveBase64ImageToAlbum", [base64]);
};
Utils.openIdOcr = function (callback) {
  cordova.exec(callback, null, "CDVEMPBridge", "openIdOcr", []);
};
Utils.openBankOcr = function (callback) {
  cordova.exec(callback, null, "CDVEMPBridge", "openBankOcr", []);
};

Utils.startHuotiMediaRecorder = function (params, callback) {
  cordova.exec(callback, null, "CDVEMPBridge", "startHuotiMediaRecorder", [params]);
};

/**
 * 打开小程序
 */
Utils.launchWXMiniProgram = function (appId, userName, path, type) {
  cordova.exec(null, null, "CDVEMPBridge", "launchWXMiniProgram", [
    appId,
    userName,
    path,
    type
  ]);
};

/**
 * 下载图片到本地相册
 */
Utils.saveImageToAlbum = function (url, callback) {
  cordova.exec(callback, null, "CDVEMPBridge", "saveImageToAlbum", [url]);
};

Utils.openTrainOcr = function (callback) {
  cordova.exec(callback, null, "CDVEMPBridge", "openTrainOcr", []);
};

Utils.openSilentLiveness = function (params, callback) {
  cordova.exec(callback, null, "CDVEMPBridge", "openSilentLiveness", [params]);
};

Utils.openSilentLivenessNew = function (params, callback) {
  cordova.exec(callback, null, "CDVEMPBridge", "openSilentLivenessNew", [params]);
}

Utils.openInteractiveLiveness = function (params, callback) {
  cordova.exec(callback, null, "CDVEMPBridge", "openInteractiveLiveness", [params]);
}

Utils.openInteractiveLivenessNew = function (params, callback) {
  cordova.exec(callback, null, "CDVEMPBridge", "openInteractiveLivenessNew", [params]);
}

Utils.openWebview = function (params, callback) {
  // {
  //   url: params.url,
  //   showNav: params.showNav,
  //   showTitle: params.showTitle,
  //   showBackOnly: params.showBackOnly,
  //   showShareBtn: params.showShareBtn,
  //   title: params.showNav == false ? "" : params.navParams.title,
  //   showBack: params.showNav == false ? false : params.navParams.showBack,
  //   showProgress: params.showNav == false ? false : params.navParams.showProgress
  // }
  const navParams = params.navParams || {};
  var openParams = Object.assign(params, navParams);
  openParams.navParams = undefined; // 删除该字段
  openParams.title = params.showNav == false ? "" : openParams.title;
  openParams.showBack = params.showNav == false ? false : openParams.showBack;
  cordova.exec(null, null, "CDVEMPBridge", "openWebview", [openParams]);
};

/**
 * 设置分享按钮是否显示
 */
Utils.setShareBtnVisiable = function (params) {
  cordova.exec(null, null, "CDVEMPBridge", "setShareBtnVisiable", [params]);
};

/**
 *判断是否安装APP
 * @param {String} packageName android唤起app包名 
 * @param {String} scheme ios唤起appscheme
 */
Utils.isAPPInstalled = function (packageName, scheme, callback) {
  cordova.exec(callback, null, "CDVEMPBridge", "isAPPInstalled", [packageName, scheme]);
}

/**
 * 获取客户端配置信息
 */
Utils.getClientConfig = function(callback) {
  cordova.exec(function (res) {
    if (typeof (res) != 'object') {
      res = JSON.parse(res);
    }
    callback(res);
  },
  null,
  "CDVEMPBridge",
  "getClientConfig",
  []);
}

/**
 * 设备相关信息
 * @param {function} callback
 * @desc 成功回调：定位成功时返回 success(JSONObject)
 * 
 * @desc JSONObject 示例 {"device":{"id":"59196D0CA46444ECBBE9A8F95403BFAA"},"edgeInsets":{"top":20,"left":0,"right":0,"bottom":34},"constant":{"navigationBarHeight":44,"tabBarHeight":49}}
 * @desc {JSONObject} device 设备信息，id 设备id，原 deviceId 接口返回值
 * @desc {JSONObject} edgeInsets 设备内边距，参照iOS safeArea实现
 * @desc {JSONObject} constant 设备适配常量数据字典
*/
Utils.deviceInfo = function (callback) {
  cordova.exec(
    function (res) {
      if (typeof (res) != 'object') {
        res = JSON.parse(res);
      }
      callback(res);
    },
    null,
    "CDVEMPBridge",
    "deviceInfo",
    []
  );
}

/**
 * APP相关信息
 * @param {function} callback
 * @desc 成功回调：定位成功时返回 success(JSONObject)
 * 
 * @desc JSONObject 示例 {"bundleId":"com.cpic.sxbxxsite","appVersion":"3.4.0","buildNumber":"80511"}
 * @desc bundleId 应用包名
 * @desc appVersion 商店版本号：iOS-version，Android-Version
 * @desc buildNumber 打包序号：iOS-build，Android-VersionCode
 * @desc userAgent User-Agent
*/
Utils.appInfo = function (callback) {
  cordova.exec(
    function (res) {
      if (typeof (res) != 'object') {
        res = JSON.parse(res);
      }
      callback(res);
    },
    null,
    "CDVEMPBridge",
    "appInfo",
    []
  );
}

/**
 * 监听cordova返回和关闭按钮
 * @param {string} itemName 'back'or'close' or 'all' or 'null'  'null'取消所有监听
 * @param {function} callback
 * @param {object} otoOptions  {alertTitle : '弹框标题',alertMessage : '弹框描述',webSource: {}}
 * @desc 成功回调：点击时 callback(res) 
 * 
 * @desc res 示例 'back'or'close' 

*/

Utils.listenToCordovaBack = function (itemName, callback, otoOptions) {
  cordova.exec(
    function (res) {
      callback(res);
    },
    null,
    "CDVEMPBridge",
    "listenToCordovaBack",
    !!otoOptions ? [itemName, {
      alertTitle: otoOptions.alertTitle,
      alertMessage: otoOptions.alertMessage,
      webSource: {
        url: otoOptions.webSource.url,
        showNav: otoOptions.webSource.showNav,
        showTitle: otoOptions.webSource.showTitle,
        showBackOnly: otoOptions.webSource.showBackOnly,
        showShareBtn: otoOptions.webSource.showShareBtn,
        title: otoOptions.webSource.showNav == false ? "" : otoOptions.webSource.navParams.title,
        showBack: otoOptions.webSource.showNav == false ? false : otoOptions.webSource.navParams.showBack,
        showProgress: otoOptions.webSource.showNav == false ? false : otoOptions.webSource.navParams.showProgress
      }
    }] : [itemName]
  );
}

/**
 * cordova返回操作
*/
Utils.webViewBack = function () {
  cordova.exec(
    null,
    null,
    "CDVEMPBridge",
    "webViewBack",
    []
  );
}
/**
 * cordova关闭操作
*/
Utils.webViewClose = function () {
  cordova.exec(
    null,
    null,
    "CDVEMPBridge",
    "webViewClose",
    []
  );
}

/**
 * 太AI车险定损拍照
 * @return 照片base64
 */
Utils.openCarDamageOcr = function (callback) {
  cordova.exec(callback, null, "CDVEMPBridge", "openCarDamageOcr", []);
}

/**
 * 太AI车险智能定损OCR
 * @param {string} taskId, // 任务id
 * @param {string} url // 视频定损成功后跳转地址
 * @param {number} maxImgNum // 最多可以上传的图片张数
 * @return {success: true} // 业务系统暂未使用，保留扩展
 */
Utils.openCarDamageOcrWithAIDetect = function (params, callback) {
    cordova.exec(callback, null, "CDVEMPBridge", "openCarDamageOcrWithAIDetect", [params]);
}

/**
 * 手动调起壳检测更新弹框
 * @param {bool}} false 提示更新 true 强制更新
 * @param {string} contents 定制化提示 多条以‘@@’连接 如 '修复已知缺陷@@修复未知缺陷'
 * @desc 成功回调：点击时 callback(res) 
 * 
 * @desc res 示例 'update'or'cancel' 用户去更新  或者 取消弹窗 

*/
Utils.showClientUpdateAlert = function (isForce, contents, callback) {
  cordova.exec(
    function (res) {
      callback(res);
    },
    null,
    "CDVEMPBridge",
    "showClientUpdateAlert",
    [isForce, contents]
  );
}

/**
 * contents  ex: {"page":"/mine/activity/ManagerSearchActivity",“params”:{}}    
   page：与App约定的跳转的路径，，必传  
   params 为之后可能需要传递给原生页面的预留参数  可以为空
 */

Utils.openNativePage = function (contents, callback) {
  cordova.exec(
    function (res) {
      callback(res);
    },
    null,
    "CDVEMPBridge",
    "openNativePage",
    [contents]
  );
}

/**
 * H5调用原生弹窗
 * contents  ex: {"title":"弹窗标题","message":"弹窗提示内容","positive":"确认按钮","negative":"取消按钮"}    
   title: 弹窗标题可为空  
   positive / negative 用户点击取消/确认按钮后，回调返回传入的按钮名称
 */

Utils.showNativeDialog = function (contents, callback) {
  cordova.exec(
    function (res) {
      callback(res);
    },
    null,
    "CDVEMPBridge",
    "showNativeDialog",
    [contents]
  );
}

/**
 * H5调用原生弹窗
 * contents  ex: {"showNav":true,"title":"导航栏标题"}    
   showNav: 是否显示导航栏
   title : 导航栏标题(仅在 shoNav == true 时 生效)
 */
Utils.updateNavigationStyle = function (contents, callback) {
  cordova.exec(
    function (res) {
      callback(res);
    },
    null,
    "CDVEMPBridge",
    "updateNavigationStyle",
    [contents]
  );
}

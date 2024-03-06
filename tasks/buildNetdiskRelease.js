const { src, dest, parallel, series } = require('gulp');
const { cleanTemp } = require('./cleanDir');
const { options } = require('../config/process.env');
const moduleConfig = require('../config/module.config.json');


const releaseDir = `release`
const releaseNetdiskDir = `release/${moduleConfig.version}/netdisk`




/**
 * 拷贝网盘发行配置
 */

function releasePad() {
  return src(`${releaseDir}/${moduleConfig.version}/pad-${moduleConfig.version}.zip`)
    .pipe(dest(`${releaseNetdiskDir}/1.小米平板澎湃OS专版（推荐）/模块`))
}

function releaseRatioOf3To2Pad() {
  return src(`${releaseDir}/${moduleConfig.version}/pad-ratioOf3To2-${moduleConfig.version}.zip`)
    .pipe(dest(`${releaseNetdiskDir}/2.小米平板6S Pro专版(适配3比2比例)/模块`))
}

function releasePadBySupportedShowDivider() {
  return src(`${releaseDir}/${moduleConfig.version}/pad-supportedShowDivider-${moduleConfig.version}.zip`)
    .pipe(dest(`${releaseNetdiskDir}/3.小米平板MIUI14专版（不支持左右滑动调节）/模块`))
}

function releaseFold() {
  return src(`${releaseDir}/${moduleConfig.version}/fold-${moduleConfig.version}.zip`)
    .pipe(dest(`${releaseNetdiskDir}/4.小米折叠屏专版（适配Mix Fold系列）/模块`))
}


function releasePadByMagicWindow() {
  return src(`${releaseDir}/${moduleConfig.version}/pad-magicWindow-${moduleConfig.version}.zip`)
    .pipe(dest(`${releaseNetdiskDir}/5.小米平板老魔窗专版（适配安卓11）/模块`))
}


function releasePadByMIUI14Transplant() {
  return src(`${releaseDir}/${moduleConfig.version}/transplant-${moduleConfig.version}.zip`)
    .pipe(dest(`${releaseNetdiskDir}/6.基于MIUI14的6 Max移植包专版（仅MIUI14移植可刷）/模块`))
}



module.exports = parallel(releasePad,releaseRatioOf3To2Pad,releasePadBySupportedShowDivider,releaseFold,releasePadByMagicWindow,releasePadByMIUI14Transplant)

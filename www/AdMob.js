var argscheck = require ('cordova/argscheck')
var exec      = require ('cordova/exec')

module.exports = function () {
 var exports = {}
 
 exports.AD_SIZE = {
  BANNER          : "BANNER",
  IAB_MRECT       : "IAB_MRECT",
  IAB_BANNER      : "IAB_BANNER",
  IAB_LEADERBOARD : "IAB_LEADERBOARD",
  SMART_BANNER    : "SMART_BANNER"
 }
 
 exports.createBannerView = function (options, success, error) {
  if (typeof options == "undefined" || options == null) options = {}
  cordova.exec (success, error, "AdMob", "createBannerView", [options])
 }
 
 exports.createInterstitialView = function (options, success, error) {
  cordova.exec (success, error, "AdMob", "createInterstitialView", [options])
 }
 
 exports.destroyBannerView = function (options, success, error) {
  if (typeof options == "undefined" || options == null) options = {}
  cordova.exec (success, error, "AdMob", "destroyBannerView", [])
 }
 
 exports.requestAd = function (options, success, error) {
  if (typeof options == "undefined" || options == null) options = {}
  cordova.exec (success, error, "AdMob", "requestAd", [options])
 }
 
 exports.requestInterstitialAd = function (options, success, error) {
  if (typeof options == "undefined" || options == null) options = {}
  cordova.exec (success, error, "AdMob", "requestInterstitialAd", [options])
 }
 
 exports.showAd = function (show, success, error) {
  if (typeof show === "undefined")	show = true
  cordova.exec (success, error, "AdMob", "showAd", [show])
 }
 
 exports.showInterstitialAd = function (show, success, error) {
  if (typeof show == "undefined") show = true
  cordova.exec (success, error, 'AdMob', 'showInterstitialAd', [show])
 }
 
 return exports
} ()

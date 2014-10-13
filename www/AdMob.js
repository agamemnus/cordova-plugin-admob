 var argscheck = require ('cordova/argscheck')
 var exec      = require ('cordova/exec')
 
 var admobExport = {}
 
 admobExport.AD_SIZE = {
  BANNER          : "BANNER",
  IAB_MRECT       : "IAB_MRECT",
  IAB_BANNER      : "IAB_BANNER",
  IAB_LEADERBOARD : "IAB_LEADERBOARD",
  SMART_BANNER    : "SMART_BANNER"
 }
 
 admobExport.createBannerView = function (options, success, error) {
  if (typeof options == "undefined" || options == null) options = {}
  cordova.exec (success, error, "AdMob", "createBannerView", [options])
 }
 
 admobExport.createInterstitialView = function (options, success, error) {
  cordova.exec (success, error, "AdMob", "createInterstitialView", [options])
 }
 
 admobExport.destroyBannerView = function (options, success, error) {
  if (typeof options == "undefined" || options == null) options = {}
  cordova.exec (success, error, "AdMob", "destroyBannerView", [])
 }
 
 admobExport.requestAd = function (options, success, error) {
 	if (typeof options == "undefined" || options == null) options = {}
  cordova.exec (success, error, "AdMob", "requestAd", [options])
 }
 
 admobExport.requestInterstitialAd = function (options, success, error) {
  if (typeof options == "undefined" || options == null) options = {}
  cordova.exec (success, error, "AdMob", "requestInterstitialAd", [options])
 }
 
 admobExport.showAd = function (show, success, error) {
 	if (typeof show === "undefined")	show = true
 	cordova.exec (success, error, "AdMob", "showAd", [show])
 }
 
 admobExport.showInterstitialAd = function (show, success, error) {
 	if (typeof show == "undefined") show = true
 	cordova.exec (success, error, 'AdMob', 'showInterstitialAd', [show])
 }
 module.exports = admobExport
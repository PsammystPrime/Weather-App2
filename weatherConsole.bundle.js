/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Console App/weatherConsole.js":
/*!*******************************************!*\
  !*** ./src/Console App/weatherConsole.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createWeatherObject: () => (/* binding */ createWeatherObject),\n/* harmony export */   getAppropriateWeatherGif: () => (/* binding */ getAppropriateWeatherGif),\n/* harmony export */   getWeatherData: () => (/* binding */ getWeatherData)\n/* harmony export */ });\nasync function getAppropriateWeatherGif(weatherData) {\r\n    // Get weather condition from weather data object.\r\n    const weatherCondition = weatherData.days[0].conditions;\r\n\r\n    try {\r\n        const weatherGifResponse = await fetch(\r\n            `https://api.giphy.com/v1/gifs/search?api_key=cdV83dbgRL2VFc2iNoBozLAQFezGJQY6&q=${weatherCondition}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`,\r\n            { mode: 'cors' }\r\n        );\r\n\r\n        const weatherGifResponseData = await weatherGifResponse.json();\r\n        if (weatherGifResponseData.data && weatherGifResponseData.data.length > 0) {\r\n            // Update URL in Weather object.\r\n            const gifURL = weatherGifResponseData.data[0].images.original.url;\r\n            if (gifURL) {\r\n                weatherData.days[0].icon = gifURL;\r\n                return weatherData;\r\n            }\r\n        } else {\r\n            throw new Error(\"Gif not found!\");\r\n        }\r\n    } catch (error) {\r\n        console.log(error);\r\n        alert(error);\r\n    }\r\n}\r\n\r\n// getAppropriateWeatherGif('sunny');\r\n\r\nasync function getWeatherData(location) {\r\n    try {\r\n        const weatherResponse = await fetch(\r\n            `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&key=VCS46D95CZEECUCCK4GBF554A&contentType=json`, \r\n            { mode: 'cors' }\r\n        );\r\n\r\n        const weatherData = await weatherResponse.json();\r\n        if (weatherData) return weatherData;\r\n    } catch (error) {\r\n        console.log(error);\r\n        alert(error);\r\n    }\r\n}\r\n\r\nfunction createWeatherObject(weatherData) {\r\n    // console.log(\"called from weather Obj\", weatherData);\r\n\r\n    let temperature = weatherData.days[0].temp;\r\n    let weatherCondition = weatherData.days[0].conditions;\r\n    let WeatherDescription = weatherData.days[0].description;\r\n    let weatherIcon = weatherData.days[0].icon;\r\n    let forecast = weatherData.description;\r\n    let humidity = weatherData.days[0].humidity;\r\n    let latitude = weatherData.latitude;\r\n    let longitude = weatherData.longitude;\r\n    let resolvedLocationName = weatherData.resolvedAddress;\r\n\r\n    return { \r\n        temperature,\r\n        weatherCondition,\r\n        WeatherDescription,\r\n        weatherIcon,\r\n        forecast,\r\n        humidity,\r\n        latitude,\r\n        longitude,\r\n        resolvedLocationName,\r\n    };\r\n}\r\n\r\n// getWeatherData('eldoret')\r\n//     .then(data => getAppropriateWeatherGif(data))\r\n//     .then(data => createWeatherObject(data))\r\n//     .then(data => addLatestSearchToStore(data));\r\n\r\n// getWeatherData('houston')\r\n//     .then(data => getAppropriateWeatherGif(data))\r\n//     .then(data => createWeatherObject(data))\r\n//     .then(data => addLatestSearchToStore(data));\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ29uc29sZSBBcHAvd2VhdGhlckNvbnNvbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0ZBQStGLGlCQUFpQjtBQUNoSCxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1HQUFtRyxTQUFTO0FBQzVHLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGV2c3RhcnRidWlsZGluZy8uL3NyYy9Db25zb2xlIEFwcC93ZWF0aGVyQ29uc29sZS5qcz9lN2UwIl0sInNvdXJjZXNDb250ZW50IjpbImFzeW5jIGZ1bmN0aW9uIGdldEFwcHJvcHJpYXRlV2VhdGhlckdpZih3ZWF0aGVyRGF0YSkge1xyXG4gICAgLy8gR2V0IHdlYXRoZXIgY29uZGl0aW9uIGZyb20gd2VhdGhlciBkYXRhIG9iamVjdC5cclxuICAgIGNvbnN0IHdlYXRoZXJDb25kaXRpb24gPSB3ZWF0aGVyRGF0YS5kYXlzWzBdLmNvbmRpdGlvbnM7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB3ZWF0aGVyR2lmUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICAgICAgYGh0dHBzOi8vYXBpLmdpcGh5LmNvbS92MS9naWZzL3NlYXJjaD9hcGlfa2V5PWNkVjgzZGJnUkwyVkZjMmlOb0JvekxBUUZlekdKUVk2JnE9JHt3ZWF0aGVyQ29uZGl0aW9ufSZsaW1pdD0yNSZvZmZzZXQ9MCZyYXRpbmc9ZyZsYW5nPWVuJmJ1bmRsZT1tZXNzYWdpbmdfbm9uX2NsaXBzYCxcclxuICAgICAgICAgICAgeyBtb2RlOiAnY29ycycgfVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGNvbnN0IHdlYXRoZXJHaWZSZXNwb25zZURhdGEgPSBhd2FpdCB3ZWF0aGVyR2lmUmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIGlmICh3ZWF0aGVyR2lmUmVzcG9uc2VEYXRhLmRhdGEgJiYgd2VhdGhlckdpZlJlc3BvbnNlRGF0YS5kYXRhLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgLy8gVXBkYXRlIFVSTCBpbiBXZWF0aGVyIG9iamVjdC5cclxuICAgICAgICAgICAgY29uc3QgZ2lmVVJMID0gd2VhdGhlckdpZlJlc3BvbnNlRGF0YS5kYXRhWzBdLmltYWdlcy5vcmlnaW5hbC51cmw7XHJcbiAgICAgICAgICAgIGlmIChnaWZVUkwpIHtcclxuICAgICAgICAgICAgICAgIHdlYXRoZXJEYXRhLmRheXNbMF0uaWNvbiA9IGdpZlVSTDtcclxuICAgICAgICAgICAgICAgIHJldHVybiB3ZWF0aGVyRGF0YTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdpZiBub3QgZm91bmQhXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIGFsZXJ0KGVycm9yKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gZ2V0QXBwcm9wcmlhdGVXZWF0aGVyR2lmKCdzdW5ueScpO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckRhdGEobG9jYXRpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgd2VhdGhlclJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgICAgIGBodHRwczovL3dlYXRoZXIudmlzdWFsY3Jvc3NpbmcuY29tL1Zpc3VhbENyb3NzaW5nV2ViU2VydmljZXMvcmVzdC9zZXJ2aWNlcy90aW1lbGluZS8ke2xvY2F0aW9ufT91bml0R3JvdXA9dXMma2V5PVZDUzQ2RDk1Q1pFRUNVQ0NLNEdCRjU1NEEmY29udGVudFR5cGU9anNvbmAsIFxyXG4gICAgICAgICAgICB7IG1vZGU6ICdjb3JzJyB9XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCB3ZWF0aGVyUmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIGlmICh3ZWF0aGVyRGF0YSkgcmV0dXJuIHdlYXRoZXJEYXRhO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgYWxlcnQoZXJyb3IpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVXZWF0aGVyT2JqZWN0KHdlYXRoZXJEYXRhKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcImNhbGxlZCBmcm9tIHdlYXRoZXIgT2JqXCIsIHdlYXRoZXJEYXRhKTtcclxuXHJcbiAgICBsZXQgdGVtcGVyYXR1cmUgPSB3ZWF0aGVyRGF0YS5kYXlzWzBdLnRlbXA7XHJcbiAgICBsZXQgd2VhdGhlckNvbmRpdGlvbiA9IHdlYXRoZXJEYXRhLmRheXNbMF0uY29uZGl0aW9ucztcclxuICAgIGxldCBXZWF0aGVyRGVzY3JpcHRpb24gPSB3ZWF0aGVyRGF0YS5kYXlzWzBdLmRlc2NyaXB0aW9uO1xyXG4gICAgbGV0IHdlYXRoZXJJY29uID0gd2VhdGhlckRhdGEuZGF5c1swXS5pY29uO1xyXG4gICAgbGV0IGZvcmVjYXN0ID0gd2VhdGhlckRhdGEuZGVzY3JpcHRpb247XHJcbiAgICBsZXQgaHVtaWRpdHkgPSB3ZWF0aGVyRGF0YS5kYXlzWzBdLmh1bWlkaXR5O1xyXG4gICAgbGV0IGxhdGl0dWRlID0gd2VhdGhlckRhdGEubGF0aXR1ZGU7XHJcbiAgICBsZXQgbG9uZ2l0dWRlID0gd2VhdGhlckRhdGEubG9uZ2l0dWRlO1xyXG4gICAgbGV0IHJlc29sdmVkTG9jYXRpb25OYW1lID0gd2VhdGhlckRhdGEucmVzb2x2ZWRBZGRyZXNzO1xyXG5cclxuICAgIHJldHVybiB7IFxyXG4gICAgICAgIHRlbXBlcmF0dXJlLFxyXG4gICAgICAgIHdlYXRoZXJDb25kaXRpb24sXHJcbiAgICAgICAgV2VhdGhlckRlc2NyaXB0aW9uLFxyXG4gICAgICAgIHdlYXRoZXJJY29uLFxyXG4gICAgICAgIGZvcmVjYXN0LFxyXG4gICAgICAgIGh1bWlkaXR5LFxyXG4gICAgICAgIGxhdGl0dWRlLFxyXG4gICAgICAgIGxvbmdpdHVkZSxcclxuICAgICAgICByZXNvbHZlZExvY2F0aW9uTmFtZSxcclxuICAgIH07XHJcbn1cclxuXHJcbi8vIGdldFdlYXRoZXJEYXRhKCdlbGRvcmV0JylcclxuLy8gICAgIC50aGVuKGRhdGEgPT4gZ2V0QXBwcm9wcmlhdGVXZWF0aGVyR2lmKGRhdGEpKVxyXG4vLyAgICAgLnRoZW4oZGF0YSA9PiBjcmVhdGVXZWF0aGVyT2JqZWN0KGRhdGEpKVxyXG4vLyAgICAgLnRoZW4oZGF0YSA9PiBhZGRMYXRlc3RTZWFyY2hUb1N0b3JlKGRhdGEpKTtcclxuXHJcbi8vIGdldFdlYXRoZXJEYXRhKCdob3VzdG9uJylcclxuLy8gICAgIC50aGVuKGRhdGEgPT4gZ2V0QXBwcm9wcmlhdGVXZWF0aGVyR2lmKGRhdGEpKVxyXG4vLyAgICAgLnRoZW4oZGF0YSA9PiBjcmVhdGVXZWF0aGVyT2JqZWN0KGRhdGEpKVxyXG4vLyAgICAgLnRoZW4oZGF0YSA9PiBhZGRMYXRlc3RTZWFyY2hUb1N0b3JlKGRhdGEpKTtcclxuXHJcbmV4cG9ydCB7IGdldFdlYXRoZXJEYXRhLCBnZXRBcHByb3ByaWF0ZVdlYXRoZXJHaWYsIGNyZWF0ZVdlYXRoZXJPYmplY3QgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Console App/weatherConsole.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/Console App/weatherConsole.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;
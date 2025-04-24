/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/rating-comparison/block.json":
/*!******************************************!*\
  !*** ./src/rating-comparison/block.json ***!
  \******************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"competitor-review-blocks/rating-comparison","version":"0.1.0","title":"Rating Comparison","category":"widgets","icon":"block-default","description":"Rating comparison block","example":{},"supports":{"html":false},"textdomain":"rating-comparison","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./view.js","attributes":{"cards":{"type":"array","default":[{"image":"","overallRating":"4.5","ratings":[{"reviewer":"G2","rating":"4.5"},{"reviewer":"Capterra","rating":"4.5"},{"reviewer":"Trustpilot","rating":"4.5"}],"link":"","target":""},{"image":"","overallRating":"4.5","ratings":[{"reviewer":"G2","rating":"4.5"},{"reviewer":"Capterra","rating":"4.5"},{"reviewer":"Trustpilot","rating":"4.5"}],"link":"","target":""}]}}}');

/***/ }),

/***/ "./src/rating-comparison/edit.js":
/*!***************************************!*\
  !*** ./src/rating-comparison/edit.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./src/rating-comparison/editor.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);





function Edit({
  attributes,
  setAttributes
}) {
  const {
    cards
  } = attributes;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)({
    className: "competitor-review-rating-comparison"
  });
  const updateCard = (index, key, value) => {
    const updatedCards = structuredClone(cards);
    updatedCards[index][key] = value;
    setAttributes({
      cards: updatedCards
    });
  };
  const updateRating = (cardIndex, ratingIndex, key, value) => {
    const updatedCards = structuredClone(cards);
    updatedCards[cardIndex].ratings[ratingIndex][key] = value;
    setAttributes({
      cards: updatedCards
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InspectorControls, {
      children: cards.map((card, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
        title: `Card ${index + 1}`,
        initialOpen: index === 0,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalSpacer, {
          marginBottom: 3
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.MediaUploadCheck, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.MediaUpload, {
              onSelect: media => updateCard(index, 'image', media.url),
              allowedTypes: ['image'],
              render: ({
                open
              }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
                onClick: open,
                isSecondary: true,
                children: card.image ? 'Change Image' : 'Upload Image'
              })
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalSpacer, {
          marginBottom: 3
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
          label: "Overall Rating",
          value: card.overallRating,
          onChange: val => updateCard(index, 'overallRating', val)
        }), card.ratings.map((rating, rIndex) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
          title: `Rating ${rIndex + 1}`,
          initialOpen: false,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
            label: "Reviewer",
            value: rating.reviewer,
            onChange: val => updateRating(index, rIndex, 'reviewer', val)
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
            label: "Rating",
            value: rating.rating,
            onChange: val => updateRating(index, rIndex, 'rating', val)
          })]
        }, rIndex)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalSpacer, {
          marginBottom: 3
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
          label: "Link",
          value: card.link,
          onChange: val => updateCard(index, 'link', val)
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalSpacer, {
          marginBottom: 3
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
            label: "Target",
            value: card.target,
            options: [{
              value: '',
              label: 'Default'
            }, {
              value: '_blank',
              label: 'Blank'
            }],
            onChange: val => updateCard(index, 'target', val)
          })
        })]
      }, index))
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      ...blockProps,
      children: cards.map(card => {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "competitor-review-rating-comparison-card",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
            src: card.image,
            className: "competitor-review-rating-comparison-logo",
            alt: "Logo goes here"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "competitor-review-rating-comparison-border"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            class: "competitor-review-rating-comparison-rating",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              class: "competitor-review-rating-comparison-rating-overall-container",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                class: "competitor-review-rating-comparison-rating-header",
                children: "Overall rating:"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                class: "competitor-review-rating-comparison-rating-overall",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                    children: card.overallRating
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                    children: " /5"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
                  class: "competitor-review-rating-comparison-rating-star",
                  src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkuMDQ5MiAxLjE5OTE2QzkuMzQ4NDcgMC4yODM4NzEgMTAuNjUxNSAwLjI4Mzg3NCAxMC45NTA4IDEuMTk5MTdMMTIuNjI2MSA2LjMyMjkyQzEyLjc2IDYuNzMyMjUgMTMuMTQzOCA3LjAwOTM5IDEzLjU3NjkgNy4wMDkzOUgxOC45OTg0QzE5Ljk2NjggNy4wMDkzOSAyMC4zNjk1IDguMjQwOTEgMTkuNTg2IDguODA2NTlMMTUuMiAxMS45NzMyQzE0Ljg0OTYgMTIuMjI2MiAxNC43MDI5IDEyLjY3NDYgMTQuODM2OCAxMy4wODRMMTYuNTEyMSAxOC4yMDc3QzE2LjgxMTQgMTkuMTIzIDE1Ljc1NzIgMTkuODg0MSAxNC45NzM3IDE5LjMxODVMMTAuNTg3NiAxNi4xNTE4QzEwLjIzNzIgMTUuODk4OCA5Ljc2Mjc2IDE1Ljg5ODggOS40MTIzNyAxNi4xNTE4TDUuMDI2MzQgMTkuMzE4NUM0LjI0Mjg0IDE5Ljg4NDEgMy4xODg2NCAxOS4xMjMgMy40ODc5MSAxOC4yMDc3TDUuMTYzMjIgMTMuMDg0QzUuMjk3MDYgMTIuNjc0NiA1LjE1MDQ0IDEyLjIyNjIgNC44MDAwNSAxMS45NzMyTDAuNDE0MDIxIDguODA2NTlDLTAuMzY5NDg1IDguMjQwOSAwLjAzMzE4NjIgNy4wMDkzOSAxLjAwMTY1IDcuMDA5MzlINi40MjMwOEM2Ljg1NjE5IDcuMDA5MzkgNy4yNDAwNCA2LjczMjI1IDcuMzczODggNi4zMjI5Mkw5LjA0OTIgMS4xOTkxNloiIGZpbGw9IiNGNzVCMTEiLz4KPC9zdmc+Cg==",
                  alt: "rating star"
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              class: "competitor-review-rating-comparison-rating-list",
              children: card.ratings.map(rating => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                class: "competitor-review-rating-comparison-rating-list-item",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                  children: [rating.reviewer, ":"]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                    children: rating.rating
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
                    class: "competitor-review-rating-comparison-rating-star",
                    src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkuMDQ5MiAxLjE5OTE2QzkuMzQ4NDcgMC4yODM4NzEgMTAuNjUxNSAwLjI4Mzg3NCAxMC45NTA4IDEuMTk5MTdMMTIuNjI2MSA2LjMyMjkyQzEyLjc2IDYuNzMyMjUgMTMuMTQzOCA3LjAwOTM5IDEzLjU3NjkgNy4wMDkzOUgxOC45OTg0QzE5Ljk2NjggNy4wMDkzOSAyMC4zNjk1IDguMjQwOTEgMTkuNTg2IDguODA2NTlMMTUuMiAxMS45NzMyQzE0Ljg0OTYgMTIuMjI2MiAxNC43MDI5IDEyLjY3NDYgMTQuODM2OCAxMy4wODRMMTYuNTEyMSAxOC4yMDc3QzE2LjgxMTQgMTkuMTIzIDE1Ljc1NzIgMTkuODg0MSAxNC45NzM3IDE5LjMxODVMMTAuNTg3NiAxNi4xNTE4QzEwLjIzNzIgMTUuODk4OCA5Ljc2Mjc2IDE1Ljg5ODggOS40MTIzNyAxNi4xNTE4TDUuMDI2MzQgMTkuMzE4NUM0LjI0Mjg0IDE5Ljg4NDEgMy4xODg2NCAxOS4xMjMgMy40ODc5MSAxOC4yMDc3TDUuMTYzMjIgMTMuMDg0QzUuMjk3MDYgMTIuNjc0NiA1LjE1MDQ0IDEyLjIyNjIgNC44MDAwNSAxMS45NzMyTDAuNDE0MDIxIDguODA2NTlDLTAuMzY5NDg1IDguMjQwOSAwLjAzMzE4NjIgNy4wMDkzOSAxLjAwMTY1IDcuMDA5MzlINi40MjMwOEM2Ljg1NjE5IDcuMDA5MzkgNy4yNDAwNCA2LjczMjI1IDcuMzczODggNi4zMjI5Mkw5LjA0OTIgMS4xOTkxNloiIGZpbGw9IiNGNzVCMTEiLz4KPC9zdmc+Cg==",
                    alt: "rating star"
                  })]
                })]
              }))
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              class: "competitor-review-rating-comparison-rating-link",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
                href: card.link,
                target: card.target || "_self",
                class: "btn btn-lg nacked-btn",
                children: ["See all Mailerlite alternatives", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
                  class: "btn-icon",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("svg", {
                    class: "svg-icon",
                    viewBox: "0 0 16 14",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", {
                      d: "M9.3 0L7.9 1.4L12.2 5.7H0V7.7H12.2L7.9 12L9.3 13.4L16 6.7L9.3 0Z",
                      fill: "currentColor"
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("svg", {
                    class: "svg-icon",
                    viewBox: "0 0 16 14",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", {
                      d: "M9.3 0L7.9 1.4L12.2 5.7H0V7.7H12.2L7.9 12L9.3 13.4L16 6.7L9.3 0Z",
                      fill: "currentColor"
                    })
                  })]
                })]
              })
            })]
          })]
        });
      })
    })]
  });
}

/***/ }),

/***/ "./src/rating-comparison/editor.scss":
/*!*******************************************!*\
  !*** ./src/rating-comparison/editor.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/rating-comparison/index.js":
/*!****************************************!*\
  !*** ./src/rating-comparison/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/rating-comparison/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/rating-comparison/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/rating-comparison/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/rating-comparison/block.json");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */




/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/rating-comparison/save.js":
/*!***************************************!*\
  !*** ./src/rating-comparison/save.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function save({
  attributes
}) {
  const {
    cards
  } = attributes;
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save({
    className: "competitor-review-rating-comparison"
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    ...blockProps,
    children: cards.map(card => {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "competitor-review-rating-comparison-card",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
          src: card.image,
          className: "competitor-review-rating-comparison-logo",
          alt: "Logo"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "competitor-review-rating-comparison-border"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          class: "competitor-review-rating-comparison-rating",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            class: "competitor-review-rating-comparison-rating-overall-container",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              class: "competitor-review-rating-comparison-rating-header",
              children: "Overall rating:"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              class: "competitor-review-rating-comparison-rating-overall",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                  children: card.overallRating
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                  children: " /5"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
                class: "competitor-review-rating-comparison-rating-star",
                src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkuMDQ5MiAxLjE5OTE2QzkuMzQ4NDcgMC4yODM4NzEgMTAuNjUxNSAwLjI4Mzg3NCAxMC45NTA4IDEuMTk5MTdMMTIuNjI2MSA2LjMyMjkyQzEyLjc2IDYuNzMyMjUgMTMuMTQzOCA3LjAwOTM5IDEzLjU3NjkgNy4wMDkzOUgxOC45OTg0QzE5Ljk2NjggNy4wMDkzOSAyMC4zNjk1IDguMjQwOTEgMTkuNTg2IDguODA2NTlMMTUuMiAxMS45NzMyQzE0Ljg0OTYgMTIuMjI2MiAxNC43MDI5IDEyLjY3NDYgMTQuODM2OCAxMy4wODRMMTYuNTEyMSAxOC4yMDc3QzE2LjgxMTQgMTkuMTIzIDE1Ljc1NzIgMTkuODg0MSAxNC45NzM3IDE5LjMxODVMMTAuNTg3NiAxNi4xNTE4QzEwLjIzNzIgMTUuODk4OCA5Ljc2Mjc2IDE1Ljg5ODggOS40MTIzNyAxNi4xNTE4TDUuMDI2MzQgMTkuMzE4NUM0LjI0Mjg0IDE5Ljg4NDEgMy4xODg2NCAxOS4xMjMgMy40ODc5MSAxOC4yMDc3TDUuMTYzMjIgMTMuMDg0QzUuMjk3MDYgMTIuNjc0NiA1LjE1MDQ0IDEyLjIyNjIgNC44MDAwNSAxMS45NzMyTDAuNDE0MDIxIDguODA2NTlDLTAuMzY5NDg1IDguMjQwOSAwLjAzMzE4NjIgNy4wMDkzOSAxLjAwMTY1IDcuMDA5MzlINi40MjMwOEM2Ljg1NjE5IDcuMDA5MzkgNy4yNDAwNCA2LjczMjI1IDcuMzczODggNi4zMjI5Mkw5LjA0OTIgMS4xOTkxNloiIGZpbGw9IiNGNzVCMTEiLz4KPC9zdmc+Cg==",
                alt: "rating star"
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            class: "competitor-review-rating-comparison-rating-list",
            children: card.ratings.map(rating => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              class: "competitor-review-rating-comparison-rating-list-item",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                children: [rating.reviewer, ":"]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                  children: rating.rating
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
                  class: "competitor-review-rating-comparison-rating-star",
                  src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkuMDQ5MiAxLjE5OTE2QzkuMzQ4NDcgMC4yODM4NzEgMTAuNjUxNSAwLjI4Mzg3NCAxMC45NTA4IDEuMTk5MTdMMTIuNjI2MSA2LjMyMjkyQzEyLjc2IDYuNzMyMjUgMTMuMTQzOCA3LjAwOTM5IDEzLjU3NjkgNy4wMDkzOUgxOC45OTg0QzE5Ljk2NjggNy4wMDkzOSAyMC4zNjk1IDguMjQwOTEgMTkuNTg2IDguODA2NTlMMTUuMiAxMS45NzMyQzE0Ljg0OTYgMTIuMjI2MiAxNC43MDI5IDEyLjY3NDYgMTQuODM2OCAxMy4wODRMMTYuNTEyMSAxOC4yMDc3QzE2LjgxMTQgMTkuMTIzIDE1Ljc1NzIgMTkuODg0MSAxNC45NzM3IDE5LjMxODVMMTAuNTg3NiAxNi4xNTE4QzEwLjIzNzIgMTUuODk4OCA5Ljc2Mjc2IDE1Ljg5ODggOS40MTIzNyAxNi4xNTE4TDUuMDI2MzQgMTkuMzE4NUM0LjI0Mjg0IDE5Ljg4NDEgMy4xODg2NCAxOS4xMjMgMy40ODc5MSAxOC4yMDc3TDUuMTYzMjIgMTMuMDg0QzUuMjk3MDYgMTIuNjc0NiA1LjE1MDQ0IDEyLjIyNjIgNC44MDAwNSAxMS45NzMyTDAuNDE0MDIxIDguODA2NTlDLTAuMzY5NDg1IDguMjQwOSAwLjAzMzE4NjIgNy4wMDkzOSAxLjAwMTY1IDcuMDA5MzlINi40MjMwOEM2Ljg1NjE5IDcuMDA5MzkgNy4yNDAwNCA2LjczMjI1IDcuMzczODggNi4zMjI5Mkw5LjA0OTIgMS4xOTkxNloiIGZpbGw9IiNGNzVCMTEiLz4KPC9zdmc+Cg==",
                  alt: "rating star"
                })]
              })]
            }))
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            class: "competitor-review-rating-comparison-rating-link",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("a", {
              href: card.link,
              target: card.target || "_self",
              class: "btn btn-lg nacked-btn",
              children: ["See all Mailerlite alternatives", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                class: "btn-icon",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                  class: "svg-icon",
                  viewBox: "0 0 16 14",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                    d: "M9.3 0L7.9 1.4L12.2 5.7H0V7.7H12.2L7.9 12L9.3 13.4L16 6.7L9.3 0Z",
                    fill: "currentColor"
                  })
                })
              })]
            })
          })]
        })]
      });
    })
  });
}

/***/ }),

/***/ "./src/rating-comparison/style.scss":
/*!******************************************!*\
  !*** ./src/rating-comparison/style.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"rating-comparison/index": 0,
/******/ 			"rating-comparison/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkcompetitor_review_blocks"] = globalThis["webpackChunkcompetitor_review_blocks"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["rating-comparison/style-index"], () => (__webpack_require__("./src/rating-comparison/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map
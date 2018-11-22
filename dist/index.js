module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(0);
var IconNoWeb3 = __webpack_require__(8);
var stylesheet = __webpack_require__(9);

function ErrorTemplate(props) {
  return React.createElement(
    'div',
    { className: 'Web3Provider-container' },
    React.createElement('style', { dangerouslySetInnerHTML: { __html: stylesheet }
    }),
    React.createElement(
      'div',
      { className: 'Web3Provider-wrapper' },
      React.createElement(
        'div',
        { className: 'Web3Provider-image' },
        React.createElement(IconNoWeb3, null)
      ),
      React.createElement('h1', {
        className: 'Web3Provider-title',
        dangerouslySetInnerHTML: { __html: props.title }
      }),
      React.createElement('p', {
        className: 'Web3Provider-message',
        dangerouslySetInnerHTML: { __html: props.message }
      })
    )
  );
}

module.exports = ErrorTemplate;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Web3Provider = __webpack_require__(3);
var ErrorTemplate = __webpack_require__(1);

module.exports.Web3Provider = Web3Provider;
module.exports.ErrorTemplate = ErrorTemplate;

module.exports = {
  Web3Provider: Web3Provider,
  ErrorTemplate: ErrorTemplate
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = __webpack_require__(0);
var PropTypes = __webpack_require__(4);
var isEmpty = __webpack_require__(5);
var range = __webpack_require__(6);
var AccountUnavailable = __webpack_require__(7);
var Web3Unavailable = __webpack_require__(10);

var ONE_SECOND = 1000;
var ONE_MINUTE = ONE_SECOND * 60;
var propTypes = {
  web3UnavailableScreen: PropTypes.any,
  accountUnavailableScreen: PropTypes.any,
  onChangeAccount: PropTypes.func
};
var defaultProps = {
  passive: false,
  web3UnavailableScreen: Web3Unavailable,
  accountUnavailableScreen: AccountUnavailable
};
var childContextTypes = {
  web3: PropTypes.shape({
    accounts: PropTypes.array,
    selectedAccount: PropTypes.string,
    network: PropTypes.string,
    networkId: PropTypes.number
  })
};

var Web3Provider = function (_React$Component) {
  _inherits(Web3Provider, _React$Component);

  function Web3Provider(props, context) {
    _classCallCheck(this, Web3Provider);

    var _this = _possibleConstructorReturn(this, (Web3Provider.__proto__ || Object.getPrototypeOf(Web3Provider)).call(this, props, context));

    var accounts = _this.getAccounts();

    _this.state = {
      accounts: accounts,
      networkId: null,
      networkError: null
    };
    _this.interval = null;
    _this.networkInterval = null;
    _this.fetchAccounts = _this.fetchAccounts.bind(_this);
    _this.fetchNetwork = _this.fetchNetwork.bind(_this);

    if (accounts) {
      _this.handleAccounts(accounts, true);
    }
    return _this;
  }

  _createClass(Web3Provider, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        web3: {
          accounts: this.state.accounts,
          selectedAccount: this.state.accounts && this.state.accounts[0],
          network: getNetwork(this.state.networkId),
          networkId: this.state.networkId
        }
      };
    }

    /**
     * Start polling accounts, & network. We poll indefinitely so that we can
     * react to the user changing accounts or netowrks.
     */

  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.fetchAccounts();
      this.fetchNetwork();
      this.initPoll();
      this.initNetworkPoll();
    }

    /**
     * Init web3/account polling, and prevent duplicate interval.
     * @return {void}
     */

  }, {
    key: 'initPoll',
    value: function initPoll() {
      if (!this.interval) {
        this.interval = setInterval(this.fetchAccounts, ONE_SECOND);
      }
    }

    /**
     * Init network polling, and prevent duplicate intervals.
     * @return {void}
     */

  }, {
    key: 'initNetworkPoll',
    value: function initNetworkPoll() {
      if (!this.networkInterval) {
        this.networkInterval = setInterval(this.fetchNetwork, ONE_MINUTE);
      }
    }

    /**
     * Update state regarding the availability of web3 and an ETH account.
     * @return {void}
     */

  }, {
    key: 'fetchAccounts',
    value: function fetchAccounts() {
      var _this2 = this;

      var _window = window,
          web3 = _window.web3;

      var ethAccounts = this.getAccounts();

      if (isEmpty(ethAccounts)) {
        web3 && web3.currentProvider && Promise.resolve(ethAccounts) // web3.currentProvider.getAccounts()
        .then(function (accounts) {
          return _this2.handleAccounts(accounts);
        }).catch(function (err) {
          _this2.setState({
            accountsError: err
          });
        });
      } else {
        this.handleAccounts(ethAccounts);
      }
    }
  }, {
    key: 'handleAccounts',
    value: function handleAccounts(accounts) {
      var isConstructor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var onChangeAccount = this.props.onChangeAccount;
      var store = this.context.store;

      var next = accounts[0];
      var curr = this.state.accounts[0];
      next = next && next.toLowerCase();
      curr = curr && curr.toLowerCase();
      var didChange = curr !== next;

      if (isEmpty(this.state.accounts) && !isEmpty(accounts)) {
        this.setState({
          accountsError: null,
          accounts: accounts
        });
      }

      if (didChange && !isConstructor) {
        this.setState({
          accountsError: null,
          accounts: accounts
        });
      }

      // If provided, execute callback
      if (didChange && typeof onChangeAccount === 'function') {
        onChangeAccount(next);
      }

      // If available, dispatch redux action
      if (store && typeof store.dispatch === 'function') {
        var didLogin = !curr && next;
        var didLogout = curr && !next;

        if (didLogout) {
          store.dispatch({
            type: 'web3/LOGOUT',
            address: null
          });
        } else if (didLogin || isConstructor && next) {
          store.dispatch({
            type: 'web3/RECEIVE_ACCOUNT',
            address: next
          });
        } else if (didChange && curr && next) {
          store.dispatch({
            type: 'web3/CHANGE_ACCOUNT',
            address: next
          });
        }
      }
    }

    /**
     * Get the network and update state accordingly.
     * @return {void}
     */

  }, {
    key: 'fetchNetwork',
    value: function fetchNetwork() {
      var _this3 = this;

      var _window2 = window,
          web3 = _window2.web3;


      if (web3) {
        var isV1 = /^1/.test(web3.version);
        var _getNetwork = isV1 ? web3.eth.net.getId : web3.version.getNetwork;

        _getNetwork(function (err, netId) {
          if (err) {
            _this3.setState({
              networkError: err
            });
          } else {
            if (netId != _this3.state.networkId) {
              _this3.setState({
                networkError: null,
                networkId: Number(netId)
              });
            }
          }
        });
      }
    }

    /**
     * Get the account. We wrap in try/catch because reading `web3.eth.accounts`
     * will throw if no account is selected.
     * @return {String}
     */

  }, {
    key: 'getAccounts',
    value: function getAccounts() {
      var _window3 = window,
          web3 = _window3.web3;


      try {
        var _window4 = window,
            _web = _window4.web3;

        var isV1 = /^1/.test(_web.version);
        // throws if no account selected
        var getV1Wallets = function getV1Wallets() {
          return range(_web.eth.accounts.wallet.length).map(function (i) {
            return _web.eth.accounts.wallet[i];
          }).map(function (w) {
            return w.address;
          });
        };
        var accounts = isV1 ? getV1Wallets() : _web.eth.accounts;

        return accounts;
      } catch (e) {
        return [];
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _window5 = window,
          web3 = _window5.web3;
      var _props = this.props,
          passive = _props.passive,
          Web3UnavailableComponent = _props.web3UnavailableScreen,
          AccountUnavailableComponent = _props.accountUnavailableScreen;


      if (passive) {
        return this.props.children;
      }

      if (!web3) {
        return React.createElement(Web3UnavailableComponent, null);
      }

      if (isEmpty(this.state.accounts)) {
        return React.createElement(AccountUnavailableComponent, null);
      }

      return this.props.children;
    }
  }]);

  return Web3Provider;
}(React.Component);

Web3Provider.contextTypes = {
  store: PropTypes.object
};


Web3Provider.propTypes = propTypes;
Web3Provider.defaultProps = defaultProps;
Web3Provider.childContextTypes = childContextTypes;

module.exports = Web3Provider;

/* =============================================================================
=    Deps
============================================================================= */
function getNetwork(networkId) {
  switch (networkId) {
    case 1:
      return 'MAINNET';
    case 2:
      return 'MORDEN';
    case 3:
      return 'ROPSTEN';
    case 4:
      return 'RINKEBY';
    case 42:
      return 'KOVAN';
    default:
      return 'UNKNOWN';
  }
}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("lodash/isEmpty");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("lodash/range");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(0);
var ErrorTemplate = __webpack_require__(1);

var AccountUnavailable = ErrorTemplate.bind(null, {
  title: 'No ETH Account Available',
  message: '\nIt seems that you don&apos;t have an ETH account selected. If using\nMetaMask, please make sure that your wallet is unlocked and that\nyou have at least one account in your accounts list.'
});

module.exports = AccountUnavailable;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconNoWeb3(props) {
  return _react2.default.createElement(
    "svg",
    { width: "100%", height: "100%", viewBox: "0 0 332 417", version: "1.1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink" },
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", { d: "M198.610685,43.1017808 C107.24977,43.1017808 33.1017808,117.24977 33.1017808,208.610685 C33.1017808,299.971599 107.24977,374.119588 198.610685,374.119588 C289.971599,374.119588 364.119588,299.971599 364.119588,208.610685 C364.119588,117.24977 289.971599,43.1017808 198.610685,43.1017808 L198.610685,43.1017808 Z M198.610685,341.017808 C125.455749,341.017808 66.2035615,281.76562 66.2035615,208.610685 C66.2035615,177.991537 76.6306225,149.855024 94.1745663,127.511322 L279.710047,313.046803 C257.366345,330.590747 229.229832,341.017808 198.610685,341.017808 L198.610685,341.017808 Z M303.046803,289.710047 L117.511322,104.174566 C139.855024,86.6306225 167.991537,76.2035615 198.610685,76.2035615 C271.76562,76.2035615 331.017808,135.455749 331.017808,208.610685 C331.017808,239.229832 320.590747,267.366345 303.046803,289.710047 L303.046803,289.710047 Z", id: "path-1" })
    ),
    _react2.default.createElement(
      "g",
      { id: "Page-1", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
      _react2.default.createElement(
        "g",
        { id: "Group", transform: "translate(-33.000000, 0.000000)" },
        _react2.default.createElement(
          "g",
          { id: "Ethereum_logo_2014", opacity: "0.208899457", transform: "translate(71.000000, 0.000000)", fillRule: "nonzero" },
          _react2.default.createElement("polygon", { id: "Shape", fill: "#343434", points: "127.9611 0 125.1661 9.5 125.1661 285.168 127.9611 287.958 255.9231 212.32" }),
          _react2.default.createElement("polygon", { id: "Shape", fill: "#8C8C8C", points: "127.962 0 0 212.32 127.962 287.959 127.962 154.158" }),
          _react2.default.createElement("polygon", { id: "Shape", fill: "#3C3C3B", points: "127.9611 312.1866 126.3861 314.1066 126.3861 412.3056 127.9611 416.9066 255.9991 236.5866" }),
          _react2.default.createElement("polygon", { id: "Shape", fill: "#8C8C8C", points: "127.962 416.9052 127.962 312.1852 0 236.5852" }),
          _react2.default.createElement("polygon", { id: "Shape", fill: "#141414", points: "127.9611 287.9577 255.9211 212.3207 127.9611 154.1587" }),
          _react2.default.createElement("polygon", { id: "Shape", fill: "#393939", points: "0.0009 212.3208 127.9609 287.9578 127.9609 154.1588" })
        ),
        _react2.default.createElement("g", { id: "ic_do_not_disturb", transform: "translate(0.000000, 10.000000)" }),
        _react2.default.createElement("polygon", { id: "Bounds", points: "0 10 397.221369 10 397.221369 407.221369 0 407.221369" }),
        _react2.default.createElement(
          "g",
          { id: "Icon" },
          _react2.default.createElement("use", { fill: "#FFE1DE", fillRule: "evenodd", xlinkHref: "#path-1" }),
          _react2.default.createElement("path", { stroke: "#FFFFFF", strokeWidth: "6", d: "M198.610685,46.1017808 C288.314745,46.1017808 361.119588,118.906624 361.119588,208.610685 C361.119588,298.314745 288.314745,371.119588 198.610685,371.119588 C108.906624,371.119588 36.1017808,298.314745 36.1017808,208.610685 C36.1017808,118.906624 108.906624,46.1017808 198.610685,46.1017808 Z M198.610685,344.017808 C123.798895,344.017808 63.2035615,283.422474 63.2035615,208.610685 C63.2035615,178.077442 73.3736714,149.145233 91.8150049,125.658629 L93.9040007,122.998115 L284.223254,313.317368 L281.56274,315.406364 C258.076136,333.847698 229.143927,344.017808 198.610685,344.017808 Z M303.317368,294.223254 L112.998115,103.904001 L115.658629,101.815005 C139.145233,83.3736714 168.077442,73.2035615 198.610685,73.2035615 C273.422474,73.2035615 334.017808,133.798895 334.017808,208.610685 C334.017808,239.143927 323.847698,268.076136 305.406364,291.56274 L303.317368,294.223254 Z" })
        )
      )
    )
  );
}

module.exports = IconNoWeb3;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = "\n.Web3Provider-container {\n  font-family: Helvetica, Arial;\n  color: hsl(0,0%,50%);\n  position: relative;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  background: hsl(0, 0%, 95%);\n  background: -webkit-linear-gradient(hsl(0, 0%, 100%), hsl(0, 0%, 95%));\n  background: -moz-linear-gradient(hsl(0, 0%, 100%), hsl(0, 0%, 95%));\n  background: -o-linear-gradient(hsl(0, 0%, 100%), hsl(0, 0%, 95%));\n  background: linear-gradient(hsl(0, 0%, 100%), hsl(0, 0%, 95%));\n}\n.Web3Provider-wrapper {\n  width: 400px;\n  border: 1px solid hsl(207, 90%, 54%);\n  border-radius: 20px;\n  text-align: center;\n  padding: 50px 40px;\n  margin: 80px auto;\n}\n.Web3Provider-image {\n  max-height: 175px;\n}\n.Web3Provider-title {\n  margin-top: 50px;\n  color: hsl(0,0%,25%);\n}\n.Web3Provider-message {\n  line-height: 27px;\n  font-size: 18px;\n  color: hsl(0,0%,50%);\n}\n";

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(0);
var ErrorTemplate = __webpack_require__(1);

var Web3Unavailable = ErrorTemplate.bind(null, {
  title: 'Web3 Not Found',
  message: '\nIt seems that you are using a browser without Web3 capabilities. Please\nmake sure that you are using a web3-capable browser like mist or parity.\nIf you are using MetaMask or Parity extension, make sure that it is\nenabled.\n'
});

module.exports = Web3Unavailable;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMmQ0MTUzMWEzMzhjNzliODg2MTMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vLi9zcmMvRXJyb3JUZW1wbGF0ZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9XZWIzUHJvdmlkZXIuanN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2Rhc2gvaXNFbXB0eVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaC9yYW5nZVwiIiwid2VicGFjazovLy8uL3NyYy9BY2NvdW50VW5hdmFpbGFibGUuanN4Iiwid2VicGFjazovLy8uL3NyYy9JY29uTm9XZWIzLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzaGVldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvV2ViM1VuYXZhaWxhYmxlLmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJJY29uTm9XZWIzIiwic3R5bGVzaGVldCIsIkVycm9yVGVtcGxhdGUiLCJwcm9wcyIsIl9faHRtbCIsInRpdGxlIiwibWVzc2FnZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJXZWIzUHJvdmlkZXIiLCJQcm9wVHlwZXMiLCJpc0VtcHR5IiwicmFuZ2UiLCJBY2NvdW50VW5hdmFpbGFibGUiLCJXZWIzVW5hdmFpbGFibGUiLCJPTkVfU0VDT05EIiwiT05FX01JTlVURSIsInByb3BUeXBlcyIsIndlYjNVbmF2YWlsYWJsZVNjcmVlbiIsImFueSIsImFjY291bnRVbmF2YWlsYWJsZVNjcmVlbiIsIm9uQ2hhbmdlQWNjb3VudCIsImZ1bmMiLCJkZWZhdWx0UHJvcHMiLCJwYXNzaXZlIiwiY2hpbGRDb250ZXh0VHlwZXMiLCJ3ZWIzIiwic2hhcGUiLCJhY2NvdW50cyIsImFycmF5Iiwic2VsZWN0ZWRBY2NvdW50Iiwic3RyaW5nIiwibmV0d29yayIsIm5ldHdvcmtJZCIsIm51bWJlciIsImNvbnRleHQiLCJnZXRBY2NvdW50cyIsInN0YXRlIiwibmV0d29ya0Vycm9yIiwiaW50ZXJ2YWwiLCJuZXR3b3JrSW50ZXJ2YWwiLCJmZXRjaEFjY291bnRzIiwiYmluZCIsImZldGNoTmV0d29yayIsImhhbmRsZUFjY291bnRzIiwiZ2V0TmV0d29yayIsImluaXRQb2xsIiwiaW5pdE5ldHdvcmtQb2xsIiwic2V0SW50ZXJ2YWwiLCJ3aW5kb3ciLCJldGhBY2NvdW50cyIsImN1cnJlbnRQcm92aWRlciIsIlByb21pc2UiLCJyZXNvbHZlIiwidGhlbiIsImNhdGNoIiwiZXJyIiwic2V0U3RhdGUiLCJhY2NvdW50c0Vycm9yIiwiaXNDb25zdHJ1Y3RvciIsInN0b3JlIiwibmV4dCIsImN1cnIiLCJ0b0xvd2VyQ2FzZSIsImRpZENoYW5nZSIsImRpc3BhdGNoIiwiZGlkTG9naW4iLCJkaWRMb2dvdXQiLCJ0eXBlIiwiYWRkcmVzcyIsImlzVjEiLCJ0ZXN0IiwidmVyc2lvbiIsImV0aCIsIm5ldCIsImdldElkIiwibmV0SWQiLCJOdW1iZXIiLCJnZXRWMVdhbGxldHMiLCJ3YWxsZXQiLCJsZW5ndGgiLCJtYXAiLCJpIiwidyIsImUiLCJXZWIzVW5hdmFpbGFibGVDb21wb25lbnQiLCJBY2NvdW50VW5hdmFpbGFibGVDb21wb25lbnQiLCJjaGlsZHJlbiIsIkNvbXBvbmVudCIsImNvbnRleHRUeXBlcyIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBC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REFBUyxJQUFHLFFBQVosRUFBcUIsUUFBTyx1REFBNUIsR0FWRjtBQVdFO0FBQUE7QUFBQSxZQUFHLElBQUcsTUFBTjtBQUNFLGlEQUFLLE1BQUssU0FBVixFQUFvQixVQUFTLFNBQTdCLEVBQXVDLFdBQVUsU0FBakQsR0FERjtBQUVFLGtEQUFNLFFBQU8sU0FBYixFQUF1QixhQUFZLEdBQW5DLEVBQXVDLEdBQUUsazNCQUF6QztBQUZGO0FBWEY7QUFERjtBQUpBLEdBRkY7QUEwQkQ7O0FBRURJLE9BQU9DLE9BQVAsR0FBaUJSLFVBQWpCLEM7Ozs7Ozs7OztBQy9CQU8sT0FBT0MsT0FBUCxxM0I7Ozs7Ozs7OztBQ0FBLElBQU1WLFFBQVEsbUJBQUFDLENBQVEsQ0FBUixDQUFkO0FBQ0EsSUFBTUcsZ0JBQWdCLG1CQUFBSCxDQUFRLENBQVIsQ0FBdEI7O0FBRUEsSUFBTWUsa0JBQWtCWixjQUFjd0MsSUFBZCxDQUFtQixJQUFuQixFQUF5QjtBQUMvQ3JDLFNBQU8sZ0JBRHdDO0FBRS9DQztBQUYrQyxDQUF6QixDQUF4Qjs7QUFVQUMsT0FBT0MsT0FBUCxHQUFpQk0sZUFBakIsQyIsImZpbGUiOiIuL2Rpc3QvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAyZDQxNTMxYTMzOGM3OWI4ODYxMyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3RcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5jb25zdCBJY29uTm9XZWIzID0gcmVxdWlyZSgnLi9JY29uTm9XZWIzJyk7XG5jb25zdCBzdHlsZXNoZWV0ID0gcmVxdWlyZSgnLi9zdHlsZXNoZWV0Jyk7XG5cbmZ1bmN0aW9uIEVycm9yVGVtcGxhdGUocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIldlYjNQcm92aWRlci1jb250YWluZXJcIj5cbiAgICAgIDxzdHlsZSBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHN0eWxlc2hlZXQgfX1cbiAgICAgIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIldlYjNQcm92aWRlci13cmFwcGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiV2ViM1Byb3ZpZGVyLWltYWdlXCI+XG4gICAgICAgICAgPEljb25Ob1dlYjMgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxoMVxuICAgICAgICAgIGNsYXNzTmFtZT1cIldlYjNQcm92aWRlci10aXRsZVwiXG4gICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwcm9wcy50aXRsZSB9fVxuICAgICAgICAvPlxuICAgICAgICA8cFxuICAgICAgICAgIGNsYXNzTmFtZT1cIldlYjNQcm92aWRlci1tZXNzYWdlXCJcbiAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHByb3BzLm1lc3NhZ2UgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbm1vZHVsZS5leHBvcnRzID0gRXJyb3JUZW1wbGF0ZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9FcnJvclRlbXBsYXRlLmpzeCIsImNvbnN0IFdlYjNQcm92aWRlciA9IHJlcXVpcmUoJy4vV2ViM1Byb3ZpZGVyJyk7XG5jb25zdCBFcnJvclRlbXBsYXRlID0gcmVxdWlyZSgnLi9FcnJvclRlbXBsYXRlJyk7XG5cbm1vZHVsZS5leHBvcnRzLldlYjNQcm92aWRlciA9IFdlYjNQcm92aWRlcjtcbm1vZHVsZS5leHBvcnRzLkVycm9yVGVtcGxhdGUgPSBFcnJvclRlbXBsYXRlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgV2ViM1Byb3ZpZGVyLFxuICBFcnJvclRlbXBsYXRlXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuY29uc3QgUHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuY29uc3QgaXNFbXB0eSA9IHJlcXVpcmUoJ2xvZGFzaC9pc0VtcHR5Jyk7XG5jb25zdCByYW5nZSA9IHJlcXVpcmUoJ2xvZGFzaC9yYW5nZScpO1xuY29uc3QgQWNjb3VudFVuYXZhaWxhYmxlID0gcmVxdWlyZSgnLi9BY2NvdW50VW5hdmFpbGFibGUnKTtcbmNvbnN0IFdlYjNVbmF2YWlsYWJsZSA9IHJlcXVpcmUoJy4vV2ViM1VuYXZhaWxhYmxlJyk7XG5cbmNvbnN0IE9ORV9TRUNPTkQgPSAxMDAwO1xuY29uc3QgT05FX01JTlVURSA9IE9ORV9TRUNPTkQgKiA2MDtcbmNvbnN0IHByb3BUeXBlcyA9IHtcbiAgd2ViM1VuYXZhaWxhYmxlU2NyZWVuOiBQcm9wVHlwZXMuYW55LFxuICBhY2NvdW50VW5hdmFpbGFibGVTY3JlZW46IFByb3BUeXBlcy5hbnksXG4gIG9uQ2hhbmdlQWNjb3VudDogUHJvcFR5cGVzLmZ1bmNcbn07XG5jb25zdCBkZWZhdWx0UHJvcHMgPSB7XG4gIHBhc3NpdmU6IGZhbHNlLFxuICB3ZWIzVW5hdmFpbGFibGVTY3JlZW46IFdlYjNVbmF2YWlsYWJsZSxcbiAgYWNjb3VudFVuYXZhaWxhYmxlU2NyZWVuOiBBY2NvdW50VW5hdmFpbGFibGVcbn07XG5jb25zdCBjaGlsZENvbnRleHRUeXBlcyA9IHtcbiAgd2ViMzogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBhY2NvdW50czogUHJvcFR5cGVzLmFycmF5LFxuICAgIHNlbGVjdGVkQWNjb3VudDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBuZXR3b3JrOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG5ldHdvcmtJZDogUHJvcFR5cGVzLm51bWJlclxuICB9KVxufTtcblxuY2xhc3MgV2ViM1Byb3ZpZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgY29udGV4dFR5cGVzID0ge1xuICAgIHN0b3JlOiBQcm9wVHlwZXMub2JqZWN0XG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMsIGNvbnRleHQpIHtcbiAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG4gICAgY29uc3QgYWNjb3VudHMgPSB0aGlzLmdldEFjY291bnRzKCk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYWNjb3VudHMsXG4gICAgICBuZXR3b3JrSWQ6IG51bGwsXG4gICAgICBuZXR3b3JrRXJyb3I6IG51bGxcbiAgICB9O1xuICAgIHRoaXMuaW50ZXJ2YWwgPSBudWxsO1xuICAgIHRoaXMubmV0d29ya0ludGVydmFsID0gbnVsbDtcbiAgICB0aGlzLmZldGNoQWNjb3VudHMgPSB0aGlzLmZldGNoQWNjb3VudHMuYmluZCh0aGlzKTtcbiAgICB0aGlzLmZldGNoTmV0d29yayA9IHRoaXMuZmV0Y2hOZXR3b3JrLmJpbmQodGhpcyk7XG5cbiAgICBpZiAoYWNjb3VudHMpIHtcbiAgICAgIHRoaXMuaGFuZGxlQWNjb3VudHMoYWNjb3VudHMsIHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgd2ViMzoge1xuICAgICAgICBhY2NvdW50czogdGhpcy5zdGF0ZS5hY2NvdW50cyxcbiAgICAgICAgc2VsZWN0ZWRBY2NvdW50OiB0aGlzLnN0YXRlLmFjY291bnRzICYmIHRoaXMuc3RhdGUuYWNjb3VudHNbMF0sXG4gICAgICAgIG5ldHdvcms6IGdldE5ldHdvcmsodGhpcy5zdGF0ZS5uZXR3b3JrSWQpLFxuICAgICAgICBuZXR3b3JrSWQ6IHRoaXMuc3RhdGUubmV0d29ya0lkXG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydCBwb2xsaW5nIGFjY291bnRzLCAmIG5ldHdvcmsuIFdlIHBvbGwgaW5kZWZpbml0ZWx5IHNvIHRoYXQgd2UgY2FuXG4gICAqIHJlYWN0IHRvIHRoZSB1c2VyIGNoYW5naW5nIGFjY291bnRzIG9yIG5ldG93cmtzLlxuICAgKi9cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5mZXRjaEFjY291bnRzKCk7XG4gICAgdGhpcy5mZXRjaE5ldHdvcmsoKTtcbiAgICB0aGlzLmluaXRQb2xsKCk7XG4gICAgdGhpcy5pbml0TmV0d29ya1BvbGwoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0IHdlYjMvYWNjb3VudCBwb2xsaW5nLCBhbmQgcHJldmVudCBkdXBsaWNhdGUgaW50ZXJ2YWwuXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBpbml0UG9sbCgpIHtcbiAgICBpZiAoIXRoaXMuaW50ZXJ2YWwpIHtcbiAgICAgIHRoaXMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCh0aGlzLmZldGNoQWNjb3VudHMsIE9ORV9TRUNPTkQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0IG5ldHdvcmsgcG9sbGluZywgYW5kIHByZXZlbnQgZHVwbGljYXRlIGludGVydmFscy5cbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIGluaXROZXR3b3JrUG9sbCgpIHtcbiAgICBpZiAoIXRoaXMubmV0d29ya0ludGVydmFsKSB7XG4gICAgICB0aGlzLm5ldHdvcmtJbnRlcnZhbCA9IHNldEludGVydmFsKHRoaXMuZmV0Y2hOZXR3b3JrLCBPTkVfTUlOVVRFKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIHN0YXRlIHJlZ2FyZGluZyB0aGUgYXZhaWxhYmlsaXR5IG9mIHdlYjMgYW5kIGFuIEVUSCBhY2NvdW50LlxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgZmV0Y2hBY2NvdW50cygpIHtcbiAgICBjb25zdCB7IHdlYjMgfSA9IHdpbmRvdztcbiAgICBjb25zdCBldGhBY2NvdW50cyA9IHRoaXMuZ2V0QWNjb3VudHMoKTtcblxuICAgIGlmIChpc0VtcHR5KGV0aEFjY291bnRzKSkge1xuICAgICAgd2ViMyAmJiB3ZWIzLmN1cnJlbnRQcm92aWRlciAmJiBQcm9taXNlLnJlc29sdmUoZXRoQWNjb3VudHMpIC8vIHdlYjMuY3VycmVudFByb3ZpZGVyLmdldEFjY291bnRzKClcbiAgICAgIC50aGVuKGFjY291bnRzID0+IHRoaXMuaGFuZGxlQWNjb3VudHMoYWNjb3VudHMpKVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgYWNjb3VudHNFcnJvcjogZXJyXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGFuZGxlQWNjb3VudHMoZXRoQWNjb3VudHMpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUFjY291bnRzKGFjY291bnRzLCBpc0NvbnN0cnVjdG9yID0gZmFsc2UpIHtcbiAgICBjb25zdCB7IG9uQ2hhbmdlQWNjb3VudCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLmNvbnRleHQ7XG4gICAgbGV0IG5leHQgPSBhY2NvdW50c1swXTtcbiAgICBsZXQgY3VyciA9IHRoaXMuc3RhdGUuYWNjb3VudHNbMF07XG4gICAgbmV4dCA9IG5leHQgJiYgbmV4dC50b0xvd2VyQ2FzZSgpO1xuICAgIGN1cnIgPSBjdXJyICYmIGN1cnIudG9Mb3dlckNhc2UoKTtcbiAgICBjb25zdCBkaWRDaGFuZ2UgPSAoY3VyciAhPT0gbmV4dCk7XG5cbiAgICBpZiAoaXNFbXB0eSh0aGlzLnN0YXRlLmFjY291bnRzKSAmJiAhaXNFbXB0eShhY2NvdW50cykpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBhY2NvdW50c0Vycm9yOiBudWxsLFxuICAgICAgICBhY2NvdW50c1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGRpZENoYW5nZSAmJiAhaXNDb25zdHJ1Y3Rvcikge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGFjY291bnRzRXJyb3I6IG51bGwsXG4gICAgICAgIGFjY291bnRzXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBJZiBwcm92aWRlZCwgZXhlY3V0ZSBjYWxsYmFja1xuICAgIGlmIChkaWRDaGFuZ2UgJiYgdHlwZW9mIG9uQ2hhbmdlQWNjb3VudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgb25DaGFuZ2VBY2NvdW50KG5leHQpO1xuICAgIH1cblxuICAgIC8vIElmIGF2YWlsYWJsZSwgZGlzcGF0Y2ggcmVkdXggYWN0aW9uXG4gICAgaWYgKHN0b3JlICYmIHR5cGVvZiBzdG9yZS5kaXNwYXRjaCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc3QgZGlkTG9naW4gPSAhY3VyciAmJiBuZXh0O1xuICAgICAgY29uc3QgZGlkTG9nb3V0ID0gY3VyciAmJiAhbmV4dDtcblxuICAgICAgaWYgKGRpZExvZ291dCkge1xuICAgICAgICBzdG9yZS5kaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogJ3dlYjMvTE9HT1VUJyxcbiAgICAgICAgICBhZGRyZXNzOiBudWxsXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2UgaWYgKGRpZExvZ2luIHx8IChpc0NvbnN0cnVjdG9yICYmIG5leHQpKSB7XG4gICAgICAgIHN0b3JlLmRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiAnd2ViMy9SRUNFSVZFX0FDQ09VTlQnLFxuICAgICAgICAgIGFkZHJlc3M6IG5leHRcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKGRpZENoYW5nZSAmJiBjdXJyICYmIG5leHQpIHtcbiAgICAgICAgc3RvcmUuZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6ICd3ZWIzL0NIQU5HRV9BQ0NPVU5UJyxcbiAgICAgICAgICBhZGRyZXNzOiBuZXh0XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbmV0d29yayBhbmQgdXBkYXRlIHN0YXRlIGFjY29yZGluZ2x5LlxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgZmV0Y2hOZXR3b3JrKCkge1xuICAgIGNvbnN0IHsgd2ViMyB9ID0gd2luZG93O1xuXG4gICAgaWYgKHdlYjMpIHtcbiAgICAgIGNvbnN0IGlzVjEgPSAvXjEvLnRlc3Qod2ViMy52ZXJzaW9uKTtcbiAgICAgIGNvbnN0IGdldE5ldHdvcmsgPSBpc1YxID8gd2ViMy5ldGgubmV0LmdldElkIDogd2ViMy52ZXJzaW9uLmdldE5ldHdvcms7XG5cbiAgICAgIGdldE5ldHdvcmsoKGVyciwgbmV0SWQpID0+IHtcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbmV0d29ya0Vycm9yOiBlcnJcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAobmV0SWQgIT0gdGhpcy5zdGF0ZS5uZXR3b3JrSWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICBuZXR3b3JrRXJyb3I6IG51bGwsXG4gICAgICAgICAgICAgIG5ldHdvcmtJZDogTnVtYmVyKG5ldElkKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgYWNjb3VudC4gV2Ugd3JhcCBpbiB0cnkvY2F0Y2ggYmVjYXVzZSByZWFkaW5nIGB3ZWIzLmV0aC5hY2NvdW50c2BcbiAgICogd2lsbCB0aHJvdyBpZiBubyBhY2NvdW50IGlzIHNlbGVjdGVkLlxuICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAqL1xuICBnZXRBY2NvdW50cygpIHtcbiAgICBjb25zdCB7IHdlYjMgfSA9IHdpbmRvdztcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IHdlYjMgfSA9IHdpbmRvdztcbiAgICAgIGNvbnN0IGlzVjEgPSAvXjEvLnRlc3Qod2ViMy52ZXJzaW9uKTtcbiAgICAgIC8vIHRocm93cyBpZiBubyBhY2NvdW50IHNlbGVjdGVkXG4gICAgICBjb25zdCBnZXRWMVdhbGxldHMgPSAoKSA9PiByYW5nZSh3ZWIzLmV0aC5hY2NvdW50cy53YWxsZXQubGVuZ3RoKS5tYXAoaSA9PiB3ZWIzLmV0aC5hY2NvdW50cy53YWxsZXRbaV0pLm1hcCh3ID0+IHcuYWRkcmVzcyk7XG4gICAgICBjb25zdCBhY2NvdW50cyA9IGlzVjEgPyBnZXRWMVdhbGxldHMoKSA6IHdlYjMuZXRoLmFjY291bnRzO1xuXG4gICAgICByZXR1cm4gYWNjb3VudHM7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHdlYjMgfSA9IHdpbmRvdztcbiAgICBjb25zdCB7XG4gICAgICBwYXNzaXZlLFxuICAgICAgd2ViM1VuYXZhaWxhYmxlU2NyZWVuOiBXZWIzVW5hdmFpbGFibGVDb21wb25lbnQsXG4gICAgICBhY2NvdW50VW5hdmFpbGFibGVTY3JlZW46IEFjY291bnRVbmF2YWlsYWJsZUNvbXBvbmVudFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKHBhc3NpdmUpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuO1xuICAgIH1cblxuICAgIGlmICghd2ViMykge1xuICAgICAgcmV0dXJuIDxXZWIzVW5hdmFpbGFibGVDb21wb25lbnQgLz47XG4gICAgfVxuXG4gICAgaWYgKGlzRW1wdHkodGhpcy5zdGF0ZS5hY2NvdW50cykpIHtcbiAgICAgIHJldHVybiA8QWNjb3VudFVuYXZhaWxhYmxlQ29tcG9uZW50IC8+O1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuO1xuICB9XG59XG5cbldlYjNQcm92aWRlci5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5XZWIzUHJvdmlkZXIuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuV2ViM1Byb3ZpZGVyLmNoaWxkQ29udGV4dFR5cGVzID0gY2hpbGRDb250ZXh0VHlwZXM7XG5cbm1vZHVsZS5leHBvcnRzID0gV2ViM1Byb3ZpZGVyO1xuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuPSAgICBEZXBzXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuZnVuY3Rpb24gZ2V0TmV0d29yayhuZXR3b3JrSWQpIHtcbiAgc3dpdGNoIChuZXR3b3JrSWQpIHtcbiAgICBjYXNlIDE6XG4gICAgICByZXR1cm4gJ01BSU5ORVQnO1xuICAgIGNhc2UgMjpcbiAgICAgIHJldHVybiAnTU9SREVOJztcbiAgICBjYXNlIDM6XG4gICAgICByZXR1cm4gJ1JPUFNURU4nO1xuICAgIGNhc2UgNDpcbiAgICAgIHJldHVybiAnUklOS0VCWSc7XG4gICAgY2FzZSA0MjpcbiAgICAgIHJldHVybiAnS09WQU4nO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gJ1VOS05PV04nO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvV2ViM1Byb3ZpZGVyLmpzeCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCJcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9kYXNoL2lzRW1wdHlcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJsb2Rhc2gvaXNFbXB0eVwiXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaC9yYW5nZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImxvZGFzaC9yYW5nZVwiXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbmNvbnN0IEVycm9yVGVtcGxhdGUgPSByZXF1aXJlKCcuL0Vycm9yVGVtcGxhdGUnKTtcblxuY29uc3QgQWNjb3VudFVuYXZhaWxhYmxlID0gRXJyb3JUZW1wbGF0ZS5iaW5kKG51bGwsIHtcbiAgdGl0bGU6ICdObyBFVEggQWNjb3VudCBBdmFpbGFibGUnLFxuICBtZXNzYWdlOiBgXG5JdCBzZWVtcyB0aGF0IHlvdSBkb24mYXBvczt0IGhhdmUgYW4gRVRIIGFjY291bnQgc2VsZWN0ZWQuIElmIHVzaW5nXG5NZXRhTWFzaywgcGxlYXNlIG1ha2Ugc3VyZSB0aGF0IHlvdXIgd2FsbGV0IGlzIHVubG9ja2VkIGFuZCB0aGF0XG55b3UgaGF2ZSBhdCBsZWFzdCBvbmUgYWNjb3VudCBpbiB5b3VyIGFjY291bnRzIGxpc3QuYFxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQWNjb3VudFVuYXZhaWxhYmxlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0FjY291bnRVbmF2YWlsYWJsZS5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBJY29uTm9XZWIzKHByb3BzKSB7XG4gIHJldHVybiAoXG5cbiAgICA8c3ZnIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiB2aWV3Qm94PVwiMCAwIDMzMiA0MTdcIiB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zWGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCI+XG4gICAgPGRlZnM+XG4gICAgICA8cGF0aCBkPVwiTTE5OC42MTA2ODUsNDMuMTAxNzgwOCBDMTA3LjI0OTc3LDQzLjEwMTc4MDggMzMuMTAxNzgwOCwxMTcuMjQ5NzcgMzMuMTAxNzgwOCwyMDguNjEwNjg1IEMzMy4xMDE3ODA4LDI5OS45NzE1OTkgMTA3LjI0OTc3LDM3NC4xMTk1ODggMTk4LjYxMDY4NSwzNzQuMTE5NTg4IEMyODkuOTcxNTk5LDM3NC4xMTk1ODggMzY0LjExOTU4OCwyOTkuOTcxNTk5IDM2NC4xMTk1ODgsMjA4LjYxMDY4NSBDMzY0LjExOTU4OCwxMTcuMjQ5NzcgMjg5Ljk3MTU5OSw0My4xMDE3ODA4IDE5OC42MTA2ODUsNDMuMTAxNzgwOCBMMTk4LjYxMDY4NSw0My4xMDE3ODA4IFogTTE5OC42MTA2ODUsMzQxLjAxNzgwOCBDMTI1LjQ1NTc0OSwzNDEuMDE3ODA4IDY2LjIwMzU2MTUsMjgxLjc2NTYyIDY2LjIwMzU2MTUsMjA4LjYxMDY4NSBDNjYuMjAzNTYxNSwxNzcuOTkxNTM3IDc2LjYzMDYyMjUsMTQ5Ljg1NTAyNCA5NC4xNzQ1NjYzLDEyNy41MTEzMjIgTDI3OS43MTAwNDcsMzEzLjA0NjgwMyBDMjU3LjM2NjM0NSwzMzAuNTkwNzQ3IDIyOS4yMjk4MzIsMzQxLjAxNzgwOCAxOTguNjEwNjg1LDM0MS4wMTc4MDggTDE5OC42MTA2ODUsMzQxLjAxNzgwOCBaIE0zMDMuMDQ2ODAzLDI4OS43MTAwNDcgTDExNy41MTEzMjIsMTA0LjE3NDU2NiBDMTM5Ljg1NTAyNCw4Ni42MzA2MjI1IDE2Ny45OTE1MzcsNzYuMjAzNTYxNSAxOTguNjEwNjg1LDc2LjIwMzU2MTUgQzI3MS43NjU2Miw3Ni4yMDM1NjE1IDMzMS4wMTc4MDgsMTM1LjQ1NTc0OSAzMzEuMDE3ODA4LDIwOC42MTA2ODUgQzMzMS4wMTc4MDgsMjM5LjIyOTgzMiAzMjAuNTkwNzQ3LDI2Ny4zNjYzNDUgMzAzLjA0NjgwMywyODkuNzEwMDQ3IEwzMDMuMDQ2ODAzLDI4OS43MTAwNDcgWlwiIGlkPVwicGF0aC0xXCI+PC9wYXRoPlxuICAgIDwvZGVmcz5cbiAgICA8ZyBpZD1cIlBhZ2UtMVwiIHN0cm9rZT1cIm5vbmVcIiBzdHJva2VXaWR0aD1cIjFcIiBmaWxsPVwibm9uZVwiIGZpbGxSdWxlPVwiZXZlbm9kZFwiPlxuICAgICAgPGcgaWQ9XCJHcm91cFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMzMuMDAwMDAwLCAwLjAwMDAwMClcIj5cbiAgICAgICAgPGcgaWQ9XCJFdGhlcmV1bV9sb2dvXzIwMTRcIiBvcGFjaXR5PVwiMC4yMDg4OTk0NTdcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNzEuMDAwMDAwLCAwLjAwMDAwMClcIiBmaWxsUnVsZT1cIm5vbnplcm9cIj5cbiAgICAgICAgICA8cG9seWdvbiBpZD1cIlNoYXBlXCIgZmlsbD1cIiMzNDM0MzRcIiBwb2ludHM9XCIxMjcuOTYxMSAwIDEyNS4xNjYxIDkuNSAxMjUuMTY2MSAyODUuMTY4IDEyNy45NjExIDI4Ny45NTggMjU1LjkyMzEgMjEyLjMyXCI+PC9wb2x5Z29uPlxuICAgICAgICAgIDxwb2x5Z29uIGlkPVwiU2hhcGVcIiBmaWxsPVwiIzhDOEM4Q1wiIHBvaW50cz1cIjEyNy45NjIgMCAwIDIxMi4zMiAxMjcuOTYyIDI4Ny45NTkgMTI3Ljk2MiAxNTQuMTU4XCI+PC9wb2x5Z29uPlxuICAgICAgICAgIDxwb2x5Z29uIGlkPVwiU2hhcGVcIiBmaWxsPVwiIzNDM0MzQlwiIHBvaW50cz1cIjEyNy45NjExIDMxMi4xODY2IDEyNi4zODYxIDMxNC4xMDY2IDEyNi4zODYxIDQxMi4zMDU2IDEyNy45NjExIDQxNi45MDY2IDI1NS45OTkxIDIzNi41ODY2XCI+PC9wb2x5Z29uPlxuICAgICAgICAgIDxwb2x5Z29uIGlkPVwiU2hhcGVcIiBmaWxsPVwiIzhDOEM4Q1wiIHBvaW50cz1cIjEyNy45NjIgNDE2LjkwNTIgMTI3Ljk2MiAzMTIuMTg1MiAwIDIzNi41ODUyXCI+PC9wb2x5Z29uPlxuICAgICAgICAgIDxwb2x5Z29uIGlkPVwiU2hhcGVcIiBmaWxsPVwiIzE0MTQxNFwiIHBvaW50cz1cIjEyNy45NjExIDI4Ny45NTc3IDI1NS45MjExIDIxMi4zMjA3IDEyNy45NjExIDE1NC4xNTg3XCI+PC9wb2x5Z29uPlxuICAgICAgICAgIDxwb2x5Z29uIGlkPVwiU2hhcGVcIiBmaWxsPVwiIzM5MzkzOVwiIHBvaW50cz1cIjAuMDAwOSAyMTIuMzIwOCAxMjcuOTYwOSAyODcuOTU3OCAxMjcuOTYwOSAxNTQuMTU4OFwiPjwvcG9seWdvbj5cbiAgICAgICAgPC9nPlxuICAgICAgICA8ZyBpZD1cImljX2RvX25vdF9kaXN0dXJiXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAuMDAwMDAwLCAxMC4wMDAwMDApXCI+PC9nPlxuICAgICAgICA8cG9seWdvbiBpZD1cIkJvdW5kc1wiIHBvaW50cz1cIjAgMTAgMzk3LjIyMTM2OSAxMCAzOTcuMjIxMzY5IDQwNy4yMjEzNjkgMCA0MDcuMjIxMzY5XCI+PC9wb2x5Z29uPlxuICAgICAgICA8ZyBpZD1cIkljb25cIj5cbiAgICAgICAgICA8dXNlIGZpbGw9XCIjRkZFMURFXCIgZmlsbFJ1bGU9XCJldmVub2RkXCIgeGxpbmtIcmVmPVwiI3BhdGgtMVwiPjwvdXNlPlxuICAgICAgICAgIDxwYXRoIHN0cm9rZT1cIiNGRkZGRkZcIiBzdHJva2VXaWR0aD1cIjZcIiBkPVwiTTE5OC42MTA2ODUsNDYuMTAxNzgwOCBDMjg4LjMxNDc0NSw0Ni4xMDE3ODA4IDM2MS4xMTk1ODgsMTE4LjkwNjYyNCAzNjEuMTE5NTg4LDIwOC42MTA2ODUgQzM2MS4xMTk1ODgsMjk4LjMxNDc0NSAyODguMzE0NzQ1LDM3MS4xMTk1ODggMTk4LjYxMDY4NSwzNzEuMTE5NTg4IEMxMDguOTA2NjI0LDM3MS4xMTk1ODggMzYuMTAxNzgwOCwyOTguMzE0NzQ1IDM2LjEwMTc4MDgsMjA4LjYxMDY4NSBDMzYuMTAxNzgwOCwxMTguOTA2NjI0IDEwOC45MDY2MjQsNDYuMTAxNzgwOCAxOTguNjEwNjg1LDQ2LjEwMTc4MDggWiBNMTk4LjYxMDY4NSwzNDQuMDE3ODA4IEMxMjMuNzk4ODk1LDM0NC4wMTc4MDggNjMuMjAzNTYxNSwyODMuNDIyNDc0IDYzLjIwMzU2MTUsMjA4LjYxMDY4NSBDNjMuMjAzNTYxNSwxNzguMDc3NDQyIDczLjM3MzY3MTQsMTQ5LjE0NTIzMyA5MS44MTUwMDQ5LDEyNS42NTg2MjkgTDkzLjkwNDAwMDcsMTIyLjk5ODExNSBMMjg0LjIyMzI1NCwzMTMuMzE3MzY4IEwyODEuNTYyNzQsMzE1LjQwNjM2NCBDMjU4LjA3NjEzNiwzMzMuODQ3Njk4IDIyOS4xNDM5MjcsMzQ0LjAxNzgwOCAxOTguNjEwNjg1LDM0NC4wMTc4MDggWiBNMzAzLjMxNzM2OCwyOTQuMjIzMjU0IEwxMTIuOTk4MTE1LDEwMy45MDQwMDEgTDExNS42NTg2MjksMTAxLjgxNTAwNSBDMTM5LjE0NTIzMyw4My4zNzM2NzE0IDE2OC4wNzc0NDIsNzMuMjAzNTYxNSAxOTguNjEwNjg1LDczLjIwMzU2MTUgQzI3My40MjI0NzQsNzMuMjAzNTYxNSAzMzQuMDE3ODA4LDEzMy43OTg4OTUgMzM0LjAxNzgwOCwyMDguNjEwNjg1IEMzMzQuMDE3ODA4LDIzOS4xNDM5MjcgMzIzLjg0NzY5OCwyNjguMDc2MTM2IDMwNS40MDYzNjQsMjkxLjU2Mjc0IEwzMDMuMzE3MzY4LDI5NC4yMjMyNTQgWlwiPjwvcGF0aD5cbiAgICAgICAgPC9nPlxuICAgICAgPC9nPlxuICAgIDwvZz5cbiAgPC9zdmc+XG4gICk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSWNvbk5vV2ViMztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9JY29uTm9XZWIzLmpzeCIsIm1vZHVsZS5leHBvcnRzID0gYFxuLldlYjNQcm92aWRlci1jb250YWluZXIge1xuICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBBcmlhbDtcbiAgY29sb3I6IGhzbCgwLDAlLDUwJSk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiBoc2woMCwgMCUsIDk1JSk7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGhzbCgwLCAwJSwgMTAwJSksIGhzbCgwLCAwJSwgOTUlKSk7XG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KGhzbCgwLCAwJSwgMTAwJSksIGhzbCgwLCAwJSwgOTUlKSk7XG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudChoc2woMCwgMCUsIDEwMCUpLCBoc2woMCwgMCUsIDk1JSkpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoaHNsKDAsIDAlLCAxMDAlKSwgaHNsKDAsIDAlLCA5NSUpKTtcbn1cbi5XZWIzUHJvdmlkZXItd3JhcHBlciB7XG4gIHdpZHRoOiA0MDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgaHNsKDIwNywgOTAlLCA1NCUpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDUwcHggNDBweDtcbiAgbWFyZ2luOiA4MHB4IGF1dG87XG59XG4uV2ViM1Byb3ZpZGVyLWltYWdlIHtcbiAgbWF4LWhlaWdodDogMTc1cHg7XG59XG4uV2ViM1Byb3ZpZGVyLXRpdGxlIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgY29sb3I6IGhzbCgwLDAlLDI1JSk7XG59XG4uV2ViM1Byb3ZpZGVyLW1lc3NhZ2Uge1xuICBsaW5lLWhlaWdodDogMjdweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogaHNsKDAsMCUsNTAlKTtcbn1cbmA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3R5bGVzaGVldC5qcyIsImNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbmNvbnN0IEVycm9yVGVtcGxhdGUgPSByZXF1aXJlKCcuL0Vycm9yVGVtcGxhdGUnKTtcblxuY29uc3QgV2ViM1VuYXZhaWxhYmxlID0gRXJyb3JUZW1wbGF0ZS5iaW5kKG51bGwsIHtcbiAgdGl0bGU6ICdXZWIzIE5vdCBGb3VuZCcsXG4gIG1lc3NhZ2U6IGBcbkl0IHNlZW1zIHRoYXQgeW91IGFyZSB1c2luZyBhIGJyb3dzZXIgd2l0aG91dCBXZWIzIGNhcGFiaWxpdGllcy4gUGxlYXNlXG5tYWtlIHN1cmUgdGhhdCB5b3UgYXJlIHVzaW5nIGEgd2ViMy1jYXBhYmxlIGJyb3dzZXIgbGlrZSBtaXN0IG9yIHBhcml0eS5cbklmIHlvdSBhcmUgdXNpbmcgTWV0YU1hc2sgb3IgUGFyaXR5IGV4dGVuc2lvbiwgbWFrZSBzdXJlIHRoYXQgaXQgaXNcbmVuYWJsZWQuXG5gXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBXZWIzVW5hdmFpbGFibGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvV2ViM1VuYXZhaWxhYmxlLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=
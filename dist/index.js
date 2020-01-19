'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ":root {\n  --gap: 6px;\n}\n\n.style_slidContainer__1laRs {\n  white-space: nowrap;\n  overflow-x: auto;\n  overflow-y: hidden;\n  padding-left: calc(var(--gap) * 3);\n  padding-right: calc(var(--gap) * 3);\n  padding-bottom: calc(var(--gap) * 3);\n  margin-top: 0;\n  margin-left: calc(var(--gap) * -4);\n  margin-right: calc(var(--gap) * -4);\n  -webkit-overflow-scrolling: touch;\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n  -webkit-scroll-snap-type: mandatory;\n  scroll-snap-type: x mandatory;\n  scroll-behavior: smooth;\n}\n\n.style_slidContainer__1laRs > * {\n  display: inline-block !important;\n  padding-right: var(--gap) !important;\n  padding-left: var(--gap) !important;\n  -webkit-scroll-snap-coordinate: 0% 0%;\n  scroll-snap-coordinate: 0% 0%;\n  scroll-snap-align: center;\n  white-space: pre-wrap;\n  word-break: break-word;\n  overflow-wrap: break-word;\n}\n\n.style_slidContainer__1laRs > *:first-child {\n  padding-left: calc(var(--gap) * 4) !important;\n}\n\n.style_slidContainer__1laRs > *:last-child {\n  padding-right: calc(var(--gap) * 4) !important;\n}\n\n.style_arrows__3bE0A {\n  position: absolute !important;\n  display: block !important;\n  transform: translateY(-50%) !important;\n  z-index: 1 !important;\n  transition: all 0.2s ease-in-out;\n}\n\n.style_arrows__3bE0A button {\n  display: inline-block !important;\n  cursor: pointer !important;\n  text-align: center !important;\n  line-height: 1 !important;\n  position: relative !important;\n  touch-action: manipulation !important;\n  box-shadow: rgba(0, 0, 0, 0.14) 0px 1px 1px 1px !important;\n  border-radius: 50% !important;\n  border-width: 2px !important;\n  border-style: solid !important;\n  border-color: transparent !important;\n  background: rgb(255, 255, 255) !important;\n  outline: none;\n  width: 32px;\n  height: 32px;\n}\n\n.style_arrows__3bE0A:first-child {\n  top: 50%;\n  left: 48px;\n  opacity: 0;\n  visibility: hidden;\n}\n\n.style_arrows__3bE0A:last-child {\n  top: 50%;\n  right: 48px;\n}";
var styles = { "slidContainer": "style_slidContainer__1laRs", "arrows": "style_arrows__3bE0A" };
styleInject(css);

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var Slid = function (_React$Component) {
  inherits(Slid, _React$Component);

  function Slid() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Slid);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Slid.__proto__ || Object.getPrototypeOf(Slid)).call.apply(_ref, [this].concat(args))), _this), _this.swipeRight = function () {
      var widthThereshold = [].concat(toConsumableArray(document.querySelectorAll('#slid-container > *')))[2].offsetWidth / 2 + 4;
      console.log('widthThereshold:', widthThereshold);
      document.querySelector('.style_slidContainer__1laRs').scrollLeft += widthThereshold;
    }, _this.swipeLeft = function () {
      var widthThereshold = [].concat(toConsumableArray(document.querySelectorAll('#slid-container > *')))[2].offsetWidth / 2 + 4;
      document.querySelector('.style_slidContainer__1laRs').scrollLeft -= widthThereshold;
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(Slid, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (window !== undefined) {
        var slidContainerElem = document.getElementById('slid-container');
        var leftArrowElem = document.querySelector('#left-arrow');
        var rightArrowElem = document.querySelector('#right-arrow');
        var widthThereshold = document.querySelectorAll('#slid-container > *')[2].offsetWidth / 2 + 4;
        slidContainerElem.addEventListener('scroll', function () {
          console.log('scrollLeft:', slidContainerElem.scrollLeft);
          console.log('scrollWidth:', slidContainerElem.scrollWidth);

          if (slidContainerElem.scrollLeft > widthThereshold) {
            leftArrowElem.style.opacity = 1;
            leftArrowElem.style.visibility = 'visible';
          } else if (slidContainerElem.scrollLeft < widthThereshold) {
            leftArrowElem.style.opacity = 0;
            leftArrowElem.style.visibility = 'hidden';
          }

          if (slidContainerElem.scrollWidth - slidContainerElem.scrollLeft < 500) {
            rightArrowElem.style.opacity = 0;
            rightArrowElem.style.visibility = 'hidden';
          } else if (slidContainerElem.scrollWidth - slidContainerElem.scrollLeft > 500) {
            rightArrowElem.style.opacity = 1;
            rightArrowElem.style.visibility = 'visible';
          }
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          showArrows = _props.showArrows,
          rest = objectWithoutProperties(_props, ['children', 'showArrows']);

      return React.createElement(
        'div',
        { style: { overflow: 'hidden', position: 'relative' } },
        showArrows && React.createElement(
          'div',
          { id: 'left-arrow', className: styles.arrows },
          React.createElement(
            'button',
            { onClick: function onClick() {
                return _this2.swipeLeft();
              } },
            React.createElement(
              'svg',
              { viewBox: '0 0 18 18', role: 'img', 'aria-label': 'Geri', focusable: 'false', fill: 'currentcolor', style: { height: 10, width: 10 } },
              React.createElement('path', { d: 'm13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z', fillRule: 'evenodd' })
            )
          )
        ),
        React.createElement(
          'div',
          _extends({ id: 'slid-container', className: styles.slidContainer }, rest),
          [].concat(toConsumableArray(children)).map(function (child, index) {
            return React.createElement(
              'div',
              { key: index },
              child
            );
          })
        ),
        showArrows && React.createElement(
          'div',
          { id: 'right-arrow', className: styles.arrows },
          React.createElement(
            'button',
            { onClick: function onClick() {
                return _this2.swipeRight();
              } },
            React.createElement(
              'svg',
              { viewBox: '0 0 18 18', role: 'img', 'aria-label': '\u0130leri', focusable: 'false', fill: 'currentcolor', style: { height: 10, width: 10 } },
              React.createElement('path', { d: 'm4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z', fillRule: 'evenodd' })
            )
          )
        )
      );
    }
  }]);
  return Slid;
}(React.Component);

Slid.propTypes = {
  children: PropTypes.any
};

module.exports = Slid;
//# sourceMappingURL=index.js.map

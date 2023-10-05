(self.webpackChunkkinderguide_frontend =
  self.webpackChunkkinderguide_frontend || []).push([
  [202],
  {
    './node_modules/@storybook/components/dist/OverlayScrollbars-GZGLA7DL.mjs':
      function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        __webpack_require__.r(__webpack_exports__),
          __webpack_require__.d(__webpack_exports__, {
            OverlayScrollbars() {
              return OverlayScrollbars2;
            },
            default() {
              return OverlayScrollbars_default;
            },
          });
        const react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          './node_modules/react/index.js'
        );
        function each(t2, n2) {
          if (isArrayLike(t2))
            for (let o2 = 0; o2 < t2.length && !1 !== n2(t2[o2], o2, t2); o2++);
          else t2 && each(Object.keys(t2), (o2) => n2(t2[o2], o2, t2));
          return t2;
        }
        function style(t2, n2) {
          const o2 = isString(n2);
          if (isArray(n2) || o2) {
            let s3 = o2 ? '' : {};
            if (t2) {
              const e2 = window.getComputedStyle(t2, null);
              s3 = o2
                ? getCSSVal(t2, e2, n2)
                : n2.reduce(
                    (n3, o3) => ((n3[o3] = getCSSVal(t2, e2, o3)), n3),
                    s3
                  );
            }
            return s3;
          }
          t2 && each(keys(n2), (o3) => setCSSVal(t2, o3, n2[o3]));
        }
        let m;
        let Lt;
        const createCache = (t2, n2) => {
          let r2;
          const { o: o2, u: s2, _: e2 } = t2;
          let c2 = o2;
          const cacheUpdateContextual = (t3, n3) => {
            const o3 = c2;
            const i2 = t3;
            const l2 = n3 || (s2 ? !s2(o3, i2) : o3 !== i2);
            return (l2 || e2) && ((c2 = i2), (r2 = o3)), [c2, l2, r2];
          };
          return [
            n2
              ? (t3) => cacheUpdateContextual(n2(c2, r2), t3)
              : cacheUpdateContextual,
            (t3) => [c2, !!t3, r2],
          ];
        };
        const isClient = () => typeof window < 'u';
        const t = isClient() && Node.ELEMENT_NODE;
        const { toString: n, hasOwnProperty: o } = Object.prototype;
        const isUndefined = (t2) => void 0 === t2;
        const isNull = (t2) => t2 === null;
        const isNumber = (t2) => typeof t2 === 'number';
        var isString = (t2) => typeof t2 === 'string';
        const isBoolean = (t2) => typeof t2 === 'boolean';
        const isFunction = (t2) => typeof t2 === 'function';
        var isArray = (t2) => Array.isArray(t2);
        const isObject = (t2) =>
          typeof t2 === 'object' && !isArray(t2) && !isNull(t2);
        var isArrayLike = (t2) => {
          const n2 = !!t2 && t2.length;
          const o2 = isNumber(n2) && n2 > -1 && n2 % 1 == 0;
          return (
            !!(isArray(t2) || (!isFunction(t2) && o2)) &&
            (!(n2 > 0 && isObject(t2)) || n2 - 1 in t2)
          );
        };
        const isPlainObject = (t2) => {
          if (
            !t2 ||
            !isObject(t2) ||
            ((t2) =>
              isUndefined(t2) || isNull(t2)
                ? `${t2}`
                : n
                    .call(t2)
                    .replace(/^\[object (.+)\]$/, '$1')
                    .toLowerCase())(t2) !== 'object'
          )
            return !1;
          let n2;
          const s2 = 'constructor';
          const e2 = t2[s2];
          const c2 = e2 && e2.prototype;
          const r2 = o.call(t2, s2);
          const i2 = c2 && o.call(c2, 'isPrototypeOf');
          if (e2 && !r2 && !i2) return !1;
          for (n2 in t2);
          return isUndefined(n2) || o.call(t2, n2);
        };
        const isHTMLElement = (n2) => {
          const o2 = HTMLElement;
          return !!n2 && (o2 ? n2 instanceof o2 : n2.nodeType === t);
        };
        const isElement = (n2) => {
          const o2 = Element;
          return !!n2 && (o2 ? n2 instanceof o2 : n2.nodeType === t);
        };
        const indexOf = (t2, n2, o2) => t2.indexOf(n2, o2);
        const push = (t2, n2, o2) => (
          o2 || isString(n2) || !isArrayLike(n2)
            ? t2.push(n2)
            : Array.prototype.push.apply(t2, n2),
          t2
        );
        const from = (t2) => {
          const n2 = Array.from;
          const o2 = [];
          return n2 && t2
            ? n2(t2)
            : (t2 instanceof Set
                ? t2.forEach((t3) => {
                    push(o2, t3);
                  })
                : each(t2, (t3) => {
                    push(o2, t3);
                  }),
              o2);
        };
        const isEmptyArray = (t2) => !!t2 && t2.length === 0;
        const runEachAndClear = (t2, n2, o2) => {
          each(t2, (t3) => t3 && t3.apply(void 0, n2 || [])),
            !o2 && (t2.length = 0);
        };
        const hasOwnProperty = (t2, n2) =>
          Object.prototype.hasOwnProperty.call(t2, n2);
        var keys = (t2) => (t2 ? Object.keys(t2) : []);
        const assignDeep = (t2, n2, o2, s2, e2, c2, r2) => {
          const i2 = [n2, o2, s2, e2, c2, r2];
          return (
            (typeof t2 !== 'object' || isNull(t2)) &&
              !isFunction(t2) &&
              (t2 = {}),
            each(i2, (n3) => {
              each(keys(n3), (o3) => {
                const s3 = n3[o3];
                if (t2 === s3) return !0;
                const e3 = isArray(s3);
                if (s3 && (isPlainObject(s3) || e3)) {
                  const n4 = t2[o3];
                  let c3 = n4;
                  e3 && !isArray(n4)
                    ? (c3 = [])
                    : !e3 && !isPlainObject(n4) && (c3 = {}),
                    (t2[o3] = assignDeep(c3, s3));
                } else t2[o3] = s3;
              });
            }),
            t2
          );
        };
        const isEmptyObject = (t2) => {
          for (const n2 in t2) return !1;
          return !0;
        };
        const getSetProp = (t2, n2, o2, s2) => {
          if (isUndefined(s2)) return o2 ? o2[t2] : n2;
          o2 && (isString(s2) || isNumber(s2)) && (o2[t2] = s2);
        };
        const attr = (t2, n2, o2) => {
          if (isUndefined(o2)) return t2 ? t2.getAttribute(n2) : null;
          t2 && t2.setAttribute(n2, o2);
        };
        const removeAttr = (t2, n2) => {
          t2 && t2.removeAttribute(n2);
        };
        const attrClass = (t2, n2, o2, s2) => {
          if (o2) {
            const e2 = attr(t2, n2) || '';
            const c2 = new Set(e2.split(' '));
            c2[s2 ? 'add' : 'delete'](o2);
            const r2 = from(c2).join(' ').trim();
            attr(t2, n2, r2);
          }
        };
        const scrollLeft = (t2, n2) => getSetProp('scrollLeft', 0, t2, n2);
        const scrollTop = (t2, n2) => getSetProp('scrollTop', 0, t2, n2);
        const s = isClient() && Element.prototype;
        const find = (t2, n2) => {
          const o2 = [];
          const s2 = n2 ? (isElement(n2) ? n2 : null) : document;
          return s2 ? push(o2, s2.querySelectorAll(t2)) : o2;
        };
        const is = (t2, n2) =>
          !!isElement(t2) && (s.matches || s.msMatchesSelector).call(t2, n2);
        const contents = (t2) => (t2 ? from(t2.childNodes) : []);
        const parent = (t2) => (t2 ? t2.parentElement : null);
        const closest = (t2, n2) => {
          if (isElement(t2)) {
            const o2 = s.closest;
            if (o2) return o2.call(t2, n2);
            do {
              if (is(t2, n2)) return t2;
              t2 = parent(t2);
            } while (t2);
          }
          return null;
        };
        const liesBetween = (t2, n2, o2) => {
          const s2 = t2 && closest(t2, n2);
          const e2 =
            t2 &&
            ((t2, n2) => {
              const o2 = n2 ? (isElement(n2) ? n2 : null) : document;
              return o2 ? o2.querySelector(t2) : null;
            })(o2, s2);
          const c2 = closest(e2, n2) === s2;
          return (
            !(!s2 || !e2) &&
            (s2 === t2 ||
              e2 === t2 ||
              (c2 && closest(closest(t2, o2), n2) !== s2))
          );
        };
        const before = (t2, n2, o2) => {
          if (o2 && t2) {
            let e2;
            let s2 = n2;
            isArrayLike(o2)
              ? ((e2 = document.createDocumentFragment()),
                each(o2, (t3) => {
                  t3 === s2 && (s2 = t3.previousSibling), e2.appendChild(t3);
                }))
              : (e2 = o2),
              n2 &&
                (s2
                  ? s2 !== n2 && (s2 = s2.nextSibling)
                  : (s2 = t2.firstChild)),
              t2.insertBefore(e2, s2 || null);
          }
        };
        const appendChildren = (t2, n2) => {
          before(t2, null, n2);
        };
        const insertAfter = (t2, n2) => {
          before(parent(t2), t2 && t2.nextSibling, n2);
        };
        const removeElements = (t2) => {
          if (isArrayLike(t2)) each(from(t2), (t3) => removeElements(t3));
          else if (t2) {
            const n2 = parent(t2);
            n2 && n2.removeChild(t2);
          }
        };
        const createDiv = (t2) => {
          const n2 = document.createElement('div');
          return t2 && attr(n2, 'class', t2), n2;
        };
        const createDOM = (t2) => {
          const n2 = createDiv();
          return (
            (n2.innerHTML = t2.trim()),
            each(contents(n2), (t3) => removeElements(t3))
          );
        };
        const firstLetterToUpper = (t2) =>
          t2.charAt(0).toUpperCase() + t2.slice(1);
        const e = ['-webkit-', '-moz-', '-o-', '-ms-'];
        const c = ['WebKit', 'Moz', 'O', 'MS', 'webkit', 'moz', 'o', 'ms'];
        const r = {};
        const i = {};
        const cssProperty = (t2) => {
          let n2 = i[t2];
          if (hasOwnProperty(i, t2)) return n2;
          const o2 = firstLetterToUpper(t2);
          const s2 = createDiv().style;
          return (
            each(e, (e2) => {
              const c2 = e2.replace(/-/g, '');
              return !(n2 = [
                t2,
                e2 + t2,
                c2 + o2,
                firstLetterToUpper(c2) + o2,
              ].find((t3) => void 0 !== s2[t3]));
            }),
            (i[t2] = n2 || '')
          );
        };
        const jsAPI = (t2) => {
          if (isClient()) {
            let n2 = r[t2] || window[t2];
            return (
              hasOwnProperty(r, t2) ||
                (each(
                  c,
                  (o2) => (
                    (n2 = n2 || window[o2 + firstLetterToUpper(t2)]), !n2
                  )
                ),
                (r[t2] = n2)),
              n2
            );
          }
        };
        const l = jsAPI('MutationObserver');
        const a = jsAPI('IntersectionObserver');
        const u = jsAPI('ResizeObserver');
        const d = jsAPI('cancelAnimationFrame');
        const f = jsAPI('requestAnimationFrame');
        const _ = isClient() && window.setTimeout;
        const h = isClient() && window.clearTimeout;
        const v = /[^\x20\t\r\n\f]+/g;
        const classListAction = (t2, n2, o2) => {
          let e2;
          const s2 = t2 && t2.classList;
          let c2 = 0;
          let r2 = !1;
          if (s2 && n2 && isString(n2)) {
            const t3 = n2.match(v) || [];
            for (r2 = t3.length > 0; (e2 = t3[c2++]); ) r2 = !!o2(s2, e2) && r2;
          }
          return r2;
        };
        const removeClass = (t2, n2) => {
          classListAction(t2, n2, (t3, n3) => t3.remove(n3));
        };
        const addClass = (t2, n2) => (
          classListAction(t2, n2, (t3, n3) => t3.add(n3)),
          removeClass.bind(0, t2, n2)
        );
        const equal = (t2, n2, o2, s2) => {
          if (t2 && n2) {
            let e2 = !0;
            return (
              each(o2, (o3) => {
                (s2 ? s2(t2[o3]) : t2[o3]) !== (s2 ? s2(n2[o3]) : n2[o3]) &&
                  (e2 = !1);
              }),
              e2
            );
          }
          return !1;
        };
        const equalWH = (t2, n2) => equal(t2, n2, ['w', 'h']);
        const equalXY = (t2, n2) => equal(t2, n2, ['x', 'y']);
        const equalTRBL = (t2, n2) => equal(t2, n2, ['t', 'r', 'b', 'l']);
        const equalBCRWH = (t2, n2, o2) =>
          equal(t2, n2, ['width', 'height'], o2 && ((t3) => Math.round(t3)));
        const noop = () => {};
        const selfClearTimeout = (t2) => {
          let n2;
          const o2 = t2 ? _ : f;
          const s2 = t2 ? h : d;
          return [
            (e2) => {
              s2(n2), (n2 = o2(e2, isFunction(t2) ? t2() : t2));
            },
            () => s2(n2),
          ];
        };
        const debounce = (t2, n2) => {
          let o2;
          let s2;
          let e2;
          let c2 = noop;
          const { v: r2, g: i2, p: l2 } = n2 || {};
          const a2 = function (n3) {
            c2(), h(o2), (o2 = s2 = void 0), (c2 = noop), t2.apply(this, n3);
          };
          const mergeParms = (t3) => (l2 && s2 ? l2(s2, t3) : t3);
          const flush = () => {
            c2 !== noop && a2(mergeParms(e2) || e2);
          };
          const u2 = function () {
            const t3 = from(arguments);
            const n3 = isFunction(r2) ? r2() : r2;
            if (isNumber(n3) && n3 >= 0) {
              const r3 = isFunction(i2) ? i2() : i2;
              const l4 = isNumber(r3) && r3 >= 0;
              const u3 = n3 > 0 ? _ : f;
              const v3 = n3 > 0 ? h : d;
              const w3 = mergeParms(t3) || t3;
              const p2 = a2.bind(0, w3);
              c2();
              const b3 = u3(p2, n3);
              (c2 = () => v3(b3)),
                l4 && !o2 && (o2 = _(flush, r3)),
                (s2 = e2 = w3);
            } else a2(t3);
          };
          return (u2.m = flush), u2;
        };
        const w = { opacity: 1, zindex: 1 };
        const parseToZeroOrNumber = (t2, n2) => {
          const o2 = n2 ? parseFloat(t2) : parseInt(t2, 10);
          return o2 == o2 ? o2 : 0;
        };
        var getCSSVal = (t2, n2, o2) =>
          n2 != null ? n2[o2] || n2.getPropertyValue(o2) : t2.style[o2];
        var setCSSVal = (t2, n2, o2) => {
          try {
            const { style: s2 } = t2;
            isUndefined(s2[n2])
              ? s2.setProperty(n2, o2)
              : (s2[n2] = ((t2, n2) =>
                  !w[t2.toLowerCase()] && isNumber(n2) ? `${n2}px` : n2)(
                  n2,
                  o2
                ));
          } catch {}
        };
        const directionIsRTL = (t2) => style(t2, 'direction') === 'rtl';
        const topRightBottomLeft = (t2, n2, o2) => {
          const s2 = n2 ? `${n2}-` : '';
          const e2 = o2 ? `-${o2}` : '';
          const c2 = `${s2}top${e2}`;
          const r2 = `${s2}right${e2}`;
          const i2 = `${s2}bottom${e2}`;
          const l2 = `${s2}left${e2}`;
          const a2 = style(t2, [c2, r2, i2, l2]);
          return {
            t: parseToZeroOrNumber(a2[c2], !0),
            r: parseToZeroOrNumber(a2[r2], !0),
            b: parseToZeroOrNumber(a2[i2], !0),
            l: parseToZeroOrNumber(a2[l2], !0),
          };
        };
        const { round: p } = Math;
        const b = { w: 0, h: 0 };
        const offsetSize = (t2) =>
          t2 ? { w: t2.offsetWidth, h: t2.offsetHeight } : b;
        const clientSize = (t2) =>
          t2 ? { w: t2.clientWidth, h: t2.clientHeight } : b;
        const scrollSize = (t2) =>
          t2 ? { w: t2.scrollWidth, h: t2.scrollHeight } : b;
        const fractionalSize = (t2) => {
          const n2 = parseFloat(style(t2, 'height')) || 0;
          const o2 = parseFloat(style(t2, 'width')) || 0;
          return { w: o2 - p(o2), h: n2 - p(n2) };
        };
        const getBoundingClientRect = (t2) => t2.getBoundingClientRect();
        const splitEventNames = (t2) => t2.split(' ');
        const off = (t2, n2, o2, s2) => {
          each(splitEventNames(n2), (n3) => {
            t2.removeEventListener(n3, o2, s2);
          });
        };
        const on = (t2, n2, o2, s2) => {
          let e2;
          const c2 = (() => {
            if (isUndefined(m)) {
              m = !1;
              try {
                window.addEventListener(
                  'test',
                  null,
                  Object.defineProperty({}, 'passive', {
                    get() {
                      m = !0;
                    },
                  })
                );
              } catch {}
            }
            return m;
          })();
          const r2 = (e2 = c2 && s2 && s2.S) != null ? e2 : c2;
          const i2 = (s2 && s2.$) || !1;
          const l2 = (s2 && s2.C) || !1;
          const a2 = [];
          const u2 = c2 ? { passive: r2, capture: i2 } : i2;
          return (
            each(splitEventNames(n2), (n3) => {
              const s3 = l2
                ? (e3) => {
                    t2.removeEventListener(n3, s3, i2), o2 && o2(e3);
                  }
                : o2;
              push(a2, off.bind(null, t2, n3, s3, i2)),
                t2.addEventListener(n3, s3, u2);
            }),
            runEachAndClear.bind(0, a2)
          );
        };
        const stopPropagation = (t2) => t2.stopPropagation();
        const preventDefault = (t2) => t2.preventDefault();
        const y = { x: 0, y: 0 };
        const absoluteCoordinates = (t2) => {
          const n2 = t2 ? getBoundingClientRect(t2) : 0;
          return n2
            ? {
                x: n2.left + window.pageYOffset,
                y: n2.top + window.pageXOffset,
              }
            : y;
        };
        const manageListener = (t2, n2) => {
          each(isArray(n2) ? n2 : [n2], t2);
        };
        const createEventListenerHub = (t2) => {
          const n2 = new Map();
          const removeEvent = (t3, o2) => {
            if (t3) {
              const s2 = n2.get(t3);
              manageListener((t4) => {
                s2 && s2[t4 ? 'delete' : 'clear'](t4);
              }, o2);
            } else
              n2.forEach((t4) => {
                t4.clear();
              }),
                n2.clear();
          };
          const addEvent = (t3, o2) => {
            if (isString(t3)) {
              const s3 = n2.get(t3) || new Set();
              return (
                n2.set(t3, s3),
                manageListener((t4) => {
                  isFunction(t4) && s3.add(t4);
                }, o2),
                removeEvent.bind(0, t3, o2)
              );
            }
            isBoolean(o2) && o2 && removeEvent();
            const s2 = keys(t3);
            const e2 = [];
            return (
              each(s2, (n3) => {
                const o3 = t3[n3];
                o3 && push(e2, addEvent(n3, o3));
              }),
              runEachAndClear.bind(0, e2)
            );
          };
          return (
            addEvent(t2 || {}),
            [
              addEvent,
              removeEvent,
              (t3, o2) => {
                const s2 = n2.get(t3);
                each(from(s2), (t4) => {
                  o2 && !isEmptyArray(o2) ? t4.apply(0, o2) : t4();
                });
              },
            ]
          );
        };
        const opsStringify = (t2) =>
          JSON.stringify(t2, (t3, n2) => {
            if (isFunction(n2)) throw new Error();
            return n2;
          });
        const S = {
          paddingAbsolute: !1,
          showNativeOverlaidScrollbars: !1,
          update: {
            elementEvents: [['img', 'load']],
            debounce: [0, 33],
            attributes: null,
            ignoreMutation: null,
          },
          overflow: { x: 'scroll', y: 'scroll' },
          scrollbars: {
            theme: 'os-theme-dark',
            visibility: 'auto',
            autoHide: 'never',
            autoHideDelay: 1300,
            dragScroll: !0,
            clickScroll: !1,
            pointers: ['mouse', 'touch', 'pen'],
          },
        };
        const getOptionsDiff = (t2, n2) => {
          const o2 = {};
          return (
            each(keys(n2).concat(keys(t2)), (s3) => {
              const e2 = t2[s3];
              const c2 = n2[s3];
              if (isObject(e2) && isObject(c2))
                assignDeep((o2[s3] = {}), getOptionsDiff(e2, c2)),
                  isEmptyObject(o2[s3]) && delete o2[s3];
              else if (hasOwnProperty(n2, s3) && c2 !== e2) {
                let t3 = !0;
                if (isArray(e2) || isArray(c2))
                  try {
                    opsStringify(e2) === opsStringify(c2) && (t3 = !1);
                  } catch {}
                t3 && (o2[s3] = c2);
              }
            }),
            o2
          );
        };
        const x = 'os-environment';
        const $ = `${x}-flexbox-glue`;
        const C = `${$}-max`;
        const O = 'os-scrollbar-hidden';
        const z = 'data-overlayscrollbars-initialize';
        const T = 'data-overlayscrollbars';
        const E = `${T}-overflow-x`;
        const I = `${T}-overflow-y`;
        const A = 'overflowVisible';
        const H = 'scrollbarPressed';
        const P = 'updating';
        const D = 'data-overlayscrollbars-viewport';
        const M = 'arrange';
        const R = 'scrollbarHidden';
        const k = A;
        const B = 'data-overlayscrollbars-padding';
        const V = k;
        const Y = 'data-overlayscrollbars-content';
        const j = 'os-size-observer';
        const N = `${j}-appear`;
        const q = `${j}-listener`;
        const J = 'os-scrollbar';
        const K = `${J}-rtl`;
        const Q = `${J}-horizontal`;
        const tt = `${J}-vertical`;
        const nt = `${J}-track`;
        const ot = `${J}-handle`;
        const st = `${J}-visible`;
        const et = `${J}-cornerless`;
        const ct = `${J}-transitionless`;
        const rt = `${J}-interaction`;
        const it = `${J}-unusable`;
        const lt = `${J}-auto-hidden`;
        const at = `${J}-wheel`;
        const ut = `${nt}-interactive`;
        const dt = `${ot}-interactive`;
        const ft = {};
        const getPlugins = () => ft;
        const Tt = '__osScrollbarsHidingPlugin';
        const getNativeScrollbarSize = (t2, n2, o2, s2) => {
          appendChildren(t2, n2);
          const e2 = clientSize(n2);
          const c2 = offsetSize(n2);
          const r2 = fractionalSize(o2);
          return (
            s2 && removeElements(n2),
            { x: c2.h - e2.h + r2.h, y: c2.w - e2.w + r2.w }
          );
        };
        const getRtlScrollBehavior = (t2, n2) => {
          style(t2, {
            overflowX: 'hidden',
            overflowY: 'hidden',
            direction: 'rtl',
          }),
            scrollLeft(t2, 0);
          const s2 = absoluteCoordinates(t2);
          const e2 = absoluteCoordinates(n2);
          scrollLeft(t2, -999);
          const c2 = absoluteCoordinates(n2);
          return { i: s2.x === e2.x, n: e2.x !== c2.x };
        };
        const getFlexboxGlue = (t2, n2) => {
          const o2 = addClass(t2, $);
          const s2 = getBoundingClientRect(t2);
          const e2 = getBoundingClientRect(n2);
          const c2 = equalBCRWH(e2, s2, !0);
          const r2 = addClass(t2, C);
          const i2 = getBoundingClientRect(t2);
          const l2 = getBoundingClientRect(n2);
          const a2 = equalBCRWH(l2, i2, !0);
          return o2(), r2(), c2 && a2;
        };
        const createEnvironment = () => {
          const { body: t2 } = document;
          const o2 = createDOM(`<div class="${x}"><div></div></div>`)[0];
          const s2 = o2.firstChild;
          const [e2, , c2] = createEventListenerHub();
          const [r2, i2] = createCache(
            { o: getNativeScrollbarSize(t2, o2, s2), u: equalXY },
            getNativeScrollbarSize.bind(0, t2, o2, s2, !0)
          );
          const [l2] = i2();
          const a2 = ((t2) => {
            let n2 = !1;
            const o2 = addClass(t2, O);
            try {
              n2 =
                style(t2, cssProperty('scrollbar-width')) === 'none' ||
                window
                  .getComputedStyle(t2, '::-webkit-scrollbar')
                  .getPropertyValue('display') === 'none';
            } catch {}
            return o2(), n2;
          })(o2);
          const u2 = { x: l2.x === 0, y: l2.y === 0 };
          const d2 = {
            elements: {
              host: null,
              padding: !a2,
              viewport: (t3) => a2 && t3 === t3.ownerDocument.body && t3,
              content: !1,
            },
            scrollbars: { slot: !0 },
            cancel: { nativeScrollbarsOverlaid: !1, body: null },
          };
          const f3 = assignDeep({}, S);
          const _2 = assignDeep.bind(0, {}, f3);
          const h2 = assignDeep.bind(0, {}, d2);
          const v3 = {
            k: l2,
            A: u2,
            I: a2,
            L: style(o2, 'zIndex') === '-1',
            B: getRtlScrollBehavior(o2, s2),
            V: getFlexboxGlue(o2, s2),
            Y: e2.bind(0, 'z'),
            j: e2.bind(0, 'r'),
            N: h2,
            q: (t3) => assignDeep(d2, t3) && h2(),
            F: _2,
            G: (t3) => assignDeep(f3, t3) && _2(),
            X: assignDeep({}, d2),
            U: assignDeep({}, f3),
          };
          const g2 = window.addEventListener;
          const w3 = debounce((t3) => c2(t3 ? 'z' : 'r'), { v: 33, g: 99 });
          if (
            (removeAttr(o2, 'style'),
            removeElements(o2),
            g2('resize', w3.bind(0, !1)),
            !(a2 || (u2.x && u2.y)))
          ) {
            let t3;
            g2('resize', () => {
              const n3 = getPlugins()[Tt];
              (t3 = t3 || (n3 && n3.R())), t3 && t3(v3, r2, w3.bind(0, !0));
            });
          }
          return v3;
        };
        const getEnvironment = () => (Lt || (Lt = createEnvironment()), Lt);
        const resolveInitialization = (t2, n2) =>
          isFunction(n2) ? n2.apply(0, t2) : n2;
        const staticInitializationElement = (t2, n2, o2, s2) => {
          const e2 = isUndefined(s2) ? o2 : s2;
          return resolveInitialization(t2, e2) || n2.apply(0, t2);
        };
        const dynamicInitializationElement = (t2, n2, o2, s2) => {
          const e2 = isUndefined(s2) ? o2 : s2;
          const c2 = resolveInitialization(t2, e2);
          return !!c2 && (isHTMLElement(c2) ? c2 : n2.apply(0, t2));
        };
        const Ht = new WeakMap();
        const getInstance = (t2) => Ht.get(t2);
        const getPropByPath = (t2, n2) =>
          t2
            ? n2
                .split('.')
                .reduce(
                  (t3, n3) => (t3 && hasOwnProperty(t3, n3) ? t3[n3] : void 0),
                  t2
                )
            : void 0;
        const createOptionCheck = (t2, n2, o2) => (s2) => [
          getPropByPath(t2, s2),
          o2 || void 0 !== getPropByPath(n2, s2),
        ];
        const createState = (t2) => {
          let n2 = t2;
          return [
            () => n2,
            (t3) => {
              n2 = assignDeep({}, n2, t3);
            },
          ];
        };
        const Pt = 'tabindex';
        const Dt = createDiv.bind(0, '');
        const unwrap = (t2) => {
          appendChildren(parent(t2), contents(t2)), removeElements(t2);
        };
        const createStructureSetupElements = (t2) => {
          const n2 = getEnvironment();
          const { N: o2, I: s2 } = n2;
          const e2 = getPlugins()[Tt];
          const c2 = e2 && e2.T;
          const { elements: r2 } = o2();
          const { host: i2, padding: l2, viewport: a2, content: u2 } = r2;
          const d2 = isHTMLElement(t2);
          const f3 = d2 ? {} : t2;
          const { elements: _2 } = f3;
          const { host: h2, padding: v3, viewport: g2, content: w3 } = _2 || {};
          const p2 = d2 ? t2 : f3.target;
          const b3 = is(p2, 'textarea');
          const m2 = p2.ownerDocument;
          const y2 = m2.documentElement;
          const S3 = p2 === m2.body;
          const x2 = m2.defaultView;
          const $2 = staticInitializationElement.bind(0, [p2]);
          const C3 = dynamicInitializationElement.bind(0, [p2]);
          const A3 = resolveInitialization.bind(0, [p2]);
          const L2 = $2.bind(0, Dt, a2);
          const H2 = C3.bind(0, Dt, u2);
          const P2 = L2(g2);
          const M2 = P2 === p2;
          const k2 = M2 && S3;
          const V2 = !M2 && H2(w3);
          const j2 = !M2 && isHTMLElement(P2) && P2 === V2;
          const N2 = j2 && !!A3(u2);
          const q2 = N2 ? L2() : P2;
          const F3 = N2 ? V2 : H2();
          const X2 = k2 ? y2 : j2 ? q2 : P2;
          const U2 = b3 ? $2(Dt, i2, h2) : p2;
          const W2 = k2 ? X2 : U2;
          const Z2 = j2 ? F3 : V2;
          const J2 = m2.activeElement;
          const K2 = !M2 && x2.top === x2 && J2 === p2;
          const Q2 = {
            W: p2,
            Z: W2,
            J: X2,
            K: !M2 && C3(Dt, l2, v3),
            tt: Z2,
            nt: !M2 && !s2 && c2 && c2(n2),
            ot: k2 ? y2 : X2,
            st: k2 ? m2 : X2,
            et: x2,
            ct: m2,
            rt: b3,
            it: S3,
            lt: d2,
            ut: M2,
            dt: j2,
            ft: (t3, n3) =>
              ((t2, n2, o2) => {
                const s2 = attr(t2, n2) || '';
                return new Set(s2.split(' ')).has(o2);
              })(X2, M2 ? T : D, M2 ? n3 : t3),
            _t: (t3, n3, o3) => attrClass(X2, M2 ? T : D, M2 ? n3 : t3, o3),
          };
          const tt2 = keys(Q2).reduce((t3, n3) => {
            const o3 = Q2[n3];
            return push(t3, !(!o3 || parent(o3)) && o3);
          }, []);
          const elementIsGenerated = (t3) =>
            t3 ? indexOf(tt2, t3) > -1 : null;
          const { W: nt2, Z: ot2, K: st2, J: et2, tt: ct2, nt: rt2 } = Q2;
          const it2 = [
            () => {
              removeAttr(ot2, T),
                removeAttr(ot2, z),
                removeAttr(nt2, z),
                S3 && (removeAttr(y2, T), removeAttr(y2, z));
            },
          ];
          const lt2 = b3 && elementIsGenerated(ot2);
          let at2 = b3
            ? nt2
            : contents(
                [ct2, et2, st2, ot2, nt2].find(
                  (t3) => !1 === elementIsGenerated(t3)
                )
              );
          const ut2 = k2 ? nt2 : ct2 || et2;
          return [
            Q2,
            () => {
              attr(ot2, T, M2 ? 'viewport' : 'host'),
                attr(st2, B, ''),
                attr(ct2, Y, ''),
                M2 || attr(et2, D, '');
              const t3 = S3 && !M2 ? addClass(parent(p2), O) : noop;
              if (
                (lt2 &&
                  (insertAfter(nt2, ot2),
                  push(it2, () => {
                    insertAfter(ot2, nt2), removeElements(ot2);
                  })),
                appendChildren(ut2, at2),
                appendChildren(ot2, st2),
                appendChildren(st2 || ot2, !M2 && et2),
                appendChildren(et2, ct2),
                push(it2, () => {
                  t3(),
                    removeAttr(st2, B),
                    removeAttr(ct2, Y),
                    removeAttr(et2, E),
                    removeAttr(et2, I),
                    removeAttr(et2, D),
                    elementIsGenerated(ct2) && unwrap(ct2),
                    elementIsGenerated(et2) && unwrap(et2),
                    elementIsGenerated(st2) && unwrap(st2);
                }),
                s2 &&
                  !M2 &&
                  (attrClass(et2, D, R, !0),
                  push(it2, removeAttr.bind(0, et2, D))),
                rt2 &&
                  (((t2, n2) => {
                    before(parent(t2), t2, n2);
                  })(et2, rt2),
                  push(it2, removeElements.bind(0, rt2))),
                K2)
              ) {
                const t4 = attr(et2, Pt);
                attr(et2, Pt, '-1'), et2.focus();
                const revertViewportTabIndex = () =>
                  t4 ? attr(et2, Pt, t4) : removeAttr(et2, Pt);
                const n3 = on(m2, 'pointerdown keydown', () => {
                  revertViewportTabIndex(), n3();
                });
                push(it2, [revertViewportTabIndex, n3]);
              } else J2 && J2.focus && J2.focus();
              at2 = 0;
            },
            runEachAndClear.bind(0, it2),
          ];
        };
        const createTrinsicUpdateSegment = (t2, n2) => {
          const { tt: o2 } = t2;
          const [s2] = n2;
          return (t3) => {
            const { V: n3 } = getEnvironment();
            const { ht: e2 } = s2();
            const { vt: c2 } = t3;
            const r2 = (o2 || !n3) && c2;
            return (
              r2 && style(o2, { height: e2 ? '' : '100%' }), { gt: r2, wt: r2 }
            );
          };
        };
        const createPaddingUpdateSegment = (t2, n2) => {
          const [o2, s2] = n2;
          const { Z: e2, K: c2, J: r2, ut: i2 } = t2;
          const [l2, a2] = createCache(
            { u: equalTRBL, o: topRightBottomLeft() },
            topRightBottomLeft.bind(0, e2, 'padding', '')
          );
          return (t3, n3, e3) => {
            let [u2, d2] = a2(e3);
            const { I: f3, V: _2 } = getEnvironment();
            const { bt: h2 } = o2();
            const { gt: v3, wt: g2, yt: w3 } = t3;
            const [p2, b3] = n3('paddingAbsolute');
            (v3 || d2 || (!_2 && g2)) && ([u2, d2] = l2(e3));
            const y2 = !i2 && (b3 || w3 || d2);
            if (y2) {
              const t4 = !p2 || (!c2 && !f3);
              const n4 = u2.r + u2.l;
              const o3 = u2.t + u2.b;
              const e4 = {
                marginRight: t4 && !h2 ? -n4 : 0,
                marginBottom: t4 ? -o3 : 0,
                marginLeft: t4 && h2 ? -n4 : 0,
                top: t4 ? -u2.t : 0,
                right: t4 ? (h2 ? -u2.r : 'auto') : 0,
                left: t4 ? (h2 ? 'auto' : -u2.l) : 0,
                width: t4 ? `calc(100% + ${n4}px)` : '',
              };
              const i3 = {
                paddingTop: t4 ? u2.t : 0,
                paddingRight: t4 ? u2.r : 0,
                paddingBottom: t4 ? u2.b : 0,
                paddingLeft: t4 ? u2.l : 0,
              };
              style(c2 || r2, e4),
                style(r2, i3),
                s2({ K: u2, St: !t4, P: c2 ? i3 : assignDeep({}, e4, i3) });
            }
            return { xt: y2 };
          };
        };
        const { max: Mt } = Math;
        const Rt = Mt.bind(0, 0);
        const kt = 'visible';
        const Yt = { u: equalWH, o: { w: 0, h: 0 } };
        const jt = { u: equalXY, o: { x: 'hidden', y: 'hidden' } };
        const overflowIsVisible = (t2) => t2.indexOf(kt) === 0;
        const createOverflowUpdateSegment = (t2, n2) => {
          const [o2, s2] = n2;
          const {
            Z: e2,
            K: c2,
            J: r2,
            nt: i2,
            ut: l2,
            _t: a2,
            it: u2,
            et: d2,
          } = t2;
          const { k: f3, V: _2, I: h2, A: v3 } = getEnvironment();
          const g2 = getPlugins()[Tt];
          const w3 = !l2 && !h2 && (v3.x || v3.y);
          const p2 = u2 && l2;
          const [b3, m2] = createCache(Yt, fractionalSize.bind(0, r2));
          const [y2, S3] = createCache(Yt, scrollSize.bind(0, r2));
          const [x2, $2] = createCache(Yt);
          const [C3, O3] = createCache(Yt);
          const [z2] = createCache(jt);
          const fixFlexboxGlue = (t3, n3) => {
            if ((style(r2, { height: '' }), n3)) {
              const { St: n4, K: s3 } = o2();
              const { $t: c3, D: i3 } = t3;
              const l3 = fractionalSize(e2);
              const a3 = clientSize(e2);
              const u3 = style(r2, 'boxSizing') === 'content-box';
              const d3 = n4 || u3 ? s3.b + s3.t : 0;
              const f4 = !(v3.x && u3);
              style(r2, { height: a3.h + l3.h + (c3.x && f4 ? i3.x : 0) - d3 });
            }
          };
          const getViewportOverflowState = (t3, n3) => {
            const o3 = h2 || t3 ? 0 : 42;
            const getStatePerAxis = (t4, s4, e4) => {
              const c4 = style(r2, t4);
              const l4 = (n3 ? n3[t4] : c4) === 'scroll';
              return [c4, l4, l4 && !h2 ? (s4 ? o3 : e4) : 0, s4 && !!o3];
            };
            const [s3, e3, c3, i3] = getStatePerAxis('overflowX', v3.x, f3.x);
            const [l3, a3, u3, d3] = getStatePerAxis('overflowY', v3.y, f3.y);
            return {
              Ct: { x: s3, y: l3 },
              $t: { x: e3, y: a3 },
              D: { x: c3, y: u3 },
              M: { x: i3, y: d3 },
            };
          };
          const hideNativeScrollbars = (t3, n3, s3, e3) => {
            const { D: c3, M: r3 } = t3;
            const { x: i3, y: l3 } = r3;
            const { x: a3, y: u3 } = c3;
            const { P: d3 } = o2();
            const f4 = n3 ? 'marginLeft' : 'marginRight';
            const _3 = n3 ? 'paddingLeft' : 'paddingRight';
            const h3 = d3[f4];
            const v4 = d3.marginBottom;
            const g3 = d3[_3];
            const w4 = d3.paddingBottom;
            (e3.width = `calc(100% + ${u3 + -1 * h3}px)`),
              (e3[f4] = -u3 + h3),
              (e3.marginBottom = -a3 + v4),
              s3 &&
                ((e3[_3] = g3 + (l3 ? u3 : 0)),
                (e3.paddingBottom = w4 + (i3 ? a3 : 0)));
          };
          const [H2, P2] = g2
            ? g2.H(
                w3,
                _2,
                r2,
                i2,
                o2,
                getViewportOverflowState,
                hideNativeScrollbars
              )
            : [() => w3, () => [noop]];
          return (t3, n3, i3) => {
            let st2;
            const { gt: u3, Ot: f4, wt: g3, xt: w4, vt: M2, yt: Y2 } = t3;
            const { ht: j2, bt: N2 } = o2();
            const [q2, F3] = n3('showNativeOverlaidScrollbars');
            const [G2, X2] = n3('overflow');
            const U2 = q2 && v3.x && v3.y;
            const W2 = !l2 && !_2 && (u3 || g3 || f4 || F3 || M2);
            const Z2 = overflowIsVisible(G2.x);
            const J2 = overflowIsVisible(G2.y);
            const K2 = Z2 || J2;
            let Q2 = m2(i3);
            let tt2 = S3(i3);
            let nt2 = $2(i3);
            let ot2 = O3(i3);
            if (
              (F3 && h2 && a2(R, 'scrollbarHidden', !U2),
              W2 &&
                ((st2 = getViewportOverflowState(U2)), fixFlexboxGlue(st2, j2)),
              u3 || w4 || g3 || Y2 || F3)
            ) {
              K2 && a2(k, A, !1);
              const [t4, n4] = P2(U2, N2, st2);
              const [o3, s3] = (Q2 = b3(i3));
              const [e3, c3] = (tt2 = y2(i3));
              const l3 = clientSize(r2);
              let u4 = e3;
              let f5 = l3;
              t4(),
                (c3 || s3 || F3) &&
                  n4 &&
                  !U2 &&
                  H2(n4, e3, o3, N2) &&
                  ((f5 = clientSize(r2)), (u4 = scrollSize(r2)));
              const _3 = {
                w: Rt(Mt(e3.w, u4.w) + o3.w),
                h: Rt(Mt(e3.h, u4.h) + o3.h),
              };
              const h3 = {
                w: Rt((p2 ? d2.innerWidth : f5.w + Rt(l3.w - e3.w)) + o3.w),
                h: Rt(
                  (p2 ? d2.innerHeight + o3.h : f5.h + Rt(l3.h - e3.h)) + o3.h
                ),
              };
              (ot2 = C3(h3)),
                (nt2 = x2(
                  ((t2, n2) => {
                    const o2 = window.devicePixelRatio % 1 != 0 ? 1 : 0;
                    const s2 = { w: Rt(t2.w - n2.w), h: Rt(t2.h - n2.h) };
                    return { w: s2.w > o2 ? s2.w : 0, h: s2.h > o2 ? s2.h : 0 };
                  })(_3, h3),
                  i3
                ));
            }
            const [et2, ct2] = ot2;
            const [rt2, it2] = nt2;
            const [lt2, at2] = tt2;
            const [ut2, dt2] = Q2;
            const ft2 = { x: rt2.w > 0, y: rt2.h > 0 };
            const _t2 =
              (Z2 && J2 && (ft2.x || ft2.y)) ||
              (Z2 && ft2.x && !ft2.y) ||
              (J2 && ft2.y && !ft2.x);
            if (w4 || Y2 || dt2 || at2 || ct2 || it2 || X2 || F3 || W2) {
              const t4 = {
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 0,
                width: '',
                overflowY: '',
                overflowX: '',
              };
              const n4 = ((t3, n3, o3, s3) => {
                const setAxisOverflowStyle = (t4, n4) => {
                  const o4 = overflowIsVisible(t4);
                  const s4 = (n4 && o4 && t4.replace(`${kt}-`, '')) || '';
                  return [
                    n4 && !o4 ? t4 : '',
                    overflowIsVisible(s4) ? 'hidden' : s4,
                  ];
                };
                const [e3, c3] = setAxisOverflowStyle(o3.x, n3.x);
                const [r3, i3] = setAxisOverflowStyle(o3.y, n3.y);
                return (
                  (s3.overflowX = c3 && r3 ? c3 : e3),
                  (s3.overflowY = i3 && e3 ? i3 : r3),
                  getViewportOverflowState(t3, s3)
                );
              })(U2, ft2, G2, t4);
              const o3 = H2(n4, lt2, ut2, N2);
              l2 || hideNativeScrollbars(n4, N2, o3, t4),
                W2 && fixFlexboxGlue(n4, j2),
                l2
                  ? (attr(e2, E, t4.overflowX), attr(e2, I, t4.overflowY))
                  : style(r2, t4);
            }
            attrClass(e2, T, A, _t2),
              attrClass(c2, B, V, _t2),
              l2 || attrClass(r2, D, k, K2);
            const [ht2, vt2] = z2(getViewportOverflowState(U2).Ct);
            return (
              s2({
                Ct: ht2,
                zt: { x: et2.w, y: et2.h },
                Tt: { x: rt2.w, y: rt2.h },
                Et: ft2,
              }),
              { It: vt2, At: ct2, Lt: it2 }
            );
          };
        };
        const prepareUpdateHints = (t2, n2, o2) => {
          const s2 = {};
          const e2 = n2 || {};
          return (
            each(keys(t2).concat(keys(e2)), (n3) => {
              const c3 = t2[n3];
              const r2 = e2[n3];
              s2[n3] = !!(o2 || c3 || r2);
            }),
            s2
          );
        };
        const createDOMObserver = (t2, n2, o2, s2) => {
          let e2 = !1;
          const { Ht: c2, Pt: r2, Dt: i2, Mt: a2, Rt: u2, kt: d2 } = s2 || {};
          const f3 = debounce(
            () => {
              e2 && o2(!0);
            },
            { v: 33, g: 99 }
          );
          const [_2, h2] = ((t2, n2, o2) => {
            let s2;
            let e2 = !1;
            const updateElements = (c2) => {
              o2 &&
                each(
                  o2.reduce((n3, o3) => {
                    if (o3) {
                      const [s3, e3] = o3;
                      const r3 = e3 && s3 && (c2 ? c2(s3) : find(s3, t2));
                      r3 &&
                        r3.length &&
                        e3 &&
                        isString(e3) &&
                        push(n3, [r3, e3.trim()], !0);
                    }
                    return n3;
                  }, []),
                  (o3) =>
                    each(o3[0], (c3) => {
                      const r3 = o3[1];
                      const i2 = s2.get(c3) || [];
                      if (t2.contains(c3)) {
                        const t3 = on(c3, r3, (o4) => {
                          e2 ? (t3(), s2.delete(c3)) : n2(o4);
                        });
                        s2.set(c3, push(i2, t3));
                      } else runEachAndClear(i2), s2.delete(c3);
                    })
                );
            };
            return (
              o2 && ((s2 = new WeakMap()), updateElements()),
              [
                () => {
                  e2 = !0;
                },
                updateElements,
              ]
            );
          })(t2, f3, i2);
          const g2 = r2 || [];
          const w3 = (c2 || []).concat(g2);
          const observerCallback = (e3, c3) => {
            const r3 = u2 || noop;
            const i3 = d2 || noop;
            const l2 = new Set();
            const f4 = new Set();
            let _3 = !1;
            let v4 = !1;
            if (
              (each(e3, (o3) => {
                const {
                  attributeName: e4,
                  target: c4,
                  type: u3,
                  oldValue: d3,
                  addedNodes: h3,
                  removedNodes: w4,
                } = o3;
                const p3 = u3 === 'attributes';
                const b3 = u3 === 'childList';
                const m2 = t2 === c4;
                const y2 = p3 && isString(e4) ? attr(c4, e4) : 0;
                const S3 = y2 !== 0 && d3 !== y2;
                const x2 = indexOf(g2, e4) > -1 && S3;
                if (n2 && (b3 || !m2)) {
                  const n3 = !p3;
                  const u4 = p3 && S3;
                  const f5 = u4 && a2 && is(c4, a2);
                  const g3 =
                    (f5 ? !r3(c4, e4, d3, y2) : n3 || u4) &&
                    !i3(o3, !!f5, t2, s2);
                  each(h3, (t3) => l2.add(t3)),
                    each(w4, (t3) => l2.add(t3)),
                    (v4 = v4 || g3);
                }
                !n2 &&
                  m2 &&
                  S3 &&
                  !r3(c4, e4, d3, y2) &&
                  (f4.add(e4), (_3 = _3 || x2));
              }),
              l2.size > 0 &&
                h2((t3) =>
                  from(l2).reduce(
                    (n3, o3) => (
                      push(n3, find(t3, o3)), is(o3, t3) ? push(n3, o3) : n3
                    ),
                    []
                  )
                ),
              n2)
            )
              return !c3 && v4 && o2(!1), [!1];
            if (f4.size > 0 || _3) {
              const t3 = [from(f4), _3];
              return !c3 && o2.apply(0, t3), t3;
            }
          };
          const p2 = new l((t3) => observerCallback(t3));
          return (
            p2.observe(t2, {
              attributes: !0,
              attributeOldValue: !0,
              attributeFilter: w3,
              subtree: n2,
              childList: n2,
              characterData: n2,
            }),
            (e2 = !0),
            [
              () => {
                e2 && (_2(), p2.disconnect(), (e2 = !1));
              },
              () => {
                if (e2) {
                  f3.m();
                  const t3 = p2.takeRecords();
                  return !isEmptyArray(t3) && observerCallback(t3, !0);
                }
              },
            ]
          );
        };
        const Nt = 3333333;
        const domRectHasDimensions = (t2) => t2 && (t2.height || t2.width);
        const createSizeObserver = (t2, n2, o2) => {
          const { Bt: s2 = !1, Vt: e2 = !1 } = o2 || {};
          const c2 = getPlugins().__osSizeObserverPlugin;
          const { B: r2 } = getEnvironment();
          const l2 = createDOM(
            `<div class="${j}"><div class="${q}"></div></div>`
          )[0];
          const a2 = l2.firstChild;
          const d2 = directionIsRTL.bind(0, t2);
          const [f3] = createCache({
            o: void 0,
            _: !0,
            u: (t3, n3) =>
              !(!t3 || (!domRectHasDimensions(t3) && domRectHasDimensions(n3))),
          });
          const onSizeChangedCallbackProxy = (t3) => {
            const o3 = isArray(t3) && t3.length > 0 && isObject(t3[0]);
            const e3 = !o3 && isBoolean(t3[0]);
            let c3 = !1;
            let i3 = !1;
            let a3 = !0;
            if (o3) {
              const [n3, , o4] = f3(t3.pop().contentRect);
              const s3 = domRectHasDimensions(n3);
              (c3 = !o4 || !s3),
                (i3 = !domRectHasDimensions(o4) && s3),
                (a3 = !c3);
            } else e3 ? ([, a3] = t3) : (i3 = !0 === t3);
            if (s2 && a3) {
              const n3 = e3 ? t3[0] : directionIsRTL(l2);
              scrollLeft(l2, n3 ? (r2.n ? -Nt : r2.i ? 0 : Nt) : Nt),
                scrollTop(l2, Nt);
            }
            c3 || n2({ gt: !e3, Yt: e3 ? t3 : void 0, Vt: !!i3 });
          };
          const _2 = [];
          let h2 = !!e2 && onSizeChangedCallbackProxy;
          return [
            () => {
              runEachAndClear(_2), removeElements(l2);
            },
            () => {
              if (u) {
                const t3 = new u(onSizeChangedCallbackProxy);
                t3.observe(a2),
                  push(_2, () => {
                    t3.disconnect();
                  });
              } else if (c2) {
                const [t3, n3] = c2.O(a2, onSizeChangedCallbackProxy, e2);
                (h2 = t3), push(_2, n3);
              }
              if (s2) {
                const [t3] = createCache({ o: void 0 }, d2);
                push(
                  _2,
                  on(l2, 'scroll', (n3) => {
                    const o3 = t3();
                    const [s3, e3, c3] = o3;
                    e3 &&
                      (removeClass(a2, 'ltr rtl'),
                      addClass(a2, s3 ? 'rtl' : 'ltr'),
                      onSizeChangedCallbackProxy([!!s3, e3, c3])),
                      stopPropagation(n3);
                  })
                );
              }
              h2 &&
                (addClass(l2, N),
                push(_2, on(l2, 'animationstart', h2, { C: !!u }))),
                (u || c2) && appendChildren(t2, l2);
            },
          ];
        };
        const qt = `[${T}]`;
        const Ft = `[${D}]`;
        const Gt = ['tabindex'];
        const Xt = ['wrap', 'cols', 'rows'];
        const Ut = ['id', 'class', 'style', 'open'];
        const createStructureSetupObservers = (t2, n2, o2) => {
          let s2;
          let e2;
          let c2;
          const { Z: r2, J: i2, tt: l2, rt: a2, ut: d2, ft: f3, _t: _2 } = t2;
          const { V: h2 } = getEnvironment();
          const [v3] = createCache({ u: equalWH, o: { w: 0, h: 0 } }, () => {
            const t3 = f3(k, A);
            const n3 = f3(M, '');
            const o3 = n3 && scrollLeft(i2);
            const s3 = n3 && scrollTop(i2);
            _2(k, A), _2(M, ''), _2('', P, !0);
            const e3 = scrollSize(l2);
            const c3 = scrollSize(i2);
            const r3 = fractionalSize(i2);
            return (
              _2(k, A, t3),
              _2(M, '', n3),
              _2('', P),
              scrollLeft(i2, o3),
              scrollTop(i2, s3),
              { w: c3.w + e3.w + r3.w, h: c3.h + e3.h + r3.h }
            );
          });
          const g2 = a2 ? Xt : Ut.concat(Xt);
          const w3 = debounce(o2, {
            v: () => s2,
            g: () => e2,
            p(t3, n3) {
              const [o3] = t3;
              const [s3] = n3;
              return [
                keys(o3)
                  .concat(keys(s3))
                  .reduce((t4, n4) => ((t4[n4] = o3[n4] || s3[n4]), t4), {}),
              ];
            },
          });
          const updateViewportAttrsFromHost = (t3) => {
            each(t3 || Gt, (t4) => {
              if (indexOf(Gt, t4) > -1) {
                const n3 = attr(r2, t4);
                isString(n3) ? attr(i2, t4, n3) : removeAttr(i2, t4);
              }
            });
          };
          const onTrinsicChanged = (t3, s3) => {
            const [e3, c3] = t3;
            const r3 = { vt: c3 };
            return n2({ ht: e3 }), !s3 && o2(r3), r3;
          };
          const onSizeChanged = ({ gt: t3, Yt: s3, Vt: e3 }) => {
            const c3 = !t3 || e3 ? o2 : w3;
            let r3 = !1;
            if (s3) {
              const [t4, o3] = s3;
              (r3 = o3), n2({ bt: t4 });
            }
            c3({ gt: t3, yt: r3 });
          };
          const onContentMutation = (t3, n3) => {
            const [, s3] = v3();
            const e3 = { wt: s3 };
            return s3 && !n3 && (t3 ? o2 : w3)(e3), e3;
          };
          const onHostMutation = (t3, n3, o3) => {
            const s3 = { Ot: n3 };
            return (
              n3 ? !o3 && w3(s3) : d2 || updateViewportAttrsFromHost(t3), s3
            );
          };
          const [p2, b3, m2] =
            l2 || !h2
              ? ((t2, n2) => {
                  let o2;
                  const s2 = createDiv('os-trinsic-observer');
                  const e2 = [];
                  const [c2] = createCache({ o: !1 });
                  const triggerOnTrinsicChangedCallback = (t3, o3) => {
                    if (t3) {
                      const s3 = c2(
                        ((t2) =>
                          t2.h === 0 ||
                          t2.isIntersecting ||
                          t2.intersectionRatio > 0)(t3)
                      );
                      const [, e3] = s3;
                      if (e3) return !o3 && n2(s3), [s3];
                    }
                  };
                  const intersectionObserverCallback = (t3, n3) => {
                    if (t3 && t3.length > 0)
                      return triggerOnTrinsicChangedCallback(t3.pop(), n3);
                  };
                  return [
                    () => {
                      runEachAndClear(e2), removeElements(s2);
                    },
                    () => {
                      if (a)
                        (o2 = new a((t3) => intersectionObserverCallback(t3), {
                          root: t2,
                        })),
                          o2.observe(s2),
                          push(e2, () => {
                            o2.disconnect();
                          });
                      else {
                        const onSizeChanged = () => {
                          const t4 = offsetSize(s2);
                          triggerOnTrinsicChangedCallback(t4);
                        };
                        const [t3, n3] = createSizeObserver(s2, onSizeChanged);
                        push(e2, t3), n3(), onSizeChanged();
                      }
                      appendChildren(t2, s2);
                    },
                    () => {
                      if (o2)
                        return intersectionObserverCallback(
                          o2.takeRecords(),
                          !0
                        );
                    },
                  ];
                })(r2, onTrinsicChanged)
              : [noop, noop, noop];
          const [y2, S3] = d2
            ? [noop, noop]
            : createSizeObserver(r2, onSizeChanged, { Vt: !0, Bt: !0 });
          const [x2, $2] = createDOMObserver(r2, !1, onHostMutation, {
            Pt: Ut,
            Ht: Ut.concat(Gt),
          });
          const C3 = d2 && u && new u(onSizeChanged.bind(0, { gt: !0 }));
          return (
            C3 && C3.observe(r2),
            updateViewportAttrsFromHost(),
            [
              () => {
                p2(), y2(), c2 && c2[0](), C3 && C3.disconnect(), x2();
              },
              () => {
                S3(), b3();
              },
              () => {
                const t3 = {};
                const n3 = $2();
                const o3 = m2();
                const s3 = c2 && c2[1]();
                return (
                  n3 && assignDeep(t3, onHostMutation.apply(0, push(n3, !0))),
                  o3 && assignDeep(t3, onTrinsicChanged.apply(0, push(o3, !0))),
                  s3 &&
                    assignDeep(t3, onContentMutation.apply(0, push(s3, !0))),
                  t3
                );
              },
              (t3) => {
                const [n3] = t3('update.ignoreMutation');
                const [o3, r3] = t3('update.attributes');
                const [a3, u2] = t3('update.elementEvents');
                const [f4, _3] = t3('update.debounce');
                if (
                  ((u2 || r3) &&
                    (c2 && (c2[1](), c2[0]()),
                    (c2 = createDOMObserver(l2 || i2, !0, onContentMutation, {
                      Ht: g2.concat(o3 || []),
                      Dt: a3,
                      Mt: qt,
                      kt: (t4, n4) => {
                        const { target: o4, attributeName: s3 } = t4;
                        return (
                          (!(n4 || !s3 || d2) && liesBetween(o4, qt, Ft)) ||
                          !!closest(o4, `.${J}`) ||
                          !!((t4) => isFunction(n3) && n3(t4))(t4)
                        );
                      },
                    }))),
                  _3)
                )
                  if ((w3.m(), isArray(f4))) {
                    const t4 = f4[0];
                    const n4 = f4[1];
                    (s2 = isNumber(t4) && t4), (e2 = isNumber(n4) && n4);
                  } else
                    isNumber(f4)
                      ? ((s2 = f4), (e2 = !1))
                      : ((s2 = !1), (e2 = !1));
              },
            ]
          );
        };
        const Wt = { x: 0, y: 0 };
        const createStructureSetup = (t2, n2) => {
          const o2 = createOptionCheck(n2, {});
          const [s2, e2, c2] = createEventListenerHub();
          const [r2, i2, l2] = createStructureSetupElements(t2);
          const a2 = createState(
            ((t2) => ({
              K: { t: 0, r: 0, b: 0, l: 0 },
              St: !1,
              P: {
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 0,
                paddingTop: 0,
                paddingRight: 0,
                paddingBottom: 0,
                paddingLeft: 0,
              },
              zt: Wt,
              Tt: Wt,
              Ct: { x: 'hidden', y: 'hidden' },
              Et: { x: !1, y: !1 },
              ht: !1,
              bt: directionIsRTL(t2.Z),
            }))(r2)
          );
          const [u2, d2] = a2;
          const f3 = ((t2, n2) => {
            const { W: o2, J: s2, _t: e2, ut: c2 } = t2;
            const { I: r2, A: i2, V: l2 } = getEnvironment();
            const a2 = !r2 && (i2.x || i2.y);
            const u2 = [
              createTrinsicUpdateSegment(t2, n2),
              createPaddingUpdateSegment(t2, n2),
              createOverflowUpdateSegment(t2, n2),
            ];
            return (t3, n3, r3) => {
              const i3 = prepareUpdateHints(
                assignDeep(
                  {
                    gt: !1,
                    xt: !1,
                    yt: !1,
                    vt: !1,
                    At: !1,
                    Lt: !1,
                    It: !1,
                    Ot: !1,
                    wt: !1,
                  },
                  n3
                ),
                {},
                r3
              );
              const d2 = a2 || !l2;
              const f3 = d2 && scrollLeft(s2);
              const _2 = d2 && scrollTop(s2);
              e2('', P, !0);
              let h2 = i3;
              return (
                each(u2, (n4) => {
                  h2 = prepareUpdateHints(h2, n4(h2, t3, !!r3) || {}, r3);
                }),
                scrollLeft(s2, f3),
                scrollTop(s2, _2),
                e2('', P),
                c2 || (scrollLeft(o2, 0), scrollTop(o2, 0)),
                h2
              );
            };
          })(r2, a2);
          const triggerUpdateEvent = (t3, n3, o3) => {
            const e3 =
              keys(t3).some((n4) => t3[n4]) || !isEmptyObject(n3) || o3;
            return e3 && c2('u', [t3, n3, o3]), e3;
          };
          const [_2, h2, v3, g2] = createStructureSetupObservers(r2, d2, (t3) =>
            triggerUpdateEvent(f3(o2, t3), {}, !1)
          );
          const w3 = u2.bind(0);
          return (
            (w3.jt = (t3) => s2('u', t3)),
            (w3.Nt = () => {
              const { W: t3, J: n3 } = r2;
              const o3 = scrollLeft(t3);
              const s3 = scrollTop(t3);
              h2(), i2(), scrollLeft(n3, o3), scrollTop(n3, s3);
            }),
            (w3.qt = r2),
            [
              (t3, o3) => {
                const s3 = createOptionCheck(n2, t3, o3);
                return g2(s3), triggerUpdateEvent(f3(s3, v3(), o3), t3, !!o3);
              },
              w3,
              () => {
                e2(), _2(), l2();
              },
            ]
          );
        };
        const { round: Zt } = Math;
        const createRootClickStopPropagationEvents = (t2, n2) =>
          on(
            t2,
            'mousedown',
            on.bind(0, n2, 'click', stopPropagation, { C: !0, $: !0 }),
            { $: !0 }
          );
        const Jt = 'pointerup pointerleave pointercancel lostpointercapture';
        const createInteractiveScrollEvents = (t2, n2, o2, s2, e2, c2, r2) => {
          const { B: i2 } = getEnvironment();
          const { Ft: l2, Gt: a2, Xt: u2 } = s2;
          const d2 = `scroll${r2 ? 'Left' : 'Top'}`;
          const f3 = `client${r2 ? 'X' : 'Y'}`;
          const _2 = r2 ? 'width' : 'height';
          const h2 = r2 ? 'left' : 'top';
          const v3 = r2 ? 'w' : 'h';
          const g2 = r2 ? 'x' : 'y';
          return on(a2, 'pointerdown', (s3) => {
            const c3 = closest(s3.target, `.${ot}`) === l2;
            const r3 = c3 ? l2 : a2;
            if (
              (attrClass(n2, T, H, !0),
              ((t2, n2, o2) => {
                const s2 = n2.scrollbars;
                const { button: e2, isPrimary: c2, pointerType: r2 } = t2;
                const { pointers: i2 } = s2;
                return (
                  e2 === 0 &&
                  c2 &&
                  s2[o2 ? 'dragScroll' : 'clickScroll'] &&
                  (i2 || []).includes(r2)
                );
              })(s3, t2, c3))
            ) {
              const t3 = !c3 && s3.shiftKey;
              const getHandleRect = () => getBoundingClientRect(l2);
              const getTrackRect = () => getBoundingClientRect(a2);
              const getHandleOffset = (t4, n3) =>
                (t4 || getHandleRect())[h2] - (n3 || getTrackRect())[h2];
              const i3 = ((t3, n3) => (o3) => {
                const { Tt: s3 } = c2();
                const f4 = offsetSize(a2)[v3] - offsetSize(l2)[v3];
                const h3 = ((n3 * o3) / f4) * s3[g2];
                const p2 =
                  directionIsRTL(u2) && r2 ? (i2.n || i2.i ? 1 : -1) : 1;
                e2[d2] = t3 + h3 * p2;
              })(
                e2[d2] || 0,
                1 /
                  ((t2) => {
                    const { width: n2, height: o2 } = getBoundingClientRect(t2);
                    const { w: s2, h: e2 } = offsetSize(t2);
                    return { x: Zt(n2) / s2 || 1, y: Zt(o2) / e2 || 1 };
                  })(e2)[g2]
              );
              const u3 = s3[f3];
              const v4 = getHandleRect();
              const w3 = getTrackRect();
              const p2 = v4[_2];
              const b3 = getHandleOffset(v4, w3) + p2 / 2;
              const m2 = u3 - w3[h2];
              const y2 = c3 ? 0 : m2 - b3;
              const releasePointerCapture = (t4) => {
                runEachAndClear(S3), r3.releasePointerCapture(t4.pointerId);
              };
              let S3 = [
                attrClass.bind(0, n2, T, H),
                on(o2, Jt, releasePointerCapture),
                on(o2, 'selectstart', (t4) => preventDefault(t4), { S: !1 }),
                on(a2, Jt, releasePointerCapture),
                on(a2, 'pointermove', (n3) => {
                  const o3 = n3[f3] - u3;
                  (c3 || t3) && i3(y2 + o3);
                }),
              ];
              if (t3) i3(y2);
              else if (!c3) {
                const t4 = getPlugins().__osClickScrollPlugin;
                t4 && push(S3, t4.O(i3, getHandleOffset, y2, p2, m2));
              }
              r3.setPointerCapture(s3.pointerId);
            }
          });
        };
        const { min: Kt, max: Qt, abs: tn, round: nn } = Math;
        const getScrollbarHandleLengthRatio = (t2, n2, o2, s2) => {
          if (s2) {
            const t3 = o2 ? 'x' : 'y';
            const { Tt: n3, zt: e3 } = s2;
            const c3 = e3[t3];
            const r3 = n3[t3];
            return Qt(0, Kt(1, c3 / (c3 + r3)));
          }
          const e2 = o2 ? 'width' : 'height';
          const c2 = getBoundingClientRect(t2)[e2];
          const r2 = getBoundingClientRect(n2)[e2];
          return Qt(0, Kt(1, c2 / r2));
        };
        const createScrollbarsSetupElements = (t2, n2, o2) => {
          const { N: s2, L: e2 } = getEnvironment();
          const { scrollbars: c2 } = s2();
          const { slot: r2 } = c2;
          const {
            ct: i2,
            W: l2,
            Z: a2,
            J: u2,
            lt: d2,
            ot: f3,
            it: h2,
            ut: v3,
          } = n2;
          const { scrollbars: g2 } = d2 ? {} : t2;
          const { slot: w3 } = g2 || {};
          const p2 = dynamicInitializationElement(
            [l2, a2, u2],
            () => (v3 && h2 ? l2 : a2),
            r2,
            w3
          );
          const scrollbarStructureAddRemoveClass = (t3, n3, o3) => {
            const s3 = o3 ? addClass : removeClass;
            each(t3, (t4) => {
              s3(t4.Xt, n3);
            });
          };
          const scrollbarsHandleStyle = (t3, n3) => {
            each(t3, (t4) => {
              const [o3, s3] = n3(t4);
              style(o3, s3);
            });
          };
          const scrollbarStructureRefreshHandleLength = (t3, n3, o3) => {
            scrollbarsHandleStyle(t3, (t4) => {
              const { Ft: s3, Gt: e3 } = t4;
              return [
                s3,
                {
                  [o3 ? 'width' : 'height']: `${(
                    100 * getScrollbarHandleLengthRatio(s3, e3, o3, n3)
                  ).toFixed(3)}%`,
                },
              ];
            });
          };
          const scrollbarStructureRefreshHandleOffset = (t3, n3, o3) => {
            const s3 = o3 ? 'X' : 'Y';
            scrollbarsHandleStyle(t3, (t4) => {
              const { Ft: e3, Gt: c3, Xt: r3 } = t4;
              const i3 = ((t2, n2, o2, s2, e2, c2) => {
                const { B: r2 } = getEnvironment();
                const i2 = c2 ? 'x' : 'y';
                const l2 = c2 ? 'Left' : 'Top';
                const { Tt: a2 } = s2;
                const u2 = nn(a2[i2]);
                const d2 = tn(o2[`scroll${l2}`]);
                const f3 = c2 && e2;
                const _2 = r2.i ? d2 : u2 - d2;
                const v3 = Kt(1, (f3 ? _2 : d2) / u2);
                const g2 = getScrollbarHandleLengthRatio(t2, n2, c2);
                return (1 / g2) * (1 - g2) * v3;
              })(e3, c3, f3, n3, directionIsRTL(r3), o3);
              return [
                e3,
                {
                  transform:
                    i3 == i3 ? `translate${s3}(${(100 * i3).toFixed(3)}%)` : '',
                },
              ];
            });
          };
          const b3 = [];
          const m2 = [];
          const y2 = [];
          const scrollbarsAddRemoveClass = (t3, n3, o3) => {
            const s3 = isBoolean(o3);
            const c3 = !s3 || !o3;
            (!s3 || o3) && scrollbarStructureAddRemoveClass(m2, t3, n3),
              c3 && scrollbarStructureAddRemoveClass(y2, t3, n3);
          };
          const generateScrollbarDOM = (t3) => {
            const n3 = t3 ? Q : tt;
            const s3 = t3 ? m2 : y2;
            const c3 = isEmptyArray(s3) ? ct : '';
            const r3 = createDiv(`${J} ${n3} ${c3}`);
            const l3 = createDiv(nt);
            const u3 = createDiv(ot);
            const d3 = { Xt: r3, Gt: l3, Ft: u3 };
            return (
              e2 || addClass(r3, 'os-no-css-vars'),
              appendChildren(r3, l3),
              appendChildren(l3, u3),
              push(s3, d3),
              push(b3, [
                removeElements.bind(0, r3),
                o2(d3, scrollbarsAddRemoveClass, i2, a2, f3, t3),
              ]),
              d3
            );
          };
          const S3 = generateScrollbarDOM.bind(0, !0);
          const x2 = generateScrollbarDOM.bind(0, !1);
          return (
            S3(),
            x2(),
            [
              {
                Ut: (t3) => {
                  scrollbarStructureRefreshHandleLength(m2, t3, !0),
                    scrollbarStructureRefreshHandleLength(y2, t3);
                },
                Wt: (t3) => {
                  scrollbarStructureRefreshHandleOffset(m2, t3, !0),
                    scrollbarStructureRefreshHandleOffset(y2, t3);
                },
                Zt: scrollbarsAddRemoveClass,
                Jt: { Kt: m2, Qt: S3, tn: scrollbarsHandleStyle.bind(0, m2) },
                nn: { Kt: y2, Qt: x2, tn: scrollbarsHandleStyle.bind(0, y2) },
              },
              () => {
                appendChildren(p2, m2[0].Xt),
                  appendChildren(p2, y2[0].Xt),
                  _(() => {
                    scrollbarsAddRemoveClass(ct);
                  }, 300);
              },
              runEachAndClear.bind(0, b3),
            ]
          );
        };
        const createScrollbarsSetup = (t2, n2, o2, s2) => {
          let e2;
          let c2;
          let r2;
          let i2;
          let l2;
          let a2 = 0;
          const u2 = createState({});
          const [d2] = u2;
          const [f3, _2] = selfClearTimeout();
          const [h2, v3] = selfClearTimeout();
          const [g2, w3] = selfClearTimeout(100);
          const [p2, b3] = selfClearTimeout(100);
          const [m2, y2] = selfClearTimeout(() => a2);
          const [S3, x2, $2] = createScrollbarsSetupElements(
            t2,
            o2.qt,
            ((t2, n2) => (o2, s2, e2, c2, r2, i2) => {
              const { Xt: l2 } = o2;
              const [a2, u2] = selfClearTimeout(333);
              const d2 = !!r2.scrollBy;
              let f3 = !0;
              return runEachAndClear.bind(0, [
                on(l2, 'pointerenter', () => {
                  s2(rt, !0);
                }),
                on(l2, 'pointerleave pointercancel', () => {
                  s2(rt);
                }),
                on(
                  l2,
                  'wheel',
                  (t3) => {
                    const { deltaX: n3, deltaY: o3, deltaMode: e3 } = t3;
                    d2 &&
                      f3 &&
                      e3 === 0 &&
                      parent(l2) === c2 &&
                      r2.scrollBy({ left: n3, top: o3, behavior: 'smooth' }),
                      (f3 = !1),
                      s2(at, !0),
                      a2(() => {
                        (f3 = !0), s2(at);
                      }),
                      preventDefault(t3);
                  },
                  { S: !1, $: !0 }
                ),
                createRootClickStopPropagationEvents(l2, e2),
                createInteractiveScrollEvents(t2, c2, e2, o2, r2, n2, i2),
                u2,
              ]);
            })(n2, o2)
          );
          const { Z: C3, J: O3, ot: z2, st: T2, ut: E3, it: I2 } = o2.qt;
          const { Jt: A3, nn: L2, Zt: H2, Ut: P2, Wt: D2 } = S3;
          const { tn: M2 } = A3;
          const { tn: R2 } = L2;
          const styleScrollbarPosition = (t3) => {
            const { Xt: n3 } = t3;
            const o3 = E3 && !I2 && parent(n3) === O3 && n3;
            return [
              o3,
              {
                transform: o3
                  ? `translate(${scrollLeft(z2)}px, ${scrollTop(z2)}px)`
                  : '',
              },
            ];
          };
          const manageScrollbarsAutoHide = (t3, n3) => {
            if ((y2(), t3)) H2(lt);
            else {
              const hide = () => H2(lt, !0);
              a2 > 0 && !n3 ? m2(hide) : hide();
            }
          };
          const onHostMouseEnter = () => {
            (i2 = c2), i2 && manageScrollbarsAutoHide(!0);
          };
          const k2 = [
            w3,
            y2,
            b3,
            v3,
            _2,
            $2,
            on(C3, 'pointerover', onHostMouseEnter, { C: !0 }),
            on(C3, 'pointerenter', onHostMouseEnter),
            on(C3, 'pointerleave', () => {
              (i2 = !1), c2 && manageScrollbarsAutoHide(!1);
            }),
            on(C3, 'pointermove', () => {
              e2 &&
                f3(() => {
                  w3(),
                    manageScrollbarsAutoHide(!0),
                    p2(() => {
                      e2 && manageScrollbarsAutoHide(!1);
                    });
                });
            }),
            on(T2, 'scroll', (t3) => {
              h2(() => {
                D2(o2()),
                  r2 && manageScrollbarsAutoHide(!0),
                  g2(() => {
                    r2 && !i2 && manageScrollbarsAutoHide(!1);
                  });
              }),
                s2(t3),
                E3 && M2(styleScrollbarPosition),
                E3 && R2(styleScrollbarPosition);
            }),
          ];
          const B2 = d2.bind(0);
          return (
            (B2.qt = S3),
            (B2.Nt = x2),
            [
              (t3, s3, i3) => {
                const { At: u3, Lt: d3, It: f4, yt: _3 } = i3;
                const { A: h3 } = getEnvironment();
                const v4 = createOptionCheck(n2, t3, s3);
                const g3 = o2();
                const { Tt: w4, Ct: p3, bt: b4 } = g3;
                const [m3, y3] = v4('showNativeOverlaidScrollbars');
                const [S4, x3] = v4('scrollbars.theme');
                const [$3, C4] = v4('scrollbars.visibility');
                const [O4, z3] = v4('scrollbars.autoHide');
                const [T3] = v4('scrollbars.autoHideDelay');
                const [E4, A4] = v4('scrollbars.dragScroll');
                const [L3, M3] = v4('scrollbars.clickScroll');
                const R3 = u3 || d3 || _3;
                const k3 = f4 || C4;
                const B3 = m3 && h3.x && h3.y;
                const setScrollbarVisibility = (t4, n3) => {
                  const o3 =
                    $3 === 'visible' || ($3 === 'auto' && t4 === 'scroll');
                  return H2(st, o3, n3), o3;
                };
                if (
                  ((a2 = T3),
                  y3 && H2('os-theme-none', B3),
                  x3 && (H2(l2), H2(S4, !0), (l2 = S4)),
                  z3 &&
                    ((e2 = O4 === 'move'),
                    (c2 = O4 === 'leave'),
                    (r2 = O4 !== 'never'),
                    manageScrollbarsAutoHide(!r2, !0)),
                  A4 && H2(dt, E4),
                  M3 && H2(ut, L3),
                  k3)
                ) {
                  const t4 = setScrollbarVisibility(p3.x, !0);
                  const n3 = setScrollbarVisibility(p3.y, !1);
                  H2(et, !(t4 && n3));
                }
                R3 &&
                  (P2(g3),
                  D2(g3),
                  H2(it, !w4.x, !0),
                  H2(it, !w4.y, !1),
                  H2(K, b4 && !I2));
              },
              B2,
              runEachAndClear.bind(0, k2),
            ]
          );
        };
        const invokePluginInstance = (t2, n2, o2) => {
          isFunction(t2) && t2(n2 || void 0, o2 || void 0);
        };
        const OverlayScrollbars = (t2, n2, o2) => {
          const { F: s2, N: e2, Y: c2, j: r2 } = getEnvironment();
          const i2 = getPlugins();
          const l2 = isHTMLElement(t2);
          const a2 = l2 ? t2 : t2.target;
          const u2 = getInstance(a2);
          if (n2 && !u2) {
            let u3 = !1;
            const validateOptions = (t3) => {
              const n3 = getPlugins().__osOptionsValidationPlugin;
              const o3 = n3 && n3.O;
              return o3 ? o3(t3, !0) : t3;
            };
            const d2 = assignDeep({}, s2(), validateOptions(n2));
            const [f3, _2, h2] = createEventListenerHub(o2);
            const [v3, g2, w3] = createStructureSetup(t2, d2);
            const [p2, b3, m2] = createScrollbarsSetup(t2, d2, g2, (t3) =>
              h2('scroll', [$2, t3])
            );
            const update = (t3, n3) => v3(t3, !!n3);
            const y2 = update.bind(0, {}, !0);
            const S3 = c2(y2);
            const x2 = r2(y2);
            const destroy = (t3) => {
              ((t2) => {
                Ht.delete(t2);
              })(a2),
                S3(),
                x2(),
                m2(),
                w3(),
                (u3 = !0),
                h2('destroyed', [$2, !!t3]),
                _2();
            };
            let $2 = {
              options(t3, n3) {
                if (t3) {
                  const o3 = n3 ? s2() : {};
                  const e3 = getOptionsDiff(
                    d2,
                    assignDeep(o3, validateOptions(t3))
                  );
                  isEmptyObject(e3) || (assignDeep(d2, e3), update(e3));
                }
                return assignDeep({}, d2);
              },
              on: f3,
              off: (t3, n3) => {
                t3 && n3 && _2(t3, n3);
              },
              state() {
                const {
                  zt: t3,
                  Tt: n3,
                  Ct: o3,
                  Et: s3,
                  K: e3,
                  St: c3,
                  bt: r3,
                } = g2();
                return assignDeep(
                  {},
                  {
                    overflowEdge: t3,
                    overflowAmount: n3,
                    overflowStyle: o3,
                    hasOverflow: s3,
                    padding: e3,
                    paddingAbsolute: c3,
                    directionRTL: r3,
                    destroyed: u3,
                  }
                );
              },
              elements() {
                const {
                  W: t3,
                  Z: n3,
                  K: o3,
                  J: s3,
                  tt: e3,
                  ot: c3,
                  st: r3,
                } = g2.qt;
                const { Jt: i3, nn: l3 } = b3.qt;
                const translateScrollbarStructure = (t4) => {
                  const { Ft: n4, Gt: o4, Xt: s4 } = t4;
                  return { scrollbar: s4, track: o4, handle: n4 };
                };
                const translateScrollbarsSetupElement = (t4) => {
                  const { Kt: n4, Qt: o4 } = t4;
                  const s4 = translateScrollbarStructure(n4[0]);
                  return assignDeep({}, s4, {
                    clone: () => {
                      const t5 = translateScrollbarStructure(o4());
                      return p2({}, !0, {}), t5;
                    },
                  });
                };
                return assignDeep(
                  {},
                  {
                    target: t3,
                    host: n3,
                    padding: o3 || s3,
                    viewport: s3,
                    content: e3 || s3,
                    scrollOffsetElement: c3,
                    scrollEventElement: r3,
                    scrollbarHorizontal: translateScrollbarsSetupElement(i3),
                    scrollbarVertical: translateScrollbarsSetupElement(l3),
                  }
                );
              },
              update: (t3) => update({}, t3),
              destroy: destroy.bind(0),
            };
            return (
              g2.jt((t3, n3, o3) => {
                p2(n3, o3, t3);
              }),
              ((t2, n2) => {
                Ht.set(t2, n2);
              })(a2, $2),
              each(keys(i2), (t3) => invokePluginInstance(i2[t3], 0, $2)),
              ((t2, n2, o2) => {
                const { nativeScrollbarsOverlaid: s2, body: e2 } = o2 || {};
                const { A: c2, I: r2 } = getEnvironment();
                const { nativeScrollbarsOverlaid: i2, body: l2 } = n2;
                const a2 = s2 ?? i2;
                const u2 = isUndefined(e2) ? l2 : e2;
                const d2 = (c2.x || c2.y) && a2;
                const f3 = t2 && (isNull(u2) ? !r2 : u2);
                return !!d2 || !!f3;
              })(g2.qt.it, e2().cancel, !l2 && t2.cancel)
                ? (destroy(!0), $2)
                : (g2.Nt(),
                  b3.Nt(),
                  h2('initialized', [$2]),
                  g2.jt((t3, n3, o3) => {
                    const {
                      gt: s3,
                      yt: e3,
                      vt: c3,
                      At: r3,
                      Lt: i3,
                      It: l3,
                      wt: a3,
                      Ot: u4,
                    } = t3;
                    h2('updated', [
                      $2,
                      {
                        updateHints: {
                          sizeChanged: s3,
                          directionChanged: e3,
                          heightIntrinsicChanged: c3,
                          overflowEdgeChanged: r3,
                          overflowAmountChanged: i3,
                          overflowStyleChanged: l3,
                          contentMutation: a3,
                          hostMutation: u4,
                        },
                        changedOptions: n3,
                        force: o3,
                      },
                    ]);
                  }),
                  $2.update(!0),
                  $2)
            );
          }
          return u2;
        };
        (OverlayScrollbars.plugin = (t2) => {
          each(
            ((t2) => {
              const n2 = [];
              return (
                each(isArray(t2) ? t2 : [t2], (t3) => {
                  each(keys(t3), (o3) => {
                    push(n2, (ft[o3] = t3[o3]));
                  });
                }),
                n2
              );
            })(t2),
            (t3) => invokePluginInstance(t3, OverlayScrollbars)
          );
        }),
          (OverlayScrollbars.valid = (t2) => {
            const n2 = t2 && t2.elements;
            const o2 = isFunction(n2) && n2();
            return isPlainObject(o2) && !!getInstance(o2.target);
          }),
          (OverlayScrollbars.env = () => {
            const {
              k: t2,
              A: n2,
              I: o2,
              B: s2,
              V: e2,
              L: c2,
              X: r2,
              U: i2,
              N: l2,
              q: a2,
              F: u2,
              G: d2,
            } = getEnvironment();
            return assignDeep(
              {},
              {
                scrollbarsSize: t2,
                scrollbarsOverlaid: n2,
                scrollbarsHiding: o2,
                rtlScrollBehavior: s2,
                flexboxGlue: e2,
                cssCustomProperties: c2,
                staticDefaultInitialization: r2,
                staticDefaultOptions: i2,
                getDefaultInitialization: l2,
                setDefaultInitialization: a2,
                getDefaultOptions: u2,
                setDefaultOptions: d2,
              }
            );
          });
        const O2 = () => {
          if (typeof window > 'u') {
            const n2 = () => {};
            return [n2, n2];
          }
          let l2;
          let c2;
          const t2 = window;
          const o2 = typeof t2.requestIdleCallback === 'function';
          const a2 = t2.requestAnimationFrame;
          const i2 = t2.cancelAnimationFrame;
          const r2 = o2 ? t2.requestIdleCallback : a2;
          const u2 = o2 ? t2.cancelIdleCallback : i2;
          const s2 = () => {
            u2(l2), i2(c2);
          };
          return [
            (n2, e2) => {
              s2(),
                (l2 = r2(
                  o2
                    ? () => {
                        s2(), (c2 = a2(n2));
                      }
                    : n2,
                  typeof e2 === 'object' ? e2 : { timeout: 2233 }
                ));
            },
            s2,
          ];
        };
        const A2 = (0, react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
          (l2, c2) => {
            const {
              element: t2 = 'div',
              options: o2,
              events: a2,
              defer: i2,
              children: r2,
              ...u2
            } = l2;
            const s2 = t2;
            const n2 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
            const e2 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
            const [y2, d2] = ((l2) => {
              const { options: c2, events: t2, defer: o2 } = l2 || {};
              const [a2, i2] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(
                O2,
                []
              );
              const r2 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
              const u2 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(o2);
              const s2 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(c2);
              const n2 = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(t2);
              return (
                (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
                  u2.current = o2;
                }, [o2]),
                (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
                  const { current: e2 } = r2;
                  (s2.current = c2),
                    OverlayScrollbars.valid(e2) && e2.options(c2 || {}, !0);
                }, [c2]),
                (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
                  const { current: e2 } = r2;
                  (n2.current = t2),
                    OverlayScrollbars.valid(e2) && e2.on(t2 || {}, !0);
                }, [t2]),
                (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(
                  () => () => {
                    let e2;
                    i2(), (e2 = r2.current) == null || e2.destroy();
                  },
                  []
                ),
                (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(
                  () => [
                    (e2) => {
                      const y2 = r2.current;
                      if (OverlayScrollbars.valid(y2)) return;
                      const d2 = u2.current;
                      const I2 = s2.current || {};
                      const m2 = n2.current || {};
                      const p2 = () =>
                        (r2.current = OverlayScrollbars(e2, I2, m2));
                      d2 ? a2(p2, d2) : p2();
                    },
                    () => r2.current,
                  ],
                  []
                )
              );
            })({ options: o2, events: a2, defer: i2 });
            return (
              (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
                const { current: I2 } = n2;
                const { current: m2 } = e2;
                return (
                  I2 &&
                    m2 &&
                    y2({ target: I2, elements: { viewport: m2, content: m2 } }),
                  () => {
                    let p2;
                    return (p2 = d2()) == null ? void 0 : p2.destroy();
                  }
                );
              }, [y2, t2]),
              (0, react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(
                c2,
                () => ({ osInstance: d2, getElement: () => n2.current }),
                []
              ),
              react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                s2,
                { 'data-overlayscrollbars-initialize': '', ref: n2, ...u2 },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                  'div',
                  { ref: e2 },
                  r2
                )
              )
            );
          }
        );
        var OverlayScrollbars2 = A2;
        var OverlayScrollbars_default = A2;
      },
  },
]);

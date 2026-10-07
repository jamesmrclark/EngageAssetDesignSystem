/* @ds-bundle: {"format":4,"namespace":"EngageAppiDesignSystem_32c458","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"Pill","sourcePath":"components/actions/Pill.jsx"},{"name":"Divider","sourcePath":"components/brand/Divider.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"SparkleMark","sourcePath":"components/brand/SparkleMark.jsx"},{"name":"Callout","sourcePath":"components/content/Callout.jsx"},{"name":"Card","sourcePath":"components/content/Card.jsx"},{"name":"FeatureCard","sourcePath":"components/content/FeatureCard.jsx"},{"name":"FeatureIcon","sourcePath":"components/content/FeatureIcon.jsx"},{"name":"DisplayHeading","sourcePath":"components/typography/DisplayHeading.jsx"},{"name":"Eyebrow","sourcePath":"components/typography/Eyebrow.jsx"},{"name":"Lead","sourcePath":"components/typography/Lead.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"194e997d06bd","components/actions/Pill.jsx":"57704c86fbf0","components/brand/Divider.jsx":"d03f848d5518","components/brand/Logo.jsx":"10c7441e7c21","components/brand/SparkleMark.jsx":"afe625952e24","components/content/Callout.jsx":"d33efc72c9ab","components/content/Card.jsx":"8654f73a2de5","components/content/FeatureCard.jsx":"62f2e8d70978","components/content/FeatureIcon.jsx":"7e7f82198768","components/typography/DisplayHeading.jsx":"d40aaf58e2b0","components/typography/Eyebrow.jsx":"8d697d029c36","components/typography/Lead.jsx":"64d32740aa90","ui_kits/website/AppiSection.jsx":"12f0575eee3e","ui_kits/website/Features.jsx":"cfc6ae9a5d6a","ui_kits/website/Footer.jsx":"9cd762be72b5","ui_kits/website/Header.jsx":"0dd923d2d368","ui_kits/website/Hero.jsx":"afdd262790be"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.EngageAppiDesignSystem_32c458 = window.EngageAppiDesignSystem_32c458 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Engage / Appi — Button
 * Fully-rounded pill. Primary = ink/black, secondary = light outline,
 * accent = periwinkle. Sentence case labels.
 */
function Button({
  children,
  variant = 'primary',
  // 'primary' | 'secondary' | 'accent' | 'ghost'
  size = 'md',
  // 'sm' | 'md' | 'lg'
  iconRight,
  iconLeft,
  disabled = false,
  href,
  onClick,
  type = 'button',
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      fontSize: '0.875rem',
      padding: '0.5rem 1.125rem',
      gap: '0.4rem'
    },
    md: {
      fontSize: '1rem',
      padding: '0.75rem 1.5rem',
      gap: '0.5rem'
    },
    lg: {
      fontSize: '1.0625rem',
      padding: '0.95rem 1.9rem',
      gap: '0.55rem'
    }
  };
  const variants = {
    primary: {
      background: 'var(--btn-primary-bg)',
      color: 'var(--btn-primary-fg)',
      border: '1px solid var(--btn-primary-bg)'
    },
    secondary: {
      background: 'var(--btn-secondary-bg)',
      color: 'var(--btn-secondary-fg)',
      border: '1px solid var(--btn-secondary-border)'
    },
    accent: {
      background: 'var(--btn-accent-bg)',
      color: 'var(--btn-accent-fg)',
      border: '1px solid var(--btn-accent-bg)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--ink-900)',
      border: '1px solid transparent'
    }
  };
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'var(--font-sans)',
    fontWeight: 'var(--fw-semibold)',
    lineHeight: 1,
    borderRadius: 'var(--radius-pill)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    transition: 'background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
    ...sizes[size],
    ...variants[variant],
    ...style
  };
  const hover = e => {
    if (disabled) return;
    if (variant === 'primary') e.currentTarget.style.background = 'var(--btn-primary-hover)';
    if (variant === 'secondary') {
      e.currentTarget.style.borderColor = 'var(--ink-900)';
      e.currentTarget.style.background = 'var(--ink-100)';
    }
    if (variant === 'accent') e.currentTarget.style.background = 'var(--periwinkle-500)';
    if (variant === 'ghost') e.currentTarget.style.background = 'var(--ink-100)';
  };
  const leave = e => {
    if (disabled) return;
    Object.assign(e.currentTarget.style, {
      background: variants[variant].background,
      borderColor: variants[variant].border.split(' ').pop()
    });
  };
  const down = e => {
    if (!disabled) e.currentTarget.style.transform = 'scale(0.98)';
  };
  const up = e => {
    e.currentTarget.style.transform = 'scale(1)';
  };
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: '1.1em',
      height: '1.1em'
    }
  }, iconLeft), children, iconRight && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: '1.1em',
      height: '1.1em'
    }
  }, iconRight));
  const Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: base,
    href: href,
    onClick: disabled ? undefined : onClick,
    onMouseEnter: hover,
    onMouseLeave: leave,
    onMouseDown: down,
    onMouseUp: up,
    disabled: Tag === 'button' ? disabled : undefined,
    type: Tag === 'button' ? type : undefined
  }, rest), content);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/Pill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Engage / Appi — Pill / Tag / Badge
 * Small rounded label. Use `tint` for the pastel supporting colours.
 */
function Pill({
  children,
  tint = 'neutral',
  // 'neutral' | 'periwinkle' | 'sky' | 'mint' | 'amber' | 'rose' | 'ink'
  size = 'md',
  // 'sm' | 'md'
  iconLeft,
  style = {},
  ...rest
}) {
  const tints = {
    neutral: {
      background: 'var(--ink-100)',
      color: 'var(--ink-700)'
    },
    periwinkle: {
      background: 'var(--periwinkle-100)',
      color: 'var(--periwinkle-700)'
    },
    sky: {
      background: 'var(--sky-100)',
      color: 'var(--sky-700)'
    },
    mint: {
      background: 'var(--mint-100)',
      color: 'var(--mint-700)'
    },
    amber: {
      background: 'var(--amber-100)',
      color: 'var(--amber-700)'
    },
    rose: {
      background: 'var(--rose-100)',
      color: 'var(--rose-700)'
    },
    ink: {
      background: 'var(--ink-900)',
      color: 'var(--paper-0)'
    }
  };
  const sizes = {
    sm: {
      fontSize: '0.6875rem',
      padding: '0.2rem 0.6rem',
      gap: '0.3rem'
    },
    md: {
      fontSize: '0.8125rem',
      padding: '0.32rem 0.8rem',
      gap: '0.35rem'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--fw-semibold)',
      lineHeight: 1,
      borderRadius: 'var(--radius-pill)',
      letterSpacing: '0.01em',
      ...sizes[size],
      ...tints[tint],
      ...style
    }
  }, rest), iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: '1em',
      height: '1em'
    }
  }, iconLeft), children);
}
Object.assign(__ds_scope, { Pill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Pill.jsx", error: String((e && e.message) || e) }); }

// components/brand/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Engage / Appi — Divider: a hairline rule with optional label or spacing size. */
function Divider({
  label,
  spacing = 'var(--space-6)',
  style = {},
  ...rest
}) {
  if (label) {
    return /*#__PURE__*/React.createElement("div", _extends({
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-4)',
        margin: `${spacing} 0`,
        ...style
      }
    }, rest), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: 1,
        background: 'var(--border-hairline)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-eyebrow-size)',
        fontWeight: 'var(--fw-semibold)',
        letterSpacing: 'var(--ls-eyebrow)',
        textTransform: 'uppercase',
        color: 'var(--text-muted)'
      }
    }, label), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: 1,
        background: 'var(--border-hairline)'
      }
    }));
  }
  return /*#__PURE__*/React.createElement("hr", _extends({
    style: {
      border: 0,
      borderTop: '1px solid var(--border-hairline)',
      margin: `${spacing} 0`,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Divider.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Engage / Appi — Logo
 * The real Engage wordmark + chat-bubble mark (inline, uses currentColor so it can
 * invert on dark surfaces). `mark` renders just the bubble icon.
 */
function Logo({
  height = 28,
  color = 'var(--ink-900)',
  mark = false,
  title = 'Engage',
  style = {},
  ...rest
}) {
  const markPath = /*#__PURE__*/React.createElement("path", {
    d: "M34.4023 38.8475V7.35327C34.4023 3.30788 31.1317 0 27.132 0H7.27033C3.27057 0 0 3.30788 0 7.35327V27.4342C0 31.4796 3.27057 34.7875 7.27033 34.7875H27.1248C27.2908 34.7875 27.4497 34.7802 27.6157 34.7656L32.9656 39.6726C32.9656 39.6726 34.3951 40.8118 34.3951 38.8402L34.4023 38.8475ZM9.68174 14.9767H19.1902C20.2948 14.9767 21.1901 15.8895 21.1901 16.9994V18.124C21.1901 19.2412 20.2876 20.1467 19.1902 20.1467H9.68174V14.9694V14.9767ZM25.3776 23.6225C25.3776 24.7397 24.4751 25.6452 23.3777 25.6452H11.6888C10.5842 25.6452 9.68896 24.7324 9.68896 23.6225V20.5994H23.3849C24.4895 20.5994 25.3848 21.5122 25.3848 22.6221V23.6152L25.3776 23.6225ZM25.7097 12.494C25.7097 13.6112 24.8072 14.5167 23.7098 14.5167H9.68174V11.4936C9.68174 10.3764 10.5842 9.4709 11.6816 9.4709H23.7098C24.8144 9.4709 25.7097 10.3837 25.7097 11.4936V12.494Z",
    fill: "currentColor"
  });
  if (mark) {
    return /*#__PURE__*/React.createElement("svg", _extends({
      role: "img",
      "aria-label": title,
      viewBox: "0 0 34.5 40",
      height: height,
      width: height * 0.86,
      style: {
        color,
        display: 'block',
        ...style
      }
    }, rest), markPath);
  }
  return /*#__PURE__*/React.createElement("svg", _extends({
    role: "img",
    "aria-label": title,
    viewBox: "0 0 120 40",
    height: height,
    width: height * 3,
    style: {
      color,
      display: 'block',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("path", {
    d: "M47.4554 23.8675H54.1048V26.1603H44.6469V13.8124H53.8738V16.1053H47.4554V23.8675ZM47.246 18.7705H53.123V21.0123H47.246V18.7705Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M56.3505 13.8124H58.6898L65.8951 22.7064H64.7616V13.8124H67.5557V26.1676H65.2165L58.0111 17.2736H59.1446V26.1676H56.3505V13.8124Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M76.3423 26.3722C75.3749 26.3722 74.4868 26.2189 73.671 25.9049C72.8552 25.5909 72.1547 25.1455 71.5627 24.5759C70.9706 23.999 70.5086 23.3199 70.1765 22.5459C69.8444 21.7719 69.6783 20.9175 69.6783 19.9901C69.6783 19.0628 69.8444 18.2084 70.1765 17.4344C70.5086 16.6604 70.9779 15.9813 71.5771 15.4044C72.1764 14.8275 72.8913 14.3821 73.7071 14.0754C74.5229 13.7614 75.4182 13.6081 76.3929 13.6081C77.4758 13.6081 78.4505 13.7906 79.3169 14.1557C80.1833 14.5208 80.9125 15.0466 81.5045 15.7403L79.7067 17.4344C79.2519 16.9524 78.7682 16.5946 78.2411 16.3683C77.7141 16.1419 77.1437 16.0251 76.5156 16.0251C75.9308 16.0251 75.3965 16.12 74.9128 16.3172C74.4219 16.5143 74.0031 16.7845 73.6493 17.135C73.2956 17.4855 73.0212 17.909 72.8263 18.391C72.6314 18.8729 72.5375 19.406 72.5375 19.9974C72.5375 20.5889 72.6314 21.0855 72.8263 21.5747C73.0212 22.064 73.2884 22.4802 73.6493 22.838C74.0031 23.1885 74.4219 23.466 74.9056 23.6704C75.3893 23.8676 75.9236 23.9698 76.5012 23.9698C77.0787 23.9698 77.6058 23.8749 78.1328 23.685C78.6599 23.4952 79.1797 23.1885 79.6779 22.7504L81.2807 24.8169C80.6092 25.3353 79.8295 25.7223 78.9631 25.9925C78.0895 26.2554 77.2159 26.3868 76.3495 26.3868L76.3423 26.3722ZM78.696 24.4299V19.7857H81.2807V24.795L78.696 24.4226V24.4299Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M82.2984 26.1605L87.7277 13.8053H90.5218L96.0016 26.1605H93.0343L88.5508 15.2584H89.6843L85.2008 26.1605H82.2984ZM85.0347 23.5172L85.7495 21.3484H92.0668L92.796 23.5172H85.0347Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M102.983 26.3722C102.015 26.3722 101.127 26.2189 100.312 25.9049C99.4957 25.5909 98.7954 25.1455 98.2033 24.5759C97.6113 23.999 97.1493 23.3199 96.8171 22.5459C96.485 21.7719 96.319 20.9175 96.319 19.9901C96.319 19.0628 96.485 18.2084 96.8171 17.4344C97.1493 16.6604 97.6185 15.9813 98.2178 15.4044C98.817 14.8275 99.5318 14.3821 100.348 14.0754C101.163 13.7614 102.059 13.6081 103.033 13.6081C104.116 13.6081 105.091 13.7906 105.957 14.1557C106.824 14.5208 107.553 15.0466 108.145 15.7403L106.347 17.4344C105.892 16.9524 105.409 16.5946 104.882 16.3683C104.355 16.1419 103.784 16.0251 103.156 16.0251C102.571 16.0251 102.037 16.12 101.553 16.3172C101.062 16.5143 100.644 16.7845 100.29 17.135C99.9361 17.4855 99.6618 17.909 99.4668 18.391C99.2719 18.8729 99.178 19.406 99.178 19.9974C99.178 20.5889 99.2719 21.0855 99.4668 21.5747C99.6618 22.064 99.9289 22.4802 100.29 22.838C100.644 23.1885 101.062 23.466 101.546 23.6704C102.03 23.8676 102.564 23.9698 103.142 23.9698C103.719 23.9698 104.246 23.8749 104.773 23.685C105.3 23.4952 105.82 23.1885 106.318 22.7504L107.921 24.8169C107.25 25.3353 106.47 25.7223 105.604 25.9925C104.73 26.2554 103.856 26.3868 102.99 26.3868L102.983 26.3722ZM105.336 24.4299V19.7857H107.921V24.795L105.336 24.4226V24.4299Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M113.351 23.8675H120V26.1603H110.542V13.8124H119.769V16.1053H113.351V23.8675ZM113.141 18.7705H119.018V21.0123H113.141V18.7705Z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M34.4023 38.8475V7.35327C34.4023 3.30788 31.1317 0 27.132 0H7.27033C3.27057 0 0 3.30788 0 7.35327V27.4342C0 31.4796 3.27057 34.7875 7.27033 34.7875H27.1248C27.2908 34.7875 27.4497 34.7802 27.6157 34.7656L32.9656 39.6726C32.9656 39.6726 34.3951 40.8118 34.3951 38.8402L34.4023 38.8475ZM9.68174 14.9767H19.1902C20.2948 14.9767 21.1901 15.8895 21.1901 16.9994V18.124C21.1901 19.2412 20.2876 20.1467 19.1902 20.1467H9.68174V14.9694V14.9767ZM25.3776 23.6225C25.3776 24.7397 24.4751 25.6452 23.3777 25.6452H11.6888C10.5842 25.6452 9.68896 24.7324 9.68896 23.6225V20.5994H23.3849C24.4895 20.5994 25.3848 21.5122 25.3848 22.6221V23.6152L25.3776 23.6225ZM25.7097 12.494C25.7097 13.6112 24.8072 14.5167 23.7098 14.5167H9.68174V11.4936C9.68174 10.3764 10.5842 9.4709 11.6816 9.4709H23.7098C24.8144 9.4709 25.7097 10.3837 25.7097 11.4936V12.494Z",
    fill: "currentColor"
  }));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/brand/SparkleMark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Engage / Appi — SparkleMark
 * Appi's signature rosette/sparkle mark (inline, currentColor). Periwinkle by default.
 * Use sparingly beside the Appi name and as a section marker.
 */
function SparkleMark({
  size = 20,
  color = 'var(--periwinkle-400)',
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 1053 1053",
    width: size,
    height: size,
    role: "img",
    "aria-label": "Appi",
    style: {
      color,
      display: 'inline-block',
      verticalAlign: 'middle',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("path", {
    d: "M526.5 0C583.798 0 635.188 69.4804 670.213 179.522C772.795 126.474 858.273 113.694 898.79 154.21C939.307 194.726 926.518 280.198 873.47 382.779C983.517 417.805 1053 469.201 1053 526.5C1053 583.799 983.516 635.188 873.47 670.213C926.52 772.797 939.307 858.273 898.79 898.79C858.272 939.306 772.797 926.52 670.213 873.47C635.188 983.516 583.799 1053 526.5 1053C469.201 1053 417.805 983.517 382.779 873.47C280.198 926.517 194.726 939.306 154.21 898.79C113.694 858.273 126.474 772.795 179.522 670.213C69.4804 635.188 2.50456e-06 583.798 0 526.5C-2.50458e-06 469.202 69.4791 417.805 179.522 382.779C126.476 280.2 113.695 194.727 154.21 154.21C194.726 113.694 280.199 126.476 382.779 179.522C417.805 69.4791 469.202 0 526.5 0Z",
    fill: "currentColor"
  }));
}
Object.assign(__ds_scope, { SparkleMark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/SparkleMark.jsx", error: String((e && e.message) || e) }); }

// components/content/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Engage / Appi — Card
 * White surface, hairline border, soft shadow, generous radius. Lifts on hover
 * when `interactive`. Optional pale `tint` fill for supporting/callout cards.
 */
function Card({
  children,
  tint,
  // undefined = white | 'sky' | 'mint' | 'amber' | 'rose' | 'periwinkle' | 'sunken'
  interactive = false,
  padding = 'var(--space-6)',
  radius = 'var(--radius-lg)',
  style = {},
  ...rest
}) {
  const tints = {
    sky: 'var(--sky-100)',
    mint: 'var(--mint-100)',
    amber: 'var(--amber-100)',
    rose: 'var(--rose-100)',
    periwinkle: 'var(--periwinkle-100)',
    sunken: 'var(--surface-sunken)'
  };
  const tinted = tint && tints[tint];
  const base = {
    background: tinted || 'var(--surface-card)',
    border: tinted ? '1px solid transparent' : '1px solid var(--border-hairline)',
    borderRadius: radius,
    padding,
    boxShadow: tinted ? 'none' : 'var(--shadow-sm)',
    transition: 'box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)',
    ...style
  };
  const onEnter = e => {
    if (!interactive) return;
    e.currentTarget.style.boxShadow = tinted ? 'var(--shadow-md)' : 'var(--shadow-md)';
    e.currentTarget.style.transform = 'translateY(-2px)';
  };
  const onLeave = e => {
    if (!interactive) return;
    e.currentTarget.style.boxShadow = base.boxShadow;
    e.currentTarget.style.transform = 'translateY(0)';
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: base,
    onMouseEnter: onEnter,
    onMouseLeave: onLeave
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Card.jsx", error: String((e && e.message) || e) }); }

// components/content/FeatureIcon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Engage / Appi — FeatureIcon
 * A generously-rounded pastel tile holding a saturated/ink glyph. Pass the glyph
 * (an <img> of an icon, or inline svg) as children. Matches the brand's feature-tile look.
 */
function FeatureIcon({
  children,
  tint = 'sky',
  // 'sky' | 'mint' | 'amber' | 'rose' | 'periwinkle'
  size = 56,
  radius = 'var(--radius-md)',
  style = {},
  ...rest
}) {
  const tints = {
    sky: 'var(--sky-100)',
    mint: 'var(--mint-100)',
    amber: 'var(--amber-100)',
    rose: 'var(--rose-100)',
    periwinkle: 'var(--periwinkle-100)'
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      background: tints[tint],
      borderRadius: radius,
      flex: '0 0 auto',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: size * 0.5,
      height: size * 0.5,
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, children));
}
Object.assign(__ds_scope, { FeatureIcon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/FeatureIcon.jsx", error: String((e && e.message) || e) }); }

// components/content/Callout.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Engage / Appi — Callout
 * A pale-tint horizontal callout: saturated icon tile + message. For tips, notes,
 * and Appi prompts inside documents. Restrained — lots of surrounding white space.
 */
function Callout({
  icon,
  tint = 'periwinkle',
  title,
  children,
  style = {},
  ...rest
}) {
  const fills = {
    sky: 'var(--sky-50)',
    mint: 'var(--mint-50)',
    amber: 'var(--amber-50)',
    rose: 'var(--rose-50)',
    periwinkle: 'var(--periwinkle-50)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      alignItems: 'flex-start',
      background: fills[tint],
      border: '1px solid transparent',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-5)',
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement(__ds_scope.FeatureIcon, {
    tint: tint,
    size: 44
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-h5)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-primary)',
      margin: '0 0 var(--space-1)',
      lineHeight: 'var(--lh-heading)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-secondary)'
    }
  }, children)));
}
Object.assign(__ds_scope, { Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Callout.jsx", error: String((e && e.message) || e) }); }

// components/content/FeatureCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Engage / Appi — FeatureCard
 * A feature/benefit card: pastel feature tile + sentence-case title + supporting copy.
 * Pass the glyph via `icon` (an <img> of a brand icon).
 */
function FeatureCard({
  icon,
  tint = 'sky',
  title,
  children,
  interactive = true,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Card, _extends({
    interactive: interactive,
    style: {
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement(__ds_scope.FeatureIcon, {
    tint: tint,
    style: {
      marginBottom: 'var(--space-4)'
    }
  }, icon), title && /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-h5)',
      fontWeight: 'var(--fw-semibold)',
      lineHeight: 'var(--lh-heading)',
      letterSpacing: 'var(--ls-heading)',
      color: 'var(--text-primary)',
      margin: '0 0 var(--space-2)'
    }
  }, title), children && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-secondary)',
      margin: 0
    }
  }, children));
}
Object.assign(__ds_scope, { FeatureCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/FeatureCard.jsx", error: String((e && e.message) || e) }); }

// components/typography/DisplayHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Engage / Appi — DisplayHeading
 * The signature headline device: a sans headline with the key word(s) set in a
 * high-contrast serif italic. Per the master brand the italic INHERITS the
 * headline colour (ink) — it's a type contrast. Pass accentColor for the rare
 * periwinkle/coloured emphasis.
 *
 * Usage A (split):  <DisplayHeading pre="Five " accent="outcomes" post=" a thriving community needs" />
 * Usage B (children with <em>):  <DisplayHeading>Five <em>outcomes</em></DisplayHeading>
 */
function DisplayHeading({
  children,
  pre,
  accent,
  post,
  as = 'h1',
  size = 'display',
  // 'display' | 'h1' | 'h2' | 'h3'
  accentColor,
  // optional: colour the serif italic (defaults to inherit/ink)
  style = {},
  ...rest
}) {
  const sizeMap = {
    display: 'var(--text-display)',
    h1: 'var(--text-h1)',
    h2: 'var(--text-h2)',
    h3: 'var(--text-h3)'
  };
  const Tag = as;
  const accentStyle = {
    fontFamily: 'var(--font-serif)',
    fontStyle: 'italic',
    fontWeight: 700,
    color: accentColor || 'inherit',
    letterSpacing: 0
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: sizeMap[size],
      fontWeight: 'var(--fw-semibold)',
      lineHeight: 'var(--lh-tight)',
      letterSpacing: 'var(--ls-display)',
      color: 'var(--text-primary)',
      margin: 0,
      textWrap: 'balance',
      ...style
    }
  }, rest), accent != null ? /*#__PURE__*/React.createElement(React.Fragment, null, pre, /*#__PURE__*/React.createElement("em", {
    style: accentStyle
  }, accent), post) : children);
}
Object.assign(__ds_scope, { DisplayHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/typography/DisplayHeading.jsx", error: String((e && e.message) || e) }); }

// components/typography/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Engage / Appi — Eyebrow: small uppercase letter-spaced label in muted grey. */
function Eyebrow({
  children,
  color = 'var(--text-eyebrow)',
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-block',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-eyebrow-size)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/typography/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/typography/Lead.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Engage / Appi — Lead: the intro paragraph under a headline. Larger, calmer, secondary ink. */
function Lead({
  children,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("p", _extends({
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-lead)',
      lineHeight: 'var(--lh-snug)',
      color: 'var(--text-secondary)',
      fontWeight: 'var(--fw-regular)',
      maxWidth: 'var(--container-prose)',
      margin: '0 0 1.25rem',
      textWrap: 'pretty',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Lead });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/typography/Lead.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/AppiSection.jsx
try { (() => {
// Engage / Appi website — outcome bento (matches master site screenshot 3)
const {
  SparkleMark
} = window.EngageAppiDesignSystem_32c458;
const OUT_A = '../../assets';
function OutcomeCard({
  fill,
  eyebrow,
  title,
  body,
  blob,
  blobStyle,
  tall,
  place
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: fill,
      borderRadius: 'var(--radius-2xl)',
      padding: '32px',
      minHeight: tall ? '100%' : '280px',
      display: 'flex',
      flexDirection: 'column',
      ...place
    }
  }, blob && /*#__PURE__*/React.createElement("img", {
    src: OUT_A + '/brand/' + blob,
    alt: "",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      pointerEvents: 'none',
      ...blobStyle
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: OUT_A + '/icons/handshake.svg',
    alt: "",
    style: {
      width: '30px',
      height: '30px',
      position: 'relative'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      position: 'relative',
      maxWidth: '42ch'
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '12px',
      fontWeight: 600,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: '10px'
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: '19px',
      color: 'var(--ink-900)',
      marginBottom: '8px'
    }
  }, title), body && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '15px',
      lineHeight: 1.55,
      color: 'var(--ink-700)'
    }
  }, body)));
}
function AppiSection() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'clamp(40px,6vw,88px) clamp(20px,5vw,64px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '1200px',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      marginBottom: '28px'
    }
  }, /*#__PURE__*/React.createElement(SparkleMark, {
    size: 20
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '12px',
      fontWeight: 600,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "The five outcomes")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '20px'
    }
  }, /*#__PURE__*/React.createElement(OutcomeCard, {
    fill: "var(--sky-50)",
    eyebrow: "Communications AI",
    place: {
      gridColumn: '1 / 3',
      gridRow: '1'
    },
    title: "Reach every person at the right moment.",
    body: "Personalised messages, in the right language, on the right channel, at the moment each person will actually act on them \u2014 across thousands of members at once.",
    blob: "blob-sky.svg",
    blobStyle: {
      right: '-40px',
      top: '-30px',
      width: '300px'
    }
  }), /*#__PURE__*/React.createElement(OutcomeCard, {
    fill: "var(--periwinkle-100)",
    tall: true,
    place: {
      gridColumn: '3',
      gridRow: '1 / 3'
    },
    eyebrow: "Search & Knowledge AI",
    title: "Answers, instantly.",
    body: "Ask in plain language and get a clear answer with its source.",
    blob: "blob-periwinkle.svg",
    blobStyle: {
      right: '-30px',
      top: '40px',
      width: '220px'
    }
  }), /*#__PURE__*/React.createElement(OutcomeCard, {
    fill: "var(--periwinkle-50)",
    eyebrow: "Agentic AI",
    place: {
      gridColumn: '1',
      gridRow: '2'
    },
    title: "The right next action, taken.",
    body: "Appi decides the next step and carries it out across your channels."
  }), /*#__PURE__*/React.createElement(OutcomeCard, {
    fill: "var(--amber-100)",
    eyebrow: "Analytics AI",
    place: {
      gridColumn: '2',
      gridRow: '2'
    },
    title: "Patterns leaders can act on.",
    body: "Behaviour, sentiment and participation on one calm dashboard."
  }))));
}
window.AppiSection = AppiSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/AppiSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Features.jsx
try { (() => {
// Engage / Appi website — benefit cards (matches master site screenshot 2)
const {
  DisplayHeading
} = window.EngageAppiDesignSystem_32c458;
const FEAT_A = '../../assets';

// icons ship as ink line silhouettes
function MaskIcon({
  src,
  size = 30
}) {
  return /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    style: {
      width: size,
      height: size,
      display: 'block'
    }
  });
}
function Features() {
  const items = [{
    icon: 'workflow.svg',
    title: 'Reduce manual work',
    body: 'Automate repeated communication, reminders, support questions, and journey nudges so teams spend less time chasing actions.'
  }, {
    icon: 'users.svg',
    title: 'Increase engagement at scale',
    body: 'Reach people with more relevant messages, content, and guidance based on who they are, what they need, and where they are in the journey.'
  }, {
    icon: 'gauge.svg',
    title: 'Turn community data into decisions',
    body: 'Surface patterns across behaviour, sentiment, completion, and participation so leaders can act sooner.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'clamp(40px,6vw,88px) clamp(20px,5vw,64px)',
      background: 'var(--paper-0)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '1200px',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      maxWidth: '20ch',
      margin: '0 auto clamp(40px,5vw,64px)'
    }
  }, /*#__PURE__*/React.createElement(DisplayHeading, {
    as: "h2",
    size: "h2",
    pre: "Five ",
    accent: "outcomes",
    post: " a thriving community needs an intelligence to deliver.",
    style: {
      fontWeight: 'var(--fw-medium)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '24px'
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: 'var(--surface-sunken)',
      borderRadius: 'var(--radius-xl)',
      padding: '32px'
    }
  }, /*#__PURE__*/React.createElement(MaskIcon, {
    src: FEAT_A + '/icons/' + it.icon
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '26px',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: 'var(--ls-heading)',
      color: 'var(--ink-900)',
      margin: '28px 0 14px'
    }
  }, it.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '16px',
      lineHeight: 1.6,
      color: 'var(--text-secondary)',
      margin: 0
    }
  }, it.body))))));
}
window.Features = Features;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Features.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
// Engage / Appi website — Footer
const {
  Logo,
  Button,
  DisplayHeading
} = window.EngageAppiDesignSystem_32c458;
const FOOT_A = '../../assets';
function Footer() {
  const cols = [{
    h: 'Platform',
    links: ['Comms', 'Shifts', 'Documents', 'Appi', 'Analytics']
  }, {
    h: 'Company',
    links: ['About', 'Customers', 'Careers', 'Contact']
  }, {
    h: 'Resources',
    links: ['Guides', 'Playbooks', 'Help centre', 'Status']
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--ink-900)',
      color: 'var(--paper-50)',
      padding: 'clamp(40px,6vw,80px) clamp(20px,5vw,64px) 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '1200px',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '24px',
      flexWrap: 'wrap',
      paddingBottom: 'clamp(32px,5vw,56px)',
      borderBottom: '1px solid rgba(255,255,255,0.14)'
    }
  }, /*#__PURE__*/React.createElement(DisplayHeading, {
    as: "h2",
    size: "h2",
    style: {
      color: '#fff',
      margin: 0,
      maxWidth: '16ch'
    },
    pre: "Ready when ",
    accent: "you are"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '12px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg"
  }, "Book a demo"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    style: {
      background: 'transparent',
      color: '#fff',
      border: '1px solid rgba(255,255,255,0.4)'
    }
  }, "Talk to sales"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      gap: '32px',
      padding: '48px 0'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, {
    height: 28,
    color: "#fff"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,0.6)',
      fontSize: '14px',
      marginTop: '14px',
      maxWidth: '30ch'
    }
  }, "The frontline platform. Simple enough for everyone, powerful enough for the whole organisation."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '14px',
      marginTop: '18px'
    }
  }, ['linkedin', 'x', 'facebook'].map(s => /*#__PURE__*/React.createElement("img", {
    key: s,
    src: FOOT_A + '/icons/' + s + '.svg',
    alt: s,
    style: {
      width: '20px',
      filter: 'invert(1)',
      opacity: 0.8
    }
  })))), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '12px',
      fontWeight: 600,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.5)',
      marginBottom: '14px'
    }
  }, c.h), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    }
  }, c.links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      color: 'rgba(255,255,255,0.82)',
      fontSize: '14px',
      textDecoration: 'none'
    }
  }, l)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '12px',
      fontSize: '13px',
      color: 'rgba(255,255,255,0.5)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Engage. All rights reserved."), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: '20px'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'inherit'
    }
  }, "Privacy"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'inherit'
    }
  }, "Terms"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'inherit'
    }
  }, "Security")))));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
// Engage / Appi website — Header
const {
  Button,
  Logo
} = window.EngageAppiDesignSystem_32c458;
const A = '../../assets';
function Header() {
  const nav = ['Products', 'Solutions', 'Customers', 'Pricing', 'Resources'];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px clamp(20px, 5vw, 64px)',
      background: 'rgba(250,247,241,0.82)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '40px'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    height: 30
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: '26px'
    }
  }, nav.map(n => /*#__PURE__*/React.createElement("a", {
    key: n,
    href: "#",
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '15px',
      fontWeight: 500,
      color: 'var(--ink-700)',
      textDecoration: 'none'
    }
  }, n)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    style: {
      background: 'var(--ink-100)',
      border: '1px solid transparent'
    }
  }, "Log in"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm"
  }, "Talk to us")));
}
window.Header = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
// Engage / Appi website — Hero (matches master site: Appi AI hero + 5-pillars card)
const {
  Button,
  DisplayHeading,
  Lead
} = window.EngageAppiDesignSystem_32c458;
const HERO_A = '../../assets';
function PillarTile({
  tint,
  icon,
  label
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: tint,
      borderRadius: '16px',
      padding: '14px 10px',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      alignItems: 'flex-start',
      minHeight: '92px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: HERO_A + '/icons/' + icon,
    alt: "",
    style: {
      width: '22px',
      height: '22px'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '12px',
      fontWeight: 600,
      color: 'var(--ink-800)',
      lineHeight: 1.2
    }
  }, label));
}
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'clamp(20px,3vw,32px) clamp(20px,5vw,64px) clamp(32px,5vw,64px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: '1280px',
      margin: '0 auto',
      background: 'var(--surface-accent)',
      borderRadius: 'var(--radius-3xl)',
      padding: 'clamp(40px,5vw,80px)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.05fr 0.95fr',
      gap: 'clamp(32px,5vw,64px)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(DisplayHeading, {
    size: "display",
    pre: "",
    accent: "Appi AI",
    post: ": autonomous intelligence behind every community experience",
    style: {
      fontWeight: 'var(--fw-medium)'
    }
  }), /*#__PURE__*/React.createElement(Lead, {
    style: {
      marginTop: '24px',
      color: 'var(--ink-700)'
    }
  }, "Give every colleague and customer communication, support, and next steps that feel timely and personal, without your teams chasing it all manually. Appi AI powers Engage by spotting what matters, choosing the right next action, and delivering it across the channels your audience already uses."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '12px',
      marginTop: '32px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement("img", {
      src: HERO_A + '/icons/arrow-right.svg',
      alt: "",
      style: {
        width: '100%',
        height: '100%'
      }
    })
  }, "Book a demo"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    style: {
      background: 'var(--paper-0)',
      border: '1px solid transparent'
    }
  }, "See how teams use Engage"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--paper-0)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-lg)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: 'var(--ink-900)',
      padding: '16px 20px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      color: '#fff',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: '15px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '9px',
      height: '9px',
      borderRadius: '50%',
      background: 'var(--periwinkle-400)'
    }
  }), "Engage"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '11px',
      fontWeight: 600,
      letterSpacing: '0.1em',
      color: 'rgba(255,255,255,0.6)',
      background: 'rgba(255,255,255,0.12)',
      padding: '4px 10px',
      borderRadius: '999px'
    }
  }, "ACTIVE")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '22px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '11px',
      fontWeight: 600,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: '14px'
    }
  }, "Your 5 engagement pillars"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5,1fr)',
      gap: '10px'
    }
  }, /*#__PURE__*/React.createElement(PillarTile, {
    tint: "var(--periwinkle-50)",
    icon: "chat-bubble.svg",
    label: "Communication"
  }), /*#__PURE__*/React.createElement(PillarTile, {
    tint: "var(--sky-50)",
    icon: "users.svg",
    label: "Accessibility"
  }), /*#__PURE__*/React.createElement(PillarTile, {
    tint: "var(--mint-50)",
    icon: "workflow.svg",
    label: "Enablement"
  }), /*#__PURE__*/React.createElement(PillarTile, {
    tint: "var(--amber-50)",
    icon: "heart.svg",
    label: "Feedback"
  }), /*#__PURE__*/React.createElement(PillarTile, {
    tint: "var(--rose-50)",
    icon: "gauge.svg",
    label: "Recognition"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: '18px',
      paddingTop: '16px',
      borderTop: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '13px',
      color: 'var(--text-secondary)'
    }
  }, "5 pillars \xB7 Engage platform"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '12px',
      color: 'var(--text-muted)',
      background: 'var(--ink-100)',
      padding: '4px 10px',
      borderRadius: '999px'
    }
  }, "Foundation")))))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Pill = __ds_scope.Pill;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.SparkleMark = __ds_scope.SparkleMark;

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.FeatureCard = __ds_scope.FeatureCard;

__ds_ns.FeatureIcon = __ds_scope.FeatureIcon;

__ds_ns.DisplayHeading = __ds_scope.DisplayHeading;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Lead = __ds_scope.Lead;

})();

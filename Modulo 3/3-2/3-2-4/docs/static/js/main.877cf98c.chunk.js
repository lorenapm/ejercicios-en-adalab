(this.webpackJsonptemplate = this.webpackJsonptemplate || []).push([
  [0],
  {
    13: function (t, e, c) {
      "use strict";
      c.r(e);
      var n = c(1),
        i = c.n(n),
        r = c(7),
        s = c.n(r),
        a = c(2),
        h = c(3),
        j = c(5),
        l = c(4),
        o = c(0),
        u = (function (t) {
          Object(j.a)(c, t);
          var e = Object(l.a)(c);
          function c() {
            return Object(a.a)(this, c), e.apply(this, arguments);
          }
          return (
            Object(h.a)(c, [
              {
                key: "render",
                value: function () {
                  var t,
                    e = ((t = 10), Math.floor(Math.random() * t)),
                    c = 0;
                  return (
                    (c = null == this.props.height ? 600 : this.props.height),
                    Object(o.jsx)("a", {
                      href: "https://lorempixel.com",
                      children: Object(o.jsx)("img", {
                        src: "http:s//lorempixel.com/400/200/cats/".concat(e),
                        alt: "Random cat",
                        width:
                          null === this.props.width ? 600 : this.props.width,
                        height: c,
                      }),
                    })
                  );
                },
              },
            ]),
            c
          );
        })(i.a.Component),
        b = (function (t) {
          Object(j.a)(c, t);
          var e = Object(l.a)(c);
          function c(t) {
            return Object(a.a)(this, c), e.call(this, t);
          }
          return (
            Object(h.a)(c, [
              {
                key: "render",
                value: function () {
                  return Object(o.jsxs)("section", {
                    className: "section-cats",
                    children: [
                      Object(o.jsx)("h1", {
                        children: "All Cats Are Beautiful",
                      }),
                      Object(o.jsxs)("ul", {
                        className: "section-cats_list",
                        children: [
                          Object(o.jsx)("li", {
                            children: Object(o.jsx)(u, {
                              width: 200,
                              height: 200,
                            }),
                          }),
                          Object(o.jsx)("li", {
                            children: Object(o.jsx)(u, {
                              width: 200,
                              height: 400,
                            }),
                          }),
                          Object(o.jsx)("li", {
                            children: Object(o.jsx)(u, {}),
                          }),
                        ],
                      }),
                    ],
                  });
                },
              },
            ]),
            c
          );
        })(i.a.Component),
        p = (function (t) {
          Object(j.a)(c, t);
          var e = Object(l.a)(c);
          function c() {
            return Object(a.a)(this, c), e.apply(this, arguments);
          }
          return (
            Object(h.a)(c, [
              {
                key: "render",
                value: function () {
                  return Object(o.jsx)("div", {
                    className: "App",
                    children: Object(o.jsx)(b, {}),
                  });
                },
              },
            ]),
            c
          );
        })(i.a.Component);
      s.a.render(
        Object(o.jsx)(i.a.StrictMode, { children: Object(o.jsx)(p, {}) }),
        document.getElementById("root")
      );
    },
  },
  [[13, 1, 2]],
]);
//# sourceMappingURL=main.877cf98c.chunk.js.map

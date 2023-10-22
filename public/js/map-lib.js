function angleCoords(t, e, i) {
    if (!i || !e)
        return 0;
    e = t.project(e),
    i = t.project(i);
    return Math.atan2(e.y - i.y, e.x - i.x) / Math.PI * 180 - 90
}
!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e(t.L = {})
}(this, function(t) {
    "use strict";
    function h(t) {
        for (var e, i, n = 1, o = arguments.length; n < o; n++)
            for (e in i = arguments[n])
                t[e] = i[e];
        return t
    }
    var s = Object.create || function(t) {
        return e.prototype = t,
        new e
    }
    ;
    function e() {}
    function M(t, e) {
        var i = Array.prototype.slice;
        if (t.bind)
            return t.bind.apply(t, i.call(arguments, 1));
        var n = i.call(arguments, 2);
        return function() {
            return t.apply(e, n.length ? n.concat(i.call(arguments)) : arguments)
        }
    }
    var i = 0;
    function P(t) {
        return t._leaflet_id = t._leaflet_id || ++i,
        t._leaflet_id
    }
    function n(t, e, i) {
        function n() {
            o = !1,
            s && (r.apply(i, s),
            s = !1)
        }
        var o, s, r = function() {
            o ? s = arguments : (t.apply(i, arguments),
            setTimeout(n, e),
            o = !0)
        };
        return r
    }
    function o(t, e, i) {
        var n = e[1]
          , o = e[0]
          , e = n - o;
        return t === n && i ? t : ((t - o) % e + e) % e + o
    }
    function a() {
        return !1
    }
    function r(t, e) {
        e = Math.pow(10, void 0 === e ? 6 : e);
        return Math.round(t * e) / e
    }
    function l(t) {
        return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
    }
    function u(t) {
        return l(t).split(/\s+/)
    }
    function c(t, e) {
        for (var i in Object.prototype.hasOwnProperty.call(t, "options") || (t.options = t.options ? s(t.options) : {}),
        e)
            t.options[i] = e[i];
        return t.options
    }
    function d(t, e, i) {
        var n, o = [];
        for (n in t)
            o.push(encodeURIComponent(i ? n.toUpperCase() : n) + "=" + encodeURIComponent(t[n]));
        return (e && -1 !== e.indexOf("?") ? "&" : "?") + o.join("&")
    }
    var _ = /\{ *([\w_-]+) *\}/g;
    function p(t, i) {
        return t.replace(_, function(t, e) {
            e = i[e];
            if (void 0 === e)
                throw new Error("No value provided for variable " + t);
            return e = "function" == typeof e ? e(i) : e
        })
    }
    var f = Array.isArray || function(t) {
        return "[object Array]" === Object.prototype.toString.call(t)
    }
    ;
    function m(t, e) {
        for (var i = 0; i < t.length; i++)
            if (t[i] === e)
                return i;
        return -1
    }
    var g = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
    function v(t) {
        return window["webkit" + t] || window["moz" + t] || window["ms" + t]
    }
    var y = 0;
    function w(t) {
        var e = +new Date
          , i = Math.max(0, 16 - (e - y));
        return y = e + i,
        window.setTimeout(t, i)
    }
    var b = window.requestAnimationFrame || v("RequestAnimationFrame") || w
      , x = window.cancelAnimationFrame || v("CancelAnimationFrame") || v("CancelRequestAnimationFrame") || function(t) {
        window.clearTimeout(t)
    }
    ;
    function k(t, e, i) {
        if (!i || b !== w)
            return b.call(window, M(t, e));
        t.call(e)
    }
    function T(t) {
        t && x.call(window, t)
    }
    var C = {
        extend: h,
        create: s,
        bind: M,
        lastId: i,
        stamp: P,
        throttle: n,
        wrapNum: o,
        falseFn: a,
        formatNum: r,
        trim: l,
        splitWords: u,
        setOptions: c,
        getParamString: d,
        template: p,
        isArray: f,
        indexOf: m,
        emptyImageUrl: g,
        requestFn: b,
        cancelFn: x,
        requestAnimFrame: k,
        cancelAnimFrame: T
    };
    function E() {}
    E.extend = function(t) {
        function e() {
            this.initialize && this.initialize.apply(this, arguments),
            this.callInitHooks()
        }
        var i, n = e.__super__ = this.prototype, o = s(n);
        for (i in (o.constructor = e).prototype = o,
        this)
            Object.prototype.hasOwnProperty.call(this, i) && "prototype" !== i && "__super__" !== i && (e[i] = this[i]);
        return t.statics && (h(e, t.statics),
        delete t.statics),
        t.includes && (function(t) {
            if ("undefined" != typeof L && L && L.Mixin) {
                t = f(t) ? t : [t];
                for (var e = 0; e < t.length; e++)
                    t[e] === L.Mixin.Events && console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", (new Error).stack)
            }
        }(t.includes),
        h.apply(null, [o].concat(t.includes)),
        delete t.includes),
        o.options && (t.options = h(s(o.options), t.options)),
        h(o, t),
        o._initHooks = [],
        o.callInitHooks = function() {
            if (!this._initHooksCalled) {
                n.callInitHooks && n.callInitHooks.call(this),
                this._initHooksCalled = !0;
                for (var t = 0, e = o._initHooks.length; t < e; t++)
                    o._initHooks[t].call(this)
            }
        }
        ,
        e
    }
    ,
    E.include = function(t) {
        return h(this.prototype, t),
        this
    }
    ,
    E.mergeOptions = function(t) {
        return h(this.prototype.options, t),
        this
    }
    ,
    E.addInitHook = function(t) {
        var e = Array.prototype.slice.call(arguments, 1)
          , i = "function" == typeof t ? t : function() {
            this[t].apply(this, e)
        }
        ;
        return this.prototype._initHooks = this.prototype._initHooks || [],
        this.prototype._initHooks.push(i),
        this
    }
    ;
    var S = {
        on: function(t, e, i) {
            if ("object" == typeof t)
                for (var n in t)
                    this._on(n, t[n], e);
            else
                for (var o = 0, s = (t = u(t)).length; o < s; o++)
                    this._on(t[o], e, i);
            return this
        },
        off: function(t, e, i) {
            if (t)
                if ("object" == typeof t)
                    for (var n in t)
                        this._off(n, t[n], e);
                else
                    for (var o = 0, s = (t = u(t)).length; o < s; o++)
                        this._off(t[o], e, i);
            else
                delete this._events;
            return this
        },
        _on: function(t, e, i) {
            this._events = this._events || {};
            var n = this._events[t];
            n || (this._events[t] = n = []);
            for (var t = {
                fn: e,
                ctx: i = i === this ? void 0 : i
            }, o = n, s = 0, r = o.length; s < r; s++)
                if (o[s].fn === e && o[s].ctx === i)
                    return;
            o.push(t)
        },
        _off: function(t, e, i) {
            var n, o, s;
            if (this._events && (n = this._events[t]))
                if (e) {
                    if (i === this && (i = void 0),
                    n)
                        for (o = 0,
                        s = n.length; o < s; o++) {
                            var r = n[o];
                            if (r.ctx === i && r.fn === e)
                                return r.fn = a,
                                this._firingCount && (this._events[t] = n = n.slice()),
                                void n.splice(o, 1)
                        }
                } else {
                    for (o = 0,
                    s = n.length; o < s; o++)
                        n[o].fn = a;
                    delete this._events[t]
                }
        },
        fire: function(t, e, i) {
            if (!this.listens(t, i))
                return this;
            var n = h({}, e, {
                type: t,
                target: this,
                sourceTarget: e && e.sourceTarget || this
            });
            if (this._events) {
                var o = this._events[t];
                if (o) {
                    this._firingCount = this._firingCount + 1 || 1;
                    for (var s = 0, r = o.length; s < r; s++) {
                        var a = o[s];
                        a.fn.call(a.ctx || this, n)
                    }
                    this._firingCount--
                }
            }
            return i && this._propagateEvent(n),
            this
        },
        listens: function(t, e) {
            var i = this._events && this._events[t];
            if (i && i.length)
                return !0;
            if (e)
                for (var n in this._eventParents)
                    if (this._eventParents[n].listens(t, e))
                        return !0;
            return !1
        },
        once: function(t, e, i) {
            if ("object" == typeof t) {
                for (var n in t)
                    this.once(n, t[n], e);
                return this
            }
            var o = M(function() {
                this.off(t, e, i).off(t, o, i)
            }, this);
            return this.on(t, e, i).on(t, o, i)
        },
        addEventParent: function(t) {
            return this._eventParents = this._eventParents || {},
            this._eventParents[P(t)] = t,
            this
        },
        removeEventParent: function(t) {
            return this._eventParents && delete this._eventParents[P(t)],
            this
        },
        _propagateEvent: function(t) {
            for (var e in this._eventParents)
                this._eventParents[e].fire(t.type, h({
                    layer: t.target,
                    propagatedFrom: t.target
                }, t), !0)
        }
    };
    S.addEventListener = S.on,
    S.removeEventListener = S.clearAllEventListeners = S.off,
    S.addOneTimeEventListener = S.once,
    S.fireEvent = S.fire,
    S.hasEventListeners = S.listens;
    var D = E.extend(S);
    function z(t, e, i) {
        this.x = i ? Math.round(t) : t,
        this.y = i ? Math.round(e) : e
    }
    var I = Math.trunc || function(t) {
        return 0 < t ? Math.floor(t) : Math.ceil(t)
    }
    ;
    function O(t, e, i) {
        return t instanceof z ? t : f(t) ? new z(t[0],t[1]) : null == t ? t : "object" == typeof t && "x"in t && "y"in t ? new z(t.x,t.y) : new z(t,e,i)
    }
    function A(t, e) {
        if (t)
            for (var i = e ? [t, e] : t, n = 0, o = i.length; n < o; n++)
                this.extend(i[n])
    }
    function Z(t, e) {
        return !t || t instanceof A ? t : new A(t,e)
    }
    function B(t, e) {
        if (t)
            for (var i = e ? [t, e] : t, n = 0, o = i.length; n < o; n++)
                this.extend(i[n])
    }
    function R(t, e) {
        return t instanceof B ? t : new B(t,e)
    }
    function N(t, e, i) {
        if (isNaN(t) || isNaN(e))
            throw new Error("Invalid LatLng object: (" + t + ", " + e + ")");
        this.lat = +t,
        this.lng = +e,
        void 0 !== i && (this.alt = +i)
    }
    function H(t, e, i) {
        return t instanceof N ? t : f(t) && "object" != typeof t[0] ? 3 === t.length ? new N(t[0],t[1],t[2]) : 2 === t.length ? new N(t[0],t[1]) : null : null == t ? t : "object" == typeof t && "lat"in t ? new N(t.lat,"lng"in t ? t.lng : t.lon,t.alt) : void 0 === e ? null : new N(t,e,i)
    }
    z.prototype = {
        clone: function() {
            return new z(this.x,this.y)
        },
        add: function(t) {
            return this.clone()._add(O(t))
        },
        _add: function(t) {
            return this.x += t.x,
            this.y += t.y,
            this
        },
        subtract: function(t) {
            return this.clone()._subtract(O(t))
        },
        _subtract: function(t) {
            return this.x -= t.x,
            this.y -= t.y,
            this
        },
        divideBy: function(t) {
            return this.clone()._divideBy(t)
        },
        _divideBy: function(t) {
            return this.x /= t,
            this.y /= t,
            this
        },
        multiplyBy: function(t) {
            return this.clone()._multiplyBy(t)
        },
        _multiplyBy: function(t) {
            return this.x *= t,
            this.y *= t,
            this
        },
        scaleBy: function(t) {
            return new z(this.x * t.x,this.y * t.y)
        },
        unscaleBy: function(t) {
            return new z(this.x / t.x,this.y / t.y)
        },
        round: function() {
            return this.clone()._round()
        },
        _round: function() {
            return this.x = Math.round(this.x),
            this.y = Math.round(this.y),
            this
        },
        floor: function() {
            return this.clone()._floor()
        },
        _floor: function() {
            return this.x = Math.floor(this.x),
            this.y = Math.floor(this.y),
            this
        },
        ceil: function() {
            return this.clone()._ceil()
        },
        _ceil: function() {
            return this.x = Math.ceil(this.x),
            this.y = Math.ceil(this.y),
            this
        },
        trunc: function() {
            return this.clone()._trunc()
        },
        _trunc: function() {
            return this.x = I(this.x),
            this.y = I(this.y),
            this
        },
        distanceTo: function(t) {
            var e = (t = O(t)).x - this.x
              , t = t.y - this.y;
            return Math.sqrt(e * e + t * t)
        },
        equals: function(t) {
            return (t = O(t)).x === this.x && t.y === this.y
        },
        contains: function(t) {
            return t = O(t),
            Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y)
        },
        toString: function() {
            return "Point(" + r(this.x) + ", " + r(this.y) + ")"
        }
    },
    A.prototype = {
        extend: function(t) {
            return t = O(t),
            this.min || this.max ? (this.min.x = Math.min(t.x, this.min.x),
            this.max.x = Math.max(t.x, this.max.x),
            this.min.y = Math.min(t.y, this.min.y),
            this.max.y = Math.max(t.y, this.max.y)) : (this.min = t.clone(),
            this.max = t.clone()),
            this
        },
        getCenter: function(t) {
            return new z((this.min.x + this.max.x) / 2,(this.min.y + this.max.y) / 2,t)
        },
        getBottomLeft: function() {
            return new z(this.min.x,this.max.y)
        },
        getTopRight: function() {
            return new z(this.max.x,this.min.y)
        },
        getTopLeft: function() {
            return this.min
        },
        getBottomRight: function() {
            return this.max
        },
        getSize: function() {
            return this.max.subtract(this.min)
        },
        contains: function(t) {
            var e, i;
            return (t = ("number" == typeof t[0] || t instanceof z ? O : Z)(t))instanceof A ? (e = t.min,
            i = t.max) : e = i = t,
            e.x >= this.min.x && i.x <= this.max.x && e.y >= this.min.y && i.y <= this.max.y
        },
        intersects: function(t) {
            t = Z(t);
            var e = this.min
              , i = this.max
              , n = t.min
              , o = t.max
              , t = o.x >= e.x && n.x <= i.x
              , i = o.y >= e.y && n.y <= i.y;
            return t && i
        },
        overlaps: function(t) {
            t = Z(t);
            var e = this.min
              , i = this.max
              , n = t.min
              , o = t.max
              , t = o.x > e.x && n.x < i.x
              , i = o.y > e.y && n.y < i.y;
            return t && i
        },
        isValid: function() {
            return !(!this.min || !this.max)
        }
    },
    B.prototype = {
        extend: function(t) {
            var e, i, n = this._southWest, o = this._northEast;
            if (t instanceof N)
                i = e = t;
            else {
                if (!(t instanceof B))
                    return t ? this.extend(H(t) || R(t)) : this;
                if (e = t._southWest,
                i = t._northEast,
                !e || !i)
                    return this
            }
            return n || o ? (n.lat = Math.min(e.lat, n.lat),
            n.lng = Math.min(e.lng, n.lng),
            o.lat = Math.max(i.lat, o.lat),
            o.lng = Math.max(i.lng, o.lng)) : (this._southWest = new N(e.lat,e.lng),
            this._northEast = new N(i.lat,i.lng)),
            this
        },
        pad: function(t) {
            var e = this._southWest
              , i = this._northEast
              , n = Math.abs(e.lat - i.lat) * t
              , t = Math.abs(e.lng - i.lng) * t;
            return new B(new N(e.lat - n,e.lng - t),new N(i.lat + n,i.lng + t))
        },
        getCenter: function() {
            return new N((this._southWest.lat + this._northEast.lat) / 2,(this._southWest.lng + this._northEast.lng) / 2)
        },
        getSouthWest: function() {
            return this._southWest
        },
        getNorthEast: function() {
            return this._northEast
        },
        getNorthWest: function() {
            return new N(this.getNorth(),this.getWest())
        },
        getSouthEast: function() {
            return new N(this.getSouth(),this.getEast())
        },
        getWest: function() {
            return this._southWest.lng
        },
        getSouth: function() {
            return this._southWest.lat
        },
        getEast: function() {
            return this._northEast.lng
        },
        getNorth: function() {
            return this._northEast.lat
        },
        contains: function(t) {
            t = ("number" == typeof t[0] || t instanceof N || "lat"in t ? H : R)(t);
            var e, i, n = this._southWest, o = this._northEast;
            return t instanceof B ? (e = t.getSouthWest(),
            i = t.getNorthEast()) : e = i = t,
            e.lat >= n.lat && i.lat <= o.lat && e.lng >= n.lng && i.lng <= o.lng
        },
        intersects: function(t) {
            t = R(t);
            var e = this._southWest
              , i = this._northEast
              , n = t.getSouthWest()
              , o = t.getNorthEast()
              , t = o.lat >= e.lat && n.lat <= i.lat
              , i = o.lng >= e.lng && n.lng <= i.lng;
            return t && i
        },
        overlaps: function(t) {
            t = R(t);
            var e = this._southWest
              , i = this._northEast
              , n = t.getSouthWest()
              , o = t.getNorthEast()
              , t = o.lat > e.lat && n.lat < i.lat
              , i = o.lng > e.lng && n.lng < i.lng;
            return t && i
        },
        toBBoxString: function() {
            return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",")
        },
        equals: function(t, e) {
            return !!t && (t = R(t),
            this._southWest.equals(t.getSouthWest(), e) && this._northEast.equals(t.getNorthEast(), e))
        },
        isValid: function() {
            return !(!this._southWest || !this._northEast)
        }
    };
    var G = {
        latLngToPoint: function(t, e) {
            t = this.projection.project(t),
            e = this.scale(e);
            return this.transformation._transform(t, e)
        },
        pointToLatLng: function(t, e) {
            e = this.scale(e),
            e = this.transformation.untransform(t, e);
            return this.projection.unproject(e)
        },
        project: function(t) {
            return this.projection.project(t)
        },
        unproject: function(t) {
            return this.projection.unproject(t)
        },
        scale: function(t) {
            return 256 * Math.pow(2, t)
        },
        zoom: function(t) {
            return Math.log(t / 256) / Math.LN2
        },
        getProjectedBounds: function(t) {
            if (this.infinite)
                return null;
            var e = this.projection.bounds
              , t = this.scale(t);
            return new A(this.transformation.transform(e.min, t),this.transformation.transform(e.max, t))
        },
        infinite: !(N.prototype = {
            equals: function(t, e) {
                return !!t && (t = H(t),
                Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng)) <= (void 0 === e ? 1e-9 : e))
            },
            toString: function(t) {
                return "LatLng(" + r(this.lat, t) + ", " + r(this.lng, t) + ")"
            },
            distanceTo: function(t) {
                return U.distance(this, H(t))
            },
            wrap: function() {
                return U.wrapLatLng(this)
            },
            toBounds: function(t) {
                var e = 180 * t / 40075017
                  , t = e / Math.cos(Math.PI / 180 * this.lat);
                return R([this.lat - e, this.lng - t], [this.lat + e, this.lng + t])
            },
            clone: function() {
                return new N(this.lat,this.lng,this.alt)
            }
        }),
        wrapLatLng: function(t) {
            var e = this.wrapLng ? o(t.lng, this.wrapLng, !0) : t.lng;
            return new N(this.wrapLat ? o(t.lat, this.wrapLat, !0) : t.lat,e,t.alt)
        },
        wrapLatLngBounds: function(t) {
            var e = t.getCenter()
              , i = this.wrapLatLng(e)
              , n = e.lat - i.lat
              , e = e.lng - i.lng;
            if (0 == n && 0 == e)
                return t;
            i = t.getSouthWest(),
            t = t.getNorthEast();
            return new B(new N(i.lat - n,i.lng - e),new N(t.lat - n,t.lng - e))
        }
    }
      , U = h({}, G, {
        wrapLng: [-180, 180],
        R: 6371e3,
        distance: function(t, e) {
            var i = Math.PI / 180
              , n = t.lat * i
              , o = e.lat * i
              , s = Math.sin((e.lat - t.lat) * i / 2)
              , i = Math.sin((e.lng - t.lng) * i / 2)
              , i = s * s + Math.cos(n) * Math.cos(o) * i * i
              , i = 2 * Math.atan2(Math.sqrt(i), Math.sqrt(1 - i));
            return this.R * i
        }
    })
      , j = 6378137
      , F = {
        R: j,
        MAX_LATITUDE: 85.0511287798,
        project: function(t) {
            var e = Math.PI / 180
              , i = this.MAX_LATITUDE
              , i = Math.max(Math.min(i, t.lat), -i)
              , i = Math.sin(i * e);
            return new z(this.R * t.lng * e,this.R * Math.log((1 + i) / (1 - i)) / 2)
        },
        unproject: function(t) {
            var e = 180 / Math.PI;
            return new N((2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * e,t.x * e / this.R)
        },
        bounds: new A([-(gt = j * Math.PI), -gt],[gt, gt])
    };
    function W(t, e, i, n) {
        if (f(t))
            return this._a = t[0],
            this._b = t[1],
            this._c = t[2],
            void (this._d = t[3]);
        this._a = t,
        this._b = e,
        this._c = i,
        this._d = n
    }
    function V(t, e, i, n) {
        return new W(t,e,i,n)
    }
    W.prototype = {
        transform: function(t, e) {
            return this._transform(t.clone(), e)
        },
        _transform: function(t, e) {
            return t.x = (e = e || 1) * (this._a * t.x + this._b),
            t.y = e * (this._c * t.y + this._d),
            t
        },
        untransform: function(t, e) {
            return new z((t.x / (e = e || 1) - this._b) / this._a,(t.y / e - this._d) / this._c)
        }
    };
    var q = h({}, U, {
        code: "EPSG:3857",
        projection: F,
        transformation: V(vt = .5 / (Math.PI * F.R), .5, -vt, .5)
    })
      , Y = h({}, q, {
        code: "EPSG:900913"
    });
    function K(t) {
        return document.createElementNS("http://www.w3.org/2000/svg", t)
    }
    function X(t, e) {
        for (var i, n, o, s, r = "", a = 0, h = t.length; a < h; a++) {
            for (i = 0,
            n = (o = t[a]).length; i < n; i++)
                r += (i ? "L" : "M") + (s = o[i]).x + " " + s.y;
            r += e ? Mt ? "z" : "x" : ""
        }
        return r || "M0 0"
    }
    var $ = document.documentElement.style
      , J = "ActiveXObject"in window
      , Q = J && !document.addEventListener
      , tt = "msLaunchUri"in navigator && !("documentMode"in document)
      , et = Tt("webkit")
      , it = Tt("android")
      , nt = Tt("android 2") || Tt("android 3")
      , ot = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10)
      , st = it && Tt("Google") && ot < 537 && !("AudioNode"in window)
      , rt = !!window.opera
      , at = !tt && Tt("chrome")
      , ht = Tt("gecko") && !et && !rt && !J
      , lt = !at && Tt("safari")
      , ut = Tt("phantom")
      , ct = "OTransition"in $
      , dt = 0 === navigator.platform.indexOf("Win")
      , _t = J && "transition"in $
      , pt = "WebKitCSSMatrix"in window && "m11"in new window.WebKitCSSMatrix && !nt
      , ft = "MozPerspective"in $
      , mt = !window.L_DISABLE_3D && (_t || pt || ft) && !ct && !ut
      , j = "undefined" != typeof orientation || Tt("mobile")
      , gt = j && et
      , vt = j && pt
      , ot = !window.PointerEvent && window.MSPointerEvent
      , yt = !(!window.PointerEvent && !ot)
      , Lt = !window.L_NO_TOUCH && (yt || "ontouchstart"in window || window.DocumentTouch && document instanceof window.DocumentTouch)
      , wt = j && rt
      , $ = j && ht
      , bt = 1 < (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI)
      , xt = function() {
        var t = !1;
        try {
            var e = Object.defineProperty({}, "passive", {
                get: function() {
                    t = !0
                }
            });
            window.addEventListener("testPassiveEventSupport", a, e),
            window.removeEventListener("testPassiveEventSupport", a, e)
        } catch (t) {}
        return t
    }()
      , kt = !!document.createElement("canvas").getContext
      , Mt = !(!document.createElementNS || !K("svg").createSVGRect)
      , Pt = !Mt && function() {
        try {
            var t = document.createElement("div");
            t.innerHTML = '<v:shape adj="1"/>';
            var e = t.firstChild;
            return e.style.behavior = "url(#default#VML)",
            e && "object" == typeof e.adj
        } catch (t) {
            return !1
        }
    }();
    function Tt(t) {
        return 0 <= navigator.userAgent.toLowerCase().indexOf(t)
    }
    var ut = {
        ie: J,
        ielt9: Q,
        edge: tt,
        webkit: et,
        android: it,
        android23: nt,
        androidStock: st,
        opera: rt,
        chrome: at,
        gecko: ht,
        safari: lt,
        phantom: ut,
        opera12: ct,
        win: dt,
        ie3d: _t,
        webkit3d: pt,
        gecko3d: ft,
        any3d: mt,
        mobile: j,
        mobileWebkit: gt,
        mobileWebkit3d: vt,
        msPointer: ot,
        pointer: yt,
        touch: Lt,
        mobileOpera: wt,
        mobileGecko: $,
        retina: bt,
        passiveEvents: xt,
        canvas: kt,
        svg: Mt,
        vml: Pt
    }
      , Ct = ot ? "MSPointerDown" : "pointerdown"
      , Et = ot ? "MSPointerMove" : "pointermove"
      , St = ot ? "MSPointerUp" : "pointerup"
      , Dt = ot ? "MSPointerCancel" : "pointercancel"
      , zt = {}
      , It = !1;
    function Ot(t) {
        zt[t.pointerId] = t
    }
    function At(t) {
        zt[t.pointerId] && (zt[t.pointerId] = t)
    }
    function Zt(t) {
        delete zt[t.pointerId]
    }
    function Bt(t, e) {
        for (var i in t.touches = [],
        zt)
            t.touches.push(zt[i]);
        t.changedTouches = [t],
        e(t)
    }
    var Rt, Nt, Ht, Gt, Ut, jt = ot ? "MSPointerDown" : yt ? "pointerdown" : "touchstart", Ft = ot ? "MSPointerUp" : yt ? "pointerup" : "touchend", Wt = "_leaflet_", Vt = he(["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]), qt = he(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]), Yt = "webkitTransition" === qt || "OTransition" === qt ? qt + "End" : "transitionend";
    function Kt(t) {
        return "string" == typeof t ? document.getElementById(t) : t
    }
    function Xt(t, e) {
        var i = t.style[e] || t.currentStyle && t.currentStyle[e];
        return "auto" === (i = (!i || "auto" === i) && document.defaultView ? (t = document.defaultView.getComputedStyle(t, null)) ? t[e] : null : i) ? null : i
    }
    function $t(t, e, i) {
        t = document.createElement(t);
        return t.className = e || "",
        i && i.appendChild(t),
        t
    }
    function Jt(t) {
        var e = t.parentNode;
        e && e.removeChild(t)
    }
    function Qt(t) {
        for (; t.firstChild; )
            t.removeChild(t.firstChild)
    }
    function te(t) {
        var e = t.parentNode;
        e && e.lastChild !== t && e.appendChild(t)
    }
    function ee(t) {
        var e = t.parentNode;
        e && e.firstChild !== t && e.insertBefore(t, e.firstChild)
    }
    function ie(t, e) {
        if (void 0 !== t.classList)
            return t.classList.contains(e);
        t = re(t);
        return 0 < t.length && new RegExp("(^|\\s)" + e + "(\\s|$)").test(t)
    }
    function ne(t, e) {
        var i;
        if (void 0 !== t.classList)
            for (var n = u(e), o = 0, s = n.length; o < s; o++)
                t.classList.add(n[o]);
        else
            ie(t, e) || se(t, ((i = re(t)) ? i + " " : "") + e)
    }
    function oe(t, e) {
        void 0 !== t.classList ? t.classList.remove(e) : se(t, l((" " + re(t) + " ").replace(" " + e + " ", " ")))
    }
    function se(t, e) {
        void 0 === t.className.baseVal ? t.className = e : t.className.baseVal = e
    }
    function re(t) {
        return void 0 === (t = t.correspondingElement ? t.correspondingElement : t).className.baseVal ? t.className : t.className.baseVal
    }
    function ae(t, e) {
        "opacity"in t.style ? t.style.opacity = e : "filter"in t.style && function(t, e) {
            var i = !1
              , n = "DXImageTransform.Microsoft.Alpha";
            try {
                i = t.filters.item(n)
            } catch (t) {
                if (1 === e)
                    return
            }
            e = Math.round(100 * e),
            i ? (i.Enabled = 100 !== e,
            i.Opacity = e) : t.style.filter += " progid:" + n + "(opacity=" + e + ")"
        }(t, e)
    }
    function he(t) {
        for (var e = document.documentElement.style, i = 0; i < t.length; i++)
            if (t[i]in e)
                return t[i];
        return !1
    }
    function le(t, e, i) {
        e = e || new z(0,0);
        t.style[Vt] = (_t ? "translate(" + Math.round(e.x) + "px," + Math.round(e.y) + "px)" : "translate3d(" + Math.round(e.x) + "px," + Math.round(e.y) + "px,0)") + (i ? " scale(" + i + ")" : "")
    }
    function ue(t, e) {
        t._leaflet_pos = e,
        mt ? le(t, e) : (t.style.left = e.x + "px",
        t.style.top = e.y + "px")
    }
    function ce(t) {
        return t._leaflet_pos || new z(0,0)
    }
    function de() {
        ye(window, "dragstart", Ee)
    }
    function _e() {
        we(window, "dragstart", Ee)
    }
    function pe(t) {
        for (; -1 === t.tabIndex; )
            t = t.parentNode;
        t.style && (fe(),
        Ut = (Gt = t).style.outline,
        t.style.outline = "none",
        ye(window, "keydown", fe))
    }
    function fe() {
        Gt && (Gt.style.outline = Ut,
        Ut = Gt = void 0,
        we(window, "keydown", fe))
    }
    function me(t) {
        for (; !((t = t.parentNode).offsetWidth && t.offsetHeight || t === document.body); )
            ;
        return t
    }
    function ge(t) {
        var e = t.getBoundingClientRect();
        return {
            x: e.width / t.offsetWidth || 1,
            y: e.height / t.offsetHeight || 1,
            boundingClientRect: e
        }
    }
    var ve = "onselectstart"in document ? (Ht = function() {
        ye(window, "selectstart", Ee)
    }
    ,
    function() {
        we(window, "selectstart", Ee)
    }
    ) : (Nt = he(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]),
    Ht = function() {
        var t;
        Nt && (t = document.documentElement.style,
        Rt = t[Nt],
        t[Nt] = "none")
    }
    ,
    function() {
        Nt && (document.documentElement.style[Nt] = Rt,
        Rt = void 0)
    }
    )
      , ct = {
        TRANSFORM: Vt,
        TRANSITION: qt,
        TRANSITION_END: Yt,
        get: Kt,
        getStyle: Xt,
        create: $t,
        remove: Jt,
        empty: Qt,
        toFront: te,
        toBack: ee,
        hasClass: ie,
        addClass: ne,
        removeClass: oe,
        setClass: se,
        getClass: re,
        setOpacity: ae,
        testProp: he,
        setTransform: le,
        setPosition: ue,
        getPosition: ce,
        disableTextSelection: Ht,
        enableTextSelection: ve,
        disableImageDrag: de,
        enableImageDrag: _e,
        preventOutline: pe,
        restoreOutline: fe,
        getSizedParentNode: me,
        getScale: ge
    };
    function ye(t, e, i, n) {
        if ("object" == typeof e)
            for (var o in e)
                ke(t, o, e[o], i);
        else
            for (var s = 0, r = (e = u(e)).length; s < r; s++)
                ke(t, e[s], i, n);
        return this
    }
    var Le = "_leaflet_events";
    function we(t, e, i, n) {
        if ("object" == typeof e)
            for (var o in e)
                Me(t, o, e[o], i);
        else if (e)
            for (var s = 0, r = (e = u(e)).length; s < r; s++)
                Me(t, e[s], i, n);
        else {
            for (var a in t[Le])
                Me(t, a, t[Le][a]);
            delete t[Le]
        }
        return this
    }
    function be() {
        return yt && !tt && !lt
    }
    var xe = {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        wheel: !("onwheel"in window) && "mousewheel"
    };
    function ke(e, t, i, n) {
        var o = t + P(i) + (n ? "_" + P(n) : "");
        if (e[Le] && e[Le][o])
            return this;
        var s, r, a, h, l, u, c, d, _, p, f, m, g, v, y = function(t) {
            return i.call(n || e, t || window.event)
        }, L = y;
        function w(t) {
            if (yt) {
                if (!t.isPrimary)
                    return;
                if ("mouse" === t.pointerType)
                    return
            } else if (1 < t.touches.length)
                return;
            var e = Date.now()
              , i = e - (r || e);
            a = t.touches ? t.touches[0] : t,
            h = 0 < i && i <= 250,
            r = e
        }
        function b(t) {
            if (h && !a.cancelBubble) {
                if (yt) {
                    if ("mouse" === t.pointerType)
                        return;
                    var e, i, n = {};
                    for (i in a)
                        e = a[i],
                        n[i] = e && e.bind ? e.bind(a) : e;
                    a = n
                }
                a.type = "dblclick",
                a.button = 0,
                s(a),
                r = null
            }
        }
        function x(t) {
            Bt(t, _)
        }
        function k(t) {
            t.pointerType === (t.MSPOINTER_TYPE_MOUSE || "mouse") && 0 === t.buttons || Bt(t, p)
        }
        yt && 0 === t.indexOf("touch") ? (l = e,
        c = y,
        d = o,
        "touchstart" === (u = t) ? (f = l,
        m = c,
        g = d,
        v = M(function(t) {
            t.MSPOINTER_TYPE_TOUCH && t.pointerType === t.MSPOINTER_TYPE_TOUCH && Ee(t),
            Bt(t, m)
        }),
        f["_leaflet_touchstart" + g] = v,
        f.addEventListener(Ct, v, !1),
        It || (document.addEventListener(Ct, Ot, !0),
        document.addEventListener(Et, At, !0),
        document.addEventListener(St, Zt, !0),
        document.addEventListener(Dt, Zt, !0),
        It = !0)) : "touchmove" === u ? (p = c,
        l["_leaflet_touchmove" + d] = k,
        l.addEventListener(Et, k, !1)) : "touchend" === u && (_ = c,
        (l = l)["_leaflet_touchend" + d] = x,
        l.addEventListener(St, x, !1),
        l.addEventListener(Dt, x, !1))) : Lt && "dblclick" === t && !be() ? (s = y,
        h = !1,
        (d = e)[Wt + jt + (l = o)] = w,
        d[Wt + Ft + l] = b,
        d[Wt + "dblclick" + l] = s,
        d.addEventListener(jt, w, !!xt && {
            passive: !1
        }),
        d.addEventListener(Ft, b, !!xt && {
            passive: !1
        }),
        d.addEventListener("dblclick", s, !1)) : "addEventListener"in e ? "touchstart" === t || "touchmove" === t || "wheel" === t || "mousewheel" === t ? e.addEventListener(xe[t] || t, y, !!xt && {
            passive: !1
        }) : "mouseenter" === t || "mouseleave" === t ? e.addEventListener(xe[t], y = function(t) {
            t = t || window.event,
            Be(e, t) && L(t)
        }
        , !1) : e.addEventListener(t, L, !1) : "attachEvent"in e && e.attachEvent("on" + t, y),
        e[Le] = e[Le] || {},
        e[Le][o] = y
    }
    function Me(t, e, i, n) {
        var o, s, r, a = e + P(i) + (n ? "_" + P(n) : ""), i = t[Le] && t[Le][a];
        if (!i)
            return this;
        yt && 0 === e.indexOf("touch") ? (r = (o = t)["_leaflet_" + (s = e) + a],
        "touchstart" === s ? o.removeEventListener(Ct, r, !1) : "touchmove" === s ? o.removeEventListener(Et, r, !1) : "touchend" === s && (o.removeEventListener(St, r, !1),
        o.removeEventListener(Dt, r, !1))) : Lt && "dblclick" === e && !be() ? (o = (n = t)[Wt + jt + (s = a)],
        r = n[Wt + Ft + s],
        s = n[Wt + "dblclick" + s],
        n.removeEventListener(jt, o, !!xt && {
            passive: !1
        }),
        n.removeEventListener(Ft, r, !!xt && {
            passive: !1
        }),
        n.removeEventListener("dblclick", s, !1)) : "removeEventListener"in t ? t.removeEventListener(xe[e] || e, i, !1) : "detachEvent"in t && t.detachEvent("on" + e, i),
        t[Le][a] = null
    }
    function Pe(t) {
        return t.stopPropagation ? t.stopPropagation() : t.originalEvent ? t.originalEvent._stopped = !0 : t.cancelBubble = !0,
        Ze(t),
        this
    }
    function Te(t) {
        return ke(t, "wheel", Pe),
        this
    }
    function Ce(t) {
        return ye(t, "mousedown touchstart dblclick", Pe),
        ke(t, "click", Ae),
        this
    }
    function Ee(t) {
        return t.preventDefault ? t.preventDefault() : t.returnValue = !1,
        this
    }
    function Se(t) {
        return Ee(t),
        Pe(t),
        this
    }
    function De(t, e) {
        if (!e)
            return new z(t.clientX,t.clientY);
        var i = ge(e)
          , n = i.boundingClientRect;
        return new z((t.clientX - n.left) / i.x - e.clientLeft,(t.clientY - n.top) / i.y - e.clientTop)
    }
    var ze = dt && at ? 2 * window.devicePixelRatio : ht ? window.devicePixelRatio : 1;
    function Ie(t) {
        return tt ? t.wheelDeltaY / 2 : t.deltaY && 0 === t.deltaMode ? -t.deltaY / ze : t.deltaY && 1 === t.deltaMode ? 20 * -t.deltaY : t.deltaY && 2 === t.deltaMode ? 60 * -t.deltaY : t.deltaX || t.deltaZ ? 0 : t.wheelDelta ? (t.wheelDeltaY || t.wheelDelta) / 2 : t.detail && Math.abs(t.detail) < 32765 ? 20 * -t.detail : t.detail ? t.detail / -32765 * 60 : 0
    }
    var Oe = {};
    function Ae(t) {
        Oe[t.type] = !0
    }
    function Ze(t) {
        var e = Oe[t.type];
        return Oe[t.type] = !1,
        e
    }
    function Be(t, e) {
        var i = e.relatedTarget;
        if (!i)
            return !0;
        try {
            for (; i && i !== t; )
                i = i.parentNode
        } catch (t) {
            return !1
        }
        return i !== t
    }
    var pt = {
        on: ye,
        off: we,
        stopPropagation: Pe,
        disableScrollPropagation: Te,
        disableClickPropagation: Ce,
        preventDefault: Ee,
        stop: Se,
        getMousePosition: De,
        getWheelDelta: Ie,
        fakeStop: Ae,
        skipped: Ze,
        isExternalTarget: Be,
        addListener: ye,
        removeListener: we
    }
      , Re = D.extend({
        run: function(t, e, i, n) {
            this.stop(),
            this._el = t,
            this._inProgress = !0,
            this._duration = i || .25,
            this._easeOutPower = 1 / Math.max(n || .5, .2),
            this._startPos = ce(t),
            this._offset = e.subtract(this._startPos),
            this._startTime = +new Date,
            this.fire("start"),
            this._animate()
        },
        stop: function() {
            this._inProgress && (this._step(!0),
            this._complete())
        },
        _animate: function() {
            this._animId = k(this._animate, this),
            this._step()
        },
        _step: function(t) {
            var e = new Date - this._startTime
              , i = 1e3 * this._duration;
            e < i ? this._runFrame(this._easeOut(e / i), t) : (this._runFrame(1),
            this._complete())
        },
        _runFrame: function(t, e) {
            t = this._startPos.add(this._offset.multiplyBy(t));
            e && t._round(),
            ue(this._el, t),
            this.fire("step")
        },
        _complete: function() {
            T(this._animId),
            this._inProgress = !1,
            this.fire("end")
        },
        _easeOut: function(t) {
            return 1 - Math.pow(1 - t, this._easeOutPower)
        }
    })
      , Ne = D.extend({
        options: {
            crs: q,
            center: void 0,
            zoom: void 0,
            minZoom: void 0,
            maxZoom: void 0,
            layers: [],
            maxBounds: void 0,
            renderer: void 0,
            zoomAnimation: !0,
            zoomAnimationThreshold: 4,
            fadeAnimation: !0,
            markerZoomAnimation: !0,
            transform3DLimit: 8388608,
            zoomSnap: 1,
            zoomDelta: 1,
            trackResize: !0
        },
        initialize: function(t, e) {
            e = c(this, e),
            this._handlers = [],
            this._layers = {},
            this._zoomBoundLayers = {},
            this._sizeChanged = !0,
            this._initContainer(t),
            this._initLayout(),
            this._onResize = M(this._onResize, this),
            this._initEvents(),
            e.maxBounds && this.setMaxBounds(e.maxBounds),
            void 0 !== e.zoom && (this._zoom = this._limitZoom(e.zoom)),
            e.center && void 0 !== e.zoom && this.setView(H(e.center), e.zoom, {
                reset: !0
            }),
            this.callInitHooks(),
            this._zoomAnimated = qt && mt && !wt && this.options.zoomAnimation,
            this._zoomAnimated && (this._createAnimProxy(),
            ye(this._proxy, Yt, this._catchTransitionEnd, this)),
            this._addLayers(this.options.layers)
        },
        setView: function(t, e, i) {
            return e = void 0 === e ? this._zoom : this._limitZoom(e),
            t = this._limitCenter(H(t), e, this.options.maxBounds),
            i = i || {},
            this._stop(),
            this._loaded && !i.reset && !0 !== i && (void 0 !== i.animate && (i.zoom = h({
                animate: i.animate
            }, i.zoom),
            i.pan = h({
                animate: i.animate,
                duration: i.duration
            }, i.pan)),
            this._zoom !== e ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, e, i.zoom) : this._tryAnimatedPan(t, i.pan)) ? clearTimeout(this._sizeTimer) : this._resetView(t, e),
            this
        },
        setZoom: function(t, e) {
            return this._loaded ? this.setView(this.getCenter(), t, {
                zoom: e
            }) : (this._zoom = t,
            this)
        },
        zoomIn: function(t, e) {
            return t = t || (mt ? this.options.zoomDelta : 1),
            this.setZoom(this._zoom + t, e)
        },
        zoomOut: function(t, e) {
            return t = t || (mt ? this.options.zoomDelta : 1),
            this.setZoom(this._zoom - t, e)
        },
        setZoomAround: function(t, e, i) {
            var n = this.getZoomScale(e)
              , o = this.getSize().divideBy(2)
              , n = (t instanceof z ? t : this.latLngToContainerPoint(t)).subtract(o).multiplyBy(1 - 1 / n)
              , n = this.containerPointToLatLng(o.add(n));
            return this.setView(n, e, {
                zoom: i
            })
        },
        _getBoundsCenterZoom: function(t, e) {
            e = e || {},
            t = t.getBounds ? t.getBounds() : R(t);
            var i = O(e.paddingTopLeft || e.padding || [0, 0])
              , n = O(e.paddingBottomRight || e.padding || [0, 0])
              , o = this.getBoundsZoom(t, !1, i.add(n));
            if ((o = "number" == typeof e.maxZoom ? Math.min(e.maxZoom, o) : o) === 1 / 0)
                return {
                    center: t.getCenter(),
                    zoom: o
                };
            n = n.subtract(i).divideBy(2),
            i = this.project(t.getSouthWest(), o),
            t = this.project(t.getNorthEast(), o);
            return {
                center: this.unproject(i.add(t).divideBy(2).add(n), o),
                zoom: o
            }
        },
        fitBounds: function(t, e) {
            if (!(t = R(t)).isValid())
                throw new Error("Bounds are not valid.");
            t = this._getBoundsCenterZoom(t, e);
            return this.setView(t.center, t.zoom, e)
        },
        fitWorld: function(t) {
            return this.fitBounds([[-90, -180], [90, 180]], t)
        },
        panTo: function(t, e) {
            return this.setView(t, this._zoom, {
                pan: e
            })
        },
        panBy: function(t, e) {
            return e = e || {},
            (t = O(t).round()).x || t.y ? (!0 === e.animate || this.getSize().contains(t) ? (this._panAnim || (this._panAnim = new Re,
            this._panAnim.on({
                step: this._onPanTransitionStep,
                end: this._onPanTransitionEnd
            }, this)),
            e.noMoveStart || this.fire("movestart"),
            !1 !== e.animate ? (ne(this._mapPane, "leaflet-pan-anim"),
            i = this._getMapPanePos().subtract(t).round(),
            this._panAnim.run(this._mapPane, i, e.duration || .25, e.easeLinearity)) : (this._rawPanBy(t),
            this.fire("move").fire("moveend"))) : this._resetView(this.unproject(this.project(this.getCenter()).add(t)), this.getZoom()),
            this) : this.fire("moveend");
            var i
        },
        flyTo: function(n, o, t) {
            if (!1 === (t = t || {}).animate || !mt)
                return this.setView(n, o, t);
            this._stop();
            var s = this.project(this.getCenter())
              , r = this.project(n)
              , e = this.getSize()
              , a = this._zoom;
            n = H(n),
            o = void 0 === o ? a : o;
            var h = Math.max(e.x, e.y)
              , i = h * this.getZoomScale(a, o)
              , l = r.distanceTo(s) || 1
              , u = 1.42
              , c = u * u;
            function d(t) {
                t = (i * i - h * h + (t ? -1 : 1) * c * c * l * l) / (2 * (t ? i : h) * c * l),
                t = Math.sqrt(t * t + 1) - t;
                return t < 1e-9 ? -18 : Math.log(t)
            }
            function _(t) {
                return (Math.exp(t) - Math.exp(-t)) / 2
            }
            function p(t) {
                return (Math.exp(t) + Math.exp(-t)) / 2
            }
            var f = d(0);
            var m = Date.now()
              , g = (d(1) - f) / u
              , v = t.duration ? 1e3 * t.duration : 1e3 * g * .8;
            return this._moveStart(!0, t.noMoveStart),
            function t() {
                var e = (Date.now() - m) / v
                  , i = (1 - Math.pow(1 - e, 1.5)) * g;
                e <= 1 ? (this._flyToFrame = k(t, this),
                this._move(this.unproject(s.add(r.subtract(s).multiplyBy((e = i,
                h * (p(f) * (_(e = f + u * e) / p(e)) - _(f)) / c / l))), a), this.getScaleZoom(h / (i = i,
                h * (p(f) / p(f + u * i))), a), {
                    flyTo: !0
                })) : this._move(n, o)._moveEnd(!0)
            }
            .call(this),
            this
        },
        flyToBounds: function(t, e) {
            t = this._getBoundsCenterZoom(t, e);
            return this.flyTo(t.center, t.zoom, e)
        },
        setMaxBounds: function(t) {
            return (t = R(t)).isValid() ? (this.options.maxBounds && this.off("moveend", this._panInsideMaxBounds),
            this.options.maxBounds = t,
            this._loaded && this._panInsideMaxBounds(),
            this.on("moveend", this._panInsideMaxBounds)) : (this.options.maxBounds = null,
            this.off("moveend", this._panInsideMaxBounds))
        },
        setMinZoom: function(t) {
            var e = this.options.minZoom;
            return this.options.minZoom = t,
            this._loaded && e !== t && (this.fire("zoomlevelschange"),
            this.getZoom() < this.options.minZoom) ? this.setZoom(t) : this
        },
        setMaxZoom: function(t) {
            var e = this.options.maxZoom;
            return this.options.maxZoom = t,
            this._loaded && e !== t && (this.fire("zoomlevelschange"),
            this.getZoom() > this.options.maxZoom) ? this.setZoom(t) : this
        },
        panInsideBounds: function(t, e) {
            this._enforcingBounds = !0;
            var i = this.getCenter()
              , t = this._limitCenter(i, this._zoom, R(t));
            return i.equals(t) || this.panTo(t, e),
            this._enforcingBounds = !1,
            this
        },
        panInside: function(t, e) {
            var i = O((e = e || {}).paddingTopLeft || e.padding || [0, 0])
              , n = O(e.paddingBottomRight || e.padding || [0, 0])
              , o = this.getCenter()
              , s = this.project(o)
              , r = this.project(t)
              , a = this.getPixelBounds()
              , h = a.getSize().divideBy(2)
              , o = Z([a.min.add(i), a.max.subtract(n)]);
            return o.contains(r) || (this._enforcingBounds = !0,
            t = s.subtract(r),
            a = O(r.x + t.x, r.y + t.y),
            (r.x < o.min.x || r.x > o.max.x) && (a.x = s.x - t.x,
            0 < t.x ? a.x += h.x - i.x : a.x -= h.x - n.x),
            (r.y < o.min.y || r.y > o.max.y) && (a.y = s.y - t.y,
            0 < t.y ? a.y += h.y - i.y : a.y -= h.y - n.y),
            this.panTo(this.unproject(a), e),
            this._enforcingBounds = !1),
            this
        },
        invalidateSize: function(t) {
            if (!this._loaded)
                return this;
            t = h({
                animate: !1,
                pan: !0
            }, !0 === t ? {
                animate: !0
            } : t);
            var e = this.getSize();
            this._sizeChanged = !0,
            this._lastCenter = null;
            var i = this.getSize()
              , n = e.divideBy(2).round()
              , o = i.divideBy(2).round()
              , o = n.subtract(o);
            return o.x || o.y ? (t.animate && t.pan ? this.panBy(o) : (t.pan && this._rawPanBy(o),
            this.fire("move"),
            t.debounceMoveend ? (clearTimeout(this._sizeTimer),
            this._sizeTimer = setTimeout(M(this.fire, this, "moveend"), 200)) : this.fire("moveend")),
            this.fire("resize", {
                oldSize: e,
                newSize: i
            })) : this
        },
        stop: function() {
            return this.setZoom(this._limitZoom(this._zoom)),
            this.options.zoomSnap || this.fire("viewreset"),
            this._stop()
        },
        locate: function(t) {
            if (t = this._locateOptions = h({
                timeout: 1e4,
                watch: !1
            }, t),
            !("geolocation"in navigator))
                return this._handleGeolocationError({
                    code: 0,
                    message: "Geolocation not supported."
                }),
                this;
            var e = M(this._handleGeolocationResponse, this)
              , i = M(this._handleGeolocationError, this);
            return t.watch ? this._locationWatchId = navigator.geolocation.watchPosition(e, i, t) : navigator.geolocation.getCurrentPosition(e, i, t),
            this
        },
        stopLocate: function() {
            return navigator.geolocation && navigator.geolocation.clearWatch && navigator.geolocation.clearWatch(this._locationWatchId),
            this._locateOptions && (this._locateOptions.setView = !1),
            this
        },
        _handleGeolocationError: function(t) {
            var e = t.code
              , t = t.message || (1 === e ? "permission denied" : 2 === e ? "position unavailable" : "timeout");
            this._locateOptions.setView && !this._loaded && this.fitWorld(),
            this.fire("locationerror", {
                code: e,
                message: "Geolocation error: " + t + "."
            })
        },
        _handleGeolocationResponse: function(t) {
            var e, i = new N(t.coords.latitude,t.coords.longitude), n = i.toBounds(2 * t.coords.accuracy), o = this._locateOptions;
            o.setView && (e = this.getBoundsZoom(n),
            this.setView(i, o.maxZoom ? Math.min(e, o.maxZoom) : e));
            var s, r = {
                latlng: i,
                bounds: n,
                timestamp: t.timestamp
            };
            for (s in t.coords)
                "number" == typeof t.coords[s] && (r[s] = t.coords[s]);
            this.fire("locationfound", r)
        },
        addHandler: function(t, e) {
            if (!e)
                return this;
            e = this[t] = new e(this);
            return this._handlers.push(e),
            this.options[t] && e.enable(),
            this
        },
        remove: function() {
            if (this._initEvents(!0),
            this.off("moveend", this._panInsideMaxBounds),
            this._containerId !== this._container._leaflet_id)
                throw new Error("Map container is being reused by another instance");
            try {
                delete this._container._leaflet_id,
                delete this._containerId
            } catch (t) {
                this._container._leaflet_id = void 0,
                this._containerId = void 0
            }
            for (var t in void 0 !== this._locationWatchId && this.stopLocate(),
            this._stop(),
            Jt(this._mapPane),
            this._clearControlPos && this._clearControlPos(),
            this._resizeRequest && (T(this._resizeRequest),
            this._resizeRequest = null),
            this._clearHandlers(),
            this._loaded && this.fire("unload"),
            this._layers)
                this._layers[t].remove();
            for (t in this._panes)
                Jt(this._panes[t]);
            return this._layers = [],
            this._panes = [],
            delete this._mapPane,
            delete this._renderer,
            this
        },
        createPane: function(t, e) {
            e = $t("div", "leaflet-pane" + (t ? " leaflet-" + t.replace("Pane", "") + "-pane" : ""), e || this._mapPane);
            return t && (this._panes[t] = e),
            e
        },
        getCenter: function() {
            return this._checkIfLoaded(),
            this._lastCenter && !this._moved() ? this._lastCenter : this.layerPointToLatLng(this._getCenterLayerPoint())
        },
        getZoom: function() {
            return this._zoom
        },
        getBounds: function() {
            var t = this.getPixelBounds();
            return new B(this.unproject(t.getBottomLeft()),this.unproject(t.getTopRight()))
        },
        getMinZoom: function() {
            return void 0 === this.options.minZoom ? this._layersMinZoom || 0 : this.options.minZoom
        },
        getMaxZoom: function() {
            return void 0 === this.options.maxZoom ? void 0 === this._layersMaxZoom ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom
        },
        getBoundsZoom: function(t, e, i) {
            t = R(t),
            i = O(i || [0, 0]);
            var n = this.getZoom() || 0
              , o = this.getMinZoom()
              , s = this.getMaxZoom()
              , r = t.getNorthWest()
              , a = t.getSouthEast()
              , t = this.getSize().subtract(i)
              , i = Z(this.project(a, n), this.project(r, n)).getSize()
              , a = mt ? this.options.zoomSnap : 1
              , r = t.x / i.x
              , i = t.y / i.y
              , i = e ? Math.max(r, i) : Math.min(r, i)
              , n = this.getScaleZoom(i, n);
            return a && (n = Math.round(n / (a / 100)) * (a / 100),
            n = e ? Math.ceil(n / a) * a : Math.floor(n / a) * a),
            Math.max(o, Math.min(s, n))
        },
        getSize: function() {
            return this._size && !this._sizeChanged || (this._size = new z(this._container.clientWidth || 0,this._container.clientHeight || 0),
            this._sizeChanged = !1),
            this._size.clone()
        },
        getPixelBounds: function(t, e) {
            e = this._getTopLeftPoint(t, e);
            return new A(e,e.add(this.getSize()))
        },
        getPixelOrigin: function() {
            return this._checkIfLoaded(),
            this._pixelOrigin
        },
        getPixelWorldBounds: function(t) {
            return this.options.crs.getProjectedBounds(void 0 === t ? this.getZoom() : t)
        },
        getPane: function(t) {
            return "string" == typeof t ? this._panes[t] : t
        },
        getPanes: function() {
            return this._panes
        },
        getContainer: function() {
            return this._container
        },
        getZoomScale: function(t, e) {
            var i = this.options.crs;
            return e = void 0 === e ? this._zoom : e,
            i.scale(t) / i.scale(e)
        },
        getScaleZoom: function(t, e) {
            var i = this.options.crs;
            e = void 0 === e ? this._zoom : e;
            e = i.zoom(t * i.scale(e));
            return isNaN(e) ? 1 / 0 : e
        },
        project: function(t, e) {
            return e = void 0 === e ? this._zoom : e,
            this.options.crs.latLngToPoint(H(t), e)
        },
        unproject: function(t, e) {
            return e = void 0 === e ? this._zoom : e,
            this.options.crs.pointToLatLng(O(t), e)
        },
        layerPointToLatLng: function(t) {
            t = O(t).add(this.getPixelOrigin());
            return this.unproject(t)
        },
        latLngToLayerPoint: function(t) {
            return this.project(H(t))._round()._subtract(this.getPixelOrigin())
        },
        wrapLatLng: function(t) {
            return this.options.crs.wrapLatLng(H(t))
        },
        wrapLatLngBounds: function(t) {
            return this.options.crs.wrapLatLngBounds(R(t))
        },
        distance: function(t, e) {
            return this.options.crs.distance(H(t), H(e))
        },
        containerPointToLayerPoint: function(t) {
            return O(t).subtract(this._getMapPanePos())
        },
        layerPointToContainerPoint: function(t) {
            return O(t).add(this._getMapPanePos())
        },
        containerPointToLatLng: function(t) {
            t = this.containerPointToLayerPoint(O(t));
            return this.layerPointToLatLng(t)
        },
        latLngToContainerPoint: function(t) {
            return this.layerPointToContainerPoint(this.latLngToLayerPoint(H(t)))
        },
        mouseEventToContainerPoint: function(t) {
            return De(t, this._container)
        },
        mouseEventToLayerPoint: function(t) {
            return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))
        },
        mouseEventToLatLng: function(t) {
            return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))
        },
        _initContainer: function(t) {
            t = this._container = Kt(t);
            if (!t)
                throw new Error("Map container not found.");
            if (t._leaflet_id)
                throw new Error("Map container is already initialized.");
            ye(t, "scroll", this._onScroll, this),
            this._containerId = P(t)
        },
        _initLayout: function() {
            var t = this._container;
            this._fadeAnimated = this.options.fadeAnimation && mt,
            ne(t, "leaflet-container" + (Lt ? " leaflet-touch" : "") + (bt ? " leaflet-retina" : "") + (Q ? " leaflet-oldie" : "") + (lt ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : ""));
            var e = Xt(t, "position");
            "absolute" !== e && "relative" !== e && "fixed" !== e && (t.style.position = "relative"),
            this._initPanes(),
            this._initControlPos && this._initControlPos()
        },
        _initPanes: function() {
            var t = this._panes = {};
            this._paneRenderers = {},
            this._mapPane = this.createPane("mapPane", this._container),
            ue(this._mapPane, new z(0,0)),
            this.createPane("tilePane"),
            this.createPane("shadowPane"),
            this.createPane("overlayPane"),
            this.createPane("markerPane"),
            this.createPane("tooltipPane"),
            this.createPane("popupPane"),
            this.options.markerZoomAnimation || (ne(t.markerPane, "leaflet-zoom-hide"),
            ne(t.shadowPane, "leaflet-zoom-hide"))
        },
        _resetView: function(t, e) {
            ue(this._mapPane, new z(0,0));
            var i = !this._loaded;
            this._loaded = !0,
            e = this._limitZoom(e),
            this.fire("viewprereset");
            var n = this._zoom !== e;
            this._moveStart(n, !1)._move(t, e)._moveEnd(n),
            this.fire("viewreset"),
            i && this.fire("load")
        },
        _moveStart: function(t, e) {
            return t && this.fire("zoomstart"),
            e || this.fire("movestart"),
            this
        },
        _move: function(t, e, i) {
            void 0 === e && (e = this._zoom);
            var n = this._zoom !== e;
            return this._zoom = e,
            this._lastCenter = t,
            this._pixelOrigin = this._getNewPixelOrigin(t),
            (n || i && i.pinch) && this.fire("zoom", i),
            this.fire("move", i)
        },
        _moveEnd: function(t) {
            return t && this.fire("zoomend"),
            this.fire("moveend")
        },
        _stop: function() {
            return T(this._flyToFrame),
            this._panAnim && this._panAnim.stop(),
            this
        },
        _rawPanBy: function(t) {
            ue(this._mapPane, this._getMapPanePos().subtract(t))
        },
        _getZoomSpan: function() {
            return this.getMaxZoom() - this.getMinZoom()
        },
        _panInsideMaxBounds: function() {
            this._enforcingBounds || this.panInsideBounds(this.options.maxBounds)
        },
        _checkIfLoaded: function() {
            if (!this._loaded)
                throw new Error("Set map center and zoom first.")
        },
        _initEvents: function(t) {
            this._targets = {};
            var e = t ? we : ye;
            e((this._targets[P(this._container)] = this)._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup", this._handleDOMEvent, this),
            this.options.trackResize && e(window, "resize", this._onResize, this),
            mt && this.options.transform3DLimit && (t ? this.off : this.on).call(this, "moveend", this._onMoveEnd)
        },
        _onResize: function() {
            T(this._resizeRequest),
            this._resizeRequest = k(function() {
                this.invalidateSize({
                    debounceMoveend: !0
                })
            }, this)
        },
        _onScroll: function() {
            this._container.scrollTop = 0,
            this._container.scrollLeft = 0
        },
        _onMoveEnd: function() {
            var t = this._getMapPanePos();
            Math.max(Math.abs(t.x), Math.abs(t.y)) >= this.options.transform3DLimit && this._resetView(this.getCenter(), this.getZoom())
        },
        _findEventTargets: function(t, e) {
            for (var i, n = [], o = "mouseout" === e || "mouseover" === e, s = t.target || t.srcElement, r = !1; s; ) {
                if ((i = this._targets[P(s)]) && ("click" === e || "preclick" === e) && !t._simulated && this._draggableMoved(i)) {
                    r = !0;
                    break
                }
                if (i && i.listens(e, !0)) {
                    if (o && !Be(s, t))
                        break;
                    if (n.push(i),
                    o)
                        break
                }
                if (s === this._container)
                    break;
                s = s.parentNode
            }
            return n = !(n.length || r || o) && Be(s, t) ? [this] : n
        },
        _handleDOMEvent: function(t) {
            var e;
            this._loaded && !Ze(t) && ("mousedown" !== (e = t.type) && "keypress" !== e && "keyup" !== e && "keydown" !== e || pe(t.target || t.srcElement),
            this._fireDOMEvent(t, e))
        },
        _mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"],
        _fireDOMEvent: function(t, e, i) {
            if ("click" === t.type && ((o = h({}, t)).type = "preclick",
            this._fireDOMEvent(o, o.type, i)),
            !t._stopped && (i = (i || []).concat(this._findEventTargets(t, e))).length) {
                var n = i[0];
                "contextmenu" === e && n.listens(e, !0) && Ee(t);
                var o, s = {
                    originalEvent: t
                };
                "keypress" !== t.type && "keydown" !== t.type && "keyup" !== t.type && (o = n.getLatLng && (!n._radius || n._radius <= 10),
                s.containerPoint = o ? this.latLngToContainerPoint(n.getLatLng()) : this.mouseEventToContainerPoint(t),
                s.layerPoint = this.containerPointToLayerPoint(s.containerPoint),
                s.latlng = o ? n.getLatLng() : this.layerPointToLatLng(s.layerPoint));
                for (var r = 0; r < i.length; r++)
                    if (i[r].fire(e, s, !0),
                    s.originalEvent._stopped || !1 === i[r].options.bubblingMouseEvents && -1 !== m(this._mouseEvents, e))
                        return
            }
        },
        _draggableMoved: function(t) {
            return (t = t.dragging && t.dragging.enabled() ? t : this).dragging && t.dragging.moved() || this.boxZoom && this.boxZoom.moved()
        },
        _clearHandlers: function() {
            for (var t = 0, e = this._handlers.length; t < e; t++)
                this._handlers[t].disable()
        },
        whenReady: function(t, e) {
            return this._loaded ? t.call(e || this, {
                target: this
            }) : this.on("load", t, e),
            this
        },
        _getMapPanePos: function() {
            return ce(this._mapPane) || new z(0,0)
        },
        _moved: function() {
            var t = this._getMapPanePos();
            return t && !t.equals([0, 0])
        },
        _getTopLeftPoint: function(t, e) {
            return (t && void 0 !== e ? this._getNewPixelOrigin(t, e) : this.getPixelOrigin()).subtract(this._getMapPanePos())
        },
        _getNewPixelOrigin: function(t, e) {
            var i = this.getSize()._divideBy(2);
            return this.project(t, e)._subtract(i)._add(this._getMapPanePos())._round()
        },
        _latLngToNewLayerPoint: function(t, e, i) {
            i = this._getNewPixelOrigin(i, e);
            return this.project(t, e)._subtract(i)
        },
        _latLngBoundsToNewLayerBounds: function(t, e, i) {
            i = this._getNewPixelOrigin(i, e);
            return Z([this.project(t.getSouthWest(), e)._subtract(i), this.project(t.getNorthWest(), e)._subtract(i), this.project(t.getSouthEast(), e)._subtract(i), this.project(t.getNorthEast(), e)._subtract(i)])
        },
        _getCenterLayerPoint: function() {
            return this.containerPointToLayerPoint(this.getSize()._divideBy(2))
        },
        _getCenterOffset: function(t) {
            return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())
        },
        _limitCenter: function(t, e, i) {
            if (!i)
                return t;
            var n = this.project(t, e)
              , o = this.getSize().divideBy(2)
              , o = new A(n.subtract(o),n.add(o))
              , i = this._getBoundsOffset(o, i, e);
            return i.round().equals([0, 0]) ? t : this.unproject(n.add(i), e)
        },
        _limitOffset: function(t, e) {
            if (!e)
                return t;
            var i = this.getPixelBounds()
              , i = new A(i.min.add(t),i.max.add(t));
            return t.add(this._getBoundsOffset(i, e))
        },
        _getBoundsOffset: function(t, e, i) {
            e = Z(this.project(e.getNorthEast(), i), this.project(e.getSouthWest(), i)),
            i = e.min.subtract(t.min),
            t = e.max.subtract(t.max);
            return new z(this._rebound(i.x, -t.x),this._rebound(i.y, -t.y))
        },
        _rebound: function(t, e) {
            return 0 < t + e ? Math.round(t - e) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(e))
        },
        _limitZoom: function(t) {
            var e = this.getMinZoom()
              , i = this.getMaxZoom()
              , n = mt ? this.options.zoomSnap : 1;
            return n && (t = Math.round(t / n) * n),
            Math.max(e, Math.min(i, t))
        },
        _onPanTransitionStep: function() {
            this.fire("move")
        },
        _onPanTransitionEnd: function() {
            oe(this._mapPane, "leaflet-pan-anim"),
            this.fire("moveend")
        },
        _tryAnimatedPan: function(t, e) {
            t = this._getCenterOffset(t)._trunc();
            return !(!0 !== (e && e.animate) && !this.getSize().contains(t) || (this.panBy(t, e),
            0))
        },
        _createAnimProxy: function() {
            var t = this._proxy = $t("div", "leaflet-proxy leaflet-zoom-animated");
            this._panes.mapPane.appendChild(t),
            this.on("zoomanim", function(t) {
                var e = Vt
                  , i = this._proxy.style[e];
                le(this._proxy, this.project(t.center, t.zoom), this.getZoomScale(t.zoom, 1)),
                i === this._proxy.style[e] && this._animatingZoom && this._onZoomTransitionEnd()
            }, this),
            this.on("load moveend", this._animMoveEnd, this),
            this._on("unload", this._destroyAnimProxy, this)
        },
        _destroyAnimProxy: function() {
            Jt(this._proxy),
            this.off("load moveend", this._animMoveEnd, this),
            delete this._proxy
        },
        _animMoveEnd: function() {
            var t = this.getCenter()
              , e = this.getZoom();
            le(this._proxy, this.project(t, e), this.getZoomScale(e, 1))
        },
        _catchTransitionEnd: function(t) {
            this._animatingZoom && 0 <= t.propertyName.indexOf("transform") && this._onZoomTransitionEnd()
        },
        _nothingToAnimate: function() {
            return !this._container.getElementsByClassName("leaflet-zoom-animated").length
        },
        _tryAnimatedZoom: function(t, e, i) {
            if (this._animatingZoom)
                return !0;
            if (i = i || {},
            !this._zoomAnimated || !1 === i.animate || this._nothingToAnimate() || Math.abs(e - this._zoom) > this.options.zoomAnimationThreshold)
                return !1;
            var n = this.getZoomScale(e)
              , n = this._getCenterOffset(t)._divideBy(1 - 1 / n);
            return !(!0 !== i.animate && !this.getSize().contains(n) || (k(function() {
                this._moveStart(!0, !1)._animateZoom(t, e, !0)
            }, this),
            0))
        },
        _animateZoom: function(t, e, i, n) {
            this._mapPane && (i && (this._animatingZoom = !0,
            this._animateToCenter = t,
            this._animateToZoom = e,
            ne(this._mapPane, "leaflet-zoom-anim")),
            this.fire("zoomanim", {
                center: t,
                zoom: e,
                noUpdate: n
            }),
            setTimeout(M(this._onZoomTransitionEnd, this), 250))
        },
        _onZoomTransitionEnd: function() {
            this._animatingZoom && (this._mapPane && oe(this._mapPane, "leaflet-zoom-anim"),
            this._animatingZoom = !1,
            this._move(this._animateToCenter, this._animateToZoom),
            k(function() {
                this._moveEnd(!0)
            }, this))
        }
    });
    function He(t) {
        return new Ge(t)
    }
    var Ge = E.extend({
        options: {
            position: "topright"
        },
        initialize: function(t) {
            c(this, t)
        },
        getPosition: function() {
            return this.options.position
        },
        setPosition: function(t) {
            var e = this._map;
            return e && e.removeControl(this),
            this.options.position = t,
            e && e.addControl(this),
            this
        },
        getContainer: function() {
            return this._container
        },
        addTo: function(t) {
            this.remove(),
            this._map = t;
            var e = this._container = this.onAdd(t)
              , i = this.getPosition()
              , t = t._controlCorners[i];
            return ne(e, "leaflet-control"),
            -1 !== i.indexOf("bottom") ? t.insertBefore(e, t.firstChild) : t.appendChild(e),
            this._map.on("unload", this.remove, this),
            this
        },
        remove: function() {
            return this._map && (Jt(this._container),
            this.onRemove && this.onRemove(this._map),
            this._map.off("unload", this.remove, this),
            this._map = null),
            this
        },
        _refocusOnMap: function(t) {
            this._map && t && 0 < t.screenX && 0 < t.screenY && this._map.getContainer().focus()
        }
    });
    Ne.include({
        addControl: function(t) {
            return t.addTo(this),
            this
        },
        removeControl: function(t) {
            return t.remove(),
            this
        },
        _initControlPos: function() {
            var i = this._controlCorners = {}
              , n = "leaflet-"
              , o = this._controlContainer = $t("div", n + "control-container", this._container);
            function t(t, e) {
                i[t + e] = $t("div", n + t + " " + n + e, o)
            }
            t("top", "left"),
            t("top", "right"),
            t("bottom", "left"),
            t("bottom", "right")
        },
        _clearControlPos: function() {
            for (var t in this._controlCorners)
                Jt(this._controlCorners[t]);
            Jt(this._controlContainer),
            delete this._controlCorners,
            delete this._controlContainer
        }
    });
    var Ue = Ge.extend({
        options: {
            collapsed: !0,
            position: "topright",
            autoZIndex: !0,
            hideSingleBase: !1,
            sortLayers: !1,
            sortFunction: function(t, e, i, n) {
                return i < n ? -1 : n < i ? 1 : 0
            }
        },
        initialize: function(t, e, i) {
            for (var n in c(this, i),
            this._layerControlInputs = [],
            this._layers = [],
            this._lastZIndex = 0,
            this._handlingClick = !1,
            t)
                this._addLayer(t[n], n);
            for (n in e)
                this._addLayer(e[n], n, !0)
        },
        onAdd: function(t) {
            this._initLayout(),
            this._update(),
            (this._map = t).on("zoomend", this._checkDisabledLayers, this);
            for (var e = 0; e < this._layers.length; e++)
                this._layers[e].layer.on("add remove", this._onLayerChange, this);
            return this._container
        },
        addTo: function(t) {
            return Ge.prototype.addTo.call(this, t),
            this._expandIfNotCollapsed()
        },
        onRemove: function() {
            this._map.off("zoomend", this._checkDisabledLayers, this);
            for (var t = 0; t < this._layers.length; t++)
                this._layers[t].layer.off("add remove", this._onLayerChange, this)
        },
        addBaseLayer: function(t, e) {
            return this._addLayer(t, e),
            this._map ? this._update() : this
        },
        addOverlay: function(t, e) {
            return this._addLayer(t, e, !0),
            this._map ? this._update() : this
        },
        removeLayer: function(t) {
            t.off("add remove", this._onLayerChange, this);
            t = this._getLayer(P(t));
            return t && this._layers.splice(this._layers.indexOf(t), 1),
            this._map ? this._update() : this
        },
        expand: function() {
            ne(this._container, "leaflet-control-layers-expanded"),
            this._section.style.height = null;
            var t = this._map.getSize().y - (this._container.offsetTop + 50);
            return t < this._section.clientHeight ? (ne(this._section, "leaflet-control-layers-scrollbar"),
            this._section.style.height = t + "px") : oe(this._section, "leaflet-control-layers-scrollbar"),
            this._checkDisabledLayers(),
            this
        },
        collapse: function() {
            return oe(this._container, "leaflet-control-layers-expanded"),
            this
        },
        _initLayout: function() {
            var t = "leaflet-control-layers"
              , e = this._container = $t("div", t)
              , i = this.options.collapsed;
            e.setAttribute("aria-haspopup", !0),
            Ce(e),
            Te(e);
            var n = this._section = $t("section", t + "-list");
            i && (this._map.on("click", this.collapse, this),
            it || ye(e, {
                mouseenter: this.expand,
                mouseleave: this.collapse
            }, this));
            var o = this._layersLink = $t("a", t + "-toggle", e);
            o.href = "#",
            o.title = "Layers",
            Lt ? (ye(o, "click", Se),
            ye(o, "click", this.expand, this)) : ye(o, "focus", this.expand, this),
            i || this.expand(),
            this._baseLayersList = $t("div", t + "-base", n),
            this._separator = $t("div", t + "-separator", n),
            this._overlaysList = $t("div", t + "-overlays", n),
            e.appendChild(n)
        },
        _getLayer: function(t) {
            for (var e = 0; e < this._layers.length; e++)
                if (this._layers[e] && P(this._layers[e].layer) === t)
                    return this._layers[e]
        },
        _addLayer: function(t, e, i) {
            this._map && t.on("add remove", this._onLayerChange, this),
            this._layers.push({
                layer: t,
                name: e,
                overlay: i
            }),
            this.options.sortLayers && this._layers.sort(M(function(t, e) {
                return this.options.sortFunction(t.layer, e.layer, t.name, e.name)
            }, this)),
            this.options.autoZIndex && t.setZIndex && (this._lastZIndex++,
            t.setZIndex(this._lastZIndex)),
            this._expandIfNotCollapsed()
        },
        _update: function() {
            if (!this._container)
                return this;
            Qt(this._baseLayersList),
            Qt(this._overlaysList),
            this._layerControlInputs = [];
            for (var t, e, i, n = 0, o = 0; o < this._layers.length; o++)
                i = this._layers[o],
                this._addItem(i),
                e = e || i.overlay,
                t = t || !i.overlay,
                n += i.overlay ? 0 : 1;
            return this.options.hideSingleBase && (this._baseLayersList.style.display = (t = t && 1 < n) ? "" : "none"),
            this._separator.style.display = e && t ? "" : "none",
            this
        },
        _onLayerChange: function(t) {
            this._handlingClick || this._update();
            var e = this._getLayer(P(t.target))
              , t = e.overlay ? "add" === t.type ? "overlayadd" : "overlayremove" : "add" === t.type ? "baselayerchange" : null;
            t && this._map.fire(t, e)
        },
        _createRadioElement: function(t, e) {
            t = '<input type="radio" class="leaflet-control-layers-selector" name="' + t + '"' + (e ? ' checked="checked"' : "") + "/>",
            e = document.createElement("div");
            return e.innerHTML = t,
            e.firstChild
        },
        _addItem: function(t) {
            var e, i = document.createElement("label"), n = this._map.hasLayer(t.layer);
            t.overlay ? ((e = document.createElement("input")).type = "checkbox",
            e.className = "leaflet-control-layers-selector",
            e.defaultChecked = n) : e = this._createRadioElement("leaflet-base-layers_" + P(this), n),
            this._layerControlInputs.push(e),
            e.layerId = P(t.layer),
            ye(e, "click", this._onInputClick, this);
            var o = document.createElement("span");
            o.innerHTML = " " + t.name;
            n = document.createElement("div");
            return i.appendChild(n),
            n.appendChild(e),
            n.appendChild(o),
            (t.overlay ? this._overlaysList : this._baseLayersList).appendChild(i),
            this._checkDisabledLayers(),
            i
        },
        _onInputClick: function() {
            var t, e, i = this._layerControlInputs, n = [], o = [];
            this._handlingClick = !0;
            for (var s = i.length - 1; 0 <= s; s--)
                t = i[s],
                e = this._getLayer(t.layerId).layer,
                t.checked ? n.push(e) : t.checked || o.push(e);
            for (s = 0; s < o.length; s++)
                this._map.hasLayer(o[s]) && this._map.removeLayer(o[s]);
            for (s = 0; s < n.length; s++)
                this._map.hasLayer(n[s]) || this._map.addLayer(n[s]);
            this._handlingClick = !1,
            this._refocusOnMap()
        },
        _checkDisabledLayers: function() {
            for (var t, e, i = this._layerControlInputs, n = this._map.getZoom(), o = i.length - 1; 0 <= o; o--)
                t = i[o],
                e = this._getLayer(t.layerId).layer,
                t.disabled = void 0 !== e.options.minZoom && n < e.options.minZoom || void 0 !== e.options.maxZoom && n > e.options.maxZoom
        },
        _expandIfNotCollapsed: function() {
            return this._map && !this.options.collapsed && this.expand(),
            this
        },
        _expand: function() {
            return this.expand()
        },
        _collapse: function() {
            return this.collapse()
        }
    })
      , je = Ge.extend({
        options: {
            position: "topleft",
            zoomInText: "+",
            zoomInTitle: "Zoom in",
            zoomOutText: "&#x2212;",
            zoomOutTitle: "Zoom out"
        },
        onAdd: function(t) {
            var e = "leaflet-control-zoom"
              , i = $t("div", e + " leaflet-bar")
              , n = this.options;
            return this._zoomInButton = this._createButton(n.zoomInText, n.zoomInTitle, e + "-in", i, this._zoomIn),
            this._zoomOutButton = this._createButton(n.zoomOutText, n.zoomOutTitle, e + "-out", i, this._zoomOut),
            this._updateDisabled(),
            t.on("zoomend zoomlevelschange", this._updateDisabled, this),
            i
        },
        onRemove: function(t) {
            t.off("zoomend zoomlevelschange", this._updateDisabled, this)
        },
        disable: function() {
            return this._disabled = !0,
            this._updateDisabled(),
            this
        },
        enable: function() {
            return this._disabled = !1,
            this._updateDisabled(),
            this
        },
        _zoomIn: function(t) {
            !this._disabled && this._map._zoom < this._map.getMaxZoom() && this._map.zoomIn(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1))
        },
        _zoomOut: function(t) {
            !this._disabled && this._map._zoom > this._map.getMinZoom() && this._map.zoomOut(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1))
        },
        _createButton: function(t, e, i, n, o) {
            n = $t("a", i, n);
            return n.innerHTML = t,
            n.href = "#",
            n.title = e,
            n.setAttribute("role", "button"),
            n.setAttribute("aria-label", e),
            Ce(n),
            ye(n, "click", Se),
            ye(n, "click", o, this),
            ye(n, "click", this._refocusOnMap, this),
            n
        },
        _updateDisabled: function() {
            var t = this._map
              , e = "leaflet-disabled";
            oe(this._zoomInButton, e),
            oe(this._zoomOutButton, e),
            !this._disabled && t._zoom !== t.getMinZoom() || ne(this._zoomOutButton, e),
            !this._disabled && t._zoom !== t.getMaxZoom() || ne(this._zoomInButton, e)
        }
    });
    Ne.mergeOptions({
        zoomControl: !0
    }),
    Ne.addInitHook(function() {
        this.options.zoomControl && (this.zoomControl = new je,
        this.addControl(this.zoomControl))
    });
    var Fe = Ge.extend({
        options: {
            position: "bottomleft",
            maxWidth: 100,
            metric: !0,
            imperial: !0
        },
        onAdd: function(t) {
            var e = "leaflet-control-scale"
              , i = $t("div", e)
              , n = this.options;
            return this._addScales(n, e + "-line", i),
            t.on(n.updateWhenIdle ? "moveend" : "move", this._update, this),
            t.whenReady(this._update, this),
            i
        },
        onRemove: function(t) {
            t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this)
        },
        _addScales: function(t, e, i) {
            t.metric && (this._mScale = $t("div", e, i)),
            t.imperial && (this._iScale = $t("div", e, i))
        },
        _update: function() {
            var t = this._map
              , e = t.getSize().y / 2
              , e = t.distance(t.containerPointToLatLng([0, e]), t.containerPointToLatLng([this.options.maxWidth, e]));
            this._updateScales(e)
        },
        _updateScales: function(t) {
            this.options.metric && t && this._updateMetric(t),
            this.options.imperial && t && this._updateImperial(t)
        },
        _updateMetric: function(t) {
            var e = this._getRoundNum(t);
            this._updateScale(this._mScale, e < 1e3 ? e + " m" : e / 1e3 + " km", e / t)
        },
        _updateImperial: function(t) {
            var e, i = 3.2808399 * t;
            5280 < i ? (t = this._getRoundNum(e = i / 5280),
            this._updateScale(this._iScale, t + " mi", t / e)) : (e = this._getRoundNum(i),
            this._updateScale(this._iScale, e + " ft", e / i))
        },
        _updateScale: function(t, e, i) {
            t.style.width = Math.round(this.options.maxWidth * i) + "px",
            t.innerHTML = e
        },
        _getRoundNum: function(t) {
            var e = Math.pow(10, (Math.floor(t) + "").length - 1)
              , t = t / e;
            return e * (10 <= t ? 10 : 5 <= t ? 5 : 3 <= t ? 3 : 2 <= t ? 2 : 1)
        }
    })
      , We = Ge.extend({
        options: {
            position: "bottomright",
            prefix: '<a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'
        },
        initialize: function(t) {
            c(this, t),
            this._attributions = {}
        },
        onAdd: function(t) {
            for (var e in (t.attributionControl = this)._container = $t("div", "leaflet-control-attribution"),
            Ce(this._container),
            t._layers)
                t._layers[e].getAttribution && this.addAttribution(t._layers[e].getAttribution());
            return this._update(),
            this._container
        },
        setPrefix: function(t) {
            return this.options.prefix = t,
            this._update(),
            this
        },
        addAttribution: function(t) {
            return t && (this._attributions[t] || (this._attributions[t] = 0),
            this._attributions[t]++,
            this._update()),
            this
        },
        removeAttribution: function(t) {
            return t && this._attributions[t] && (this._attributions[t]--,
            this._update()),
            this
        },
        _update: function() {
            if (this._map) {
                var t, e = [];
                for (t in this._attributions)
                    this._attributions[t] && e.push(t);
                var i = [];
                this.options.prefix && i.push(this.options.prefix),
                e.length && i.push(e.join(", ")),
                this._container.innerHTML = i.join(" | ")
            }
        }
    });
    Ne.mergeOptions({
        attributionControl: !0
    }),
    Ne.addInitHook(function() {
        this.options.attributionControl && (new We).addTo(this)
    }),
    Ge.Layers = Ue,
    Ge.Zoom = je,
    Ge.Scale = Fe,
    Ge.Attribution = We,
    He.layers = function(t, e, i) {
        return new Ue(t,e,i)
    }
    ,
    He.zoom = function(t) {
        return new je(t)
    }
    ,
    He.scale = function(t) {
        return new Fe(t)
    }
    ,
    He.attribution = function(t) {
        return new We(t)
    }
    ;
    ft = E.extend({
        initialize: function(t) {
            this._map = t
        },
        enable: function() {
            return this._enabled || (this._enabled = !0,
            this.addHooks()),
            this
        },
        disable: function() {
            return this._enabled && (this._enabled = !1,
            this.removeHooks()),
            this
        },
        enabled: function() {
            return !!this._enabled
        }
    });
    ft.addTo = function(t, e) {
        return t.addHandler(e, this),
        this
    }
    ;
    var Ve, gt = {
        Events: S
    }, qe = Lt ? "touchstart mousedown" : "mousedown", Ye = {
        mousedown: "mouseup",
        touchstart: "touchend",
        pointerdown: "touchend",
        MSPointerDown: "touchend"
    }, Ke = {
        mousedown: "mousemove",
        touchstart: "touchmove",
        pointerdown: "touchmove",
        MSPointerDown: "touchmove"
    }, Xe = D.extend({
        options: {
            clickTolerance: 3
        },
        initialize: function(t, e, i, n) {
            c(this, n),
            this._element = t,
            this._dragStartTarget = e || t,
            this._preventOutline = i
        },
        enable: function() {
            this._enabled || (ye(this._dragStartTarget, qe, this._onDown, this),
            this._enabled = !0)
        },
        disable: function() {
            this._enabled && (Xe._dragging === this && this.finishDrag(),
            we(this._dragStartTarget, qe, this._onDown, this),
            this._enabled = !1,
            this._moved = !1)
        },
        _onDown: function(t) {
            var e, i;
            !t._simulated && this._enabled && (this._moved = !1,
            ie(this._element, "leaflet-zoom-anim") || Xe._dragging || t.shiftKey || 1 !== t.which && 1 !== t.button && !t.touches || ((Xe._dragging = this)._preventOutline && pe(this._element),
            de(),
            Ht(),
            this._moving || (this.fire("down"),
            e = t.touches ? t.touches[0] : t,
            i = me(this._element),
            this._startPoint = new z(e.clientX,e.clientY),
            this._parentScale = ge(i),
            ye(document, Ke[t.type], this._onMove, this),
            ye(document, Ye[t.type], this._onUp, this))))
        },
        _onMove: function(t) {
            var e;
            !t._simulated && this._enabled && (t.touches && 1 < t.touches.length ? this._moved = !0 : ((e = new z((e = t.touches && 1 === t.touches.length ? t.touches[0] : t).clientX,e.clientY)._subtract(this._startPoint)).x || e.y) && (Math.abs(e.x) + Math.abs(e.y) < this.options.clickTolerance || (e.x /= this._parentScale.x,
            e.y /= this._parentScale.y,
            Ee(t),
            this._moved || (this.fire("dragstart"),
            this._moved = !0,
            this._startPos = ce(this._element).subtract(e),
            ne(document.body, "leaflet-dragging"),
            this._lastTarget = t.target || t.srcElement,
            window.SVGElementInstance && this._lastTarget instanceof window.SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement),
            ne(this._lastTarget, "leaflet-drag-target")),
            this._newPos = this._startPos.add(e),
            this._moving = !0,
            T(this._animRequest),
            this._lastEvent = t,
            this._animRequest = k(this._updatePosition, this, !0))))
        },
        _updatePosition: function() {
            var t = {
                originalEvent: this._lastEvent
            };
            this.fire("predrag", t),
            ue(this._element, this._newPos),
            this.fire("drag", t)
        },
        _onUp: function(t) {
            !t._simulated && this._enabled && this.finishDrag()
        },
        finishDrag: function() {
            for (var t in oe(document.body, "leaflet-dragging"),
            this._lastTarget && (oe(this._lastTarget, "leaflet-drag-target"),
            this._lastTarget = null),
            Ke)
                we(document, Ke[t], this._onMove, this),
                we(document, Ye[t], this._onUp, this);
            _e(),
            ve(),
            this._moved && this._moving && (T(this._animRequest),
            this.fire("dragend", {
                distance: this._newPos.distanceTo(this._startPos)
            })),
            this._moving = !1,
            Xe._dragging = !1
        }
    });
    function $e(t, e) {
        if (!e || !t.length)
            return t.slice();
        e *= e;
        return function(t, e) {
            var i = t.length
              , n = new (typeof Uint8Array != void 0 + "" ? Uint8Array : Array)(i);
            n[0] = n[i - 1] = 1,
            function t(e, i, n, o, s) {
                for (var r, a, h = 0, l = o + 1; l <= s - 1; l++)
                    h < (a = ii(e[l], e[o], e[s], !0)) && (r = l,
                    h = a);
                n < h && (i[r] = 1,
                t(e, i, n, o, r),
                t(e, i, n, r, s))
            }(t, n, e, 0, i - 1);
            for (var o = [], s = 0; s < i; s++)
                n[s] && o.push(t[s]);
            return o
        }(t = function(t, e) {
            for (var i, n, o, s = [t[0]], r = 1, a = 0, h = t.length; r < h; r++)
                i = t[r],
                n = t[a],
                o = void 0,
                o = n.x - i.x,
                i = n.y - i.y,
                e < o * o + i * i && (s.push(t[r]),
                a = r);
            return a < h - 1 && s.push(t[h - 1]),
            s
        }(t, e), e)
    }
    function Je(t, e, i) {
        return Math.sqrt(ii(t, e, i, !0))
    }
    function Qe(t, e, i, n, o) {
        var s, r, a, h = n ? Ve : ei(t, i), l = ei(e, i);
        for (Ve = l; ; ) {
            if (!(h | l))
                return [t, e];
            if (h & l)
                return !1;
            a = ei(r = ti(t, e, s = h || l, i, o), i),
            s === h ? (t = r,
            h = a) : (e = r,
            l = a)
        }
    }
    function ti(t, e, i, n, o) {
        var s, r, a = e.x - t.x, h = e.y - t.y, e = n.min, n = n.max;
        return 8 & i ? (s = t.x + a * (n.y - t.y) / h,
        r = n.y) : 4 & i ? (s = t.x + a * (e.y - t.y) / h,
        r = e.y) : 2 & i ? (s = n.x,
        r = t.y + h * (n.x - t.x) / a) : 1 & i && (s = e.x,
        r = t.y + h * (e.x - t.x) / a),
        new z(s,r,o)
    }
    function ei(t, e) {
        var i = 0;
        return t.x < e.min.x ? i |= 1 : t.x > e.max.x && (i |= 2),
        t.y < e.min.y ? i |= 4 : t.y > e.max.y && (i |= 8),
        i
    }
    function ii(t, e, i, n) {
        var o = e.x
          , s = e.y
          , r = i.x - o
          , a = i.y - s
          , e = r * r + a * a;
        return 0 < e && (1 < (e = ((t.x - o) * r + (t.y - s) * a) / e) ? (o = i.x,
        s = i.y) : 0 < e && (o += r * e,
        s += a * e)),
        r = t.x - o,
        a = t.y - s,
        n ? r * r + a * a : new z(o,s)
    }
    function ni(t) {
        return !f(t[0]) || "object" != typeof t[0][0] && void 0 !== t[0][0]
    }
    function oi(t) {
        return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),
        ni(t)
    }
    vt = {
        simplify: $e,
        pointToSegmentDistance: Je,
        closestPointOnSegment: function(t, e, i) {
            return ii(t, e, i)
        },
        clipSegment: Qe,
        _getEdgeIntersection: ti,
        _getBitCode: ei,
        _sqClosestPointOnSegment: ii,
        isFlat: ni,
        _flat: oi
    };
    function si(t, e, i) {
        for (var n, o, s, r, a, h, l, u = [1, 4, 2, 8], c = 0, d = t.length; c < d; c++)
            t[c]._code = ei(t[c], e);
        for (s = 0; s < 4; s++) {
            for (h = u[s],
            n = [],
            c = 0,
            o = (d = t.length) - 1; c < d; o = c++)
                r = t[c],
                a = t[o],
                r._code & h ? a._code & h || ((l = ti(a, r, h, e, i))._code = ei(l, e),
                n.push(l)) : (a._code & h && ((l = ti(a, r, h, e, i))._code = ei(l, e),
                n.push(l)),
                n.push(r));
            t = n
        }
        return t
    }
    var $ = {
        clipPolygon: si
    }
      , ot = {
        project: function(t) {
            return new z(t.lng,t.lat)
        },
        unproject: function(t) {
            return new N(t.y,t.x)
        },
        bounds: new A([-180, -90],[180, 90])
    }
      , dt = {
        R: 6378137,
        R_MINOR: 6356752.314245179,
        bounds: new A([-20037508.34279, -15496570.73972],[20037508.34279, 18764656.23138]),
        project: function(t) {
            var e = Math.PI / 180
              , i = this.R
              , n = t.lat * e
              , o = this.R_MINOR / i
              , s = Math.sqrt(1 - o * o)
              , o = s * Math.sin(n)
              , s = Math.tan(Math.PI / 4 - n / 2) / Math.pow((1 - o) / (1 + o), s / 2)
              , n = -i * Math.log(Math.max(s, 1e-10));
            return new z(t.lng * e * i,n)
        },
        unproject: function(t) {
            for (var e, i = 180 / Math.PI, n = this.R, o = this.R_MINOR / n, s = Math.sqrt(1 - o * o), r = Math.exp(-t.y / n), a = Math.PI / 2 - 2 * Math.atan(r), h = 0, l = .1; h < 15 && 1e-7 < Math.abs(l); h++)
                e = s * Math.sin(a),
                e = Math.pow((1 - e) / (1 + e), s / 2),
                a += l = Math.PI / 2 - 2 * Math.atan(r * e) - a;
            return new N(a * i,t.x * i / n)
        }
    }
      , at = {
        LonLat: ot,
        Mercator: dt,
        SphericalMercator: F
    }
      , S = h({}, U, {
        code: "EPSG:3395",
        projection: dt,
        transformation: V(ht = .5 / (Math.PI * dt.R), .5, -ht, .5)
    })
      , ri = h({}, U, {
        code: "EPSG:4326",
        projection: ot,
        transformation: V(1 / 180, 1, -1 / 180, .5)
    })
      , F = h({}, G, {
        projection: ot,
        transformation: V(1, 0, -1, 0),
        scale: function(t) {
            return Math.pow(2, t)
        },
        zoom: function(t) {
            return Math.log(t) / Math.LN2
        },
        distance: function(t, e) {
            var i = e.lng - t.lng
              , t = e.lat - t.lat;
            return Math.sqrt(i * i + t * t)
        },
        infinite: !0
    });
    G.Earth = U,
    G.EPSG3395 = S,
    G.EPSG3857 = q,
    G.EPSG900913 = Y,
    G.EPSG4326 = ri,
    G.Simple = F;
    var ai = D.extend({
        options: {
            pane: "overlayPane",
            attribution: null,
            bubblingMouseEvents: !0
        },
        addTo: function(t) {
            return t.addLayer(this),
            this
        },
        remove: function() {
            return this.removeFrom(this._map || this._mapToAdd)
        },
        removeFrom: function(t) {
            return t && t.removeLayer(this),
            this
        },
        getPane: function(t) {
            return this._map.getPane(t ? this.options[t] || t : this.options.pane)
        },
        addInteractiveTarget: function(t) {
            return this._map._targets[P(t)] = this
        },
        removeInteractiveTarget: function(t) {
            return delete this._map._targets[P(t)],
            this
        },
        getAttribution: function() {
            return this.options.attribution
        },
        _layerAdd: function(t) {
            var e, i = t.target;
            i.hasLayer(this) && (this._map = i,
            this._zoomAnimated = i._zoomAnimated,
            this.getEvents && (e = this.getEvents(),
            i.on(e, this),
            this.once("remove", function() {
                i.off(e, this)
            }, this)),
            this.onAdd(i),
            this.getAttribution && i.attributionControl && i.attributionControl.addAttribution(this.getAttribution()),
            this.fire("add"),
            i.fire("layeradd", {
                layer: this
            }))
        }
    });
    Ne.include({
        addLayer: function(t) {
            if (!t._layerAdd)
                throw new Error("The provided object is not a Layer.");
            var e = P(t);
            return this._layers[e] || ((this._layers[e] = t)._mapToAdd = this,
            t.beforeAdd && t.beforeAdd(this),
            this.whenReady(t._layerAdd, t)),
            this
        },
        removeLayer: function(t) {
            var e = P(t);
            return this._layers[e] && (this._loaded && t.onRemove(this),
            t.getAttribution && this.attributionControl && this.attributionControl.removeAttribution(t.getAttribution()),
            delete this._layers[e],
            this._loaded && (this.fire("layerremove", {
                layer: t
            }),
            t.fire("remove")),
            t._map = t._mapToAdd = null),
            this
        },
        hasLayer: function(t) {
            return !!t && P(t)in this._layers
        },
        eachLayer: function(t, e) {
            for (var i in this._layers)
                t.call(e, this._layers[i]);
            return this
        },
        _addLayers: function(t) {
            for (var e = 0, i = (t = t ? f(t) ? t : [t] : []).length; e < i; e++)
                this.addLayer(t[e])
        },
        _addZoomLimit: function(t) {
            !isNaN(t.options.maxZoom) && isNaN(t.options.minZoom) || (this._zoomBoundLayers[P(t)] = t,
            this._updateZoomLevels())
        },
        _removeZoomLimit: function(t) {
            t = P(t);
            this._zoomBoundLayers[t] && (delete this._zoomBoundLayers[t],
            this._updateZoomLevels())
        },
        _updateZoomLevels: function() {
            var t, e = 1 / 0, i = -1 / 0, n = this._getZoomSpan();
            for (t in this._zoomBoundLayers)
                var o = this._zoomBoundLayers[t].options
                  , e = void 0 === o.minZoom ? e : Math.min(e, o.minZoom)
                  , i = void 0 === o.maxZoom ? i : Math.max(i, o.maxZoom);
            this._layersMaxZoom = i === -1 / 0 ? void 0 : i,
            this._layersMinZoom = e === 1 / 0 ? void 0 : e,
            n !== this._getZoomSpan() && this.fire("zoomlevelschange"),
            void 0 === this.options.maxZoom && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom && this.setZoom(this._layersMaxZoom),
            void 0 === this.options.minZoom && this._layersMinZoom && this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom)
        }
    });
    var hi = ai.extend({
        initialize: function(t, e) {
            var i, n;
            if (c(this, e),
            this._layers = {},
            t)
                for (i = 0,
                n = t.length; i < n; i++)
                    this.addLayer(t[i])
        },
        addLayer: function(t) {
            var e = this.getLayerId(t);
            return this._layers[e] = t,
            this._map && this._map.addLayer(t),
            this
        },
        removeLayer: function(t) {
            t = t in this._layers ? t : this.getLayerId(t);
            return this._map && this._layers[t] && this._map.removeLayer(this._layers[t]),
            delete this._layers[t],
            this
        },
        hasLayer: function(t) {
            return !!t && ("number" == typeof t ? t : this.getLayerId(t))in this._layers
        },
        clearLayers: function() {
            return this.eachLayer(this.removeLayer, this)
        },
        invoke: function(t) {
            var e, i, n = Array.prototype.slice.call(arguments, 1);
            for (e in this._layers)
                (i = this._layers[e])[t] && i[t].apply(i, n);
            return this
        },
        onAdd: function(t) {
            this.eachLayer(t.addLayer, t)
        },
        onRemove: function(t) {
            this.eachLayer(t.removeLayer, t)
        },
        eachLayer: function(t, e) {
            for (var i in this._layers)
                t.call(e, this._layers[i]);
            return this
        },
        getLayer: function(t) {
            return this._layers[t]
        },
        getLayers: function() {
            var t = [];
            return this.eachLayer(t.push, t),
            t
        },
        setZIndex: function(t) {
            return this.invoke("setZIndex", t)
        },
        getLayerId: P
    })
      , li = hi.extend({
        addLayer: function(t) {
            return this.hasLayer(t) ? this : (t.addEventParent(this),
            hi.prototype.addLayer.call(this, t),
            this.fire("layeradd", {
                layer: t
            }))
        },
        removeLayer: function(t) {
            return this.hasLayer(t) ? ((t = t in this._layers ? this._layers[t] : t).removeEventParent(this),
            hi.prototype.removeLayer.call(this, t),
            this.fire("layerremove", {
                layer: t
            })) : this
        },
        setStyle: function(t) {
            return this.invoke("setStyle", t)
        },
        bringToFront: function() {
            return this.invoke("bringToFront")
        },
        bringToBack: function() {
            return this.invoke("bringToBack")
        },
        getBounds: function() {
            var t, e = new B;
            for (t in this._layers) {
                var i = this._layers[t];
                e.extend(i.getBounds ? i.getBounds() : i.getLatLng())
            }
            return e
        }
    })
      , ui = E.extend({
        options: {
            popupAnchor: [0, 0],
            tooltipAnchor: [0, 0]
        },
        initialize: function(t) {
            c(this, t)
        },
        createIcon: function(t) {
            return this._createIcon("icon", t)
        },
        createShadow: function(t) {
            return this._createIcon("shadow", t)
        },
        _createIcon: function(t, e) {
            var i = this._getIconUrl(t);
            if (!i) {
                if ("icon" === t)
                    throw new Error("iconUrl not set in Icon options (see the docs).");
                return null
            }
            e = this._createImg(i, e && "IMG" === e.tagName ? e : null);
            return this._setIconStyles(e, t),
            e
        },
        _setIconStyles: function(t, e) {
            var i = this.options
              , n = i[e + "Size"]
              , o = O(n = "number" == typeof n ? [n, n] : n)
              , n = O("shadow" === e && i.shadowAnchor || i.iconAnchor || o && o.divideBy(2, !0));
            t.className = "leaflet-marker-" + e + " " + (i.className || ""),
            n && (t.style.marginLeft = -n.x + "px",
            t.style.marginTop = -n.y + "px"),
            o && (t.style.width = o.x + "px",
            t.style.height = o.y + "px")
        },
        _createImg: function(t, e) {
            return (e = e || document.createElement("img")).src = t,
            e
        },
        _getIconUrl: function(t) {
            return bt && this.options[t + "RetinaUrl"] || this.options[t + "Url"]
        }
    })
      , ci = ui.extend({
        options: {
            iconUrl: "marker-icon.png",
            iconRetinaUrl: "marker-icon-2x.png",
            shadowUrl: "marker-shadow.png",
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            tooltipAnchor: [16, -28],
            shadowSize: [41, 41]
        },
        _getIconUrl: function(t) {
            return ci.imagePath || (ci.imagePath = this._detectIconPath()),
            (this.options.imagePath || ci.imagePath) + ui.prototype._getIconUrl.call(this, t)
        },
        _detectIconPath: function() {
            var t = $t("div", "leaflet-default-icon-path", document.body)
              , e = Xt(t, "background-image") || Xt(t, "backgroundImage");
            return document.body.removeChild(t),
            null === e || 0 !== e.indexOf("url") ? "" : e.replace(/^url\(["']?/, "").replace(/marker-icon\.png["']?\)$/, "")
        }
    })
      , di = ft.extend({
        initialize: function(t) {
            this._marker = t
        },
        addHooks: function() {
            var t = this._marker._icon;
            this._draggable || (this._draggable = new Xe(t,t,!0)),
            this._draggable.on({
                dragstart: this._onDragStart,
                predrag: this._onPreDrag,
                drag: this._onDrag,
                dragend: this._onDragEnd
            }, this).enable(),
            ne(t, "leaflet-marker-draggable")
        },
        removeHooks: function() {
            this._draggable.off({
                dragstart: this._onDragStart,
                predrag: this._onPreDrag,
                drag: this._onDrag,
                dragend: this._onDragEnd
            }, this).disable(),
            this._marker._icon && oe(this._marker._icon, "leaflet-marker-draggable")
        },
        moved: function() {
            return this._draggable && this._draggable._moved
        },
        _adjustPan: function(t) {
            var e = this._marker
              , i = e._map
              , n = this._marker.options.autoPanSpeed
              , o = this._marker.options.autoPanPadding
              , s = ce(e._icon)
              , r = i.getPixelBounds()
              , a = i.getPixelOrigin()
              , o = Z(r.min._subtract(a).add(o), r.max._subtract(a).subtract(o));
            o.contains(s) || (n = O((Math.max(o.max.x, s.x) - o.max.x) / (r.max.x - o.max.x) - (Math.min(o.min.x, s.x) - o.min.x) / (r.min.x - o.min.x), (Math.max(o.max.y, s.y) - o.max.y) / (r.max.y - o.max.y) - (Math.min(o.min.y, s.y) - o.min.y) / (r.min.y - o.min.y)).multiplyBy(n),
            i.panBy(n, {
                animate: !1
            }),
            this._draggable._newPos._add(n),
            this._draggable._startPos._add(n),
            ue(e._icon, this._draggable._newPos),
            this._onDrag(t),
            this._panRequest = k(this._adjustPan.bind(this, t)))
        },
        _onDragStart: function() {
            this._oldLatLng = this._marker.getLatLng(),
            this._marker.closePopup && this._marker.closePopup(),
            this._marker.fire("movestart").fire("dragstart")
        },
        _onPreDrag: function(t) {
            this._marker.options.autoPan && (T(this._panRequest),
            this._panRequest = k(this._adjustPan.bind(this, t)))
        },
        _onDrag: function(t) {
            var e = this._marker
              , i = e._shadow
              , n = ce(e._icon)
              , o = e._map.layerPointToLatLng(n);
            i && ue(i, n),
            e._latlng = o,
            t.latlng = o,
            t.oldLatLng = this._oldLatLng,
            e.fire("move", t).fire("drag", t)
        },
        _onDragEnd: function(t) {
            T(this._panRequest),
            delete this._oldLatLng,
            this._marker.fire("moveend").fire("dragend", t)
        }
    })
      , _i = ai.extend({
        options: {
            icon: new ci,
            interactive: !0,
            keyboard: !0,
            title: "",
            alt: "",
            zIndexOffset: 0,
            opacity: 1,
            riseOnHover: !1,
            riseOffset: 250,
            pane: "markerPane",
            shadowPane: "shadowPane",
            bubblingMouseEvents: !1,
            draggable: !1,
            autoPan: !1,
            autoPanPadding: [50, 50],
            autoPanSpeed: 10
        },
        initialize: function(t, e) {
            c(this, e),
            this._latlng = H(t)
        },
        onAdd: function(t) {
            this._zoomAnimated = this._zoomAnimated && t.options.markerZoomAnimation,
            this._zoomAnimated && t.on("zoomanim", this._animateZoom, this),
            this._initIcon(),
            this.update()
        },
        onRemove: function(t) {
            this.dragging && this.dragging.enabled() && (this.options.draggable = !0,
            this.dragging.removeHooks()),
            delete this.dragging,
            this._zoomAnimated && t.off("zoomanim", this._animateZoom, this),
            this._removeIcon(),
            this._removeShadow()
        },
        getEvents: function() {
            return {
                zoom: this.update,
                viewreset: this.update
            }
        },
        getLatLng: function() {
            return this._latlng
        },
        setLatLng: function(t) {
            var e = this._latlng;
            return this._latlng = H(t),
            this.update(),
            this.fire("move", {
                oldLatLng: e,
                latlng: this._latlng
            })
        },
        setZIndexOffset: function(t) {
            return this.options.zIndexOffset = t,
            this.update()
        },
        getIcon: function() {
            return this.options.icon
        },
        setIcon: function(t) {
            return this.options.icon = t,
            this._map && (this._initIcon(),
            this.update()),
            this._popup && this.bindPopup(this._popup, this._popup.options),
            this
        },
        getElement: function() {
            return this._icon
        },
        update: function() {
            var t;
            return this._icon && this._map && (t = this._map.latLngToLayerPoint(this._latlng).round(),
            this._setPos(t)),
            this
        },
        _initIcon: function() {
            var t = this.options
              , e = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide")
              , i = t.icon.createIcon(this._icon)
              , n = !1;
            i !== this._icon && (this._icon && this._removeIcon(),
            n = !0,
            t.title && (i.title = t.title),
            "IMG" === i.tagName && (i.alt = t.alt || "")),
            ne(i, e),
            t.keyboard && (i.tabIndex = "0"),
            this._icon = i,
            t.riseOnHover && this.on({
                mouseover: this._bringToFront,
                mouseout: this._resetZIndex
            });
            var o = t.icon.createShadow(this._shadow)
              , i = !1;
            o !== this._shadow && (this._removeShadow(),
            i = !0),
            o && (ne(o, e),
            o.alt = ""),
            this._shadow = o,
            t.opacity < 1 && this._updateOpacity(),
            n && this.getPane().appendChild(this._icon),
            this._initInteraction(),
            o && i && this.getPane(t.shadowPane).appendChild(this._shadow)
        },
        _removeIcon: function() {
            this.options.riseOnHover && this.off({
                mouseover: this._bringToFront,
                mouseout: this._resetZIndex
            }),
            Jt(this._icon),
            this.removeInteractiveTarget(this._icon),
            this._icon = null
        },
        _removeShadow: function() {
            this._shadow && Jt(this._shadow),
            this._shadow = null
        },
        _setPos: function(t) {
            this._icon && ue(this._icon, t),
            this._shadow && ue(this._shadow, t),
            this._zIndex = t.y + this.options.zIndexOffset,
            this._resetZIndex()
        },
        _updateZIndex: function(t) {
            this._icon && (this._icon.style.zIndex = this._zIndex + t)
        },
        _animateZoom: function(t) {
            t = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();
            this._setPos(t)
        },
        _initInteraction: function() {
            var t;
            this.options.interactive && (ne(this._icon, "leaflet-interactive"),
            this.addInteractiveTarget(this._icon),
            di && (t = this.options.draggable,
            this.dragging && (t = this.dragging.enabled(),
            this.dragging.disable()),
            this.dragging = new di(this),
            t && this.dragging.enable()))
        },
        setOpacity: function(t) {
            return this.options.opacity = t,
            this._map && this._updateOpacity(),
            this
        },
        _updateOpacity: function() {
            var t = this.options.opacity;
            this._icon && ae(this._icon, t),
            this._shadow && ae(this._shadow, t)
        },
        _bringToFront: function() {
            this._updateZIndex(this.options.riseOffset)
        },
        _resetZIndex: function() {
            this._updateZIndex(0)
        },
        _getPopupAnchor: function() {
            return this.options.icon.options.popupAnchor
        },
        _getTooltipAnchor: function() {
            return this.options.icon.options.tooltipAnchor
        }
    })
      , pi = ai.extend({
        options: {
            stroke: !0,
            color: "#fce51e",
            weight: 3,
            opacity: 1,
            lineCap: "round",
            lineJoin: "round",
            dashArray: null,
            dashOffset: null,
            fill: !1,
            fillColor: null,
            fillOpacity: .2,
            fillRule: "evenodd",
            interactive: !0,
            bubblingMouseEvents: !0
        },
        beforeAdd: function(t) {
            this._renderer = t.getRenderer(this)
        },
        onAdd: function() {
            this._renderer._initPath(this),
            this._reset(),
            this._renderer._addPath(this)
        },
        onRemove: function() {
            this._renderer._removePath(this)
        },
        redraw: function() {
            return this._map && this._renderer._updatePath(this),
            this
        },
        setStyle: function(t) {
            return c(this, t),
            this._renderer && (this._renderer._updateStyle(this),
            this.options.stroke && t && Object.prototype.hasOwnProperty.call(t, "weight") && this._updateBounds()),
            this
        },
        bringToFront: function() {
            return this._renderer && this._renderer._bringToFront(this),
            this
        },
        bringToBack: function() {
            return this._renderer && this._renderer._bringToBack(this),
            this
        },
        getElement: function() {
            return this._path
        },
        _reset: function() {
            this._project(),
            this._update()
        },
        _clickTolerance: function() {
            return (this.options.stroke ? this.options.weight / 2 : 0) + this._renderer.options.tolerance
        }
    })
      , fi = pi.extend({
        options: {
            fill: !0,
            radius: 10
        },
        initialize: function(t, e) {
            c(this, e),
            this._latlng = H(t),
            this._radius = this.options.radius
        },
        setLatLng: function(t) {
            var e = this._latlng;
            return this._latlng = H(t),
            this.redraw(),
            this.fire("move", {
                oldLatLng: e,
                latlng: this._latlng
            })
        },
        getLatLng: function() {
            return this._latlng
        },
        setRadius: function(t) {
            return this.options.radius = this._radius = t,
            this.redraw()
        },
        getRadius: function() {
            return this._radius
        },
        setStyle: function(t) {
            var e = t && t.radius || this._radius;
            return pi.prototype.setStyle.call(this, t),
            this.setRadius(e),
            this
        },
        _project: function() {
            this._point = this._map.latLngToLayerPoint(this._latlng),
            this._updateBounds()
        },
        _updateBounds: function() {
            var t = this._radius
              , e = this._radiusY || t
              , i = this._clickTolerance()
              , i = [t + i, e + i];
            this._pxBounds = new A(this._point.subtract(i),this._point.add(i))
        },
        _update: function() {
            this._map && this._updatePath()
        },
        _updatePath: function() {
            this._renderer._updateCircle(this)
        },
        _empty: function() {
            return this._radius && !this._renderer._bounds.intersects(this._pxBounds)
        },
        _containsPoint: function(t) {
            return t.distanceTo(this._point) <= this._radius + this._clickTolerance()
        }
    })
      , mi = fi.extend({
        initialize: function(t, e, i) {
            if (c(this, e = "number" == typeof e ? h({}, i, {
                radius: e
            }) : e),
            this._latlng = H(t),
            isNaN(this.options.radius))
                throw new Error("Circle radius cannot be NaN");
            this._mRadius = this.options.radius
        },
        setRadius: function(t) {
            return this._mRadius = t,
            this.redraw()
        },
        getRadius: function() {
            return this._mRadius
        },
        getBounds: function() {
            var t = [this._radius, this._radiusY || this._radius];
            return new B(this._map.layerPointToLatLng(this._point.subtract(t)),this._map.layerPointToLatLng(this._point.add(t)))
        },
        setStyle: pi.prototype.setStyle,
        _project: function() {
            var t, e, i, n, o, s = this._latlng.lng, r = this._latlng.lat, a = this._map, h = a.options.crs;
            h.distance === U.distance ? (o = Math.PI / 180,
            t = this._mRadius / U.R / o,
            e = a.project([r + t, s]),
            n = a.project([r - t, s]),
            i = e.add(n).divideBy(2),
            n = a.unproject(i).lat,
            o = Math.acos((Math.cos(t * o) - Math.sin(r * o) * Math.sin(n * o)) / (Math.cos(r * o) * Math.cos(n * o))) / o,
            !isNaN(o) && 0 !== o || (o = t / Math.cos(Math.PI / 180 * r)),
            this._point = i.subtract(a.getPixelOrigin()),
            this._radius = isNaN(o) ? 0 : i.x - a.project([n, s - o]).x,
            this._radiusY = i.y - e.y) : (h = h.unproject(h.project(this._latlng).subtract([this._mRadius, 0])),
            this._point = a.latLngToLayerPoint(this._latlng),
            this._radius = this._point.x - a.latLngToLayerPoint(h).x),
            this._updateBounds()
        }
    })
      , gi = pi.extend({
        options: {
            smoothFactor: 1,
            noClip: !1
        },
        initialize: function(t, e) {
            c(this, e),
            this._setLatLngs(t)
        },
        getLatLngs: function() {
            return this._latlngs
        },
        setLatLngs: function(t) {
            return this._setLatLngs(t),
            this.redraw()
        },
        isEmpty: function() {
            return !this._latlngs.length
        },
        closestLayerPoint: function(t) {
            for (var e, i, n = 1 / 0, o = null, s = ii, r = 0, a = this._parts.length; r < a; r++)
                for (var h = this._parts[r], l = 1, u = h.length; l < u; l++) {
                    var c = s(t, e = h[l - 1], i = h[l], !0);
                    c < n && (n = c,
                    o = s(t, e, i))
                }
            return o && (o.distance = Math.sqrt(n)),
            o
        },
        getCenter: function() {
            if (!this._map)
                throw new Error("Must add layer to map before using getCenter()");
            var t, e, i, n, o, s, r = this._rings[0], a = r.length;
            if (!a)
                return null;
            for (e = t = 0; t < a - 1; t++)
                e += r[t].distanceTo(r[t + 1]) / 2;
            if (0 === e)
                return this._map.layerPointToLatLng(r[0]);
            for (i = t = 0; t < a - 1; t++)
                if (n = r[t],
                o = r[t + 1],
                e < (i += s = n.distanceTo(o)))
                    return this._map.layerPointToLatLng([o.x - (s = (i - e) / s) * (o.x - n.x), o.y - s * (o.y - n.y)])
        },
        getBounds: function() {
            return this._bounds
        },
        addLatLng: function(t, e) {
            return e = e || this._defaultShape(),
            t = H(t),
            e.push(t),
            this._bounds.extend(t),
            this.redraw()
        },
        _setLatLngs: function(t) {
            this._bounds = new B,
            this._latlngs = this._convertLatLngs(t)
        },
        _defaultShape: function() {
            return ni(this._latlngs) ? this._latlngs : this._latlngs[0]
        },
        _convertLatLngs: function(t) {
            for (var e = [], i = ni(t), n = 0, o = t.length; n < o; n++)
                i ? (e[n] = H(t[n]),
                this._bounds.extend(e[n])) : e[n] = this._convertLatLngs(t[n]);
            return e
        },
        _project: function() {
            var t = new A;
            this._rings = [],
            this._projectLatlngs(this._latlngs, this._rings, t),
            this._bounds.isValid() && t.isValid() && (this._rawPxBounds = t,
            this._updateBounds())
        },
        _updateBounds: function() {
            var t = this._clickTolerance()
              , t = new z(t,t);
            this._pxBounds = new A([this._rawPxBounds.min.subtract(t), this._rawPxBounds.max.add(t)])
        },
        _projectLatlngs: function(t, e, i) {
            var n, o, s = t[0]instanceof N, r = t.length;
            if (s) {
                for (o = [],
                n = 0; n < r; n++)
                    o[n] = this._map.latLngToLayerPoint(t[n]),
                    i.extend(o[n]);
                e.push(o)
            } else
                for (n = 0; n < r; n++)
                    this._projectLatlngs(t[n], e, i)
        },
        _clipPoints: function() {
            var t = this._renderer._bounds;
            if (this._parts = [],
            this._pxBounds && this._pxBounds.intersects(t))
                if (this.options.noClip)
                    this._parts = this._rings;
                else
                    for (var e, i, n, o, s = this._parts, r = 0, a = 0, h = this._rings.length; r < h; r++)
                        for (e = 0,
                        i = (o = this._rings[r]).length; e < i - 1; e++)
                            (n = Qe(o[e], o[e + 1], t, e, !0)) && (s[a] = s[a] || [],
                            s[a].push(n[0]),
                            n[1] === o[e + 1] && e !== i - 2 || (s[a].push(n[1]),
                            a++))
        },
        _simplifyPoints: function() {
            for (var t = this._parts, e = this.options.smoothFactor, i = 0, n = t.length; i < n; i++)
                t[i] = $e(t[i], e)
        },
        _update: function() {
            this._map && (this._clipPoints(),
            this._simplifyPoints(),
            this._updatePath())
        },
        _updatePath: function() {
            this._renderer._updatePoly(this)
        },
        _containsPoint: function(t, e) {
            var i, n, o, s, r, a, h = this._clickTolerance();
            if (!this._pxBounds || !this._pxBounds.contains(t))
                return !1;
            for (i = 0,
            s = this._parts.length; i < s; i++)
                for (n = 0,
                o = (r = (a = this._parts[i]).length) - 1; n < r; o = n++)
                    if ((e || 0 !== n) && Je(t, a[o], a[n]) <= h)
                        return !0;
            return !1
        }
    });
    gi._flat = oi;
    var vi = gi.extend({
        options: {
            fill: !0
        },
        isEmpty: function() {
            return !this._latlngs.length || !this._latlngs[0].length
        },
        getCenter: function() {
            if (!this._map)
                throw new Error("Must add layer to map before using getCenter()");
            var t, e, i, n, o, s, r, a, h, l = this._rings[0], u = l.length;
            if (!u)
                return null;
            for (t = s = r = a = 0,
            e = u - 1; t < u; e = t++)
                i = l[t],
                n = l[e],
                o = i.y * n.x - n.y * i.x,
                r += (i.x + n.x) * o,
                a += (i.y + n.y) * o,
                s += 3 * o;
            return h = 0 === s ? l[0] : [r / s, a / s],
            this._map.layerPointToLatLng(h)
        },
        _convertLatLngs: function(t) {
            var e = gi.prototype._convertLatLngs.call(this, t)
              , t = e.length;
            return 2 <= t && e[0]instanceof N && e[0].equals(e[t - 1]) && e.pop(),
            e
        },
        _setLatLngs: function(t) {
            gi.prototype._setLatLngs.call(this, t),
            ni(this._latlngs) && (this._latlngs = [this._latlngs])
        },
        _defaultShape: function() {
            return (ni(this._latlngs[0]) ? this._latlngs : this._latlngs[0])[0]
        },
        _clipPoints: function() {
            var t = this._renderer._bounds
              , e = this.options.weight
              , e = new z(e,e)
              , t = new A(t.min.subtract(e),t.max.add(e));
            if (this._parts = [],
            this._pxBounds && this._pxBounds.intersects(t))
                if (this.options.noClip)
                    this._parts = this._rings;
                else
                    for (var i, n = 0, o = this._rings.length; n < o; n++)
                        (i = si(this._rings[n], t, !0)).length && this._parts.push(i)
        },
        _updatePath: function() {
            this._renderer._updatePoly(this, !0)
        },
        _containsPoint: function(t) {
            var e, i, n, o, s, r, a, h, l = !1;
            if (!this._pxBounds || !this._pxBounds.contains(t))
                return !1;
            for (o = 0,
            a = this._parts.length; o < a; o++)
                for (s = 0,
                r = (h = (e = this._parts[o]).length) - 1; s < h; r = s++)
                    i = e[s],
                    n = e[r],
                    i.y > t.y != n.y > t.y && t.x < (n.x - i.x) * (t.y - i.y) / (n.y - i.y) + i.x && (l = !l);
            return l || gi.prototype._containsPoint.call(this, t, !0)
        }
    })
      , yi = li.extend({
        initialize: function(t, e) {
            c(this, e),
            this._layers = {},
            t && this.addData(t)
        },
        addData: function(t) {
            var e, i, n, o = f(t) ? t : t.features;
            if (o) {
                for (e = 0,
                i = o.length; e < i; e++)
                    ((n = o[e]).geometries || n.geometry || n.features || n.coordinates) && this.addData(n);
                return this
            }
            var s = this.options;
            if (s.filter && !s.filter(t))
                return this;
            var r = Li(t, s);
            return r ? (r.feature = Ti(t),
            r.defaultOptions = r.options,
            this.resetStyle(r),
            s.onEachFeature && s.onEachFeature(t, r),
            this.addLayer(r)) : this
        },
        resetStyle: function(t) {
            return void 0 === t ? this.eachLayer(this.resetStyle, this) : (t.options = h({}, t.defaultOptions),
            this._setLayerStyle(t, this.options.style),
            this)
        },
        setStyle: function(e) {
            return this.eachLayer(function(t) {
                this._setLayerStyle(t, e)
            }, this)
        },
        _setLayerStyle: function(t, e) {
            t.setStyle && ("function" == typeof e && (e = e(t.feature)),
            t.setStyle(e))
        }
    });
    function Li(t, e) {
        var i, n, o, s, r = "Feature" === t.type ? t.geometry : t, a = r ? r.coordinates : null, h = [], l = e && e.pointToLayer, u = e && e.coordsToLatLng || bi;
        if (!a && !r)
            return null;
        switch (r.type) {
        case "Point":
            return wi(l, t, i = u(a), e);
        case "MultiPoint":
            for (o = 0,
            s = a.length; o < s; o++)
                i = u(a[o]),
                h.push(wi(l, t, i, e));
            return new li(h);
        case "LineString":
        case "MultiLineString":
            return n = xi(a, "LineString" === r.type ? 0 : 1, u),
            new gi(n,e);
        case "Polygon":
        case "MultiPolygon":
            return n = xi(a, "Polygon" === r.type ? 1 : 2, u),
            new vi(n,e);
        case "GeometryCollection":
            for (o = 0,
            s = r.geometries.length; o < s; o++) {
                var c = Li({
                    geometry: r.geometries[o],
                    type: "Feature",
                    properties: t.properties
                }, e);
                c && h.push(c)
            }
            return new li(h);
        default:
            throw new Error("Invalid GeoJSON object.")
        }
    }
    function wi(t, e, i, n) {
        return t ? t(e, i) : new _i(i,n && n.markersInheritOptions && n)
    }
    function bi(t) {
        return new N(t[1],t[0],t[2])
    }
    function xi(t, e, i) {
        for (var n, o = [], s = 0, r = t.length; s < r; s++)
            n = e ? xi(t[s], e - 1, i) : (i || bi)(t[s]),
            o.push(n);
        return o
    }
    function ki(t, e) {
        return e = "number" == typeof e ? e : 6,
        void 0 !== t.alt ? [r(t.lng, e), r(t.lat, e), r(t.alt, e)] : [r(t.lng, e), r(t.lat, e)]
    }
    function Mi(t, e, i, n) {
        for (var o = [], s = 0, r = t.length; s < r; s++)
            o.push(e ? Mi(t[s], e - 1, i, n) : ki(t[s], n));
        return !e && i && o.push(o[0]),
        o
    }
    function Pi(t, e) {
        return t.feature ? h({}, t.feature, {
            geometry: e
        }) : Ti(e)
    }
    function Ti(t) {
        return "Feature" === t.type || "FeatureCollection" === t.type ? t : {
            type: "Feature",
            properties: {},
            geometry: t
        }
    }
    dt = {
        toGeoJSON: function(t) {
            return Pi(this, {
                type: "Point",
                coordinates: ki(this.getLatLng(), t)
            })
        }
    };
    function Ci(t, e) {
        return new yi(t,e)
    }
    _i.include(dt),
    mi.include(dt),
    fi.include(dt),
    gi.include({
        toGeoJSON: function(t) {
            var e = !ni(this._latlngs);
            return Pi(this, {
                type: (e ? "Multi" : "") + "LineString",
                coordinates: Mi(this._latlngs, e ? 1 : 0, !1, t)
            })
        }
    }),
    vi.include({
        toGeoJSON: function(t) {
            var e = !ni(this._latlngs)
              , i = e && !ni(this._latlngs[0])
              , t = Mi(this._latlngs, i ? 2 : e ? 1 : 0, !0, t);
            return Pi(this, {
                type: (i ? "Multi" : "") + "Polygon",
                coordinates: t = !e ? [t] : t
            })
        }
    }),
    hi.include({
        toMultiPoint: function(e) {
            var i = [];
            return this.eachLayer(function(t) {
                i.push(t.toGeoJSON(e).geometry.coordinates)
            }),
            Pi(this, {
                type: "MultiPoint",
                coordinates: i
            })
        },
        toGeoJSON: function(e) {
            var t = this.feature && this.feature.geometry && this.feature.geometry.type;
            if ("MultiPoint" === t)
                return this.toMultiPoint(e);
            var i = "GeometryCollection" === t
              , n = [];
            return this.eachLayer(function(t) {
                t.toGeoJSON && (t = t.toGeoJSON(e),
                i ? n.push(t.geometry) : "FeatureCollection" === (t = Ti(t)).type ? n.push.apply(n, t.features) : n.push(t))
            }),
            i ? Pi(this, {
                geometries: n,
                type: "GeometryCollection"
            }) : {
                type: "FeatureCollection",
                features: n
            }
        }
    });
    var ht = Ci
      , Ei = ai.extend({
        options: {
            opacity: 1,
            alt: "",
            interactive: !1,
            crossOrigin: !1,
            errorOverlayUrl: "",
            zIndex: 1,
            className: ""
        },
        initialize: function(t, e, i) {
            this._url = t,
            this._bounds = R(e),
            c(this, i)
        },
        onAdd: function() {
            this._image || (this._initImage(),
            this.options.opacity < 1 && this._updateOpacity()),
            this.options.interactive && (ne(this._image, "leaflet-interactive"),
            this.addInteractiveTarget(this._image)),
            this.getPane().appendChild(this._image),
            this._reset()
        },
        onRemove: function() {
            Jt(this._image),
            this.options.interactive && this.removeInteractiveTarget(this._image)
        },
        setOpacity: function(t) {
            return this.options.opacity = t,
            this._image && this._updateOpacity(),
            this
        },
        setStyle: function(t) {
            return t.opacity && this.setOpacity(t.opacity),
            this
        },
        bringToFront: function() {
            return this._map && te(this._image),
            this
        },
        bringToBack: function() {
            return this._map && ee(this._image),
            this
        },
        setUrl: function(t) {
            return this._url = t,
            this._image && (this._image.src = t),
            this
        },
        setBounds: function(t) {
            return this._bounds = R(t),
            this._map && this._reset(),
            this
        },
        getEvents: function() {
            var t = {
                zoom: this._reset,
                viewreset: this._reset
            };
            return this._zoomAnimated && (t.zoomanim = this._animateZoom),
            t
        },
        setZIndex: function(t) {
            return this.options.zIndex = t,
            this._updateZIndex(),
            this
        },
        getBounds: function() {
            return this._bounds
        },
        getElement: function() {
            return this._image
        },
        _initImage: function() {
            var t = "IMG" === this._url.tagName
              , e = this._image = t ? this._url : $t("img");
            ne(e, "leaflet-image-layer"),
            this._zoomAnimated && ne(e, "leaflet-zoom-animated"),
            this.options.className && ne(e, this.options.className),
            e.onselectstart = a,
            e.onmousemove = a,
            e.onload = M(this.fire, this, "load"),
            e.onerror = M(this._overlayOnError, this, "error"),
            !this.options.crossOrigin && "" !== this.options.crossOrigin || (e.crossOrigin = !0 === this.options.crossOrigin ? "" : this.options.crossOrigin),
            this.options.zIndex && this._updateZIndex(),
            t ? this._url = e.src : (e.src = this._url,
            e.alt = this.options.alt)
        },
        _animateZoom: function(t) {
            var e = this._map.getZoomScale(t.zoom)
              , t = this._map._latLngBoundsToNewLayerBounds(this._bounds, t.zoom, t.center).min;
            le(this._image, t, e)
        },
        _reset: function() {
            var t = this._image
              , e = new A(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast()))
              , i = e.getSize();
            ue(t, e.min),
            t.style.width = i.x + "px",
            t.style.height = i.y + "px"
        },
        _updateOpacity: function() {
            ae(this._image, this.options.opacity)
        },
        _updateZIndex: function() {
            this._image && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._image.style.zIndex = this.options.zIndex)
        },
        _overlayOnError: function() {
            this.fire("error");
            var t = this.options.errorOverlayUrl;
            t && this._url !== t && (this._url = t,
            this._image.src = t)
        }
    })
      , Si = Ei.extend({
        options: {
            autoplay: !0,
            loop: !0,
            keepAspectRatio: !0,
            muted: !1
        },
        _initImage: function() {
            var t = "VIDEO" === this._url.tagName
              , e = this._image = t ? this._url : $t("video");
            if (ne(e, "leaflet-image-layer"),
            this._zoomAnimated && ne(e, "leaflet-zoom-animated"),
            this.options.className && ne(e, this.options.className),
            e.onselectstart = a,
            e.onmousemove = a,
            e.onloadeddata = M(this.fire, this, "load"),
            t) {
                for (var i = e.getElementsByTagName("source"), n = [], o = 0; o < i.length; o++)
                    n.push(i[o].src);
                this._url = 0 < i.length ? n : [e.src]
            } else {
                f(this._url) || (this._url = [this._url]),
                !this.options.keepAspectRatio && Object.prototype.hasOwnProperty.call(e.style, "objectFit") && (e.style.objectFit = "fill"),
                e.autoplay = !!this.options.autoplay,
                e.loop = !!this.options.loop,
                e.muted = !!this.options.muted;
                for (var s = 0; s < this._url.length; s++) {
                    var r = $t("source");
                    r.src = this._url[s],
                    e.appendChild(r)
                }
            }
        }
    })
      , Di = Ei.extend({
        _initImage: function() {
            var t = this._image = this._url;
            ne(t, "leaflet-image-layer"),
            this._zoomAnimated && ne(t, "leaflet-zoom-animated"),
            this.options.className && ne(t, this.options.className),
            t.onselectstart = a,
            t.onmousemove = a
        }
    })
      , zi = ai.extend({
        options: {
            offset: [0, 7],
            className: "",
            pane: "popupPane"
        },
        initialize: function(t, e) {
            c(this, t),
            this._source = e
        },
        onAdd: function(t) {
            this._zoomAnimated = t._zoomAnimated,
            this._container || this._initLayout(),
            t._fadeAnimated && ae(this._container, 0),
            clearTimeout(this._removeTimeout),
            this.getPane().appendChild(this._container),
            this.update(),
            t._fadeAnimated && ae(this._container, 1),
            this.bringToFront()
        },
        onRemove: function(t) {
            t._fadeAnimated ? (ae(this._container, 0),
            this._removeTimeout = setTimeout(M(Jt, void 0, this._container), 200)) : Jt(this._container)
        },
        getLatLng: function() {
            return this._latlng
        },
        setLatLng: function(t) {
            return this._latlng = H(t),
            this._map && (this._updatePosition(),
            this._adjustPan()),
            this
        },
        getContent: function() {
            return this._content
        },
        setContent: function(t) {
            return this._content = t,
            this.update(),
            this
        },
        getElement: function() {
            return this._container
        },
        update: function() {
            this._map && (this._container.style.visibility = "hidden",
            this._updateContent(),
            this._updateLayout(),
            this._updatePosition(),
            this._container.style.visibility = "",
            this._adjustPan())
        },
        getEvents: function() {
            var t = {
                zoom: this._updatePosition,
                viewreset: this._updatePosition
            };
            return this._zoomAnimated && (t.zoomanim = this._animateZoom),
            t
        },
        isOpen: function() {
            return !!this._map && this._map.hasLayer(this)
        },
        bringToFront: function() {
            return this._map && te(this._container),
            this
        },
        bringToBack: function() {
            return this._map && ee(this._container),
            this
        },
        _prepareOpen: function(t, e, i) {
            if (e instanceof ai || (i = e,
            e = t),
            e instanceof li)
                for (var n in t._layers) {
                    e = t._layers[n];
                    break
                }
            if (!i)
                if (e.getCenter)
                    i = e.getCenter();
                else {
                    if (!e.getLatLng)
                        throw new Error("Unable to get source layer LatLng.");
                    i = e.getLatLng()
                }
            return this._source = e,
            this.update(),
            i
        },
        _updateContent: function() {
            if (this._content) {
                var t = this._contentNode
                  , e = "function" == typeof this._content ? this._content(this._source || this) : this._content;
                if ("string" == typeof e)
                    t.innerHTML = e;
                else {
                    for (; t.hasChildNodes(); )
                        t.removeChild(t.firstChild);
                    t.appendChild(e)
                }
                this.fire("contentupdate")
            }
        },
        _updatePosition: function() {
            var t, e, i;
            this._map && (t = this._map.latLngToLayerPoint(this._latlng),
            i = O(this.options.offset),
            e = this._getAnchor(),
            this._zoomAnimated ? ue(this._container, t.add(e)) : i = i.add(t).add(e),
            e = this._containerBottom = -i.y,
            i = this._containerLeft = -Math.round(this._containerWidth / 2) + i.x,
            this._container.style.bottom = e + "px",
            this._container.style.left = i + "px")
        },
        _getAnchor: function() {
            return [0, 0]
        }
    })
      , Ii = zi.extend({
        options: {
            maxWidth: 300,
            minWidth: 50,
            maxHeight: null,
            autoPan: !0,
            autoPanPaddingTopLeft: null,
            autoPanPaddingBottomRight: null,
            autoPanPadding: [5, 5],
            keepInView: !1,
            closeButton: !0,
            autoClose: !0,
            closeOnEscapeKey: !0,
            className: ""
        },
        openOn: function(t) {
            return t.openPopup(this),
            this
        },
        onAdd: function(t) {
            zi.prototype.onAdd.call(this, t),
            t.fire("popupopen", {
                popup: this
            }),
            this._source && (this._source.fire("popupopen", {
                popup: this
            }, !0),
            this._source instanceof pi || this._source.on("preclick", Pe))
        },
        onRemove: function(t) {
            zi.prototype.onRemove.call(this, t),
            t.fire("popupclose", {
                popup: this
            }),
            this._source && (this._source.fire("popupclose", {
                popup: this
            }, !0),
            this._source instanceof pi || this._source.off("preclick", Pe))
        },
        getEvents: function() {
            var t = zi.prototype.getEvents.call(this);
            return (void 0 !== this.options.closeOnClick ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t.preclick = this._close),
            this.options.keepInView && (t.moveend = this._adjustPan),
            t
        },
        _close: function() {
            this._map && this._map.closePopup(this)
        },
        _initLayout: function() {
            var t = "leaflet-popup"
              , e = this._container = $t("div", t + " " + (this.options.className || "") + " leaflet-zoom-animated")
              , i = this._wrapper = $t("div", t + "-content-wrapper", e);
            this._contentNode = $t("div", t + "-content", i),
            Ce(e),
            Te(this._contentNode),
            ye(e, "contextmenu", Pe),
            this._tipContainer = $t("div", t + "-tip-container", e),
            this._tip = $t("div", t + "-tip", this._tipContainer),
            this.options.closeButton && ((e = this._closeButton = $t("a", t + "-close-button", e)).href = "#close",
            e.innerHTML = "&#215;",
            ye(e, "click", this._onCloseButtonClick, this))
        },
        _updateLayout: function() {
            var t = this._contentNode
              , e = t.style;
            e.width = "",
            e.whiteSpace = "nowrap";
            var i = t.offsetWidth
              , i = Math.min(i, this.options.maxWidth);
            i = Math.max(i, this.options.minWidth),
            e.width = i + 1 + "px",
            e.whiteSpace = "",
            e.height = "";
            var n = t.offsetHeight
              , o = this.options.maxHeight
              , i = "leaflet-popup-scrolled";
            o && o < n ? (e.height = o + "px",
            ne(t, i)) : oe(t, i),
            this._containerWidth = this._container.offsetWidth
        },
        _animateZoom: function(t) {
            var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center)
              , t = this._getAnchor();
            ue(this._container, e.add(t))
        },
        _adjustPan: function() {
            var t, e, i, n, o, s, r, a, h;
            this.options.autoPan && (this._map._panAnim && this._map._panAnim.stop(),
            t = this._map,
            r = parseInt(Xt(this._container, "marginBottom"), 10) || 0,
            e = this._container.offsetHeight + r,
            i = this._containerWidth,
            (a = new z(this._containerLeft,-e - this._containerBottom))._add(ce(this._container)),
            n = t.layerPointToContainerPoint(a),
            h = O(this.options.autoPanPadding),
            o = O(this.options.autoPanPaddingTopLeft || h),
            s = O(this.options.autoPanPaddingBottomRight || h),
            r = t.getSize(),
            h = a = 0,
            n.x + i + s.x > r.x && (a = n.x + i - r.x + s.x),
            n.x - a - o.x < 0 && (a = n.x - o.x),
            n.y + e + s.y > r.y && (h = n.y + e - r.y + s.y),
            n.y - h - o.y < 0 && (h = n.y - o.y),
            (a || h) && t.fire("autopanstart").panBy([a, h]))
        },
        _onCloseButtonClick: function(t) {
            this._close(),
            Se(t)
        },
        _getAnchor: function() {
            return O(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0])
        }
    });
    Ne.mergeOptions({
        closePopupOnClick: !0
    }),
    Ne.include({
        openPopup: function(t, e, i) {
            return t instanceof Ii || (t = new Ii(i).setContent(t)),
            e && t.setLatLng(e),
            this.hasLayer(t) ? this : (this._popup && this._popup.options.autoClose && this.closePopup(),
            this._popup = t,
            this.addLayer(t))
        },
        closePopup: function(t) {
            return t && t !== this._popup || (t = this._popup,
            this._popup = null),
            t && this.removeLayer(t),
            this
        }
    }),
    ai.include({
        bindPopup: function(t, e) {
            return t instanceof Ii ? (c(t, e),
            (this._popup = t)._source = this) : (this._popup && !e || (this._popup = new Ii(e,this)),
            this._popup.setContent(t)),
            this._popupHandlersAdded || (this.on({
                click: this._openPopup,
                keypress: this._onKeyPress,
                remove: this.closePopup,
                move: this._movePopup
            }),
            this._popupHandlersAdded = !0),
            this
        },
        unbindPopup: function() {
            return this._popup && (this.off({
                click: this._openPopup,
                keypress: this._onKeyPress,
                remove: this.closePopup,
                move: this._movePopup
            }),
            this._popupHandlersAdded = !1,
            this._popup = null),
            this
        },
        openPopup: function(t, e) {
            return this._popup && this._map && (e = this._popup._prepareOpen(this, t, e),
            this._map.openPopup(this._popup, e)),
            this
        },
        closePopup: function() {
            return this._popup && this._popup._close(),
            this
        },
        togglePopup: function(t) {
            return this._popup && (this._popup._map ? this.closePopup() : this.openPopup(t)),
            this
        },
        isPopupOpen: function() {
            return !!this._popup && this._popup.isOpen()
        },
        setPopupContent: function(t) {
            return this._popup && this._popup.setContent(t),
            this
        },
        getPopup: function() {
            return this._popup
        },
        _openPopup: function(t) {
            var e = t.layer || t.target;
            this._popup && this._map && (Se(t),
            e instanceof pi ? this.openPopup(t.layer || t.target, t.latlng) : this._map.hasLayer(this._popup) && this._popup._source === e ? this.closePopup() : this.openPopup(e, t.latlng))
        },
        _movePopup: function(t) {
            this._popup.setLatLng(t.latlng)
        },
        _onKeyPress: function(t) {
            13 === t.originalEvent.keyCode && this._openPopup(t)
        }
    });
    var Oi = zi.extend({
        options: {
            pane: "tooltipPane",
            offset: [0, 0],
            direction: "auto",
            permanent: !1,
            sticky: !1,
            interactive: !1,
            opacity: .9
        },
        onAdd: function(t) {
            zi.prototype.onAdd.call(this, t),
            this.setOpacity(this.options.opacity),
            t.fire("tooltipopen", {
                tooltip: this
            }),
            this._source && this._source.fire("tooltipopen", {
                tooltip: this
            }, !0)
        },
        onRemove: function(t) {
            zi.prototype.onRemove.call(this, t),
            t.fire("tooltipclose", {
                tooltip: this
            }),
            this._source && this._source.fire("tooltipclose", {
                tooltip: this
            }, !0)
        },
        getEvents: function() {
            var t = zi.prototype.getEvents.call(this);
            return Lt && !this.options.permanent && (t.preclick = this._close),
            t
        },
        _close: function() {
            this._map && this._map.closeTooltip(this)
        },
        _initLayout: function() {
            var t = "leaflet-tooltip " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
            this._contentNode = this._container = $t("div", t)
        },
        _updateLayout: function() {},
        _adjustPan: function() {},
        _setPosition: function(t) {
            var e, i = this._map, n = this._container, o = i.latLngToContainerPoint(i.getCenter()), s = i.layerPointToContainerPoint(t), r = this.options.direction, a = n.offsetWidth, h = n.offsetHeight, l = O(this.options.offset), i = this._getAnchor(), h = "top" === r ? (e = a / 2,
            h) : "bottom" === r ? (e = a / 2,
            0) : (e = "center" === r ? a / 2 : "right" === r ? 0 : "left" === r ? a : s.x < o.x ? (r = "right",
            0) : (r = "left",
            a + 2 * (l.x + i.x)),
            h / 2);
            t = t.subtract(O(e, h, !0)).add(l).add(i),
            oe(n, "leaflet-tooltip-right"),
            oe(n, "leaflet-tooltip-left"),
            oe(n, "leaflet-tooltip-top"),
            oe(n, "leaflet-tooltip-bottom"),
            ne(n, "leaflet-tooltip-" + r),
            ue(n, t)
        },
        _updatePosition: function() {
            var t = this._map.latLngToLayerPoint(this._latlng);
            this._setPosition(t)
        },
        setOpacity: function(t) {
            this.options.opacity = t,
            this._container && ae(this._container, t)
        },
        _animateZoom: function(t) {
            t = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
            this._setPosition(t)
        },
        _getAnchor: function() {
            return O(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0])
        }
    });
    Ne.include({
        openTooltip: function(t, e, i) {
            return t instanceof Oi || (t = new Oi(i).setContent(t)),
            e && t.setLatLng(e),
            this.hasLayer(t) ? this : this.addLayer(t)
        },
        closeTooltip: function(t) {
            return t && this.removeLayer(t),
            this
        }
    }),
    ai.include({
        bindTooltip: function(t, e) {
            return t instanceof Oi ? (c(t, e),
            (this._tooltip = t)._source = this) : (this._tooltip && !e || (this._tooltip = new Oi(e,this)),
            this._tooltip.setContent(t)),
            this._initTooltipInteractions(),
            this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(),
            this
        },
        unbindTooltip: function() {
            return this._tooltip && (this._initTooltipInteractions(!0),
            this.closeTooltip(),
            this._tooltip = null),
            this
        },
        _initTooltipInteractions: function(t) {
            var e, i;
            !t && this._tooltipHandlersAdded || (e = t ? "off" : "on",
            i = {
                remove: this.closeTooltip,
                move: this._moveTooltip
            },
            this._tooltip.options.permanent ? i.add = this._openTooltip : (i.mouseover = this._openTooltip,
            i.mouseout = this.closeTooltip,
            this._tooltip.options.sticky && (i.mousemove = this._moveTooltip),
            Lt && (i.click = this._openTooltip)),
            this[e](i),
            this._tooltipHandlersAdded = !t)
        },
        openTooltip: function(t, e) {
            return this._tooltip && this._map && (e = this._tooltip._prepareOpen(this, t, e),
            this._map.openTooltip(this._tooltip, e),
            this._tooltip.options.interactive && this._tooltip._container && (ne(this._tooltip._container, "leaflet-clickable"),
            this.addInteractiveTarget(this._tooltip._container))),
            this
        },
        closeTooltip: function() {
            return this._tooltip && (this._tooltip._close(),
            this._tooltip.options.interactive && this._tooltip._container && (oe(this._tooltip._container, "leaflet-clickable"),
            this.removeInteractiveTarget(this._tooltip._container))),
            this
        },
        toggleTooltip: function(t) {
            return this._tooltip && (this._tooltip._map ? this.closeTooltip() : this.openTooltip(t)),
            this
        },
        isTooltipOpen: function() {
            return this._tooltip.isOpen()
        },
        setTooltipContent: function(t) {
            return this._tooltip && this._tooltip.setContent(t),
            this
        },
        getTooltip: function() {
            return this._tooltip
        },
        _openTooltip: function(t) {
            var e = t.layer || t.target;
            this._tooltip && this._map && this.openTooltip(e, this._tooltip.options.sticky ? t.latlng : void 0)
        },
        _moveTooltip: function(t) {
            var e = t.latlng;
            this._tooltip.options.sticky && t.originalEvent && (t = this._map.mouseEventToContainerPoint(t.originalEvent),
            t = this._map.containerPointToLayerPoint(t),
            e = this._map.layerPointToLatLng(t)),
            this._tooltip.setLatLng(e)
        }
    });
    var Ai = ui.extend({
        options: {
            iconSize: [12, 12],
            html: !1,
            bgPos: null,
            className: "leaflet-div-icon"
        },
        createIcon: function(t) {
            var e = t && "DIV" === t.tagName ? t : document.createElement("div")
              , t = this.options;
            return t.html instanceof Element ? (Qt(e),
            e.appendChild(t.html)) : e.innerHTML = !1 !== t.html ? t.html : "",
            t.bgPos && (t = O(t.bgPos),
            e.style.backgroundPosition = -t.x + "px " + -t.y + "px"),
            this._setIconStyles(e, "icon"),
            e
        },
        createShadow: function() {
            return null
        }
    });
    ui.Default = ci;
    var Zi = ai.extend({
        options: {
            tileSize: 256,
            opacity: 1,
            updateWhenIdle: j,
            updateWhenZooming: !0,
            updateInterval: 200,
            zIndex: 1,
            bounds: null,
            minZoom: 0,
            maxZoom: void 0,
            maxNativeZoom: void 0,
            minNativeZoom: void 0,
            noWrap: !1,
            pane: "tilePane",
            className: "",
            keepBuffer: 2
        },
        initialize: function(t) {
            c(this, t)
        },
        onAdd: function() {
            this._initContainer(),
            this._levels = {},
            this._tiles = {},
            this._resetView(),
            this._update()
        },
        beforeAdd: function(t) {
            t._addZoomLimit(this)
        },
        onRemove: function(t) {
            this._removeAllTiles(),
            Jt(this._container),
            t._removeZoomLimit(this),
            this._container = null,
            this._tileZoom = void 0
        },
        bringToFront: function() {
            return this._map && (te(this._container),
            this._setAutoZIndex(Math.max)),
            this
        },
        bringToBack: function() {
            return this._map && (ee(this._container),
            this._setAutoZIndex(Math.min)),
            this
        },
        getContainer: function() {
            return this._container
        },
        setOpacity: function(t) {
            return this.options.opacity = t,
            this._updateOpacity(),
            this
        },
        setZIndex: function(t) {
            return this.options.zIndex = t,
            this._updateZIndex(),
            this
        },
        isLoading: function() {
            return this._loading
        },
        redraw: function() {
            return this._map && (this._removeAllTiles(),
            this._update()),
            this
        },
        getEvents: function() {
            var t = {
                viewprereset: this._invalidateAll,
                viewreset: this._resetView,
                zoom: this._resetView,
                moveend: this._onMoveEnd
            };
            return this.options.updateWhenIdle || (this._onMove || (this._onMove = n(this._onMoveEnd, this.options.updateInterval, this)),
            t.move = this._onMove),
            this._zoomAnimated && (t.zoomanim = this._animateZoom),
            t
        },
        createTile: function() {
            return document.createElement("div")
        },
        getTileSize: function() {
            var t = this.options.tileSize;
            return t instanceof z ? t : new z(t,t)
        },
        _updateZIndex: function() {
            this._container && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._container.style.zIndex = this.options.zIndex)
        },
        _setAutoZIndex: function(t) {
            for (var e, i = this.getPane().children, n = -t(-1 / 0, 1 / 0), o = 0, s = i.length; o < s; o++)
                e = i[o].style.zIndex,
                i[o] !== this._container && e && (n = t(n, +e));
            isFinite(n) && (this.options.zIndex = n + t(-1, 1),
            this._updateZIndex())
        },
        _updateOpacity: function() {
            if (this._map && !Q) {
                ae(this._container, this.options.opacity);
                var t, e = +new Date, i = !1, n = !1;
                for (t in this._tiles) {
                    var o, s = this._tiles[t];
                    s.current && s.loaded && (o = Math.min(1, (e - s.loaded) / 200),
                    ae(s.el, o),
                    o < 1 ? i = !0 : (s.active ? n = !0 : this._onOpaqueTile(s),
                    s.active = !0))
                }
                n && !this._noPrune && this._pruneTiles(),
                i && (T(this._fadeFrame),
                this._fadeFrame = k(this._updateOpacity, this))
            }
        },
        _onOpaqueTile: a,
        _initContainer: function() {
            this._container || (this._container = $t("div", "leaflet-layer " + (this.options.className || "")),
            this._updateZIndex(),
            this.options.opacity < 1 && this._updateOpacity(),
            this.getPane().appendChild(this._container))
        },
        _updateLevels: function() {
            var t = this._tileZoom
              , e = this.options.maxZoom;
            if (void 0 !== t) {
                for (var i in this._levels)
                    i = Number(i),
                    this._levels[i].el.children.length || i === t ? (this._levels[i].el.style.zIndex = e - Math.abs(t - i),
                    this._onUpdateLevel(i)) : (Jt(this._levels[i].el),
                    this._removeTilesAtZoom(i),
                    this._onRemoveLevel(i),
                    delete this._levels[i]);
                var n = this._levels[t]
                  , o = this._map;
                return n || ((n = this._levels[t] = {}).el = $t("div", "leaflet-tile-container leaflet-zoom-animated", this._container),
                n.el.style.zIndex = e,
                n.origin = o.project(o.unproject(o.getPixelOrigin()), t).round(),
                n.zoom = t,
                this._setZoomTransform(n, o.getCenter(), o.getZoom()),
                a(n.el.offsetWidth),
                this._onCreateLevel(n)),
                this._level = n
            }
        },
        _onUpdateLevel: a,
        _onRemoveLevel: a,
        _onCreateLevel: a,
        _pruneTiles: function() {
            if (this._map) {
                var t, e, i, n = this._map.getZoom();
                if (n > this.options.maxZoom || n < this.options.minZoom)
                    this._removeAllTiles();
                else {
                    for (t in this._tiles)
                        (i = this._tiles[t]).retain = i.current;
                    for (t in this._tiles)
                        (i = this._tiles[t]).current && !i.active && (e = i.coords,
                        this._retainParent(e.x, e.y, e.z, e.z - 5) || this._retainChildren(e.x, e.y, e.z, e.z + 2));
                    for (t in this._tiles)
                        this._tiles[t].retain || this._removeTile(t)
                }
            }
        },
        _removeTilesAtZoom: function(t) {
            for (var e in this._tiles)
                this._tiles[e].coords.z === t && this._removeTile(e)
        },
        _removeAllTiles: function() {
            for (var t in this._tiles)
                this._removeTile(t)
        },
        _invalidateAll: function() {
            for (var t in this._levels)
                Jt(this._levels[t].el),
                this._onRemoveLevel(Number(t)),
                delete this._levels[t];
            this._removeAllTiles(),
            this._tileZoom = void 0
        },
        _retainParent: function(t, e, i, n) {
            var o = Math.floor(t / 2)
              , t = Math.floor(e / 2)
              , e = i - 1
              , i = new z(+o,+t);
            i.z = +e;
            i = this._tileCoordsToKey(i),
            i = this._tiles[i];
            return i && i.active ? i.retain = !0 : (i && i.loaded && (i.retain = !0),
            n < e && this._retainParent(o, t, e, n))
        },
        _retainChildren: function(t, e, i, n) {
            for (var o = 2 * t; o < 2 * t + 2; o++)
                for (var s = 2 * e; s < 2 * e + 2; s++) {
                    var r = new z(o,s);
                    r.z = i + 1;
                    r = this._tileCoordsToKey(r),
                    r = this._tiles[r];
                    r && r.active ? r.retain = !0 : (r && r.loaded && (r.retain = !0),
                    i + 1 < n && this._retainChildren(o, s, i + 1, n))
                }
        },
        _resetView: function(t) {
            t = t && (t.pinch || t.flyTo);
            this._setView(this._map.getCenter(), this._map.getZoom(), t, t)
        },
        _animateZoom: function(t) {
            this._setView(t.center, t.zoom, !0, t.noUpdate)
        },
        _clampZoom: function(t) {
            var e = this.options;
            return void 0 !== e.minNativeZoom && t < e.minNativeZoom ? e.minNativeZoom : void 0 !== e.maxNativeZoom && e.maxNativeZoom < t ? e.maxNativeZoom : t
        },
        _setView: function(t, e, i, n) {
            var o = Math.round(e)
              , o = void 0 !== this.options.maxZoom && o > this.options.maxZoom || void 0 !== this.options.minZoom && o < this.options.minZoom ? void 0 : this._clampZoom(o)
              , s = this.options.updateWhenZooming && o !== this._tileZoom;
            n && !s || (this._tileZoom = o,
            this._abortLoading && this._abortLoading(),
            this._updateLevels(),
            this._resetGrid(),
            void 0 !== o && this._update(t),
            i || this._pruneTiles(),
            this._noPrune = !!i),
            this._setZoomTransforms(t, e)
        },
        _setZoomTransforms: function(t, e) {
            for (var i in this._levels)
                this._setZoomTransform(this._levels[i], t, e)
        },
        _setZoomTransform: function(t, e, i) {
            var n = this._map.getZoomScale(i, t.zoom)
              , i = t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(e, i)).round();
            mt ? le(t.el, i, n) : ue(t.el, i)
        },
        _resetGrid: function() {
            var t = this._map
              , e = t.options.crs
              , i = this._tileSize = this.getTileSize()
              , n = this._tileZoom
              , o = this._map.getPixelWorldBounds(this._tileZoom);
            o && (this._globalTileRange = this._pxBoundsToTileRange(o)),
            this._wrapX = e.wrapLng && !this.options.noWrap && [Math.floor(t.project([0, e.wrapLng[0]], n).x / i.x), Math.ceil(t.project([0, e.wrapLng[1]], n).x / i.y)],
            this._wrapY = e.wrapLat && !this.options.noWrap && [Math.floor(t.project([e.wrapLat[0], 0], n).y / i.x), Math.ceil(t.project([e.wrapLat[1], 0], n).y / i.y)]
        },
        _onMoveEnd: function() {
            this._map && !this._map._animatingZoom && this._update()
        },
        _getTiledPixelBounds: function(t) {
            var e = this._map
              , i = e._animatingZoom ? Math.max(e._animateToZoom, e.getZoom()) : e.getZoom()
              , i = e.getZoomScale(i, this._tileZoom)
              , t = e.project(t, this._tileZoom).floor()
              , i = e.getSize().divideBy(2 * i);
            return new A(t.subtract(i),t.add(i))
        },
        _update: function(t) {
            var e = this._map;
            if (e) {
                var i = this._clampZoom(e.getZoom());
                if (void 0 === t && (t = e.getCenter()),
                void 0 !== this._tileZoom) {
                    var n, e = this._getTiledPixelBounds(t), o = this._pxBoundsToTileRange(e), s = o.getCenter(), r = [], e = this.options.keepBuffer, a = new A(o.getBottomLeft().subtract([e, -e]),o.getTopRight().add([e, -e]));
                    if (!(isFinite(o.min.x) && isFinite(o.min.y) && isFinite(o.max.x) && isFinite(o.max.y)))
                        throw new Error("Attempted to load an infinite number of tiles");
                    for (n in this._tiles) {
                        var h = this._tiles[n].coords;
                        h.z === this._tileZoom && a.contains(new z(h.x,h.y)) || (this._tiles[n].current = !1)
                    }
                    if (1 < Math.abs(i - this._tileZoom))
                        this._setView(t, i);
                    else {
                        for (var l = o.min.y; l <= o.max.y; l++)
                            for (var u = o.min.x; u <= o.max.x; u++) {
                                var c, d = new z(u,l);
                                d.z = this._tileZoom,
                                this._isValidTile(d) && ((c = this._tiles[this._tileCoordsToKey(d)]) ? c.current = !0 : r.push(d))
                            }
                        if (r.sort(function(t, e) {
                            return t.distanceTo(s) - e.distanceTo(s)
                        }),
                        0 !== r.length) {
                            this._loading || (this._loading = !0,
                            this.fire("loading"));
                            for (var _ = document.createDocumentFragment(), u = 0; u < r.length; u++)
                                this._addTile(r[u], _);
                            this._level.el.appendChild(_)
                        }
                    }
                }
            }
        },
        _isValidTile: function(t) {
            var e = this._map.options.crs;
            if (!e.infinite) {
                var i = this._globalTileRange;
                if (!e.wrapLng && (t.x < i.min.x || t.x > i.max.x) || !e.wrapLat && (t.y < i.min.y || t.y > i.max.y))
                    return !1
            }
            if (!this.options.bounds)
                return !0;
            t = this._tileCoordsToBounds(t);
            return R(this.options.bounds).overlaps(t)
        },
        _keyToBounds: function(t) {
            return this._tileCoordsToBounds(this._keyToTileCoords(t))
        },
        _tileCoordsToNwSe: function(t) {
            var e = this._map
              , i = this.getTileSize()
              , n = t.scaleBy(i)
              , i = n.add(i);
            return [e.unproject(n, t.z), e.unproject(i, t.z)]
        },
        _tileCoordsToBounds: function(t) {
            t = this._tileCoordsToNwSe(t),
            t = new B(t[0],t[1]);
            return t = !this.options.noWrap ? this._map.wrapLatLngBounds(t) : t
        },
        _tileCoordsToKey: function(t) {
            return t.x + ":" + t.y + ":" + t.z
        },
        _keyToTileCoords: function(t) {
            var e = t.split(":")
              , t = new z(+e[0],+e[1]);
            return t.z = +e[2],
            t
        },
        _removeTile: function(t) {
            var e = this._tiles[t];
            e && (Jt(e.el),
            delete this._tiles[t],
            this.fire("tileunload", {
                tile: e.el,
                coords: this._keyToTileCoords(t)
            }))
        },
        _initTile: function(t) {
            ne(t, "leaflet-tile");
            var e = this.getTileSize();
            t.style.width = e.x + "px",
            t.style.height = e.y + "px",
            t.onselectstart = a,
            t.onmousemove = a,
            Q && this.options.opacity < 1 && ae(t, this.options.opacity),
            it && !nt && (t.style.WebkitBackfaceVisibility = "hidden")
        },
        _addTile: function(t, e) {
            var i = this._getTilePos(t)
              , n = this._tileCoordsToKey(t)
              , o = this.createTile(this._wrapCoords(t), M(this._tileReady, this, t));
            this._initTile(o),
            this.createTile.length < 2 && k(M(this._tileReady, this, t, null, o)),
            ue(o, i),
            this._tiles[n] = {
                el: o,
                coords: t,
                current: !0
            },
            e.appendChild(o),
            this.fire("tileloadstart", {
                tile: o,
                coords: t
            })
        },
        _tileReady: function(t, e, i) {
            e && this.fire("tileerror", {
                error: e,
                tile: i,
                coords: t
            });
            var n = this._tileCoordsToKey(t);
            (i = this._tiles[n]) && (i.loaded = +new Date,
            this._map._fadeAnimated ? (ae(i.el, 0),
            T(this._fadeFrame),
            this._fadeFrame = k(this._updateOpacity, this)) : (i.active = !0,
            this._pruneTiles()),
            e || (ne(i.el, "leaflet-tile-loaded"),
            this.fire("tileload", {
                tile: i.el,
                coords: t
            })),
            this._noTilesToLoad() && (this._loading = !1,
            this.fire("load"),
            Q || !this._map._fadeAnimated ? k(this._pruneTiles, this) : setTimeout(M(this._pruneTiles, this), 250)))
        },
        _getTilePos: function(t) {
            return t.scaleBy(this.getTileSize()).subtract(this._level.origin)
        },
        _wrapCoords: function(t) {
            var e = new z(this._wrapX ? o(t.x, this._wrapX) : t.x,this._wrapY ? o(t.y, this._wrapY) : t.y);
            return e.z = t.z,
            e
        },
        _pxBoundsToTileRange: function(t) {
            var e = this.getTileSize();
            return new A(t.min.unscaleBy(e).floor(),t.max.unscaleBy(e).ceil().subtract([1, 1]))
        },
        _noTilesToLoad: function() {
            for (var t in this._tiles)
                if (!this._tiles[t].loaded)
                    return !1;
            return !0
        }
    })
      , Bi = Zi.extend({
        options: {
            minZoom: 0,
            maxZoom: 18,
            subdomains: "abc",
            errorTileUrl: "",
            zoomOffset: 0,
            tms: !1,
            zoomReverse: !1,
            detectRetina: !1,
            crossOrigin: !1
        },
        initialize: function(t, e) {
            this._url = t,
            (e = c(this, e)).detectRetina && bt && 0 < e.maxZoom && (e.tileSize = Math.floor(e.tileSize / 2),
            e.zoomReverse ? (e.zoomOffset--,
            e.minZoom++) : (e.zoomOffset++,
            e.maxZoom--),
            e.minZoom = Math.max(0, e.minZoom)),
            "string" == typeof e.subdomains && (e.subdomains = e.subdomains.split("")),
            it || this.on("tileunload", this._onTileRemove)
        },
        setUrl: function(t, e) {
            return this._url === t && void 0 === e && (e = !0),
            this._url = t,
            e || this.redraw(),
            this
        },
        createTile: function(t, e) {
            var i = document.createElement("img");
            return ye(i, "load", M(this._tileOnLoad, this, e, i)),
            ye(i, "error", M(this._tileOnError, this, e, i)),
            !this.options.crossOrigin && "" !== this.options.crossOrigin || (i.crossOrigin = !0 === this.options.crossOrigin ? "" : this.options.crossOrigin),
            i.alt = "",
            i.setAttribute("role", "presentation"),
            i.src = this.getTileUrl(t),
            i
        },
        getTileUrl: function(t) {
            var e = {
                r: bt ? "@2x" : "",
                s: this._getSubdomain(t),
                x: t.x,
                y: t.y,
                z: this._getZoomForUrl()
            };
            return this._map && !this._map.options.crs.infinite && (t = this._globalTileRange.max.y - t.y,
            this.options.tms && (e.y = t),
            e["-y"] = t),
            p(this._url, h(e, this.options))
        },
        _tileOnLoad: function(t, e) {
            Q ? setTimeout(M(t, this, null, e), 0) : t(null, e)
        },
        _tileOnError: function(t, e, i) {
            var n = this.options.errorTileUrl;
            n && e.getAttribute("src") !== n && (e.src = n),
            t(i, e)
        },
        _onTileRemove: function(t) {
            t.tile.onload = null
        },
        _getZoomForUrl: function() {
            var t = this._tileZoom
              , e = this.options.maxZoom;
            return (t = this.options.zoomReverse ? e - t : t) + this.options.zoomOffset
        },
        _getSubdomain: function(t) {
            t = Math.abs(t.x + t.y) % this.options.subdomains.length;
            return this.options.subdomains[t]
        },
        _abortLoading: function() {
            var t, e;
            for (t in this._tiles)
                this._tiles[t].coords.z !== this._tileZoom && ((e = this._tiles[t].el).onload = a,
                e.onerror = a,
                e.complete || (e.src = g,
                Jt(e),
                delete this._tiles[t]))
        },
        _removeTile: function(t) {
            var e = this._tiles[t];
            if (e)
                return st || e.el.setAttribute("src", g),
                Zi.prototype._removeTile.call(this, t)
        },
        _tileReady: function(t, e, i) {
            if (this._map && (!i || i.getAttribute("src") !== g))
                return Zi.prototype._tileReady.call(this, t, e, i)
        }
    });
    function Ri(t, e) {
        return new Bi(t,e)
    }
    var Ni = Bi.extend({
        defaultWmsParams: {
            service: "WMS",
            request: "GetMap",
            layers: "",
            styles: "",
            format: "image/jpeg",
            transparent: !1,
            version: "1.1.1"
        },
        options: {
            crs: null,
            uppercase: !1
        },
        initialize: function(t, e) {
            this._url = t;
            var i, n = h({}, this.defaultWmsParams);
            for (i in e)
                i in this.options || (n[i] = e[i]);
            var o = (e = c(this, e)).detectRetina && bt ? 2 : 1
              , t = this.getTileSize();
            n.width = t.x * o,
            n.height = t.y * o,
            this.wmsParams = n
        },
        onAdd: function(t) {
            this._crs = this.options.crs || t.options.crs,
            this._wmsVersion = parseFloat(this.wmsParams.version);
            var e = 1.3 <= this._wmsVersion ? "crs" : "srs";
            this.wmsParams[e] = this._crs.code,
            Bi.prototype.onAdd.call(this, t)
        },
        getTileUrl: function(t) {
            var e = this._tileCoordsToNwSe(t)
              , i = this._crs
              , i = Z(i.project(e[0]), i.project(e[1]))
              , e = i.min
              , i = i.max
              , i = (1.3 <= this._wmsVersion && this._crs === ri ? [e.y, e.x, i.y, i.x] : [e.x, e.y, i.x, i.y]).join(",")
              , t = Bi.prototype.getTileUrl.call(this, t);
            return t + d(this.wmsParams, t, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + i
        },
        setParams: function(t, e) {
            return h(this.wmsParams, t),
            e || this.redraw(),
            this
        }
    });
    Bi.WMS = Ni,
    Ri.wms = function(t, e) {
        return new Ni(t,e)
    }
    ;
    var Hi = ai.extend({
        options: {
            padding: .1,
            tolerance: 0
        },
        initialize: function(t) {
            c(this, t),
            P(this),
            this._layers = this._layers || {}
        },
        onAdd: function() {
            this._container || (this._initContainer(),
            this._zoomAnimated && ne(this._container, "leaflet-zoom-animated")),
            this.getPane().appendChild(this._container),
            this._update(),
            this.on("update", this._updatePaths, this)
        },
        onRemove: function() {
            this.off("update", this._updatePaths, this),
            this._destroyContainer()
        },
        getEvents: function() {
            var t = {
                viewreset: this._reset,
                zoom: this._onZoom,
                moveend: this._update,
                zoomend: this._onZoomEnd
            };
            return this._zoomAnimated && (t.zoomanim = this._onAnimZoom),
            t
        },
        _onAnimZoom: function(t) {
            this._updateTransform(t.center, t.zoom)
        },
        _onZoom: function() {
            this._updateTransform(this._map.getCenter(), this._map.getZoom())
        },
        _updateTransform: function(t, e) {
            var i = this._map.getZoomScale(e, this._zoom)
              , n = ce(this._container)
              , o = this._map.getSize().multiplyBy(.5 + this.options.padding)
              , s = this._map.project(this._center, e)
              , s = this._map.project(t, e).subtract(s)
              , s = o.multiplyBy(-i).add(n).add(o).subtract(s);
            mt ? le(this._container, s, i) : ue(this._container, s)
        },
        _reset: function() {
            for (var t in this._update(),
            this._updateTransform(this._center, this._zoom),
            this._layers)
                this._layers[t]._reset()
        },
        _onZoomEnd: function() {
            for (var t in this._layers)
                this._layers[t]._project()
        },
        _updatePaths: function() {
            for (var t in this._layers)
                this._layers[t]._update()
        },
        _update: function() {
            var t = this.options.padding
              , e = this._map.getSize()
              , i = this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();
            this._bounds = new A(i,i.add(e.multiplyBy(1 + 2 * t)).round()),
            this._center = this._map.getCenter(),
            this._zoom = this._map.getZoom()
        }
    })
      , Gi = Hi.extend({
        getEvents: function() {
            var t = Hi.prototype.getEvents.call(this);
            return t.viewprereset = this._onViewPreReset,
            t
        },
        _onViewPreReset: function() {
            this._postponeUpdatePaths = !0
        },
        onAdd: function() {
            Hi.prototype.onAdd.call(this),
            this._draw()
        },
        _initContainer: function() {
            var t = this._container = document.createElement("canvas");
            ye(t, "mousemove", this._onMouseMove, this),
            ye(t, "click dblclick mousedown mouseup contextmenu", this._onClick, this),
            ye(t, "mouseout", this._handleMouseOut, this),
            this._ctx = t.getContext("2d")
        },
        _destroyContainer: function() {
            T(this._redrawRequest),
            delete this._ctx,
            Jt(this._container),
            we(this._container),
            delete this._container
        },
        _updatePaths: function() {
            if (!this._postponeUpdatePaths) {
                for (var t in this._redrawBounds = null,
                this._layers)
                    this._layers[t]._update();
                this._redraw()
            }
        },
        _update: function() {
            var t, e, i, n;
            this._map._animatingZoom && this._bounds || (Hi.prototype._update.call(this),
            t = this._bounds,
            e = this._container,
            i = t.getSize(),
            n = bt ? 2 : 1,
            ue(e, t.min),
            e.width = n * i.x,
            e.height = n * i.y,
            e.style.width = i.x + "px",
            e.style.height = i.y + "px",
            bt && this._ctx.scale(2, 2),
            this._ctx.translate(-t.min.x, -t.min.y),
            this.fire("update"))
        },
        _reset: function() {
            Hi.prototype._reset.call(this),
            this._postponeUpdatePaths && (this._postponeUpdatePaths = !1,
            this._updatePaths())
        },
        _initPath: function(t) {
            this._updateDashArray(t);
            t = (this._layers[P(t)] = t)._order = {
                layer: t,
                prev: this._drawLast,
                next: null
            };
            this._drawLast && (this._drawLast.next = t),
            this._drawLast = t,
            this._drawFirst = this._drawFirst || this._drawLast
        },
        _addPath: function(t) {
            this._requestRedraw(t)
        },
        _removePath: function(t) {
            var e = t._order
              , i = e.next
              , e = e.prev;
            i ? i.prev = e : this._drawLast = e,
            e ? e.next = i : this._drawFirst = i,
            delete t._order,
            delete this._layers[P(t)],
            this._requestRedraw(t)
        },
        _updatePath: function(t) {
            this._extendRedrawBounds(t),
            t._project(),
            t._update(),
            this._requestRedraw(t)
        },
        _updateStyle: function(t) {
            this._updateDashArray(t),
            this._requestRedraw(t)
        },
        _updateDashArray: function(t) {
            if ("string" == typeof t.options.dashArray) {
                for (var e, i = t.options.dashArray.split(/[, ]+/), n = [], o = 0; o < i.length; o++) {
                    if (e = Number(i[o]),
                    isNaN(e))
                        return;
                    n.push(e)
                }
                t.options._dashArray = n
            } else
                t.options._dashArray = t.options.dashArray
        },
        _requestRedraw: function(t) {
            this._map && (this._extendRedrawBounds(t),
            this._redrawRequest = this._redrawRequest || k(this._redraw, this))
        },
        _extendRedrawBounds: function(t) {
            var e;
            t._pxBounds && (e = (t.options.weight || 0) + 1,
            this._redrawBounds = this._redrawBounds || new A,
            this._redrawBounds.extend(t._pxBounds.min.subtract([e, e])),
            this._redrawBounds.extend(t._pxBounds.max.add([e, e])))
        },
        _redraw: function() {
            this._redrawRequest = null,
            this._redrawBounds && (this._redrawBounds.min._floor(),
            this._redrawBounds.max._ceil()),
            this._clear(),
            this._draw(),
            this._redrawBounds = null
        },
        _clear: function() {
            var t, e = this._redrawBounds;
            e ? (t = e.getSize(),
            this._ctx.clearRect(e.min.x, e.min.y, t.x, t.y)) : (this._ctx.save(),
            this._ctx.setTransform(1, 0, 0, 1, 0, 0),
            this._ctx.clearRect(0, 0, this._container.width, this._container.height),
            this._ctx.restore())
        },
        _draw: function() {
            var t, e, i = this._redrawBounds;
            this._ctx.save(),
            i && (e = i.getSize(),
            this._ctx.beginPath(),
            this._ctx.rect(i.min.x, i.min.y, e.x, e.y),
            this._ctx.clip()),
            this._drawing = !0;
            for (var n = this._drawFirst; n; n = n.next)
                t = n.layer,
                (!i || t._pxBounds && t._pxBounds.intersects(i)) && t._updatePath();
            this._drawing = !1,
            this._ctx.restore()
        },
        _updatePoly: function(t, e) {
            if (this._drawing) {
                var i, n, o, s, r = t._parts, a = r.length, h = this._ctx;
                if (a) {
                    for (h.beginPath(),
                    i = 0; i < a; i++) {
                        for (n = 0,
                        o = r[i].length; n < o; n++)
                            s = r[i][n],
                            h[n ? "lineTo" : "moveTo"](s.x, s.y);
                        e && h.closePath()
                    }
                    this._fillStroke(h, t)
                }
            }
        },
        _updateCircle: function(t) {
            var e, i, n, o;
            this._drawing && !t._empty() && (e = t._point,
            i = this._ctx,
            n = Math.max(Math.round(t._radius), 1),
            1 != (o = (Math.max(Math.round(t._radiusY), 1) || n) / n) && (i.save(),
            i.scale(1, o)),
            i.beginPath(),
            i.arc(e.x, e.y / o, n, 0, 2 * Math.PI, !1),
            1 != o && i.restore(),
            this._fillStroke(i, t))
        },
        _fillStroke: function(t, e) {
            var i = e.options;
            i.fill && (t.globalAlpha = i.fillOpacity,
            t.fillStyle = i.fillColor || i.color,
            t.fill(i.fillRule || "evenodd")),
            i.stroke && 0 !== i.weight && (t.setLineDash && t.setLineDash(e.options && e.options._dashArray || []),
            t.globalAlpha = i.opacity,
            t.lineWidth = i.weight,
            t.strokeStyle = i.color,
            t.lineCap = i.lineCap,
            t.lineJoin = i.lineJoin,
            t.stroke())
        },
        _onClick: function(t) {
            for (var e, i, n = this._map.mouseEventToLayerPoint(t), o = this._drawFirst; o; o = o.next)
                (e = o.layer).options.interactive && e._containsPoint(n) && (("click" === t.type || "preclick" !== t.type) && this._map._draggableMoved(e) || (i = e));
            i && (Ae(t),
            this._fireEvent([i], t))
        },
        _onMouseMove: function(t) {
            var e;
            !this._map || this._map.dragging.moving() || this._map._animatingZoom || (e = this._map.mouseEventToLayerPoint(t),
            this._handleMouseHover(t, e))
        },
        _handleMouseOut: function(t) {
            var e = this._hoveredLayer;
            e && (oe(this._container, "leaflet-interactive"),
            this._fireEvent([e], t, "mouseout"),
            this._hoveredLayer = null,
            this._mouseHoverThrottled = !1)
        },
        _handleMouseHover: function(t, e) {
            if (!this._mouseHoverThrottled) {
                for (var i, n, o = this._drawFirst; o; o = o.next)
                    (i = o.layer).options.interactive && i._containsPoint(e) && (n = i);
                n !== this._hoveredLayer && (this._handleMouseOut(t),
                n && (ne(this._container, "leaflet-interactive"),
                this._fireEvent([n], t, "mouseover"),
                this._hoveredLayer = n)),
                this._hoveredLayer && this._fireEvent([this._hoveredLayer], t),
                this._mouseHoverThrottled = !0,
                setTimeout(M(function() {
                    this._mouseHoverThrottled = !1
                }, this), 32)
            }
        },
        _fireEvent: function(t, e, i) {
            this._map._fireDOMEvent(e, i || e.type, t)
        },
        _bringToFront: function(t) {
            var e, i, n = t._order;
            n && (e = n.next,
            i = n.prev,
            e && ((e.prev = i) ? i.next = e : e && (this._drawFirst = e),
            n.prev = this._drawLast,
            (this._drawLast.next = n).next = null,
            this._drawLast = n,
            this._requestRedraw(t)))
        },
        _bringToBack: function(t) {
            var e, i, n = t._order;
            n && (e = n.next,
            (i = n.prev) && ((i.next = e) ? e.prev = i : i && (this._drawLast = i),
            n.prev = null,
            n.next = this._drawFirst,
            this._drawFirst.prev = n,
            this._drawFirst = n,
            this._requestRedraw(t)))
        }
    });
    function Ui(t) {
        return kt ? new Gi(t) : null
    }
    var ji = function() {
        try {
            return document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"),
            function(t) {
                return document.createElement("<lvml:" + t + ' class="lvml">')
            }
        } catch (t) {
            return function(t) {
                return document.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')
            }
        }
    }()
      , ot = {
        _initContainer: function() {
            this._container = $t("div", "leaflet-vml-container")
        },
        _update: function() {
            this._map._animatingZoom || (Hi.prototype._update.call(this),
            this.fire("update"))
        },
        _initPath: function(t) {
            var e = t._container = ji("shape");
            ne(e, "leaflet-vml-shape " + (this.options.className || "")),
            e.coordsize = "1 1",
            t._path = ji("path"),
            e.appendChild(t._path),
            this._updateStyle(t),
            this._layers[P(t)] = t
        },
        _addPath: function(t) {
            var e = t._container;
            this._container.appendChild(e),
            t.options.interactive && t.addInteractiveTarget(e)
        },
        _removePath: function(t) {
            var e = t._container;
            Jt(e),
            t.removeInteractiveTarget(e),
            delete this._layers[P(t)]
        },
        _updateStyle: function(t) {
            var e = t._stroke
              , i = t._fill
              , n = t.options
              , o = t._container;
            o.stroked = !!n.stroke,
            o.filled = !!n.fill,
            n.stroke ? (e = e || (t._stroke = ji("stroke")),
            o.appendChild(e),
            e.weight = n.weight + "px",
            e.color = n.color,
            e.opacity = n.opacity,
            n.dashArray ? e.dashStyle = f(n.dashArray) ? n.dashArray.join(" ") : n.dashArray.replace(/( *, *)/g, " ") : e.dashStyle = "",
            e.endcap = n.lineCap.replace("butt", "flat"),
            e.joinstyle = n.lineJoin) : e && (o.removeChild(e),
            t._stroke = null),
            n.fill ? (i = i || (t._fill = ji("fill")),
            o.appendChild(i),
            i.color = n.fillColor || n.color,
            i.opacity = n.fillOpacity) : i && (o.removeChild(i),
            t._fill = null)
        },
        _updateCircle: function(t) {
            var e = t._point.round()
              , i = Math.round(t._radius)
              , n = Math.round(t._radiusY || i);
            this._setPath(t, t._empty() ? "M0 0" : "AL " + e.x + "," + e.y + " " + i + "," + n + " 0,23592600")
        },
        _setPath: function(t, e) {
            t._path.v = e
        },
        _bringToFront: function(t) {
            te(t._container)
        },
        _bringToBack: function(t) {
            ee(t._container)
        }
    }
      , Fi = Pt ? ji : K
      , Wi = Hi.extend({
        getEvents: function() {
            var t = Hi.prototype.getEvents.call(this);
            return t.zoomstart = this._onZoomStart,
            t
        },
        _initContainer: function() {
            this._container = Fi("svg"),
            this._container.setAttribute("pointer-events", "none"),
            this._rootGroup = Fi("g"),
            this._container.appendChild(this._rootGroup)
        },
        _destroyContainer: function() {
            Jt(this._container),
            we(this._container),
            delete this._container,
            delete this._rootGroup,
            delete this._svgSize
        },
        _onZoomStart: function() {
            this._update()
        },
        _update: function() {
            var t, e, i;
            this._map._animatingZoom && this._bounds || (Hi.prototype._update.call(this),
            e = (t = this._bounds).getSize(),
            i = this._container,
            this._svgSize && this._svgSize.equals(e) || (this._svgSize = e,
            i.setAttribute("width", e.x),
            i.setAttribute("height", e.y)),
            ue(i, t.min),
            i.setAttribute("viewBox", [t.min.x, t.min.y, e.x, e.y].join(" ")),
            this.fire("update"))
        },
        _initPath: function(t) {
            var e = t._path = Fi("path");
            t.options.className && ne(e, t.options.className),
            t.options.interactive && ne(e, "leaflet-interactive"),
            this._updateStyle(t),
            this._layers[P(t)] = t
        },
        _addPath: function(t) {
            this._rootGroup || this._initContainer(),
            this._rootGroup.appendChild(t._path),
            t.addInteractiveTarget(t._path)
        },
        _removePath: function(t) {
            Jt(t._path),
            t.removeInteractiveTarget(t._path),
            delete this._layers[P(t)]
        },
        _updatePath: function(t) {
            t._project(),
            t._update()
        },
        _updateStyle: function(t) {
            var e = t._path
              , t = t.options;
            e && (t.stroke ? (e.setAttribute("stroke", t.color),
            e.setAttribute("stroke-opacity", t.opacity),
            e.setAttribute("stroke-width", t.weight),
            e.setAttribute("stroke-linecap", t.lineCap),
            e.setAttribute("stroke-linejoin", t.lineJoin),
            t.dashArray ? e.setAttribute("stroke-dasharray", t.dashArray) : e.removeAttribute("stroke-dasharray"),
            t.dashOffset ? e.setAttribute("stroke-dashoffset", t.dashOffset) : e.removeAttribute("stroke-dashoffset")) : e.setAttribute("stroke", "none"),
            t.fill ? (e.setAttribute("fill", t.fillColor || t.color),
            e.setAttribute("fill-opacity", t.fillOpacity),
            e.setAttribute("fill-rule", t.fillRule || "evenodd")) : e.setAttribute("fill", "none"))
        },
        _updatePoly: function(t, e) {
            this._setPath(t, X(t._parts, e))
        },
        _updateCircle: function(t) {
            var e = t._point
              , i = Math.max(Math.round(t._radius), 1)
              , n = "a" + i + "," + (Math.max(Math.round(t._radiusY), 1) || i) + " 0 1,0 "
              , i = t._empty() ? "M0 0" : "M" + (e.x - i) + "," + e.y + n + 2 * i + ",0 " + n + 2 * -i + ",0 ";
            this._setPath(t, i)
        },
        _setPath: function(t, e) {
            t._path.setAttribute("d", e)
        },
        _bringToFront: function(t) {
            te(t._path)
        },
        _bringToBack: function(t) {
            ee(t._path)
        }
    });
    function Vi(t) {
        return Mt || Pt ? new Wi(t) : null
    }
    Pt && Wi.include(ot),
    Ne.include({
        getRenderer: function(t) {
            t = t.options.renderer || this._getPaneRenderer(t.options.pane) || this.options.renderer || this._renderer || (this._renderer = this._createRenderer());
            return this.hasLayer(t) || this.addLayer(t),
            t
        },
        _getPaneRenderer: function(t) {
            if ("overlayPane" === t || void 0 === t)
                return !1;
            var e = this._paneRenderers[t];
            return void 0 === e && (e = this._createRenderer({
                pane: t
            }),
            this._paneRenderers[t] = e),
            e
        },
        _createRenderer: function(t) {
            return this.options.preferCanvas && Ui(t) || Vi(t)
        }
    });
    var qi = vi.extend({
        initialize: function(t, e) {
            vi.prototype.initialize.call(this, this._boundsToLatLngs(t), e)
        },
        setBounds: function(t) {
            return this.setLatLngs(this._boundsToLatLngs(t))
        },
        _boundsToLatLngs: function(t) {
            return [(t = R(t)).getSouthWest(), t.getNorthWest(), t.getNorthEast(), t.getSouthEast()]
        }
    });
    Wi.create = Fi,
    Wi.pointsToPath = X,
    yi.geometryToLayer = Li,
    yi.coordsToLatLng = bi,
    yi.coordsToLatLngs = xi,
    yi.latLngToCoords = ki,
    yi.latLngsToCoords = Mi,
    yi.getFeature = Pi,
    yi.asFeature = Ti,
    Ne.mergeOptions({
        boxZoom: !0
    });
    S = ft.extend({
        initialize: function(t) {
            this._map = t,
            this._container = t._container,
            this._pane = t._panes.overlayPane,
            this._resetStateTimeout = 0,
            t.on("unload", this._destroy, this)
        },
        addHooks: function() {
            ye(this._container, "mousedown", this._onMouseDown, this)
        },
        removeHooks: function() {
            we(this._container, "mousedown", this._onMouseDown, this)
        },
        moved: function() {
            return this._moved
        },
        _destroy: function() {
            Jt(this._pane),
            delete this._pane
        },
        _resetState: function() {
            this._resetStateTimeout = 0,
            this._moved = !1
        },
        _clearDeferredResetState: function() {
            0 !== this._resetStateTimeout && (clearTimeout(this._resetStateTimeout),
            this._resetStateTimeout = 0)
        },
        _onMouseDown: function(t) {
            if (!t.shiftKey || 1 !== t.which && 1 !== t.button)
                return !1;
            this._clearDeferredResetState(),
            this._resetState(),
            Ht(),
            de(),
            this._startPoint = this._map.mouseEventToContainerPoint(t),
            ye(document, {
                contextmenu: Se,
                mousemove: this._onMouseMove,
                mouseup: this._onMouseUp,
                keydown: this._onKeyDown
            }, this)
        },
        _onMouseMove: function(t) {
            this._moved || (this._moved = !0,
            this._box = $t("div", "leaflet-zoom-box", this._container),
            ne(this._container, "leaflet-crosshair"),
            this._map.fire("boxzoomstart")),
            this._point = this._map.mouseEventToContainerPoint(t);
            var e = new A(this._point,this._startPoint)
              , t = e.getSize();
            ue(this._box, e.min),
            this._box.style.width = t.x + "px",
            this._box.style.height = t.y + "px"
        },
        _finish: function() {
            this._moved && (Jt(this._box),
            oe(this._container, "leaflet-crosshair")),
            ve(),
            _e(),
            we(document, {
                contextmenu: Se,
                mousemove: this._onMouseMove,
                mouseup: this._onMouseUp,
                keydown: this._onKeyDown
            }, this)
        },
        _onMouseUp: function(t) {
            1 !== t.which && 1 !== t.button || (this._finish(),
            this._moved && (this._clearDeferredResetState(),
            this._resetStateTimeout = setTimeout(M(this._resetState, this), 0),
            t = new B(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point)),
            this._map.fitBounds(t).fire("boxzoomend", {
                boxZoomBounds: t
            })))
        },
        _onKeyDown: function(t) {
            27 === t.keyCode && this._finish()
        }
    });
    Ne.addInitHook("addHandler", "boxZoom", S),
    Ne.mergeOptions({
        doubleClickZoom: !0
    });
    q = ft.extend({
        addHooks: function() {
            this._map.on("dblclick", this._onDoubleClick, this)
        },
        removeHooks: function() {
            this._map.off("dblclick", this._onDoubleClick, this)
        },
        _onDoubleClick: function(t) {
            var e = this._map
              , i = e.getZoom()
              , n = e.options.zoomDelta
              , n = t.originalEvent.shiftKey ? i - n : i + n;
            "center" === e.options.doubleClickZoom ? e.setZoom(n) : e.setZoomAround(t.containerPoint, n)
        }
    });
    Ne.addInitHook("addHandler", "doubleClickZoom", q),
    Ne.mergeOptions({
        dragging: !0,
        inertia: !nt,
        inertiaDeceleration: 3400,
        inertiaMaxSpeed: 1 / 0,
        easeLinearity: .2,
        worldCopyJump: !1,
        maxBoundsViscosity: 0
    });
    Y = ft.extend({
        addHooks: function() {
            var t;
            this._draggable || (t = this._map,
            this._draggable = new Xe(t._mapPane,t._container),
            this._draggable.on({
                dragstart: this._onDragStart,
                drag: this._onDrag,
                dragend: this._onDragEnd
            }, this),
            this._draggable.on("predrag", this._onPreDragLimit, this),
            t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this),
            t.on("zoomend", this._onZoomEnd, this),
            t.whenReady(this._onZoomEnd, this))),
            ne(this._map._container, "leaflet-grab leaflet-touch-drag"),
            this._draggable.enable(),
            this._positions = [],
            this._times = []
        },
        removeHooks: function() {
            oe(this._map._container, "leaflet-grab"),
            oe(this._map._container, "leaflet-touch-drag"),
            this._draggable.disable()
        },
        moved: function() {
            return this._draggable && this._draggable._moved
        },
        moving: function() {
            return this._draggable && this._draggable._moving
        },
        _onDragStart: function() {
            var t, e = this._map;
            e._stop(),
            this._map.options.maxBounds && this._map.options.maxBoundsViscosity ? (t = R(this._map.options.maxBounds),
            this._offsetLimit = Z(this._map.latLngToContainerPoint(t.getNorthWest()).multiplyBy(-1), this._map.latLngToContainerPoint(t.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),
            this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity))) : this._offsetLimit = null,
            e.fire("movestart").fire("dragstart"),
            e.options.inertia && (this._positions = [],
            this._times = [])
        },
        _onDrag: function(t) {
            var e, i;
            this._map.options.inertia && (e = this._lastTime = +new Date,
            i = this._lastPos = this._draggable._absPos || this._draggable._newPos,
            this._positions.push(i),
            this._times.push(e),
            this._prunePositions(e)),
            this._map.fire("move", t).fire("drag", t)
        },
        _prunePositions: function(t) {
            for (; 1 < this._positions.length && 50 < t - this._times[0]; )
                this._positions.shift(),
                this._times.shift()
        },
        _onZoomEnd: function() {
            var t = this._map.getSize().divideBy(2)
              , e = this._map.latLngToLayerPoint([0, 0]);
            this._initialWorldOffset = e.subtract(t).x,
            this._worldWidth = this._map.getPixelWorldBounds().getSize().x
        },
        _viscousLimit: function(t, e) {
            return t - (t - e) * this._viscosity
        },
        _onPreDragLimit: function() {
            var t, e;
            this._viscosity && this._offsetLimit && (t = this._draggable._newPos.subtract(this._draggable._startPos),
            e = this._offsetLimit,
            t.x < e.min.x && (t.x = this._viscousLimit(t.x, e.min.x)),
            t.y < e.min.y && (t.y = this._viscousLimit(t.y, e.min.y)),
            t.x > e.max.x && (t.x = this._viscousLimit(t.x, e.max.x)),
            t.y > e.max.y && (t.y = this._viscousLimit(t.y, e.max.y)),
            this._draggable._newPos = this._draggable._startPos.add(t))
        },
        _onPreDragWrap: function() {
            var t = this._worldWidth
              , e = Math.round(t / 2)
              , i = this._initialWorldOffset
              , n = this._draggable._newPos.x
              , o = (n - e + i) % t + e - i
              , e = (n + e + i) % t - e - i
              , e = Math.abs(o + i) < Math.abs(e + i) ? o : e;
            this._draggable._absPos = this._draggable._newPos.clone(),
            this._draggable._newPos.x = e
        },
        _onDragEnd: function(t) {
            var e, i, n, o, s = this._map, r = s.options, a = !r.inertia || this._times.length < 2;
            s.fire("dragend", t),
            a ? s.fire("moveend") : (this._prunePositions(+new Date),
            i = this._lastPos.subtract(this._positions[0]),
            t = (this._lastTime - this._times[0]) / 1e3,
            e = r.easeLinearity,
            i = (a = i.multiplyBy(e / t)).distanceTo([0, 0]),
            t = Math.min(r.inertiaMaxSpeed, i),
            i = a.multiplyBy(t / i),
            n = t / (r.inertiaDeceleration * e),
            (o = i.multiplyBy(-n / 2).round()).x || o.y ? (o = s._limitOffset(o, s.options.maxBounds),
            k(function() {
                s.panBy(o, {
                    duration: n,
                    easeLinearity: e,
                    noMoveStart: !0,
                    animate: !0
                })
            })) : s.fire("moveend"))
        }
    });
    Ne.addInitHook("addHandler", "dragging", Y),
    Ne.mergeOptions({
        keyboard: !0,
        keyboardPanDelta: 80
    });
    F = ft.extend({
        keyCodes: {
            left: [37],
            right: [39],
            down: [40],
            up: [38],
            zoomIn: [187, 107, 61, 171],
            zoomOut: [189, 109, 54, 173]
        },
        initialize: function(t) {
            this._map = t,
            this._setPanDelta(t.options.keyboardPanDelta),
            this._setZoomDelta(t.options.zoomDelta)
        },
        addHooks: function() {
            var t = this._map._container;
            t.tabIndex <= 0 && (t.tabIndex = "0"),
            ye(t, {
                focus: this._onFocus,
                blur: this._onBlur,
                mousedown: this._onMouseDown
            }, this),
            this._map.on({
                focus: this._addHooks,
                blur: this._removeHooks
            }, this)
        },
        removeHooks: function() {
            this._removeHooks(),
            we(this._map._container, {
                focus: this._onFocus,
                blur: this._onBlur,
                mousedown: this._onMouseDown
            }, this),
            this._map.off({
                focus: this._addHooks,
                blur: this._removeHooks
            }, this)
        },
        _onMouseDown: function() {
            var t, e, i;
            this._focused || (t = document.body,
            i = document.documentElement,
            e = t.scrollTop || i.scrollTop,
            i = t.scrollLeft || i.scrollLeft,
            this._map._container.focus(),
            window.scrollTo(i, e))
        },
        _onFocus: function() {
            this._focused = !0,
            this._map.fire("focus")
        },
        _onBlur: function() {
            this._focused = !1,
            this._map.fire("blur")
        },
        _setPanDelta: function(t) {
            for (var e = this._panKeys = {}, i = this.keyCodes, n = 0, o = i.left.length; n < o; n++)
                e[i.left[n]] = [-1 * t, 0];
            for (n = 0,
            o = i.right.length; n < o; n++)
                e[i.right[n]] = [t, 0];
            for (n = 0,
            o = i.down.length; n < o; n++)
                e[i.down[n]] = [0, t];
            for (n = 0,
            o = i.up.length; n < o; n++)
                e[i.up[n]] = [0, -1 * t]
        },
        _setZoomDelta: function(t) {
            for (var e = this._zoomKeys = {}, i = this.keyCodes, n = 0, o = i.zoomIn.length; n < o; n++)
                e[i.zoomIn[n]] = t;
            for (n = 0,
            o = i.zoomOut.length; n < o; n++)
                e[i.zoomOut[n]] = -t
        },
        _addHooks: function() {
            ye(document, "keydown", this._onKeyDown, this)
        },
        _removeHooks: function() {
            we(document, "keydown", this._onKeyDown, this)
        },
        _onKeyDown: function(t) {
            if (!(t.altKey || t.ctrlKey || t.metaKey)) {
                var e, i = t.keyCode, n = this._map;
                if (i in this._panKeys)
                    n._panAnim && n._panAnim._inProgress || (e = this._panKeys[i],
                    t.shiftKey && (e = O(e).multiplyBy(3)),
                    n.panBy(e),
                    n.options.maxBounds && n.panInsideBounds(n.options.maxBounds));
                else if (i in this._zoomKeys)
                    n.setZoom(n.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[i]);
                else {
                    if (27 !== i || !n._popup || !n._popup.options.closeOnEscapeKey)
                        return;
                    n.closePopup()
                }
                Se(t)
            }
        }
    });
    Ne.addInitHook("addHandler", "keyboard", F),
    Ne.mergeOptions({
        scrollWheelZoom: !0,
        wheelDebounceTime: 40,
        wheelPxPerZoomLevel: 60
    });
    dt = ft.extend({
        addHooks: function() {
            ye(this._map._container, "wheel", this._onWheelScroll, this),
            this._delta = 0
        },
        removeHooks: function() {
            we(this._map._container, "wheel", this._onWheelScroll, this)
        },
        _onWheelScroll: function(t) {
            var e = Ie(t)
              , i = this._map.options.wheelDebounceTime;
            this._delta += e,
            this._lastMousePos = this._map.mouseEventToContainerPoint(t),
            this._startTime || (this._startTime = +new Date);
            i = Math.max(i - (new Date - this._startTime), 0);
            clearTimeout(this._timer),
            this._timer = setTimeout(M(this._performZoom, this), i),
            Se(t)
        },
        _performZoom: function() {
            var t = this._map
              , e = t.getZoom()
              , i = this._map.options.zoomSnap || 0;
            t._stop();
            var n = this._delta / (4 * this._map.options.wheelPxPerZoomLevel)
              , n = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(n)))) / Math.LN2
              , n = i ? Math.ceil(n / i) * i : n
              , n = t._limitZoom(e + (0 < this._delta ? n : -n)) - e;
            this._delta = 0,
            this._startTime = null,
            n && ("center" === t.options.scrollWheelZoom ? t.setZoom(e + n) : t.setZoomAround(this._lastMousePos, e + n))
        }
    });
    Ne.addInitHook("addHandler", "scrollWheelZoom", dt),
    Ne.mergeOptions({
        tap: !0,
        tapTolerance: 15
    });
    j = ft.extend({
        addHooks: function() {
            ye(this._map._container, "touchstart", this._onDown, this)
        },
        removeHooks: function() {
            we(this._map._container, "touchstart", this._onDown, this)
        },
        _onDown: function(t) {
            if (t.touches) {
                if (Ee(t),
                this._fireClick = !0,
                1 < t.touches.length)
                    return this._fireClick = !1,
                    void clearTimeout(this._holdTimeout);
                var e = t.touches[0]
                  , t = e.target;
                this._startPos = this._newPos = new z(e.clientX,e.clientY),
                t.tagName && "a" === t.tagName.toLowerCase() && ne(t, "leaflet-active"),
                this._holdTimeout = setTimeout(M(function() {
                    this._isTapValid() && (this._fireClick = !1,
                    this._onUp(),
                    this._simulateEvent("contextmenu", e))
                }, this), 1e3),
                this._simulateEvent("mousedown", e),
                ye(document, {
                    touchmove: this._onMove,
                    touchend: this._onUp
                }, this)
            }
        },
        _onUp: function(t) {
            var e;
            clearTimeout(this._holdTimeout),
            we(document, {
                touchmove: this._onMove,
                touchend: this._onUp
            }, this),
            this._fireClick && t && t.changedTouches && ((t = (e = t.changedTouches[0]).target) && t.tagName && "a" === t.tagName.toLowerCase() && oe(t, "leaflet-active"),
            this._simulateEvent("mouseup", e),
            this._isTapValid() && this._simulateEvent("click", e))
        },
        _isTapValid: function() {
            return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance
        },
        _onMove: function(t) {
            t = t.touches[0];
            this._newPos = new z(t.clientX,t.clientY),
            this._simulateEvent("mousemove", t)
        },
        _simulateEvent: function(t, e) {
            var i = document.createEvent("MouseEvents");
            i._simulated = !0,
            e.target._simulatedClick = !0,
            i.initMouseEvent(t, !0, !0, window, 1, e.screenX, e.screenY, e.clientX, e.clientY, !1, !1, !1, !1, 0, null),
            e.target.dispatchEvent(i)
        }
    });
    !Lt || yt && !lt || Ne.addInitHook("addHandler", "tap", j),
    Ne.mergeOptions({
        touchZoom: Lt && !nt,
        bounceAtZoomLimits: !0
    });
    ot = ft.extend({
        addHooks: function() {
            ne(this._map._container, "leaflet-touch-zoom"),
            ye(this._map._container, "touchstart", this._onTouchStart, this)
        },
        removeHooks: function() {
            oe(this._map._container, "leaflet-touch-zoom"),
            we(this._map._container, "touchstart", this._onTouchStart, this)
        },
        _onTouchStart: function(t) {
            var e, i, n = this._map;
            !t.touches || 2 !== t.touches.length || n._animatingZoom || this._zooming || (e = n.mouseEventToContainerPoint(t.touches[0]),
            i = n.mouseEventToContainerPoint(t.touches[1]),
            this._centerPoint = n.getSize()._divideBy(2),
            this._startLatLng = n.containerPointToLatLng(this._centerPoint),
            "center" !== n.options.touchZoom && (this._pinchStartLatLng = n.containerPointToLatLng(e.add(i)._divideBy(2))),
            this._startDist = e.distanceTo(i),
            this._startZoom = n.getZoom(),
            this._moved = !1,
            this._zooming = !0,
            n._stop(),
            ye(document, "touchmove", this._onTouchMove, this),
            ye(document, "touchend", this._onTouchEnd, this),
            Ee(t))
        },
        _onTouchMove: function(t) {
            if (t.touches && 2 === t.touches.length && this._zooming) {
                var e = this._map
                  , i = e.mouseEventToContainerPoint(t.touches[0])
                  , n = e.mouseEventToContainerPoint(t.touches[1])
                  , o = i.distanceTo(n) / this._startDist;
                if (this._zoom = e.getScaleZoom(o, this._startZoom),
                !e.options.bounceAtZoomLimits && (this._zoom < e.getMinZoom() && o < 1 || this._zoom > e.getMaxZoom() && 1 < o) && (this._zoom = e._limitZoom(this._zoom)),
                "center" === e.options.touchZoom) {
                    if (this._center = this._startLatLng,
                    1 == o)
                        return
                } else {
                    n = i._add(n)._divideBy(2)._subtract(this._centerPoint);
                    if (1 == o && 0 === n.x && 0 === n.y)
                        return;
                    this._center = e.unproject(e.project(this._pinchStartLatLng, this._zoom).subtract(n), this._zoom)
                }
                this._moved || (e._moveStart(!0, !1),
                this._moved = !0),
                T(this._animRequest);
                e = M(e._move, e, this._center, this._zoom, {
                    pinch: !0,
                    round: !1
                });
                this._animRequest = k(e, this, !0),
                Ee(t)
            }
        },
        _onTouchEnd: function() {
            this._moved && this._zooming ? (this._zooming = !1,
            T(this._animRequest),
            we(document, "touchmove", this._onTouchMove, this),
            we(document, "touchend", this._onTouchEnd, this),
            this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), !0, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom))) : this._zooming = !1
        }
    });
    Ne.addInitHook("addHandler", "touchZoom", ot),
    Ne.BoxZoom = S,
    Ne.DoubleClickZoom = q,
    Ne.Drag = Y,
    Ne.Keyboard = F,
    Ne.ScrollWheelZoom = dt,
    Ne.Tap = j,
    Ne.TouchZoom = ot,
    t.version = "1.7.1",
    t.Control = Ge,
    t.control = He,
    t.Browser = ut,
    t.Evented = D,
    t.Mixin = gt,
    t.Util = C,
    t.Class = E,
    t.Handler = ft,
    t.extend = h,
    t.bind = M,
    t.stamp = P,
    t.setOptions = c,
    t.DomEvent = pt,
    t.DomUtil = ct,
    t.PosAnimation = Re,
    t.Draggable = Xe,
    t.LineUtil = vt,
    t.PolyUtil = $,
    t.Point = z,
    t.point = O,
    t.Bounds = A,
    t.bounds = Z,
    t.Transformation = W,
    t.transformation = V,
    t.Projection = at,
    t.LatLng = N,
    t.latLng = H,
    t.LatLngBounds = B,
    t.latLngBounds = R,
    t.CRS = G,
    t.GeoJSON = yi,
    t.geoJSON = Ci,
    t.geoJson = ht,
    t.Layer = ai,
    t.LayerGroup = hi,
    t.layerGroup = function(t, e) {
        return new hi(t,e)
    }
    ,
    t.FeatureGroup = li,
    t.featureGroup = function(t, e) {
        return new li(t,e)
    }
    ,
    t.ImageOverlay = Ei,
    t.imageOverlay = function(t, e, i) {
        return new Ei(t,e,i)
    }
    ,
    t.VideoOverlay = Si,
    t.videoOverlay = function(t, e, i) {
        return new Si(t,e,i)
    }
    ,
    t.SVGOverlay = Di,
    t.svgOverlay = function(t, e, i) {
        return new Di(t,e,i)
    }
    ,
    t.DivOverlay = zi,
    t.Popup = Ii,
    t.popup = function(t, e) {
        return new Ii(t,e)
    }
    ,
    t.Tooltip = Oi,
    t.tooltip = function(t, e) {
        return new Oi(t,e)
    }
    ,
    t.Icon = ui,
    t.icon = function(t) {
        return new ui(t)
    }
    ,
    t.DivIcon = Ai,
    t.divIcon = function(t) {
        return new Ai(t)
    }
    ,
    t.Marker = _i,
    t.marker = function(t, e) {
        return new _i(t,e)
    }
    ,
    t.TileLayer = Bi,
    t.tileLayer = Ri,
    t.GridLayer = Zi,
    t.gridLayer = function(t) {
        return new Zi(t)
    }
    ,
    t.SVG = Wi,
    t.svg = Vi,
    t.Renderer = Hi,
    t.Canvas = Gi,
    t.canvas = Ui,
    t.Path = pi,
    t.CircleMarker = fi,
    t.circleMarker = function(t, e) {
        return new fi(t,e)
    }
    ,
    t.Circle = mi,
    t.circle = function(t, e, i) {
        return new mi(t,e,i)
    }
    ,
    t.Polyline = gi,
    t.polyline = function(t, e) {
        return new gi(t,e)
    }
    ,
    t.Polygon = vi,
    t.polygon = function(t, e) {
        return new vi(t,e)
    }
    ,
    t.Rectangle = qi,
    t.rectangle = function(t, e) {
        return new qi(t,e)
    }
    ,
    t.Map = Ne,
    t.map = function(t, e) {
        return new Ne(t,e)
    }
    ;
    var Yi = window.L;
    t.noConflict = function() {
        return window.L = Yi,
        this
    }
    ,
    window.L = t
}),
function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t.Leaflet = t.Leaflet || {},
    t.Leaflet.markercluster = t.Leaflet.markercluster || {}))
}(this, function(t) {
    "use strict";
    var e = L.MarkerClusterGroup = L.FeatureGroup.extend({
        options: {
            maxClusterRadius: 80,
            iconCreateFunction: null,
            clusterPane: L.Marker.prototype.options.pane,
            spiderfyOnMaxZoom: !0,
            showCoverageOnHover: !0,
            zoomToBoundsOnClick: !0,
            singleMarkerMode: !1,
            disableClusteringAtZoom: null,
            removeOutsideVisibleBounds: !0,
            animate: !0,
            animateAddingMarkers: !1,
            spiderfyDistanceMultiplier: 1,
            spiderLegPolylineOptions: {
                weight: 1.5,
                color: "#222",
                opacity: .5
            },
            chunkedLoading: !1,
            chunkInterval: 200,
            chunkDelay: 50,
            chunkProgress: null,
            polygonOptions: {}
        },
        initialize: function(t) {
            L.Util.setOptions(this, t),
            this.options.iconCreateFunction || (this.options.iconCreateFunction = this._defaultIconCreateFunction),
            this._featureGroup = L.featureGroup(),
            this._featureGroup.addEventParent(this),
            this._nonPointGroup = L.featureGroup(),
            this._nonPointGroup.addEventParent(this),
            this._inZoomAnimation = 0,
            this._needsClustering = [],
            this._needsRemoving = [],
            this._currentShownBounds = null,
            this._queue = [],
            this._childMarkerEventHandlers = {
                dragstart: this._childMarkerDragStart,
                move: this._childMarkerMoved,
                dragend: this._childMarkerDragEnd
            };
            t = L.DomUtil.TRANSITION && this.options.animate;
            L.extend(this, t ? this._withAnimation : this._noAnimation),
            this._markerCluster = t ? L.MarkerCluster : L.MarkerClusterNonAnimated
        },
        addLayer: function(t) {
            if (t instanceof L.LayerGroup)
                return this.addLayers([t]);
            if (!t.getLatLng)
                return this._nonPointGroup.addLayer(t),
                this.fire("layeradd", {
                    layer: t
                }),
                this;
            if (!this._map)
                return this._needsClustering.push(t),
                this.fire("layeradd", {
                    layer: t
                }),
                this;
            if (this.hasLayer(t))
                return this;
            this._unspiderfy && this._unspiderfy(),
            this._addLayer(t, this._maxZoom),
            this.fire("layeradd", {
                layer: t
            }),
            this._topClusterLevel._recalculateBounds(),
            this._refreshClustersIcons();
            var e = t
              , i = this._zoom;
            if (t.__parent)
                for (; e.__parent._zoom >= i; )
                    e = e.__parent;
            return this._currentShownBounds.contains(e.getLatLng()) && (this.options.animateAddingMarkers ? this._animationAddLayer(t, e) : this._animationAddLayerNonAnimated(t, e)),
            this
        },
        removeLayer: function(t) {
            return t instanceof L.LayerGroup ? this.removeLayers([t]) : (t.getLatLng ? this._map ? t.__parent && (this._unspiderfy && (this._unspiderfy(),
            this._unspiderfyLayer(t)),
            this._removeLayer(t, !0),
            this.fire("layerremove", {
                layer: t
            }),
            this._topClusterLevel._recalculateBounds(),
            this._refreshClustersIcons(),
            t.off(this._childMarkerEventHandlers, this),
            this._featureGroup.hasLayer(t) && (this._featureGroup.removeLayer(t),
            t.clusterShow && t.clusterShow())) : (!this._arraySplice(this._needsClustering, t) && this.hasLayer(t) && this._needsRemoving.push({
                layer: t,
                latlng: t._latlng
            }),
            this.fire("layerremove", {
                layer: t
            })) : (this._nonPointGroup.removeLayer(t),
            this.fire("layerremove", {
                layer: t
            })),
            this)
        },
        addLayers: function(i, n) {
            if (!L.Util.isArray(i))
                return this.addLayer(i);
            var o, s = this._featureGroup, r = this._nonPointGroup, a = this.options.chunkedLoading, h = this.options.chunkInterval, l = this.options.chunkProgress, u = i.length, c = 0, d = !0;
            if (this._map) {
                var _ = (new Date).getTime()
                  , p = L.bind(function() {
                    for (var t = (new Date).getTime(); c < u; c++) {
                        if (a && 0 == c % 200) {
                            var e = (new Date).getTime() - t;
                            if (h < e)
                                break
                        }
                        (o = i[c])instanceof L.LayerGroup ? (d && (i = i.slice(),
                        d = !1),
                        this._extractNonGroupLayers(o, i),
                        u = i.length) : o.getLatLng ? !this.hasLayer(o) && (this._addLayer(o, this._maxZoom),
                        n || this.fire("layeradd", {
                            layer: o
                        }),
                        o.__parent && 2 === o.__parent.getChildCount()) && (e = (e = o.__parent.getAllChildMarkers())[0] === o ? e[1] : e[0],
                        s.removeLayer(e)) : (r.addLayer(o),
                        n || this.fire("layeradd", {
                            layer: o
                        }))
                    }
                    l && l(c, u, (new Date).getTime() - _),
                    c === u ? (this._topClusterLevel._recalculateBounds(),
                    this._refreshClustersIcons(),
                    this._topClusterLevel._recursivelyAddChildrenToMap(null, this._zoom, this._currentShownBounds)) : setTimeout(p, this.options.chunkDelay)
                }, this);
                p()
            } else
                for (var t = this._needsClustering; c < u; c++)
                    (o = i[c])instanceof L.LayerGroup ? (d && (i = i.slice(),
                    d = !1),
                    this._extractNonGroupLayers(o, i),
                    u = i.length) : o.getLatLng ? this.hasLayer(o) || t.push(o) : r.addLayer(o);
            return this
        },
        removeLayers: function(t) {
            var e, i = t.length, n = this._featureGroup, o = this._nonPointGroup, s = !0;
            if (!this._map) {
                for (h = 0; h < i; h++)
                    (e = t[h])instanceof L.LayerGroup ? (s && (t = t.slice(),
                    s = !1),
                    this._extractNonGroupLayers(e, t),
                    i = t.length) : (this._arraySplice(this._needsClustering, e),
                    o.removeLayer(e),
                    this.hasLayer(e) && this._needsRemoving.push({
                        layer: e,
                        latlng: e._latlng
                    }),
                    this.fire("layerremove", {
                        layer: e
                    }));
                return this
            }
            if (this._unspiderfy) {
                this._unspiderfy();
                for (var r = t.slice(), a = i, h = 0; h < a; h++)
                    (e = r[h])instanceof L.LayerGroup ? (this._extractNonGroupLayers(e, r),
                    a = r.length) : this._unspiderfyLayer(e)
            }
            for (h = 0; h < i; h++)
                (e = t[h])instanceof L.LayerGroup ? (s && (t = t.slice(),
                s = !1),
                this._extractNonGroupLayers(e, t),
                i = t.length) : e.__parent ? (this._removeLayer(e, !0, !0),
                this.fire("layerremove", {
                    layer: e
                }),
                n.hasLayer(e) && (n.removeLayer(e),
                e.clusterShow && e.clusterShow())) : (o.removeLayer(e),
                this.fire("layerremove", {
                    layer: e
                }));
            return this._topClusterLevel._recalculateBounds(),
            this._refreshClustersIcons(),
            this._topClusterLevel._recursivelyAddChildrenToMap(null, this._zoom, this._currentShownBounds),
            this
        },
        clearLayers: function() {
            return this._map || (this._needsClustering = [],
            this._needsRemoving = [],
            delete this._gridClusters,
            delete this._gridUnclustered),
            this._noanimationUnspiderfy && this._noanimationUnspiderfy(),
            this._featureGroup.clearLayers(),
            this._nonPointGroup.clearLayers(),
            this.eachLayer(function(t) {
                t.off(this._childMarkerEventHandlers, this),
                delete t.__parent
            }, this),
            this._map && this._generateInitialClusters(),
            this
        },
        getBounds: function() {
            var t = new L.LatLngBounds;
            this._topClusterLevel && t.extend(this._topClusterLevel._bounds);
            for (var e = this._needsClustering.length - 1; 0 <= e; e--)
                t.extend(this._needsClustering[e].getLatLng());
            return t.extend(this._nonPointGroup.getBounds()),
            t
        },
        eachLayer: function(t, e) {
            var i, n, o, s = this._needsClustering.slice(), r = this._needsRemoving;
            for (this._topClusterLevel && this._topClusterLevel.getAllChildMarkers(s),
            n = s.length - 1; 0 <= n; n--) {
                for (i = !0,
                o = r.length - 1; 0 <= o; o--)
                    if (r[o].layer === s[n]) {
                        i = !1;
                        break
                    }
                i && t.call(e, s[n])
            }
            this._nonPointGroup.eachLayer(t, e)
        },
        getLayers: function() {
            var e = [];
            return this.eachLayer(function(t) {
                e.push(t)
            }),
            e
        },
        getLayer: function(e) {
            var i = null;
            return e = parseInt(e, 10),
            this.eachLayer(function(t) {
                L.stamp(t) === e && (i = t)
            }),
            i
        },
        hasLayer: function(t) {
            if (!t)
                return !1;
            for (var e = this._needsClustering, i = e.length - 1; 0 <= i; i--)
                if (e[i] === t)
                    return !0;
            for (i = (e = this._needsRemoving).length - 1; 0 <= i; i--)
                if (e[i].layer === t)
                    return !1;
            return !(!t.__parent || t.__parent._group !== this) || this._nonPointGroup.hasLayer(t)
        },
        zoomToShowLayer: function(t, e) {
            "function" != typeof e && (e = function() {}
            );
            var i = function() {
                !t._icon && !t.__parent._icon || this._inZoomAnimation || (this._map.off("moveend", i, this),
                this.off("animationend", i, this),
                t._icon ? e() : t.__parent._icon && (this.once("spiderfied", e, this),
                t.__parent.spiderfy()))
            };
            t._icon && this._map.getBounds().contains(t.getLatLng()) ? e() : t.__parent._zoom < Math.round(this._map._zoom) ? (this._map.on("moveend", i, this),
            this._map.panTo(t.getLatLng())) : (this._map.on("moveend", i, this),
            this.on("animationend", i, this),
            t.__parent.zoomToBounds())
        },
        onAdd: function(t) {
            var e, i, n;
            if (this._map = t,
            !isFinite(this._map.getMaxZoom()))
                throw "Map has no maxZoom specified";
            for (this._featureGroup.addTo(t),
            this._nonPointGroup.addTo(t),
            this._gridClusters || this._generateInitialClusters(),
            this._maxLat = t.options.crs.projection.MAX_LATITUDE,
            e = 0,
            i = this._needsRemoving.length; e < i; e++)
                (n = this._needsRemoving[e]).newlatlng = n.layer._latlng,
                n.layer._latlng = n.latlng;
            for (e = 0,
            i = this._needsRemoving.length; e < i; e++)
                n = this._needsRemoving[e],
                this._removeLayer(n.layer, !0),
                n.layer._latlng = n.newlatlng;
            this._needsRemoving = [],
            this._zoom = Math.round(this._map._zoom),
            this._currentShownBounds = this._getExpandedVisibleBounds(),
            this._map.on("zoomend", this._zoomEnd, this),
            this._map.on("moveend", this._moveEnd, this),
            this._spiderfierOnAdd && this._spiderfierOnAdd(),
            this._bindEvents(),
            i = this._needsClustering,
            this._needsClustering = [],
            this.addLayers(i, !0)
        },
        onRemove: function(t) {
            t.off("zoomend", this._zoomEnd, this),
            t.off("moveend", this._moveEnd, this),
            this._unbindEvents(),
            this._map._mapPane.className = this._map._mapPane.className.replace(" leaflet-cluster-anim", ""),
            this._spiderfierOnRemove && this._spiderfierOnRemove(),
            delete this._maxLat,
            this._hideCoverage(),
            this._featureGroup.remove(),
            this._nonPointGroup.remove(),
            this._featureGroup.clearLayers(),
            this._map = null
        },
        getVisibleParent: function(t) {
            for (var e = t; e && !e._icon; )
                e = e.__parent;
            return e || null
        },
        _arraySplice: function(t, e) {
            for (var i = t.length - 1; 0 <= i; i--)
                if (t[i] === e)
                    return t.splice(i, 1),
                    !0
        },
        _removeFromGridUnclustered: function(t, e) {
            for (var i = this._map, n = this._gridUnclustered, o = Math.floor(this._map.getMinZoom()); o <= e && n[e].removeObject(t, i.project(t.getLatLng(), e)); e--)
                ;
        },
        _childMarkerDragStart: function(t) {
            t.target.__dragStart = t.target._latlng
        },
        _childMarkerMoved: function(t) {
            var e;
            this._ignoreMove || t.target.__dragStart || (e = t.target._popup && t.target._popup.isOpen(),
            this._moveChild(t.target, t.oldLatLng, t.latlng),
            e && t.target.openPopup())
        },
        _moveChild: function(t, e, i) {
            t._latlng = e,
            this.removeLayer(t),
            t._latlng = i,
            this.addLayer(t)
        },
        _childMarkerDragEnd: function(t) {
            var e = t.target.__dragStart;
            delete t.target.__dragStart,
            e && this._moveChild(t.target, e, t.target._latlng)
        },
        _removeLayer: function(t, e, i) {
            var n = this._gridClusters
              , o = this._gridUnclustered
              , s = this._featureGroup
              , r = this._map
              , a = Math.floor(this._map.getMinZoom());
            e && this._removeFromGridUnclustered(t, this._maxZoom);
            var h, l = t.__parent, u = l._markers;
            for (this._arraySplice(u, t); l && (l._childCount--,
            l._boundsNeedUpdate = !0,
            !(l._zoom < a)); )
                e && l._childCount <= 1 ? (h = l._markers[0] === t ? l._markers[1] : l._markers[0],
                n[l._zoom].removeObject(l, r.project(l._cLatLng, l._zoom)),
                o[l._zoom].addObject(h, r.project(h.getLatLng(), l._zoom)),
                this._arraySplice(l.__parent._childClusters, l),
                l.__parent._markers.push(h),
                h.__parent = l.__parent,
                l._icon && (s.removeLayer(l),
                i || s.addLayer(h))) : l._iconNeedsUpdate = !0,
                l = l.__parent;
            delete t.__parent
        },
        _isOrIsParent: function(t, e) {
            for (; e; ) {
                if (t === e)
                    return !0;
                e = e.parentNode
            }
            return !1
        },
        fire: function(t, e, i) {
            if (e && e.layer instanceof L.MarkerCluster) {
                if (e.originalEvent && this._isOrIsParent(e.layer._icon, e.originalEvent.relatedTarget))
                    return;
                t = "cluster" + t
            }
            L.FeatureGroup.prototype.fire.call(this, t, e, i)
        },
        listens: function(t, e) {
            return L.FeatureGroup.prototype.listens.call(this, t, e) || L.FeatureGroup.prototype.listens.call(this, "cluster" + t, e)
        },
        _defaultIconCreateFunction: function(t) {
            var e = t.getChildCount()
              , t = " marker-cluster-";
            return t += e < 10 ? "small" : e < 100 ? "medium" : "large",
            new L.DivIcon({
                html: "<div><span>" + e + "</span></div>",
                className: "marker-cluster" + t,
                iconSize: new L.Point(40,40)
            })
        },
        _bindEvents: function() {
            var t = this._map
              , e = this.options.spiderfyOnMaxZoom
              , i = this.options.showCoverageOnHover
              , n = this.options.zoomToBoundsOnClick;
            (e || n) && this.on("clusterclick", this._zoomOrSpiderfy, this),
            i && (this.on("clustermouseover", this._showCoverage, this),
            this.on("clustermouseout", this._hideCoverage, this),
            t.on("zoomend", this._hideCoverage, this))
        },
        _zoomOrSpiderfy: function(t) {
            for (var e = t.layer, i = e; 1 === i._childClusters.length; )
                i = i._childClusters[0];
            i._zoom === this._maxZoom && i._childCount === e._childCount && this.options.spiderfyOnMaxZoom ? e.spiderfy() : this.options.zoomToBoundsOnClick && e.zoomToBounds(),
            t.originalEvent && 13 === t.originalEvent.keyCode && this._map._container.focus()
        },
        _showCoverage: function(t) {
            var e = this._map;
            this._inZoomAnimation || (this._shownPolygon && e.removeLayer(this._shownPolygon),
            2 < t.layer.getChildCount() && t.layer !== this._spiderfied && (this._shownPolygon = new L.Polygon(t.layer.getConvexHull(),this.options.polygonOptions),
            e.addLayer(this._shownPolygon)))
        },
        _hideCoverage: function() {
            this._shownPolygon && (this._map.removeLayer(this._shownPolygon),
            this._shownPolygon = null)
        },
        _unbindEvents: function() {
            var t = this.options.spiderfyOnMaxZoom
              , e = this.options.showCoverageOnHover
              , i = this.options.zoomToBoundsOnClick
              , n = this._map;
            (t || i) && this.off("clusterclick", this._zoomOrSpiderfy, this),
            e && (this.off("clustermouseover", this._showCoverage, this),
            this.off("clustermouseout", this._hideCoverage, this),
            n.off("zoomend", this._hideCoverage, this))
        },
        _zoomEnd: function() {
            this._map && (this._mergeSplitClusters(),
            this._zoom = Math.round(this._map._zoom),
            this._currentShownBounds = this._getExpandedVisibleBounds())
        },
        _moveEnd: function() {
            var t;
            this._inZoomAnimation || (t = this._getExpandedVisibleBounds(),
            this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, Math.floor(this._map.getMinZoom()), this._zoom, t),
            this._topClusterLevel._recursivelyAddChildrenToMap(null, Math.round(this._map._zoom), t),
            this._currentShownBounds = t)
        },
        _generateInitialClusters: function() {
            var t = Math.ceil(this._map.getMaxZoom())
              , e = Math.floor(this._map.getMinZoom())
              , i = this.options.maxClusterRadius
              , n = "function" != typeof i ? function() {
                return i
            }
            : i;
            null !== this.options.disableClusteringAtZoom && (t = this.options.disableClusteringAtZoom - 1),
            this._maxZoom = t,
            this._gridClusters = {},
            this._gridUnclustered = {};
            for (var o = t; e <= o; o--)
                this._gridClusters[o] = new L.DistanceGrid(n(o)),
                this._gridUnclustered[o] = new L.DistanceGrid(n(o));
            this._topClusterLevel = new this._markerCluster(this,e - 1)
        },
        _addLayer: function(t, e) {
            var i = this._gridClusters
              , n = this._gridUnclustered
              , o = Math.floor(this._map.getMinZoom());
            for (this.options.singleMarkerMode && this._overrideMarkerIcon(t),
            t.on(this._childMarkerEventHandlers, this); o <= e; e--) {
                var s = this._map.project(t.getLatLng(), e)
                  , r = i[e].getNearObject(s);
                if (r)
                    return r._addChild(t),
                    void (t.__parent = r);
                if (r = n[e].getNearObject(s)) {
                    var a = r.__parent;
                    a && this._removeLayer(r, !1);
                    var h = new this._markerCluster(this,e,r,t);
                    i[e].addObject(h, this._map.project(h._cLatLng, e)),
                    r.__parent = h;
                    for (var l = t.__parent = h, u = e - 1; u > a._zoom; u--)
                        l = new this._markerCluster(this,u,l),
                        i[u].addObject(l, this._map.project(r.getLatLng(), u));
                    return a._addChild(l),
                    void this._removeFromGridUnclustered(r, e)
                }
                n[e].addObject(t, s)
            }
            this._topClusterLevel._addChild(t),
            t.__parent = this._topClusterLevel
        },
        _refreshClustersIcons: function() {
            this._featureGroup.eachLayer(function(t) {
                t instanceof L.MarkerCluster && t._iconNeedsUpdate && t._updateIcon()
            })
        },
        _enqueue: function(t) {
            this._queue.push(t),
            this._queueTimeout || (this._queueTimeout = setTimeout(L.bind(this._processQueue, this), 300))
        },
        _processQueue: function() {
            for (var t = 0; t < this._queue.length; t++)
                this._queue[t].call(this);
            this._queue.length = 0,
            clearTimeout(this._queueTimeout),
            this._queueTimeout = null
        },
        _mergeSplitClusters: function() {
            var t = Math.round(this._map._zoom);
            this._processQueue(),
            this._zoom < t && this._currentShownBounds.intersects(this._getExpandedVisibleBounds()) ? (this._animationStart(),
            this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, Math.floor(this._map.getMinZoom()), this._zoom, this._getExpandedVisibleBounds()),
            this._animationZoomIn(this._zoom, t)) : this._zoom > t ? (this._animationStart(),
            this._animationZoomOut(this._zoom, t)) : this._moveEnd()
        },
        _getExpandedVisibleBounds: function() {
            return this.options.removeOutsideVisibleBounds ? L.Browser.mobile ? this._checkBoundsMaxLat(this._map.getBounds()) : this._checkBoundsMaxLat(this._map.getBounds().pad(1)) : this._mapBoundsInfinite
        },
        _checkBoundsMaxLat: function(t) {
            var e = this._maxLat;
            return void 0 !== e && (t.getNorth() >= e && (t._northEast.lat = 1 / 0),
            t.getSouth() <= -e && (t._southWest.lat = -1 / 0)),
            t
        },
        _animationAddLayerNonAnimated: function(t, e) {
            e === t ? this._featureGroup.addLayer(t) : 2 === e._childCount ? (e._addToMap(),
            t = e.getAllChildMarkers(),
            this._featureGroup.removeLayer(t[0]),
            this._featureGroup.removeLayer(t[1])) : e._updateIcon()
        },
        _extractNonGroupLayers: function(t, e) {
            var i, n = t.getLayers(), o = 0;
            for (e = e || []; o < n.length; o++)
                (i = n[o])instanceof L.LayerGroup ? this._extractNonGroupLayers(i, e) : e.push(i);
            return e
        },
        _overrideMarkerIcon: function(t) {
            return t.options.icon = this.options.iconCreateFunction({
                getChildCount: function() {
                    return 1
                },
                getAllChildMarkers: function() {
                    return [t]
                }
            })
        }
    });
    L.MarkerClusterGroup.include({
        _mapBoundsInfinite: new L.LatLngBounds(new L.LatLng(-1 / 0,-1 / 0),new L.LatLng(1 / 0,1 / 0))
    }),
    L.MarkerClusterGroup.include({
        _noAnimation: {
            _animationStart: function() {},
            _animationZoomIn: function(t, e) {
                this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, Math.floor(this._map.getMinZoom()), t),
                this._topClusterLevel._recursivelyAddChildrenToMap(null, e, this._getExpandedVisibleBounds()),
                this.fire("animationend")
            },
            _animationZoomOut: function(t, e) {
                this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, Math.floor(this._map.getMinZoom()), t),
                this._topClusterLevel._recursivelyAddChildrenToMap(null, e, this._getExpandedVisibleBounds()),
                this.fire("animationend")
            },
            _animationAddLayer: function(t, e) {
                this._animationAddLayerNonAnimated(t, e)
            }
        },
        _withAnimation: {
            _animationStart: function() {
                this._map._mapPane.className += " leaflet-cluster-anim",
                this._inZoomAnimation++
            },
            _animationZoomIn: function(o, s) {
                var r, a = this._getExpandedVisibleBounds(), h = this._featureGroup, t = Math.floor(this._map.getMinZoom());
                this._ignoreMove = !0,
                this._topClusterLevel._recursively(a, o, t, function(t) {
                    var e, i = t._latlng, n = t._markers;
                    for (a.contains(i) || (i = null),
                    t._isSingleParent() && o + 1 === s ? (h.removeLayer(t),
                    t._recursivelyAddChildrenToMap(null, s, a)) : (t.clusterHide(),
                    t._recursivelyAddChildrenToMap(i, s, a)),
                    r = n.length - 1; 0 <= r; r--)
                        e = n[r],
                        a.contains(e._latlng) || h.removeLayer(e)
                }),
                this._forceLayout(),
                this._topClusterLevel._recursivelyBecomeVisible(a, s),
                h.eachLayer(function(t) {
                    t instanceof L.MarkerCluster || !t._icon || t.clusterShow()
                }),
                this._topClusterLevel._recursively(a, o, s, function(t) {
                    t._recursivelyRestoreChildPositions(s)
                }),
                this._ignoreMove = !1,
                this._enqueue(function() {
                    this._topClusterLevel._recursively(a, o, t, function(t) {
                        h.removeLayer(t),
                        t.clusterShow()
                    }),
                    this._animationEnd()
                })
            },
            _animationZoomOut: function(t, e) {
                this._animationZoomOutSingle(this._topClusterLevel, t - 1, e),
                this._topClusterLevel._recursivelyAddChildrenToMap(null, e, this._getExpandedVisibleBounds()),
                this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, Math.floor(this._map.getMinZoom()), t, this._getExpandedVisibleBounds())
            },
            _animationAddLayer: function(t, e) {
                var i = this
                  , n = this._featureGroup;
                n.addLayer(t),
                e !== t && (2 < e._childCount ? (e._updateIcon(),
                this._forceLayout(),
                this._animationStart(),
                t._setPos(this._map.latLngToLayerPoint(e.getLatLng())),
                t.clusterHide(),
                this._enqueue(function() {
                    n.removeLayer(t),
                    t.clusterShow(),
                    i._animationEnd()
                })) : (this._forceLayout(),
                i._animationStart(),
                i._animationZoomOutSingle(e, this._map.getMaxZoom(), this._zoom)))
            }
        },
        _animationZoomOutSingle: function(e, i, n) {
            var o = this._getExpandedVisibleBounds()
              , s = Math.floor(this._map.getMinZoom());
            e._recursivelyAnimateChildrenInAndAddSelfToMap(o, s, i + 1, n);
            var r = this;
            this._forceLayout(),
            e._recursivelyBecomeVisible(o, n),
            this._enqueue(function() {
                var t;
                1 === e._childCount ? (t = e._markers[0],
                this._ignoreMove = !0,
                t.setLatLng(t.getLatLng()),
                this._ignoreMove = !1,
                t.clusterShow && t.clusterShow()) : e._recursively(o, n, s, function(t) {
                    t._recursivelyRemoveChildrenFromMap(o, s, i + 1)
                }),
                r._animationEnd()
            })
        },
        _animationEnd: function() {
            this._map && (this._map._mapPane.className = this._map._mapPane.className.replace(" leaflet-cluster-anim", "")),
            this._inZoomAnimation--,
            this.fire("animationend")
        },
        _forceLayout: function() {
            L.Util.falseFn(document.body.offsetWidth)
        }
    }),
    L.markerClusterGroup = function(t) {
        return new L.MarkerClusterGroup(t)
    }
    ;
    var i = L.MarkerCluster = L.Marker.extend({
        options: L.Icon.prototype.options,
        initialize: function(t, e, i, n) {
            L.Marker.prototype.initialize.call(this, i ? i._cLatLng || i.getLatLng() : new L.LatLng(0,0), {
                icon: this,
                pane: t.options.clusterPane
            }),
            this._group = t,
            this._zoom = e,
            this._markers = [],
            this._childClusters = [],
            this._childCount = 0,
            this._iconNeedsUpdate = !0,
            this._boundsNeedUpdate = !0,
            this._bounds = new L.LatLngBounds,
            i && this._addChild(i),
            n && this._addChild(n)
        },
        getAllChildMarkers: function(t, e) {
            t = t || [];
            for (var i = this._childClusters.length - 1; 0 <= i; i--)
                this._childClusters[i].getAllChildMarkers(t);
            for (var n = this._markers.length - 1; 0 <= n; n--)
                e && this._markers[n].__dragStart || t.push(this._markers[n]);
            return t
        },
        getChildCount: function() {
            return this._childCount
        },
        zoomToBounds: function(t) {
            for (var e = this._childClusters.slice(), i = this._group._map, n = i.getBoundsZoom(this._bounds), o = this._zoom + 1, i = i.getZoom(); 0 < e.length && o < n; ) {
                o++;
                for (var s = [], r = 0; r < e.length; r++)
                    s = s.concat(e[r]._childClusters);
                e = s
            }
            o < n ? this._group._map.setView(this._latlng, o) : n <= i ? this._group._map.setView(this._latlng, i + 1) : this._group._map.fitBounds(this._bounds, t)
        },
        getBounds: function() {
            var t = new L.LatLngBounds;
            return t.extend(this._bounds),
            t
        },
        _updateIcon: function() {
            this._iconNeedsUpdate = !0,
            this._icon && this.setIcon(this)
        },
        createIcon: function() {
            return this._iconNeedsUpdate && (this._iconObj = this._group.options.iconCreateFunction(this),
            this._iconNeedsUpdate = !1),
            this._iconObj.createIcon()
        },
        createShadow: function() {
            return this._iconObj.createShadow()
        },
        _addChild: function(t, e) {
            this._iconNeedsUpdate = !0,
            this._boundsNeedUpdate = !0,
            this._setClusterCenter(t),
            t instanceof L.MarkerCluster ? (e || (this._childClusters.push(t),
            t.__parent = this),
            this._childCount += t._childCount) : (e || this._markers.push(t),
            this._childCount++),
            this.__parent && this.__parent._addChild(t, !0)
        },
        _setClusterCenter: function(t) {
            this._cLatLng || (this._cLatLng = t._cLatLng || t._latlng)
        },
        _resetBounds: function() {
            var t = this._bounds;
            t._southWest && (t._southWest.lat = 1 / 0,
            t._southWest.lng = 1 / 0),
            t._northEast && (t._northEast.lat = -1 / 0,
            t._northEast.lng = -1 / 0)
        },
        _recalculateBounds: function() {
            var t, e, i, n = this._markers, o = this._childClusters, s = 0, r = 0, a = this._childCount;
            if (0 !== a) {
                for (this._resetBounds(),
                t = 0; t < n.length; t++)
                    e = n[t]._latlng,
                    this._bounds.extend(e),
                    s += e.lat,
                    r += e.lng;
                for (t = 0; t < o.length; t++)
                    (i = o[t])._boundsNeedUpdate && i._recalculateBounds(),
                    this._bounds.extend(i._bounds),
                    e = i._wLatLng,
                    i = i._childCount,
                    s += e.lat * i,
                    r += e.lng * i;
                this._latlng = this._wLatLng = new L.LatLng(s / a,r / a),
                this._boundsNeedUpdate = !1
            }
        },
        _addToMap: function(t) {
            t && (this._backupLatlng = this._latlng,
            this.setLatLng(t)),
            this._group._featureGroup.addLayer(this)
        },
        _recursivelyAnimateChildrenIn: function(t, o, e) {
            this._recursively(t, this._group._map.getMinZoom(), e - 1, function(t) {
                for (var e, i = t._markers, n = i.length - 1; 0 <= n; n--)
                    (e = i[n])._icon && (e._setPos(o),
                    e.clusterHide())
            }, function(t) {
                for (var e, i = t._childClusters, n = i.length - 1; 0 <= n; n--)
                    (e = i[n])._icon && (e._setPos(o),
                    e.clusterHide())
            })
        },
        _recursivelyAnimateChildrenInAndAddSelfToMap: function(e, i, n, o) {
            this._recursively(e, o, i, function(t) {
                t._recursivelyAnimateChildrenIn(e, t._group._map.latLngToLayerPoint(t.getLatLng()).round(), n),
                t._isSingleParent() && n - 1 === o ? (t.clusterShow(),
                t._recursivelyRemoveChildrenFromMap(e, i, n)) : t.clusterHide(),
                t._addToMap()
            })
        },
        _recursivelyBecomeVisible: function(t, e) {
            this._recursively(t, this._group._map.getMinZoom(), e, null, function(t) {
                t.clusterShow()
            })
        },
        _recursivelyAddChildrenToMap: function(n, o, s) {
            this._recursively(s, this._group._map.getMinZoom() - 1, o, function(t) {
                if (o !== t._zoom)
                    for (var e = t._markers.length - 1; 0 <= e; e--) {
                        var i = t._markers[e];
                        s.contains(i._latlng) && (n && (i._backupLatlng = i.getLatLng(),
                        i.setLatLng(n),
                        i.clusterHide && i.clusterHide()),
                        t._group._featureGroup.addLayer(i))
                    }
            }, function(t) {
                t._addToMap(n)
            })
        },
        _recursivelyRestoreChildPositions: function(t) {
            for (var e = this._markers.length - 1; 0 <= e; e--) {
                var i = this._markers[e];
                i._backupLatlng && (i.setLatLng(i._backupLatlng),
                delete i._backupLatlng)
            }
            if (t - 1 === this._zoom)
                for (var n = this._childClusters.length - 1; 0 <= n; n--)
                    this._childClusters[n]._restorePosition();
            else
                for (var o = this._childClusters.length - 1; 0 <= o; o--)
                    this._childClusters[o]._recursivelyRestoreChildPositions(t)
        },
        _restorePosition: function() {
            this._backupLatlng && (this.setLatLng(this._backupLatlng),
            delete this._backupLatlng)
        },
        _recursivelyRemoveChildrenFromMap: function(t, e, i, n) {
            var o, s;
            this._recursively(t, e - 1, i - 1, function(t) {
                for (s = t._markers.length - 1; 0 <= s; s--)
                    o = t._markers[s],
                    n && n.contains(o._latlng) || (t._group._featureGroup.removeLayer(o),
                    o.clusterShow && o.clusterShow())
            }, function(t) {
                for (s = t._childClusters.length - 1; 0 <= s; s--)
                    o = t._childClusters[s],
                    n && n.contains(o._latlng) || (t._group._featureGroup.removeLayer(o),
                    o.clusterShow && o.clusterShow())
            })
        },
        _recursively: function(t, e, i, n, o) {
            var s, r, a = this._childClusters, h = this._zoom;
            if (e <= h && (n && n(this),
            o && h === i && o(this)),
            h < e || h < i)
                for (s = a.length - 1; 0 <= s; s--)
                    (r = a[s])._boundsNeedUpdate && r._recalculateBounds(),
                    t.intersects(r._bounds) && r._recursively(t, e, i, n, o)
        },
        _isSingleParent: function() {
            return 0 < this._childClusters.length && this._childClusters[0]._childCount === this._childCount
        }
    });
    L.Marker.include({
        clusterHide: function() {
            var t = this.options.opacity;
            return this.setOpacity(0),
            this.options.opacity = t,
            this
        },
        clusterShow: function() {
            return this.setOpacity(this.options.opacity)
        }
    }),
    L.DistanceGrid = function(t) {
        this._cellSize = t,
        this._sqCellSize = t * t,
        this._grid = {},
        this._objectPoint = {}
    }
    ,
    L.DistanceGrid.prototype = {
        addObject: function(t, e) {
            var i = this._getCoord(e.x)
              , n = this._getCoord(e.y)
              , o = this._grid
              , n = o[n] = o[n] || {}
              , n = n[i] = n[i] || []
              , i = L.Util.stamp(t);
            this._objectPoint[i] = e,
            n.push(t)
        },
        updateObject: function(t, e) {
            this.removeObject(t),
            this.addObject(t, e)
        },
        removeObject: function(t, e) {
            var i, n, o = this._getCoord(e.x), s = this._getCoord(e.y), e = this._grid, r = e[s] = e[s] || {}, a = r[o] = r[o] || [];
            for (delete this._objectPoint[L.Util.stamp(t)],
            i = 0,
            n = a.length; i < n; i++)
                if (a[i] === t)
                    return a.splice(i, 1),
                    1 === n && delete r[o],
                    !0
        },
        eachObject: function(t, e) {
            var i, n, o, s, r, a, h, l = this._grid;
            for (i in l)
                for (n in r = l[i])
                    for (a = r[n],
                    o = 0,
                    s = a.length; o < s; o++)
                        h = t.call(e, a[o]),
                        h && (o--,
                        s--)
        },
        getNearObject: function(t) {
            for (var e, i, n, o, s, r, a, h = this._getCoord(t.x), l = this._getCoord(t.y), u = this._objectPoint, c = this._sqCellSize, d = null, _ = l - 1; _ <= l + 1; _++)
                if (n = this._grid[_])
                    for (e = h - 1; e <= h + 1; e++)
                        if (o = n[e])
                            for (i = 0,
                            s = o.length; i < s; i++)
                                r = o[i],
                                ((a = this._sqDist(u[L.Util.stamp(r)], t)) < c || a <= c && null === d) && (c = a,
                                d = r);
            return d
        },
        _getCoord: function(t) {
            var e = Math.floor(t / this._cellSize);
            return isFinite(e) ? e : t
        },
        _sqDist: function(t, e) {
            var i = e.x - t.x
              , t = e.y - t.y;
            return i * i + t * t
        }
    },
    L.QuickHull = {
        getDistant: function(t, e) {
            var i = e[1].lat - e[0].lat;
            return (e[0].lng - e[1].lng) * (t.lat - e[0].lat) + i * (t.lng - e[0].lng)
        },
        findMostDistantPointFromBaseLine: function(t, e) {
            for (var i, n, o = 0, s = null, r = [], a = e.length - 1; 0 <= a; a--)
                i = e[a],
                0 < (n = this.getDistant(i, t)) && (r.push(i),
                o < n && (o = n,
                s = i));
            return {
                maxPoint: s,
                newPoints: r
            }
        },
        buildConvexHull: function(t, e) {
            var i = []
              , e = this.findMostDistantPointFromBaseLine(t, e);
            return e.maxPoint ? (i = i.concat(this.buildConvexHull([t[0], e.maxPoint], e.newPoints))).concat(this.buildConvexHull([e.maxPoint, t[1]], e.newPoints)) : [t[0]]
        },
        getConvexHull: function(t) {
            for (var e = !1, i = !1, n = !1, o = !1, s = null, r = null, a = null, h = null, l = null, u = null, c = t.length - 1; 0 <= c; c--) {
                var d = t[c];
                (!1 === e || d.lat > e) && (e = (s = d).lat),
                (!1 === i || d.lat < i) && (i = (r = d).lat),
                (!1 === n || d.lng > n) && (n = (a = d).lng),
                (!1 === o || d.lng < o) && (o = (h = d).lng)
            }
            l = i !== e ? (u = r,
            s) : (u = h,
            a);
            return [].concat(this.buildConvexHull([u, l], t), this.buildConvexHull([l, u], t))
        }
    },
    L.MarkerCluster.include({
        getConvexHull: function() {
            for (var t, e = this.getAllChildMarkers(), i = [], n = e.length - 1; 0 <= n; n--)
                t = e[n].getLatLng(),
                i.push(t);
            return L.QuickHull.getConvexHull(i)
        }
    }),
    L.MarkerCluster.include({
        _2PI: 2 * Math.PI,
        _circleFootSeparation: 25,
        _circleStartAngle: 0,
        _spiralFootSeparation: 28,
        _spiralLengthStart: 11,
        _spiralLengthFactor: 5,
        _circleSpiralSwitchover: 9,
        spiderfy: function() {
            var t, e;
            this._group._spiderfied === this || this._group._inZoomAnimation || (t = this.getAllChildMarkers(null, !0),
            e = this._group._map.latLngToLayerPoint(this._latlng),
            this._group._unspiderfy(),
            this._group._spiderfied = this,
            e = t.length >= this._circleSpiralSwitchover ? this._generatePointsSpiral(t.length, e) : (e.y += 10,
            this._generatePointsCircle(t.length, e)),
            this._animationSpiderfy(t, e))
        },
        unspiderfy: function(t) {
            this._group._inZoomAnimation || (this._animationUnspiderfy(t),
            this._group._spiderfied = null)
        },
        _generatePointsCircle: function(t, e) {
            var i, n, o = this._group.options.spiderfyDistanceMultiplier * this._circleFootSeparation * (2 + t) / this._2PI, s = this._2PI / t, r = [], o = Math.max(o, 35);
            for (r.length = t,
            i = 0; i < t; i++)
                n = this._circleStartAngle + i * s,
                r[i] = new L.Point(e.x + o * Math.cos(n),e.y + o * Math.sin(n))._round();
            return r
        },
        _generatePointsSpiral: function(t, e) {
            for (var i = this._group.options.spiderfyDistanceMultiplier, n = i * this._spiralLengthStart, o = i * this._spiralFootSeparation, s = i * this._spiralLengthFactor * this._2PI, r = 0, a = [], h = a.length = t; 0 <= h; h--)
                h < t && (a[h] = new L.Point(e.x + n * Math.cos(r),e.y + n * Math.sin(r))._round()),
                n += s / (r += o / n + 5e-4 * h);
            return a
        },
        _noanimationUnspiderfy: function() {
            var t, e, i = this._group, n = i._map, o = i._featureGroup, s = this.getAllChildMarkers(null, !0);
            for (i._ignoreMove = !0,
            this.setOpacity(1),
            e = s.length - 1; 0 <= e; e--)
                t = s[e],
                o.removeLayer(t),
                t._preSpiderfyLatlng && (t.setLatLng(t._preSpiderfyLatlng),
                delete t._preSpiderfyLatlng),
                t.setZIndexOffset && t.setZIndexOffset(0),
                t._spiderLeg && (n.removeLayer(t._spiderLeg),
                delete t._spiderLeg);
            i.fire("unspiderfied", {
                cluster: this,
                markers: s
            }),
            i._ignoreMove = !1,
            i._spiderfied = null
        }
    }),
    L.MarkerClusterNonAnimated = L.MarkerCluster.extend({
        _animationSpiderfy: function(t, e) {
            var i, n, o, s, r = this._group, a = r._map, h = r._featureGroup, l = this._group.options.spiderLegPolylineOptions;
            for (r._ignoreMove = !0,
            i = 0; i < t.length; i++)
                s = a.layerPointToLatLng(e[i]),
                n = t[i],
                o = new L.Polyline([this._latlng, s],l),
                a.addLayer(o),
                n._spiderLeg = o,
                n._preSpiderfyLatlng = n._latlng,
                n.setLatLng(s),
                n.setZIndexOffset && n.setZIndexOffset(1e6),
                h.addLayer(n);
            this.setOpacity(.3),
            r._ignoreMove = !1,
            r.fire("spiderfied", {
                cluster: this,
                markers: t
            })
        },
        _animationUnspiderfy: function() {
            this._noanimationUnspiderfy()
        }
    }),
    L.MarkerCluster.include({
        _animationSpiderfy: function(t, e) {
            var i, n, o, s, r, a, h = this, l = this._group, u = l._map, c = l._featureGroup, d = this._latlng, _ = u.latLngToLayerPoint(d), p = L.Path.SVG, f = L.extend({}, this._group.options.spiderLegPolylineOptions), m = f.opacity;
            for (void 0 === m && (m = L.MarkerClusterGroup.prototype.options.spiderLegPolylineOptions.opacity),
            p ? (f.opacity = 0,
            f.className = (f.className || "") + " leaflet-cluster-spider-leg") : f.opacity = m,
            l._ignoreMove = !0,
            i = 0; i < t.length; i++)
                n = t[i],
                a = u.layerPointToLatLng(e[i]),
                o = new L.Polyline([d, a],f),
                u.addLayer(o),
                n._spiderLeg = o,
                p && (r = (s = o._path).getTotalLength() + .1,
                s.style.strokeDasharray = r,
                s.style.strokeDashoffset = r),
                n.setZIndexOffset && n.setZIndexOffset(1e6),
                n.clusterHide && n.clusterHide(),
                c.addLayer(n),
                n._setPos && n._setPos(_);
            for (l._forceLayout(),
            l._animationStart(),
            i = t.length - 1; 0 <= i; i--)
                a = u.layerPointToLatLng(e[i]),
                (n = t[i])._preSpiderfyLatlng = n._latlng,
                n.setLatLng(a),
                n.clusterShow && n.clusterShow(),
                p && ((s = (o = n._spiderLeg)._path).style.strokeDashoffset = 0,
                o.setStyle({
                    opacity: m
                }));
            this.setOpacity(.3),
            l._ignoreMove = !1,
            setTimeout(function() {
                l._animationEnd(),
                l.fire("spiderfied", {
                    cluster: h,
                    markers: t
                })
            }, 200)
        },
        _animationUnspiderfy: function(t) {
            var e, i, n, o, s, r = this, a = this._group, h = a._map, l = a._featureGroup, u = t ? h._latLngToNewLayerPoint(this._latlng, t.zoom, t.center) : h.latLngToLayerPoint(this._latlng), c = this.getAllChildMarkers(null, !0), d = L.Path.SVG;
            for (a._ignoreMove = !0,
            a._animationStart(),
            this.setOpacity(1),
            i = c.length - 1; 0 <= i; i--)
                (e = c[i])._preSpiderfyLatlng && (e.closePopup(),
                e.setLatLng(e._preSpiderfyLatlng),
                delete e._preSpiderfyLatlng,
                s = !0,
                e._setPos && (e._setPos(u),
                s = !1),
                e.clusterHide && (e.clusterHide(),
                s = !1),
                s && l.removeLayer(e),
                d && (s = (o = (n = e._spiderLeg)._path).getTotalLength() + .1,
                o.style.strokeDashoffset = s,
                n.setStyle({
                    opacity: 0
                })));
            a._ignoreMove = !1,
            setTimeout(function() {
                var t = 0;
                for (i = c.length - 1; 0 <= i; i--)
                    (e = c[i])._spiderLeg && t++;
                for (i = c.length - 1; 0 <= i; i--)
                    (e = c[i])._spiderLeg && (e.clusterShow && e.clusterShow(),
                    e.setZIndexOffset && e.setZIndexOffset(0),
                    1 < t && l.removeLayer(e),
                    h.removeLayer(e._spiderLeg),
                    delete e._spiderLeg);
                a._animationEnd(),
                a.fire("unspiderfied", {
                    cluster: r,
                    markers: c
                })
            }, 200)
        }
    }),
    L.MarkerClusterGroup.include({
        _spiderfied: null,
        unspiderfy: function() {
            this._unspiderfy.apply(this, arguments)
        },
        _spiderfierOnAdd: function() {
            this._map.on("click", this._unspiderfyWrapper, this),
            this._map.options.zoomAnimation && this._map.on("zoomstart", this._unspiderfyZoomStart, this),
            this._map.on("zoomend", this._noanimationUnspiderfy, this),
            L.Browser.touch || this._map.getRenderer(this)
        },
        _spiderfierOnRemove: function() {
            this._map.off("click", this._unspiderfyWrapper, this),
            this._map.off("zoomstart", this._unspiderfyZoomStart, this),
            this._map.off("zoomanim", this._unspiderfyZoomAnim, this),
            this._map.off("zoomend", this._noanimationUnspiderfy, this),
            this._noanimationUnspiderfy()
        },
        _unspiderfyZoomStart: function() {
            this._map && this._map.on("zoomanim", this._unspiderfyZoomAnim, this)
        },
        _unspiderfyZoomAnim: function(t) {
            L.DomUtil.hasClass(this._map._mapPane, "leaflet-touching") || (this._map.off("zoomanim", this._unspiderfyZoomAnim, this),
            this._unspiderfy(t))
        },
        _unspiderfyWrapper: function() {
            this._unspiderfy()
        },
        _unspiderfy: function(t) {
            this._spiderfied && this._spiderfied.unspiderfy(t)
        },
        _noanimationUnspiderfy: function() {
            this._spiderfied && this._spiderfied._noanimationUnspiderfy()
        },
        _unspiderfyLayer: function(t) {
            t._spiderLeg && (this._featureGroup.removeLayer(t),
            t.clusterShow && t.clusterShow(),
            t.setZIndexOffset && t.setZIndexOffset(0),
            this._map.removeLayer(t._spiderLeg),
            delete t._spiderLeg)
        }
    }),
    L.MarkerClusterGroup.include({
        refreshClusters: function(t) {
            return t ? t instanceof L.MarkerClusterGroup ? t = t._topClusterLevel.getAllChildMarkers() : t instanceof L.LayerGroup ? t = t._layers : t instanceof L.MarkerCluster ? t = t.getAllChildMarkers() : t instanceof L.Marker && (t = [t]) : t = this._topClusterLevel.getAllChildMarkers(),
            this._flagParentsIconsNeedUpdate(t),
            this._refreshClustersIcons(),
            this.options.singleMarkerMode && this._refreshSingleMarkerModeMarkers(t),
            this
        },
        _flagParentsIconsNeedUpdate: function(t) {
            var e, i;
            for (e in t)
                for (i = t[e].__parent; i; )
                    i._iconNeedsUpdate = !0,
                    i = i.__parent
        },
        _refreshSingleMarkerModeMarkers: function(t) {
            var e, i;
            for (e in t)
                i = t[e],
                this.hasLayer(i) && i.setIcon(this._overrideMarkerIcon(i))
        }
    }),
    L.Marker.include({
        refreshIconOptions: function(t, e) {
            var i = this.options.icon;
            return L.setOptions(i, t),
            this.setIcon(i),
            e && this.__parent && this.__parent._group.refreshClusters(this),
            this
        }
    }),
    t.MarkerClusterGroup = e,
    t.MarkerCluster = i
}),
function(n, e) {
    var r;
    L.drawVersion = "1.0.4",
    L.Draw = {},
    L.drawLocal = {
        draw: {
            toolbar: {
                actions: {
                    title: "",
                    text: "Cancel"
                },
                finish: {
                    title: "",
                    text: "Finish"
                },
                undo: {
                    title: "",
                    text: "Delete last point"
                },
                buttons: {
                    polyline: "Draw a path",
                    polygon: "Draw a polygon",
                    rectangle: "Draw a rectangle",
                    circle: "Draw a circle",
                    marker: "Draw a marker",
                    circlemarker: "Draw a text"
                }
            },
            handlers: {
                circle: {
                    tooltip: {
                        start: "Click and drag to draw circle"
                    },
                    radius: "Radius"
                },
                circlemarker: {
                    tooltip: {
                        start: ""
                    }
                },
                marker: {
                    tooltip: {
                        start: "Click map to place marker"
                    }
                },
                polygon: {
                    tooltip: {
                        start: "Click to start drawing shape",
                        cont: "Click to continue drawing shape",
                        end: "Click first point to close this shape"
                    }
                },
                polyline: {
                    error: "<strong>Error:</strong> shape edges cannot cross!",
                    tooltip: {
                        start: "Click to start drawing line",
                        cont: "Click to continue drawing line",
                        end: "Click last point to finish line"
                    }
                },
                rectangle: {
                    tooltip: {
                        start: "Click and drag to draw rectangle"
                    }
                },
                simpleshape: {
                    tooltip: {
                        end: "Release mouse to finish drawing"
                    }
                }
            }
        },
        edit: {
            toolbar: {
                actions: {
                    save: {
                        title: "",
                        text: "Save"
                    },
                    cancel: {
                        title: "",
                        text: "Cancel"
                    },
                    clearAll: {
                        title: "",
                        text: "Clear All"
                    }
                },
                buttons: {
                    edit: "Edit layers",
                    editDisabled: "No layers to edit",
                    remove: "Delete layers",
                    removeDisabled: "No layers to delete"
                }
            },
            handlers: {
                edit: {
                    tooltip: {
                        text: "Drag handles or markers to edit features",
                        subtext: "Click cancel to undo changes"
                    }
                },
                remove: {
                    tooltip: {
                        text: "Click on a feature to remove"
                    }
                }
            }
        }
    },
    L.Draw.Event = {},
    L.Draw.Event.CREATED = "draw:created",
    L.Draw.Event.EDITED = "draw:edited",
    L.Draw.Event.DELETED = "draw:deleted",
    L.Draw.Event.DRAWSTART = "draw:drawstart",
    L.Draw.Event.DRAWSTOP = "draw:drawstop",
    L.Draw.Event.DRAWVERTEX = "draw:drawvertex",
    L.Draw.Event.EDITSTART = "draw:editstart",
    L.Draw.Event.EDITMOVE = "draw:editmove",
    L.Draw.Event.EDITRESIZE = "draw:editresize",
    L.Draw.Event.EDITVERTEX = "draw:editvertex",
    L.Draw.Event.EDITSTOP = "draw:editstop",
    L.Draw.Event.DELETESTART = "draw:deletestart",
    L.Draw.Event.DELETESTOP = "draw:deletestop",
    L.Draw.Event.TOOLBAROPENED = "draw:toolbaropened",
    L.Draw.Event.TOOLBARCLOSED = "draw:toolbarclosed",
    L.Draw.Event.MARKERCONTEXT = "draw:markercontext",
    L.Draw = L.Draw || {},
    L.Draw.Feature = L.Handler.extend({
        initialize: function(t, e) {
            this._map = t,
            this._container = t._container,
            this._overlayPane = t._panes.overlayPane,
            this._popupPane = t._panes.popupPane,
            e && e.shapeOptions && (e.shapeOptions = L.Util.extend({}, this.options.shapeOptions, e.shapeOptions)),
            L.setOptions(this, e);
            e = L.version.split(".");
            1 === parseInt(e[0], 10) && 2 <= parseInt(e[1], 10) ? L.Draw.Feature.include(L.Evented.prototype) : L.Draw.Feature.include(L.Mixin.Events)
        },
        enable: function() {
            this._enabled || (L.Handler.prototype.enable.call(this),
            this.fire("enabled", {
                handler: this.type
            }),
            this._map.fire(L.Draw.Event.DRAWSTART, {
                layerType: this.type
            }))
        },
        disable: function() {
            this._enabled && (L.Handler.prototype.disable.call(this),
            this._map.fire(L.Draw.Event.DRAWSTOP, {
                layerType: this.type
            }),
            this.fire("disabled", {
                handler: this.type
            }))
        },
        addHooks: function() {
            var t = this._map;
            t && (L.DomUtil.disableTextSelection(),
            t.getContainer().focus(),
            this._tooltip = new L.Draw.Tooltip(this._map),
            L.DomEvent.on(this._container, "keyup", this._cancelDrawing, this))
        },
        removeHooks: function() {
            this._map && (L.DomUtil.enableTextSelection(),
            this._tooltip.dispose(),
            this._tooltip = null,
            L.DomEvent.off(this._container, "keyup", this._cancelDrawing, this))
        },
        setOptions: function(t) {
            L.setOptions(this, t)
        },
        _fireCreatedEvent: function(t) {
            this._map.fire(L.Draw.Event.CREATED, {
                layer: t,
                layerType: this.type
            })
        },
        _cancelDrawing: function(t) {
            27 === t.keyCode && (this._map.fire("draw:canceled", {
                layerType: this.type
            }),
            this.disable())
        }
    }),
    L.Draw.Polyline = L.Draw.Feature.extend({
        statics: {
            TYPE: "polyline"
        },
        Poly: L.Polyline,
        options: {
            allowIntersection: !0,
            repeatMode: !1,
            drawError: {
                color: "#b00b00",
                timeout: 2500
            },
            icon: new L.DivIcon({
                iconSize: new L.Point(8,8),
                className: "leaflet-div-icon leaflet-editing-icon"
            }),
            touchIcon: new L.DivIcon({
                iconSize: new L.Point(20,20),
                className: "leaflet-div-icon leaflet-editing-icon leaflet-touch-icon"
            }),
            guidelineDistance: 20,
            maxGuideLineLength: 4e3,
            shapeOptions: {
                stroke: !0,
                color: "#fce51e",
                weight: 4,
                fill: !1,
                clickable: !0
            },
            metric: !0,
            feet: !0,
            nautic: !1,
            showLength: !0,
            zIndexOffset: 2e3,
            factor: 1,
            maxPoints: 0
        },
        initialize: function(t, e) {
            L.Browser.touch && (this.options.icon = this.options.touchIcon),
            this.options.drawError.message = L.drawLocal.draw.handlers.polyline.error,
            e && e.drawError && (e.drawError = L.Util.extend({}, this.options.drawError, e.drawError)),
            this.type = L.Draw.Polyline.TYPE,
            L.Draw.Feature.prototype.initialize.call(this, t, e)
        },
        addHooks: function() {
            L.Draw.Feature.prototype.addHooks.call(this),
            this._map && (this._markers = [],
            this._markerGroup = new L.LayerGroup,
            this._map.addLayer(this._markerGroup),
            this._poly = new L.Polyline([],this.options.shapeOptions),
            this._tooltip.updateContent(this._getTooltipText()),
            this._mouseMarker || (this._mouseMarker = L.marker(this._map.getCenter(), {
                icon: L.divIcon({
                    className: "leaflet-mouse-marker",
                    iconAnchor: [20, 20],
                    iconSize: [40, 40]
                }),
                opacity: 0,
                zIndexOffset: this.options.zIndexOffset
            })),
            this._mouseMarker.on("mouseout", this._onMouseOut, this).on("mousemove", this._onMouseMove, this).on("mousedown", this._onMouseDown, this).on("mouseup", this._onMouseUp, this).addTo(this._map),
            this._map.on("mouseup", this._onMouseUp, this).on("mousemove", this._onMouseMove, this).on("zoomlevelschange", this._onZoomEnd, this).on("touchstart", this._onTouch, this).on("zoomend", this._onZoomEnd, this))
        },
        removeHooks: function() {
            L.Draw.Feature.prototype.removeHooks.call(this),
            this._clearHideErrorTimeout(),
            this._cleanUpShape(),
            this._map.removeLayer(this._markerGroup),
            delete this._markerGroup,
            delete this._markers,
            this._map.removeLayer(this._poly),
            delete this._poly,
            this._mouseMarker.off("mousedown", this._onMouseDown, this).off("mouseout", this._onMouseOut, this).off("mouseup", this._onMouseUp, this).off("mousemove", this._onMouseMove, this),
            this._map.removeLayer(this._mouseMarker),
            delete this._mouseMarker,
            this._clearGuides(),
            this._map.off("mouseup", this._onMouseUp, this).off("mousemove", this._onMouseMove, this).off("zoomlevelschange", this._onZoomEnd, this).off("zoomend", this._onZoomEnd, this).off("touchstart", this._onTouch, this).off("click", this._onTouch, this)
        },
        deleteLastVertex: function() {
            var t, e, i, n;
            this._markers.length <= 1 || (t = this._markers.pop(),
            n = (i = (e = this._poly).getLatLngs()).splice(-1, 1)[0],
            this._poly.setLatLngs(i),
            this._markerGroup.removeLayer(t),
            e.getLatLngs().length < 2 && this._map.removeLayer(e),
            this._vertexChanged(n, !1))
        },
        addVertex: function(t) {
            2 <= this._markers.length && !this.options.allowIntersection && this._poly.newLatLngIntersects(t) ? this._showErrorTooltip() : (this._errorShown && this._hideErrorTooltip(),
            this._markers.push(this._createMarker(t)),
            this._poly.addLatLng(t),
            2 === this._poly.getLatLngs().length && this._map.addLayer(this._poly),
            this._vertexChanged(t, !0))
        },
        completeShape: function() {
            this._markers.length <= 1 || !this._shapeIsValid() || (this._fireCreatedEvent(),
            this.disable(),
            this.options.repeatMode && this.enable())
        },
        _finishShape: function() {
            var t = this._poly._defaultShape ? this._poly._defaultShape() : this._poly.getLatLngs()
              , t = this._poly.newLatLngIntersects(t[t.length - 1]);
            !this.options.allowIntersection && t || !this._shapeIsValid() ? this._showErrorTooltip() : (this._fireCreatedEvent(),
            this.disable(),
            this.options.repeatMode && this.enable())
        },
        _shapeIsValid: function() {
            return !0
        },
        _onZoomEnd: function() {
            null !== this._markers && this._updateGuide()
        },
        _onMouseMove: function(t) {
            var e = this._map.mouseEventToLayerPoint(t.originalEvent)
              , i = this._map.layerPointToLatLng(e);
            this._currentLatLng = i,
            this._updateTooltip(i),
            this._updateGuide(e),
            this._mouseMarker.setLatLng(i),
            L.DomEvent.preventDefault(t.originalEvent)
        },
        _vertexChanged: function(t, e) {
            this._map.fire(L.Draw.Event.DRAWVERTEX, {
                layers: this._markerGroup,
                poly: this._poly
            }),
            this._updateFinishHandler(),
            this._updateRunningMeasure(t, e),
            this._clearGuides(),
            this._updateTooltip()
        },
        _onMouseDown: function(t) {
            var e;
            this._clickHandled || this._touchHandled || this._disableMarkers || (this._onMouseMove(t),
            this._clickHandled = !0,
            this._disableNewMarkers(),
            t = (e = t.originalEvent).clientX,
            e = e.clientY,
            this._startPoint.call(this, t, e))
        },
        _startPoint: function(t, e) {
            this._mouseDownOrigin = L.point(t, e)
        },
        _onMouseUp: function(t) {
            var e = t.originalEvent
              , i = e.clientX
              , e = e.clientY;
            this._endPoint.call(this, i, e, t),
            this._clickHandled = null
        },
        _endPoint: function(t, e, i) {
            this._mouseDownOrigin && (t = L.point(t, e).distanceTo(this._mouseDownOrigin),
            e = this._calculateFinishDistance(i.latlng),
            1 < this.options.maxPoints && this.options.maxPoints == this._markers.length + 1 ? (this.addVertex(i.latlng),
            this._finishShape()) : e < 10 && L.Browser.touch ? this._finishShape() : Math.abs(t) < 9 * (n.devicePixelRatio || 1) && this.addVertex(i.latlng),
            this._enableNewMarkers()),
            this._mouseDownOrigin = null
        },
        _onTouch: function(t) {
            var e, i = t.originalEvent;
            !i.touches || !i.touches[0] || this._clickHandled || this._touchHandled || this._disableMarkers || (e = i.touches[0].clientX,
            i = i.touches[0].clientY,
            this._disableNewMarkers(),
            this._touchHandled = !0,
            this._startPoint.call(this, e, i),
            this._endPoint.call(this, e, i, t),
            this._touchHandled = null),
            this._clickHandled = null
        },
        _onMouseOut: function() {
            this._tooltip && this._tooltip._onMouseOut.call(this._tooltip)
        },
        _calculateFinishDistance: function(t) {
            if (0 < this._markers.length) {
                if (this.type === L.Draw.Polyline.TYPE)
                    i = this._markers[this._markers.length - 1];
                else {
                    if (this.type !== L.Draw.Polygon.TYPE)
                        return 1 / 0;
                    i = this._markers[0]
                }
                var e = this._map.latLngToContainerPoint(i.getLatLng())
                  , i = new L.Marker(t,{
                    icon: this.options.icon,
                    zIndexOffset: 2 * this.options.zIndexOffset
                })
                  , i = this._map.latLngToContainerPoint(i.getLatLng())
                  , i = e.distanceTo(i)
            } else
                i = 1 / 0;
            return i
        },
        _updateFinishHandler: function() {
            var t = this._markers.length;
            1 < t && this._markers[t - 1].on("click", this._finishShape, this),
            2 < t && this._markers[t - 2].off("click", this._finishShape, this)
        },
        _createMarker: function(t) {
            t = new L.Marker(t,{
                icon: this.options.icon,
                zIndexOffset: 2 * this.options.zIndexOffset
            });
            return this._markerGroup.addLayer(t),
            t
        },
        _updateGuide: function(t) {
            var e = this._markers ? this._markers.length : 0;
            0 < e && (t = t || this._map.latLngToLayerPoint(this._currentLatLng),
            this._clearGuides(),
            this._drawGuide(this._map.latLngToLayerPoint(this._markers[e - 1].getLatLng()), t))
        },
        _updateTooltip: function(t) {
            var e = this._getTooltipText();
            t && this._tooltip.updatePosition(t),
            this._errorShown || this._tooltip.updateContent(e)
        },
        _drawGuide: function(t, e) {
            var i, n, o = Math.floor(Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))), s = this.options.guidelineDistance, r = this.options.maxGuideLineLength, a = r < o ? o - r : s;
            for (this._guidesContainer || (this._guidesContainer = L.DomUtil.create("div", "leaflet-draw-guides", this._overlayPane)); a < o; a += this.options.guidelineDistance)
                n = a / o,
                i = {
                    x: Math.floor(t.x * (1 - n) + n * e.x),
                    y: Math.floor(t.y * (1 - n) + n * e.y)
                },
                (n = L.DomUtil.create("div", "leaflet-draw-guide-dash", this._guidesContainer)).style.backgroundColor = (this._errorShown ? this.options.drawError : this.options.shapeOptions).color,
                L.DomUtil.setPosition(n, i)
        },
        _updateGuideColor: function(t) {
            if (this._guidesContainer)
                for (var e = 0, i = this._guidesContainer.childNodes.length; e < i; e++)
                    this._guidesContainer.childNodes[e].style.backgroundColor = t
        },
        _clearGuides: function() {
            if (this._guidesContainer)
                for (; this._guidesContainer.firstChild; )
                    this._guidesContainer.removeChild(this._guidesContainer.firstChild)
        },
        _getTooltipText: function() {
            var t = this.options.showLength
              , e = 0 === this._markers.length ? {
                text: L.drawLocal.draw.handlers.polyline.tooltip.start
            } : (e = t ? this._getMeasurementString() : "",
            1 === this._markers.length ? {
                text: L.drawLocal.draw.handlers.polyline.tooltip.cont,
                subtext: e
            } : {
                text: L.drawLocal.draw.handlers.polyline.tooltip.end,
                subtext: e
            });
            return e
        },
        _getDistance: function(t, e) {
            var i = Math.abs(t.lat - e.lat)
              , e = Math.abs(t.lng - e.lng);
            return 11.7 * Math.sqrt(i * i + e * e)
        },
        _getDistanceReadable: function(t) {
            var e = "📐 ";
            return e += 1e3 < t ? L.GeometryUtil.formattedNumber(t / 1e3, 2) + " km" : L.GeometryUtil.formattedNumber(t, 2) + " m"
        },
        _updateRunningMeasure: function(t, e) {
            var i = this._markers.length;
            1 === i ? this._measurementRunningTotal = 0 : (i = this._getDistance(t, this._markers[i - (e ? 2 : 1)].getLatLng()),
            this._measurementRunningTotal += i * (e ? 1 : -1))
        },
        _getMeasurementString: function() {
            var t = this._currentLatLng
              , e = this._markers[this._markers.length - 1].getLatLng()
              , e = e && t ? this._measurementRunningTotal + this._getDistance(t, e) : this._measurementRunningTotal || 0;
            return this._getDistanceReadable(e)
        },
        _showErrorTooltip: function() {
            this._errorShown = !0,
            this._tooltip.showAsError().updateContent({
                text: this.options.drawError.message
            }),
            this._updateGuideColor(this.options.drawError.color),
            this._poly.setStyle({
                color: this.options.drawError.color
            }),
            this._clearHideErrorTimeout(),
            this._hideErrorTimeout = setTimeout(L.Util.bind(this._hideErrorTooltip, this), this.options.drawError.timeout)
        },
        _hideErrorTooltip: function() {
            this._errorShown = !1,
            this._clearHideErrorTimeout(),
            this._tooltip.removeError().updateContent(this._getTooltipText()),
            this._updateGuideColor(this.options.shapeOptions.color),
            this._poly.setStyle({
                color: this.options.shapeOptions.color
            })
        },
        _clearHideErrorTimeout: function() {
            this._hideErrorTimeout && (clearTimeout(this._hideErrorTimeout),
            this._hideErrorTimeout = null)
        },
        _disableNewMarkers: function() {
            this._disableMarkers = !0
        },
        _enableNewMarkers: function() {
            setTimeout(function() {
                this._disableMarkers = !1
            }
            .bind(this), 50)
        },
        _cleanUpShape: function() {
            1 < this._markers.length && this._markers[this._markers.length - 1].off("click", this._finishShape, this)
        },
        _fireCreatedEvent: function() {
            var t = new this.Poly(this._poly.getLatLngs(),this.options.shapeOptions);
            L.Draw.Feature.prototype._fireCreatedEvent.call(this, t)
        }
    }),
    L.Draw.Polygon = L.Draw.Polyline.extend({
        statics: {
            TYPE: "polygon"
        },
        Poly: L.Polygon,
        options: {
            showArea: !1,
            showLength: !1,
            shapeOptions: {
                stroke: !0,
                color: "#fce51e",
                weight: 4,
                fill: !0,
                fillColor: null,
                fillOpacity: .4,
                clickable: !0
            },
            metric: !0,
            feet: !0,
            nautic: !1,
            precision: {}
        },
        initialize: function(t, e) {
            L.Draw.Polyline.prototype.initialize.call(this, t, e),
            this.type = L.Draw.Polygon.TYPE
        },
        _updateFinishHandler: function() {
            var t = this._markers.length;
            1 === t && this._markers[0].on("click", this._finishShape, this),
            2 < t && (this._markers[t - 1].on("dblclick", this._finishShape, this),
            3 < t && this._markers[t - 2].off("dblclick", this._finishShape, this))
        },
        _getTooltipText: function() {
            var t, e;
            return 0 === this._markers.length ? t = L.drawLocal.draw.handlers.polygon.tooltip.start : e = (t = this._markers.length < 3 ? L.drawLocal.draw.handlers.polygon.tooltip.cont : L.drawLocal.draw.handlers.polygon.tooltip.end,
            this._getMeasurementString()),
            {
                text: t,
                subtext: e
            }
        },
        _getMeasurementString: function() {
            var t = this._area
              , e = "";
            return t || this.options.showLength ? (this.options.showLength && (e = L.Draw.Polyline.prototype._getMeasurementString.call(this)),
            t && (e += "<br>" + L.GeometryUtil.readableArea(t, this.options.metric, this.options.precision)),
            e) : null
        },
        _shapeIsValid: function() {
            return 3 <= this._markers.length
        },
        _vertexChanged: function(t, e) {
            var i;
            !this.options.allowIntersection && this.options.showArea && (i = this._poly.getLatLngs(),
            this._area = L.GeometryUtil.geodesicArea(i)),
            L.Draw.Polyline.prototype._vertexChanged.call(this, t, e)
        },
        _cleanUpShape: function() {
            var t = this._markers.length;
            0 < t && (this._markers[0].off("click", this._finishShape, this),
            2 < t && this._markers[t - 1].off("dblclick", this._finishShape, this))
        }
    }),
    L.SimpleShape = {},
    L.Draw.SimpleShape = L.Draw.Feature.extend({
        options: {
            repeatMode: !1
        },
        initialize: function(t, e) {
            this._endLabelText = L.drawLocal.draw.handlers.simpleshape.tooltip.end,
            L.Draw.Feature.prototype.initialize.call(this, t, e)
        },
        addHooks: function() {
            L.Draw.Feature.prototype.addHooks.call(this),
            this._map && (this._mapDraggable = this._map.dragging.enabled(),
            this._mapDraggable && this._map.dragging.disable(),
            this._container.style.cursor = "crosshair",
            this._tooltip.updateContent({
                text: this._initialLabelText
            }),
            this._map.on("mousedown", this._onMouseDown, this).on("mousemove", this._onMouseMove, this).on("touchstart", this._onMouseDown, this).on("touchmove", this._onMouseMove, this),
            e.addEventListener("touchstart", L.DomEvent.preventDefault, {
                passive: !1
            }))
        },
        removeHooks: function() {
            L.Draw.Feature.prototype.removeHooks.call(this),
            this._map && (this._mapDraggable && this._map.dragging.enable(),
            this._container.style.cursor = "",
            this._map.off("mousedown", this._onMouseDown, this).off("mousemove", this._onMouseMove, this).off("touchstart", this._onMouseDown, this).off("touchmove", this._onMouseMove, this),
            L.DomEvent.off(e, "mouseup", this._onMouseUp, this),
            L.DomEvent.off(e, "touchend", this._onMouseUp, this),
            e.removeEventListener("touchstart", L.DomEvent.preventDefault),
            this._shape && (this._map.removeLayer(this._shape),
            delete this._shape)),
            this._isDrawing = !1
        },
        _getTooltipText: function() {
            return {
                text: this._endLabelText
            }
        },
        _onMouseDown: function(t) {
            this._isDrawing = !0,
            this._startLatLng = t.latlng,
            L.DomEvent.on(e, "mouseup", this._onMouseUp, this).on(e, "touchend", this._onMouseUp, this).preventDefault(t.originalEvent)
        },
        _onMouseMove: function(t) {
            t = t.latlng;
            this._tooltip.updatePosition(t),
            this._isDrawing && (this._tooltip.updateContent(this._getTooltipText()),
            this._drawShape(t))
        },
        _onMouseUp: function() {
            this._shape && this._fireCreatedEvent(),
            this.disable(),
            this.options.repeatMode && this.enable()
        }
    }),
    L.Draw.Rectangle = L.Draw.SimpleShape.extend({
        statics: {
            TYPE: "rectangle"
        },
        options: {
            shapeOptions: {
                stroke: !0,
                color: "#fce51e",
                weight: 4,
                fill: !0,
                fillColor: null,
                fillOpacity: .4,
                clickable: !0
            },
            showArea: !1,
            metric: !0
        },
        initialize: function(t, e) {
            this.type = L.Draw.Rectangle.TYPE,
            this._initialLabelText = L.drawLocal.draw.handlers.rectangle.tooltip.start,
            L.Draw.SimpleShape.prototype.initialize.call(this, t, e)
        },
        disable: function() {
            this._enabled && (this._isCurrentlyTwoClickDrawing = !1,
            L.Draw.SimpleShape.prototype.disable.call(this))
        },
        _onMouseUp: function(t) {
            this._shape || this._isCurrentlyTwoClickDrawing ? this._isCurrentlyTwoClickDrawing && !function(t, e) {
                for (; (t = t.parentElement) && !t.classList.contains(e); )
                    ;
                return t
            }(t.target, "leaflet-pane") || L.Draw.SimpleShape.prototype._onMouseUp.call(this) : this._isCurrentlyTwoClickDrawing = !0
        },
        _drawShape: function(t) {
            this._shape ? this._shape.setBounds(new L.LatLngBounds(this._startLatLng,t)) : (this._shape = new L.Rectangle(new L.LatLngBounds(this._startLatLng,t),this.options.shapeOptions),
            this._map.addLayer(this._shape))
        },
        _fireCreatedEvent: function() {
            var t = new L.Rectangle(this._shape.getBounds(),this.options.shapeOptions);
            L.Draw.SimpleShape.prototype._fireCreatedEvent.call(this, t)
        },
        _getTooltipText: function() {
            var t, e = L.Draw.SimpleShape.prototype._getTooltipText.call(this), i = this._shape, n = this.options.showArea;
            return i && (t = this._shape._defaultShape ? this._shape._defaultShape() : this._shape.getLatLngs(),
            t = L.GeometryUtil.geodesicArea(t),
            t = n ? L.GeometryUtil.readableArea(t, this.options.metric) : ""),
            {
                text: e.text,
                subtext: t
            }
        }
    }),
    L.Draw.Marker = L.Draw.Feature.extend({
        statics: {
            TYPE: "marker"
        },
        options: {
            icon: new L.divIcon({
                className: "crosshair",
                html: '<svg width="30" height="30" viewBox="0 0 24 24" style="fill:#fce51e;stroke:#000"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg>',
                iconSize: [30, 30],
                iconAnchor: [15, 30],
                tooltipAnchor: [15, -15]
            }),
            repeatMode: !1,
            zIndexOffset: 2e3
        },
        initialize: function(t, e) {
            this.type = L.Draw.Marker.TYPE,
            this._initialLabelText = L.drawLocal.draw.handlers.marker.tooltip.start,
            L.Draw.Feature.prototype.initialize.call(this, t, e)
        },
        addHooks: function() {
            L.Draw.Feature.prototype.addHooks.call(this),
            this._map && (this._tooltip.updateContent({
                text: this._initialLabelText
            }),
            this._mouseMarker || (this._mouseMarker = L.marker(this._map.getCenter(), {
                icon: L.divIcon({
                    className: "leaflet-mouse-marker",
                    iconAnchor: [20, 20],
                    iconSize: [40, 40]
                }),
                opacity: 0,
                zIndexOffset: this.options.zIndexOffset
            })),
            this._mouseMarker.on("click", this._onClick, this).addTo(this._map),
            this._map.on("mousemove", this._onMouseMove, this),
            this._map.on("click", this._onTouch, this))
        },
        removeHooks: function() {
            L.Draw.Feature.prototype.removeHooks.call(this),
            this._map && (this._map.off("click", this._onClick, this).off("click", this._onTouch, this),
            this._marker && (this._marker.off("click", this._onClick, this),
            this._map.removeLayer(this._marker),
            delete this._marker),
            this._mouseMarker.off("click", this._onClick, this),
            this._map.removeLayer(this._mouseMarker),
            delete this._mouseMarker,
            this._map.off("mousemove", this._onMouseMove, this))
        },
        _onMouseMove: function(t) {
            t = t.latlng;
            this._tooltip.updatePosition(t),
            this._mouseMarker.setLatLng(t),
            this._marker ? (t = this._mouseMarker.getLatLng(),
            this._marker.setLatLng(t)) : (this._marker = this._createMarker(t),
            this._marker.on("click", this._onClick, this),
            this._map.on("click", this._onClick, this).addLayer(this._marker))
        },
        _createMarker: function(t) {
            return new L.Marker(t,{
                icon: this.options.icon,
                zIndexOffset: this.options.zIndexOffset
            })
        },
        _onClick: function() {
            this._fireCreatedEvent(),
            this.disable(),
            this.options.repeatMode && this.enable()
        },
        _onTouch: function(t) {
            this._onMouseMove(t),
            this._onClick()
        },
        _fireCreatedEvent: function() {
            var t = new L.Marker.Touch(this._marker.getLatLng(),{
                icon: this.options.icon
            });
            L.Draw.Feature.prototype._fireCreatedEvent.call(this, t)
        }
    }),
    L.Draw.CircleMarker = L.Draw.Marker.extend({
        statics: {
            TYPE: "circlemarker"
        },
        options: {
            zIndexOffset: 2e3
        },
        initialize: function(t, e) {
            this.type = L.Draw.CircleMarker.TYPE,
            this._initialLabelText = L.drawLocal.draw.handlers.circlemarker.tooltip.start,
            L.Draw.Feature.prototype.initialize.call(this, t, e)
        },
        _createMarker: function(t) {
            return window.circlemarkerTooltip = prompt("Enter your text: "),
            window.circlemarkerTooltip || (window.circlemarkerTooltip = "Enter your text:"),
            new L.Marker(t,{
                icon: new L.divIcon({
                    className: "marker-text",
                    html: "<div>" + window.circlemarkerTooltip + "</div>",
                    iconSize: null
                }),
                zIndexOffset: this.options.zIndexOffset
            })
        },
        _fireCreatedEvent: function() {
            var t = new L.Marker.Touch(this._marker.getLatLng(),{
                icon: new L.divIcon({
                    className: "marker-text",
                    html: "<div>" + window.circlemarkerTooltip + "</div>",
                    iconSize: null
                })
            });
            t.options.tooltip = window.circlemarkerTooltip,
            L.Draw.Feature.prototype._fireCreatedEvent.call(this, t)
        }
    }),
    L.Draw.Circle = L.Draw.SimpleShape.extend({
        statics: {
            TYPE: "circle"
        },
        options: {
            shapeOptions: {
                stroke: !0,
                color: "#fce51e",
                weight: 4,
                fill: !0,
                fillColor: null,
                fillOpacity: .4,
                clickable: !0
            },
            showRadius: !1,
            metric: !0,
            feet: !0,
            nautic: !1
        },
        initialize: function(t, e) {
            this.type = L.Draw.Circle.TYPE,
            this._initialLabelText = L.drawLocal.draw.handlers.circle.tooltip.start,
            L.Draw.SimpleShape.prototype.initialize.call(this, t, e)
        },
        _drawShape: function(t) {
            t = L.GeometryUtil.isVersion07x() ? this._startLatLng.distanceTo(t) : this._map.distance(this._startLatLng, t),
            this._shape ? this._shape.setRadius(t) : (this._shape = new L.Circle(this._startLatLng,t,this.options.shapeOptions),
            this._map.addLayer(this._shape))
        },
        _fireCreatedEvent: function() {
            var t = new L.Circle(this._startLatLng,this._shape.getRadius(),this.options.shapeOptions);
            L.Draw.SimpleShape.prototype._fireCreatedEvent.call(this, t)
        },
        _onMouseMove: function(t) {
            var e = t.latlng
              , i = this.options.showRadius
              , n = this.options.metric;
            this._tooltip.updatePosition(e),
            this._isDrawing && (this._drawShape(e),
            t = this._shape.getRadius().toFixed(1),
            e = "",
            i && (e = L.drawLocal.draw.handlers.circle.radius + ": " + L.GeometryUtil.readableDistance(t, n, this.options.feet, this.options.nautic)),
            this._tooltip.updateContent({
                text: this._endLabelText,
                subtext: e
            }))
        }
    }),
    L.Edit = L.Edit || {},
    L.Edit.Marker = L.Handler.extend({
        initialize: function(t, e) {
            this._marker = t,
            L.setOptions(this, e)
        },
        addHooks: function() {
            var t = this._marker;
            t.dragging.enable(),
            t.on("dragend", this._onDragEnd, t),
            this._toggleMarkerHighlight()
        },
        removeHooks: function() {
            var t = this._marker;
            t.dragging.disable(),
            t.off("dragend", this._onDragEnd, t),
            this._toggleMarkerHighlight()
        },
        _onDragEnd: function(t) {
            t = t.target;
            t.edited = !0,
            this._map.fire(L.Draw.Event.EDITMOVE, {
                layer: t
            })
        },
        _toggleMarkerHighlight: function() {
            var t = this._marker._icon;
            t && (t.style.display = "none",
            L.DomUtil.hasClass(t, "leaflet-edit-marker-selected") ? (L.DomUtil.removeClass(t, "leaflet-edit-marker-selected"),
            this._offsetMarker(t, -4)) : (L.DomUtil.addClass(t, "leaflet-edit-marker-selected"),
            this._offsetMarker(t, 4)),
            t.style.display = "")
        },
        _offsetMarker: function(t, e) {
            var i = parseInt(t.style.marginTop, 10) - e
              , e = parseInt(t.style.marginLeft, 10) - e;
            t.style.marginTop = i + "px",
            t.style.marginLeft = e + "px"
        }
    }),
    L.Marker.addInitHook(function() {
        L.Edit.Marker && (this.editing = new L.Edit.Marker(this),
        this.options.editable && this.editing.enable())
    }),
    L.Edit = L.Edit || {},
    L.Edit.Poly = L.Handler.extend({
        initialize: function(t) {
            this.latlngs = [t._latlngs],
            t._holes && (this.latlngs = this.latlngs.concat(t._holes)),
            this._poly = t,
            this._poly.on("revert-edited", this._updateLatLngs, this)
        },
        _defaultShape: function() {
            return !L.Polyline._flat || L.Polyline._flat(this._poly._latlngs) ? this._poly._latlngs : this._poly._latlngs[0]
        },
        _eachVertexHandler: function(t) {
            for (var e = 0; e < this._verticesHandlers.length; e++)
                t(this._verticesHandlers[e])
        },
        addHooks: function() {
            this._initHandlers(),
            this._eachVertexHandler(function(t) {
                t.addHooks()
            })
        },
        removeHooks: function() {
            this._eachVertexHandler(function(t) {
                t.removeHooks()
            })
        },
        updateMarkers: function() {
            this._eachVertexHandler(function(t) {
                t.updateMarkers()
            })
        },
        _initHandlers: function() {
            this._verticesHandlers = [];
            for (var t = 0; t < this.latlngs.length; t++)
                this._verticesHandlers.push(new L.Edit.PolyVerticesEdit(this._poly,this.latlngs[t],this._poly.options.poly))
        },
        _updateLatLngs: function(t) {
            this.latlngs = [t.layer._latlngs],
            t.layer._holes && (this.latlngs = this.latlngs.concat(t.layer._holes))
        }
    }),
    L.Edit.PolyVerticesEdit = L.Handler.extend({
        options: {
            icon: new L.DivIcon({
                iconSize: new L.Point(8,8),
                className: "leaflet-div-icon leaflet-editing-icon"
            }),
            touchIcon: new L.DivIcon({
                iconSize: new L.Point(20,20),
                className: "leaflet-div-icon leaflet-editing-icon leaflet-touch-icon"
            }),
            drawError: {
                color: "#b00b00",
                timeout: 1e3
            }
        },
        initialize: function(t, e, i) {
            L.Browser.touch && (this.options.icon = this.options.touchIcon),
            this._poly = t,
            i && i.drawError && (i.drawError = L.Util.extend({}, this.options.drawError, i.drawError)),
            this._latlngs = e,
            L.setOptions(this, i)
        },
        _defaultShape: function() {
            return !L.Polyline._flat || L.Polyline._flat(this._latlngs) ? this._latlngs : this._latlngs[0]
        },
        addHooks: function() {
            var t = this._poly
              , e = t._path;
            t instanceof L.Polygon || (t.options.fill = !1,
            t.options.editing && (t.options.editing.fill = !1)),
            e && t.options.editing && t.options.editing.className && (t.options.original.className && t.options.original.className.split(" ").forEach(function(t) {
                L.DomUtil.removeClass(e, t)
            }),
            t.options.editing.className.split(" ").forEach(function(t) {
                L.DomUtil.addClass(e, t)
            })),
            t.setStyle(t.options.editing),
            this._poly._map && (this._map = this._poly._map,
            this._markerGroup || this._initMarkers(),
            this._poly._map.addLayer(this._markerGroup))
        },
        removeHooks: function() {
            var t = this._poly
              , e = t._path;
            e && t.options.editing && t.options.editing.className && (t.options.editing.className.split(" ").forEach(function(t) {
                L.DomUtil.removeClass(e, t)
            }),
            t.options.original.className && t.options.original.className.split(" ").forEach(function(t) {
                L.DomUtil.addClass(e, t)
            })),
            t.setStyle(t.options.original),
            t._map && (t._map.removeLayer(this._markerGroup),
            delete this._markerGroup,
            delete this._markers)
        },
        updateMarkers: function() {
            this._markerGroup.clearLayers(),
            this._initMarkers()
        },
        _initMarkers: function() {
            this._markerGroup || (this._markerGroup = new L.LayerGroup),
            this._markers = [];
            for (var t, e, i, n, o = this._defaultShape(), s = 0, r = o.length; s < r; s++)
                (e = this._createMarker(o[s], s)).on("click", this._onMarkerClick, this),
                e.on("contextmenu", this._onContextMenu, this),
                this._markers.push(e);
            for (s = 0,
            t = r - 1; s < r; t = s++)
                (0 !== s || L.Polygon && this._poly instanceof L.Polygon) && (i = this._markers[t],
                n = this._markers[s],
                this._createMiddleMarker(i, n),
                this._updatePrevNext(i, n))
        },
        _createMarker: function(t, e) {
            var i = new L.Marker.Touch(t,{
                draggable: !0,
                icon: this.options.icon
            });
            return i._origLatLng = t,
            i._index = e,
            i.on("dragstart", this._onMarkerDragStart, this).on("drag", this._onMarkerDrag, this).on("dragend", this._fireEdit, this).on("touchmove", this._onTouchMove, this).on("touchend", this._fireEdit, this).on("MSPointerMove", this._onTouchMove, this).on("MSPointerUp", this._fireEdit, this),
            this._markerGroup.addLayer(i),
            i
        },
        _onMarkerDragStart: function() {
            this._poly.fire("editstart")
        },
        _spliceLatLngs: function() {
            var t = this._defaultShape()
              , e = [].splice.apply(t, arguments);
            return this._poly._convertLatLngs(t, !0),
            this._poly.redraw(),
            e
        },
        _removeMarker: function(t) {
            var e = t._index;
            this._markerGroup.removeLayer(t),
            this._markers.splice(e, 1),
            this._spliceLatLngs(e, 1),
            this._updateIndexes(e, -1),
            t.off("dragstart", this._onMarkerDragStart, this).off("drag", this._onMarkerDrag, this).off("dragend", this._fireEdit, this).off("touchmove", this._onMarkerDrag, this).off("touchend", this._fireEdit, this).off("click", this._onMarkerClick, this).off("MSPointerMove", this._onTouchMove, this).off("MSPointerUp", this._fireEdit, this)
        },
        _fireEdit: function() {
            this._poly.edited = !0,
            this._poly.fire("edit"),
            this._poly._map.fire(L.Draw.Event.EDITVERTEX, {
                layers: this._markerGroup,
                poly: this._poly
            })
        },
        _onMarkerDrag: function(t) {
            var e, i, n = t.target, o = this._poly, t = L.LatLngUtil.cloneLatLng(n._origLatLng);
            L.extend(n._origLatLng, n._latlng),
            o.options.poly && (e = o._map._editTooltip,
            !o.options.poly.allowIntersection && o.intersects() && (L.extend(n._origLatLng, t),
            n.setLatLng(t),
            i = o.options.color,
            o.setStyle({
                color: this.options.drawError.color
            }),
            e && e.updateContent({
                text: L.drawLocal.draw.handlers.polyline.error
            }),
            setTimeout(function() {
                o.setStyle({
                    color: i
                }),
                e && e.updateContent({
                    text: L.drawLocal.edit.handlers.edit.tooltip.text,
                    subtext: L.drawLocal.edit.handlers.edit.tooltip.subtext
                })
            }, 1e3))),
            n._middleLeft && n._middleLeft.setLatLng(this._getMiddleLatLng(n._prev, n)),
            n._middleRight && n._middleRight.setLatLng(this._getMiddleLatLng(n, n._next)),
            this._poly._bounds._southWest = L.latLng(1 / 0, 1 / 0),
            this._poly._bounds._northEast = L.latLng(-1 / 0, -1 / 0);
            n = this._poly.getLatLngs();
            this._poly._convertLatLngs(n, !0),
            this._poly.redraw(),
            this._poly.fire("editdrag")
        },
        _onMarkerClick: function(t) {
            var e = L.Polygon && this._poly instanceof L.Polygon ? 4 : 3
              , t = t.target;
            this._defaultShape().length < e || (this._removeMarker(t),
            this._updatePrevNext(t._prev, t._next),
            t._middleLeft && this._markerGroup.removeLayer(t._middleLeft),
            t._middleRight && this._markerGroup.removeLayer(t._middleRight),
            t._prev && t._next ? this._createMiddleMarker(t._prev, t._next) : t._prev ? t._next || (t._prev._middleRight = null) : t._next._middleLeft = null,
            this._fireEdit())
        },
        _onContextMenu: function(t) {
            t = t.target;
            this._poly,
            this._poly._map.fire(L.Draw.Event.MARKERCONTEXT, {
                marker: t,
                layers: this._markerGroup,
                poly: this._poly
            }),
            L.DomEvent.stopPropagation
        },
        _onTouchMove: function(t) {
            var e = this._map.mouseEventToLayerPoint(t.originalEvent.touches[0])
              , e = this._map.layerPointToLatLng(e)
              , t = t.target;
            L.extend(t._origLatLng, e),
            t._middleLeft && t._middleLeft.setLatLng(this._getMiddleLatLng(t._prev, t)),
            t._middleRight && t._middleRight.setLatLng(this._getMiddleLatLng(t, t._next)),
            this._poly.redraw(),
            this.updateMarkers()
        },
        _updateIndexes: function(e, i) {
            this._markerGroup.eachLayer(function(t) {
                t._index > e && (t._index += i)
            })
        },
        _createMiddleMarker: function(e, i) {
            var n, o, t, s = this._getMiddleLatLng(e, i), r = this._createMarker(s);
            r.setOpacity(.6),
            e._middleRight = i._middleLeft = r,
            o = function() {
                r.off("touchmove", o, this);
                var t = i._index;
                r._index = t,
                r.off("click", n, this).on("click", this._onMarkerClick, this),
                s.lat = r.getLatLng().lat,
                s.lng = r.getLatLng().lng,
                this._spliceLatLngs(t, 0, s),
                this._markers.splice(t, 0, r),
                r.setOpacity(1),
                this._updateIndexes(t, 1),
                i._index++,
                this._updatePrevNext(e, r),
                this._updatePrevNext(r, i),
                this._poly.fire("editstart")
            }
            ,
            t = function() {
                r.off("dragstart", o, this),
                r.off("dragend", t, this),
                r.off("touchmove", o, this),
                this._createMiddleMarker(e, r),
                this._createMiddleMarker(r, i)
            }
            ,
            n = function() {
                o.call(this),
                t.call(this),
                this._fireEdit()
            }
            ,
            r.on("click", n, this).on("dragstart", o, this).on("dragend", t, this).on("touchmove", o, this),
            this._markerGroup.addLayer(r)
        },
        _updatePrevNext: function(t, e) {
            t && (t._next = e),
            e && (e._prev = t)
        },
        _getMiddleLatLng: function(t, e) {
            var i = this._poly._map
              , t = i.project(t.getLatLng())
              , e = i.project(e.getLatLng());
            return i.unproject(t._add(e)._divideBy(2))
        }
    }),
    L.Polyline.addInitHook(function() {
        this.editing || (L.Edit.Poly && (this.editing = new L.Edit.Poly(this),
        this.options.editable && this.editing.enable()),
        this.on("add", function() {
            this.editing && this.editing.enabled() && this.editing.addHooks()
        }),
        this.on("remove", function() {
            this.editing && this.editing.enabled() && this.editing.removeHooks()
        }))
    }),
    L.Edit = L.Edit || {},
    L.Edit.SimpleShape = L.Handler.extend({
        options: {
            moveIcon: new L.DivIcon({
                iconSize: new L.Point(8,8),
                className: "leaflet-div-icon leaflet-editing-icon leaflet-edit-move"
            }),
            resizeIcon: new L.DivIcon({
                iconSize: new L.Point(8,8),
                className: "leaflet-div-icon leaflet-editing-icon leaflet-edit-resize"
            }),
            touchMoveIcon: new L.DivIcon({
                iconSize: new L.Point(20,20),
                className: "leaflet-div-icon leaflet-editing-icon leaflet-edit-move leaflet-touch-icon"
            }),
            touchResizeIcon: new L.DivIcon({
                iconSize: new L.Point(20,20),
                className: "leaflet-div-icon leaflet-editing-icon leaflet-edit-resize leaflet-touch-icon"
            })
        },
        initialize: function(t, e) {
            L.Browser.touch && (this.options.moveIcon = this.options.touchMoveIcon,
            this.options.resizeIcon = this.options.touchResizeIcon),
            this._shape = t,
            L.Util.setOptions(this, e)
        },
        addHooks: function() {
            var t = this._shape;
            this._shape._map && (this._map = this._shape._map,
            t.setStyle(t.options.editing),
            t._map && (this._map = t._map,
            this._markerGroup || this._initMarkers(),
            this._map.addLayer(this._markerGroup)))
        },
        removeHooks: function() {
            var t = this._shape;
            if (t.setStyle(t.options.original),
            t._map) {
                this._unbindMarker(this._moveMarker);
                for (var e = 0, i = this._resizeMarkers.length; e < i; e++)
                    this._unbindMarker(this._resizeMarkers[e]);
                this._resizeMarkers = null,
                this._map.removeLayer(this._markerGroup),
                delete this._markerGroup
            }
            this._map = null
        },
        updateMarkers: function() {
            this._markerGroup.clearLayers(),
            this._initMarkers()
        },
        _initMarkers: function() {
            this._markerGroup || (this._markerGroup = new L.LayerGroup),
            this._createMoveMarker(),
            this._createResizeMarker()
        },
        _createMoveMarker: function() {},
        _createResizeMarker: function() {},
        _createMarker: function(t, e) {
            e = new L.Marker.Touch(t,{
                draggable: !0,
                icon: e,
                zIndexOffset: 10
            });
            return this._bindMarker(e),
            this._markerGroup.addLayer(e),
            e
        },
        _bindMarker: function(t) {
            t.on("dragstart", this._onMarkerDragStart, this).on("drag", this._onMarkerDrag, this).on("dragend", this._onMarkerDragEnd, this).on("touchstart", this._onTouchStart, this).on("touchmove", this._onTouchMove, this).on("MSPointerMove", this._onTouchMove, this).on("touchend", this._onTouchEnd, this).on("MSPointerUp", this._onTouchEnd, this)
        },
        _unbindMarker: function(t) {
            t.off("dragstart", this._onMarkerDragStart, this).off("drag", this._onMarkerDrag, this).off("dragend", this._onMarkerDragEnd, this).off("touchstart", this._onTouchStart, this).off("touchmove", this._onTouchMove, this).off("MSPointerMove", this._onTouchMove, this).off("touchend", this._onTouchEnd, this).off("MSPointerUp", this._onTouchEnd, this)
        },
        _onMarkerDragStart: function(t) {
            t.target.setOpacity(0),
            this._shape.fire("editstart")
        },
        _fireEdit: function() {
            this._shape.edited = !0,
            this._shape.fire("edit")
        },
        _onMarkerDrag: function(t) {
            var e = t.target
              , t = e.getLatLng();
            e === this._moveMarker ? this._move(t) : this._resize(t),
            this._shape.redraw(),
            this._shape.fire("editdrag")
        },
        _onMarkerDragEnd: function(t) {
            t.target.setOpacity(1),
            this._fireEdit()
        },
        _onTouchStart: function(t) {
            var e, i;
            L.Edit.SimpleShape.prototype._onMarkerDragStart.call(this, t),
            "function" == typeof this._getCorners && (e = this._getCorners(),
            t = (i = t.target)._cornerIndex,
            i.setOpacity(0),
            this._oppositeCorner = e[(t + 2) % 4],
            this._toggleCornerMarkers(0, t)),
            this._shape.fire("editstart")
        },
        _onTouchMove: function(t) {
            var e = this._map.mouseEventToLayerPoint(t.originalEvent.touches[0])
              , e = this._map.layerPointToLatLng(e);
            return t.target === this._moveMarker ? this._move(e) : this._resize(e),
            this._shape.redraw(),
            !1
        },
        _onTouchEnd: function(t) {
            t.target.setOpacity(1),
            this.updateMarkers(),
            this._fireEdit()
        },
        _move: function() {},
        _resize: function() {}
    }),
    L.Edit = L.Edit || {},
    L.Edit.Rectangle = L.Edit.SimpleShape.extend({
        _createMoveMarker: function() {
            var t = this._shape.getBounds().getCenter();
            this._moveMarker = this._createMarker(t, this.options.moveIcon)
        },
        _createResizeMarker: function() {
            var t = this._getCorners();
            this._resizeMarkers = [];
            for (var e = 0, i = t.length; e < i; e++)
                this._resizeMarkers.push(this._createMarker(t[e], this.options.resizeIcon)),
                this._resizeMarkers[e]._cornerIndex = e
        },
        _onMarkerDragStart: function(t) {
            L.Edit.SimpleShape.prototype._onMarkerDragStart.call(this, t);
            var e = this._getCorners()
              , t = t.target._cornerIndex;
            this._oppositeCorner = e[(t + 2) % 4],
            this._toggleCornerMarkers(0, t)
        },
        _onMarkerDragEnd: function(t) {
            var e, i = t.target;
            i === this._moveMarker && (e = this._shape.getBounds().getCenter(),
            i.setLatLng(e)),
            this._toggleCornerMarkers(1),
            this._repositionCornerMarkers(),
            L.Edit.SimpleShape.prototype._onMarkerDragEnd.call(this, t)
        },
        _move: function(t) {
            for (var e, i = this._shape._defaultShape ? this._shape._defaultShape() : this._shape.getLatLngs(), n = this._shape.getBounds().getCenter(), o = [], s = 0, r = i.length; s < r; s++)
                e = [i[s].lat - n.lat, i[s].lng - n.lng],
                o.push([t.lat + e[0], t.lng + e[1]]);
            this._shape.setLatLngs(o),
            this._repositionCornerMarkers(),
            this._map.fire(L.Draw.Event.EDITMOVE, {
                layer: this._shape
            })
        },
        _resize: function(t) {
            this._shape.setBounds(L.latLngBounds(t, this._oppositeCorner)),
            t = this._shape.getBounds(),
            this._moveMarker.setLatLng(t.getCenter()),
            this._map.fire(L.Draw.Event.EDITRESIZE, {
                layer: this._shape
            })
        },
        _getCorners: function() {
            var t = this._shape.getBounds();
            return [t.getNorthWest(), t.getNorthEast(), t.getSouthEast(), t.getSouthWest()]
        },
        _toggleCornerMarkers: function(t) {
            for (var e = 0, i = this._resizeMarkers.length; e < i; e++)
                this._resizeMarkers[e].setOpacity(t)
        },
        _repositionCornerMarkers: function() {
            for (var t = this._getCorners(), e = 0, i = this._resizeMarkers.length; e < i; e++)
                this._resizeMarkers[e].setLatLng(t[e])
        }
    }),
    L.Rectangle.addInitHook(function() {
        L.Edit.Rectangle && (this.editing = new L.Edit.Rectangle(this),
        this.options.editable && this.editing.enable())
    }),
    L.Edit = L.Edit || {},
    L.Edit.CircleMarker = L.Edit.SimpleShape.extend({
        _createMoveMarker: function() {
            var t = this._shape.getLatLng();
            this._moveMarker = this._createMarker(t, this.options.moveIcon)
        },
        _createResizeMarker: function() {
            this._resizeMarkers = []
        },
        _move: function(t) {
            var e;
            this._resizeMarkers.length && (e = this._getResizeMarkerPoint(t),
            this._resizeMarkers[0].setLatLng(e)),
            this._shape.setLatLng(t),
            this._map.fire(L.Draw.Event.EDITMOVE, {
                layer: this._shape
            })
        }
    }),
    L.CircleMarker.addInitHook(function() {
        L.Edit.CircleMarker && (this.editing = new L.Edit.CircleMarker(this),
        this.options.editable && this.editing.enable()),
        this.on("add", function() {
            this.editing && this.editing.enabled() && this.editing.addHooks()
        }),
        this.on("remove", function() {
            this.editing && this.editing.enabled() && this.editing.removeHooks()
        })
    }),
    L.Edit = L.Edit || {},
    L.Edit.Circle = L.Edit.CircleMarker.extend({
        _createResizeMarker: function() {
            var t = this._shape.getLatLng()
              , t = this._getResizeMarkerPoint(t);
            this._resizeMarkers = [],
            this._resizeMarkers.push(this._createMarker(t, this.options.resizeIcon))
        },
        _getResizeMarkerPoint: function(t) {
            var e = this._shape._radius * Math.cos(Math.PI / 4)
              , t = this._map.project(t);
            return this._map.unproject([t.x + e, t.y - e])
        },
        _resize: function(t) {
            var e = this._moveMarker.getLatLng();
            radius = L.GeometryUtil.isVersion07x() ? e.distanceTo(t) : this._map.distance(e, t),
            this._map.editTooltip && this._map._editTooltip.updateContent({
                text: L.drawLocal.edit.handlers.edit.tooltip.subtext + "<br />" + L.drawLocal.edit.handlers.edit.tooltip.text,
                subtext: L.drawLocal.draw.handlers.circle.radius + ": " + L.GeometryUtil.readableDistance(radius, !0, this.options.feet, this.options.nautic)
            }),
            this._shape.setRadius(radius),
            this._map.fire(L.Draw.Event.EDITRESIZE, {
                layer: this._shape
            })
        }
    }),
    L.Circle.addInitHook(function() {
        L.Edit.Circle && (this.editing = new L.Edit.Circle(this),
        this.options.editable && this.editing.enable())
    }),
    L.Map.mergeOptions({
        touchExtend: !0
    }),
    L.Map.TouchExtend = L.Handler.extend({
        initialize: function(t) {
            this._map = t,
            this._container = t._container,
            this._pane = t._panes.overlayPane
        },
        addHooks: function() {
            L.DomEvent.on(this._container, "touchstart", this._onTouchStart, this),
            L.DomEvent.on(this._container, "touchend", this._onTouchEnd, this),
            L.DomEvent.on(this._container, "touchmove", this._onTouchMove, this),
            this._detectIE() ? (L.DomEvent.on(this._container, "MSPointerDown", this._onTouchStart, this),
            L.DomEvent.on(this._container, "MSPointerUp", this._onTouchEnd, this),
            L.DomEvent.on(this._container, "MSPointerMove", this._onTouchMove, this),
            L.DomEvent.on(this._container, "MSPointerCancel", this._onTouchCancel, this)) : (L.DomEvent.on(this._container, "touchcancel", this._onTouchCancel, this),
            L.DomEvent.on(this._container, "touchleave", this._onTouchLeave, this))
        },
        removeHooks: function() {
            L.DomEvent.off(this._container, "touchstart", this._onTouchStart, this),
            L.DomEvent.off(this._container, "touchend", this._onTouchEnd, this),
            L.DomEvent.off(this._container, "touchmove", this._onTouchMove, this),
            this._detectIE() ? (L.DomEvent.off(this._container, "MSPointerDown", this._onTouchStart, this),
            L.DomEvent.off(this._container, "MSPointerUp", this._onTouchEnd, this),
            L.DomEvent.off(this._container, "MSPointerMove", this._onTouchMove, this),
            L.DomEvent.off(this._container, "MSPointerCancel", this._onTouchCancel, this)) : (L.DomEvent.off(this._container, "touchcancel", this._onTouchCancel, this),
            L.DomEvent.off(this._container, "touchleave", this._onTouchLeave, this))
        },
        _touchEvent: function(t, e) {
            var i = {};
            if (void 0 !== t.touches) {
                if (!t.touches.length)
                    return;
                i = t.touches[0]
            } else {
                if ("touch" !== t.pointerType)
                    return;
                if (!this._filterClick(i = t))
                    return
            }
            var n = this._map.mouseEventToContainerPoint(i)
              , o = this._map.mouseEventToLayerPoint(i)
              , s = this._map.layerPointToLatLng(o);
            this._map.fire(e, {
                latlng: s,
                layerPoint: o,
                containerPoint: n,
                pageX: i.pageX,
                pageY: i.pageY,
                originalEvent: t
            })
        },
        _filterClick: function(t) {
            var e = t.timeStamp || t.originalEvent.timeStamp
              , i = L.DomEvent._lastClick && e - L.DomEvent._lastClick;
            return i && 100 < i && i < 500 || t.target._simulatedClick && !t._simulated ? (L.DomEvent.stop(t),
            !1) : (L.DomEvent._lastClick = e,
            !0)
        },
        _onTouchStart: function(t) {
            this._map._loaded && this._touchEvent(t, "touchstart")
        },
        _onTouchEnd: function(t) {
            this._map._loaded && this._touchEvent(t, "touchend")
        },
        _onTouchCancel: function(t) {
            var e;
            this._map._loaded && (e = "touchcancel",
            this._detectIE() && (e = "pointercancel"),
            this._touchEvent(t, e))
        },
        _onTouchLeave: function(t) {
            this._map._loaded && this._touchEvent(t, "touchleave")
        },
        _onTouchMove: function(t) {
            this._map._loaded && this._touchEvent(t, "touchmove")
        },
        _detectIE: function() {
            var t = n.navigator.userAgent
              , e = t.indexOf("MSIE ");
            if (0 < e)
                return parseInt(t.substring(e + 5, t.indexOf(".", e)), 10);
            if (0 < t.indexOf("Trident/")) {
                var i = t.indexOf("rv:");
                return parseInt(t.substring(i + 3, t.indexOf(".", i)), 10)
            }
            i = t.indexOf("Edge/");
            return 0 < i && parseInt(t.substring(i + 5, t.indexOf(".", i)), 10)
        }
    }),
    L.Map.addInitHook("addHandler", "touchExtend", L.Map.TouchExtend),
    L.Marker.Touch = L.Marker.extend({
        _initInteraction: function() {
            return this.addInteractiveTarget ? L.Marker.prototype._initInteraction.apply(this) : this._initInteractionLegacy()
        },
        _initInteractionLegacy: function() {
            if (this.options.clickable) {
                var t = this._icon
                  , e = ["dblclick", "mousedown", "mouseover", "mouseout", "contextmenu", "touchstart", "touchend", "touchmove"];
                this._detectIE ? e.concat(["MSPointerDown", "MSPointerUp", "MSPointerMove", "MSPointerCancel"]) : e.concat(["touchcancel"]),
                L.DomUtil.addClass(t, "leaflet-clickable"),
                L.DomEvent.on(t, "click", this._onMouseClick, this),
                L.DomEvent.on(t, "keypress", this._onKeyPress, this);
                for (var i = 0; i < e.length; i++)
                    L.DomEvent.on(t, e[i], this._fireMouseEvent, this);
                L.Handler.MarkerDrag && (this.dragging = new L.Handler.MarkerDrag(this),
                this.options.draggable && this.dragging.enable())
            }
        },
        _detectIE: function() {
            var t = n.navigator.userAgent
              , e = t.indexOf("MSIE ");
            if (0 < e)
                return parseInt(t.substring(e + 5, t.indexOf(".", e)), 10);
            if (0 < t.indexOf("Trident/")) {
                var i = t.indexOf("rv:");
                return parseInt(t.substring(i + 3, t.indexOf(".", i)), 10)
            }
            i = t.indexOf("Edge/");
            return 0 < i && parseInt(t.substring(i + 5, t.indexOf(".", i)), 10)
        }
    }),
    L.LatLngUtil = {
        cloneLatLngs: function(t) {
            for (var e = [], i = 0, n = t.length; i < n; i++)
                Array.isArray(t[i]) ? e.push(L.LatLngUtil.cloneLatLngs(t[i])) : e.push(this.cloneLatLng(t[i]));
            return e
        },
        cloneLatLng: function(t) {
            return L.latLng(t.lat, t.lng)
        }
    },
    r = {
        km: 2,
        ha: 2,
        m: 0,
        mi: 2,
        ac: 2,
        yd: 0,
        ft: 0,
        nm: 2
    },
    L.GeometryUtil = L.extend(L.GeometryUtil || {}, {
        geodesicArea: function(t) {
            var e, i, n = t.length, o = 0, s = Math.PI / 180;
            if (2 < n) {
                for (var r = 0; r < n; r++)
                    e = t[r],
                    o += ((i = t[(r + 1) % n]).lng - e.lng) * s * (2 + Math.sin(e.lat * s) + Math.sin(i.lat * s));
                o = 6378137 * o * 6378137 / 2
            }
            return Math.abs(o)
        },
        formattedNumber: function(t, e) {
            var i = parseFloat(t).toFixed(e)
              , n = L.drawLocal.format && L.drawLocal.format.numeric
              , t = n && n.delimiters
              , e = t && t.thousands
              , n = t && t.decimal;
            return (e || n) && (t = i.split("."),
            i = e ? t[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1" + e) : t[0],
            n = n || ".",
            1 < t.length && (i = i + n + t[1])),
            i
        },
        readableArea: function(t, e, i) {
            var n, i = L.Util.extend({}, r, i), i = e ? (n = ["ha", "m"],
            type = typeof e,
            "string" === type ? n = [e] : "boolean" !== type && (n = e),
            1e6 <= t && -1 !== n.indexOf("km") ? L.GeometryUtil.formattedNumber(1e-6 * t, i.km) + " km²" : 1e4 <= t && -1 !== n.indexOf("ha") ? L.GeometryUtil.formattedNumber(1e-4 * t, i.ha) + " ha" : L.GeometryUtil.formattedNumber(t, i.m) + " m²") : 3097600 <= (t /= .836127) ? L.GeometryUtil.formattedNumber(t / 3097600, i.mi) + " mi²" : 4840 <= t ? L.GeometryUtil.formattedNumber(t / 4840, i.ac) + " acres" : L.GeometryUtil.formattedNumber(t, i.yd) + " yd²";
            return i
        },
        readableDistance: function(t, e, i, n, o) {
            var s, o = L.Util.extend({}, r, o);
            switch (e ? "string" == typeof e ? e : "metric" : i ? "feet" : n ? "nauticalMile" : "yards") {
            case "metric":
                s = 1e3 < t ? L.GeometryUtil.formattedNumber(t / 1e3, o.km) + " km" : L.GeometryUtil.formattedNumber(t, o.m) + " m";
                break;
            case "feet":
                t *= 3.28083,
                s = L.GeometryUtil.formattedNumber(t, o.ft) + " ft";
                break;
            case "nauticalMile":
                t *= .53996,
                s = L.GeometryUtil.formattedNumber(t / 1e3, o.nm) + " nm";
                break;
            default:
                s = 1760 < (t *= 1.09361) ? L.GeometryUtil.formattedNumber(t / 1760, o.mi) + " miles" : L.GeometryUtil.formattedNumber(t, o.yd) + " yd"
            }
            return s
        },
        isVersion07x: function() {
            var t = L.version.split(".");
            return 0 === parseInt(t[0], 10) && 7 === parseInt(t[1], 10)
        }
    }),
    L.Util.extend(L.LineUtil, {
        segmentsIntersect: function(t, e, i, n) {
            return this._checkCounterclockwise(t, i, n) !== this._checkCounterclockwise(e, i, n) && this._checkCounterclockwise(t, e, i) !== this._checkCounterclockwise(t, e, n)
        },
        _checkCounterclockwise: function(t, e, i) {
            return (i.y - t.y) * (e.x - t.x) > (e.y - t.y) * (i.x - t.x)
        }
    }),
    L.Polyline.include({
        intersects: function() {
            var t, e, i, n = this._getProjectedPoints(), o = n ? n.length : 0;
            if (this._tooFewPointsForIntersection())
                return !1;
            for (t = o - 1; 3 <= t; t--)
                if (e = n[t - 1],
                i = n[t],
                this._lineSegmentsIntersectsRange(e, i, t - 2))
                    return !0;
            return !1
        },
        newLatLngIntersects: function(t, e) {
            return !!this._map && this.newPointIntersects(this._map.latLngToLayerPoint(t), e)
        },
        newPointIntersects: function(t, e) {
            var i = this._getProjectedPoints()
              , n = i ? i.length : 0
              , i = i ? i[n - 1] : null
              , n = n - 2;
            return !this._tooFewPointsForIntersection(1) && this._lineSegmentsIntersectsRange(i, t, n, e ? 1 : 0)
        },
        _tooFewPointsForIntersection: function(t) {
            var e = this._getProjectedPoints()
              , i = e ? e.length : 0;
            return i += t || 0,
            !e || i <= 3
        },
        _lineSegmentsIntersectsRange: function(t, e, i, n) {
            var o, s, r = this._getProjectedPoints();
            n = n || 0;
            for (var a = i; n < a; a--)
                if (o = r[a - 1],
                s = r[a],
                L.LineUtil.segmentsIntersect(t, e, o, s))
                    return !0;
            return !1
        },
        _getProjectedPoints: function() {
            if (!this._defaultShape)
                return this._originalPoints;
            for (var t = [], e = this._defaultShape(), i = 0; i < e.length; i++)
                t.push(this._map.latLngToLayerPoint(e[i]));
            return t
        }
    }),
    L.Polygon.include({
        intersects: function() {
            var t, e, i = this._getProjectedPoints();
            return !this._tooFewPointsForIntersection() && (!!L.Polyline.prototype.intersects.call(this) || (t = i.length,
            e = i[0],
            i = i[t - 1],
            this._lineSegmentsIntersectsRange(i, e, t - 2, 1)))
        }
    }),
    L.Control.Draw = L.Control.extend({
        options: {
            position: "topright",
            draw: {},
            edit: !1
        },
        initialize: function(t) {
            if (L.version < "0.7")
                throw new Error("Leaflet.draw 0.2.3+ requires Leaflet 0.7.0+. Download latest from https://github.com/Leaflet/Leaflet/");
            var e;
            L.Control.prototype.initialize.call(this, t),
            this._toolbars = {},
            L.DrawToolbar && this.options.draw && (e = new L.DrawToolbar(this.options.draw),
            this._toolbars[L.DrawToolbar.TYPE] = e,
            this._toolbars[L.DrawToolbar.TYPE].on("enable", this._toolbarEnabled, this)),
            L.EditToolbar && this.options.edit && (e = new L.EditToolbar(this.options.edit),
            this._toolbars[L.EditToolbar.TYPE] = e,
            this._toolbars[L.EditToolbar.TYPE].on("enable", this._toolbarEnabled, this)),
            L.toolbar = this
        },
        onAdd: function(t) {
            var e, i, n = L.DomUtil.create("div", "leaflet-draw"), o = !1;
            for (i in this._toolbars)
                this._toolbars.hasOwnProperty(i) && (e = this._toolbars[i].addToolbar(t)) && (o || (L.DomUtil.hasClass(e, "leaflet-draw-toolbar-top") || L.DomUtil.addClass(e.childNodes[0], "leaflet-draw-toolbar-top"),
                o = !0),
                n.appendChild(e));
            return n
        },
        onRemove: function() {
            for (var t in this._toolbars)
                this._toolbars.hasOwnProperty(t) && this._toolbars[t].removeToolbar()
        },
        setDrawingOptions: function(t) {
            for (var e in this._toolbars)
                this._toolbars[e]instanceof L.DrawToolbar && this._toolbars[e].setOptions(t)
        },
        _toolbarEnabled: function(t) {
            var e, i = t.target;
            for (e in this._toolbars)
                this._toolbars[e] !== i && this._toolbars[e].disable()
        }
    }),
    L.Map.mergeOptions({
        drawControlTooltips: !0,
        drawControl: !1
    }),
    L.Map.addInitHook(function() {
        this.options.drawControl && (this.drawControl = new L.Control.Draw,
        this.addControl(this.drawControl))
    }),
    L.Toolbar = L.Class.extend({
        initialize: function(t) {
            L.setOptions(this, t),
            this._modes = {},
            this._actionButtons = [],
            this._activeMode = null;
            t = L.version.split(".");
            1 === parseInt(t[0], 10) && 2 <= parseInt(t[1], 10) ? L.Toolbar.include(L.Evented.prototype) : L.Toolbar.include(L.Mixin.Events)
        },
        enabled: function() {
            return null !== this._activeMode
        },
        disable: function() {
            this.enabled() && this._activeMode.handler.disable()
        },
        addToolbar: function(t) {
            var e, i = L.DomUtil.create("div", "leaflet-draw-section"), n = 0, o = this._toolbarClass || "", s = this.getModeHandlers(t);
            for (this._toolbarContainer = L.DomUtil.create("div", "leaflet-draw-toolbar leaflet-bar"),
            this._map = t,
            e = 0; e < s.length; e++)
                s[e].enabled && this._initModeHandler(s[e].handler, this._toolbarContainer, n++, o, s[e].title);
            if (n)
                return this._lastButtonIndex = --n,
                this._actionsContainer = L.DomUtil.create("ul", "leaflet-draw-actions"),
                i.appendChild(this._toolbarContainer),
                i.appendChild(this._actionsContainer),
                i
        },
        removeToolbar: function() {
            for (var t in this._modes)
                this._modes.hasOwnProperty(t) && (this._disposeButton(this._modes[t].button, this._modes[t].handler.enable, this._modes[t].handler),
                this._modes[t].handler.disable(),
                this._modes[t].handler.off("enabled", this._handlerActivated, this).off("disabled", this._handlerDeactivated, this));
            this._modes = {};
            for (var e = 0, i = this._actionButtons.length; e < i; e++)
                this._disposeButton(this._actionButtons[e].button, this._actionButtons[e].callback, this);
            this._actionButtons = [],
            this._actionsContainer = null
        },
        _initModeHandler: function(t, e, i, n, o) {
            var s = t.type;
            this._modes[s] = {},
            this._modes[s].handler = t,
            this._modes[s].button = this._createButton({
                type: s,
                title: o,
                className: n + "-" + s,
                container: e,
                callback: this._modes[s].handler.enable,
                context: this._modes[s].handler
            }),
            this._modes[s].buttonIndex = i,
            this._modes[s].handler.on("enabled", this._handlerActivated, this).on("disabled", this._handlerDeactivated, this)
        },
        _detectIOS: function() {
            return /iPad|iPhone|iPod/.test(navigator.userAgent) && !n.MSStream
        },
        _createButton: function(t) {
            var e = L.DomUtil.create("a", t.className || "", t.container)
              , i = L.DomUtil.create("span", "sr-only", t.container);
            e.href = "#",
            e.appendChild(i),
            t.title && (e.setAttribute("data-tooltip-right", ""),
            setTooltip(e, t.title),
            i.innerHTML = t.title),
            t.text && (e.innerHTML = t.text,
            i.innerHTML = t.text);
            i = this._detectIOS() ? "touchstart" : "click";
            return L.DomEvent.on(e, "click", L.DomEvent.stopPropagation).on(e, "mousedown", L.DomEvent.stopPropagation).on(e, "dblclick", L.DomEvent.stopPropagation).on(e, "touchstart", L.DomEvent.stopPropagation).on(e, "click", L.DomEvent.preventDefault).on(e, i, t.callback, t.context),
            e
        },
        _disposeButton: function(t, e) {
            var i = this._detectIOS() ? "touchstart" : "click";
            L.DomEvent.off(t, "click", L.DomEvent.stopPropagation).off(t, "mousedown", L.DomEvent.stopPropagation).off(t, "dblclick", L.DomEvent.stopPropagation).off(t, "touchstart", L.DomEvent.stopPropagation).off(t, "click", L.DomEvent.preventDefault).off(t, i, e)
        },
        _handlerActivated: function(t) {
            this.disable(),
            this._activeMode = this._modes[t.handler],
            L.DomUtil.addClass(this._activeMode.button, "leaflet-draw-toolbar-button-enabled"),
            this._showActionsToolbar(),
            this.fire("enable")
        },
        _handlerDeactivated: function() {
            this._hideActionsToolbar(),
            L.DomUtil.removeClass(this._activeMode.button, "leaflet-draw-toolbar-button-enabled"),
            this._activeMode = null,
            this.fire("disable")
        },
        _createActions: function(t) {
            for (var e, i = this._actionsContainer, n = this.getActions(t), o = n.length, s = 0, r = this._actionButtons.length; s < r; s++)
                this._disposeButton(this._actionButtons[s].button, this._actionButtons[s].callback);
            for (this._actionButtons = []; i.firstChild; )
                i.removeChild(i.firstChild);
            for (var a = 0; a < o; a++)
                "enabled"in n[a] && !n[a].enabled || (e = L.DomUtil.create("li", "", i),
                e = this._createButton({
                    title: n[a].title,
                    text: n[a].text,
                    container: e,
                    callback: n[a].callback,
                    context: n[a].context
                }),
                this._actionButtons.push({
                    button: e,
                    callback: n[a].callback
                }))
        },
        _showActionsToolbar: function() {
            var t = this._activeMode.buttonIndex
              , e = this._lastButtonIndex
              , i = this._activeMode.button.offsetTop - 1;
            this._createActions(this._activeMode.handler),
            this._actionsContainer.style.top = i + "px",
            0 === t && (L.DomUtil.addClass(this._toolbarContainer, "leaflet-draw-toolbar-notop"),
            L.DomUtil.addClass(this._actionsContainer, "leaflet-draw-actions-top")),
            t === e && (L.DomUtil.addClass(this._toolbarContainer, "leaflet-draw-toolbar-nobottom"),
            L.DomUtil.addClass(this._actionsContainer, "leaflet-draw-actions-bottom")),
            this._actionsContainer.style.display = "block",
            this._map.fire(L.Draw.Event.TOOLBAROPENED)
        },
        _hideActionsToolbar: function() {
            this._actionsContainer.style.display = "none",
            L.DomUtil.removeClass(this._toolbarContainer, "leaflet-draw-toolbar-notop"),
            L.DomUtil.removeClass(this._toolbarContainer, "leaflet-draw-toolbar-nobottom"),
            L.DomUtil.removeClass(this._actionsContainer, "leaflet-draw-actions-top"),
            L.DomUtil.removeClass(this._actionsContainer, "leaflet-draw-actions-bottom"),
            this._map.fire(L.Draw.Event.TOOLBARCLOSED)
        }
    }),
    L.Draw = L.Draw || {},
    L.Draw.Tooltip = L.Class.extend({
        initialize: function(t) {
            this._map = t,
            this._popupPane = t._panes.popupPane,
            this._visible = !1,
            this._container = t.options.drawControlTooltips ? L.DomUtil.create("div", "leaflet-draw-tooltip", this._popupPane) : null,
            this._singleLineLabel = !1,
            this._map.on("mouseout", this._onMouseOut, this)
        },
        dispose: function() {
            this._map.off("mouseout", this._onMouseOut, this),
            this._container && (this._popupPane.removeChild(this._container),
            this._container = null)
        },
        updateContent: function(t) {
            return this._container && (t.subtext = t.subtext || "",
            0 !== t.subtext.length || this._singleLineLabel ? 0 < t.subtext.length && this._singleLineLabel && (L.DomUtil.removeClass(this._container, "leaflet-draw-tooltip-single"),
            this._singleLineLabel = !1) : (L.DomUtil.addClass(this._container, "leaflet-draw-tooltip-single"),
            this._singleLineLabel = !0),
            this._container.innerHTML = (0 < t.subtext.length ? '<span class="leaflet-draw-tooltip-subtext">' + t.subtext + "</span><br />" : "") + "<span>" + t.text + "</span>",
            t.text || t.subtext ? (this._visible = !0,
            this._container.style.visibility = "inherit") : (this._visible = !1,
            this._container.style.visibility = "hidden")),
            this
        },
        updatePosition: function(t) {
            var e = this._map.latLngToLayerPoint(t)
              , t = this._container;
            return this._container && (this._visible && (t.style.visibility = "inherit"),
            L.DomUtil.setPosition(t, e)),
            this
        },
        showAsError: function() {
            return this._container && L.DomUtil.addClass(this._container, "leaflet-error-draw-tooltip"),
            this
        },
        removeError: function() {
            return this._container && L.DomUtil.removeClass(this._container, "leaflet-error-draw-tooltip"),
            this
        },
        _onMouseOut: function() {
            this._container && (this._container.style.visibility = "hidden")
        }
    }),
    L.DrawToolbar = L.Toolbar.extend({
        statics: {
            TYPE: "draw"
        },
        options: {
            polyline: {},
            polygon: {},
            rectangle: {},
            circle: {},
            marker: {},
            circlemarker: {}
        },
        initialize: function(t) {
            for (var e in this.options)
                this.options.hasOwnProperty(e) && t[e] && (t[e] = L.extend({}, this.options[e], t[e]));
            this._toolbarClass = "leaflet-draw-draw",
            L.Toolbar.prototype.initialize.call(this, t)
        },
        getModeHandlers: function(t) {
            return [{
                enabled: this.options.polyline,
                handler: new L.Draw.Polyline(t,this.options.polyline),
                title: L.drawLocal.draw.toolbar.buttons.polyline
            }, {
                enabled: this.options.polygon,
                handler: new L.Draw.Polygon(t,this.options.polygon),
                title: L.drawLocal.draw.toolbar.buttons.polygon
            }, {
                enabled: this.options.rectangle,
                handler: new L.Draw.Rectangle(t,this.options.rectangle),
                title: L.drawLocal.draw.toolbar.buttons.rectangle
            }, {
                enabled: this.options.circle,
                handler: new L.Draw.Circle(t,this.options.circle),
                title: L.drawLocal.draw.toolbar.buttons.circle
            }, {
                enabled: this.options.marker,
                handler: new L.Draw.Marker(t,this.options.marker),
                title: L.drawLocal.draw.toolbar.buttons.marker
            }, {
                enabled: this.options.circlemarker,
                handler: new L.Draw.CircleMarker(t,this.options.circlemarker),
                title: L.drawLocal.draw.toolbar.buttons.circlemarker
            }]
        },
        getActions: function(t) {
            return [{
                enabled: t.completeShape,
                title: L.drawLocal.draw.toolbar.finish.title,
                text: L.drawLocal.draw.toolbar.finish.text,
                callback: t.completeShape,
                context: t
            }, {
                enabled: t.deleteLastVertex,
                title: L.drawLocal.draw.toolbar.undo.title,
                text: L.drawLocal.draw.toolbar.undo.text,
                callback: t.deleteLastVertex,
                context: t
            }, {
                title: L.drawLocal.draw.toolbar.actions.title,
                text: L.drawLocal.draw.toolbar.actions.text,
                callback: this.disable,
                context: this
            }]
        },
        setOptions: function(t) {
            for (var e in L.setOptions(this, t),
            this._modes)
                this._modes.hasOwnProperty(e) && t.hasOwnProperty(e) && this._modes[e].handler.setOptions(t[e])
        }
    }),
    L.EditToolbar = L.Toolbar.extend({
        statics: {
            TYPE: "edit"
        },
        options: {
            edit: {
                selectedPathOptions: {
                    dashArray: "10, 10",
                    fill: !0,
                    fillColor: "#fe57a1",
                    fillOpacity: .1,
                    maintainColor: !1
                }
            },
            remove: {},
            poly: null,
            featureGroup: null
        },
        initialize: function(t) {
            t.edit && (void 0 === t.edit.selectedPathOptions && (t.edit.selectedPathOptions = this.options.edit.selectedPathOptions),
            t.edit.selectedPathOptions = L.extend({}, this.options.edit.selectedPathOptions, t.edit.selectedPathOptions)),
            t.remove && (t.remove = L.extend({}, this.options.remove, t.remove)),
            t.poly && (t.poly = L.extend({}, this.options.poly, t.poly)),
            this._toolbarClass = "leaflet-draw-edit",
            L.Toolbar.prototype.initialize.call(this, t),
            this._selectedFeatureCount = 0
        },
        getModeHandlers: function(t) {
            var e = this.options.featureGroup;
            return [{
                enabled: this.options.edit,
                handler: new L.EditToolbar.Edit(t,{
                    featureGroup: e,
                    selectedPathOptions: this.options.edit.selectedPathOptions,
                    poly: this.options.poly
                }),
                title: L.drawLocal.edit.toolbar.buttons.edit
            }, {
                enabled: this.options.remove,
                handler: new L.EditToolbar.Delete(t,{
                    featureGroup: e
                }),
                title: L.drawLocal.edit.toolbar.buttons.remove
            }]
        },
        getActions: function(t) {
            var e = [{
                title: L.drawLocal.edit.toolbar.actions.save.title,
                text: L.drawLocal.edit.toolbar.actions.save.text,
                callback: this._save,
                context: this
            }, {
                title: L.drawLocal.edit.toolbar.actions.cancel.title,
                text: L.drawLocal.edit.toolbar.actions.cancel.text,
                callback: this.disable,
                context: this
            }];
            return t.removeAllLayers && e.push({
                title: L.drawLocal.edit.toolbar.actions.clearAll.title,
                text: L.drawLocal.edit.toolbar.actions.clearAll.text,
                callback: this._clearAllLayers,
                context: this
            }),
            e
        },
        addToolbar: function(t) {
            t = L.Toolbar.prototype.addToolbar.call(this, t);
            return this._checkDisabled(),
            this.options.featureGroup.on("layeradd layerremove", this._checkDisabled, this),
            t
        },
        removeToolbar: function() {
            this.options.featureGroup.off("layeradd layerremove", this._checkDisabled, this),
            L.Toolbar.prototype.removeToolbar.call(this)
        },
        disable: function() {
            this.enabled() && (this._activeMode.handler.revertLayers(),
            L.Toolbar.prototype.disable.call(this))
        },
        _save: function() {
            this._activeMode.handler.save(),
            this._activeMode && this._activeMode.handler.disable()
        },
        _clearAllLayers: function() {
            this._activeMode.handler.removeAllLayers(),
            this._activeMode && this._activeMode.handler.disable()
        },
        _checkDisabled: function() {
            var t, e = 0 !== this.options.featureGroup.getLayers().length;
            this.options.edit && (t = this._modes[L.EditToolbar.Edit.TYPE].button,
            e ? L.DomUtil.removeClass(t, "leaflet-disabled") : L.DomUtil.addClass(t, "leaflet-disabled"),
            t.setAttribute("title", e ? L.drawLocal.edit.toolbar.buttons.edit : L.drawLocal.edit.toolbar.buttons.editDisabled)),
            this.options.remove && (t = this._modes[L.EditToolbar.Delete.TYPE].button,
            e ? L.DomUtil.removeClass(t, "leaflet-disabled") : L.DomUtil.addClass(t, "leaflet-disabled"),
            t.setAttribute("title", e ? L.drawLocal.edit.toolbar.buttons.remove : L.drawLocal.edit.toolbar.buttons.removeDisabled))
        }
    }),
    L.EditToolbar.Edit = L.Handler.extend({
        statics: {
            TYPE: "edit"
        },
        initialize: function(t, e) {
            if (L.Handler.prototype.initialize.call(this, t),
            L.setOptions(this, e),
            this._featureGroup = e.featureGroup,
            !(this._featureGroup instanceof L.FeatureGroup))
                throw new Error("options.featureGroup must be a L.FeatureGroup");
            this._uneditedLayerProps = {},
            this.type = L.EditToolbar.Edit.TYPE;
            e = L.version.split(".");
            1 === parseInt(e[0], 10) && 2 <= parseInt(e[1], 10) ? L.EditToolbar.Edit.include(L.Evented.prototype) : L.EditToolbar.Edit.include(L.Mixin.Events)
        },
        enable: function() {
            !this._enabled && this._hasAvailableLayers() && (this.fire("enabled", {
                handler: this.type
            }),
            this._map.fire(L.Draw.Event.EDITSTART, {
                handler: this.type
            }),
            L.Handler.prototype.enable.call(this),
            this._featureGroup.on("layeradd", this._enableLayerEdit, this).on("layerremove", this._disableLayerEdit, this))
        },
        disable: function() {
            this._enabled && (this._featureGroup.off("layeradd", this._enableLayerEdit, this).off("layerremove", this._disableLayerEdit, this),
            L.Handler.prototype.disable.call(this),
            this._map.fire(L.Draw.Event.EDITSTOP, {
                handler: this.type
            }),
            this.fire("disabled", {
                handler: this.type
            }))
        },
        addHooks: function() {
            var t = this._map;
            t && (t.getContainer().focus(),
            this._featureGroup.eachLayer(this._enableLayerEdit, this),
            this._tooltip = new L.Draw.Tooltip(this._map),
            this._tooltip.updateContent({
                text: L.drawLocal.edit.handlers.edit.tooltip.text,
                subtext: L.drawLocal.edit.handlers.edit.tooltip.subtext
            }),
            t._editTooltip = this._tooltip,
            this._updateTooltip(),
            this._map.on("mousemove", this._onMouseMove, this).on("touchmove", this._onMouseMove, this).on("MSPointerMove", this._onMouseMove, this).on(L.Draw.Event.EDITVERTEX, this._updateTooltip, this))
        },
        removeHooks: function() {
            this._map && (this._featureGroup.eachLayer(this._disableLayerEdit, this),
            this._uneditedLayerProps = {},
            this._tooltip.dispose(),
            this._tooltip = null,
            this._map.off("mousemove", this._onMouseMove, this).off("touchmove", this._onMouseMove, this).off("MSPointerMove", this._onMouseMove, this).off(L.Draw.Event.EDITVERTEX, this._updateTooltip, this))
        },
        revertLayers: function() {
            this._featureGroup.eachLayer(function(t) {
                this._revertLayer(t)
            }, this)
        },
        save: function() {
            var e = new L.LayerGroup;
            this._featureGroup.eachLayer(function(t) {
                t.edited && (e.addLayer(t),
                t.edited = !1)
            }),
            this._map.fire(L.Draw.Event.EDITED, {
                layers: e
            })
        },
        _backupLayer: function(t) {
            var e = L.Util.stamp(t);
            this._uneditedLayerProps[e] || (t instanceof L.Polyline || t instanceof L.Polygon || t instanceof L.Rectangle ? this._uneditedLayerProps[e] = {
                latlngs: L.LatLngUtil.cloneLatLngs(t.getLatLngs())
            } : t instanceof L.Circle ? this._uneditedLayerProps[e] = {
                latlng: L.LatLngUtil.cloneLatLng(t.getLatLng()),
                radius: t.getRadius()
            } : (t instanceof L.Marker || t instanceof L.CircleMarker) && (this._uneditedLayerProps[e] = {
                latlng: L.LatLngUtil.cloneLatLng(t.getLatLng())
            }))
        },
        _getTooltipText: function() {
            return {
                text: L.drawLocal.edit.handlers.edit.tooltip.text,
                subtext: L.drawLocal.edit.handlers.edit.tooltip.subtext
            }
        },
        _updateTooltip: function() {
            this._tooltip.updateContent(this._getTooltipText())
        },
        _revertLayer: function(t) {
            var e = L.Util.stamp(t);
            t.edited = !1,
            this._uneditedLayerProps.hasOwnProperty(e) && (t instanceof L.Polyline || t instanceof L.Polygon || t instanceof L.Rectangle ? t.setLatLngs(this._uneditedLayerProps[e].latlngs) : t instanceof L.Circle ? (t.setLatLng(this._uneditedLayerProps[e].latlng),
            t.setRadius(this._uneditedLayerProps[e].radius)) : (t instanceof L.Marker || t instanceof L.CircleMarker) && t.setLatLng(this._uneditedLayerProps[e].latlng),
            t.fire("revert-edited", {
                layer: t
            }))
        },
        _enableLayerEdit: function(t) {
            var e, t = t.layer || t.target || t;
            this._backupLayer(t),
            this.options.poly && (e = L.Util.extend({}, this.options.poly),
            t.options.poly = e),
            this.options.selectedPathOptions && ((e = L.Util.extend({}, this.options.selectedPathOptions)).maintainColor && (e.color = t.options.color,
            e.fillColor = t.options.fillColor),
            t.options.original = L.extend({}, t.options),
            t.options.editing = e),
            t instanceof L.Marker ? (t.editing && t.editing.enable(),
            t.dragging.enable(),
            t.on("dragend", this._onMarkerDragEnd).on("touchmove", this._onTouchMove, this).on("MSPointerMove", this._onTouchMove, this).on("touchend", this._onMarkerDragEnd, this).on("MSPointerUp", this._onMarkerDragEnd, this)) : t.editing.enable()
        },
        _disableLayerEdit: function(t) {
            t = t.layer || t.target || t;
            t.edited = !1,
            t.editing && t.editing.disable(),
            delete t.options.editing,
            delete t.options.original,
            this._selectedPathOptions && (t instanceof L.Marker ? this._toggleMarkerHighlight(t) : (t.setStyle(t.options.previousOptions),
            delete t.options.previousOptions)),
            t instanceof L.Marker ? (t.dragging.disable(),
            t.off("dragend", this._onMarkerDragEnd, this).off("touchmove", this._onTouchMove, this).off("MSPointerMove", this._onTouchMove, this).off("touchend", this._onMarkerDragEnd, this).off("MSPointerUp", this._onMarkerDragEnd, this)) : t.editing.disable()
        },
        _onMouseMove: function(t) {
            this._tooltip.updatePosition(t.latlng)
        },
        _onMarkerDragEnd: function(t) {
            t = t.target;
            t.edited = !0,
            this._map.fire(L.Draw.Event.EDITMOVE, {
                layer: t
            })
        },
        _onTouchMove: function(t) {
            var e = t.originalEvent.changedTouches[0]
              , e = this._map.mouseEventToLayerPoint(e)
              , e = this._map.layerPointToLatLng(e);
            t.target.setLatLng(e)
        },
        _hasAvailableLayers: function() {
            return 0 !== this._featureGroup.getLayers().length
        }
    }),
    L.EditToolbar.Delete = L.Handler.extend({
        statics: {
            TYPE: "remove"
        },
        initialize: function(t, e) {
            if (L.Handler.prototype.initialize.call(this, t),
            L.Util.setOptions(this, e),
            this._deletableLayers = this.options.featureGroup,
            !(this._deletableLayers instanceof L.FeatureGroup))
                throw new Error("options.featureGroup must be a L.FeatureGroup");
            this.type = L.EditToolbar.Delete.TYPE;
            e = L.version.split(".");
            1 === parseInt(e[0], 10) && 2 <= parseInt(e[1], 10) ? L.EditToolbar.Delete.include(L.Evented.prototype) : L.EditToolbar.Delete.include(L.Mixin.Events)
        },
        enable: function() {
            !this._enabled && this._hasAvailableLayers() && (this.fire("enabled", {
                handler: this.type
            }),
            this._map.fire(L.Draw.Event.DELETESTART, {
                handler: this.type
            }),
            L.Handler.prototype.enable.call(this),
            this._deletableLayers.on("layeradd", this._enableLayerDelete, this).on("layerremove", this._disableLayerDelete, this))
        },
        disable: function() {
            this._enabled && (this._deletableLayers.off("layeradd", this._enableLayerDelete, this).off("layerremove", this._disableLayerDelete, this),
            L.Handler.prototype.disable.call(this),
            this._map.fire(L.Draw.Event.DELETESTOP, {
                handler: this.type
            }),
            this.fire("disabled", {
                handler: this.type
            }))
        },
        addHooks: function() {
            var t = this._map;
            t && (t.getContainer().focus(),
            this._deletableLayers.eachLayer(this._enableLayerDelete, this),
            this._deletedLayers = new L.LayerGroup,
            this._tooltip = new L.Draw.Tooltip(this._map),
            this._tooltip.updateContent({
                text: L.drawLocal.edit.handlers.remove.tooltip.text
            }),
            this._map.on("mousemove", this._onMouseMove, this))
        },
        removeHooks: function() {
            this._map && (this._deletableLayers.eachLayer(this._disableLayerDelete, this),
            this._deletedLayers = null,
            this._tooltip.dispose(),
            this._tooltip = null,
            this._map.off("mousemove", this._onMouseMove, this))
        },
        revertLayers: function() {
            this._deletedLayers.eachLayer(function(t) {
                this._deletableLayers.addLayer(t),
                t.fire("revert-deleted", {
                    layer: t
                })
            }, this)
        },
        save: function() {
            this._map.fire(L.Draw.Event.DELETED, {
                layers: this._deletedLayers
            })
        },
        removeAllLayers: function() {
            this._deletableLayers.eachLayer(function(t) {
                this._removeLayer({
                    layer: t
                })
            }, this),
            this.save()
        },
        _enableLayerDelete: function(t) {
            (t.layer || t.target || t).on("click", this._removeLayer, this)
        },
        _disableLayerDelete: function(t) {
            t = t.layer || t.target || t;
            t.off("click", this._removeLayer, this),
            this._deletedLayers.removeLayer(t)
        },
        _removeLayer: function(t) {
            t = t.layer || t.target || t;
            this._deletableLayers.removeLayer(t),
            this._deletedLayers.addLayer(t),
            t.fire("deleted")
        },
        _onMouseMove: function(t) {
            this._tooltip.updatePosition(t.latlng)
        },
        _hasAvailableLayers: function() {
            return 0 !== this._deletableLayers.getLayers().length
        }
    })
}(window, document),
L.Draw.Polyline.prototype._onTouch = L.Util.falseFn,
function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).Picker = e()
}(this, function() {
    "use strict";
    function u(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    var t = function(t, e, i) {
        return e && n(t.prototype, e),
        i && n(t, i),
        t
    };
    function n(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n)
        }
    }
    var c = function(t, e) {
        if (Array.isArray(t))
            return t;
        if (Symbol.iterator in Object(t))
            return function(t, e) {
                var i = []
                  , n = !0
                  , o = !1
                  , s = void 0;
                try {
                    for (var r, a = t[Symbol.iterator](); !(n = (r = a.next()).done) && (i.push(r.value),
                    !e || i.length !== e); n = !0)
                        ;
                } catch (t) {
                    o = !0,
                    s = t
                } finally {
                    try {
                        !n && a.return && a.return()
                    } finally {
                        if (o)
                            throw s
                    }
                }
                return i
            }(t, e);
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
    };
    String.prototype.startsWith = String.prototype.startsWith || function(t) {
        return 0 === this.indexOf(t)
    }
    ,
    String.prototype.padStart = String.prototype.padStart || function(t, e) {
        for (var i = this; i.length < t; )
            i = e + i;
        return i
    }
    ;
    var e = {
        cb: "0f8ff",
        tqw: "aebd7",
        q: "-ffff",
        qmrn: "7fffd4",
        zr: "0ffff",
        bg: "5f5dc",
        bsq: "e4c4",
        bck: "---",
        nch: "ebcd",
        b: "--ff",
        bvt: "8a2be2",
        brwn: "a52a2a",
        brw: "deb887",
        ctb: "5f9ea0",
        hrt: "7fff-",
        chcT: "d2691e",
        cr: "7f50",
        rnw: "6495ed",
        crns: "8dc",
        crms: "dc143c",
        cn: "-ffff",
        Db: "--8b",
        Dcn: "-8b8b",
        Dgnr: "b8860b",
        Dgr: "a9a9a9",
        Dgrn: "-64-",
        Dkhk: "bdb76b",
        Dmgn: "8b-8b",
        Dvgr: "556b2f",
        Drng: "8c-",
        Drch: "9932cc",
        Dr: "8b--",
        Dsmn: "e9967a",
        Dsgr: "8fbc8f",
        DsTb: "483d8b",
        DsTg: "2f4f4f",
        Dtrq: "-ced1",
        Dvt: "94-d3",
        ppnk: "1493",
        pskb: "-bfff",
        mgr: "696969",
        grb: "1e90ff",
        rbrc: "b22222",
        rwht: "af0",
        stg: "228b22",
        chs: "-ff",
        gnsb: "dcdcdc",
        st: "8f8ff",
        g: "d7-",
        gnr: "daa520",
        gr: "808080",
        grn: "-8-0",
        grnw: "adff2f",
        hnw: "0fff0",
        htpn: "69b4",
        nnr: "cd5c5c",
        ng: "4b-82",
        vr: "0",
        khk: "0e68c",
        vnr: "e6e6fa",
        nrb: "0f5",
        wngr: "7cfc-",
        mnch: "acd",
        Lb: "add8e6",
        Lcr: "08080",
        Lcn: "e0ffff",
        Lgnr: "afad2",
        Lgr: "d3d3d3",
        Lgrn: "90ee90",
        Lpnk: "b6c1",
        Lsmn: "a07a",
        Lsgr: "20b2aa",
        Lskb: "87cefa",
        LsTg: "778899",
        Lstb: "b0c4de",
        Lw: "e0",
        m: "-ff-",
        mgrn: "32cd32",
        nn: "af0e6",
        mgnt: "-ff",
        mrn: "8--0",
        mqm: "66cdaa",
        mmb: "--cd",
        mmrc: "ba55d3",
        mmpr: "9370db",
        msg: "3cb371",
        mmsT: "7b68ee",
        "": "-fa9a",
        mtr: "48d1cc",
        mmvt: "c71585",
        mnLb: "191970",
        ntc: "5fffa",
        mstr: "e4e1",
        mccs: "e4b5",
        vjw: "dead",
        nv: "--80",
        c: "df5e6",
        v: "808-0",
        vrb: "6b8e23",
        rng: "a5-",
        rngr: "45-",
        rch: "da70d6",
        pgnr: "eee8aa",
        pgrn: "98fb98",
        ptrq: "afeeee",
        pvtr: "db7093",
        ppwh: "efd5",
        pchp: "dab9",
        pr: "cd853f",
        pnk: "c0cb",
        pm: "dda0dd",
        pwrb: "b0e0e6",
        prp: "8-080",
        cc: "663399",
        r: "--",
        sbr: "bc8f8f",
        rb: "4169e1",
        sbrw: "8b4513",
        smn: "a8072",
        nbr: "4a460",
        sgrn: "2e8b57",
        ssh: "5ee",
        snn: "a0522d",
        svr: "c0c0c0",
        skb: "87ceeb",
        sTb: "6a5acd",
        sTgr: "708090",
        snw: "afa",
        n: "-ff7f",
        stb: "4682b4",
        tn: "d2b48c",
        t: "-8080",
        thst: "d8bfd8",
        tmT: "6347",
        trqs: "40e0d0",
        vt: "ee82ee",
        whT: "5deb3",
        wht: "",
        hts: "5f5f5",
        w: "-",
        wgrn: "9acd32"
    };
    function o(t, e) {
        e = 1 < arguments.length && void 0 !== e ? e : 1;
        return (0 < e ? t.toFixed(e).replace(/0+$/, "").replace(/\.$/, "") : t.toString()) || "0"
    }
    var s = (t(d, [{
        key: "printRGB",
        value: function(t) {
            var e = (t ? this.rgba : this.rgba.slice(0, 3)).map(function(t, e) {
                return o(t, 3 === e ? 3 : 0)
            });
            return t ? "rgba(" + e + ")" : "rgb(" + e + ")"
        }
    }, {
        key: "printHSL",
        value: function(t) {
            var i = [360, 100, 100, 1]
              , n = ["", "%", "%", ""]
              , e = (t ? this.hsla : this.hsla.slice(0, 3)).map(function(t, e) {
                return o(t * i[e], 3 === e ? 3 : 1) + n[e]
            });
            return t ? "hsla(" + e + ")" : "hsl(" + e + ")"
        }
    }, {
        key: "printHex",
        value: function(t) {
            var e = this.hex;
            return t ? e : e.substring(0, 7)
        }
    }, {
        key: "rgba",
        get: function() {
            if (this._rgba)
                return this._rgba;
            if (!this._hsla)
                throw new Error("No color is set");
            return this._rgba = d.hslToRgb(this._hsla)
        },
        set: function(t) {
            3 === t.length && (t[3] = 1),
            this._rgba = t,
            this._hsla = null
        }
    }, {
        key: "rgbString",
        get: function() {
            return this.printRGB()
        }
    }, {
        key: "rgbaString",
        get: function() {
            return this.printRGB(!0)
        }
    }, {
        key: "hsla",
        get: function() {
            if (this._hsla)
                return this._hsla;
            if (!this._rgba)
                throw new Error("No color is set");
            return this._hsla = d.rgbToHsl(this._rgba)
        },
        set: function(t) {
            3 === t.length && (t[3] = 1),
            this._hsla = t,
            this._rgba = null
        }
    }, {
        key: "hslString",
        get: function() {
            return this.printHSL()
        }
    }, {
        key: "hslaString",
        get: function() {
            return this.printHSL(!0)
        }
    }, {
        key: "hex",
        get: function() {
            return "#" + this.rgba.map(function(t, e) {
                return (e < 3 ? t : Math.round(255 * t)).toString(16)
            }).map(function(t) {
                return t.padStart(2, "0")
            }).join("")
        },
        set: function(t) {
            this.rgba = d.hexToRgb(t)
        }
    }], [{
        key: "hexToRgb",
        value: function(t) {
            var e = (t.startsWith("#") ? t.slice(1) : t).replace(/^(\w{3})$/, "$1F").replace(/^(\w)(\w)(\w)(\w)$/, "$1$1$2$2$3$3$4$4").replace(/^(\w{6})$/, "$1FF");
            if (!e.match(/^([0-9a-fA-F]{8})$/))
                throw new Error("Unknown hex color; " + t);
            e = e.match(/^(\w\w)(\w\w)(\w\w)(\w\w)$/).slice(1).map(function(t) {
                return parseInt(t, 16)
            });
            return e[3] = e[3] / 255,
            e
        }
    }, {
        key: "nameToRgb",
        value: function(t) {
            t = t.toLowerCase().replace("at", "T").replace(/[aeiouyldf]/g, "").replace("ght", "L").replace("rk", "D").slice(-5, 4),
            t = e[t];
            return void 0 === t ? t : d.hexToRgb(t.replace(/\-/g, "00").padStart(6, "f"))
        }
    }, {
        key: "rgbToHsl",
        value: function(t) {
            var e = c(t, 4)
              , i = e[0]
              , n = e[1]
              , o = e[2]
              , s = e[3];
            i /= 255,
            n /= 255,
            o /= 255;
            var r = Math.max(i, n, o)
              , a = Math.min(i, n, o)
              , h = void 0
              , t = void 0
              , e = (r + a) / 2;
            if (r === a)
                h = t = 0;
            else {
                var l = r - a
                  , t = .5 < e ? l / (2 - r - a) : l / (r + a);
                switch (r) {
                case i:
                    h = (n - o) / l + (n < o ? 6 : 0);
                    break;
                case n:
                    h = (o - i) / l + 2;
                    break;
                case o:
                    h = (i - n) / l + 4
                }
                h /= 6
            }
            return [h, t, e, s]
        }
    }, {
        key: "hslToRgb",
        value: function(t) {
            var e = c(t, 4)
              , i = e[0]
              , n = e[1]
              , o = e[2]
              , s = e[3]
              , r = void 0
              , a = void 0
              , t = void 0;
            0 === n ? r = a = t = o : (r = (e = function(t, e, i) {
                return i < 0 && (i += 1),
                1 < i && --i,
                i < 1 / 6 ? t + 6 * (e - t) * i : i < .5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t
            }
            )(n = 2 * o - (o = o < .5 ? o * (1 + n) : o + n - o * n), o, i + 1 / 3),
            a = e(n, o, i),
            t = e(n, o, i - 1 / 3));
            t = [255 * r, 255 * a, 255 * t].map(Math.round);
            return t[3] = s,
            t
        }
    }]),
    d);
    function d(t, e, i, n) {
        u(this, d);
        var o, s, r, a, h, l = this;
        void 0 === t || (Array.isArray(t) ? this.rgba = t : void 0 === i ? (o = t && "" + t) && ((o = o.toLowerCase()).startsWith("hsl") ? (s = o.match(/([\-\d\.e]+)/g).map(Number),
        a = (r = c(s, 4))[0],
        h = r[1],
        s = r[2],
        r = r[3],
        l.hsla = [a /= 360, h /= 100, s /= 100, r = void 0 === r ? 1 : r]) : o.startsWith("rgb") ? (a = o.match(/([\-\d\.e]+)/g).map(Number),
        s = (h = c(a, 4))[0],
        r = h[1],
        a = h[2],
        h = h[3],
        l.rgba = [s, r, a, h = void 0 === h ? 1 : h]) : o.startsWith("#") ? l.rgba = d.hexToRgb(o) : l.rgba = d.nameToRgb(o) || d.hexToRgb(o)) : this.rgba = [t, e, i, void 0 === n ? 1 : n])
    }
    var i = (t(r, [{
        key: "add",
        value: function(t, e, i) {
            t.addEventListener(e, i, !1),
            this._events.push({
                target: t,
                type: e,
                handler: i
            })
        }
    }, {
        key: "remove",
        value: function(i, n, o) {
            this._events = this._events.filter(function(t) {
                var e = !0;
                return i && i !== t.target && (e = !1),
                n && n !== t.type && (e = !1),
                (e = o && o !== t.handler ? !1 : e) && r._doRemove(t.target, t.type, t.handler),
                !e
            })
        }
    }, {
        key: "destroy",
        value: function() {
            this._events.forEach(function(t) {
                return r._doRemove(t.target, t.type, t.handler)
            }),
            this._events = []
        }
    }], [{
        key: "_doRemove",
        value: function(t, e, i) {
            t.removeEventListener(e, i, !1)
        }
    }]),
    r);
    function r() {
        u(this, r),
        this._events = []
    }
    function a(t, s, r) {
        var a = !1;
        function h(t, e, i) {
            return Math.max(e, Math.min(t, i))
        }
        function i(t, e, i) {
            var n, o;
            (a = i ? !0 : a) && (t.preventDefault(),
            n = (o = s.getBoundingClientRect()).width,
            i = o.height,
            t = e.clientX,
            e = e.clientY,
            t = h(t - o.left, 0, n),
            o = h(e - o.top, 0, i),
            r(t / n, o / i))
        }
        function e(t, e) {
            1 === (void 0 === t.buttons ? t.which : t.buttons) ? i(t, t, e) : a = !1
        }
        function n(t, e) {
            1 === t.touches.length ? i(t, t.touches[0], e) : a = !1
        }
        t.add(s, "mousedown", function(t) {
            e(t, !0)
        }),
        t.add(s, "touchstart", function(t) {
            n(t, !0)
        }),
        t.add(window, "mousemove", e),
        t.add(s, "touchmove", n),
        t.add(window, "mouseup", function(t) {
            a = !1
        }),
        t.add(s, "touchend", function(t) {
            a = !1
        }),
        t.add(s, "touchcancel", function(t) {
            a = !1
        })
    }
    var h = "keydown"
      , l = "mousedown"
      , _ = "focusin";
    function p(t, e) {
        return (e || document).querySelector(t)
    }
    function f(t) {
        t.preventDefault(),
        t.stopPropagation()
    }
    function m(t, e, i, n, o) {
        t.add(e, h, function(t) {
            0 <= i.indexOf(t.key) && (o && f(t),
            n(t))
        })
    }
    function g(t) {
        u(this, g),
        this.settings = {
            popup: "right",
            layout: "default",
            alpha: !0,
            editor: !0,
            editorFormat: "hex",
            cancelButton: !1,
            defaultColor: "#0cf"
        },
        this._events = new i,
        this.onChange = null,
        this.onDone = null,
        this.onOpen = null,
        this.onClose = null,
        this.setOptions(t)
    }
    return t(g, [{
        key: "setOptions",
        value: function(t) {
            var e, i, n, o = this;
            t && (e = this.settings,
            t instanceof HTMLElement ? e.parent = t : (e.parent && t.parent && e.parent !== t.parent && (this._events.remove(e.parent),
            this._popupInited = !1),
            function(t, e, i) {
                for (var n in t)
                    i && 0 <= i.indexOf(n) || (e[n] = t[n])
            }(t, e),
            t.onChange && (this.onChange = t.onChange),
            t.onDone && (this.onDone = t.onDone),
            t.onOpen && (this.onOpen = t.onOpen),
            t.onClose && (this.onClose = t.onClose),
            (n = t.color || t.colour) && this._setColor(n)),
            (i = e.parent) && e.popup && !this._popupInited ? (this._events.add(i, "click", n = function(t) {
                return o.openHandler(t)
            }
            ),
            m(this._events, i, [" ", "Spacebar", "Enter"], n),
            this._popupInited = !0) : t.parent && !e.popup && this.show())
        }
    }, {
        key: "openHandler",
        value: function(t) {
            var e;
            this.show() && (t && t.preventDefault(),
            this.settings.parent.style.pointerEvents = "none",
            e = t && t.type === h ? this._domEdit : this.domElement,
            setTimeout(function() {
                return e.focus()
            }, 100),
            this.onOpen && this.onOpen(this.colour))
        }
    }, {
        key: "closeHandler",
        value: function(t) {
            var e, i = t && t.type, n = !1;
            t ? i === l || i === _ ? (e = (this.__containedEvent || 0) + 100,
            t.timeStamp > e && (n = !0)) : (f(t),
            n = !0) : n = !0,
            n && this.hide() && (this.settings.parent.style.pointerEvents = "",
            i !== l && this.settings.parent.focus(),
            this.onClose && this.onClose(this.colour))
        }
    }, {
        key: "movePopup",
        value: function(t, e) {
            this.closeHandler(),
            this.setOptions(t),
            e && this.openHandler()
        }
    }, {
        key: "setColor",
        value: function(t, e) {
            this._setColor(t, {
                silent: e
            })
        }
    }, {
        key: "_setColor",
        value: function(t, e) {
            if (t = "string" == typeof t ? t.trim() : t) {
                e = e || {};
                var i = void 0;
                try {
                    i = new s(t)
                } catch (t) {
                    if (e.failSilently)
                        return;
                    throw t
                }
                this.settings.alpha || ((t = i.hsla)[3] = 1,
                i.hsla = t),
                this.colour = this.color = i,
                this._setHSLA(null, null, null, null, e)
            }
        }
    }, {
        key: "setColour",
        value: function(t, e) {
            this.setColor(t, e)
        }
    }, {
        key: "show",
        value: function() {
            if (!this.settings.parent)
                return !1;
            if (this.domElement) {
                var t = this._toggleDOM(!0);
                return this._setPosition(),
                t
            }
            var e = this.settings.template || '<div class="picker_wrapper" tabindex="-1"><div class="picker_arrow"></div><div class="picker_hue picker_slider"><div class="picker_selector"></div></div><div class="picker_sl"><div class="picker_selector"></div></div><div class="picker_alpha picker_slider"><div class="picker_selector"></div></div><div class="picker_editor"><input aria-label="Type a color name or hex value"/></div><div class="picker_sample"></div><div class="picker_done"><button>Ok</button></div><div class="picker_cancel"><button>Cancel</button></div></div>'
              , i = (t = e,
            (e = document.createElement("div")).innerHTML = t,
            e.firstElementChild);
            return this.domElement = i,
            this._domH = p(".picker_hue", i),
            this._domSL = p(".picker_sl", i),
            this._domA = p(".picker_alpha", i),
            this._domEdit = p(".picker_editor input", i),
            this._domSample = p(".picker_sample", i),
            this._domOkay = p(".picker_done button", i),
            this._domCancel = p(".picker_cancel button", i),
            i.classList.add("layout_" + this.settings.layout),
            this.settings.alpha || i.classList.add("no_alpha"),
            this.settings.editor || i.classList.add("no_editor"),
            this.settings.cancelButton || i.classList.add("no_cancel"),
            this._ifPopup(function() {
                return i.classList.add("popup")
            }),
            this._setPosition(),
            this.colour ? this._updateUI() : this._setColor(this.settings.defaultColor),
            this._bindEvents(),
            !0
        }
    }, {
        key: "hide",
        value: function() {
            return this._toggleDOM(!1)
        }
    }, {
        key: "destroy",
        value: function() {
            this._events.destroy(),
            this.domElement && this.settings.parent.removeChild(this.domElement)
        }
    }, {
        key: "_bindEvents",
        value: function() {
            var i = this
              , n = this
              , o = this.domElement
              , s = this._events;
            function r(t, e, i) {
                s.add(t, e, i)
            }
            r(o, "click", function(t) {
                return t.preventDefault()
            }),
            a(s, this._domH, function(t, e) {
                return n._setHSLA(t)
            }),
            a(s, this._domSL, function(t, e) {
                return n._setHSLA(null, t, 1 - e)
            }),
            this.settings.alpha && a(s, this._domA, function(t, e) {
                return n._setHSLA(null, null, null, 1 - e)
            });
            var t = this._domEdit;
            r(t, "input", function(t) {
                n._setColor(this.value, {
                    fromEditor: !0,
                    failSilently: !0
                })
            }),
            r(t, "focus", function(t) {
                this.selectionStart === this.selectionEnd && this.select()
            }),
            this._ifPopup(function() {
                function t(t) {
                    return i.closeHandler(t)
                }
                r(window, l, t),
                r(window, _, t),
                m(s, o, ["Esc", "Escape"], t);
                function e(t) {
                    i.__containedEvent = t.timeStamp
                }
                r(o, l, e),
                r(o, _, e),
                r(i._domCancel, "click", t)
            });
            function e(t) {
                i._ifPopup(function() {
                    return i.closeHandler(t)
                }),
                i.onDone && i.onDone(i.colour)
            }
            r(this._domOkay, "click", e),
            m(s, o, ["Enter"], e)
        }
    }, {
        key: "_setPosition",
        value: function() {
            var i = this.settings.parent
              , n = this.domElement;
            i !== n.parentNode && i.appendChild(n),
            this._ifPopup(function(t) {
                "static" === getComputedStyle(i).position && (i.style.position = "relative");
                var e = !0 === t ? "popup_right" : "popup_" + t;
                ["popup_top", "popup_bottom", "popup_left", "popup_right"].forEach(function(t) {
                    t === e ? n.classList.add(t) : n.classList.remove(t)
                }),
                n.classList.add(e)
            })
        }
    }, {
        key: "_setHSLA",
        value: function(t, e, i, n, o) {
            o = o || {};
            var s = this.colour
              , r = s.hsla;
            [t, e, i, n].forEach(function(t, e) {
                !t && 0 !== t || (r[e] = t)
            }),
            s.hsla = r,
            this._updateUI(o),
            this.onChange && !o.silent && this.onChange(s)
        }
    }, {
        key: "_updateUI",
        value: function(t) {
            if (this.domElement) {
                t = t || {};
                var e = this.colour
                  , i = e.hsla
                  , n = "hsl(" + 360 * i[0] + ", 100%, 50%)"
                  , o = e.hslString
                  , s = e.hslaString
                  , r = this._domH
                  , a = this._domSL
                  , h = this._domA
                  , l = p(".picker_selector", r)
                  , r = p(".picker_selector", a)
                  , h = p(".picker_selector", h);
                d(0, l, i[0]),
                this._domSL.style.backgroundColor = this._domH.style.color = n,
                d(0, r, i[1]),
                _(0, r, 1 - i[2]),
                a.style.color = o,
                _(0, h, 1 - i[3]);
                i = o,
                o = i.replace("hsl", "hsla").replace(")", ", 0)");
                if (this._domA.style.background = "linear-gradient(" + [i, o] + ")" + ", linear-gradient(45deg, lightgrey 25%, transparent 25%, transparent 75%, lightgrey 75%) 0 0 / 2em 2em,\n                   linear-gradient(45deg, lightgrey 25%,       white 25%,       white 75%, lightgrey 75%) 1em 1em / 2em 2em",
                !t.fromEditor) {
                    var t = this.settings.editorFormat
                      , u = this.settings.alpha
                      , c = void 0;
                    switch (t) {
                    case "rgb":
                        c = e.printRGB(u);
                        break;
                    case "hsl":
                        c = e.printHSL(u);
                        break;
                    default:
                        c = e.printHex(u)
                    }
                    this._domEdit.value = c
                }
                this._domSample.style.color = s
            }
            function d(t, e, i) {
                e.style.left = 100 * i + "%"
            }
            function _(t, e, i) {
                e.style.top = 100 * i + "%"
            }
        }
    }, {
        key: "_ifPopup",
        value: function(t, e) {
            this.settings.parent && this.settings.popup ? t && t(this.settings.popup) : e && e()
        }
    }, {
        key: "_toggleDOM",
        value: function(t) {
            var e = this.domElement;
            if (!e)
                return !1;
            var i = t ? "" : "none"
              , t = e.style.display !== i;
            return t && (e.style.display = i),
            t
        }
    }]),
    g
}),
function() {
    var i = L.GridLayer.prototype._initTile;
    L.GridLayer.include({
        _initTile: function(t) {
            i.call(this, t);
            var e = this.getTileSize();
            t.style.width = e.x + 1 + "px",
            t.style.height = e.y + 1 + "px"
        }
    })
}(),
L.Canvas.include({
    _updateImg(t) {
        var e = t.options.img
          , i = t._point.round();
        t.options.offset && (i.x += t.options.offset.x,
        i.y += t.options.offset.y),
        e.rotate ? (this._ctx.save(),
        this._ctx.translate(i.x, i.y),
        this._ctx.rotate(e.rotate * Math.PI / 180),
        this._ctx.drawImage(Icons[e.url].img, -e.size[0] / 2, -e.size[1] / 2, e.size[0], e.size[1]),
        this._ctx.restore()) : this._ctx.drawImage(Icons[e.url].img, i.x - e.size[0] / 2, i.y - e.size[1] / 2, e.size[0], e.size[1]),
        t.options.cluster && (this._ctx.font = "18px fn, Arial, sans-serif",
        this._ctx.textAlign = "center",
        this._ctx.strokeStyle = "#000",
        this._ctx.lineWidth = 6,
        this._ctx.lineJoin = "round",
        this._ctx.strokeText(t.options.cluster, i.x, i.y + 5),
        this._ctx.fillStyle = t.options.cluster < 6 ? "#fce51e" : t.options.cluster < 11 ? "#ff9f0a" : "#ff453a",
        this._ctx.fillText(t.options.cluster, i.x, i.y + 5))
    },
    _updateText(t) {
        var e = t._point.round();
        this._ctx.font = "13px fn, Arial, sans-serif",
        this._ctx.textAlign = "center",
        this._ctx.strokeStyle = t.options.stroke || "#000",
        this._ctx.lineWidth = 4,
        this._ctx.lineJoin = "round",
        this._ctx.strokeText(t.options.text, e.x, e.y),
        this._ctx.fillStyle = t.options.color || "#fff",
        this._ctx.fillText(t.options.text, e.x, e.y)
    }
}),
Icons = {};
const CanvasMarker = L.CircleMarker.extend({
    _updatePath() {
        var t;
        this.options.text && this._renderer._updateText(this),
        this.options.img && this.options.img.url && (this.options.img.rotate && (this.options.img.rotate += angleCoords(this._map, this.options.prevLatlng, this._latlng)),
        t = this.options.img.url,
        Icons[t] || (Icons[t] = {
            loading: !0,
            img: document.createElement("img")
        },
        Icons[t].img.src = t),
        Icons[t].loading ? (Icons[t].img.addEventListener("load", ()=>{
            Icons[t].loading = !1,
            this.redraw()
        }
        ),
        Icons[t].img.addEventListener("error", ()=>{
            Icons[t].loading = !1,
            this.options.img = null
        }
        )) : this._renderer._updateImg(this))
    }
});
L.canvasMarker = function(...t) {
    try {
        var e = t.findIndex(t=>"object" == typeof t && t.img);
        e + 1 && (!t[e].radius && t[e].img && t[e].img.size && (t[e].radius = Math.ceil(Math.max(...t[e].img.size) / 2)),
        t[e].pane && delete t[e].pane)
    } catch (t) {}
    return new CanvasMarker(...t)
}
,
function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).Supercluster = e()
}(this, function() {
    function l(t, e, i, n, o, s) {
        var r;
        o - n <= i || (function t(e, i, n, o, s, r) {
            for (; o < s; ) {
                var a, h, l, u, c;
                600 < s - o && (a = s - o + 1,
                h = n - o + 1,
                u = Math.log(a),
                l = .5 * Math.exp(2 * u / 3),
                c = .5 * Math.sqrt(u * l * (a - l) / a) * (h - a / 2 < 0 ? -1 : 1),
                u = Math.max(o, Math.floor(n - h * l / a + c)),
                c = Math.min(s, Math.floor(n + (a - h) * l / a + c)),
                t(e, i, n, u, c, r));
                var d = i[2 * n + r]
                  , _ = o
                  , p = s;
                for (f(e, i, o, n),
                i[2 * s + r] > d && f(e, i, o, s); _ < p; ) {
                    for (f(e, i, _, p),
                    _++,
                    p--; i[2 * _ + r] < d; )
                        _++;
                    for (; i[2 * p + r] > d; )
                        p--
                }
                i[2 * o + r] === d ? f(e, i, o, p) : f(e, i, ++p, s),
                p <= n && (o = p + 1),
                n <= p && (s = p - 1)
            }
        }(t, e, r = n + o >> 1, n, o, s % 2),
        l(t, e, i, n, r - 1, s + 1),
        l(t, e, i, 1 + r, o, s + 1))
    }
    function f(t, e, i, n) {
        o(t, i, n),
        o(e, 2 * i, 2 * n),
        o(e, 2 * i + 1, 2 * n + 1)
    }
    function o(t, e, i) {
        var n = t[e];
        t[e] = t[i],
        t[i] = n
    }
    function g(t, e, i, n) {
        i = t - i,
        n = e - n;
        return i * i + n * n
    }
    function u(t) {
        return t[0]
    }
    function c(t) {
        return t[1]
    }
    function d(t, e, i, n, o) {
        void 0 === e && (e = u),
        void 0 === i && (i = c),
        void 0 === n && (n = 64),
        void 0 === o && (o = Float64Array),
        this.nodeSize = n;
        for (var s = (this.points = t).length < 65536 ? Uint16Array : Uint32Array, r = this.ids = new s(t.length), a = this.coords = new o(2 * t.length), h = 0; h < t.length; h++)
            a[2 * (r[h] = h)] = e(t[h]),
            a[2 * h + 1] = i(t[h]);
        l(r, a, n, 0, r.length - 1, 0)
    }
    d.prototype.range = function(t, e, i, n) {
        return function(t, e, i, n, o, s, r) {
            for (var a = [0, t.length - 1, 0], h = []; a.length; ) {
                var l = a.pop()
                  , u = a.pop()
                  , c = a.pop();
                if (u - c <= r)
                    for (var d = c; d <= u; d++)
                        p = e[2 * d],
                        f = e[2 * d + 1],
                        i <= p && p <= o && n <= f && f <= s && h.push(t[d]);
                else {
                    var _ = Math.floor((c + u) / 2)
                      , p = e[2 * _]
                      , f = e[2 * _ + 1];
                    i <= p && p <= o && n <= f && f <= s && h.push(t[_]);
                    var m = (l + 1) % 2;
                    (0 === l ? i <= p : n <= f) && (a.push(c),
                    a.push(_ - 1),
                    a.push(m)),
                    (0 === l ? p <= o : f <= s) && (a.push(_ + 1),
                    a.push(u),
                    a.push(m))
                }
            }
            return h
        }(this.ids, this.coords, t, e, i, n, this.nodeSize)
    }
    ;
    function t(t) {
        this.options = n(Object.create(i), t),
        this.trees = new Array(this.options.maxZoom + 1)
    }
    var e, i = {
        minZoom: 0,
        maxZoom: 16,
        minPoints: 2,
        radius: 40,
        extent: 512,
        nodeSize: 64,
        log: !(d.prototype.within = function(t, e, i) {
            return function(t, e, i, n, o, s) {
                for (var r = [0, t.length - 1, 0], a = [], h = o * o; r.length; ) {
                    var l = r.pop()
                      , u = r.pop()
                      , c = r.pop();
                    if (u - c <= s)
                        for (var d = c; d <= u; d++)
                            g(e[2 * d], e[2 * d + 1], i, n) <= h && a.push(t[d]);
                    else {
                        var _ = Math.floor((c + u) / 2)
                          , p = e[2 * _]
                          , f = e[2 * _ + 1];
                        g(p, f, i, n) <= h && a.push(t[_]);
                        var m = (l + 1) % 2;
                        (0 === l ? i - o <= p : n - o <= f) && (r.push(c),
                        r.push(_ - 1),
                        r.push(m)),
                        (0 === l ? p <= i + o : f <= n + o) && (r.push(_ + 1),
                        r.push(u),
                        r.push(m))
                    }
                }
                return a
            }(this.ids, this.coords, t, e, i, this.nodeSize)
        }
        ),
        generateId: !1,
        reduce: null,
        map: function(t) {
            return t
        }
    }, E = Math.fround || (e = new Float32Array(1),
    function(t) {
        return e[0] = +t,
        e[0]
    }
    );
    function _(t) {
        return {
            properties: p(t),
            coords: [-256 * t.x, 256 * t.y]
        }
    }
    function p(t) {
        return n(n({}, t.properties), {
            cluster: !0,
            cluster_id: t.id,
            point_count: t.numPoints
        })
    }
    function n(t, e) {
        for (var i in e)
            t[i] = e[i];
        return t
    }
    function m(t) {
        return t.x
    }
    function v(t) {
        return t.y
    }
    return t.prototype.load = function(t) {
        var e = this.options.log;
        e && console.time("total time");
        var i = "prepare " + t.length + " points";
        e && console.time(i),
        this.points = t;
        for (var n, o, s = [], r = 0; r < t.length; r++)
            s.push((n = t[r],
            o = r,
            {
                x: E(function(t) {
                    return t / -256
                }(n[0])),
                y: E(function(t) {
                    return t / 256
                }(n[1])),
                zoom: 1 / 0,
                index: o,
                parentId: -1
            }));
        this.trees[this.options.maxZoom + 1] = new d(s,m,v,this.options.nodeSize,Float32Array),
        e && console.timeEnd(i);
        for (var a = this.options.maxZoom; a >= this.options.minZoom; a--) {
            var h = +Date.now()
              , s = this._cluster(s, a);
            this.trees[a] = new d(s,m,v,this.options.nodeSize,Float32Array),
            e && console.log("z%d: %d clusters in %dms", a, s.length, +Date.now() - h)
        }
        return e && console.timeEnd("total time"),
        this
    }
    ,
    t.prototype.getClusters = function(t) {
        if (t.hasLayer(this.options.layerGroup)) {
            for (var e = this.trees[this._limitZoom(Math.round(t.getZoom()))], t = e.ids, i = {
                layerGroup: this.options.layerGroup,
                icon: this.options.icon,
                htmlId: this.options.htmlId,
                tooltip: this.options.tooltip,
                markers: []
            }, n = 0, o = t; n < o.length; n += 1) {
                var s = e.points[o[n]];
                i.markers.push(s.numPoints ? _(s) : {
                    properties: {
                        cluster: !1
                    },
                    coords: this.points[s.index]
                })
            }
            return i
        }
    }
    ,
    t.prototype.getChildren = function(t) {
        var e = this._getOriginId(t)
          , i = this._getOriginZoom(t)
          , n = "No cluster with the specified id."
          , o = this.trees[i];
        if (!o)
            throw new Error(n);
        e = o.points[e];
        if (!e)
            throw new Error(n);
        for (var i = this.options.radius / (this.options.extent * Math.pow(2, i - 1)), s = [], r = 0, a = o.within(e.x, e.y, i); r < a.length; r += 1) {
            var h = o.points[a[r]];
            h.parentId === t && s.push(h.numPoints ? _(h) : this.points[h.index])
        }
        if (0 === s.length)
            throw new Error(n);
        return s
    }
    ,
    t.prototype.getLeaves = function(t, e, i) {
        var n = [];
        return this._appendLeaves(n, t, e = e || 10, i = i || 0, 0),
        n
    }
    ,
    t.prototype.getTile = function(t, e, i) {
        var n = this.trees[this._limitZoom(t)]
          , o = Math.pow(2, t)
          , s = this.options.radius / this.options.extent
          , r = (i - s) / o
          , a = (i + 1 + s) / o
          , t = {
            features: []
        };
        return this._addTileFeatures(n.range((e - s) / o, r, (e + 1 + s) / o, a), n.points, e, i, o, t),
        0 === e && this._addTileFeatures(n.range(1 - s / o, r, 1, a), n.points, o, i, o, t),
        e === o - 1 && this._addTileFeatures(n.range(0, r, s / o, a), n.points, -1, i, o, t),
        t.features.length ? t : null
    }
    ,
    t.prototype.getClusterExpansionZoom = function(t) {
        for (var e = this._getOriginZoom(t) - 1; e <= this.options.maxZoom; ) {
            var i = this.getChildren(t);
            if (e++,
            1 !== i.length)
                break;
            t = i[0].properties.cluster_id
        }
        return e
    }
    ,
    t.prototype._appendLeaves = function(t, e, i, n, o) {
        for (var s = 0, r = this.getChildren(e); s < r.length; s += 1) {
            var a = r[s]
              , h = a.properties;
            if (h && h.cluster ? o + h.point_count <= n ? o += h.point_count : o = this._appendLeaves(t, h.cluster_id, i, n, o) : o < n ? o++ : t.push(a),
            t.length === i)
                break
        }
        return o
    }
    ,
    t.prototype._addTileFeatures = function(t, e, i, n, o, s) {
        for (var r = 0; r < t.length; r++) {
            var a = e[t[r]]
              , h = a.numPoints
              , l = {
                type: 1,
                geometry: [[Math.round(this.options.extent * (a.x * o - i)), Math.round(this.options.extent * (a.y * o - n))]],
                tags: h ? p(a) : this.points[a.index].properties
            }
              , u = void 0;
            h ? u = a.id : this.options.generateId ? u = a.index : this.points[a.index].id && (u = this.points[a.index].id),
            void 0 !== u && (l.id = u),
            s.features.push(l)
        }
    }
    ,
    t.prototype._limitZoom = function(t) {
        return Math.max(this.options.minZoom, Math.min(+t, this.options.maxZoom + 1))
    }
    ,
    t.prototype._cluster = function(t, e) {
        for (var i, n, o, s = [], r = this.options.reduce, a = this.options.minPoints, h = this.options.radius / (this.options.extent * Math.pow(2, e)), l = 0; l < t.length; l++) {
            var u = t[l];
            if (!(u.zoom <= e)) {
                u.zoom = e;
                for (var c = this.trees[e + 1], d = c.within(u.x, u.y, h), _ = u.numPoints || 1, p = _, f = 0, m = d; f < m.length; f += 1) {
                    var g = m[f]
                      , g = c.points[g];
                    g.zoom > e && (p += g.numPoints || 1)
                }
                if (_ < p && a <= p) {
                    for (var v = u.x * _, y = u.y * _, L = r && 1 < _ ? this._map(u, !0) : null, w = (l << 5) + (e + 1) + this.points.length, b = 0, x = d; b < x.length; b += 1) {
                        var k = x[b]
                          , M = c.points[k];
                        M.zoom <= e || (M.zoom = e,
                        k = M.numPoints || 1,
                        v += M.x * k,
                        y += M.y * k,
                        M.parentId = w,
                        r && r(L = L || this._map(u, !0), this._map(M)))
                    }
                    u.parentId = w,
                    s.push((i = y / p,
                    n = w,
                    o = L,
                    {
                        x: E(v / (_ = p)),
                        y: E(i),
                        zoom: 1 / 0,
                        id: n,
                        parentId: -1,
                        numPoints: _,
                        properties: o
                    }))
                } else if (s.push(u),
                1 < p)
                    for (var P = 0, T = d; P < T.length; P += 1) {
                        var C = T[P]
                          , C = c.points[C];
                        C.zoom <= e || (C.zoom = e,
                        s.push(C))
                    }
            }
        }
        return s
    }
    ,
    t.prototype._getOriginId = function(t) {
        return t - this.points.length >> 5
    }
    ,
    t.prototype._getOriginZoom = function(t) {
        return (t - this.points.length) % 32
    }
    ,
    t.prototype._map = function(t, e) {
        if (t.numPoints)
            return e ? n({}, t.properties) : t.properties;
        var i = this.points[t.index].properties
          , t = this.options.map(i);
        return e && t === i ? n({}, t) : t
    }
    ,
    t
}),
function(t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).hull = t()
}(function() {
    return function n(o, s, r) {
        function a(e, t) {
            if (!s[e]) {
                if (!o[e]) {
                    var i = "function" == typeof require && require;
                    if (!t && i)
                        return i(e, !0);
                    if (h)
                        return h(e, !0);
                    throw (i = new Error("Cannot find module '" + e + "'")).code = "MODULE_NOT_FOUND",
                    i
                }
                i = s[e] = {
                    exports: {}
                },
                o[e][0].call(i.exports, function(t) {
                    return a(o[e][1][t] || t)
                }, i, i.exports, n, o, s, r)
            }
            return s[e].exports
        }
        for (var h = "function" == typeof require && require, t = 0; t < r.length; t++)
            a(r[t]);
        return a
    }({
        1: [function(t, e, i) {
            function o(t, e, i) {
                return (e[0] - t[0]) * (i[1] - t[1]) - (e[1] - t[1]) * (i[0] - t[0])
            }
            e.exports = function(t) {
                const e = function(e) {
                    const i = [];
                    for (let t = 0; t < e.length; t++) {
                        for (; 2 <= i.length && o(i[i.length - 2], i[i.length - 1], e[t]) <= 0; )
                            i.pop();
                        i.push(e[t])
                    }
                    return i.pop(),
                    i
                }(t)
                  , i = function(t) {
                    const e = t.reverse()
                      , i = [];
                    for (let t = 0; t < e.length; t++) {
                        for (; 2 <= i.length && o(i[i.length - 2], i[i.length - 1], e[t]) <= 0; )
                            i.pop();
                        i.push(e[t])
                    }
                    return i.pop(),
                    i
                }(t)
                  , n = i.concat(e);
                return n.push(t[0]),
                n
            }
        }
        , {}],
        2: [function(t, e, i) {
            e.exports = {
                toXy: function(t, i) {
                    return void 0 === i ? t.slice() : t.map(function(t) {
                        const e = new Function("pt","return [pt" + i[0] + ",pt" + i[1] + "];");
                        return e(t)
                    })
                },
                fromXy: function(t, i) {
                    return void 0 === i ? t.slice() : t.map(function(t) {
                        const e = new Function("pt","const o = {}; o" + i[0] + "= pt[0]; o" + i[1] + "= pt[1]; return o;");
                        return e(t)
                    })
                }
            }
        }
        , {}],
        3: [function(t, e, i) {
            function n(e, t) {
                this._cells = [],
                this._cellSize = t,
                this._reverseCellSize = 1 / t;
                for (let t = 0; t < e.length; t++) {
                    var i = e[t]
                      , n = this.coordToCellNum(i[0])
                      , o = this.coordToCellNum(i[1]);
                    if (this._cells[n])
                        this._cells[n][o] ? this._cells[n][o].push(i) : this._cells[n][o] = [i];
                    else {
                        const s = [];
                        s[o] = [i],
                        this._cells[n] = s
                    }
                }
            }
            n.prototype = {
                cellPoints: function(t, e) {
                    return void 0 !== this._cells[t] && void 0 !== this._cells[t][e] ? this._cells[t][e] : []
                },
                rangePoints: function(t) {
                    var e = this.coordToCellNum(t[0])
                      , n = this.coordToCellNum(t[1])
                      , o = this.coordToCellNum(t[2])
                      , s = this.coordToCellNum(t[3]);
                    const r = [];
                    for (let i = e; i <= o; i++)
                        for (let e = n; e <= s; e++)
                            for (let t = 0; t < this.cellPoints(i, e).length; t++)
                                r.push(this.cellPoints(i, e)[t]);
                    return r
                },
                removePoint: function(e) {
                    var t = this.coordToCellNum(e[0])
                      , i = this.coordToCellNum(e[1]);
                    const n = this._cells[t][i];
                    let o;
                    for (let t = 0; t < n.length; t++)
                        if (n[t][0] === e[0] && n[t][1] === e[1]) {
                            o = t;
                            break
                        }
                    return n.splice(o, 1),
                    n
                },
                trunc: Math.trunc || function(t) {
                    return t - t % 1
                }
                ,
                coordToCellNum: function(t) {
                    return this.trunc(t * this._reverseCellSize)
                },
                extendBbox: function(t, e) {
                    return [t[0] - e * this._cellSize, t[1] - e * this._cellSize, t[2] + e * this._cellSize, t[3] + e * this._cellSize]
                }
            },
            e.exports = function(t, e) {
                return new n(t,e)
            }
        }
        , {}],
        4: [function(t, e, i) {
            "use strict";
            const o = t("./intersect.js")
              , a = t("./grid.js")
              , h = t("./format.js")
              , l = t("./convex.js");
            function p(t, e) {
                return Math.pow(e[0] - t[0], 2) + Math.pow(e[1] - t[1], 2)
            }
            function f(t, e, i) {
                var n = [e[0] - t[0], e[1] - t[1]]
                  , o = [i[0] - t[0], i[1] - t[1]]
                  , e = p(t, e)
                  , i = p(t, i);
                return (n[0] * o[0] + n[1] * o[1]) / Math.sqrt(e * i)
            }
            function m(e, i) {
                for (let t = 0; t < i.length - 1; t++) {
                    var n = [i[t], i[t + 1]];
                    if (!(e[0][0] === n[0][0] && e[0][1] === n[0][1] || e[0][0] === n[1][0] && e[0][1] === n[1][1]) && o(e, n))
                        return 1
                }
            }
            function g(r, t, a, h, l) {
                let u = !1;
                for (let s = 0; s < r.length - 1; s++) {
                    var c = [r[s], r[s + 1]]
                      , d = c[0][0] + "," + c[0][1] + "," + c[1][0] + "," + c[1][1];
                    if (!(p(c[0], c[1]) < t || l.has(d))) {
                        let t = 0, e = (_ = c,
                        [Math.min(_[0][0], _[1][0]), Math.min(_[0][1], _[1][1]), Math.max(_[0][0], _[1][0]), Math.max(_[0][1], _[1][1])]), i, n, o;
                        for (; e = h.extendBbox(e, t),
                        i = e[2] - e[0],
                        n = e[3] - e[1],
                        o = function(e, i, n) {
                            let o = null, s = v, r = v, a, h;
                            for (let t = 0; t < i.length; t++)
                                a = f(e[0], e[1], i[t]),
                                h = f(e[1], e[0], i[t]),
                                a > s && h > r && !m([e[0], i[t]], n) && !m([e[1], i[t]], n) && (s = a,
                                r = h,
                                o = i[t]);
                            return o
                        }(c, h.rangePoints(e), r),
                        t++,
                        null === o && (a[0] > i || a[1] > n); )
                            ;
                        i >= a[0] && n >= a[1] && l.add(d),
                        null !== o && (r.splice(s + 1, 0, o),
                        h.removePoint(o),
                        u = !0)
                    }
                }
                var _;
                return u ? g(r, t, a, h, l) : r
            }
            const v = Math.cos(90 / (180 / Math.PI));
            e.exports = function(t, e, i) {
                var n = e || 20;
                const o = function(e) {
                    const i = [e[0]];
                    let n = e[0];
                    for (let t = 1; t < e.length; t++) {
                        var o = e[t];
                        n[0] === o[0] && n[1] === o[1] || i.push(o),
                        n = o
                    }
                    return i
                }(h.toXy(t, i).sort(function(t, e) {
                    return t[0] - e[0] || t[1] - e[1]
                }));
                if (o.length < 4)
                    return o.concat([o[0]]);
                var s = function(e) {
                    let i = 1 / 0
                      , n = 1 / 0
                      , o = -1 / 0
                      , s = -1 / 0;
                    for (let t = e.length - 1; 0 <= t; t--)
                        e[t][0] < i && (i = e[t][0]),
                        e[t][1] < n && (n = e[t][1]),
                        e[t][0] > o && (o = e[t][0]),
                        e[t][1] > s && (s = e[t][1]);
                    return [o - i, s - n]
                }(o)
                  , e = [.6 * s[0], .6 * s[1]];
                const r = l(o);
                return t = o.filter(function(t) {
                    return r.indexOf(t) < 0
                }),
                s = Math.ceil(1 / (o.length / (s[0] * s[1]))),
                s = g(r, Math.pow(n, 2), e, a(t, s), new Set),
                i ? h.fromXy(s, i) : s
            }
        }
        , {
            "./convex.js": 1,
            "./format.js": 2,
            "./grid.js": 3,
            "./intersect.js": 5
        }],
        5: [function(t, e, i) {
            function h(t, e, i, n, o, s) {
                t = (s - e) * (i - t) - (n - e) * (o - t);
                return 0 < t || !(t < 0)
            }
            e.exports = function(t, e) {
                var i = t[0][0]
                  , n = t[0][1]
                  , o = t[1][0]
                  , s = t[1][1]
                  , r = e[0][0]
                  , a = e[0][1]
                  , t = e[1][0]
                  , e = e[1][1];
                return h(i, n, r, a, t, e) !== h(o, s, r, a, t, e) && h(i, n, o, s, r, a) !== h(i, n, o, s, t, e)
            }
        }
        , {}]
    }, {}, [4])(4)
});

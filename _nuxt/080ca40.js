(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{280:function(e,t,n){"use strict";n.r(t);var r=n(33),c=(n(23),n(5)),o={asyncData:function(e){return Object(c.a)(regeneratorRuntime.mark((function t(){var n,c,article,o,l,d,f;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$content,c=e.params,t.next=3,n("articles",c.slug).fetch();case 3:return article=t.sent,t.next=6,n("articles").only(["title","slug"]).sortBy("createdAt","asc").surround(c.slug).fetch();case 6:return o=t.sent,l=Object(r.a)(o,2),d=l[0],f=l[1],t.abrupt("return",{article:article,prev:d,next:f});case 11:case"end":return t.stop()}}),t)})))()}},l=n(27),component=Object(l.a)(o,undefined,undefined,!1,null,null,null);t.default=component.exports}}]);
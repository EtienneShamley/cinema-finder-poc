"use strict";(self.webpackChunkcinema_finder=self.webpackChunkcinema_finder||[]).push([[558],{3435:(e,o,n)=>{n.d(o,{Ay:()=>l,JY:()=>s,lo:()=>c});var t=n(5043);const a=(0,t.createContext)(null),s=()=>(0,t.useContext)(a),c=a.Provider,l=a},7558:(e,o,n)=>{n.r(o),n.d(o,{default:()=>c});var t=n(9980),a=n(3435),s=(n(5043),n(579));const c=()=>{const{Marker:e}=(0,a.JY)(),{cinemas:o}=(0,t.A)();return o.map(((o,n)=>(0,s.jsx)(e,{lat:o.lat,lon:o.lng},n)))}},9980:(e,o,n)=>{n.d(o,{A:()=>u});var t=n(2555),a=n(5043),s=n(4656),c=n(9604),l=n(4043),i=n(3536);const r=n(8677).A.map((e=>(0,t.A)((0,t.A)({},e),{},{loc:(0,c.zx)([e.lng,e.lat])}))),d=(0,i.memoize)(((e,o)=>{const n=(0,c.zx)([o,e]);return(0,i.sortBy)(r.map((e=>(0,t.A)((0,t.A)({},e),{},{distance:(0,l.A)(n,e.loc)}))),"distance")})),u=()=>{const{coords:e,getPosition:o,isGeolocationAvailable:n,isGeolocationEnabled:t}=(0,s.L)();(0,a.useEffect)((()=>{t||o()}),[]);const c=(0,a.useMemo)((()=>e?d(e.latitude,e.longitude).slice(0,15):[]),[e]);return{isGeolocationAvailable:n,isGeolocationEnabled:t,coords:e,cinemas:c}}}}]);
//# sourceMappingURL=558.83dedc6f.chunk.js.map
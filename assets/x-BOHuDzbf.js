import{f as a,c as n}from"./index-DdgtJEKe.js";import{d as c}from"./auth-Dhr8WJuT.js";const s=e=>({user_id:e,rituals_enabled:!0,water_enabled:!0,workouts_enabled:!0,medication_enabled:!0,nutrition_enabled:!0,circles_enabled:!0,daily_summary_enabled:!0,weekly_summary_enabled:!0,app_news_enabled:!1,cycle_enabled:!1,quiet_hours_enabled:!1,quiet_hours_start:"22:00",quiet_hours_end:"07:00"});function _(){return"Não foi possível concluir a ação. Tente novamente."}async function w(e){const{error:t}=await a.auth.updateUser({email:e});if(t)throw t}async function h(e){if(e.currentEmail&&e.currentPassword){const{error:r}=await a.auth.signInWithPassword({email:e.currentEmail,password:e.currentPassword});if(r)throw r}const{error:t}=await a.auth.updateUser({password:e.newPassword});if(t)throw t}async function m(e){const t=c("/login"),{error:r}=await a.auth.resetPasswordForEmail(e,{redirectTo:t});if(r)throw r}async function y(e){const{data:t,error:r}=await a.from("notification_settings").select("*").eq("user_id",e).maybeSingle();if(r)throw r;return t?{...s(e),...t}:s(e)}async function b(e,t){const r={...s(e),...t,user_id:e},{data:i,error:o}=await a.from("notification_settings").upsert(r,{onConflict:"user_id"}).select("*").single();if(o)throw o;return i}async function g(e){var r;const{error:t}=await a.from("help_feedback").insert({user_id:e.userId,article_key:e.articleKey,helpful:e.helpful,comment:((r=e.comment)==null?void 0:r.trim())||null});if(t)throw t}async function p(e){const{error:t}=await a.from("account_deletion_requests").insert({user_id:e,status:"requested"});if(t)throw t}/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],k=n("chevron-right",u);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],q=n("x",d);export{k as C,q as X,b as a,p as b,g as c,s as d,_ as f,y as g,w as r,m as s,h as u};

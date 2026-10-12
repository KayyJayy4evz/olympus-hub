/* =============== constants =============== */
const ICON = {
  summit:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"><path d="M2.5 20 9.5 7l4 7 2.5-4 5.5 10z"/><path d="M8 9.8 9.5 11l1.6-1.3"/></svg>',
  agora:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-5 9 5z"/><path d="M5.5 9.5v8M10 9.5v8M14 9.5v8M18.5 9.5v8M3 20h18"/></svg>',
  labors:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="3.5" width="17" height="17" rx="4"/><path d="m8 12 3 3 5-6"/></svg>',
  sundial:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><circle cx="12" cy="12" r="8.5"/><path d="M12 7v5l3.5 2"/></svg>',
  pantheon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.4 2.7-6 6-6s6 2.6 6 6"/><circle cx="17.2" cy="9" r="2.5"/><path d="M16 14.2c3 .2 5 2.6 5 5.8"/></svg>',
  oracle:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><path d="M5 20v-7M10 20V5M15 20v-9M20 20V8M3 20.5h18"/></svg>',
  laurel:'<svg viewBox="0 0 32 32" fill="currentColor"><path d="M10.5 27C5 23 4 15 8 8.5l.9.6C5.3 15 6.2 22.2 11.3 26z"/><path d="M21.5 27c5.5-4 6.5-12 2.5-18.5l-.9.6c3.6 5.9 2.7 13.1-2.4 16.9z"/><ellipse cx="6.2" cy="20" rx="1.4" ry="2.6" transform="rotate(-35 6.2 20)"/><ellipse cx="5.6" cy="15" rx="1.3" ry="2.5" transform="rotate(-10 5.6 15)"/><ellipse cx="7" cy="10.4" rx="1.2" ry="2.3" transform="rotate(20 7 10.4)"/><ellipse cx="8.8" cy="24" rx="1.4" ry="2.5" transform="rotate(-60 8.8 24)"/><ellipse cx="25.8" cy="20" rx="1.4" ry="2.6" transform="rotate(35 25.8 20)"/><ellipse cx="26.4" cy="15" rx="1.3" ry="2.5" transform="rotate(10 26.4 15)"/><ellipse cx="25" cy="10.4" rx="1.2" ry="2.3" transform="rotate(-20 25 10.4)"/><ellipse cx="23.2" cy="24" rx="1.4" ry="2.5" transform="rotate(60 23.2 24)"/></svg>',
  griffon:'<svg viewBox="0 0 36 36" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 26c0-6 3-11 9-12l2-4 2 3c4 1 6 4 6 8"/><path d="M20 10l-3-4M23 13l3-1-1 3"/><circle cx="21.5" cy="15.5" r=".8" fill="currentColor"/><path d="M14 18c-4-1-7-4-8-8 3 1 6 1 8 3M9 26h18c0 2-2 4-5 4h-8c-3 0-5-2-5-4z"/></svg>',
  check:'<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m3.5 8.5 3 3 6-7"/></svg>',
  up:'<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="m4 10 4-4 4 4"/></svg>',
  down:'<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="m4 6 4 4 4-4"/></svg>',
  x:'<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="m4 4 8 8M12 4l-8 8"/></svg>',
  left:'<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="m10 3-5 5 5 5"/></svg>',
  right:'<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="m6 3 5 5-5 5"/></svg>',
  ext:'<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M9 3h4v4M13 3 7.5 8.5M12 9.5V13H3V4h3.5"/></svg>'
};
const PAGES = [
  {id:'summit', name:'Summit', label:'Today'},
  {id:'agora', name:'Agora', label:'Meetings'},
  {id:'labors', name:'Labors', label:'Tasks'},
  {id:'sundial', name:'Sundial', label:'Schedules & lunches'},
  {id:'pantheon', name:'Pantheon', label:'Team'},
  {id:'oracle', name:'Oracle', label:'Metrics'}
];
const CATS = {
  one:{label:'1:1', color:'var(--c-one)', tpl:['Wins since last time','Metrics check-in','Blockers and support needed','Development goal','Action items']},
  huddle:{label:'Team huddle', color:'var(--c-huddle)', tpl:['Shout-outs','Announcements and changes','Queue and volume outlook','Questions from the floor']},
  lead:{label:'Leadership & partner', color:'var(--c-lead)', tpl:['Updates to share','Decisions needed','Risks and escalations','Asks for my team']},
  qa:{label:'QA & calibration', color:'var(--c-qa)', tpl:['Contacts to review','Scoring alignment','Coaching themes','Follow-up owners']},
  train:{label:'Training & development', color:'var(--c-train)', tpl:['Objective','Content walkthrough','Practice or role play','Check for understanding']},
  xfn:{label:'Cross-functional', color:'var(--c-xfn)', tpl:['Context','Open questions','Owners and next steps']},
  admin:{label:'Admin & reminders', color:'var(--c-admin)', tpl:[]},
  other:{label:'Uncategorized', color:'var(--c-other)', tpl:[]}
};
const NOTE_TYPES = {win:'Win', coach:'Coaching', oneone:'1:1 note', concern:'Concern', note:'Note'};
const OUT_TYPES = ['PTO','Sick','Training','Other'];
const CAL = 'Google Calendar';
const OLLY = [
  'Monday: pick the one thing that makes this week easier, and do it first.',
  'Tuesday: a two-minute shout-out beats a perfect one next week.',
  'Wednesday: midweek check. Who on the floor have you not heard from yet?',
  'Thursday: close loops. Any follow-ups from this week still open?',
  'Friday: log the wins before the weekend steals them.',
  'Weekend mode. The hub will keep. So will you.',
  'Weekend mode. Rest is part of leading.'
];

/* =============== helpers =============== */
const $ = s => document.querySelector(s);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const pad = n => String(n).padStart(2,'0');
const ymd = d => `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;
const parseYmd = s => { const [y,m,d] = s.split('-').map(Number); return new Date(y, m-1, d); };
const addDays = (s,n) => { const d = parseYmd(s); d.setDate(d.getDate()+n); return ymd(d); };
const today = () => ymd(new Date());
const mondayOf = s => { const d = parseYmd(s); d.setDate(d.getDate() - ((d.getDay()+6)%7)); return ymd(d); };
const toMin = t => { if(!t) return null; const [h,m] = t.split(':').map(Number); return h*60+m; };
const fromMin = m => `${pad(Math.floor(m/60))}:${pad(m%60)}`;
const nowMin = () => { const d = new Date(); return d.getHours()*60 + d.getMinutes(); };
const hhmm = d => `${pad(d.getHours())}:${pad(d.getMinutes())}`;
function fmtTime(t){ if(!t) return ''; let [h,m] = t.split(':').map(Number); const ap = h>=12?'pm':'am'; h = h%12||12; return m ? `${h}:${pad(m)}${ap}` : `${h}${ap}`; }
const fmtDate = (s,o) => parseYmd(s).toLocaleDateString('en-US', o || {weekday:'short', month:'short', day:'numeric'});
function relDay(s){ const t = today(); if(s===t) return 'Today'; if(s===addDays(t,1)) return 'Tomorrow'; if(s===addDays(t,-1)) return 'Yesterday'; return fmtDate(s,{weekday:'long', month:'short', day:'numeric'}); }
const initials = n => n.split(/\s+/).map(p => p[0]).slice(0,2).join('').toUpperCase();
const newId = () => (crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(36) + Math.random().toString(36).slice(2,10));
const list = col => Object.entries(S[col]).map(([id,d]) => ({...d, id}));
const clone = o => JSON.parse(JSON.stringify(o ?? null));
function store(k,v){ try{ localStorage.setItem('olympus.'+k, JSON.stringify(v)); }catch(e){} }
function recall(k,d){ try{ const v = localStorage.getItem('olympus.'+k); return v==null ? d : JSON.parse(v); }catch(e){ return d; } }

/* =============== state =============== */
const S = {team:{}, meetings:{}, tasks:{}, metrics:{}, notes:{}, config:{}};
const loaded = {};
const cal = {status:'idle', events:[], error:null, storedAt:null};
const ui = {
  page:'summit', agoraFilter:'all', agoraWhen:'upcoming', laborsFilter:'all', laborsShowDone:false,
  sunDate:today(), sunChannel:recall('sunChannel','all'), oracleWeek:mondayOf(today()), oracleChannel:recall('oracleChannel','chat'),
  oracleMetric:null, oracleEdit:false, oracleSettings:false, metricDraft:null, modal:null, armed:null
};
let db = null, auth = null, writable = false;
let unsubs = [];

/* =============== data access =============== */
const teamList = () => list('team').sort((a,b) => a.name.localeCompare(b.name));
const byChannel = ch => teamList().filter(m => m.channel===ch);
const metricDefs = () => (S.config.metrics && S.config.metrics.list) || [];
const settings = () => S.config.settings || {};
function memberName(id){ return (S.team[id] && S.team[id].name) || ''; }

async function put(col, id, data){
  if(!db){ toast('Not saved. Storage is unavailable in this view.'); return false; }
  try{ await db.collection(col).doc(id).set(data); return true; }catch(e){ dbErr(e); return false; }
}
async function patch(col, id, data){
  if(!db){ toast('Not saved. Storage is unavailable in this view.'); return false; }
  try{ await db.collection(col).doc(id).set(data, {merge:true}); return true; }catch(e){ dbErr(e); return false; }
}
async function remove(col, id){
  if(!db) return false;
  try{ await db.collection(col).doc(id).delete(); return true; }catch(e){ dbErr(e); return false; }
}
function dbErr(e){
  const c = e && e.code;
  if(c==='permission-denied') toast('Not saved. This Google account cannot write to the hub.');
  else if(c==='resource-exhausted') toast('The free Firebase quota is used up for today. Try again tomorrow.');
  else if(c==='unauthenticated') { toast('Signed out. Sign in again to save.'); }
  else toast('Not saved. Check your connection and try again.');
}
function setNested(path, value){ const keys = path.split('.'); const o = {}; let cur = o; keys.forEach((k,i) => { if(i===keys.length-1) cur[k] = value; else { cur[k] = {}; cur = cur[k]; } }); return o; }

/* =============== calendar (Google Calendar API, direct) =============== */
const GSCOPE = 'https://www.googleapis.com/auth/calendar.events';
const TZ = (Intl.DateTimeFormat().resolvedOptions().timeZone) || 'America/New_York';
const gcal = {
  mem: null,
  token(){
    let t = this.mem;
    if(!t){ try{ t = JSON.parse(sessionStorage.getItem('olympus.gtok') || 'null'); }catch(e){} }
    return t && t.exp > Date.now() ? t.v : null;
  },
  save(v){ const t = {v, exp: Date.now() + 55*60000}; this.mem = t; try{ sessionStorage.setItem('olympus.gtok', JSON.stringify(t)); }catch(e){} },
  clear(){ this.mem = null; try{ sessionStorage.removeItem('olympus.gtok'); }catch(e){} },
  async api(path, opts = {}){
    const t = this.token(); if(!t) throw {code:'needs_connect'};
    let r;
    try{ r = await fetch('https://www.googleapis.com/calendar/v3' + path, {...opts, headers:{Authorization:'Bearer ' + t, 'Content-Type':'application/json'}}); }
    catch(e){ throw {code:'network'}; }
    if(r.status===401){ this.clear(); throw {code:'needs_connect'}; }
    if(r.status===403){ const j = await r.json().catch(() => ({})); throw {code:'forbidden', message:(j.error && j.error.message) || ''}; }
    if(!r.ok) throw {code:'http', status:r.status};
    return r.status===204 ? null : r.json();
  }
};
const calOn = () => !!gcal.token();
let calTimer = null;
function calWindow(){ const t = today(); return {start: addDays(mondayOf(t), -7), end: addDays(mondayOf(t), 21)}; }
async function loadCalendar(){
  const w = calWindow(); cal.window = w;
  if(!gcal.token()){ cal.status = 'connect'; cal.error = 'needs_connect'; scheduleRender(); return; }
  if(!cal.events.length) cal.status = 'loading';
  try{
    const q = new URLSearchParams({timeMin: parseYmd(w.start).toISOString(), timeMax: parseYmd(w.end).toISOString(), singleEvents:'true', orderBy:'startTime', maxResults:'250'});
    const j = await gcal.api('/calendars/primary/events?' + q.toString());
    cal.events = ((j && j.items) || []).map(normEvent).filter(Boolean);
    cal.status = 'ok'; cal.error = null; cal.storedAt = Date.now();
  }catch(e){
    cal.error = e.code; cal.message = e.message || '';
    if(e.code==='needs_connect') cal.status = 'connect';
    else if(e.code==='forbidden') cal.status = 'denied';
    else cal.status = cal.events.length ? 'stale' : 'error';
  }
  scheduleRender();
}
function startCalendar(){ clearInterval(calTimer); loadCalendar(); calTimer = setInterval(loadCalendar, 300000); }
async function connectCalendar(){
  if(!auth || !auth.currentUser){ toast('Sign in first.'); return; }
  try{
    const r = await auth.currentUser.reauthenticateWithPopup(googleProvider());
    if(r.credential && r.credential.accessToken){ gcal.save(r.credential.accessToken); startCalendar(); toast('Calendar connected.'); }
  }catch(e){ toast(authMsg(e)); }
}
function normEvent(e){
  if(!e || e.status==='cancelled' || !e.start) return null;
  let date, start = null, end = null, allDay = false;
  if(e.start.dateTime){ const s = new Date(e.start.dateTime), f = new Date((e.end && e.end.dateTime) || e.start.dateTime); date = ymd(s); start = hhmm(s); end = hhmm(f); }
  else if(e.start.date){ date = e.start.date; allDay = true; }
  else return null;
  const me = (e.attendees || []).find(a => a.self);
  const people = (e.attendees || []).map(a => a.displayName || '').filter(Boolean);
  const team = teamList().filter(m => people.some(p => p.toLowerCase().includes(m.name.toLowerCase().split(' ')[0]) && p.toLowerCase().includes(m.name.toLowerCase().split(' ').slice(-1)[0]))).map(m => m.id);
  return {id: safeId(e.id), title: e.summary || '(No title)', date, start, end, allDay, link: e.htmlLink || null, meet: e.hangoutLink || (((e.conferenceData && e.conferenceData.entryPoints) || []).find(x => x.entryPointType==='video') || {}).uri || null,
    declined: me ? me.responseStatus==='declined' : false, type: e.eventType || 'DEFAULT', count: (e.attendees || []).length, team};
}
const safeId = id => String(id || newId()).replace(/[^A-Za-z0-9_\-.~:@+]/g,'_').slice(0,190);
function guessCat(title){
  const t = (title || '').toLowerCase();
  if(/\b1\s?[:\-]\s?1\b|one.on.one|\b1 on 1\b|<>|\/\//.test(t)) return 'one';
  if(/huddle|stand.?up|team meeting|team sync/.test(t)) return 'huddle';
  if(/\bqa\b|calibrat|quality/.test(t)) return 'qa';
  if(/training|workshop|learning|onboard|ascent|coaching/.test(t)) return 'train';
  if(/leader|manager|\bflt\b|staff|partner|care weekly|director/.test(t)) return 'lead';
  if(/focus|block|reminder|admin|lunch|ooo|out of office/.test(t)) return 'admin';
  if(/ x |sync|monthly|weekly|review/.test(t)) return 'xfn';
  return 'other';
}
/* Unified meeting list: calendar events overlaid with hub records, plus hub-only meetings. */
function allMeetings(){
  const out = [], seen = new Set();
  for(const e of cal.events){
    const rec = S.meetings[e.id] || null;
    seen.add(e.id);
    out.push({...e, source:'gcal', rec, category: (rec && rec.category) || guessCat(e.title), auto: !(rec && rec.category)});
  }
  for(const m of list('meetings')){
    if(seen.has(m.id)) continue;
    if(m.gcal){ // past calendar meeting outside the live window: keep its record visible
      out.push({id:m.id, title:m.title||'(Calendar meeting)', date:m.date, start:m.start, end:m.end, allDay:false, source:'gcal-archived', rec:m, category:m.category||'other', team:m.attendees||[]});
    } else {
      out.push({id:m.id, title:m.title, date:m.date, start:m.start, end:m.end, allDay:!m.start, source:'hub', rec:m, category:m.category||'other', team:m.attendees||[]});
    }
  }
  return out.filter(m => m.date).sort((a,b) => (a.date+(a.start||'00:00')).localeCompare(b.date+(b.start||'00:00')));
}
function findMeeting(id){ return allMeetings().find(m => m.id===id) || null; }
async function ensureRecord(m){
  if(S.meetings[m.id]) return true;
  return put('meetings', m.id, {gcal:true, title:m.title, date:m.date, start:m.start||null, end:m.end||null, category:m.category, agenda:(CATS[m.category]?.tpl||[]).map(t => ({id:newId(), text:t, done:false})), notes:'', attendees:m.team||[], createdAt:Date.now()});
}
async function pushToCalendar(id){
  const m = S.meetings[id]; if(!m) return;
  if(!calOn()){ await connectCalendar(); if(!calOn()) return; }
  if(!m.start || !m.end){ toast('Add a start and end time first.'); return; }
  toast('Adding to Google Calendar...');
  const agenda = (m.agenda||[]).map(a => '• ' + a.text).join('\n');
  try{
    const ev = await gcal.api('/calendars/primary/events', {method:'POST', body: JSON.stringify({summary:m.title, description: agenda ? 'Agenda:\n' + agenda : '', start:{dateTime:`${m.date}T${m.start}:00`, timeZone:TZ}, end:{dateTime:`${m.date}T${m.end}:00`, timeZone:TZ}})});
    if(ev && ev.id){
      const nid = safeId(ev.id);
      const ok = await put('meetings', nid, {...clone(m), gcal:true});
      if(ok){ await remove('meetings', id); if(ui.modal && ui.modal.id===id) ui.modal.id = nid; }
    } else await patch('meetings', id, {pushed:true});
    loadCalendar();
    toast('Added to Google Calendar.');
  }catch(e){
    if(e.code==='needs_connect') toast('Calendar session expired. Choose Connect calendar, then try again.');
    else if(e.code==='forbidden') toast('Google refused: ' + (e.message || 'access denied'));
    else toast('Could not confirm it was added. Check Google Calendar before trying again.');
  }
}

/* =============== schedules =============== */
function dayPlan(m, date){
  const sh = m.shift || {};
  const off = (m.off || {})[date] || null;
  const dow = parseYmd(date).getDay();
  const set = !!(sh.start && sh.end && Array.isArray(sh.days));
  const works = set && sh.days.includes(dow);
  const s = toMin(sh.start), e = toMin(sh.end);
  const ls = sh.lunch ? toMin(sh.lunch) : null, le = ls!=null ? ls + (Number(sh.lunchLen)||30) : null;
  return {set, works, off, s, e, ls, le};
}
function statusAt(m, date, min){
  const p = dayPlan(m, date);
  if(!p.set) return {k:'unset', label:'Shift not set'};
  if(p.off) return {k:'out', label:p.off};
  if(!p.works) return {k:'off', label:'Off today'};
  if(min < p.s) return {k:'later', label:'Starts ' + fmtTime(fromMin(p.s))};
  if(min >= p.e) return {k:'off', label:'Done at ' + fmtTime(fromMin(p.e))};
  if(p.ls!=null && min>=p.ls && min<p.le) return {k:'lunch', label:'Lunch until ' + fmtTime(fromMin(p.le))};
  return {k:'on', label:'On until ' + fmtTime(fromMin(p.e))};
}
const statusNow = m => statusAt(m, today(), nowMin());

/* =============== tasks =============== */
function bucket(t){
  const td = today();
  if(!t.due) return 'someday';
  if(t.due < td) return 'overdue';
  if(t.due === td) return 'today';
  if(t.due <= addDays(mondayOf(td), 6)) return 'week';
  return 'later';
}
const BUCKETS = [['overdue','Past due'],['today','Today'],['week','This week'],['later','Later'],['someday','No date']];
function cmpTask(a,b){
  const pr = (b.priority==='high') - (a.priority==='high'); if(pr) return pr;
  const ad = a.due || '9999', bd = b.due || '9999'; if(ad!==bd) return ad < bd ? -1 : 1;
  return (a.createdAt||0) - (b.createdAt||0);
}
function taskRow(t, opts={}){
  const chips = [];
  if(t.priority==='high') chips.push('<span class="chip hi">High</span>');
  if(t.due && !opts.hideDue) chips.push(`<span class="chip ${!t.done && t.due < today() ? 'warn':''}">${esc(relDay(t.due))}</span>`);
  if(t.memberId && S.team[t.memberId]) chips.push(`<span class="chip">${esc(memberName(t.memberId))}</span>`);
  if(t.meetingId && !opts.hideMeeting){ const m = S.meetings[t.meetingId]; if(m) chips.push(`<span class="chip cat" style="color:${CATS[m.category]?.color||'var(--c-other)'}">${esc(trunc(m.title,26))}</span>`); }
  return `<li class="task ${t.done?'done':''} ${t.priority==='high' && !t.done?'hi':''}">
    <button class="chk" data-act="toggleTask" data-id="${esc(t.id)}" aria-label="${t.done?'Mark not done':'Mark done'}: ${esc(t.text)}">${ICON.check}</button>
    <button class="ttext" data-act="editTask" data-id="${esc(t.id)}">${esc(t.text)}</button>
    <span class="tmeta">${chips.join('')}</span></li>`;
}
const trunc = (s,n) => (s||'').length > n ? s.slice(0,n-1) + '…' : (s||'');
const doneToday = () => list('tasks').filter(t => t.done && t.doneAt === today()).length;

/* =============== metrics =============== */
function rate(def, v){
  if(v==null || v==='' || def.target==null || def.target==='') return '';
  const t = Number(def.target), x = Number(v);
  const ok = def.dir==='down' ? x <= t : x >= t;
  if(ok) return 'good';
  const near = def.dir==='down' ? x <= t*1.1 : x >= t*0.95;
  return near ? 'warn' : 'bad';
}
function fmtVal(def, v){
  if(v==null || v==='') return '·';
  const n = Number(v); const s = Number.isInteger(n) ? String(n) : n.toFixed(1);
  return def.unit==='%' ? s+'%' : def.unit ? s+' '+def.unit : s;
}
const mval = (memberId, week, key) => { const d = S.metrics[memberId+'__'+week]; return d && d.values ? d.values[key] : null; };
const defsFor = ch => metricDefs().filter(d => (d.channels||['chat','voice']).includes(ch));
function spark(vals, def){
  const w = 200, h = 40, p = 4; const nums = vals.filter(v => v!=null);
  if(!nums.length) return '<div class="small muted">No data yet</div>';
  const tg = def.target!=null && def.target!=='' ? Number(def.target) : null;
  let lo = Math.min(...nums, tg ?? Infinity), hi = Math.max(...nums, tg ?? -Infinity);
  if(lo===hi){ lo -= 1; hi += 1; }
  const x = i => p + i*(w-2*p)/Math.max(vals.length-1,1), y = v => h - p - (v-lo)/(hi-lo)*(h-2*p);
  let d = '', pen = false; vals.forEach((v,i) => { if(v==null){ pen = false; return; } d += (pen?'L':'M') + x(i).toFixed(1) + ' ' + y(v).toFixed(1) + ' '; pen = true; });
  let li = -1; vals.forEach((v,i) => { if(v!=null) li = i; });
  const cls = rate(def, vals[li]);
  const col = cls==='good' ? 'var(--good)' : cls==='warn' ? 'var(--warn)' : cls==='bad' ? 'var(--bad)' : 'var(--accent)';
  return `<svg class="spark" viewBox="0 0 ${w} ${h}" preserveAspectRatio="none" aria-hidden="true">
    ${tg!=null ? `<line x1="0" x2="${w}" y1="${y(tg).toFixed(1)}" y2="${y(tg).toFixed(1)}" stroke="var(--muted)" stroke-dasharray="3 3" stroke-width="1" vector-effect="non-scaling-stroke"/>` : ''}
    <path d="${d}" fill="none" stroke="var(--accent)" stroke-width="1.8" vector-effect="non-scaling-stroke" stroke-linejoin="round"/>
    <circle cx="${x(li).toFixed(1)}" cy="${y(vals[li]).toFixed(1)}" r="3.2" fill="${col}"/></svg>`;
}

/* =============== rendering =============== */
let pending = false;
function scheduleRender(){
  const a = document.activeElement;
  if(a && a.closest && a.closest('#view, #sheet, .capture') && /^(INPUT|TEXTAREA|SELECT)$/.test(a.tagName) && a.type!=='checkbox'){ pending = true; return; }
  renderAll();
}
document.addEventListener('focusout', () => { if(pending) setTimeout(() => { if(pending){ pending = false; scheduleRender(); } }, 0); });

function showCrash(where, err){
  console.error('Hub error in ' + where, err);
  const msg = (err && (err.stack || err.message)) || String(err);
  let box = document.getElementById('crash');
  if(!box){ box = document.createElement('pre'); box.id = 'crash'; box.style.cssText = 'position:fixed;left:16px;right:16px;bottom:16px;z-index:200;max-height:40vh;overflow:auto;background:#3e1c1b;color:#ffd9d6;border:1px solid #f3867d;border-radius:10px;padding:12px 14px;font:12px/1.45 ui-monospace,Menlo,Consolas,monospace;white-space:pre-wrap'; document.body.appendChild(box); }
  box.textContent = 'Something broke while loading (' + where + '). Screenshot this for Claude:\n\n' + msg.slice(0, 1500);
}
window.addEventListener('error', e => showCrash('page', e.error || e.message));
window.addEventListener('unhandledrejection', e => showCrash('async', e.reason));
function renderAll(){
  try{ renderAllInner(); }catch(e){ showCrash('render ' + ui.page, e); }
}
function renderAllInner(){
  renderNav();
  const pg = PAGES.find(p => p.id===ui.page);
  $('#pageTitle').innerHTML = `${esc(pg.name)} <small>${esc(pg.label)}</small>`;
  $('#view').innerHTML = VIEWS[ui.page]();
  if(ui.modal) renderModal();
}
function renderNav(){
  const html = PAGES.map((p,i) => `<a href="#${p.id}" ${ui.page===p.id?'aria-current="page"':''}>${ICON[p.id]}<span class="nm"><b>${p.name}</b><span>${p.label}</span></span><kbd>${i+1}</kbd></a>`).join('');
  $('#nav').innerHTML = html;
  $('#bnav').innerHTML = PAGES.map(p => `<a href="#${p.id}" ${ui.page===p.id?'aria-current="page"':''}>${ICON[p.id]}<span>${p.name}</span></a>`).join('');
  const n = doneToday();
  $('#laurelBox').innerHTML = `${ICON.laurel}<div><b class="tnum">${n}</b><span>${n===1?'laurel':'laurels'} earned today</span></div>`;
}
function loadingNote(){ return loaded.team ? '' : '<div class="empty">Loading your hub...</div>'; }

/* ---------- Summit ---------- */
function vSummit(){
  const td = today(), h = new Date().getHours();
  const greet = h < 12 ? 'Good morning' : h < 17 ? 'Good afternoon' : 'Good evening';
  const open = list('tasks').filter(t => !t.done);
  const urgent = open.filter(t => ['overdue','today'].includes(bucket(t))).sort(cmpTask);
  const next = urgent[0] || open.filter(t => bucket(t)==='week').sort(cmpTask)[0] || open.filter(t => bucket(t)==='someday').sort(cmpTask)[0];
  const dn = doneToday(), total = dn + urgent.length, pct = total ? Math.round(dn/total*100) : 0;
  const mtgs = allMeetings().filter(m => m.date===td && !m.allDay);
  const nm = nowMin();
  const nextMtg = mtgs.find(m => toMin(m.end||m.start) > nm && !m.declined);
  const team = teamList();

  const floor = ['chat','voice'].map(ch => {
    const mem = team.filter(m => m.channel===ch);
    const st = mem.map(m => ({m, s:statusNow(m)}));
    const c = k => st.filter(x => x.s.k===k).length;
    const anySet = st.some(x => x.s.k!=='unset');
    return `<div class="stack" style="gap:8px">
      <div class="row"><span class="chip ch-${ch}">${ch==='chat'?'Chat':'Voice'} · ${mem.length}</span>
      ${anySet ? `<span class="small muted tnum">${c('on')} on · ${c('lunch')} lunch · ${c('later')} later · ${c('off')+c('out')} off/out</span>` : ''}</div>
      ${anySet ? `<div class="people">${st.map(x => `<span class="chip ${x.s.k}" title="${esc(x.s.label)}">${esc(x.m.name.split(' ')[0])}</span>`).join('')}</div>`
        : `<div class="empty small">Shifts are not set yet. <a href="#sundial">Add shifts in Sundial</a> to see who is on the floor.</div>`}
    </div>`;
  }).join('');

  const lunches = team.map(m => ({m, p:dayPlan(m, td)})).filter(x => x.p.works && !x.p.off && x.p.ls!=null && x.p.le > nm && x.p.ls <= nm+150).sort((a,b) => a.p.ls - b.p.ls);

  return `${loadingNote()}
  <section class="hello"><div><h2>${greet}, Khayla</h2><p>${esc(fmtDate(td,{weekday:'long', month:'long', day:'numeric'}))}</p></div></section>
  <div class="olly">${ICON.griffon}<div><b>Olly says:</b> ${esc(OLLY[(new Date().getDay()+6)%7])}</div></div>
  <div class="grid g-summit">
    <div class="stack">
      <div class="focus-card">
        <span class="lbl">The one thing</span>
        ${next ? `<div class="what">${esc(next.text)}</div>
          <div class="row">${next.due ? `<span class="chip">${esc(relDay(next.due))}</span>` : ''}${next.priority==='high' ? '<span class="chip">High priority</span>' : ''}${next.memberId ? `<span class="chip">${esc(memberName(next.memberId))}</span>` : ''}</div>
          <div class="row"><button class="btn go" data-act="toggleTask" data-id="${esc(next.id)}">Done, next</button><button class="btn" data-act="snooze" data-id="${esc(next.id)}">Move to tomorrow</button></div>`
        : `<div class="what">Nothing urgent. Capture a task at the top, or enjoy the clear sky.</div>`}
      </div>
      <section class="panel">
        <div class="panel-h"><h2>Today's labors</h2><div class="right"><a class="btn sm ghost" href="#labors">All tasks</a></div></div>
        <div class="stat-row"><div class="stat"><b>${dn}</b><span>Done today</span></div><div class="stat"><b>${urgent.length}</b><span>Left today</span></div><div class="stat"><b>${open.filter(t=>bucket(t)==='overdue').length}</b><span>Past due</span></div></div>
        <div class="progress" role="progressbar" aria-valuenow="${pct}" aria-valuemin="0" aria-valuemax="100"><i style="width:${pct}%"></i></div>
        ${urgent.length ? `<ul class="tasks">${urgent.slice(0,8).map(t => taskRow(t)).join('')}</ul>${urgent.length>8 ? `<a class="small" href="#labors">${urgent.length-8} more</a>` : ''}`
          : `<div class="empty"><b>All clear for today.</b> ${dn ? 'Every laurel earned.' : 'Nothing is due today.'}</div>`}
      </section>
    </div>
    <div class="stack">
      <section class="panel">
        <div class="panel-h"><h2>Meetings today</h2><div class="right">${calChip()}<a class="btn sm ghost" href="#agora">Agora</a></div></div>
        ${nextMtg ? `<div class="small muted">Next: <b style="color:var(--fg)">${esc(nextMtg.title)}</b> at ${esc(fmtTime(nextMtg.start))}</div>` : ''}
        ${mtgs.length ? `<div class="mtg-day">${mtgs.map(m => mtgRow(m)).join('')}</div>` : calEmpty('No meetings on your calendar today.')}
      </section>
      <section class="panel">
        <div class="panel-h"><h2>The floor right now</h2><div class="right"><a class="btn sm ghost" href="#sundial">Sundial</a></div></div>
        ${floor}
      </section>
      <section class="panel">
        <div class="panel-h"><h2>Lunch watch</h2><span class="small muted">next 2.5 hours</span></div>
        ${lunches.length ? `<ul class="tasks">${lunches.map(x => `<li class="task" style="grid-template-columns:minmax(0,1fr) auto"><span>${esc(x.m.name)} <span class="small muted">${x.m.channel==='chat'?'Chat':'Voice'}</span></span><span class="chip ${x.p.ls<=nm?'lunch':'later'} tnum">${x.p.ls<=nm?'At lunch until '+esc(fmtTime(fromMin(x.p.le))):esc(fmtTime(fromMin(x.p.ls)))+' to '+esc(fmtTime(fromMin(x.p.le)))}</span></li>`).join('')}</ul>`
          : `<div class="empty small">No lunches coming up${team.some(m => (m.shift||{}).lunch) ? '' : '. Add lunch times in Sundial'}.</div>`}
      </section>
    </div>
  </div>
  ${toolsPanel()}`;
}
function calChip(){
  const s = cal.status;
  if(s==='ok') return '<span class="chip on" title="Google Calendar synced">Synced</span>';
  if(s==='loading') return '<span class="chip later">Syncing</span>';
  if(s==='stale') return '<span class="chip warn">Offline, showing last sync</span>';
  if(s==='connect') return '<button class="chip later" data-act="calRetry" style="border:0">Connect calendar</button>';
  if(s==='denied' || s==='error') return '<span class="chip out">Calendar unavailable</span>';
  return '';
}
function calEmpty(msg){
  if(cal.status==='loading') return '<div class="empty small">Loading your Google Calendar...</div>';
  if(['denied','error','connect','none'].includes(cal.status)) return `<div class="empty small">${calHelp()}</div>`;
  return `<div class="empty small">${esc(msg)}</div>`;
}
function calHelp(){
  const c = cal.error;
  if(cal.status==='connect') return 'Google Calendar is not connected for this session. <button class="btn sm" data-act="calRetry">Connect calendar</button>';
  if(cal.status==='denied') return 'Google refused calendar access' + (cal.message ? ' (' + esc(cal.message) + ')' : '') + '. If this mentions an admin or policy, Custom Ink IT is blocking the app. <button class="btn sm" data-act="calRetry">Try again</button>';
  if(c==='network') return 'You look offline. The calendar will refresh when you reconnect.';
  return 'Google Calendar did not respond. <button class="btn sm" data-act="calRetry">Try again</button>';
}
function mtgRow(m){
  const cat = CATS[m.category] || CATS.other;
  const td = today(), nm = nowMin();
  const past = m.date < td || (m.date===td && m.end && toMin(m.end) <= nm);
  const now = m.date===td && m.start && m.end && toMin(m.start) <= nm && toMin(m.end) > nm;
  const rec = m.rec;
  const ag = rec && rec.agenda ? rec.agenda : [];
  const fu = list('tasks').filter(t => t.meetingId===m.id);
  const fuOpen = fu.filter(t => !t.done).length;
  const prep = rec ? (ag.length ? `<span class="prep ${ag.length?'ready':''}">Agenda ${ag.filter(a=>a.done).length}/${ag.length}</span>` : '<span class="prep">No agenda</span>') : '<span class="prep">Not prepped</span>';
  return `<button class="mtg ${past?'past':''} ${now?'now':''} ${m.declined?'declined':''}" style="--cc:${cat.color}" data-act="openMeeting" data-id="${esc(m.id)}">
    <span class="mt-time">${m.allDay ? 'All day' : esc(fmtTime(m.start))}${m.end && !m.allDay ? `<span>${esc(fmtTime(m.end))}</span>` : ''}</span>
    <span style="min-width:0"><span class="mt-title">${esc(m.title)}</span>
      <span class="mt-sub"><span class="chip cat" style="color:${cat.color}">${esc(cat.label)}</span>${now ? '<span class="chip later">Now</span>' : ''}${m.declined ? '<span class="chip off">Declined</span>' : ''}${m.source==='hub' ? '<span class="chip off">Hub only</span>' : ''}</span></span>
    <span class="mt-right">${prep}${fuOpen ? `<span class="chip warn">${fuOpen} follow-up${fuOpen>1?'s':''}</span>` : fu.length ? '<span class="chip on">Follow-ups done</span>' : ''}</span>
  </button>`;
}

/* ---------- Agora ---------- */
function vAgora(){
  const td = today(), all = allMeetings().filter(m => m.type!=='WORKING_LOCATION');
  const scoped = all.filter(m => ui.agoraWhen==='upcoming' ? m.date >= td : m.date < td);
  const counts = {}; scoped.forEach(m => counts[m.category] = (counts[m.category]||0)+1);
  const shown = scoped.filter(m => ui.agoraFilter==='all' || m.category===ui.agoraFilter);
  const days = {}; shown.forEach(m => (days[m.date] = days[m.date] || []).push(m));
  let keys = Object.keys(days).sort(); if(ui.agoraWhen==='past') keys.reverse();
  const openFu = list('tasks').filter(t => t.meetingId && !t.done).sort(cmpTask);
  const w = cal.window;
  return `<section class="panel">
    <div class="panel-h"><div class="cal-status ${cal.status==='ok'?'ok':cal.status==='loading'?'wait':['denied','error','none','connect'].includes(cal.status)?'bad':'wait'}"><span class="dot"></span>
      ${cal.status==='ok' ? `Google Calendar synced${w ? `, ${esc(fmtDate(w.start,{month:'short',day:'numeric'}))} to ${esc(fmtDate(addDays(w.end,-1),{month:'short',day:'numeric'}))}` : ''}. Refreshes every 5 minutes.` : cal.status==='stale' ? 'Calendar unreachable. Showing the last sync.' : calHelp()}</div>
      <div class="right"><button class="btn sm" data-act="calRetry">Refresh</button><button class="btn sm primary" data-act="newMeeting">+ New meeting</button></div></div>
    <div class="row" style="justify-content:space-between">
      <div class="seg" role="group" aria-label="When"><button data-act="agoraWhen" data-v="upcoming" aria-pressed="${ui.agoraWhen==='upcoming'}">Upcoming</button><button data-act="agoraWhen" data-v="past" aria-pressed="${ui.agoraWhen==='past'}">Past</button></div>
    </div>
    <div class="filters" role="group" aria-label="Category">
      <button class="fchip" data-act="agoraFilter" data-v="all" aria-pressed="${ui.agoraFilter==='all'}">All <span class="n">${scoped.length}</span></button>
      ${Object.entries(CATS).filter(([k]) => counts[k]).map(([k,c]) => `<button class="fchip" data-act="agoraFilter" data-v="${k}" aria-pressed="${ui.agoraFilter===k}"><span class="sd" style="background:${c.color}"></span>${esc(c.label)} <span class="n">${counts[k]}</span></button>`).join('')}
    </div>
  </section>
  <div class="grid g-summit">
    <div class="stack">
      ${keys.length ? keys.map(d => `<div class="mtg-day"><h3 class="${d===td?'today':''}">${esc(relDay(d))}<span class="small muted" style="letter-spacing:0;text-transform:none;font-weight:400">${d===td||d===addDays(td,1)||d===addDays(td,-1) ? esc(fmtDate(d)) : ''}</span></h3>${days[d].map(mtgRow).join('')}</div>`).join('')
        : calEmpty(ui.agoraWhen==='upcoming' ? 'No upcoming meetings in this category.' : 'No past meetings in this category.')}
    </div>
    <div class="stack">
      <section class="panel">
        <div class="panel-h"><h2>Open follow-ups</h2><span class="chip tnum">${openFu.length}</span></div>
        ${openFu.length ? `<ul class="tasks">${openFu.map(t => taskRow(t)).join('')}</ul>` : '<div class="empty small">No open follow-ups. Add them inside any meeting.</div>'}
      </section>
      <section class="panel">
        <div class="panel-h"><h2>How categories work</h2></div>
        <p class="small muted" style="margin:0">Categories are guessed from the meeting title. Open a meeting to change it; your choice sticks. Agenda templates load by category the first time you prep a meeting.</p>
      </section>
    </div>
  </div>`;
}

/* ---------- Labors ---------- */
function vLabors(){
  const all = list('tasks');
  let open = all.filter(t => !t.done);
  if(ui.laborsFilter==='high') open = open.filter(t => t.priority==='high');
  if(ui.laborsFilter==='meetings') open = open.filter(t => t.meetingId);
  if(ui.laborsFilter==='people') open = open.filter(t => t.memberId);
  const done = all.filter(t => t.done).sort((a,b) => (b.doneAt||'').localeCompare(a.doneAt||'') || (b.updatedAt||0)-(a.updatedAt||0));
  const team = teamList();
  return `<section class="panel">
    <div class="panel-h"><h2>New task</h2></div>
    <form class="addrow" data-form="addTask" autocomplete="off">
      <input id="nt-text" type="text" placeholder="What needs doing?" aria-label="Task" required>
      <input id="nt-due" type="date" aria-label="Due date">
      <select id="nt-member" aria-label="Team member"><option value="">No person</option>${team.map(m => `<option value="${esc(m.id)}">${esc(m.name)}</option>`).join('')}</select>
      <select id="nt-pri" aria-label="Priority"><option value="normal">Normal</option><option value="high">High</option></select>
      <button class="btn primary" type="submit">Add</button>
    </form>
  </section>
  <div class="row" style="justify-content:space-between">
    <div class="filters" role="group" aria-label="Filter">
      ${[['all','All open'],['high','High priority'],['meetings','From meetings'],['people','About people']].map(([k,l]) => `<button class="fchip" data-act="laborsFilter" data-v="${k}" aria-pressed="${ui.laborsFilter===k}">${l}</button>`).join('')}
    </div>
    <span class="small muted tnum">${doneToday()} done today · ${all.filter(t=>!t.done).length} open</span>
  </div>
  <section class="panel">
    ${open.length ? BUCKETS.map(([k,l]) => { const ts = open.filter(t => bucket(t)===k).sort(cmpTask); return ts.length ? `<div><div class="bucket-h ${k}">${l}<span class="n">${ts.length}</span></div><ul class="tasks">${ts.map(t => taskRow(t)).join('')}</ul></div>` : ''; }).join('')
      : `<div class="empty"><b>No open tasks${ui.laborsFilter!=='all' ? ' in this filter' : ''}.</b> Use the capture bar at the top any time a thought pops up.</div>`}
  </section>
  <section class="panel">
    <div class="panel-h"><h2>Completed</h2><span class="chip tnum">${done.length}</span><div class="right"><button class="btn sm ghost" data-act="toggleDone">${ui.laborsShowDone ? 'Hide' : 'Show'}</button></div></div>
    ${ui.laborsShowDone ? (done.length ? `<ul class="tasks">${done.slice(0,40).map(t => taskRow(t)).join('')}</ul>${done.length>40 ? `<span class="small muted">Showing the 40 most recent.</span>` : ''}` : '<div class="empty small">Nothing completed yet.</div>') : ''}
  </section>`;
}

/* ---------- Sundial ---------- */
function vSundial(){
  const date = ui.sunDate, td = today();
  const team = teamList().filter(m => ui.sunChannel==='all' || m.channel===ui.sunChannel);
  const plans = team.map(m => ({m, p:dayPlan(m, date)}));
  const working = plans.filter(x => x.p.works);
  let lo = 8*60, hi = 20*60;
  if(working.length){ lo = Math.min(...working.map(x => x.p.s)); hi = Math.max(...working.map(x => x.p.e)); lo = Math.floor(lo/60)*60; hi = Math.ceil(hi/60)*60; }
  if(hi - lo < 6*60) hi = lo + 6*60;
  const span = hi - lo, pos = m => ((m - lo)/span*100).toFixed(3);
  const hours = []; for(let t = lo; t <= hi; t += 60) hours.push(t);
  const nm = nowMin(), showNow = date===td && nm>=lo && nm<=hi;
  const maxL = settings().maxLunch || {};
  const slots = []; for(let t = lo; t < hi; t += 30) slots.push(t);
  const cov = ch => slots.map(t => {
    let on = 0, lunch = 0;
    plans.filter(x => x.m.channel===ch && x.p.works && !x.p.off).forEach(x => { if(t>=x.p.s && t<x.p.e){ if(x.p.ls!=null && t>=x.p.ls && t<x.p.le) lunch++; else on++; } });
    const lh = maxL[ch] && lunch > maxL[ch];
    return `<i class="${on?'':'z'} ${lh?'lh':''}" style="background:color-mix(in srgb,var(--${ch}) ${Math.min(on*9,55)}%,transparent)" title="${fmtTime(fromMin(t))}: ${on} on floor, ${lunch} at lunch">${on}</i>`;
  }).join('');
  const rowFor = x => {
    const {m,p} = x; const off = p.off;
    let bars = '';
    if(p.set && p.works){
      bars += `<div class="bar ${off?'outb':m.channel}" style="left:${pos(p.s)}%;width:${(p.e-p.s)/span*100}%">${off ? esc(off) : esc(fmtTime(fromMin(p.s))+' to '+fmtTime(fromMin(p.e)))}</div>`;
      if(p.ls!=null && !off) bars += `<div class="bar lunchb" style="left:${pos(p.ls)}%;width:${(p.le-p.ls)/span*100}%" title="Lunch ${fmtTime(fromMin(p.ls))} to ${fmtTime(fromMin(p.le))}">L</div>`;
    }
    return `<div class="tl-row"><div class="tl-name"><span class="nm" title="${esc(m.name)}">${esc(m.name)}</span>
      <select aria-label="${esc(m.name)} availability on ${esc(date)}" data-act-change="setOff" data-id="${esc(m.id)}"><option value="">${p.works ? 'In' : p.set ? 'Off' : 'Unset'}</option>${OUT_TYPES.map(o => `<option ${off===o?'selected':''}>${o}</option>`).join('')}</select></div>
      <div class="tl-track">${hours.map(t => `<div class="tl-hour" style="left:${pos(t)}%"></div>`).join('')}${bars}${!p.set ? '<span class="small muted" style="position:absolute;left:10px;top:10px">No shift set</span>' : !p.works ? '<span class="small muted" style="position:absolute;left:10px;top:10px">Not scheduled</span>' : ''}${showNow ? `<div class="nowline" style="left:${pos(nm)}%"></div>` : ''}</div></div>`;
  };
  const groups = ['chat','voice'].filter(ch => ui.sunChannel==='all' || ui.sunChannel===ch);
  const tl = `<div class="tl-wrap"><div class="tl">
    <div class="tl-row head"><div class="tl-name small muted">${esc(fmtDate(date,{weekday:'long',month:'short',day:'numeric'}))}</div><div class="tl-track">${hours.map(t => `<span class="tl-hlabel" style="left:${pos(t)}%">${fmtTime(fromMin(t))}</span>`).join('')}</div></div>
    ${groups.map(ch => `<div class="tl-row grp"><div class="tl-name" style="color:var(--${ch})">${ch==='chat'?'Chat':'Voice'} · coverage</div><div class="tl-track"><div class="cov">${cov(ch)}</div></div></div>${plans.filter(x => x.m.channel===ch).map(rowFor).join('')}`).join('')}
  </div></div>`;

  const editor = groups.map(ch => `<section class="panel">
    <div class="panel-h"><h2 style="color:var(--${ch})">${ch==='chat'?'Chat':'Voice'} shifts</h2>
      <div class="right"><label class="small muted" for="ml-${ch}">Max at lunch at once</label><input id="ml-${ch}" type="number" min="1" max="15" style="width:70px;min-height:32px" value="${esc(maxL[ch]||'')}" data-act-change="maxLunch" data-ch="${ch}"></div></div>
    <div class="tbl-wrap"><table class="tbl"><thead><tr><th>Name</th><th>Work days</th><th>Start</th><th>End</th><th>Lunch</th><th>Length</th></tr></thead><tbody>
    ${teamList().filter(m => m.channel===ch).map(m => { const sh = m.shift || {}; const days = sh.days || [];
      return `<tr><td>${esc(m.name)}</td>
      <td><div class="days">${[1,2,3,4,5,6,0].map(d => `<button data-act="toggleDay" data-id="${esc(m.id)}" data-d="${d}" aria-pressed="${days.includes(d)}" aria-label="${DOWL[d]}">${'SMTWTFS'[d]}</button>`).join('')}</div></td>
      <td><input type="time" id="sh-${esc(m.id)}-start" value="${esc(sh.start||'')}" data-bind="team:${esc(m.id)}:shift.start" aria-label="${esc(m.name)} start"></td>
      <td><input type="time" id="sh-${esc(m.id)}-end" value="${esc(sh.end||'')}" data-bind="team:${esc(m.id)}:shift.end" aria-label="${esc(m.name)} end"></td>
      <td><input type="time" id="sh-${esc(m.id)}-lunch" value="${esc(sh.lunch||'')}" data-bind="team:${esc(m.id)}:shift.lunch" aria-label="${esc(m.name)} lunch start"></td>
      <td><select id="sh-${esc(m.id)}-len" data-bind="team:${esc(m.id)}:shift.lunchLen:num" aria-label="${esc(m.name)} lunch length">${[30,45,60].map(n => `<option value="${n}" ${Number(sh.lunchLen||30)===n?'selected':''}>${n} min</option>`).join('')}</select></td></tr>`; }).join('')}
    </tbody></table></div></section>`).join('');

  return `${loadingNote()}<section class="panel">
    <div class="row" style="justify-content:space-between">
      <div class="row"><button class="icon-btn" data-act="sunDay" data-v="-1" aria-label="Previous day">${ICON.left}</button>
        <input type="date" id="sun-date" value="${esc(date)}" data-act-change="sunDate" aria-label="Day">
        <button class="icon-btn" data-act="sunDay" data-v="1" aria-label="Next day">${ICON.right}</button>
        ${date!==td ? '<button class="btn sm" data-act="sunToday">Today</button>' : ''}</div>
      <div class="seg" role="group" aria-label="Channel">${[['all','All'],['chat','Chat'],['voice','Voice']].map(([k,l]) => `<button data-act="sunChannel" data-v="${k}" aria-pressed="${ui.sunChannel===k}">${l}</button>`).join('')}</div>
    </div>
    <div class="legend"><span><i class="sw" style="background:color-mix(in srgb,var(--chat) 16%,transparent);border-color:var(--chat)"></i>Chat shift</span><span><i class="sw" style="background:color-mix(in srgb,var(--voice) 16%,transparent);border-color:var(--voice)"></i>Voice shift</span><span><i class="sw" style="background:var(--gold-soft);border-color:var(--gold)"></i>Lunch</span><span><i class="sw" style="background:var(--bad-soft);border-color:var(--bad)"></i>Out</span><span>Coverage row: people on the floor per half hour${Object.values(maxL).some(Boolean) ? '; amber underline means too many at lunch' : ''}</span></div>
  </section>
  ${tl}
  <div class="small muted">Set someone out for this day with the menu beside their name. Shift times repeat every week on the work days you choose below.</div>
  ${editor}`;
}
const DOWL = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

/* ---------- Pantheon ---------- */
function vPantheon(){
  const lastWeek = addDays(mondayOf(today()), -7), thisWeek = mondayOf(today());
  const card = m => {
    const s = statusNow(m);
    const defs = defsFor(m.channel).slice(0,4);
    const wk = S.metrics[m.id+'__'+thisWeek] ? thisWeek : lastWeek;
    const openT = list('tasks').filter(t => t.memberId===m.id && !t.done).length;
    const notes = list('notes').filter(n => n.memberId===m.id).sort((a,b) => (b.date||'').localeCompare(a.date||''));
    return `<button class="mcard" data-act="openMember" data-id="${esc(m.id)}">
      <span class="top-r"><span class="ava ${m.channel}">${esc(initials(m.name))}</span><span style="min-width:0"><span class="nm">${esc(m.name)}</span><br><span class="small muted">${m.channel==='chat'?'Chat':'Voice'}</span></span></span>
      <span class="meta"><span class="chip ${s.k}">${esc(s.label)}</span>${openT ? `<span class="chip">${openT} open task${openT>1?'s':''}</span>` : ''}</span>
      ${defs.length ? `<span class="mdots">${defs.map(d => { const v = mval(m.id, wk, d.key); return `<span title="${esc(d.label)}"><i class="sd ${rate(d,v)}"></i>${esc(d.short||d.label)} ${esc(fmtVal(d,v))}</span>`; }).join('')}</span>` : ''}
      <span class="small muted">${notes.length ? 'Last note ' + esc(relDay(notes[0].date)) : 'No notes yet'}</span>
    </button>`;
  };
  return `${loadingNote()}${['chat','voice'].map(ch => { const mem = byChannel(ch); return `<section class="stack" style="gap:12px">
    <div class="panel-h"><h2 style="color:var(--${ch})">${ch==='chat'?'Chat':'Voice'} channel</h2><span class="chip tnum">${mem.length}</span></div>
    ${mem.length ? `<div class="team-grid">${mem.map(card).join('')}</div>` : '<div class="empty">No one in this channel yet.</div>'}</section>`; }).join('')}`;
}

/* ---------- Oracle ---------- */
function vOracle(){
  const ch = ui.oracleChannel, wk = ui.oracleWeek, defs = defsFor(ch), mem = byChannel(ch);
  if(!ui.oracleMetric || !defs.find(d => d.key===ui.oracleMetric)) ui.oracleMetric = defs[0] ? defs[0].key : null;
  const anyData = mem.some(m => S.metrics[m.id+'__'+wk]);
  const avg = d => { const v = mem.map(m => mval(m.id, wk, d.key)).filter(x => x!=null && x!==''); return v.length ? v.reduce((a,b) => a+Number(b), 0)/v.length : null; };
  const table = defs.length ? `<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Name</th>${defs.map(d => `<th class="num">${esc(d.label)}<small>${d.target!=null && d.target!=='' ? (d.dir==='down'?'≤ ':'≥ ') + esc(fmtVal(d,d.target)) : 'no target'}</small></th>`).join('')}</tr></thead>
    <tbody>${mem.map(m => `<tr><td><button class="ttext" data-act="openMember" data-id="${esc(m.id)}">${esc(m.name)}</button></td>${defs.map(d => { const v = mval(m.id, wk, d.key);
      return ui.oracleEdit ? `<td class="num"><input type="number" step="any" id="mi-${esc(m.id)}-${esc(d.key)}" value="${v==null?'':esc(v)}" aria-label="${esc(m.name)} ${esc(d.label)}"></td>` : `<td class="mv ${rate(d,v)}"><i></i>${esc(fmtVal(d,v))}</td>`; }).join('')}</tr>`).join('')}</tbody>
    ${!ui.oracleEdit ? `<tfoot><tr><td>Channel average</td>${defs.map(d => { const a = avg(d); return `<td class="mv ${rate(d,a)}"><i></i>${esc(fmtVal(d, a==null?null:Math.round(a*10)/10))}</td>`; }).join('')}</tr></tfoot>` : ''}
  </table></div>` : '<div class="empty">No metrics apply to this channel. Open Metric settings to add some.</div>';
  const weeks = []; for(let i = 7; i >= 0; i--) weeks.push(addDays(wk, -7*i));
  const md = defs.find(d => d.key===ui.oracleMetric);
  return `<section class="panel">
    <div class="row" style="justify-content:space-between">
      <div class="row"><button class="icon-btn" data-act="oWeek" data-v="-7" aria-label="Previous week">${ICON.left}</button><b class="tnum">Week of ${esc(fmtDate(wk,{month:'short',day:'numeric',year:'numeric'}))}</b><button class="icon-btn" data-act="oWeek" data-v="7" aria-label="Next week">${ICON.right}</button>${wk!==mondayOf(today()) ? '<button class="btn sm" data-act="oThisWeek">This week</button>' : ''}</div>
      <div class="seg" role="group" aria-label="Channel">${[['chat','Chat'],['voice','Voice']].map(([k,l]) => `<button data-act="oChannel" data-v="${k}" aria-pressed="${ch===k}">${l}</button>`).join('')}</div>
    </div>
  </section>
  <section class="panel">
    <div class="panel-h"><h2>${ch==='chat'?'Chat':'Voice'} scorecard</h2><div class="right">
      ${ui.oracleEdit ? '<button class="btn sm ghost" data-act="oCancel">Cancel</button><button class="btn sm primary" data-act="oSave">Save week</button>' : `<button class="btn sm" data-act="oSettings">Metric settings</button><button class="btn sm primary" data-act="oEdit">${anyData ? 'Edit metrics' : 'Enter metrics'}</button>`}</div></div>
    ${!anyData && !ui.oracleEdit ? `<div class="empty small">No metrics logged for this week yet. Choose <b>Enter metrics</b> to add them. Dots turn green, amber, or red once a metric has a target.</div>` : ''}
    ${table}
  </section>
  ${ui.oracleSettings ? settingsPanel() : ''}
  <section class="panel">
    <div class="panel-h"><h2>Trend, last 8 weeks</h2><div class="right"><select id="o-metric" data-act-change="oMetric" aria-label="Metric">${defs.map(d => `<option value="${esc(d.key)}" ${d.key===ui.oracleMetric?'selected':''}>${esc(d.label)}</option>`).join('')}</select></div></div>
    ${md ? `<div class="spark-grid">${mem.map(m => { const vals = weeks.map(w => { const v = mval(m.id, w, md.key); return v==null || v==='' ? null : Number(v); }); const last = [...vals].reverse().find(v => v!=null);
      return `<div class="spk"><div class="h"><span>${esc(m.name)}</span><b class="${rate(md,last)}" style="color:${rate(md,last)==='bad'?'var(--bad)':'inherit'}">${esc(fmtVal(md, last))}</b></div>${spark(vals, md)}</div>`; }).join('')}</div>
      <div class="small muted">Dashed line is the target. Dot color shows the latest week against target.</div>` : '<div class="empty small">Add a metric to see trends.</div>'}
  </section>`;
}
function settingsPanel(){
  const dr = ui.metricDraft || (ui.metricDraft = clone(metricDefs()));
  return `<section class="panel">
    <div class="panel-h"><h2>Metric settings</h2><div class="right"><button class="btn sm ghost" data-act="mCancel">Cancel</button><button class="btn sm primary" data-act="mSave">Save settings</button></div></div>
    <div class="tbl-wrap"><table class="tbl"><thead><tr><th>Metric</th><th>Short</th><th>Unit</th><th>Better when</th><th>Target</th><th>Chat</th><th>Voice</th><th></th></tr></thead><tbody>
    ${dr.map((d,i) => `<tr>
      <td><input type="text" id="md-${i}-label" value="${esc(d.label)}" data-draft="${i}:label" aria-label="Metric name"></td>
      <td><input type="text" id="md-${i}-short" value="${esc(d.short||'')}" data-draft="${i}:short" style="width:80px" aria-label="Short name"></td>
      <td><input type="text" id="md-${i}-unit" value="${esc(d.unit||'')}" data-draft="${i}:unit" style="width:70px" aria-label="Unit"></td>
      <td><select id="md-${i}-dir" data-draft="${i}:dir" aria-label="Better when"><option value="up" ${d.dir!=='down'?'selected':''}>Higher</option><option value="down" ${d.dir==='down'?'selected':''}>Lower</option></select></td>
      <td><input type="number" step="any" id="md-${i}-target" value="${d.target==null?'':esc(d.target)}" data-draft="${i}:target" aria-label="Target"></td>
      <td><input type="checkbox" id="md-${i}-chat" ${(d.channels||[]).includes('chat')?'checked':''} data-draft="${i}:chat" aria-label="Applies to chat"></td>
      <td><input type="checkbox" id="md-${i}-voice" ${(d.channels||[]).includes('voice')?'checked':''} data-draft="${i}:voice" aria-label="Applies to voice"></td>
      <td><button class="icon-btn" data-act="mRemove" data-i="${i}" aria-label="Remove ${esc(d.label)}">${ICON.x}</button></td></tr>`).join('')}
    </tbody></table></div>
    <div><button class="btn sm" data-act="mAdd">+ Add metric</button></div>
    <p class="small muted" style="margin:0">Removing a metric hides it; logged numbers stay saved. Leave a target blank to track a number without color coding.</p>
  </section>`;
}
const VIEWS = {summit:vSummit, agora:vAgora, labors:vLabors, sundial:vSundial, pantheon:vPantheon, oracle:vOracle};

/* =============== modals =============== */
function openModal(type, id){ ui.modal = {type, id}; ui.armed = null; $('#modal').hidden = false; renderModal(); setTimeout(() => { const f = $('#sheet [data-autofocus]'); if(f) f.focus(); }, 30); }
function closeModal(){ ui.modal = null; $('#modal').hidden = true; $('#sheet').innerHTML = ''; if(pending){ pending = false; renderAll(); } }
function renderModal(){
  const {type, id} = ui.modal; let html = '';
  if(type==='meeting') html = modalMeeting(id);
  else if(type==='newMeeting') html = modalNewMeeting();
  else if(type==='member') html = modalMember(id);
  else if(type==='task') html = modalTask(id);
  if(html==null){ closeModal(); return; }
  $('#sheet').innerHTML = html;
}
const closeBtn = '<button class="icon-btn" data-act="close" aria-label="Close">' + ICON.x + '</button>';
const delBtn = (act, id, label) => `<button class="btn sm danger ${ui.armed===act+id?'armed':''}" data-act="${act}" data-id="${esc(id)}">${ui.armed===act+id ? 'Tap again to delete' : label}</button>`;

function modalMeeting(id){
  const m = findMeeting(id); if(!m) return null;
  const rec = S.meetings[id];
  const cat = CATS[m.category] || CATS.other;
  const isHub = m.source==='hub';
  const fu = list('tasks').filter(t => t.meetingId===id).sort((a,b) => (a.done-b.done) || cmpTask(a,b));
  const team = teamList();
  const att = (rec && rec.attendees) || m.team || [];
  const head = `<div class="sheet-h"><div class="tt">
      ${isHub ? `<input class="title-input" id="mt-title" value="${esc(m.title)}" data-bind="meetings:${esc(id)}:title" aria-label="Meeting title">` : `<h2>${esc(m.title)}</h2>`}
      <div class="small muted">${esc(relDay(m.date))}, ${esc(fmtDate(m.date,{month:'long',day:'numeric'}))}${m.allDay ? ', all day' : ` · ${esc(fmtTime(m.start))} to ${esc(fmtTime(m.end))}`}${m.count ? ` · ${m.count} invited` : ''}</div></div>${closeBtn}</div>`;
  const links = `<div class="linkrow">${m.link ? `<a class="btn sm" href="${esc(m.link)}" target="_blank" rel="noopener">${ICON.ext} Open in Google Calendar</a>` : ''}${m.meet ? `<a class="btn sm" href="${esc(m.meet)}" target="_blank" rel="noopener">${ICON.ext} Join Meet</a>` : ''}${isHub ? `<button class="btn sm gold" data-act="pushCal" data-id="${esc(id)}">${rec && rec.pushed ? 'Added. Add again' : 'Add to Google Calendar'}</button>` : ''}</div>`;
  if(!rec){
    return `${head}${links}
      <div class="field"><label for="pm-cat">Category</label><select id="pm-cat" data-act-change="prepCat" data-id="${esc(id)}">${Object.entries(CATS).map(([k,c]) => `<option value="${k}" ${m.category===k?'selected':''}>${esc(c.label)}</option>`).join('')}</select></div>
      <div class="empty"><b>Not prepped yet.</b> Prep this meeting to get an agenda checklist${cat.tpl.length ? ` (starting from the ${esc(cat.label)} template)` : ''}, private notes, and follow-up tasks.</div>
      <div><button class="btn primary" data-act="prepMeeting" data-id="${esc(id)}" data-autofocus>Prep this meeting</button></div>`;
  }
  const ag = rec.agenda || [];
  return `${head}${links}
    <div class="fields">
      <div class="field"><label for="mt-cat">Category</label><select id="mt-cat" data-bind="meetings:${esc(id)}:category">${Object.entries(CATS).map(([k,c]) => `<option value="${k}" ${m.category===k?'selected':''}>${esc(c.label)}</option>`).join('')}</select></div>
      ${isHub ? `<div class="field"><label for="mt-date">Date</label><input type="date" id="mt-date" value="${esc(rec.date)}" data-bind="meetings:${esc(id)}:date"></div>
      <div class="field"><label for="mt-start">Start</label><input type="time" id="mt-start" value="${esc(rec.start||'')}" data-bind="meetings:${esc(id)}:start"></div>
      <div class="field"><label for="mt-end">End</label><input type="time" id="mt-end" value="${esc(rec.end||'')}" data-bind="meetings:${esc(id)}:end"></div>` : ''}
    </div>
    <div class="stack" style="gap:6px"><span class="flabel">Team members in this meeting</span>
      <div class="people">${team.map(p => `<button class="pchip" data-act="toggleAtt" data-id="${esc(id)}" data-m="${esc(p.id)}" aria-pressed="${att.includes(p.id)}">${esc(p.name)}</button>`).join('')}</div></div>
    <section class="panel">
      <div class="panel-h"><h2>Agenda</h2><span class="small muted tnum">${ag.filter(a=>a.done).length}/${ag.length}</span>${ag.length===0 && cat.tpl.length ? `<div class="right"><button class="btn sm" data-act="loadTpl" data-id="${esc(id)}">Load ${esc(cat.label)} template</button></div>` : ''}</div>
      ${ag.length ? `<ul class="agenda">${ag.map((a,i) => `<li class="${a.done?'done':''}"><button class="chk" style="${a.done?'background:var(--good);border-color:var(--good)':''}" data-act="agToggle" data-id="${esc(id)}" data-i="${i}" aria-label="Toggle ${esc(a.text)}">${a.done ? ICON.check.replace('<svg','<svg style="opacity:1"') : ICON.check}</button><span>${esc(a.text)}</span><span class="ops"><button class="icon-btn" data-act="agMove" data-id="${esc(id)}" data-i="${i}" data-v="-1" aria-label="Move up" ${i===0?'disabled':''}>${ICON.up}</button><button class="icon-btn" data-act="agMove" data-id="${esc(id)}" data-i="${i}" data-v="1" aria-label="Move down" ${i===ag.length-1?'disabled':''}>${ICON.down}</button><button class="icon-btn" data-act="agDel" data-id="${esc(id)}" data-i="${i}" aria-label="Remove">${ICON.x}</button></span></li>`).join('')}</ul>` : '<div class="empty small">No agenda items yet.</div>'}
      <form class="addrow" data-form="agendaAdd" data-id="${esc(id)}" autocomplete="off"><input type="text" id="ag-new" placeholder="Add an agenda item" aria-label="New agenda item"><button class="btn" type="submit">Add</button></form>
    </section>
    <section class="panel">
      <div class="panel-h"><h2>Notes</h2><span class="small muted">Saves when you click away</span></div>
      <textarea id="mt-notes" data-bind="meetings:${esc(id)}:notes" placeholder="Decisions, context, what was said...">${esc(rec.notes||'')}</textarea>
    </section>
    <section class="panel">
      <div class="panel-h"><h2>Follow-ups</h2><span class="small muted tnum">${fu.filter(t=>!t.done).length} open</span></div>
      ${fu.length ? `<ul class="tasks">${fu.map(t => taskRow(t, {hideMeeting:true})).join('')}</ul>` : '<div class="empty small">No follow-ups yet. They also show in Labors.</div>'}
      <form class="addrow" data-form="followAdd" data-id="${esc(id)}" autocomplete="off">
        <input type="text" id="fu-text" placeholder="Follow-up task" aria-label="Follow-up" required>
        <input type="date" id="fu-due" aria-label="Due" value="${esc(addDays(today(),1))}">
        <select id="fu-member" aria-label="About"><option value="">No person</option>${team.map(p => `<option value="${esc(p.id)}" ${att.length===1 && att[0]===p.id ? 'selected':''}>${esc(p.name)}</option>`).join('')}</select>
        <button class="btn primary" type="submit">Add</button></form>
    </section>
    <div class="row">${isHub ? `<button class="btn sm" data-act="dupMeeting" data-id="${esc(id)}">Copy to next week</button>` : ''}${delBtn('delMeeting', id, isHub ? 'Delete meeting' : 'Clear prep notes')}</div>`;
}
function modalNewMeeting(){
  const team = teamList();
  return `<div class="sheet-h"><div class="tt"><h2>New meeting</h2><div class="small muted">Saved in the hub. You can add it to Google Calendar after.</div></div>${closeBtn}</div>
  <form class="stack" data-form="newMeeting" autocomplete="off">
    <div class="field"><label for="nm-title">Title</label><input id="nm-title" type="text" required data-autofocus placeholder="e.g. 1:1 with Rachel"></div>
    <div class="fields">
      <div class="field"><label for="nm-cat">Category</label><select id="nm-cat">${Object.entries(CATS).filter(([k]) => k!=='other').map(([k,c]) => `<option value="${k}">${esc(c.label)}</option>`).join('')}</select></div>
      <div class="field"><label for="nm-date">Date</label><input id="nm-date" type="date" value="${esc(today())}" required></div>
      <div class="field"><label for="nm-start">Start</label><input id="nm-start" type="time"></div>
      <div class="field"><label for="nm-end">End</label><input id="nm-end" type="time"></div>
      <div class="field"><label for="nm-member">With</label><select id="nm-member"><option value="">No one specific</option>${team.map(p => `<option value="${esc(p.id)}">${esc(p.name)}</option>`).join('')}</select></div>
    </div>
    <p class="small muted" style="margin:0">The agenda starts from the category template. You can edit every item.</p>
    <div class="row"><button class="btn primary" type="submit">Create meeting</button><label class="small row" style="gap:6px"><input type="checkbox" id="nm-push"> Also add to Google Calendar</label></div>
  </form>`;
}
function modalMember(id){
  const m = S.team[id]; if(!m) return null;
  const mm = {...m, id};
  const s = statusNow(mm), sh = m.shift || {};
  const notes = list('notes').filter(n => n.memberId===id).sort((a,b) => (b.date||'').localeCompare(a.date||'') || (b.createdAt||0)-(a.createdAt||0));
  const tasks = list('tasks').filter(t => t.memberId===id && !t.done).sort(cmpTask);
  const mtgs = allMeetings().filter(x => (x.team||[]).includes(id) || ((x.rec && x.rec.attendees)||[]).includes(id));
  const td = today(); const up = mtgs.filter(x => x.date >= td).slice(0,3), past = mtgs.filter(x => x.date < td).slice(-3).reverse();
  const defs = defsFor(m.channel); const wk = mondayOf(td); const weeks = [0,1,2,3,4,5].map(i => addDays(wk, -7*i));
  return `<div class="sheet-h"><span class="ava lg ${m.channel}">${esc(initials(m.name))}</span><div class="tt"><h2>${esc(m.name)}</h2><div class="row" style="gap:6px;margin-top:4px"><span class="chip ch-${m.channel}">${m.channel==='chat'?'Chat':'Voice'}</span><span class="chip ${s.k}">${esc(s.label)}</span></div></div>${closeBtn}</div>
  <div class="fields">
    <div class="field"><label for="mb-ch">Channel</label><select id="mb-ch" data-bind="team:${esc(id)}:channel"><option value="chat" ${m.channel==='chat'?'selected':''}>Chat</option><option value="voice" ${m.channel==='voice'?'selected':''}>Voice</option></select></div>
    <div class="field"><span class="flabel">Shift</span><span class="small">${sh.start && sh.end ? `${esc(fmtTime(sh.start))} to ${esc(fmtTime(sh.end))}, ${(sh.days||[]).slice().sort((a,b)=>((a+6)%7)-((b+6)%7)).map(d => DOWL[d].slice(0,3)).join(' ')}` : 'Not set'}</span></div>
    <div class="field"><span class="flabel">Lunch</span><span class="small">${sh.lunch ? `${esc(fmtTime(sh.lunch))}, ${esc(sh.lunchLen||30)} min` : 'Not set'}</span></div>
  </div>
  <div><a class="btn sm" href="#sundial" data-act="close">Edit schedule in Sundial</a></div>
  <section class="panel">
    <div class="panel-h"><h2>Notes log</h2><span class="small muted">${notes.length}</span></div>
    <form class="stack" style="gap:8px" data-form="noteAdd" data-id="${esc(id)}" autocomplete="off">
      <div class="row"><select id="nn-type" aria-label="Note type">${Object.entries(NOTE_TYPES).map(([k,l]) => `<option value="${k}">${l}</option>`).join('')}</select><input type="date" id="nn-date" value="${esc(td)}" aria-label="Date"></div>
      <textarea id="nn-text" style="min-height:70px" placeholder="What happened, what you said, what's next" aria-label="Note" required></textarea>
      <div><button class="btn primary sm" type="submit">Add note</button></div></form>
    ${notes.length ? `<ul class="notes-list">${notes.map(n => `<li class="note ${n.type}"><div class="nh"><b style="color:var(--fg)">${esc(NOTE_TYPES[n.type]||'Note')}</b><span>${esc(fmtDate(n.date,{month:'short',day:'numeric',year:'numeric'}))}</span><span style="margin-left:auto"></span>${delBtn('delNote', n.id, 'Delete')}</div><p>${esc(n.text)}</p></li>`).join('')}</ul>` : '<div class="empty small">No notes yet. Log wins as they happen; they make reviews easy.</div>'}
  </section>
  <section class="panel">
    <div class="panel-h"><h2>Metrics, last 6 weeks</h2></div>
    ${defs.length ? `<div class="tbl-wrap"><table class="tbl" style="min-width:420px"><thead><tr><th>Week of</th>${defs.map(d => `<th class="num">${esc(d.short||d.label)}</th>`).join('')}</tr></thead><tbody>${weeks.map(w => `<tr><td class="tnum">${esc(fmtDate(w,{month:'short',day:'numeric'}))}</td>${defs.map(d => { const v = mval(id, w, d.key); return `<td class="mv ${rate(d,v)}"><i></i>${esc(fmtVal(d,v))}</td>`; }).join('')}</tr>`).join('')}</tbody></table></div>` : '<div class="empty small">No metrics set up yet.</div>'}
  </section>
  <section class="panel">
    <div class="panel-h"><h2>Open tasks</h2><span class="small muted">${tasks.length}</span></div>
    ${tasks.length ? `<ul class="tasks">${tasks.map(t => taskRow(t)).join('')}</ul>` : ''}
    <form class="addrow" data-form="memberTask" data-id="${esc(id)}" autocomplete="off"><input type="text" id="mtk-text" placeholder="Task about ${esc(m.name.split(' ')[0])}" aria-label="New task" required><input type="date" id="mtk-due" aria-label="Due"><button class="btn" type="submit">Add</button></form>
  </section>
  <section class="panel">
    <div class="panel-h"><h2>Meetings</h2><div class="right"><button class="btn sm" data-act="newOneOne" data-id="${esc(id)}">+ Plan a 1:1</button></div></div>
    ${up.length || past.length ? `${up.length ? `<div class="flabel">Upcoming</div><div class="mtg-day">${up.map(mtgRow).join('')}</div>` : ''}${past.length ? `<div class="flabel">Recent</div><div class="mtg-day">${past.map(mtgRow).join('')}</div>` : ''}` : '<div class="empty small">No meetings linked to them yet. Calendar meetings link automatically when their name is on the invite.</div>'}
  </section>`;
}
function modalTask(id){
  const t = S.tasks[id]; if(!t) return null;
  const team = teamList();
  return `<div class="sheet-h"><div class="tt"><h2>Edit task</h2></div>${closeBtn}</div>
  <div class="stack">
    <div class="field"><label for="tk-text">Task</label><textarea id="tk-text" style="min-height:70px" data-bind="tasks:${esc(id)}:text" data-autofocus>${esc(t.text)}</textarea></div>
    <div class="fields">
      <div class="field"><label for="tk-due">Due</label><input type="date" id="tk-due" value="${esc(t.due||'')}" data-bind="tasks:${esc(id)}:due"></div>
      <div class="field"><label for="tk-pri">Priority</label><select id="tk-pri" data-bind="tasks:${esc(id)}:priority"><option value="normal" ${t.priority!=='high'?'selected':''}>Normal</option><option value="high" ${t.priority==='high'?'selected':''}>High</option></select></div>
      <div class="field"><label for="tk-mem">About</label><select id="tk-mem" data-bind="tasks:${esc(id)}:memberId"><option value="">No person</option>${team.map(p => `<option value="${esc(p.id)}" ${t.memberId===p.id?'selected':''}>${esc(p.name)}</option>`).join('')}</select></div>
    </div>
    ${t.meetingId && findMeeting(t.meetingId) ? `<div><button class="btn sm" data-act="openMeeting" data-id="${esc(t.meetingId)}">From: ${esc(findMeeting(t.meetingId).title)}</button></div>` : ''}
    <div class="row"><button class="btn primary" data-act="close">Done editing</button><button class="btn" data-act="toggleTask" data-id="${esc(id)}">${t.done ? 'Mark not done' : 'Mark complete'}</button>${delBtn('delTask', id, 'Delete task')}</div>
  </div>`;
}

/* =============== actions =============== */
function armOrRun(key, fn){ if(ui.armed===key){ ui.armed = null; fn(); } else { ui.armed = key; renderModal(); setTimeout(() => { if(ui.armed===key){ ui.armed = null; if(ui.modal) renderModal(); } }, 3500); } }
async function addTask(o){
  const id = newId();
  const ok = await put('tasks', id, {text:o.text.trim(), due:o.due||null, priority:o.priority||'normal', memberId:o.memberId||null, meetingId:o.meetingId||null, done:false, doneAt:null, createdAt:Date.now()});
  if(ok) toast('Task added.');
  return ok;
}
async function toggleTask(id, el){
  const t = S.tasks[id]; if(!t) return;
  const done = !t.done;
  if(done && el) burst(el);
  await patch('tasks', id, {done, doneAt: done ? today() : null, updatedAt:Date.now()});
}
async function createMeeting(o){
  const id = newId();
  const ok = await put('meetings', id, {title:o.title, category:o.category, date:o.date, start:o.start||null, end:o.end||null, attendees:o.attendees||[], agenda:(CATS[o.category]?.tpl||[]).map(t => ({id:newId(), text:t, done:false})), notes:'', createdAt:Date.now()});
  return ok ? id : null;
}
async function editAgenda(id, fn){
  const rec = S.meetings[id]; if(!rec) return;
  const ag = clone(rec.agenda || []); fn(ag); await patch('meetings', id, {agenda: ag});
}

document.addEventListener('click', async e => {
  if(e.target.id==='modal'){ closeModal(); return; }
  const el = e.target.closest('[data-act]'); if(!el) return;
  const act = el.dataset.act, id = el.dataset.id, v = el.dataset.v;
  if(el.tagName==='A' && act==='close'){ closeModal(); return; }
  switch(act){
    case 'close': closeModal(); break;
    case 'toggleTask': await toggleTask(id, el); break;
    case 'editTask': openModal('task', id); break;
    case 'snooze': await patch('tasks', id, {due: addDays(today(),1)}); toast('Moved to tomorrow.'); break;
    case 'delTask': armOrRun('delTask'+id, async () => { closeModal(); await remove('tasks', id); toast('Task deleted.'); }); break;
    case 'newMeeting': openModal('newMeeting'); break;
    case 'openMeeting': openModal('meeting', id); break;
    case 'openMember': openModal('member', id); break;
    case 'prepMeeting': { const m = findMeeting(id); if(m) await ensureRecord(m); break; }
    case 'loadTpl': { const rec = S.meetings[id]; if(rec) await patch('meetings', id, {agenda:(CATS[rec.category]?.tpl||[]).map(t => ({id:newId(), text:t, done:false}))}); break; }
    case 'agToggle': await editAgenda(id, ag => { const i = +el.dataset.i; ag[i].done = !ag[i].done; }); break;
    case 'agMove': await editAgenda(id, ag => { const i = +el.dataset.i, j = i + (+v); if(j<0 || j>=ag.length) return; [ag[i], ag[j]] = [ag[j], ag[i]]; }); break;
    case 'agDel': await editAgenda(id, ag => { ag.splice(+el.dataset.i, 1); }); break;
    case 'toggleAtt': { const rec = S.meetings[id]; if(!rec) break; const a = new Set(rec.attendees||[]); a.has(el.dataset.m) ? a.delete(el.dataset.m) : a.add(el.dataset.m); await patch('meetings', id, {attendees:[...a]}); break; }
    case 'dupMeeting': { const rec = S.meetings[id]; if(!rec) break; const nid = newId(); const ok = await put('meetings', nid, {...clone(rec), date:addDays(rec.date,7), notes:'', pushed:false, agenda:(rec.agenda||[]).map(a => ({...a, id:newId(), done:false})), createdAt:Date.now()}); if(ok){ toast('Copied to ' + fmtDate(addDays(rec.date,7)) + '.'); openModal('meeting', nid); } break; }
    case 'delMeeting': armOrRun('delMeeting'+id, async () => { closeModal(); await remove('meetings', id); toast('Removed.'); }); break;
    case 'pushCal': await pushToCalendar(id); break;
    case 'newOneOne': { const m = S.team[id]; closeModal(); openModal('newMeeting'); setTimeout(() => { const t = $('#nm-title'), c = $('#nm-cat'), w = $('#nm-member'); if(t) t.value = '1:1 with ' + m.name.split(' ')[0]; if(c) c.value = 'one'; if(w) w.value = id; }, 40); break; }
    case 'delNote': armOrRun('delNote'+id, async () => { await remove('notes', id); }); break;
    case 'calRetry': if(!calOn()) await connectCalendar(); else await loadCalendar(); break;
    case 'signOut': gcal.clear(); if(auth) await auth.signOut(); break;
    case 'importPick': { const f = $('#imp-file'); if(f) f.click(); break; }
    case 'importRun': await runImport(); break;
    case 'importCancel': ui.importData = null; renderAll(); break;
    case 'agoraFilter': ui.agoraFilter = v; renderAll(); break;
    case 'agoraWhen': ui.agoraWhen = v; ui.agoraFilter = 'all'; renderAll(); break;
    case 'laborsFilter': ui.laborsFilter = v; renderAll(); break;
    case 'toggleDone': ui.laborsShowDone = !ui.laborsShowDone; renderAll(); break;
    case 'sunDay': ui.sunDate = addDays(ui.sunDate, +v); renderAll(); break;
    case 'sunToday': ui.sunDate = today(); renderAll(); break;
    case 'sunChannel': ui.sunChannel = v; store('sunChannel', v); renderAll(); break;
    case 'toggleDay': { const m = S.team[id]; const days = new Set((m.shift||{}).days || []); const d = +el.dataset.d; days.has(d) ? days.delete(d) : days.add(d); await patch('team', id, {shift:{days:[...days].sort()}}); break; }
    case 'oWeek': ui.oracleWeek = addDays(ui.oracleWeek, +v); ui.oracleEdit = false; renderAll(); break;
    case 'oThisWeek': ui.oracleWeek = mondayOf(today()); ui.oracleEdit = false; renderAll(); break;
    case 'oChannel': ui.oracleChannel = v; store('oracleChannel', v); ui.oracleEdit = false; renderAll(); break;
    case 'oEdit': ui.oracleEdit = true; renderAll(); { const f = $('#view input[type=number]'); if(f) f.focus(); } break;
    case 'oCancel': ui.oracleEdit = false; renderAll(); break;
    case 'oSave': await saveMetrics(); break;
    case 'oSettings': ui.oracleSettings = !ui.oracleSettings; ui.metricDraft = null; renderAll(); break;
    case 'mCancel': ui.oracleSettings = false; ui.metricDraft = null; renderAll(); break;
    case 'mAdd': readDraft(); ui.metricDraft.push({key:'m'+Date.now().toString(36), label:'New metric', short:'', unit:'', dir:'up', target:null, channels:['chat','voice']}); renderAll(); break;
    case 'mRemove': readDraft(); ui.metricDraft.splice(+el.dataset.i, 1); renderAll(); break;
    case 'mSave': { readDraft(); const ok = await put('config', 'metrics', {list: ui.metricDraft}); if(ok){ ui.oracleSettings = false; ui.metricDraft = null; toast('Metric settings saved.'); renderAll(); } break; }
  }
});
function readDraft(){
  if(!ui.metricDraft) return;
  document.querySelectorAll('[data-draft]').forEach(inp => {
    const [i, f] = inp.dataset.draft.split(':'); const d = ui.metricDraft[+i]; if(!d) return;
    if(f==='chat' || f==='voice'){ const s = new Set(d.channels || []); inp.checked ? s.add(f) : s.delete(f); d.channels = ['chat','voice'].filter(c => s.has(c)); }
    else if(f==='target'){ d.target = inp.value==='' ? null : Number(inp.value); }
    else d[f] = inp.value;
  });
}
async function saveMetrics(){
  const ch = ui.oracleChannel, wk = ui.oracleWeek, defs = defsFor(ch);
  let n = 0;
  for(const m of byChannel(ch)){
    const prev = S.metrics[m.id+'__'+wk];
    const values = prev && prev.values ? clone(prev.values) : {};
    let changed = false;
    defs.forEach(d => { const inp = document.getElementById(`mi-${m.id}-${d.key}`); if(!inp) return; const nv = inp.value==='' ? null : Number(inp.value); if((values[d.key] ?? null) !== nv){ values[d.key] = nv; changed = true; } });
    if(!changed) continue;
    const ok = await put('metrics', m.id+'__'+wk, {memberId:m.id, week:wk, channel:ch, values, updatedAt:Date.now()});
    if(!ok) return;
    n++;
  }
  ui.oracleEdit = false; renderAll();
  toast(n ? `Saved metrics for ${n} ${n===1?'person':'people'}.` : 'No changes to save.');
}

document.addEventListener('change', async e => {
  const el = e.target;
  if(el.dataset.bind){
    const [col, id, path, kind] = el.dataset.bind.split(':');
    let val = el.type==='checkbox' ? el.checked : el.value;
    if(kind==='num') val = val==='' ? null : Number(val);
    if(val==='' && el.tagName!=='TEXTAREA') val = null;
    if(col==='tasks' && path==='text' && !String(val||'').trim()) return;
    await patch(col, id, setNested(path, val));
    return;
  }
  const act = el.dataset.actChange; if(!act) return;
  if(act==='setOff'){ await patch('team', el.dataset.id, {off:{[ui.sunDate]: el.value || null}}); }
  else if(act==='maxLunch'){ const cur = clone(settings()) || {}; cur.maxLunch = {...(cur.maxLunch||{}), [el.dataset.ch]: el.value ? Number(el.value) : null}; await put('config', 'settings', cur); }
  else if(act==='sunDate'){ if(el.value){ ui.sunDate = el.value; pending = false; renderAll(); } }
  else if(act==='oMetric'){ ui.oracleMetric = el.value; pending = false; renderAll(); }
  else if(act==='prepCat'){ const m = findMeeting(el.dataset.id); if(m){ m.category = el.value; await ensureRecord(m); } }
});

document.addEventListener('submit', async e => {
  const f = e.target.closest('form[data-form]'); if(!f) return;
  e.preventDefault();
  const kind = f.dataset.form, id = f.dataset.id, val = s => { const x = f.querySelector(s); return x ? x.value : ''; };
  if(kind==='capture'){ const t = val('#cap').trim(); if(!t) return; if(await addTask({text:t})) $('#cap').value = ''; }
  else if(kind==='addTask'){ const t = val('#nt-text').trim(); if(!t) return; if(await addTask({text:t, due:val('#nt-due'), memberId:val('#nt-member'), priority:val('#nt-pri')})) f.reset(); }
  else if(kind==='agendaAdd'){ const t = val('#ag-new').trim(); if(!t) return; await editAgenda(id, ag => ag.push({id:newId(), text:t, done:false})); const i = $('#ag-new'); if(i){ i.value = ''; i.focus(); } }
  else if(kind==='followAdd'){ const t = val('#fu-text').trim(); if(!t) return; if(await addTask({text:t, due:val('#fu-due'), memberId:val('#fu-member'), meetingId:id})){ const i = $('#fu-text'); if(i){ i.value = ''; i.focus(); } } }
  else if(kind==='noteAdd'){ const t = val('#nn-text').trim(); if(!t) return; const ok = await put('notes', newId(), {memberId:id, type:val('#nn-type'), date:val('#nn-date') || today(), text:t, createdAt:Date.now()}); if(ok){ const i = $('#nn-text'); if(i) i.value = ''; toast('Note saved.'); } }
  else if(kind==='memberTask'){ const t = val('#mtk-text').trim(); if(!t) return; if(await addTask({text:t, due:val('#mtk-due'), memberId:id})){ const i = $('#mtk-text'); if(i) i.value = ''; } }
  else if(kind==='newMeeting'){
    const title = val('#nm-title').trim(); if(!title) return;
    const mem = val('#nm-member');
    const nid = await createMeeting({title, category:val('#nm-cat'), date:val('#nm-date'), start:val('#nm-start'), end:val('#nm-end'), attendees: mem ? [mem] : []});
    if(!nid) return;
    const push = $('#nm-push') && $('#nm-push').checked;
    openModal('meeting', nid);
    if(push) setTimeout(() => pushToCalendar(nid), 150);
  }
  pending = false; renderAll();
});

document.addEventListener('keydown', e => {
  if(e.key==='Escape' && ui.modal){ closeModal(); return; }
  const tg = e.target; if(e.metaKey || e.ctrlKey || e.altKey) return;
  if(/^(INPUT|TEXTAREA|SELECT)$/.test(tg.tagName) || tg.isContentEditable) return;
  if(ui.modal) return;
  if(/^[1-6]$/.test(e.key)){ location.hash = PAGES[+e.key-1].id; e.preventDefault(); }
  else if(e.key==='t' || e.key==='T'){ e.preventDefault(); $('#cap').focus(); }
  else if(e.key==='m' || e.key==='M'){ e.preventDefault(); openModal('newMeeting'); }
});

/* =============== feedback =============== */
let toastT = null;
function toast(msg){ const t = $('#toast'); t.textContent = msg; t.hidden = false; clearTimeout(toastT); toastT = setTimeout(() => t.hidden = true, 2600); }
function setBanner(msg){ const b = $('#banner'); b.textContent = msg; b.hidden = !msg; }
function burst(el){
  if(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const r = el.getBoundingClientRect(), cx = r.left + r.width/2, cy = r.top + r.height/2;
  for(let i = 0; i < 12; i++){
    const s = document.createElement('span'); s.className = 'leaf';
    const a = Math.PI*2*i/12 + Math.random()*.4, d = 26 + Math.random()*26;
    s.style.left = cx + 'px'; s.style.top = cy + 'px';
    s.style.setProperty('--dx', Math.cos(a)*d + 'px'); s.style.setProperty('--dy', Math.sin(a)*d + 'px'); s.style.setProperty('--rot', (Math.random()*360) + 'deg');
    document.body.appendChild(s); setTimeout(() => s.remove(), 800);
  }
}

/* =============== routing + boot =============== */
function route(){ const h = (location.hash || '').slice(1); ui.page = PAGES.some(p => p.id===h) ? h : 'summit'; if(ui.modal) closeModal(); renderAll(); window.scrollTo(0,0); }
window.addEventListener('hashchange', route);
setInterval(() => { if(['summit','sundial','pantheon','agora'].includes(ui.page)) scheduleRender(); }, 60000);

/* =============== auth, data, import =============== */
const CFG = window.OLYMPUS_CONFIG || {};
function googleProvider(){
  const p = new firebase.auth.GoogleAuthProvider();
  p.addScope(GSCOPE);
  p.setCustomParameters({login_hint: CFG.allowedEmail || '', prompt: 'select_account'});
  return p;
}
function authMsg(e){
  const c = e && e.code;
  if(c==='auth/popup-blocked') return 'Your browser blocked the sign-in popup. Allow popups for this site.';
  if(c==='auth/popup-closed-by-user' || c==='auth/cancelled-popup-request') return 'Sign-in was closed before finishing.';
  if(c==='auth/user-mismatch') return 'Pick the same Google account you signed in with.';
  if(c==='auth/unauthorized-domain') return 'This web address is not on Firebase Authorized domains yet (Authentication, Settings).';
  if(c==='auth/network-request-failed') return 'Could not reach Google. Check your connection and try again.';
  if(c==='auth/internal-error') return 'Google sign-in hit an internal error. This is usually the redirect URI setting; see the setup notes.';
  if(c==='auth/operation-not-allowed') return 'Google sign-in is not enabled in Firebase Authentication.';
  return 'Sign-in failed: ' + ((e && (e.message || e.code)) || 'unknown error');
}
function showGate(kind, extra){
  const g = $('#gate'); g.hidden = false;
  const t = {
    setup:`<h2>One-time setup</h2><p>This hub needs its Firebase settings. Fill in <code>config.js</code> in the repo (see the README), push, and reload.</p>`,
    signin:`<h2>Welcome to Olympus</h2><p>Sign in with your Custom Ink Google account. That same sign-in connects your calendar.</p><button class="btn primary" id="gate-signin">Sign in with Google</button><p class="small muted" id="gate-msg"></p>`,
    wrong:`<h2>Not this account</h2><p>${esc(extra || 'That account')} cannot open this hub. Sign in with ${esc(CFG.allowedEmail || 'the owner account')}.</p><button class="btn primary" id="gate-signin">Sign in again</button><p class="small muted" id="gate-msg"></p>`
  }[kind];
  $('#gate-card').innerHTML = `<div class="meander" style="margin:-28px -28px 8px"></div><span class="eyebrow">Tier 2 · Partner</span><div class="gname">OLYMPUS</div>${t}`;
  const b = $('#gate-signin');
  if(b){
    const card = $('#gate-card');
    card.insertAdjacentHTML('beforeend', '<button class="btn sm ghost" id="gate-redirect" type="button">Popup not working? Sign in on a full page</button>');
    b.onclick = async () => {
      gateMsg('Finishing sign-in...', false);
      try{
        const r = await auth.signInWithPopup(googleProvider());
        if(r.credential && r.credential.accessToken) gcal.save(r.credential.accessToken);
        if(!r.user) gateMsg('Google finished, but the hub did not receive the sign-in. Try the full-page option below.', true);
      }catch(e){ console.error('Sign-in failed', e); gateMsg(authMsg(e), true); }
    };
    $('#gate-redirect').onclick = async () => {
      gateMsg('Taking you to Google...', false);
      try{ await auth.signInWithRedirect(googleProvider()); }catch(e){ console.error('Redirect sign-in failed', e); gateMsg(authMsg(e), true); }
    };
  }
}
function gateMsg(text, isErr){ const m = $('#gate-msg'); if(!m) return; m.textContent = text; m.style.color = isErr ? 'var(--bad)' : 'var(--muted)'; m.style.fontWeight = isErr ? '500' : '400'; }
function hideGate(){ $('#gate').hidden = true; }
function stopData(){ unsubs.forEach(u => { try{ u(); }catch(e){} }); unsubs = []; for(const k of Object.keys(S)) S[k] = {}; for(const k of Object.keys(loaded)) delete loaded[k]; clearInterval(calTimer); cal.events = []; cal.status = 'idle'; }
function startData(){
  stopData();
  for(const col of ['team','meetings','tasks','metrics','notes','config']){
    unsubs.push(db.collection(col).onSnapshot(snap => {
      const o = {}; snap.docs.forEach(d => { o[d.id] = d.data(); }); S[col] = o; loaded[col] = true;
      scheduleRender();
    }, err => {
      setBanner(err && err.code==='permission-denied' ? 'This account cannot read the hub data. Check the Firestore rules in the README.' : 'Lost the connection to your hub data. Reload the page to reconnect.');
    }));
  }
}
/* Import a JSON export: {team:{id:{...}}, tasks:{...}, meetings, notes, metrics, config} */
document.addEventListener('change', e => {
  if(e.target.id!=='imp-file') return;
  const f = e.target.files && e.target.files[0]; if(!f) return;
  const rd = new FileReader();
  rd.onload = () => { try{ const d = JSON.parse(rd.result); if(!d || typeof d!=='object') throw 0; ui.importData = d; renderAll(); }catch(err){ toast('That file is not a hub export.'); } };
  rd.readAsText(f);
});
async function runImport(){
  const d = ui.importData; if(!d || !db) return;
  const cols = ['team','tasks','meetings','notes','metrics','config'];
  const writes = []; cols.forEach(c => Object.entries(d[c] || {}).forEach(([id, v]) => { if(v && typeof v==='object') writes.push([c, id, v]); }));
  try{
    for(let i = 0; i < writes.length; i += 400){
      const b = db.batch();
      writes.slice(i, i+400).forEach(([c,id,v]) => b.set(db.collection(c).doc(id), v));
      await b.commit();
    }
    ui.importData = null; renderAll(); toast(`Imported ${writes.length} records.`);
  }catch(e){ dbErr(e); }
}
function toolsPanel(){
  const d = ui.importData;
  const counts = d ? ['team','tasks','meetings','notes','metrics','config'].map(c => [c, Object.keys(d[c] || {}).length]).filter(x => x[1]) : [];
  const u = auth && auth.currentUser;
  return `<section class="panel">
    <div class="panel-h"><h2>Hub tools</h2><div class="right"><span class="small muted">${u ? 'Signed in as ' + esc(u.email) : ''}</span><button class="btn sm" data-act="signOut">Sign out</button></div></div>
    ${d ? `<div class="empty">Ready to import ${counts.map(([c,n]) => `<b>${n}</b> ${c}`).join(', ')}. Records with the same ID are overwritten.</div>
      <div class="row"><button class="btn primary sm" data-act="importRun">Import now</button><button class="btn sm ghost" data-act="importCancel">Cancel</button></div>`
      : `<div class="row"><button class="btn sm" data-act="importPick">Import data from a file</button><span class="small muted">Use this once to bring over your roster and shifts.</span></div>`}
    <input type="file" id="imp-file" accept="application/json,.json" hidden>
  </section>`;
}

let wrongEmail = null;
function boot(){
  route();
  if(typeof firebase==='undefined'){ setBanner('Could not load Firebase. Check your connection and reload.'); return; }
  const fb = CFG.firebase || {};
  if(!fb.apiKey || /PASTE/.test(fb.apiKey)){ showGate('setup'); return; }
  firebase.initializeApp(fb);
  auth = firebase.auth(); db = firebase.firestore();
  auth.getRedirectResult().then(r => { if(r && r.credential && r.credential.accessToken) gcal.save(r.credential.accessToken); })
    .catch(e => { console.error('Redirect result failed', e); setTimeout(() => gateMsg(authMsg(e), true), 50); });
  auth.onAuthStateChanged(u => {
    if(!u){ stopData(); if(wrongEmail){ showGate('wrong', wrongEmail); wrongEmail = null; } else showGate('signin'); return; }
    if(CFG.allowedEmail && (u.email || '').toLowerCase() !== CFG.allowedEmail.toLowerCase()){ wrongEmail = u.email || 'That account'; stopData(); gcal.clear(); auth.signOut(); return; }
    try{ hideGate(); startData(); startCalendar(); renderAll(); }catch(e){ showCrash('after sign-in', e); }
  });
}
boot();

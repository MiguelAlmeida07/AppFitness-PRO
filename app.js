// ═══════════════════════════════════════════════════════════
// DATABASE
// ═══════════════════════════════════════════════════════════
const DB = {
  workouts: {
    T1:{name:'Treino 1',tag:'Peito · Costas · Pernas',exercises:['e01','e06','e20','e11','e29']},
    T2:{name:'Treino 2',tag:'Costas · Ombros · Glúteos',exercises:['e02','e07','e26','e14','e17']},
    T3:{name:'Treino 3',tag:'Pernas · Braços · Core',exercises:['e20','e21','e12','e17','e30']},
  },
  schedule: ['T1', null, 'T2', null, 'T3', null, null],

  exercises: [
    {id:'e01',name:'Press de Banca',muscle:'Peito',tr:10,video:'https://www.youtube.com/embed/rT7DgCr-3pg'},
    {id:'e02',name:'Press Inclinado Halteres',muscle:'Peito',tr:10,video:'https://www.youtube.com/embed/8iPEnn-ltC8'},
    {id:'e03',name:'Flexões',muscle:'Peito',tr:15,video:'https://www.youtube.com/embed/IODxDxX7oi4'},
    {id:'e04',name:'Voador (Pec Deck)',muscle:'Peito',tr:12,video:''},
    {id:'e05',name:'Crossover Cabo',muscle:'Peito',tr:12,video:''},
    {id:'e06',name:'Remada Curvada',muscle:'Costas',tr:10,video:'https://www.youtube.com/embed/G8l_8chR5BE'},
    {id:'e07',name:'Lat Pulldown',muscle:'Costas',tr:10,video:'https://www.youtube.com/embed/CAwf7n6Luuc'},
    {id:'e08',name:'Remada com Haltere',muscle:'Costas',tr:10,video:''},
    {id:'e09',name:'Pull-up / Barra Fixa',muscle:'Costas',tr:8,video:'https://www.youtube.com/embed/eGo4IYlbE5g'},
    {id:'e10',name:'Remada no Cabo',muscle:'Costas',tr:12,video:''},
    {id:'e11',name:'Press Militar',muscle:'Ombros',tr:10,video:'https://www.youtube.com/embed/2yjwXTZQDDI'},
    {id:'e12',name:'Elevações Laterais',muscle:'Ombros',tr:12,video:'https://www.youtube.com/embed/3VcKaXpzqRo'},
    {id:'e13',name:'Elevações Frontais',muscle:'Ombros',tr:12,video:''},
    {id:'e14',name:'Rosca Direta Barra',muscle:'Bíceps',tr:12,video:'https://www.youtube.com/embed/ykJmrZ5v0Oo'},
    {id:'e15',name:'Rosca Halteres',muscle:'Bíceps',tr:12,video:''},
    {id:'e16',name:'Rosca Concentrada',muscle:'Bíceps',tr:10,video:''},
    {id:'e17',name:'Tríceps Testa',muscle:'Tríceps',tr:12,video:'https://www.youtube.com/embed/d_KZxkY_0cM'},
    {id:'e18',name:'Tríceps no Cabo',muscle:'Tríceps',tr:12,video:''},
    {id:'e19',name:'Mergulho (Dips)',muscle:'Tríceps',tr:10,video:''},
    {id:'e20',name:'Agachamento Livre',muscle:'Pernas',tr:10,video:'https://www.youtube.com/embed/ultWZbUMPL8'},
    {id:'e21',name:'Leg Press',muscle:'Pernas',tr:12,video:'https://www.youtube.com/embed/IZxyjW7MPJQ'},
    {id:'e22',name:'Afundo (Lunges)',muscle:'Pernas',tr:10,video:''},
    {id:'e23',name:'Extensão de Pernas',muscle:'Pernas',tr:12,video:''},
    {id:'e24',name:'Stiff (Romeno)',muscle:'Pernas',tr:10,video:'https://www.youtube.com/embed/1uDiW5--rAE'},
    {id:'e25',name:'Curl de Pernas',muscle:'Pernas',tr:12,video:''},
    {id:'e26',name:'Hip Thrust',muscle:'Glúteos',tr:12,video:'https://www.youtube.com/embed/Zp26q4BY5HE'},
    {id:'e27',name:'Glute Bridge',muscle:'Glúteos',tr:15,video:''},
    {id:'e28',name:'Abdução no Cabo',muscle:'Glúteos',tr:15,video:''},
    {id:'e29',name:'Prancha',muscle:'Core',tr:60,video:''},
    {id:'e30',name:'Crunch',muscle:'Core',tr:20,video:''},
    {id:'e31',name:'Russian Twist',muscle:'Core',tr:20,video:''},
    {id:'e32',name:'Passadeira HIIT',muscle:'Cardio',tr:20,video:''},
  ],

  foods: [
    {id:'f01',name:'Peito de Frango',emoji:'🍗',cal:165,prot:31,carb:0,fat:3.6},
    {id:'f02',name:'Arroz Branco Cozido',emoji:'🍚',cal:130,prot:2.7,carb:28,fat:0.3},
    {id:'f03',name:'Bróculos',emoji:'🥦',cal:34,prot:2.8,carb:7,fat:0.4},
    {id:'f04',name:'Ovo Inteiro',emoji:'🥚',cal:155,prot:13,carb:1.1,fat:11},
    {id:'f05',name:'Aveia',emoji:'🌾',cal:389,prot:17,carb:66,fat:7},
    {id:'f06',name:'Banana',emoji:'🍌',cal:89,prot:1.1,carb:23,fat:0.3},
    {id:'f07',name:'Atum em Lata',emoji:'🐟',cal:116,prot:26,carb:0,fat:1},
    {id:'f08',name:'Batata-Doce',emoji:'🍠',cal:86,prot:1.6,carb:20,fat:0.1},
    {id:'f09',name:'Iogurte Grego 0%',emoji:'🥛',cal:59,prot:10,carb:3.6,fat:0.4},
    {id:'f10',name:'Azeite Extra Virgem',emoji:'🫒',cal:884,prot:0,carb:0,fat:100},
    {id:'f11',name:'Massa Integral',emoji:'🍝',cal:131,prot:5,carb:25,fat:1.1},
    {id:'f12',name:'Salmão',emoji:'🐠',cal:208,prot:20,carb:0,fat:13},
    {id:'f13',name:'Espinafres',emoji:'🌿',cal:23,prot:2.9,carb:3.6,fat:0.4},
    {id:'f14',name:'Queijo Cottage',emoji:'🧀',cal:98,prot:11,carb:3.4,fat:4.3},
    {id:'f15',name:'Maçã',emoji:'🍎',cal:52,prot:0.3,carb:14,fat:0.2},
    {id:'f16',name:'Nozes',emoji:'🥜',cal:654,prot:15,carb:14,fat:65},
    {id:'f17',name:'Leite Meio-Gordo',emoji:'🥛',cal:46,prot:3.3,carb:4.7,fat:1.5},
    {id:'f18',name:'Pão de Centeio',emoji:'🍞',cal:259,prot:8.5,carb:48,fat:3.3},
    {id:'f19',name:'Feijão Preto',emoji:'🫘',cal:132,prot:8.9,carb:24,fat:0.5},
    {id:'f20',name:'Whey Protein',emoji:'💪',cal:400,prot:80,carb:8,fat:5},
    {id:'f21',name:'Amêndoas',emoji:'🥜',cal:579,prot:21,carb:22,fat:50},
    {id:'f22',name:'Quinoa Cozida',emoji:'🌾',cal:120,prot:4.4,carb:22,fat:1.9},
    {id:'f23',name:'Tomate',emoji:'🍅',cal:18,prot:0.9,carb:3.9,fat:0.2},
    {id:'f24',name:'Curgete',emoji:'🥒',cal:17,prot:1.2,carb:3.1,fat:0.3},
  ],

  recipes: [
    {id:'r1',name:'Bowl Frango & Arroz',emoji:'🍛',cat:'Almoço',time:'25min',cal:520,prot:42,carb:55,fat:9,
      ing:[{fid:'f01',g:180},{fid:'f02',g:150},{fid:'f03',g:80},{fid:'f10',g:8}],
      steps:['Tempera o frango com sal, alho e limão. Deixa marinar 10min.','Grelha o frango 6-7min por lado.','Coze o arroz 12-14min com sal.','Bróculos a vapor 5min.','Monta o bowl e rega com azeite.'],mid:'m3'},
    {id:'r2',name:'Omelette de Espinafres',emoji:'🍳',cat:'Pequeno-Almoço',time:'10min',cal:320,prot:28,carb:5,fat:21,
      ing:[{fid:'f04',g:200},{fid:'f13',g:60},{fid:'f10',g:8}],
      steps:['Bate os ovos com sal e pimenta.','Aquece o azeite na frigideira.','Refoga os espinafres 2min.','Adiciona os ovos, cozinha 3min.','Dobra ao meio e serve.'],mid:'m1'},
    {id:'r3',name:'Overnight Oats',emoji:'🌾',cat:'Pequeno-Almoço',time:'5min+8h',cal:415,prot:23,carb:58,fat:8,
      ing:[{fid:'f05',g:80},{fid:'f17',g:200},{fid:'f09',g:100},{fid:'f06',g:80}],
      steps:['Coloca a aveia no frasco.','Adiciona o leite e mistura.','Junta o iogurte.','Guarda no frigorífico de um dia para o outro.','Adiciona a banana fatiada de manhã.'],mid:'m1'},
    {id:'r4',name:'Salmão & Batata-Doce',emoji:'🐠',cat:'Jantar',time:'30min',cal:490,prot:33,carb:38,fat:19,
      ing:[{fid:'f12',g:180},{fid:'f08',g:200},{fid:'f13',g:60},{fid:'f10',g:10}],
      steps:['Pré-aquece o forno a 200°C.','Batata-doce em cubos temperada com azeite — assa 20min.','Tempera o salmão com sal, limão e endro.','Coloca no forno os últimos 15min.','Salteia espinafres com azeite 3min.'],mid:'m5'},
    {id:'r5',name:'Shake Pós-Treino',emoji:'🥤',cat:'Lanche',time:'2min',cal:305,prot:36,carb:30,fat:3,
      ing:[{fid:'f20',g:30},{fid:'f17',g:250},{fid:'f06',g:80}],
      steps:['Coloca todos os ingredientes no copo.','Bate 30s até ficar homogéneo.','Bebe imediatamente após o treino.'],mid:'m2'},
    {id:'r6',name:'Salada Atum & Quinoa',emoji:'🥗',cat:'Almoço',time:'15min',cal:380,prot:35,carb:38,fat:9,
      ing:[{fid:'f07',g:140},{fid:'f22',g:150},{fid:'f23',g:80},{fid:'f13',g:40},{fid:'f10',g:8}],
      steps:['Coze a quinoa 12min.','Escorre o atum.','Mistura tudo numa taça.','Tempera com limão, sal e azeite.','Serve frio.'],mid:'m3'},
    {id:'r7',name:'Bolo de Banana',emoji:'🍌',cat:'Lanche',time:'40 min',cal:842,prot:56,carb:116,fat:20,photo:'static/imagens/bolo-de-banana.png',
      ing:[{fid:'f06',g:200},{fid:'f04',g:100},{fid:'f05',g:100},{fid:'f20',g:30}],
      steps:['Coloca as 2 bananas, 2 ovos e 100g de farinha de aveia no liquidificador e tritura tudo.','Adiciona 1 colher de chá de fermento em pó e volta a misturar.','Unta com azeite uma forma e coloca lá o preparado.','Leva ao forno a 180º por 30 a 40 minutos (vê com um palito se está cozido).','Para a cobertura coloca 30g whey numa taça e adiciona um pouco de água, mistura bem até ficar com uma consistência tipo mousse (cuidado para não colocares demasiada água).'],
      mid:'m4'},
  ],
};

const DEFAULT_MEALS = () => JSON.parse(JSON.stringify([
  {id:'m1',name:'Pequeno-Almoço',emoji:'🌅',time:'07:30',foods:[{fid:'f05',g:80},{fid:'f17',g:250},{fid:'f06',g:100}]},
  {id:'m2',name:'Lanche Manhã',emoji:'🍎',time:'10:30',foods:[{fid:'f09',g:150},{fid:'f15',g:150},{fid:'f20',g:30}]},
  {id:'m3',name:'Almoço',emoji:'🍽️',time:'13:00',foods:[{fid:'f01',g:200},{fid:'f02',g:150},{fid:'f03',g:100},{fid:'f10',g:10}]},
  {id:'m4',name:'Lanche Tarde',emoji:'💪',time:'16:30',foods:[{fid:'f18',g:60},{fid:'f07',g:80},{fid:'f13',g:50}]},
  {id:'m5',name:'Jantar',emoji:'🌙',time:'20:00',foods:[{fid:'f12',g:180},{fid:'f08',g:200},{fid:'f03',g:80},{fid:'f10',g:8}]},
]));

// ═══════════════════════════════════════════════════════════
// SUPABASE
// ═══════════════════════════════════════════════════════════
let sb = null;
let currentUserId = null;
let currentUserEmail = null;
let sbReady = false;

function getSupabaseConfig(){
  return {
    url: localStorage.getItem('fp_sb_url') || '',
    key: localStorage.getItem('fp_sb_anon_key') || '',
  };
}

function clearSupabaseConfig(){
  localStorage.removeItem('fp_sb_url');
  localStorage.removeItem('fp_sb_anon_key');
  sb = null;
  sbReady = false;
  currentUserId = null;
  currentUserEmail = null;
  document.getElementById('sbUrlInput').value = '';
  document.getElementById('sbKeyInput').value = '';
  showConfig();
}

function saveSupabaseConfig(){
  let url = document.getElementById('sbUrlInput').value.trim();
  const key = document.getElementById('sbKeyInput').value.trim();
  if(!url || !key){ toast('⚠️ Preenche URL e Anon Key'); return; }
  if(!url.startsWith('http://') && !url.startsWith('https://')){
    url = 'https://' + url;
  }
  try{
    url = new URL(url).origin;
  }catch(e){
    toast('⚠️ URL inválida');
    return;
  }
  localStorage.setItem('fp_sb_url', url);
  localStorage.setItem('fp_sb_anon_key', key);
  initSupabase();
}

function initSupabase(){
  const cfg = getSupabaseConfig();
  if(!cfg.url || !cfg.key){ showConfig(); return; }
  console.log('[FitPro] Conectando ao Supabase:', cfg.url);
  try{
    const { createClient } = supabase;
    sb = createClient(cfg.url, cfg.key, {
      auth: { persistSession: localStorage.getItem('fp_remember')==='true' }
    });
  }catch(e){
    console.error('[FitPro] Erro createClient:', e);
    toast('❌ Erro ao conectar ao Supabase: verifica URL e Key');
    showConfig();
    return;
  }
  sbReady = true;
  sb.auth.onAuthStateChange((event, session) => {
    if(event === 'SIGNED_IN' && session){
      currentUserId = session.user.id;
      currentUserEmail = session.user.email;
      showProfileScreen(session.user.email);
    }
    if(event === 'SIGNED_OUT'){
      currentUserId = null;
      currentUserEmail = null;
      showLogin();
    }
  });
  checkAuth();
}

async function checkAuth(){
  showEl('authLoading', 'on');
  try{
    console.log('[FitPro] Verificando sessão...');
    const { data: { session } } = await sb.auth.getSession();
    if(session){
      currentUserId = session.user.id;
      currentUserEmail = session.user.email;
      showProfileScreen(session.user.email);
    } else {
      showLogin();
    }
  }catch(e){
    console.warn('auth error', e);
    const errEl = document.getElementById('authError');
    errEl.textContent = '❌ Erro de conexão: verifica se o URL do Supabase está correto';
    errEl.style.display = 'block';
    showLogin();
  }
  hideEl('authLoading', 'on');
}

function showAuth(){ document.getElementById('authScreen').classList.add('open'); }
function showConfig(){
  const cfg = getSupabaseConfig();
  document.getElementById('sbUrlInput').value = cfg.url;
  document.getElementById('sbKeyInput').value = cfg.key;
  showAuth();
  hideEl('loginForm'); hideEl('signupForm'); hideEl('profileScreen');
  showEl('sbConfig');
}
function showLogin(){
  showAuth();
  hideEl('sbConfig'); hideEl('signupForm'); hideEl('profileScreen');
  showEl('loginForm');
}
function showSignup(){
  showAuth();
  hideEl('loginForm'); hideEl('profileScreen'); hideEl('sbConfig');
  showEl('signupForm');
}
function showProfileScreen(email){
  showAuth();
  hideEl('sbConfig'); hideEl('loginForm'); hideEl('signupForm');
  showEl('profileScreen');
  document.getElementById('authEmailDisplay').textContent = `📧 ${email}`;
  initProfileScreen();
}
function showEl(id, cls){ document.getElementById(id).style.display = 'block'; if(cls) document.getElementById(id).classList.add(cls); }
function hideEl(id, cls){ document.getElementById(id).style.display = 'none'; if(cls) document.getElementById(id).classList.remove(cls); }

async function doLogin(){
  const email = document.getElementById('loginEmail').value.trim();
  const pass = document.getElementById('loginPass').value;
  const err = document.getElementById('authError');
  if(!email || !pass){ err.textContent = '⚠️ Preenche email e palavra-passe'; err.style.display = 'block'; return; }
  const remember = document.getElementById('rememberCheck').checked;
  localStorage.setItem('fp_remember', remember ? 'true' : 'false');
  err.style.display = 'none';
  try{
    const { error } = await sb.auth.signInWithPassword({ email, password: pass });
    if(error){ err.textContent = error.message; err.style.display = 'block'; }
  }catch(e){
    err.textContent = '❌ ' + (e.message || 'Erro inesperado');
    err.style.display = 'block';
    console.error('login error', e);
  }
}

async function doSignup(){
  const email = document.getElementById('signupEmail').value.trim();
  const pass = document.getElementById('signupPass').value;
  const err = document.getElementById('signupError');
  if(pass.length < 6){ err.textContent = '⚠️ Palavra-passe deve ter 6+ caracteres'; err.style.display = 'block'; return; }
  err.style.display = 'none';
  try{
    const { error } = await sb.auth.signUp({
      email,
      password: pass,
      options: { emailRedirectTo: window.location.origin }
    });
    if(error){ err.textContent = error.message; err.style.display = 'block'; return; }
    toast('✅ Conta criada! Verifica o teu email para confirmar.');
    showLogin();
  }catch(e){
    err.textContent = '❌ ' + (e.message || 'Erro inesperado');
    err.style.display = 'block';
    console.error('signup error', e);
  }
}

async function doLogout(){
  await sb.auth.signOut();
  CU = null;
  currentUserEmail = null;
}

// ═══════════════════════════════════════════════════════════
// USERS
// ═══════════════════════════════════════════════════════════
const USERS = {
  miguel:{name:'Miguel',avatar:'💪',color:'var(--blue)'},
  tania: {name:'Tânia', avatar:'🌸',color:'var(--pink)'},
};
let CU = null;

function uKey(uid){ return 'fp_' + uid; }

function defaultState(){
  return {
    sets:{}, swaps:{}, notes:{},
    weights:[], history:[],
    goals:{cal:2400,prot:180,carb:250,fat:70,wt:75,water:8,height:null},
    water:0, exProgress:{},
    meals: DEFAULT_MEALS(),
    customFoods:[],
    checkins:[],
  };
}

async function getUserStats(uid){
  if(sbReady && currentUserId){
    try{
      const { data } = await sb.from('user_data').select('data').eq('user_id',currentUserId).eq('profile_key',uid).maybeSingle();
      if(data && data.data){
        const d = data.data;
        const wk = (d.history||[]).length;
        const wArr = d.weights||[];
        const wt = wArr.length ? wArr[wArr.length-1].w+'kg' : '—';
        const ph = (d.checkins||[]).length;
        return `${wk} treino${wk!==1?'s':''}  ·  ${wt}${ph?' · '+ph+' check-ins':''}`;
      }
    }catch(e){}
  }
  try{
    const raw = localStorage.getItem(uKey(uid));
    if(!raw) return 'Sem dados ainda';
    const d = JSON.parse(raw);
    const wk = (d.history||[]).length;
    const wArr = d.weights||[];
    const wt = wArr.length ? wArr[wArr.length-1].w+'kg' : '—';
    const ph = (d.checkins||[]).length;
    return `${wk} treino${wk!==1?'s':''}  ·  ${wt}${ph?' · '+ph+' check-ins':''}`;
  }catch(e){ return 'Sem dados'; }
}

function saveState(){
  if(!CU) return;
  try{
    localStorage.setItem(uKey(CU), JSON.stringify({
      sets:S.sets, swaps:S.swaps, notes:S.notes,
      weights:S.weights, history:S.history, goals:S.goals,
      water:S.water, exProgress:S.exProgress,
      meals:S.meals, customFoods:DB.foods.filter(f=>f.custom),
      checkins:S.checkins,
    }));
  }catch(e){ console.warn('local save failed',e); }
  if(sbReady && currentUserId){
    const payload = {
      user_id: currentUserId,
      profile_key: CU,
      data: {
        sets:S.sets, swaps:S.swaps, notes:S.notes,
        weights:S.weights, history:S.history, goals:S.goals,
        water:S.water, exProgress:S.exProgress,
        meals:S.meals, customFoods:DB.foods.filter(f=>f.custom),
        checkins:S.checkins,
      },
    };
    sb.from('user_data').upsert(payload, { onConflict: 'user_id, profile_key' })
      .then(({error}) => { if(error) console.warn('supabase sync failed', error); })
      .catch(e => console.warn('supabase sync failed', e));
  }
}

async function loadState(uid){
  const def = defaultState();
  if(sbReady && currentUserId){
    try{
      const { data, error } = await sb.from('user_data')
        .select('data')
        .eq('user_id', currentUserId)
        .eq('profile_key', uid)
        .maybeSingle();
      if(!error && data && data.data){
        const d = data.data;
        const result = {
          sets:        d.sets         || {},
          swaps:       d.swaps        || {},
          notes:       d.notes        || {},
          weights:     d.weights      || [],
          history:     d.history      || [],
          goals:       Object.assign({}, def.goals, d.goals||{}),
          water:       d.water        ?? 0,
          exProgress:  d.exProgress   || {},
          meals:       d.meals        || DEFAULT_MEALS(),
          customFoods: d.customFoods  || [],
          checkins:    d.checkins     || [],
        };
        try{ localStorage.setItem(uKey(uid), JSON.stringify(result)); }catch(e){}
        return result;
      }
    }catch(e){ console.warn('supabase load failed, falling back', e); }
  }
  try{
    const raw = localStorage.getItem(uKey(uid));
    if(!raw) return def;
    const d = JSON.parse(raw);
    return {
      sets:        d.sets         || {},
      swaps:       d.swaps        || {},
      notes:       d.notes        || {},
      weights:     d.weights      || [],
      history:     d.history      || [],
      goals:       Object.assign({}, def.goals, d.goals||{}),
      water:       d.water        ?? 0,
      exProgress:  d.exProgress   || {},
      meals:       d.meals        || DEFAULT_MEALS(),
      customFoods: d.customFoods  || [],
      checkins:    d.checkins     || [],
    };
  }catch(e){ return def; }
}

let S = defaultState();
S.activePage    = 'treino';
S.activeWorkout = 'T1';
S.activeMeal    = 'm1';
S.activeDay     = new Date().getDay();
S.rcFilter      = 'Todos';
S.charts        = {};
S.swapCtx       = null;
S.fswapCtx      = null;
S.egCtx         = null;
S.photoCtx      = null;
S.sessStart     = null;
S.sessInterval  = null;
S.restLeft      = 90;
S.restTarget    = 90;
S.restInterval  = null;
S.progExId      = 'e01';

// ═══════════════════════════════════════════════════════════
// UTILS
// ═══════════════════════════════════════════════════════════
const foodById = id => DB.foods.find(f=>f.id===id);
const exById   = id => DB.exercises.find(e=>e.id===id);
const byMuscle = m  => DB.exercises.filter(e=>e.muscle===m);
const todayISO = () => new Date().toISOString().slice(0,10);
const fmtDate  = s  => { const d=new Date(s+'T12:00'); return d.toLocaleDateString('pt-PT',{day:'numeric',month:'short'}); };
const dowName  = d  => ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'][d];
const dow2sch  = d  => d===0?6:d-1;
const pct      = (v,m) => Math.min(Math.round(v/m*100),100);

function macros(fid, g){
  const f = foodById(fid); if(!f) return {cal:0,prot:0,carb:0,fat:0};
  const r = g/100;
  return {cal:Math.round(f.cal*r), prot:+(f.prot*r).toFixed(1), carb:+(f.carb*r).toFixed(1), fat:+(f.fat*r).toFixed(1)};
}
function mealTotals(meal){
  let c=0,p=0,ch=0,f=0;
  meal.foods.forEach(fi=>{ const m=macros(fi.fid,fi.g); c+=m.cal;p+=m.prot;ch+=m.carb;f+=m.fat; });
  return {cal:Math.round(c),prot:+p.toFixed(1),carb:+ch.toFixed(1),fat:+f.toFixed(1)};
}
function dayTotals(){
  let c=0,p=0,ch=0,f=0;
  S.meals.forEach(m=>{ const t=mealTotals(m); c+=t.cal;p+=t.prot;ch+=t.carb;f+=t.fat; });
  return {cal:Math.round(c),prot:+p.toFixed(1),carb:+ch.toFixed(1),fat:+f.toFixed(1)};
}
function setsOf(eid){
  if(!S.sets[eid]) S.sets[eid]=[{w:'',r:'',done:false},{w:'',r:'',done:false},{w:'',r:'',done:false},{w:'',r:'',done:false}];
  return S.sets[eid];
}
function wkExIds(){
  const plan = DB.workouts[S.activeWorkout];
  const sw   = S.swaps[S.activeWorkout]||{};
  return plan.exercises.map((id,i)=>sw[i]||id);
}

function toast(msg){ const t=document.getElementById('toast'); t.textContent=msg; t.classList.add('show'); setTimeout(()=>t.classList.remove('show'),2200); }
function openModal(id){ document.getElementById(id).classList.add('open'); }
function closeModal(id){
  document.getElementById(id).classList.remove('open');
  if(id==='videoModal') document.getElementById('vidContent').innerHTML='';
}
document.querySelectorAll('.overlay').forEach(o=>o.addEventListener('click',e=>{ if(e.target===o) closeModal(o.id); }));

// ═══════════════════════════════════════════════════════════
// PROFILE SWITCHER
// ═══════════════════════════════════════════════════════════
async function initProfileScreen(){
  for(const uid of Object.keys(USERS)){
    const el = document.getElementById('ps-stat-'+uid);
    if(el) el.textContent = await getUserStats(uid);
  }
}

async function selectUser(uid){
  CU = uid;
  const usr = USERS[uid];
  const data = await loadState(uid);
  S.sets=data.sets; S.swaps=data.swaps; S.notes=data.notes;
  S.weights=data.weights; S.history=data.history; S.goals=data.goals;
  S.water=data.water; S.exProgress=data.exProgress; S.meals=data.meals;
  S.checkins=data.checkins;
  data.customFoods.forEach(cf=>{ if(!DB.foods.find(f=>f.id===cf.id)) DB.foods.push(cf); });
  document.getElementById('ucAvatar').textContent   = usr.avatar;
  document.getElementById('ucName').textContent     = usr.name;
  document.getElementById('ucAvatar').style.background  = uid==='miguel'?'rgba(77,140,255,.2)':'rgba(244,114,182,.2)';
  document.getElementById('ucAvatar').style.borderColor = uid==='miguel'?'rgba(77,140,255,.4)':'rgba(244,114,182,.4)';
  S.activeDay     = new Date().getDay();
  S.activeWorkout = DB.schedule[dow2sch(S.activeDay)] || 'T1';
  S.activeMeal    = 'm1';
  S.activePage    = 'treino';
  Object.values(S.charts).forEach(c=>{ try{c.destroy();}catch(e){} });
  S.charts = {};
  fillGoalInputs();
  document.getElementById('wtDate').value = todayISO();
  renderWtList();
  document.getElementById('authScreen').classList.remove('open');
  goPage('treino');
  toast(`👋 Olá, ${usr.name}!`);
}

function switchUser(){
  saveState();
  document.getElementById('authScreen').classList.add('open');
  showProfileScreen(currentUserEmail || '—');
}

// ═══════════════════════════════════════════════════════════
// NAVIGATION
// ═══════════════════════════════════════════════════════════
function goPage(name){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));
  document.getElementById('page-'+name).classList.add('active');
  document.getElementById('nav-'+name).classList.add('active');
  S.activePage = name;
  if(name==='treino')       initTreino();
  if(name==='progresso')    initProgress();
  if(name==='alimentacao')  renderNutrition();
  if(name==='receitas')     renderRecipes();
}

// ═══════════════════════════════════════════════════════════
// HEADER
// ═══════════════════════════════════════════════════════════
function initHeader(){
  const d=new Date();
  const days=['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'];
  const months=['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'];
  document.getElementById('hdrDate').textContent=`${days[d.getDay()]}, ${d.getDate()} ${months[d.getMonth()]}`;
}

// ═══════════════════════════════════════════════════════════
// TREINO
// ═══════════════════════════════════════════════════════════
function initTreino(){
  renderWeekStrip();
  renderWkTabs();
  renderExercises();
  updateHero();
  renderStreak();
}

function updateHero(){
  const dow = new Date().getDay();
  const wk  = DB.schedule[dow2sch(dow)];
  if(wk){
    document.getElementById('heroWk').textContent       = DB.workouts[wk].name;
    document.getElementById('heroTag').textContent      = DB.workouts[wk].tag;
    document.getElementById('heroStartBtn').style.display = '';
    document.getElementById('heroEye').textContent      = 'Semana 1 · Treino hoje';
  } else {
    document.getElementById('heroWk').textContent       = 'Descanso';
    document.getElementById('heroTag').textContent      = 'Recuperação';
    document.getElementById('heroStartBtn').style.display = 'none';
    document.getElementById('heroEye').textContent      = 'Semana 1 · Dia de descanso';
  }
}

function renderWeekStrip(){
  const strip = document.getElementById('weekStrip');
  const today = new Date();
  strip.innerHTML = '';
  for(let i=0;i<7;i++){
    const d = new Date(today);
    const startMon = new Date(today);
    startMon.setDate(today.getDate()-dow2sch(today.getDay()));
    d.setDate(startMon.getDate()+i);
    const dow    = d.getDay();
    const hasW   = !!DB.schedule[i];
    const isToday= d.toDateString()===today.toDateString();
    const isSel  = dow===S.activeDay;
    const el=document.createElement('div');
    el.className='dd'+(isToday?' today':'')+(isSel?' sel':'')+(hasW?' has-w':' rest-d');
    el.innerHTML=`<span class="dl">${dowName(dow)}</span><span class="dn">${d.getDate()}</span><span class="dd-dot"></span>`;
    el.onclick=()=>{ S.activeDay=dow; const w=DB.schedule[dow2sch(dow)]; if(w) S.activeWorkout=w; renderWeekStrip(); renderWkTabs(); renderExercises(); };
    strip.appendChild(el);
  }
}

function renderWkTabs(){
  const tabs = document.getElementById('wTabs');
  tabs.innerHTML='';
  Object.entries(DB.workouts).forEach(([key,plan])=>{
    const b=document.createElement('button');
    b.className='w-tab'+(S.activeWorkout===key?' active':'');
    b.textContent=plan.name;
    b.onclick=()=>{ S.activeWorkout=key; renderWkTabs(); renderExercises(); };
    tabs.appendChild(b);
  });
}

function renderExercises(){
  const cont = document.getElementById('exContainer');
  cont.innerHTML='';
  const exIds = wkExIds();
  exIds.forEach((eid,slot)=>{
    const e    = exById(eid); if(!e) return;
    const sets = setsOf(eid);
    const doneCount = sets.filter(s=>s.done).length;
    const allDone   = doneCount===4;
    const overAch   = sets.some(s=>s.done&&s.r!==''&&parseInt(s.r||0)>e.tr);

    const card = document.createElement('div');
    card.className = 'ex-card' + (allDone?' done-all':'');
    card.id = 'ec-'+eid;

    const hdr = document.createElement('div');
    hdr.className = 'ex-hdr';
    hdr.innerHTML = `
      <div style="flex:1;">
        <div class="ex-name">${e.name} ${allDone?'<span class="tag tg-lime" style="font-size:.6rem;">✓ Completo</span>':''}</div>
        <div class="ex-meta">
          <span class="tag tg-blue" style="font-size:.6rem;">${e.muscle}</span>
          <span style="font-size:.68rem;color:var(--text3);">4 séries · ${e.tr}${e.muscle==='Core'?'s':' reps'} alvo · ${doneCount}/4</span>
        </div>
      </div>
      <button class="icon-btn" onclick="openSwap('${S.activeWorkout}',${slot},'${e.muscle}')">
        <svg viewBox="0 0 24 24"><path d="M8 3 4 7l4 4M4 7h16M16 21l4-4-4-4M20 17H4"/></svg>
      </button>`;
    card.appendChild(hdr);

    if(e.video){
      const vd = document.createElement('div');
      vd.className = 'ex-video';
      vd.innerHTML = `<div class="vid-row"><div class="play-btn"><svg viewBox="0 0 24 24"><path d="M5 3l14 9-14 9V3z"/></svg></div><span class="vid-lbl">Ver demonstração</span></div>`;
      vd.onclick = ()=>openVideo(eid);
      card.appendChild(vd);
    }

    if(overAch){
      const lastW = parseFloat(sets.find(s=>s.done&&s.w!=='')?.w||0);
      const sug = document.createElement('div');
      sug.className='sug';
      sug.innerHTML=`<svg viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg><span>Superas o objetivo! ${lastW>0?`Tenta <strong>${Math.round((lastW+2.5)*10)/10}kg</strong>.`:''}</span>`;
      card.appendChild(sug);
    }

    const tbl = document.createElement('div');
    tbl.className='sets-tbl';
    tbl.innerHTML=`<div class="sets-head"><div class="sl" style="text-align:left;">#</div><div class="sl">Peso kg</div><div class="sl">Reps</div><div class="sl">✓</div></div>`;
    sets.forEach((set,si)=>{
      const row=document.createElement('div'); row.className='set-row';
      const num=document.createElement('div'); num.className='sn'+(set.done?' ok':''); num.id=`sn-${eid}-${si}`; num.textContent=si+1;
      const wi=document.createElement('input'); wi.type='number'; wi.className='si'; wi.placeholder='—'; wi.value=set.w; wi.step=0.5; wi.onchange=ev=>{set.w=ev.target.value; saveState();};
      const ri=document.createElement('input'); ri.type='number'; ri.className='si'; ri.placeholder='—'; ri.value=set.r; ri.onchange=ev=>{set.r=ev.target.value; saveState(); refreshSuggestion(eid);};
      const chk=document.createElement('div'); chk.className='sc'+(set.done?' chkd':''); chk.id=`sc-${eid}-${si}`;
      chk.innerHTML=`<svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>`;
      chk.onclick=()=>{
        set.done=!set.done;
        chk.classList.toggle('chkd');
        document.getElementById(`sn-${eid}-${si}`).classList.toggle('ok');
        document.getElementById('ec-'+eid).classList.toggle('done-all', setsOf(eid).filter(s=>s.done).length===4);
        saveState();
        if(set.done){ startRest(); refreshSuggestion(eid); }
      };
      row.append(num,wi,ri,chk);
      tbl.appendChild(row);
    });
    card.appendChild(tbl);

    const noteVal = S.notes[eid]||'';
    const ntBtn=document.createElement('button'); ntBtn.className='notes-btn';
    ntBtn.innerHTML=`<svg viewBox="0 0 24 24" width="13" height="13" stroke="currentColor" fill="none" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>${noteVal?'📝 Notas':'Adicionar nota'}`;
    ntBtn.onclick=()=>document.getElementById('nb-'+eid).classList.toggle('open');
    card.appendChild(ntBtn);
    const nb=document.createElement('div'); nb.className='notes-area'+(noteVal?' open':''); nb.id='nb-'+eid;
    const ta=document.createElement('textarea'); ta.rows=2; ta.value=noteVal; ta.placeholder='Técnica, observações…'; ta.oninput=ev=>{S.notes[eid]=ev.target.value; saveState();};
    nb.appendChild(ta); card.appendChild(nb);
    cont.appendChild(card);
  });
}

function refreshSuggestion(eid){
  const e    = exById(eid);
  const sets = setsOf(eid);
  const over = sets.some(s=>s.done&&s.r!==''&&parseInt(s.r||0)>e.tr);
  const card = document.getElementById('ec-'+eid);
  const existing = card.querySelector('.sug');
  if(over && !existing){
    const lastW = parseFloat(sets.find(s=>s.done&&s.w!=='')?.w||0);
    const sug=document.createElement('div'); sug.className='sug';
    sug.innerHTML=`<svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" fill="none" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg><span>Superas o objetivo! ${lastW>0?`Tenta <strong>${Math.round((lastW+2.5)*10)/10}kg</strong>.`:''}</span>`;
    const vd = card.querySelector('.ex-video');
    const hdr= card.querySelector('.ex-hdr');
    card.insertBefore(sug, (vd||hdr).nextSibling);
  } else if(!over && existing){
    existing.remove();
  }
}

function saveWorkout(){
  const exIds = wkExIds();
  let sets=0,vol=0;
  exIds.forEach(eid=>{ const ss=setsOf(eid).filter(s=>s.done); sets+=ss.length; vol+=ss.reduce((a,s)=>a+(parseFloat(s.w||0)*parseInt(s.r||0)),0); });
  S.history.push({date:todayISO(),wk:S.activeWorkout,sets,vol:Math.round(vol)});
  saveState(); renderStreak();
  toast(`💾 ${DB.workouts[S.activeWorkout].name} guardado!`);
}

function openSwap(wk,slot,muscle){
  S.swapCtx={wk,slot,muscle};
  document.getElementById('swapSub').textContent=`Grupo: ${muscle}`;
  const body=document.getElementById('swapBody');
  const curId=wkExIds()[slot];
  body.innerHTML='';
  byMuscle(muscle).forEach(e2=>{
    const isCur=e2.id===curId;
    const row=document.createElement('div'); row.className='swap-item';
    row.innerHTML=`<div><div style="font-size:.88rem;font-weight:500;">${e2.name}</div><div style="font-size:.69rem;color:var(--text2);">Alvo: ${e2.tr} reps · ${e2.muscle}</div></div>${isCur?'<span class="tag tg-lime">Atual</span>':`<button class="btn btn-ghost btn-sm" onclick="doSwap('${e2.id}')">Selecionar</button>`}`;
    body.appendChild(row);
  });
  openModal('swapModal');
}
function doSwap(newId){
  const {wk,slot}=S.swapCtx;
  if(!S.swaps[wk]) S.swaps[wk]={};
  S.swaps[wk][slot]=newId;
  closeModal('swapModal'); saveState(); renderExercises(); toast('✅ Exercício trocado');
}

function openVideo(eid){
  const e=exById(eid);
  document.getElementById('vidTitle').textContent=e.name;
  document.getElementById('vidContent').innerHTML=e.video
    ?`<iframe src="${e.video}?autoplay=1&rel=0" width="100%" height="230" frameborder="0" allowfullscreen allow="autoplay;encrypted-media"></iframe>`
    :`<div style="padding:40px;text-align:center;color:var(--text3);">Sem vídeo disponível.</div>`;
  openModal('videoModal');
}

// ═══════════════════════════════════════════════════════════
// SESSION
// ═══════════════════════════════════════════════════════════
function startSession(){
  if(S.sessStart){ openModal('sessModal'); return; }
  const dow=new Date().getDay(); const wk=DB.schedule[dow2sch(dow)];
  if(wk){ S.activeWorkout=wk; renderWkTabs(); renderExercises(); }
  S.sessStart = Date.now();
  document.getElementById('sessBar').classList.add('on');
  document.getElementById('sbLabel').textContent = ` · ${DB.workouts[S.activeWorkout].name}`;
  document.getElementById('sessInfo').textContent = DB.workouts[S.activeWorkout].name;
  S.sessInterval = setInterval(tickSession,1000);
  toast(`🏋️ ${DB.workouts[S.activeWorkout].name} iniciado!`);
}
function tickSession(){
  if(!S.sessStart) return;
  const el = Math.floor((Date.now()-S.sessStart)/1000);
  const mm=String(Math.floor(el/60)).padStart(2,'0'), ss=String(el%60).padStart(2,'0');
  const t=`${mm}:${ss}`;
  document.getElementById('sbTime').textContent   = t;
  document.getElementById('sessTimer').textContent= t;
  const exIds=wkExIds(); let doneSets=0,doneEx=0,vol=0;
  exIds.forEach(eid=>{ const ss2=setsOf(eid).filter(s=>s.done); doneSets+=ss2.length; if(ss2.length===4)doneEx++; vol+=ss2.reduce((a,s)=>a+(parseFloat(s.w||0)*parseInt(s.r||0)),0); });
  document.getElementById('sessSets').textContent = doneSets;
  document.getElementById('sessEx').textContent   = doneEx;
  document.getElementById('sessVol').textContent  = Math.round(vol);
}
function finishSession(){
  if(!S.sessStart){ closeModal('sessModal'); return; }
  clearInterval(S.sessInterval); S.sessInterval=null;
  const el=Math.floor((Date.now()-S.sessStart)/1000);
  const mm=String(Math.floor(el/60)).padStart(2,'0'), ss=String(el%60).padStart(2,'0');
  S.sessStart=null;
  document.getElementById('sessBar').classList.remove('on');
  wkExIds().forEach(eid=>{ const maxW=Math.max(0,...setsOf(eid).filter(s=>s.done&&s.w!=='').map(s=>parseFloat(s.w))); if(maxW>0){ if(!S.exProgress[eid])S.exProgress[eid]=[]; S.exProgress[eid].push({date:todayISO(),w:maxW}); } });
  const exIds=wkExIds(); let doneSets=0,vol=0;
  exIds.forEach(eid=>{ const ss2=setsOf(eid).filter(s=>s.done); doneSets+=ss2.length; vol+=ss2.reduce((a,s)=>a+(parseFloat(s.w||0)*parseInt(s.r||0)),0); });
  S.history.push({date:todayISO(),wk:S.activeWorkout,sets:doneSets,vol:Math.round(vol),dur:`${mm}:${ss}`});
  saveState(); closeModal('sessModal'); renderStreak();
  toast(`✅ Sessão: ${mm}m${ss}s · ${doneSets} séries`);
  if(S.activePage==='progresso') initProgress();
}

// ═══════════════════════════════════════════════════════════
// REST TIMER
// ═══════════════════════════════════════════════════════════
function setRest(s){ S.restTarget=s; S.restLeft=s; document.getElementById('restSecs').textContent=s; }
function startRest(){
  stopRest(); S.restLeft=S.restTarget; updateRestUI();
  closeModal('restModal');
  document.getElementById('restBubble').classList.add('on');
  S.restInterval=setInterval(()=>{ S.restLeft--; updateRestUI(); if(S.restLeft<=0){ stopRest(); toast('✅ Descanso terminado!'); } },1000);
}
function stopRest(){ if(S.restInterval){clearInterval(S.restInterval);S.restInterval=null;} document.getElementById('restBubble').classList.remove('on'); }
function updateRestUI(){ document.getElementById('restSecs').textContent=S.restLeft; document.getElementById('rbSecs').textContent=S.restLeft; }

// ═══════════════════════════════════════════════════════════
// STREAK
// ═══════════════════════════════════════════════════════════
function renderStreak(){
  const card = document.getElementById('streakCard');
  if(!card) return;
  const today = new Date();
  const trainedDates = new Set(S.history.map(h=>h.date));
  let streak=0;
  for(let i=0;i<60;i++){
    const d=new Date(today); d.setDate(today.getDate()-i);
    const iso=d.toISOString().slice(0,10);
    const isTrainDay=!!DB.schedule[dow2sch(d.getDay())];
    if(isTrainDay){ if(trainedDates.has(iso)) streak++; else if(i>0) break; }
  }
  const days=[];
  for(let i=6;i>=0;i--){ const d=new Date(today); d.setDate(today.getDate()-i); days.push({iso:d.toISOString().slice(0,10),dow:d.getDay(),isToday:i===0}); }
  const strip=days.map(d=>{
    const isT=!!DB.schedule[dow2sch(d.dow)];
    const done=trainedDates.has(d.iso);
    let cls='sk-day'; if(done)cls+=' done'; else if(d.isToday&&isT)cls+=' today'; else cls+=' rest';
    return `<div class="${cls}">${dowName(d.dow)[0]}</div>`;
  }).join('');
  card.innerHTML=`
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:9px;">
      <div style="display:flex;align-items:center;gap:7px;">
        <span style="font-size:1.35rem;">🔥</span>
        <div><div style="font-family:'Syne',sans-serif;font-weight:700;font-size:.92rem;">${streak} semana${streak!==1?'s':''} seguida${streak!==1?'s':''}</div>
        <div style="font-size:.68rem;color:var(--text2);">${S.history.length} treinos totais</div></div>
      </div>
      <span class="tag ${streak>0?'tg-lime':'tg-teal'}">${streak>0?'Em série! 🔥':'Começa hoje'}</span>
    </div>
    <div class="streak-row">${strip}</div>`;
}

// ═══════════════════════════════════════════════════════════
// NUTRITION
// ═══════════════════════════════════════════════════════════
function renderNutrition(){ renderMealTabs(); renderMealContent(); updateCalRing(); renderWater(); }

function renderMealTabs(){
  const tabs=document.getElementById('mealTabs'); tabs.innerHTML='';
  S.meals.forEach(m=>{
    const b=document.createElement('button'); b.className='mtab'+(S.activeMeal===m.id?' active':'');
    b.textContent=`${m.emoji} ${m.name}`;
    b.onclick=()=>{ S.activeMeal=m.id; renderMealTabs(); renderMealContent(); };
    tabs.appendChild(b);
  });
}

function renderMealContent(){
  const cont=document.getElementById('mealContent');
  const meal=S.meals.find(m=>m.id===S.activeMeal);
  if(!meal){cont.innerHTML='';return;}
  const tot=mealTotals(meal);
  const totG=tot.prot+tot.carb+tot.fat||1;
  const pR=Math.round(tot.prot/totG*100), cR=Math.round(tot.carb/totG*100), fR=100-pR-cR;
  cont.innerHTML='';
  const card=document.createElement('div'); card.className='card';
  const fHTML=meal.foods.map((fi,i)=>{
    const f=foodById(fi.fid); if(!f) return '';
    const m=macros(fi.fid,fi.g);
    return `<div class="food-item">
      <div style="flex:1;">
        <div class="food-name">${f.emoji} ${f.name}</div>
        <div class="food-meta"><button class="food-g-btn" onclick="openEditGrams('${meal.id}',${i})">${fi.g}g</button> · P:${m.prot}g H:${m.carb}g G:${m.fat}g</div>
      </div>
      <div class="food-kcal">${m.cal}</div>
      <button class="swap-ibtn" onclick="openFoodSwap('${meal.id}',${i})"><svg viewBox="0 0 24 24"><path d="M8 3 4 7l4 4M4 7h16M16 21l4-4-4-4M20 17H4"/></svg></button>
    </div>`;
  }).join('');
  card.innerHTML=`
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:11px;">
      <div><div style="font-family:'Syne',sans-serif;font-weight:700;">${meal.emoji} ${meal.name}</div><div style="font-size:.69rem;color:var(--text2);">⏰ ${meal.time}</div></div>
      <span class="tag tg-lime">${tot.cal} kcal</span>
    </div>
    ${fHTML}
    <div class="meal-macro-bar"><div style="width:${pR}%;background:var(--blue)"></div><div style="width:${cR}%;background:var(--orange)"></div><div style="width:${fR}%;background:var(--purple)"></div></div>
    <div style="display:flex;gap:8px;justify-content:space-around;font-size:.75rem;text-align:center;">
      <div><div style="color:var(--blue);font-weight:600;">${tot.prot}g</div><div style="color:var(--text3);">Proteínas</div></div>
      <div><div style="color:var(--orange);font-weight:600;">${tot.carb}g</div><div style="color:var(--text3);">Hidratos</div></div>
      <div><div style="color:var(--purple);font-weight:600;">${tot.fat}g</div><div style="color:var(--text3);">Gorduras</div></div>
    </div>`;
  cont.appendChild(card);
}

function updateCalRing(){
  const tot=dayTotals(), g=S.goals;
  const p=pct(tot.cal,g.cal), circ=263.9;
  document.getElementById('calRing').style.strokeDashoffset=circ-(p/100*circ);
  document.getElementById('calTotal').textContent=tot.cal;
  document.getElementById('protTotal').textContent=tot.prot+'g';
  document.getElementById('carbTotal').textContent=tot.carb+'g';
  document.getElementById('fatTotal').textContent=tot.fat+'g';
  document.getElementById('protBar').style.width=pct(tot.prot,g.prot)+'%';
  document.getElementById('carbBar').style.width=pct(tot.carb,g.carb)+'%';
  document.getElementById('fatBar').style.width=pct(tot.fat,g.fat)+'%';
  document.getElementById('protPct').textContent=pct(tot.prot,g.prot)+'%';
  document.getElementById('carbPct').textContent=pct(tot.carb,g.carb)+'%';
  document.getElementById('fatPct').textContent=pct(tot.fat,g.fat)+'%';
  document.getElementById('calBar').style.width=p+'%';
  document.getElementById('calGoalTag').textContent=`Meta: ${g.cal} kcal`;
  document.getElementById('calConsumed').textContent=`${tot.cal} kcal consumidas`;
  document.getElementById('calRemain').textContent=`${Math.max(0,g.cal-tot.cal)} restam`;
}

function renderWater(){
  const goal=S.goals.water||8, row=document.getElementById('waterRow');
  row.innerHTML='';
  for(let i=0;i<goal;i++){
    const c=document.createElement('div'); c.className='wc'+(i<S.water?' full':''); c.textContent='💧';
    c.onclick=()=>{ S.water=(i<S.water)?i:i+1; renderWater(); document.getElementById('waterLbl').textContent=`${S.water} / ${goal} copos`; saveState(); if(S.water>=goal) toast('💧 Meta de hidratação atingida!'); };
    row.appendChild(c);
  }
  document.getElementById('waterLbl').textContent=`${S.water} / ${goal} copos`;
}

function openFoodSwap(mealId,idx){
  const meal=S.meals.find(m=>m.id===mealId); const fi=meal.foods[idx];
  const m=macros(fi.fid,fi.g);
  S.fswapCtx={mealId,idx,targetCal:m.cal};
  document.getElementById('fswapSub').textContent=`Manter ${m.cal} kcal · a trocar: ${foodById(fi.fid).name}`;
  document.getElementById('foodSearch').value=''; renderFoodSwapList(); openModal('foodSwapModal');
}
function renderFoodSwapList(){
  const q=document.getElementById('foodSearch').value.toLowerCase();
  const body=document.getElementById('foodSwapList'); body.innerHTML='';
  const {mealId,idx,targetCal}=S.fswapCtx;
  const meal=S.meals.find(m=>m.id===mealId); const curFid=meal.foods[idx].fid;
  DB.foods.filter(f=>f.name.toLowerCase().includes(q)).forEach(f=>{
    const ng=Math.round(targetCal/f.cal*100); const isCur=f.id===curFid;
    const row=document.createElement('div'); row.className='swap-item';
    row.innerHTML=`<div><div style="font-size:.87rem;font-weight:500;">${f.emoji} ${f.name}</div><div style="font-size:.69rem;color:var(--text2);">${ng}g · P:${+(f.prot*ng/100).toFixed(1)}g H:${+(f.carb*ng/100).toFixed(1)}g G:${+(f.fat*ng/100).toFixed(1)}g</div></div>${isCur?'<span class="tag tg-blue">Atual</span>':`<button class="btn btn-ghost btn-sm" onclick="doFoodSwap('${f.id}')">Trocar</button>`}`;
    body.appendChild(row);
  });
}
function doFoodSwap(newFid){
  const {mealId,idx,targetCal}=S.fswapCtx; const meal=S.meals.find(m=>m.id===mealId);
  meal.foods[idx]={fid:newFid,g:Math.round(targetCal/foodById(newFid).cal*100)};
  closeModal('foodSwapModal'); saveState(); renderNutrition(); toast('✅ Alimento substituído!');
}

function openEditGrams(mealId,idx){
  const meal=S.meals.find(m=>m.id===mealId); const fi=meal.foods[idx]; const f=foodById(fi.fid);
  S.egCtx={mealId,idx,fid:fi.fid};
  document.getElementById('egTitle').textContent=`✏️ ${f.emoji} ${f.name}`;
  document.getElementById('egSub').textContent=`${f.cal} kcal / 100g`;
  document.getElementById('egInput').value=fi.g;
  previewGrams(); openModal('editGramsModal');
}
function previewGrams(){
  if(!S.egCtx) return;
  const m=macros(S.egCtx.fid, parseFloat(document.getElementById('egInput').value)||0);
  document.getElementById('egPreview').innerHTML=`<b>${m.cal} kcal</b> · P:${m.prot}g · H:${m.carb}g · G:${m.fat}g`;
}
function saveGrams(){
  const g=parseFloat(document.getElementById('egInput').value);
  if(!g||g<=0){toast('⚠️ Gramagem inválida');return;}
  S.meals.find(m=>m.id===S.egCtx.mealId).foods[S.egCtx.idx].g=Math.round(g);
  closeModal('editGramsModal'); saveState(); renderNutrition(); toast('✅ Gramagem atualizada!');
}

function resetMeal(){
  const def=DEFAULT_MEALS().find(m=>m.id===S.activeMeal);
  if(!def) return;
  S.meals.find(m=>m.id===S.activeMeal).foods=JSON.parse(JSON.stringify(def.foods));
  saveState(); renderNutrition(); toast('↩ Refeição reposta!');
}

function saveCustomFood(){
  const name=document.getElementById('afName').value.trim();
  const emoji=document.getElementById('afEmoji').value.trim()||'🍽️';
  const cal=parseFloat(document.getElementById('afCal').value);
  const prot=parseFloat(document.getElementById('afProt').value)||0;
  const carb=parseFloat(document.getElementById('afCarb').value)||0;
  const fat=parseFloat(document.getElementById('afFat').value)||0;
  if(!name||!cal){toast('⚠️ Preenche nome e calorias');return;}
  DB.foods.push({id:'cu'+Date.now(),name,emoji,cal,prot,carb,fat,custom:true});
  ['afName','afEmoji','afCal','afProt','afCarb','afFat'].forEach(i=>document.getElementById(i).value='');
  closeModal('addFoodModal'); saveState(); toast(`✅ "${name}" adicionado!`);
}

// ═══════════════════════════════════════════════════════════
// GOALS
// ═══════════════════════════════════════════════════════════
function fillGoalInputs(){
  const g=S.goals;
  document.getElementById('gCal').value   = g.cal;
  document.getElementById('gProt').value  = g.prot;
  document.getElementById('gCarb').value  = g.carb;
  document.getElementById('gFat').value   = g.fat;
  document.getElementById('gWt').value    = g.wt;
  document.getElementById('gWater').value = g.water||8;
  if(g.height) document.getElementById('gHeight').value = g.height;
}
function saveGoals(){
  S.goals.cal   = parseInt(document.getElementById('gCal').value)   || S.goals.cal;
  S.goals.prot  = parseInt(document.getElementById('gProt').value)  || S.goals.prot;
  S.goals.carb  = parseInt(document.getElementById('gCarb').value)  || S.goals.carb;
  S.goals.fat   = parseInt(document.getElementById('gFat').value)   || S.goals.fat;
  S.goals.wt    = parseFloat(document.getElementById('gWt').value)  || S.goals.wt;
  S.goals.water = parseInt(document.getElementById('gWater').value) || 8;
  S.goals.height= parseInt(document.getElementById('gHeight').value)||S.goals.height;
  closeModal('goalModal'); saveState(); updateCalRing(); renderWater(); toast('🎯 Metas guardadas!');
}

// ═══════════════════════════════════════════════════════════
// WEIGHT
// ═══════════════════════════════════════════════════════════
function saveWeight(){
  const w=parseFloat(document.getElementById('wtIn').value);
  const d=document.getElementById('wtDate').value;
  const fat=parseFloat(document.getElementById('fatIn').value)||undefined;
  const muscle=parseFloat(document.getElementById('muscleIn').value)||undefined;
  if(!w||!d){toast('⚠️ Preenche peso e data');return;}
  const idx=S.weights.findIndex(x=>x.date===d);
  const entry={date:d,w,fat,muscle};
  if(idx>=0) S.weights[idx]=entry; else { S.weights.push(entry); S.weights.sort((a,b)=>a.date>b.date?1:-1); }
  ['wtIn','fatIn','muscleIn'].forEach(i=>document.getElementById(i).value='');
  renderWtList(); saveState(); toast('✅ Peso registado!');
  if(S.activePage==='progresso') initProgress();
}
function renderWtList(){
  const list=document.getElementById('wtList'); list.innerHTML='';
  [...S.weights].reverse().slice(0,8).forEach(wt=>{
    const el=document.createElement('div'); el.className='wt-item';
    el.innerHTML=`<div><div style="font-size:.87rem;font-weight:500;">${wt.w} kg</div><div style="font-size:.69rem;color:var(--text2);">${fmtDate(wt.date)}${wt.fat?` · ${wt.fat}% gord`:''}${wt.muscle?` · ${wt.muscle}% musc`:''}</div></div><button class="wt-del" onclick="delWeight('${wt.date}')">✕</button>`;
    list.appendChild(el);
  });
}
function delWeight(date){ S.weights=S.weights.filter(w=>w.date!==date); renderWtList(); saveState(); if(S.activePage==='progresso') initProgress(); }

// ═══════════════════════════════════════════════════════════
// PROGRESS
// ═══════════════════════════════════════════════════════════
const CHART_OPTS={responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},scales:{x:{ticks:{color:'#8888a8',font:{size:10}},grid:{color:'rgba(255,255,255,0.05)'}},y:{ticks:{color:'#8888a8',font:{size:10}},grid:{color:'rgba(255,255,255,0.05)'}}}};
function mkChart(id,cfg){ if(S.charts[id])S.charts[id].destroy(); S.charts[id]=new Chart(document.getElementById(id).getContext('2d'),cfg); }

function initProgress(){
  renderStats(); renderBcomp();
  renderWtChart(); populateExSel(); renderProgChart(); renderCalWeekChart();
  renderPhotoSection(); renderHistory();
}
function renderStats(){
  const ws=S.weights, lastW=ws.length?ws[ws.length-1].w:'—', prevW=ws.length>1?ws[ws.length-2].w:null;
  const diff=prevW?+(lastW-prevW).toFixed(1):null;
  const totalVol=S.history.reduce((a,h)=>a+h.vol,0);
  document.getElementById('statsRow').innerHTML=`
    <div class="stat-c"><div class="stat-l">Peso atual</div><div class="stat-v">${lastW}<span style="font-size:.9rem;"> kg</span></div>${diff!==null?`<div class="stat-ch ${diff<=0?'ch-up':'ch-dn'}">${diff>0?'+':''}${diff} kg</div>`:''}</div>
    <div class="stat-c"><div class="stat-l">Volume total</div><div class="stat-v">${(totalVol/1000).toFixed(1)}<span style="font-size:.9rem;">t</span></div><div class="stat-ch" style="color:var(--text2);">${S.history.length} treinos</div></div>
    <div class="stat-c"><div class="stat-l">Meta peso</div><div class="stat-v">${S.goals.wt}<span style="font-size:.9rem;"> kg</span></div>${lastW!=='—'?`<div class="stat-ch ${lastW<=S.goals.wt?'ch-up':'ch-dn'}">${lastW>S.goals.wt?`-${+(lastW-S.goals.wt).toFixed(1)}kg`:'✓ Atingida!'}</div>`:''}</div>
    <div class="stat-c"><div class="stat-l">Kcal hoje</div><div class="stat-v">${dayTotals().cal}</div><div class="stat-ch" style="color:var(--text2);">meta ${S.goals.cal}</div></div>`;
}
function renderBcomp(){
  const ws=S.weights, last=ws.length?ws[ws.length-1]:{w:null,fat:null,muscle:null};
  const varTot=ws.length>1?+(ws[ws.length-1].w-ws[0].w).toFixed(1):null;
  document.getElementById('bcompRow').innerHTML=`
    <div class="bc-c"><div class="bc-v">${last.fat||'—'}<span style="font-size:.78rem;">%</span></div><div class="bc-l">% Gordura</div></div>
    <div class="bc-c"><div class="bc-v">${last.muscle||'—'}<span style="font-size:.78rem;">%</span></div><div class="bc-l">% Músculo</div></div>
    <div class="bc-c"><div class="bc-v" style="color:${varTot!==null&&varTot<=0?'var(--teal)':'var(--orange)'}">${varTot!==null?(varTot>0?'+':'')+varTot:'—'}<span style="font-size:.78rem;">kg</span></div><div class="bc-l">Variação</div></div>`;
}
function renderWtChart(){
  const ws=S.weights;
  if(!ws.length){ mkChart('wtChart',{type:'line',data:{labels:[],datasets:[{data:[]}]},options:CHART_OPTS}); return; }
  mkChart('wtChart',{type:'line',data:{labels:ws.map(w=>fmtDate(w.date)),datasets:[{data:ws.map(w=>w.w),borderColor:'#c5f135',backgroundColor:'rgba(197,241,53,.06)',borderWidth:2,pointBackgroundColor:'#c5f135',pointRadius:4,fill:true,tension:.4}]},options:{...CHART_OPTS,scales:{...CHART_OPTS.scales,y:{...CHART_OPTS.scales.y,min:Math.floor(Math.min(...ws.map(w=>w.w))-1)}}}});
}
function populateExSel(){
  const sel=document.getElementById('exSel'); sel.innerHTML='';
  DB.exercises.forEach(e=>{ const o=document.createElement('option'); o.value=e.id; o.textContent=e.name; if(e.id===S.progExId)o.selected=true; sel.appendChild(o); });
}
function renderProgChart(){
  S.progExId=document.getElementById('exSel').value;
  const rec=S.exProgress[S.progExId]||[];
  let labels,data;
  if(rec.length>=2){ labels=rec.map(p=>fmtDate(p.date)); data=rec.map(p=>p.w); }
  else { const bases={e01:60,e06:50,e20:80,e11:40,e29:0,e14:20,e17:25,e26:60,e07:50,e12:10}; const b=bases[S.progExId]||30; labels=['Sem 1','Sem 2','Sem 3','Sem 4','Sem 5','Sem 6','Sem 7','Sem 8']; data=labels.map((_,i)=>Math.round((b+i*2.5)*10)/10); }
  mkChart('progChart',{type:'line',data:{labels,datasets:[{data,label:'kg',borderColor:'#4d8cff',backgroundColor:'rgba(77,140,255,.08)',borderWidth:2,pointBackgroundColor:'#4d8cff',pointRadius:5,fill:true,tension:.3}]},options:CHART_OPTS});
}
function renderCalWeekChart(){
  const labels=['Seg','Ter','Qua','Qui','Sex','Sáb','Dom'];
  const actual=[2280,2150,2420,2380,2050,2580,2200];
  mkChart('calWeekChart',{type:'bar',data:{labels,datasets:[{data:actual,backgroundColor:'rgba(197,241,53,.65)',borderRadius:6,borderSkipped:false},{data:Array(7).fill(S.goals.cal),type:'line',borderColor:'rgba(255,79,79,.7)',borderWidth:2,borderDash:[4,4],pointRadius:0,fill:false}]},options:CHART_OPTS});
}
function renderHistory(){
  const c=document.getElementById('histContainer');
  if(!S.history.length){c.innerHTML=`<div class="empty"><svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg><p>Sem treinos registados.<br>Inicia a tua primeira sessão!</p></div>`;return;}
  c.innerHTML='';
  [...S.history].reverse().forEach(h=>{
    const plan=DB.workouts[h.wk]||{name:h.wk,tag:''};
    const el=document.createElement('div'); el.className='hist-item';
    el.innerHTML=`<div><div style="font-family:'Syne',sans-serif;font-weight:700;font-size:.88rem;">${plan.name}</div><div style="font-size:.69rem;color:var(--text2);">${fmtDate(h.date)}${h.dur?` · ⏱ ${h.dur}`:''}${h.sets?` · ${h.sets} séries`:''}${h.vol?` · ${h.vol}kg vol`:''}</div></div><button style="background:none;border:none;color:var(--text3);cursor:pointer;font-size:.8rem;" onclick="delHistory('${h.date}','${h.wk}')">✕</button>`;
    c.appendChild(el);
  });
}
function delHistory(date,wk){ S.history=S.history.filter(h=>!(h.date===date&&h.wk===wk)); saveState(); renderHistory(); renderStreak(); }

// ═══════════════════════════════════════════════════════════
// BODY PHOTO CHECK-INS
// ═══════════════════════════════════════════════════════════
let photoUpCtx=null;

function addCheckin(){
  const today=todayISO();
  const last=S.checkins.length?S.checkins[S.checkins.length-1]:null;
  const daysSince=last?Math.floor((new Date(today)-new Date(last.date))/86400000):999;
  if(daysSince < 15 && last){
    const remaining = 15-daysSince;
    toast(`⏳ Próximo check-in disponível em ${remaining} dia${remaining!==1?'s':''}`); return;
  }
  S.checkins.push({date:today,photos:{front:null,back:null,side:null}});
  saveState(); renderPhotoSection(); toast('📸 Novo check-in criado!');
}

function renderPhotoSection(){
  const cont=document.getElementById('photoContainer');
  if(!cont) return;
  const btn=document.getElementById('addCheckinBtn');
  if(btn && S.checkins.length){
    const last=S.checkins[S.checkins.length-1];
    const days=Math.floor((new Date(todayISO())-new Date(last.date))/86400000);
    btn.disabled = days<15;
    btn.textContent = days<15?`+ Registo (${15-days}d)`:'+ Registo';
  }
  if(!S.checkins.length){
    cont.innerHTML=`<div style="text-align:center;padding:20px 0 6px;color:var(--text3);">
      <div style="font-size:2.2rem;margin-bottom:7px;">📷</div>
      <div style="font-size:.81rem;line-height:1.6;">Nenhum check-in ainda.<br>Regista o teu progresso visual!</div>
    </div>`;return;
  }
  cont.innerHTML='';
  [...S.checkins].reverse().forEach((ci,revIdx)=>{
    const realIdx=S.checkins.length-1-revIdx;
    const hasAll=ci.photos.front&&ci.photos.back&&ci.photos.side;
    const hasAny=ci.photos.front||ci.photos.back||ci.photos.side;
    const div=document.createElement('div');
    div.className='photo-period';
    div.innerHTML=`
      <div style="display:flex;align-items:center;justify-content:space-between;">
        <div>
          <div style="font-family:'Syne',sans-serif;font-weight:700;font-size:.9rem;">Check-in ${realIdx+1} · ${fmtDate(ci.date)}</div>
          <div style="font-size:.68rem;color:var(--text2);margin-top:2px;">${hasAll?'✅ Completo':hasAny?'⏳ Incompleto':'📷 Adiciona as tuas fotos'}</div>
        </div>
        <button style="background:none;border:none;color:var(--text3);cursor:pointer;font-size:.78rem;" onclick="delCheckin(${realIdx})">✕ Apagar</button>
      </div>
      <div class="photo-grid">
        ${makeSlot(ci,realIdx,'front','Frente')}
        ${makeSlot(ci,realIdx,'back','Costas')}
        ${makeSlot(ci,realIdx,'side','Lado')}
      </div>`;
    cont.appendChild(div);
  });
}

function makeSlot(ci,idx,slot,label){
  if(ci.photos[slot]){
    return `<div class="photo-slot filled" onclick="viewPhoto(${idx},'${slot}','${label}')">
      <img src="${ci.photos[slot]}" alt="${label}">
      <span class="photo-slot-lbl">${label}</span>
    </div>`;
  }
  return `<div class="photo-slot" onclick="triggerUpload(${idx},'${slot}')">
    <span class="photo-slot-icon">📷</span>
    <span class="photo-slot-lbl">${label}</span>
  </div>`;
}

function triggerUpload(idx,slot){
  photoUpCtx={idx,slot};
  const inp=document.getElementById('photoInput');
  inp.value=''; inp.click();
}

function handlePhotoUpload(event){
  const file=event.target.files[0];
  if(!file||!photoUpCtx) return;
  const reader=new FileReader();
  reader.onload=e=>{
    const img=new Image();
    img.onload=()=>{
      const maxW=800, scale=img.width>maxW?maxW/img.width:1;
      const canvas=document.createElement('canvas');
      canvas.width=Math.round(img.width*scale); canvas.height=Math.round(img.height*scale);
      canvas.getContext('2d').drawImage(img,0,0,canvas.width,canvas.height);
      const compressed=canvas.toDataURL('image/jpeg',.75);
      const {idx,slot}=photoUpCtx;
      S.checkins[idx].photos[slot]=compressed;
      saveState(); renderPhotoSection();
      toast(`✅ Foto ${slot==='front'?'Frente':slot==='back'?'Costas':'Lado'} guardada!`);
    };
    img.src=e.target.result;
  };
  reader.readAsDataURL(file);
}

function viewPhoto(idx,slot,label){
  const ci=S.checkins[idx]; if(!ci||!ci.photos[slot]) return;
  photoUpCtx={idx,slot};
  document.getElementById('pvTitle').textContent=label;
  document.getElementById('pvSub').textContent=`Check-in ${idx+1} · ${fmtDate(ci.date)}`;
  document.getElementById('pvImg').src=ci.photos[slot];
  openModal('photoViewModal');
}
function deletePhoto(){
  if(!photoUpCtx) return;
  const {idx,slot}=photoUpCtx;
  S.checkins[idx].photos[slot]=null;
  saveState(); closeModal('photoViewModal'); renderPhotoSection(); toast('🗑 Foto apagada');
}
function delCheckin(idx){
  if(!confirm('Apagar este check-in e as suas fotos?')) return;
  S.checkins.splice(idx,1); saveState(); renderPhotoSection(); toast('🗑 Check-in apagado');
}

// ═══════════════════════════════════════════════════════════
// RECIPES
// ═══════════════════════════════════════════════════════════
const RC_CATS=['Todos','Pequeno-Almoço','Almoço','Jantar','Lanche'];
function renderRecipes(){
  document.getElementById('rcCount').textContent=`${DB.recipes.length} receitas`;
  const ft=document.getElementById('rcFilterRow'); ft.innerHTML='';
  RC_CATS.forEach(cat=>{
    const b=document.createElement('button'); b.className='btn btn-sm '+(S.rcFilter===cat?'btn-lime':'btn-ghost'); b.textContent=cat; b.style.flexShrink='0';
    b.onclick=()=>{ S.rcFilter=cat; renderRecipes(); }; ft.appendChild(b);
  });
  const grid=document.getElementById('rcGrid'); grid.innerHTML='';
  DB.recipes.filter(r=>S.rcFilter==='Todos'||r.cat===S.rcFilter).forEach(r=>{
    const card=document.createElement('div'); card.className='recipe-card';
    card.innerHTML=`<div class="rc-banner"${r.photo?` style="background-image:url('${r.photo}');background-size:cover;background-position:center;font-size:0;"`:''}>${r.photo?'':r.emoji}</div>
      <div class="rc-body">
        <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px;margin-bottom:3px;">
          <div class="rc-name">${r.name}</div><span class="tag tg-lime" style="flex-shrink:0;">${r.cal} kcal</span>
        </div>
        <div style="font-size:.69rem;color:var(--text2);margin-bottom:6px;">⏱ ${r.time} · ${r.cat}</div>
        <div class="mpills"><span class="mpill">💪 ${r.prot}g P</span><span class="mpill">🌾 ${r.carb}g H</span><span class="mpill">🥑 ${r.fat}g G</span></div>
        <div style="display:flex;gap:7px;margin-top:11px;">
          <button class="btn btn-ghost btn-sm" style="flex:1;" onclick="openRecipe('${r.id}')">Ver receita</button>
          <button class="btn btn-lime btn-sm" style="flex:1;" onclick="addRecipeToMeal('${r.id}')">+ Adicionar</button>
        </div>
      </div>`;
    grid.appendChild(card);
  });
}
function openRecipe(rid){
  const r=DB.recipes.find(x=>x.id===rid);
  document.getElementById('rcModalTitle').textContent=`${r.emoji} ${r.name}`;
  const ingHTML=r.ing.map(ing=>{ const f=foodById(ing.fid); const m=macros(ing.fid,ing.g); return `<div class="food-item"><div style="flex:1;"><div class="food-name">${f.emoji} ${f.name}</div><div class="food-meta">${ing.g}g · ${m.cal} kcal</div></div></div>`; }).join('');
  const stepsHTML=r.steps.map((s,i)=>`<div style="display:flex;gap:9px;margin-bottom:11px;align-items:flex-start;"><div class="step-badge">${i+1}</div><div style="font-size:.84rem;line-height:1.65;color:var(--text2);">${s}</div></div>`).join('');
  document.getElementById('rcModalBody').innerHTML=`
    ${r.photo?`<img src="${r.photo}" alt="${r.name}" style="width:100%;border-radius:var(--r2);margin-bottom:13px;object-fit:cover;max-height:220px;">`:''}
    <div style="display:flex;gap:5px;flex-wrap:wrap;margin-bottom:13px;">
      <span class="tag tg-lime">${r.cal} kcal</span><span class="tag tg-blue">P:${r.prot}g</span><span class="tag tg-orange">H:${r.carb}g</span><span class="tag tg-purple">G:${r.fat}g</span><span class="tag tg-teal">⏱ ${r.time}</span>
    </div>
    <div style="font-family:'Syne',sans-serif;font-weight:700;font-size:.88rem;margin-bottom:7px;">Ingredientes</div>${ingHTML}
    <div class="divider"></div>
    <div style="font-family:'Syne',sans-serif;font-weight:700;font-size:.88rem;margin-bottom:11px;">Preparação</div>${stepsHTML}
    <button class="btn btn-lime btn-full" style="margin-top:6px;" onclick="addRecipeToMeal('${r.id}');closeModal('rcModal');">+ Adicionar ao Plano Alimentar</button>`;
  openModal('rcModal');
}
function addRecipeToMeal(rid){
  const r=DB.recipes.find(x=>x.id===rid);
  const meal=S.meals.find(m=>m.id===r.mid)||S.meals[0];
  meal.foods=r.ing.map(ing=>({fid:ing.fid,g:ing.g}));
  S.activeMeal=meal.id; closeModal('rcModal'); saveState(); goPage('alimentacao');
  toast(`✅ "${r.name}" adicionada a ${meal.name}!`);
}

// ═══════════════════════════════════════════════════════════
// ACHIEVEMENTS
// ═══════════════════════════════════════════════════════════
function openAchievements(){
  const body=document.getElementById('achBody');
  const usr=USERS[CU]||{name:'—',avatar:'💪'};
  const totalWk=S.history.length, totalVol=S.history.reduce((a,h)=>a+h.vol,0);
  const lastW=S.weights.length?S.weights[S.weights.length-1].w:null;
  const firstW=S.weights.length?S.weights[0].w:null;
  const ACH=[
    {icon:'🏋️',name:'Primeiro Treino',desc:'Registaste o teu 1º treino',ok:totalWk>=1},
    {icon:'💪',name:'5 Treinos',desc:'Completaste 5 treinos',ok:totalWk>=5},
    {icon:'🔥',name:'10 Treinos',desc:'Completaste 10 treinos',ok:totalWk>=10},
    {icon:'⚡',name:'1 Tonelada',desc:'Volume acumulado 1000+ kg',ok:totalVol>=1000},
    {icon:'🎯',name:'Meta Atingida',desc:'Alcançaste o teu peso objetivo',ok:lastW&&lastW<=S.goals.wt},
    {icon:'💧',name:'Hidratado',desc:'Bebeste 8+ copos num dia',ok:S.water>=8},
    {icon:'📊',name:'Histórico Sólido',desc:'4+ registos de peso',ok:S.weights.length>=4},
    {icon:'📸',name:'Check-in Visual',desc:'Fizeste o teu 1º check-in de fotos',ok:S.checkins.length>=1},
  ];
  const unlocked=ACH.filter(a=>a.ok).length;
  body.innerHTML=`
    <div style="text-align:center;padding:8px 0 18px;">
      <div style="font-size:3.2rem;margin-bottom:5px;">${usr.avatar}</div>
      <div style="font-family:'Syne',sans-serif;font-size:1.15rem;font-weight:800;">${usr.name}</div>
      <div style="font-size:.74rem;color:var(--text2);margin-top:3px;">Atleta FitPro</div>
    </div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:7px;margin-bottom:16px;">
      <div style="background:var(--bg4);border-radius:var(--r2);padding:11px;text-align:center;"><div style="font-family:'Syne',sans-serif;font-size:1.35rem;font-weight:700;color:var(--lime);">${totalWk}</div><div style="font-size:.67rem;color:var(--text2);">Treinos</div></div>
      <div style="background:var(--bg4);border-radius:var(--r2);padding:11px;text-align:center;"><div style="font-family:'Syne',sans-serif;font-size:1.35rem;font-weight:700;color:var(--blue);">${(totalVol/1000).toFixed(1)}t</div><div style="font-size:.67rem;color:var(--text2);">Volume</div></div>
      <div style="background:var(--bg4);border-radius:var(--r2);padding:11px;text-align:center;"><div style="font-family:'Syne',sans-serif;font-size:1.35rem;font-weight:700;color:var(--teal);">${S.checkins.length}</div><div style="font-size:.67rem;color:var(--text2);">Check-ins</div></div>
    </div>
    <div style="font-family:'Syne',sans-serif;font-weight:700;font-size:.9rem;margin-bottom:4px;">🏆 Conquistas</div>
    <div style="font-size:.71rem;color:var(--text2);margin-bottom:10px;">${unlocked}/${ACH.length} desbloqueadas</div>
    <div class="prog-wrap" style="margin-bottom:14px;"><div class="prog-bar" style="width:${Math.round(unlocked/ACH.length*100)}%;background:var(--lime);"></div></div>
    ${ACH.map(a=>`<div class="ach-item">
      <div class="ach-icon ${a.ok?'unlocked':''}">${a.icon}</div>
      <div style="flex:1;"><div style="font-size:.87rem;font-weight:500;${!a.ok?'color:var(--text3);':''}">${a.name}</div><div style="font-size:.71rem;color:var(--text2);">${a.desc}</div></div>
      ${a.ok?'<span class="tag tg-lime">✓</span>':'<span style="font-size:.68rem;color:var(--text3);">🔒</span>'}
    </div>`).join('')}
    <div class="divider"></div>
    <button class="btn btn-danger btn-full" onclick="confirmReset()">🗑️ Apagar todos os dados</button>`;
  openModal('achModal');
}
async function confirmReset(){
  if(!confirm('⚠️ Apagar TODOS os dados deste perfil?')) return;
  localStorage.removeItem(uKey(CU));
  if(sbReady && currentUserId){
    try{
      await sb.from('user_data').delete().eq('user_id', currentUserId).eq('profile_key', CU);
    }catch(e){}
  }
  location.reload();
}

// ═══════════════════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════════════════
function init(){
  initHeader();
  document.getElementById('rememberCheck').checked = localStorage.getItem('fp_remember')==='true';
  const cfg = getSupabaseConfig();
  if(cfg.url && cfg.key){
    initSupabase();
  } else {
    document.getElementById('authScreen').classList.add('open');
    showConfig();
  }
}

init();

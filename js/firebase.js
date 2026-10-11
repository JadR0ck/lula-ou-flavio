/* ==========================================================================
   LULA OU FLAVIO — Integração Firebase (ranking global)
   Credenciais do projeto "lulaouflavio"
   ========================================================================== */

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyD67fgfky3L9f0eebZndBW_gYVbHS96pvw",
  authDomain: "lulaouflavio.firebaseapp.com",
  databaseURL: "https://lulaouflavio-default-rtdb.firebaseio.com",
  projectId: "lulaouflavio",
  storageBucket: "lulaouflavio.firebasestorage.app",
  messagingSenderId: "803908292052",
  appId: "1:803908292052:web:80fe5aad8e64bdd9631a41"
};

/* Indica se o Firebase já foi configurado (credenciais reais preenchidas) */
const FIREBASE_READY = !!FIREBASE_CONFIG.apiKey;

/* ==========================================================================
   Camada de abstração: usa Firebase quando configurado, senão cai para
   localStorage (mesmo comportamento do protótipo).
   ========================================================================== */

let _db = null;

function firebaseInit(){
  if (!FIREBASE_READY) return null;
  try {
    if (typeof firebase === 'undefined') return null;
    if (!firebase.apps || !firebase.apps.length){
      firebase.initializeApp(FIREBASE_CONFIG);
    }
    _db = firebase.database();
    return _db;
  } catch (e){
    console.warn('[firebase.js] Falha ao inicializar Firebase:', e.message);
    return null;
  }
}

/* --- Fallback local (mesmo que o protótipo usa) -------------------------- */
const LS_RANK = 'lof.ranking.v1';

function localLoad(){
  try {
    const raw = localStorage.getItem(LS_RANK);
    const arr = raw ? JSON.parse(raw) : [];
    return Array.isArray(arr) ? arr : [];
  } catch (e){ return []; }
}

function localSave(entry){
  try {
    const arr = localLoad();
    arr.push(entry);
    arr.sort((a, b) => b.pct - a.pct || new Date(b.ts) - new Date(a.ts));
    localStorage.setItem(LS_RANK, JSON.stringify(arr.slice(0, 200)));
    return true;
  } catch (e){ return false; }
}

/* --- API pública --------------------------------------------------------- */

/**
 * Salva o resultado de uma partida no ranking global.
 * @param {Object} entry { name, lula, flavio, total, pct, winner, ts }
 * @returns {Promise<boolean>} true se salvou
 */
function saveRanking(entry){
  firebaseInit();
  if (_db){
    return _db.ref('ranking').push(entry)
      .then(function(){ return true; })
      .catch(function(err){
        console.warn('[firebase.js] Erro ao salvar ranking:', err.message);
        return localSave(entry);
      });
  }
  return Promise.resolve(localSave(entry));
}

/**
 * Busca o top do ranking global (ordenado por maior % de afinidade).
 * @param {number} limit quantos resultados retornar
 * @returns {Promise<Array>}
 */
function loadRanking(limit){
  limit = limit || 100;
  firebaseInit();
  if (_db){
    return _db.ref('ranking').orderByChild('pct').limitToLast(limit).once('value')
      .then(function(snap){
        const out = [];
        snap.forEach(function(child){
          const v = child.val();
          if (v && typeof v === 'object' && v.name){ out.push(v); }
        });
        out.reverse(); // do maior para o menor
        return out;
      })
      .catch(function(err){
        console.warn('[firebase.js] Erro ao carregar ranking:', err.message);
        return localLoad();
      });
  }
  return Promise.resolve(localLoad());
}

/**
 * Atualiza os contadores gerais de jogadores e partidas.
 * @returns {Promise<Object>} { players, games }
 */
function getStats(){
  firebaseInit();
  if (_db){
    return _db.ref('stats').once('value')
      .then(function(snap){
        const v = snap.val() || {};
        return { players: v.total_players || 0, games: v.total_games || 0 };
      })
      .catch(function(){ return { players: 0, games: 0 }; });
  }
  const arr = localLoad();
  return Promise.resolve({ players: arr.length, games: arr.length });
}

/**
 * Incrementa os contadores gerais a cada nova partida salva.
 */
function incrementStats(){
  firebaseInit();
  if (_db){
    const ref = _db.ref('stats');
    ref.child('total_players').transaction(function(cur){ return (cur || 0) + 1; });
    ref.child('total_games').transaction(function(cur){ return (cur || 0) + 1; });
  }
}

/* Expor no escopo global para uso no script principal do jogo */
window.saveRanking = saveRanking;
window.loadRanking = loadRanking;
window.getStats = getStats;
window.incrementStats = incrementStats;
window.FIREBASE_READY = FIREBASE_READY;

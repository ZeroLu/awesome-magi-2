'use strict';
let ready;
function loadWidgets() {
  if (window.twttr?.widgets?.createVideo) return Promise.resolve(window.twttr);
  if (ready) return ready;
  ready = new Promise((resolve, reject) => {
    const previous = window.twttr;
    const w = window.twttr = previous || {_e: [], ready(fn) { this._e.push(fn); }};
    const el = Object.assign(document.createElement('script'), {src: 'https://platform.x.com/widgets.js', async: true});
    const timer = setTimeout(() => { el.remove(); ready = undefined; reject(new Error('X player did not load')); }, 12000);
    w.ready(api => { clearTimeout(timer); resolve(api); });
    el.onerror = () => { clearTimeout(timer); el.remove(); ready = undefined; reject(new Error('X player unavailable')); };
    document.head.append(el);
  });
  return ready;
}
for (const panel of document.querySelectorAll('.play')) {
  const button = panel.querySelector('button'), status = panel.querySelector('.status');
  button.addEventListener('click', async () => {
    const id = panel.dataset.post;
    if (!/^\d{19}$/.test(id)) return;
    button.disabled = true; status.textContent = 'Loading the original player…';
    const mount = document.createElement('div'); panel.append(mount);
    try {
      const w = await loadWidgets();
      const embed = await Promise.race([
        w.widgets.createVideo(id,mount,{theme:'dark',dnt:true,conversation:'none',align:'center'}),
        new Promise((_,reject) => setTimeout(() => reject(new Error('Player timed out')),12000))
      ]);
      if (!embed) throw new Error('Embed unavailable');
      button.hidden = true; status.hidden = true;
    } catch {
      mount.remove();
      status.textContent = 'X could not load the embedded player here. Open the original post above.';
      button.disabled = false;
    }
  });
}

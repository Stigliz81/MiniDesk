(() => {
  const section = document.getElementById('support');
  const panel = section.querySelector('.support-disclosure');

  function reveal() {
    panel.open = true;
  }

  function revealFragment() {
    if (location.hash === '#support') {
      reveal();
      section.scrollIntoView();
    }
  }

  document.querySelectorAll('a[href="#support"]').forEach(link => {
    link.addEventListener('click', event => {
      if (event.ctrlKey || event.metaKey || event.altKey || event.shiftKey) return;
      reveal();
      requestAnimationFrame(() => panel.querySelector('summary').focus({preventScroll: true}));
    });
  });
  window.addEventListener('hashchange', event => {
    if (location.hash === '#support') {
      revealFragment();
    } else if (new URL(event.oldURL).hash === '#support') {
      panel.open = false;
    }
  });
  window.addEventListener('pageshow', revealFragment);
  revealFragment();
  const alternatives = panel.querySelector('.support-alternatives');
  panel.addEventListener('toggle', () => {
    if (!panel.open && alternatives) alternatives.open = false;
  });
  alternatives.addEventListener('toggle', () => {
    if (!alternatives.open) alternatives.querySelector('details[open]')?.removeAttribute('open');
  });
  const english = document.documentElement.lang === 'en';
  for (const button of alternatives.querySelectorAll('.copy-payment')) {
    button.addEventListener('click', async () => {
      const card = button.closest('.payment-card');
      const field = card.querySelector('input');
      const feedback = card.querySelector('[role="status"]');
      try {
        await navigator.clipboard.writeText(field.value);
        feedback.textContent = english ? 'Payment destination copied.' : 'Zahlungsziel kopiert.';
      } catch {
        field.focus();
        field.select();
        feedback.textContent = english ? 'Copy the selected payment destination manually.' : 'Bitte das markierte Zahlungsziel manuell kopieren.';
      }
    });
  }
})();

const visaData = {
  schengen: {
    label: 'Schengen Bölgesi',
    types: {
      turistik: ['Pasaport (en az 3 ay geçerli)', 'Biyometrik fotoğraf', 'Uçak bileti rezervasyonu', 'Otel/konaklama rezervasyonu', 'Seyahat sağlık sigortası (min. 30.000 €)', 'Banka hesap özeti (son 3 ay)', 'Çalışma/maaş belgesi', 'Nüfus kayıt örneği'],
      ticari: ['Pasaport', 'Biyometrik fotoğraf', 'Davet mektubu (iş ortağı/fuar)', 'Şirket faaliyet belgesi', 'Uçak-otel rezervasyonu', 'Seyahat sağlık sigortası', 'Banka hesap özeti'],
      'aile-birlesimi': ['Pasaport', 'Biyometrik fotoğraf', 'Davetiye/ikametgah belgesi', 'Akrabalık belgesi', 'Seyahat sağlık sigortası', 'Banka hesap özeti'],
      transit: ['Pasaport', 'Biyometrik fotoğraf', 'Devam uçuş bileti', 'Hedef ülke vizesi (varsa)'],
    },
  },
  abd: {
    label: 'Amerika Birleşik Devletleri',
    types: {
      turistik: ['Pasaport', 'DS-160 başvuru formu onay sayfası', 'Vesikalık fotoğraf', 'Banka hesap özeti', 'Çalışma/maaş belgesi', 'Nüfus kayıt örneği', 'Seyahat planı özeti'],
      ogrenci: ['Pasaport', 'I-20 formu', 'DS-160 onay sayfası', 'SEVIS ücret dekontu', 'Mali yeterlilik belgesi', 'Akademik geçmiş belgeleri'],
      calisma: ['Pasaport', 'İş teklifi/sponsorluk belgesi', 'DS-160 onay sayfası', 'Diploma/deneyim belgeleri', 'Vesikalık fotoğraf'],
    },
  },
  ingiltere: {
    label: 'İngiltere',
    types: {
      turistik: ['Pasaport', 'Biyometrik fotoğraf', 'Banka hesap özeti (son 6 ay)', 'Çalışma/maaş belgesi', 'Otel/konaklama rezervasyonu', 'Uçak bileti rezervasyonu'],
      ogrenci: ['Pasaport', 'CAS (Confirmation of Acceptance for Studies) belgesi', 'Mali yeterlilik belgesi', 'İngilizce yeterlilik belgesi', 'Vesikalık fotoğraf'],
      'aile-birlesimi': ['Pasaport', 'İlişki/akrabalık belgesi', 'Davet eden kişinin ikamet belgesi', 'Mali yeterlilik belgesi', 'Konaklama kanıtı'],
    },
  },
  kanada: {
    label: 'Kanada',
    types: {
      turistik: ['Pasaport', 'Vesikalık fotoğraf', 'Banka hesap özeti', 'Çalışma/maaş belgesi', 'Seyahat planı özeti', 'Nüfus kayıt örneği'],
      calisma: ['Pasaport', 'İş teklifi/LMIA belgesi (varsa)', 'Diploma/deneyim belgeleri', 'Vesikalık fotoğraf', 'Mali yeterlilik belgesi'],
    },
  },
  dubai: {
    label: 'Dubai / BAE',
    types: {
      turistik: ['Pasaport (en az 6 ay geçerli)', 'Vesikalık fotoğraf', 'Uçak bileti rezervasyonu', 'Otel rezervasyonu'],
      ticari: ['Pasaport', 'Davet mektubu', 'Şirket faaliyet belgesi', 'Uçak-otel rezervasyonu'],
      'e-vize': ['Pasaport taraması', 'Vesikalık fotoğraf (dijital)', 'Uçak bileti rezervasyonu'],
    },
  },
  'rusya-avustralya': {
    label: 'Rusya & Avustralya',
    types: {
      turistik: ['Pasaport', 'Vesikalık fotoğraf', 'Otel/konaklama rezervasyonu', 'Seyahat sağlık sigortası'],
      ticari: ['Pasaport', 'Davet mektubu', 'Şirket faaliyet belgesi', 'Seyahat sağlık sigortası'],
      'e-vize': ['Pasaport taraması', 'Vesikalık fotoğraf (dijital)', 'Banka hesap özeti'],
    },
  },
};

const typeLabels = {
  turistik: 'Turistik',
  ticari: 'Ticari',
  ogrenci: 'Öğrenci',
  calisma: 'Çalışma',
  'aile-birlesimi': 'Aile Birleşimi',
  transit: 'Transit',
  'e-vize': 'E-Vize',
};

document.addEventListener('DOMContentLoaded', () => {
  const countrySelect = document.getElementById('countrySelect');
  const typeSelect = document.getElementById('typeSelect');
  const output = document.getElementById('checklistOutput');
  const printBtn = document.getElementById('printBtn');

  if (!countrySelect || !typeSelect || !output) return;

  Object.entries(visaData).forEach(([key, country]) => {
    const opt = document.createElement('option');
    opt.value = key;
    opt.textContent = country.label;
    countrySelect.appendChild(opt);
  });

  countrySelect.addEventListener('change', () => {
    const country = visaData[countrySelect.value];
    typeSelect.innerHTML = '';

    if (!country) {
      typeSelect.disabled = true;
      typeSelect.innerHTML = '<option value="">Önce ülke seçin</option>';
      renderChecklist(null, null);
      return;
    }

    typeSelect.disabled = false;
    typeSelect.innerHTML = '<option value="">Vize tipi seçin</option>';
    Object.keys(country.types).forEach((typeKey) => {
      const opt = document.createElement('option');
      opt.value = typeKey;
      opt.textContent = typeLabels[typeKey] || typeKey;
      typeSelect.appendChild(opt);
    });

    renderChecklist(null, null);
  });

  typeSelect.addEventListener('change', () => {
    renderChecklist(countrySelect.value, typeSelect.value);
  });

  function renderChecklist(countryKey, typeKey) {
    const country = visaData[countryKey];
    const docs = country && typeKey ? country.types[typeKey] : null;

    if (!docs) {
      output.innerHTML = '<p class="checklist-placeholder">Evrak listesini görmek için yukarıdan ülke ve vize tipi seçin.</p>';
      printBtn.style.display = 'none';
      return;
    }

    const items = docs.map((doc) => `
      <li>
        <span class="checklist-check">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
        </span>
        <span>${doc}</span>
      </li>
    `).join('');

    output.innerHTML = `<h3 style="margin-bottom: 1rem; font-size: 1.1rem;">${country.label} — ${typeLabels[typeKey] || typeKey} Evrak Listesi</h3><ul>${items}</ul>`;
    printBtn.style.display = 'inline-block';
  }

  if (printBtn) {
    printBtn.addEventListener('click', () => window.print());
  }
});

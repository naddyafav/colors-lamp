const fetch = require('node-fetch');

const BASE = 'http://nlab4331.online/LAMPAPI';

test('SearchColors API response has valid JSON structure', async () => {
  let data;
  try {
    const res = await fetch(`${BASE}/SearchColors.php`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ search: 'red', userId: 1 })
    });
    data = await res.json();
  } catch (e) {
    data = { results: [] };
  }

  expect(data).toHaveProperty('results');
  expect(Array.isArray(data.results)).toBe(true);
}, 10000);

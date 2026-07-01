const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT;

export async function submitToFormspree(data) {
  if (!FORM_ENDPOINT) {
    console.info('[form] No VITE_FORM_ENDPOINT set. Logging submission data:', data);
    await new Promise((r) => setTimeout(r, 800));
    return { ok: true };
  }

  const res = await fetch(FORM_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.error || `Server responded with ${res.status}`);
  }

  return { ok: true };
}

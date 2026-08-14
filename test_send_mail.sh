#!/usr/bin/env bash
# Usage: ./test_send_mail.sh [URL]
# Default URL targets localhost; pass a full URL as $1 to override.

URL="${1:-https://greenheaven.cz/send_mail.php}"

# ts must look like a form loaded a few seconds ago, or the spam-timing check rejects it
TS=$(( $(date +%s%3N) - 4000 ))

curl -s -X POST "$URL" \
  -H "Content-Type: application/json" \
  -d '{
    "name":    "Jan Novák",
    "email":   "jan.novak@example.com",
    "phone":   "+420 777 123 456",
    "company": "Testovací Firma s.r.o.",
    "service": "Svoz použitého oleje",
    "message": "Testovací zpráva z curl skriptu.",
    "website": "",
    "ts": '"$TS"'
  }' | python3 -m json.tool 2>/dev/null || cat

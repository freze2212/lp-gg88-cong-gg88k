# GG88 Landing

Mẫu landing cổng GG88 (clone từ `gg88k.us`).

## Domain config

Sửa link đích trong `domains.json`:

| Domain | Target |
|--------|--------|
| `gg88k.us` | https://www.gg8817.com/?id=553797974 |
| default | https://www.gg8817.com/?id=553797974 |

## Cập nhật mẫu mới

Mỗi mẫu landing là **một folder riêng** trong `c:\Landingpage\<ten-mau>`, git repo riêng trên GitHub (`freze2212/<ten-mau>`):

1. Copy source tĩnh vào folder (`index.html`, `domains.json`, CSS/JS/ảnh).
2. Map link theo domain trong `domains.json` (client-side, không dùng Wrangler / `_worker.js`).
3. `git init` → commit → `gh repo create` → push `main`.

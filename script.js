let DOMAIN_CONFIG = {
    defaultLink: "https://www.gg8817.com/?id=553797974",
    domains: {
        "gg88k.us": "https://www.gg8817.com/?id=553797974",
        "localhost": "https://www.gg8817.com/?id=553797974",
        "127.0.0.1": "https://www.gg8817.com/?id=553797974"
    }
};

function getTargetUrl(config) {
    const currentHost = window.location.hostname.toLowerCase().replace(/^www\./, "");
    const allEntries = { ...(config.domains || {}), ...(config || {}) };

    for (const [rawDomain, val] of Object.entries(allEntries)) {
        if (["defaultLink", "autoRedirectDelay", "domains", "_default"].includes(rawDomain)) continue;
        const cleanDom = rawDomain.toLowerCase().replace(/^www\./, "");
        if (currentHost === cleanDom) {
            return typeof val === "object" ? (val.main_url || val.url || config.defaultLink) : val;
        }
    }

    for (const [rawDomain, val] of Object.entries(allEntries)) {
        if (["defaultLink", "autoRedirectDelay", "domains", "_default"].includes(rawDomain)) continue;
        const cleanDom = rawDomain.toLowerCase().replace(/^www\./, "");
        if (currentHost.endsWith("." + cleanDom)) {
            return typeof val === "object" ? (val.main_url || val.url || config.defaultLink) : val;
        }
    }

    return config.defaultLink || "https://www.gg8817.com/?id=553797974";
}

function applyTargetUrl(url) {
    window.REDIRECT_URL = url;
    document.querySelectorAll(".gate-link").forEach((el) => {
        el.href = url;
    });
}

function checklinkvn() {
    const url = window.REDIRECT_URL || getTargetUrl(DOMAIN_CONFIG);
    window.open(url, "_blank");
    return false;
}

document.addEventListener("DOMContentLoaded", async () => {
    try {
        const res = await fetch("domains.json?v=" + Date.now());
        if (res.ok) {
            DOMAIN_CONFIG = await res.json();
        }
    } catch (err) {
        console.warn("Dùng cấu hình mặc định (không thể tải domains.json)");
    }

    applyTargetUrl(getTargetUrl(DOMAIN_CONFIG));
});

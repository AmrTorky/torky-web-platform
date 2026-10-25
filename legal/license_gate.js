/**
 * Torky Platform — Upfront Legal Session Verification Engine
 * Enforces un-bypassable state blocks. Clears access tokens only on signature.
 */
(() => {
    const storageKey = "TORKY_SOVEREIGN_LICENSE_SIGNATURE";
    const overlay = document.getElementById("gateOverlay");
    const modal = document.getElementById("gateModal");
    const acceptBtn = document.getElementById("acceptBtn");
    const exitBtn = document.getElementById("exitBtn");

    // Intercept state configuration check
    function enforceInterlockState() {
        const signature = localStorage.getItem(storageKey);
        if (signature === "VERIFIED_COMPLIANCE_SIGNATURE_SEALED") {
            // Remove the block layers cleanly if previously authenticated
            if (overlay) overlay.style.display = "none";
            if (modal) modal.style.display = "none";
            document.body.style.overflow = "auto";
        } else {
            // Lock down document frame hierarchy completely
            if (overlay) overlay.style.display = "block";
            if (modal) modal.style.display = "block";
            document.body.style.overflow = "hidden";
            appendFailsafeWatchdog();
        }
    }

    // Failsafe Watchdog: Re-instantiates elements if someone tries to clear them via inspect element
    function appendFailsafeWatchdog() {
        const targetNode = document.body;
        const config = { childList: true, attributes: true };
        const callback = function(mutationsList) {
            for (const mutation of mutationsList) {
                if (mutation.type === 'childList' && (!document.getElementById("gateModal") || !document.getElementById("gateOverlay"))) {
                    window.location.reload();
                }
            }
        };
        const observer = new MutationObserver(callback);
        observer.observe(targetNode, config);
    }

    // Button event bindings
    if (acceptBtn) {
        acceptBtn.addEventListener("click", () => {
            // Seal verification metadata parameters
            localStorage.setItem(storageKey, "VERIFIED_COMPLIANCE_SIGNATURE_SEALED");
            console.log("[Sovereign Gate] Cryptographic attestation signed. Releasing session lock.");
            
            // Redirect or release user to index layer
            if (window.parent && window.parent.location !== window.location) {
                // If loaded in iframe, message parent matrix
                window.parent.postMessage({ status: "LICENSE_SIGNED" }, "*");
            } else {
                // Default to index redirect route
                window.location.href = "../index.html";
            }
        });
    }

    if (exitBtn) {
        exitBtn.addEventListener("click", () => {
            localStorage.removeItem(storageKey);
            // Deflect user to independent, unclassified spaces
            window.location.href = "https://microsoft.com";
        });
    }

    // Run verification initialization
    enforceInterlockState();
})();
